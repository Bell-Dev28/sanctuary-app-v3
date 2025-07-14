// src/app/page.tsx
"use client";

import { useState } from "react";
import JournalBook from "@/components/JournalBook";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/shared/PageTransition";

const journals = [
  { id: "relationship", title: "The Relationship Log", emoji: "💞" },
  { id: "growth", title: "Personal Growth Notes", emoji: "🌱" },
  { id: "dreams", title: "Dream Journal", emoji: "🌙" },
];

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <PageTransition>
      <h1 className="text-3xl font-bold mb-8">📚 Shared Library</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {journals.map((journal, idx) => (
          <motion.div
            key={journal.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <JournalBook
              id={journal.id}
              title={journal.title}
              emoji={journal.emoji}
              onClick={() => setSelected(journal.id)}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-lg font-semibold mb-4">What would you like to do?</h2>
              <div className="space-y-2">
                <a
                  href={`/studio/${selected}`}
                  className="block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Explore with AI
                </a>
                <a
                  href={`/sanctuary/${selected}`}
                  className="block w-full bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200"
                >
                  View Journal
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="block w-full mt-4 text-sm text-gray-500 underline"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
