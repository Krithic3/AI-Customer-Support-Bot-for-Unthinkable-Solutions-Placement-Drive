export type FAQ = { q: string; a: string; tags?: string[] }

export const faqs: FAQ[] = [
  {
    q: "How do I reset my password?",
    a: "Go to Settings → Account → Reset Password. You’ll receive an email with a reset link that expires in 15 minutes.",
    tags: ["account", "login", "password"],
  },
  {
    q: "What’s included in the Pro plan?",
    a: "Pro includes priority support, 10 team seats, advanced analytics, and 10,000 monthly tasks.",
    tags: ["billing", "pricing", "plans"],
  },
  {
    q: "How do I cancel my subscription?",
    a: "Open Billing → Manage Subscription → Cancel. Your access remains until the end of the current billing cycle.",
    tags: ["billing", "subscription", "cancel"],
  },
  {
    q: "Do you support SSO?",
    a: "Yes, SAML SSO is available on Enterprise. Contact sales for setup instructions.",
    tags: ["security", "sso", "enterprise"],
  },
  {
    q: "Where can I view my invoices?",
    a: "Invoices are available under Billing → Invoices. You can download PDFs for each month.",
    tags: ["billing", "invoices", "receipts"],
  },
  {
    q: "Is there an API?",
    a: "Yes, our REST API is documented at https://api.example.com/docs with examples and SDKs.",
    tags: ["api", "developer", "docs"],
  },
  // Account & Login
  {
    q: "How do I create an account?",
    a: "Click Sign Up on the top right, enter your email and a strong password, then verify your email to activate the account.",
    tags: ["account", "signup", "registration"],
  },
  {
    q: "I didn’t receive the verification email",
    a: "Check spam/junk folders, add no-reply@yourdomain.com to your contacts, then click Resend Verification from the banner on your dashboard.",
    tags: ["account", "verification", "email"],
  },
  {
    q: "How do I change my email address?",
    a: "Go to Settings → Account → Email, enter the new address, and confirm via the verification link we send.",
    tags: ["account", "email", "change"],
  },
  {
    q: "How do I change my username?",
    a: "Open Settings → Profile → Username. Usernames must be unique and 3–30 characters.",
    tags: ["account", "profile", "username"],
  },
  {
    q: "How do I enable two-factor authentication (2FA/MFA)?",
    a: "Go to Settings → Security → Two-Factor and follow the steps with an authenticator app. Save your backup codes in a secure place.",
    tags: ["security", "mfa", "2fa"],
  },
  {
    q: "I lost access to my authenticator app",
    a: "Use your backup codes. If unavailable, contact support and be prepared to verify your identity to recover access.",
    tags: ["security", "mfa", "recovery"],
  },
  {
    q: "How do I delete my account?",
    a: "Settings → Privacy → Delete Account will guide you through confirmation. This is permanent and removes your data after a grace period.",
    tags: ["privacy", "account", "delete"],
  },
  {
    q: "How do I export my data?",
    a: "Go to Settings → Privacy → Export Data to request a machine-readable export. We’ll email you when it’s ready.",
    tags: ["privacy", "export", "gdpr", "ccpa"],
  },

  // Billing & Subscriptions
  {
    q: "Is there a free trial?",
    a: "Yes, we offer a 14-day free trial on Starter and Pro plans. No commitment—cancel anytime during the trial.",
    tags: ["billing", "trial", "plans"],
  },
  {
    q: "How do I upgrade or downgrade my plan?",
    a: "Visit Billing → Plans and select the new plan. Changes take effect immediately and charges are prorated.",
    tags: ["billing", "plans", "upgrade", "downgrade"],
  },
  {
    q: "How do I update my payment method?",
    a: "Billing → Payment Methods → Add New, then set it as default. Existing subscriptions will use the new default on the next charge.",
    tags: ["billing", "payment", "card"],
  },
  {
    q: "My payment failed. What should I do?",
    a: "Update your card details and ensure sufficient funds. We’ll automatically retry over the next few days per our dunning schedule.",
    tags: ["billing", "payment", "failed"],
  },
  {
    q: "Do you offer refunds?",
    a: "We provide refunds for accidental charges within 7 days and case-by-case for service issues. Contact support with your invoice number.",
    tags: ["billing", "refund", "invoices"],
  },
  {
    q: "How do coupons/discounts work?",
    a: "Enter a valid coupon on the checkout page. Coupons apply to future invoices unless stated otherwise.",
    tags: ["billing", "coupon", "discount"],
  },
  {
    q: "How do I add my tax/VAT ID?",
    a: "Go to Billing → Billing Details and add your VAT or tax ID. It will appear on future invoices.",
    tags: ["billing", "tax", "vat"],
  },
  {
    q: "How do I reactivate a canceled subscription?",
    a: "Visit Billing → Manage Subscription → Reactivate. Your plan benefits will resume immediately.",
    tags: ["billing", "subscription", "reactivate"],
  },
  {
    q: "What is your refund policy?",
    a: "We offer refunds for accidental or duplicate charges within 7 days and case-by-case refunds for service issues. Physical items can be returned within 30 days in original condition for a refund once received/inspected. Digital goods are typically non-refundable unless required by local law or in cases of proven technical issues. For any refund, please include your invoice number and order ID.",
    tags: ["billing", "refund", "policy", "returns", "digital", "orders"],
  },
  {
    q: "How do I request a refund for a subscription charge?",
    a: "Go to Billing → Invoices, open the relevant invoice, and click Request Refund. Include a brief reason (e.g., accidental purchase, duplicate charge). Our team reviews requests within 2–3 business days. Approved refunds are issued to the original payment method and may take 5–10 business days to post depending on your bank.",
    tags: ["billing", "refund", "subscription", "invoices", "chargeback"],
  },
  {
    q: "Can I get a refund for digital products?",
    a: "Digital products and downloads are generally non-refundable once accessed. If you experienced a technical issue preventing use, contact support with error details and we will assist or issue a refund where appropriate and allowed by local law.",
    tags: ["billing", "refund", "digital", "downloads", "policy"],
  },

  // Orders, Shipping, Returns (if applicable)
  {
    q: "Where is my order? How do I track it?",
    a: "Use the tracking link in your shipment email or check Orders → Order Details in your account.",
    tags: ["orders", "shipping", "tracking"],
  },
  {
    q: "Can I change my shipping address after ordering?",
    a: "If the order isn’t shipped, update it from Orders → Order Details. Otherwise, contact the carrier after you get a tracking number.",
    tags: ["orders", "shipping", "address"],
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship to most countries. Shipping costs and times vary and are shown at checkout.",
    tags: ["orders", "shipping", "international"],
  },
  {
    q: "What’s your return policy?",
    a: "Returns are accepted within 30 days in original condition. Start at Orders → Return/Exchange, and use the provided label.",
    tags: ["returns", "refund", "exchange"],
  },
  {
    q: "My item arrived damaged",
    a: "Start a return or replacement from Orders → Return/Exchange and attach photos. We’ll prioritize damaged item resolutions.",
    tags: ["returns", "damaged", "replacement"],
  },
  {
    q: "How do I cancel my order?",
    a: "If not shipped, cancel from Orders → Order Details → Cancel Order. If shipped, start a return after delivery.",
    tags: ["orders", "cancel", "returns"],
  },

  // Technical & Product
  {
    q: "The app isn’t loading or shows a blank screen",
    a: "Try a hard refresh, clear cache/cookies, and ensure your browser is up to date. Then try again in a private window.",
    tags: ["technical", "browser", "cache"],
  },
  {
    q: "Which browsers do you support?",
    a: "We support the latest two major versions of Chrome, Safari, Edge, and Firefox.",
    tags: ["technical", "browsers", "support"],
  },
  {
    q: "Is there a mobile app?",
    a: "We offer iOS and Android apps. Search for our brand in the App Store or Google Play.",
    tags: ["technical", "mobile", "apps"],
  },
  {
    q: "How do I manage notifications?",
    a: "Go to Settings → Notifications to choose email, push, or in-app alerts per event.",
    tags: ["notifications", "settings", "preferences"],
  },
  {
    q: "How do I change language or timezone?",
    a: "Settings → Preferences lets you set language, date/time format, and timezone.",
    tags: ["settings", "language", "timezone"],
  },

  // API, Webhooks, Developer
  {
    q: "Where can I create API keys?",
    a: "Go to Developer → API Keys → Create Key. Store it securely and follow least-privilege practices.",
    tags: ["api", "keys", "developer"],
  },
  {
    q: "What are your API rate limits?",
    a: "Default rate limit is 60 requests per minute per key. Enterprise tiers can request higher limits.",
    tags: ["api", "ratelimits", "limits"],
  },
  {
    q: "How do I set up webhooks?",
    a: "Developer → Webhooks → Create Endpoint, choose events, and verify signatures with the secret we provide.",
    tags: ["api", "webhooks", "developer"],
  },
  {
    q: "How do I rotate an API key safely?",
    a: "Create a new key, update your services to use it, then revoke the old key. Avoid downtime by overlapping briefly.",
    tags: ["api", "keys", "security"],
  },

  // Security & Compliance
  {
    q: "What security measures do you have in place?",
    a: "We follow industry best practices including encryption at rest/in-transit, regular audits, and access controls. See our Security page for details.",
    tags: ["security", "encryption", "audits"],
  },
  {
    q: "Do you support SCIM for user provisioning?",
    a: "Yes, SCIM is available on Enterprise. Contact sales to enable and receive setup documentation.",
    tags: ["security", "scim", "enterprise"],
  },
  {
    q: "How do I report a security vulnerability?",
    a: "Email security@yourdomain.com with details. We run a responsible disclosure program and will follow up promptly.",
    tags: ["security", "vulnerability", "bug-bounty"],
  },
  {
    q: "How do I submit a GDPR or CCPA request?",
    a: "Use Settings → Privacy → Data Request to submit access, correction, or deletion requests. We’ll respond within legal timelines.",
    tags: ["privacy", "gdpr", "ccpa"],
  },
  {
    q: "Where is my data stored?",
    a: "Data is stored in regional data centers in the US and EU. Enterprise customers can request specific residency.",
    tags: ["privacy", "residency", "compliance"],
  },

  // Status, Uptime, Support
  {
    q: "Where can I check system status and incidents?",
    a: "Visit our Status Page at https://status.example.com for real-time uptime and incident updates.",
    tags: ["status", "uptime", "incidents"],
  },
  {
    q: "Do you have an SLA?",
    a: "Business and Enterprise plans include SLAs. Review the SLA document on our Pricing or Legal pages.",
    tags: ["sla", "uptime", "enterprise"],
  },
  {
    q: "What are your support hours?",
    a: "Standard support is available Mon–Fri, 9am–6pm in your region. Pro/Enterprise includes 24/7 critical incident support.",
    tags: ["support", "hours", "contact"],
  },
  {
    q: "How do I contact support or escalate an issue?",
    a: "Use Help → Contact Support from the app. Include steps to reproduce and relevant screenshots. We escalate urgent issues automatically.",
    tags: ["support", "escalation", "contact"],
  },
  {
    q: "How do I submit a feature request?",
    a: "Open Help → Feedback → Feature Request. Our product team reviews requests weekly.",
    tags: ["feedback", "feature", "product"],
  },
  {
    q: "How do I report a bug?",
    a: "Use Help → Feedback → Bug Report and include console logs or errors if possible.",
    tags: ["feedback", "bug", "quality"],
  },

  // More account/billing specifics
  {
    q: "Can I pause my subscription instead of canceling?",
    a: "Yes, you can pause for up to 3 months from Billing → Manage Subscription. Billing resumes automatically unless you unpause earlier.",
    tags: ["billing", "pause", "subscription"],
  },
  {
    q: "Can multiple team members use one account?",
    a: "We recommend individual accounts and team seats for security and auditability. Sharing a single login isn’t supported.",
    tags: ["account", "teams", "security"],
  },
  {
    q: "Why am I being charged sales tax?",
    a: "We collect applicable taxes based on your billing address and local regulations.",
    tags: ["billing", "tax", "compliance"],
  },
  {
    q: "Can I get a quote or purchase order (PO)?",
    a: "Yes, sales can generate quotes and accept POs for Business and Enterprise plans.",
    tags: ["billing", "sales", "quote"],
  },
  {
    q: "How do I change the account owner?",
    a: "The current owner can transfer ownership from Settings → Team → Transfer Ownership.",
    tags: ["account", "ownership", "teams"],
  },
]

// End of appended FAQs
