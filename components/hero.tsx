import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <p className="text-sm text-accent-foreground/80">AI Support Assistant</p>
        <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Faster answers. Happier customers.
        </h1>
        <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
          Simulate customer support with an AI that understands your FAQs, remembers context, and knows when to escalate
          — all via simple REST APIs.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Button size="lg">Try the Demo</Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#features">Learn More</a>
          </Button>
        </div>
      </div>
      <div className="mt-8 w-full md:mt-0 md:max-w-sm">
        <div className="rounded-xl border p-4 shadow-sm hover-elevate">
          <div className="rounded-lg bg-secondary p-3">
            <span className="text-sm">Quick Setup</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>• REST endpoints for chat and sessions</li>
            <li>• AI SDK integration for responses</li>
            <li>• Redis-backed session memory</li>
            <li>• Escalation simulation on low confidence</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
