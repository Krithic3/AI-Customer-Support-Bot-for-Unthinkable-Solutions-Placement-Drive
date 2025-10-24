"use client"

import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

type Message = { role: "user" | "assistant"; content: string }

const demoScript: Message[] = [
  { role: "user", content: "Hi, how do I reset my password?" },
  { role: "assistant", content: "Go to Settings → Security → Reset Password. I can send a link if you prefer." },
  { role: "user", content: "It says link expired." },
  {
    role: "assistant",
    content: "No problem — I’ve generated a new link. Also, would you like me to escalate if it fails?",
  },
]

export function ChatDemo() {
  const [index, setIndex] = useState(0)
  const current = demoScript[index]

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % demoScript.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  const bubbleClass = useMemo(
    () => (current.role === "user" ? "bg-secondary text-foreground" : "bg-primary text-primary-foreground"),
    [current],
  )

  return (
    <div className="grid gap-3">
      <div
        key={index}
        className={cn("w-fit max-w-[80%] rounded-2xl px-4 py-2 animate-in fade-in slide-in-from-bottom-1", bubbleClass)}
        aria-live="polite"
      >
        <span className="text-sm">{current.content}</span>
      </div>
      <div className="text-xs text-muted-foreground">Demo loops through a short conversation.</div>
    </div>
  )
}
