// src/app/features/assistant/page.tsx
"use client";

import { useState } from "react";

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Welcome to your AI Assistant. Ask me anything." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="p-6 border-b bg-white shadow">
        <h1 className="text-2xl font-bold">🎙️ Your AI Assistant</h1>
        <p className="text-sm text-gray-500 mt-1">
          Free-form exploration — no journal required.
        </p>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-lg px-4 py-3 rounded-lg ${
              msg.role === "user"
                ? "bg-indigo-600 text-white self-end ml-auto"
                : "bg-white border self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </main>

      <footer className="p-4 bg-white border-t flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-4 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your AI anything..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Send
        </button>
      </footer>
    </div>
  );
}
