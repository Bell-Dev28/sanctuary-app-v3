// src/app/studio/[topicId]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { addJournalEntry } from "@/lib/entryService";
import PageTransition from "@/components/shared/PageTransition";
import Skeleton from "@/components/shared/skeleton";
import { motion } from "framer-motion";

export default function PrivateAIStudioPage() {
  const { topicId } = useParams();
  const router = useRouter();
  const [messages, setMessages] = useState<
    { role: "ai" | "user"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMessages([
        { role: "ai", text: "Welcome back! What’s on your mind today?" },
        {
          role: "user",
          text: "I’ve been struggling to communicate clearly with Aaron.",
        },
        {
          role: "ai",
          text:
            "Let’s explore that together. Can you share a recent moment that felt difficult?",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

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

      <PageTransition>
        <div className="flex h-full">
          <aside className="w-64 bg-gray-100 border-r p-4 hidden md:block">
            <h2 className="text-lg font-semibold mb-4">💬 Conversations</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Session 1 - May 12</li>
              <li>Session 2 - June 1</li>
              <li className="font-bold text-black">Current Session</li>
            </ul>
          </aside>

          <main className="flex-1 flex flex-col h-full">
            <header className="p-6 border-b bg-white shadow-sm">
              <h1 className="text-2xl font-bold">🧠 Private AI Studio</h1>
              <p className="text-sm text-gray-500 mt-1 capitalize">
                Topic: {topicId}
              </p>
            </header>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {isLoading
                ? [...Array(3)].map((_, idx) => (
                    <div key={idx} className="max-w-lg space-y-2">
                      <Skeleton className="h-5 w-full" />
                    </div>
                  ))
                : messages.map((msg, idx) => {
                    const isUser = msg.role === "user";
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex gap-3 max-w-lg items-start ${
                          isUser ? "ml-auto flex-row-reverse" : ""
                        }`}
                      >
                        <img
                          src={
                            isUser
                              ? "https://i.pravatar.cc/150?u=marie"
                              : "https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
                          }
                          alt={isUser ? "Marie" : "AI"}
                          className="w-9 h-9 rounded-full shadow"
                        />
                        <div
                          className={`px-4 py-3 rounded-lg ${
                            isUser
                              ? "bg-blue-600 text-white"
                              : "bg-white border text-black"
                          }`}
                        >
                          <p>{msg.text}</p>
                          {!isUser && (
                            <button
                              onClick={() => handleAddToJournal(msg.text)}
                              className="mt-2 text-sm underline text-blue-500 hover:text-blue-700"
                            >
                              ➕ Add to Shared Journal
                            </button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
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
      </PageTransition>
    </>
  );
}
