// src/app/studio/[topicId]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { addJournalEntry } from "@/lib/entryService";

export default function PrivateAIStudioPage() {
  const { topicId } = useParams();
  const router = useRouter();
  const [messages, setMessages] = useState([
    { role: "ai", text: "Welcome back! What’s on your mind today?" },
    { role: "user", text: "I’ve been struggling to communicate clearly with Aaron." },
    { role: "ai", text: "Let’s explore that together. Can you share a recent moment that felt difficult?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
  };

  const handleAddToJournal = async (text: string) => {
    const journalId = topicId as string;
    const entry = await addJournalEntry(journalId, "marie", text);

    if (entry) {
      toast.success("Added to shared journal!", {
        description: `"${text.slice(0, 40)}..."`,
        action: {
          label: "View Journal",
          onClick: () => router.push(`/sanctuary/${journalId}`),
        },
      });
    } else {
      toast.error("Failed to save journal entry.");
    }
  };

  return (
    <>
      <Toaster position="bottom-right" richColors />

      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r p-4 hidden md:block">
          <h2 className="text-lg font-semibold mb-4">💬 Conversations</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Session 1 - May 12</li>
            <li>Session 2 - June 1</li>
            <li className="font-bold text-black">Current Session</li>
          </ul>
        </aside>

        {/* Chat Area */}
        <main className="flex-1 flex flex-col h-full">
          <header className="p-6 border-b bg-white shadow-sm">
            <h1 className="text-2xl font-bold">🧠 Private AI Studio</h1>
            <p className="text-sm text-gray-500 mt-1 capitalize">Topic: {topicId}</p>
          </header>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-lg px-4 py-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white self-end ml-auto"
                    : "bg-white border self-start mr-auto"
                }`}
              >
                <p>{msg.text}</p>
                {msg.role === "ai" && (
                  <button
                    onClick={() => handleAddToJournal(msg.text)}
                    className="mt-2 text-sm underline text-blue-500 hover:text-blue-700"
                  >
                    ➕ Add to Shared Journal
                  </button>
                )}
              </div>
            ))}
          </div>

          <footer className="p-4 bg-white border-t flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded px-4 py-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </footer>
        </main>
      </div>
    </>
  );
}
