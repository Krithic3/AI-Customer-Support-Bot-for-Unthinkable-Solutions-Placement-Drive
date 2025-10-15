# 🤖 FAQster AI - Customer Support Bot

An AI-powered customer support assistant that answers FAQs, maintains context, and escalates complex queries intelligently.

## 🚀 Project Overview
FAQster AI is built as part of the Unthinkable Assignment to demonstrate an AI-driven customer support system using Next.js and Vercel AI SDK.

The bot provides:

- ✅ Context-aware FAQ responses  
- 💾 Session memory using Upstash KV  
- ⚙️ Smart escalation when confidence is low  
- 💬 Simple and clean chat interface  

---

## 🧠 Tech Stack
- Next.js (App Router)  
- React  
- Vercel AI SDK  
- Upstash KV (for storing session data)  
- Tailwind CSS  

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Krithic3/AI-Customer-Support-Bot-for-Unthinkable-Solutions-Placement-Drive.git
cd AI-Customer-Support-Bot-for-Unthinkable-Solutions-Placement-Drive



Install dependencies:

npm install


Run the development server:

npm run dev

Open your browser at http://localhost:3000 to interact with FAQster AI.



## Usage

Type your query in the chat interface

FAQster AI will answer FAQs from the dataset

If the bot cannot answer, it simulates escalation to human support

Multi-turn conversations are remembered for context

---

## Prompts Documentation :

1. FAQ Response Prompt

You are FAQster AI, a customer support assistant. Answer user queries based on the FAQs dataset. If not available, politely ask for clarification or escalate.

2. Escalation Prompt

Inform the user that FAQster AI will escalate the query to human support. Summarize the conversation so far.

3. Context Retention Prompt

Maintain conversation memory to provide coherent multi-turn responses.


Demo Video Link :


