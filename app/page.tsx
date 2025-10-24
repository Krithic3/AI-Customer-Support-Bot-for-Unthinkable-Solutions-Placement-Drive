"use client";
import * as React from "react"
import ChatHelpline from "@/components/chat-helpline"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const commonFaqs = [
  "How to reset my password?",
  "How to cancel my subscription?",
  "How to track my order?",
  "How to update payment method?",
  "How to export data?",
]

export default function Home() {
  const [stats, setStats] = React.useState({ sessions: 154, tickets: 23, answered: 467 })

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b shadow-sm">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/placeholder-logo.svg.jpg" alt="AI Support" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight text-indigo-700 dark:text-indigo-400">
              FAQster AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Theme toggle now self-handles theme state */}
            <ThemeToggle />
            <a href="#features">
              <Button variant="ghost">Learn More</Button>
            </a>
            <a href="#demo">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 dark:text-indigo-300 mb-6">
          Your AI-Powered Support Assistant
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Get instant answers to FAQs and escalate to a human agent when needed. Experience seamless AI customer support.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#demo">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg">
              Get Started
            </Button>
          </a>
          <a href="#features">
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-gray-800 px-6 py-3 text-lg"
            >
              Learn More
            </Button>
          </a>
        </div>
      </section>

      {/* Features + Stats */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <strong>FAQ Intelligence:</strong> Ground responses with your FAQs for fast, helpful answers.
            </li>
            <li className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <strong>Session Memory:</strong> Retains context to keep conversations coherent across turns.
            </li>
            <li className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <strong>Smart Escalation:</strong> Escalates to a human or creates a ticket when confidence is low.
            </li>
          </ul>
        </div>

        {/* Stats + Common FAQs */}
        <div className="space-y-6">
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-indigo-600 text-white p-4 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold">{stats.sessions}</div>
              <div className="text-sm">Sessions</div>
            </div>
            <div className="bg-amber-500 text-white p-4 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold">{stats.tickets}</div>
              <div className="text-sm">Tickets</div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold">{stats.answered}</div>
              <div className="text-sm">Answered Questions</div>
            </div>
          </div>

          {/* Common FAQs */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-300">Common Questions</h3>
            <div className="flex flex-col gap-2">
              {commonFaqs.map((q, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="text-left text-sm border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700"
                  onClick={() => {
                    const chatInput = document.querySelector<HTMLTextAreaElement>("#chat-input")
                    if (chatInput) chatInput.value = q
                    chatInput?.focus()
                  }}
                >
                  {q}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section id="demo" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-8 text-center">
          Try the AI Helpline
        </h2>
        <ChatHelpline commonFaqs={commonFaqs} />
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Built with the Vercel AI SDK and Upstash Redis for session management.
        </div>
      </footer>
    </main>
  )
}
