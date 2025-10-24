import type { NextRequest } from "next/server"
import { redis } from "@/lib/redis"
import { faqs } from "@/data/faqs"

type HistMsg = { role: "user" | "assistant"; content: string }

const SESSION_TTL_SECONDS = 60 * 60 * 12 // 12 hours
const MAX_HISTORY = 50

function stem(s: string) {
  return s.replace(/(ing|ed|ly|es|s)$/i, "").replace(/[^a-z0-9]/gi, "").toLowerCase()
}

const ALIASES: Record<string, string> = {
  pwd: "password",
  pass: "password",
  signin: "login",
  login: "login",
  saml: "sso",
  single: "sso",
  sso: "sso",
  invoice: "invoices",
  receipt: "invoices",
  receipts: "invoices",
  bill: "billing",
  price: "pricing",
  plan: "plans",
  cancel: "cancel",
  terminate: "cancel",
  end: "cancel",
  pro: "pro",
  professional: "pro",
  vat: "tax",
  twofactor: "mfa",
  multifactor: "mfa",
  "2fa": "mfa",
  authenticator: "mfa",
  refund: "refund",
  refunds: "refund",
  return: "returns",
  returns: "returns",
  ship: "shipping",
  shipped: "shipping",
  tracking: "tracking",
  webhook: "webhooks",
  webhooks: "webhooks",
  ratelimit: "ratelimits",
  ratelimits: "ratelimits",
  delete: "delete",
  export: "export",
  outage: "status",
  downtime: "status",
  uptime: "status",
  sla: "sla",
}

function canonicalizeToken(t: string) {
  const s = stem(t)
  return ALIASES[s] ?? s
}

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map(canonicalizeToken)
}

function bigrams(tokens: string[]) {
  const out: string[] = []
  for (let i = 0; i < tokens.length - 1; i++) out.push(tokens[i] + " " + tokens[i + 1])
  return out
}

function scoreFaqBetter(query: string, faq: { q: string; a: string; tags?: string[] }) {
  const qTokens = tokenize(query)
  const fText = [faq.q, ...(faq.tags ?? [])].join(" ")
  const fTokens = tokenize(fText)

  const qSet = new Set(qTokens)
  const fSet = new Set(fTokens)

  let overlap = 0
  for (const t of qSet) if (fSet.has(t)) overlap++
  const union = qSet.size + fSet.size - overlap
  let score = union > 0 ? overlap / union : 0

  const qB = new Set(bigrams(qTokens))
  const fB = new Set(bigrams(fTokens))
  let biOverlap = 0
  for (const b of qB) if (fB.has(b)) biOverlap++
  if (biOverlap > 0) score += Math.min(0.2, 0.1 * biOverlap)

  const tagHit = (faq.tags ?? []).some((t) => qSet.has(canonicalizeToken(t)))
  if (tagHit) score += 0.05

  const lc = query.toLowerCase()
  if (lc.includes("reset password")) score += 0.25
  if (lc.includes("cancel subscription")) score += 0.2
  if (lc.includes("sso") || lc.includes("saml")) score += 0.15
  if (lc.includes("invoice")) score += 0.12
  if (lc.includes("api")) score += 0.1
  if (lc.includes("refund")) score += 0.18
  if (lc.includes("return")) score += 0.16
  if (lc.includes("shipping") || lc.includes("tracking")) score += 0.12
  if (lc.includes("change email")) score += 0.12
  if (lc.includes("update payment") || lc.includes("payment method")) score += 0.12
  if (lc.includes("webhook")) score += 0.12
  if (lc.includes("rate limit")) score += 0.1
  if (lc.includes("delete account")) score += 0.18
  if (lc.includes("export data")) score += 0.14
  if (lc.includes("gdpr") || lc.includes("ccpa")) score += 0.14
  if (lc.includes("status") || lc.includes("outage") || lc.includes("downtime")) score += 0.12
  if (lc.includes("mfa") || lc.includes("2fa") || lc.includes("two-factor")) score += 0.15

  return score
}

function topFaqsBetter(query: string, k = 3) {
  return faqs
    .map((f) => ({ f, s: scoreFaqBetter(query, f) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, k)
}

function buildEffectiveQuery(history: HistMsg[], current: string) {
  const tokenCount = tokenize(current).length
  const isShortFollowUp = tokenCount <= 5 || /\b(it|that|where|how|this)\b/i.test(current)
  if (!isShortFollowUp) return current

  const lastUser = [...history].reverse().find((m) => m.role === "user")
  return lastUser ? `${lastUser.content} ${current}` : current
}

function buildReplyFromCandidates(
  message: string,
  candidates: { f: { q: string; a: string; tags?: string[] }; s: number }[],
) {
  const best = candidates[0]
  const second = candidates[1]
  const bestScore = best?.s ?? 0

  if (best && bestScore >= 0.3) return best.f.a
  if (best && second && bestScore >= 0.18) {
    return [
      "Here’s what I can share:",
      `1) ${best.f.a}`,
      `2) ${second.f.a}`,
      candidates[2] ? `3) ${candidates[2].f.a}` : undefined,
      "",
      "If this doesn’t fully answer your question, I can escalate to a human agent.",
    ]
      .filter(Boolean)
      .join("\n")
  }

  const suggestions = candidates.filter((c) => c.s > 0.05).map((c) => `• ${c.f.q}`).join("\n")
  return [
    "I’m not fully confident from our knowledge base.",
    suggestions ? `Related topics I found:\n${suggestions}` : undefined,
    "Would you like me to escalate this to a human agent?",
  ]
    .filter(Boolean)
    .join("\n")
}

const GENERIC_REPLIES = [
  "Hello! How can I help you today?",
  "Hi there! Ask me anything about our product.",
  "Greetings! I'm here to assist you.",
  "Hey! What would you like to know today?",
]

export async function POST(req: NextRequest) {
  const { sessionId, message } = (await req.json()) as { sessionId?: string; message?: string }
  if (!sessionId || !message) {
    return new Response(JSON.stringify({ error: "sessionId and message are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  const key = `support:session:${sessionId}:messages`

  let history: HistMsg[] = []
  try {
    const raw = await redis.lrange<string>(key, 0, -1)
    history = (raw ?? []).map((r) => JSON.parse(r) as HistMsg)
  } catch (e) {
    console.log("[v0] Redis lrange failed:", (e as Error)?.message)
    history = []
  }

  const effectiveQuery = buildEffectiveQuery(history, message)
  const candidates = topFaqsBetter(effectiveQuery, 3)
  const bestScore = candidates[0]?.s ?? 0

  let replyText: string
  let ticketId: string | undefined
  let shouldEscalate: boolean

  if (bestScore < 0.15) {
    // low confidence → generic response
    replyText = GENERIC_REPLIES[Math.floor(Math.random() * GENERIC_REPLIES.length)]
    shouldEscalate = false
    ticketId = undefined
  } else {
    replyText = buildReplyFromCandidates(message, candidates)
    shouldEscalate = bestScore < 0.15
    ticketId = shouldEscalate ? `HLP-${Date.now().toString().slice(-6)}` : undefined
  }

  // Persist messages
  try {
    await redis.rpush(key, JSON.stringify({ role: "user", content: message } as HistMsg))
    await redis.rpush(key, JSON.stringify({ role: "assistant", content: replyText } as HistMsg))
    await redis.ltrim(key, -MAX_HISTORY, -1)
    await redis.expire(key, SESSION_TTL_SECONDS)
  } catch (e) {
    console.log("[v0] Redis write failed:", (e as Error)?.message)
  }

  return new Response(JSON.stringify({ reply: replyText, escalate: shouldEscalate, ticketId }), {
    headers: { "Content-Type": "application/json" },
  })
}
