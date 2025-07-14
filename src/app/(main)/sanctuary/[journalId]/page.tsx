// src/app/sanctuary/[journalId]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchJournalEntries, JournalEntry } from "@/lib/entryService";
import { savePlaybook } from "@/lib/playbookService";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/shared/PageTransition";
import Skeleton from "@/components/shared/skeleton";
import { userProfiles } from "@/lib/userProfiles";

export default function SharedSanctuaryPage() {
  const { journalId } = useParams();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedPlaybook, setSelectedPlaybook] = useState<string>("");

  useEffect(() => {
    if (typeof journalId === "string") {
      setIsLoading(true);
      fetchJournalEntries(journalId).then((data) => {
        setEntries(data);
        setIsLoading(false);
      });
    }
  }, [journalId]);

  const generateSuggestions = () => {
    setSuggestions([
      "Write a fantasy scene",
      "Create a date night plan",
      "Reflect on a core value",
    ]);
  };

  const handleSuggestionClick = (text: string) => {
    const generated = `Playbook: ${text}\n\n[Generated content for: ${text} based on your journal.]`;
    setSelectedPlaybook(generated);
  };

  const handleSave = async () => {
    const title = selectedPlaybook.split("\n")[0].replace("Playbook: ", "").trim();
    const content = selectedPlaybook;
    const id = journalId as string;

    const result = await savePlaybook(id, title, content);

    if (result) {
      alert("✅ Playbook saved to archive!");
      setSelectedPlaybook("");
      setSuggestions([]);
    } else {
      alert("❌ Failed to save playbook.");
    }
  };

  return (
    <PageTransition>
      <div className="flex h-full relative">
        <main className="flex-1 p-8 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">🕊️ Shared Sanctuary</h1>
              <p className="text-sm text-gray-500 capitalize">Journal: {journalId}</p>
            </div>
            <button
              onClick={() => setShowPanel(!showPanel)}
              className="text-sm text-blue-600 underline"
            >
              {showPanel ? "Close Panel" : "Open Collaboration Panel"}
            </button>
          </div>

          <div className="space-y-6">
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, idx) => (
                  <div key={idx} className="max-w-xl space-y-2">
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                ))}
              </div>
            ) : (
              entries.map((entry) => {
                const profile = userProfiles[entry.author as "marie" | "aaron"];
                return (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex gap-3 max-w-xl items-start ${
                      entry.author === "marie" ? "" : "ml-auto flex-row-reverse"
                    }`}
                  >
                    <img
                      src={profile.avatar}
                      alt={`${profile.name} avatar`}
                      className="w-10 h-10 rounded-full shadow"
                    />
                    <div className={`px-4 py-3 rounded-lg shadow-sm ${profile.color} flex-1`}>
                      <div className="text-sm text-gray-500 mb-1">
                        {profile.name} – {new Date(entry.created_at).toLocaleDateString()}
                      </div>
                      <div className="text-gray-800">{entry.text}</div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </main>

        <AnimatePresence>
          {showPanel && (
            <motion.aside
              key="collab-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="w-96 bg-white border-l p-6 shadow-md flex flex-col fixed right-0 top-0 bottom-0 z-30"
            >
              <h2 className="text-lg font-semibold mb-4">🧩 Collaboration Panel</h2>

              <button
                onClick={generateSuggestions}
                className="bg-blue-600 text-white py-2 px-4 rounded mb-4 hover:bg-blue-700"
              >
                Playbook Suggestions
              </button>

              {suggestions.length > 0 && (
                <div className="space-y-2 mb-4">
                  {suggestions.map((sugg, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleSuggestionClick(sugg)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="block w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left text-sm"
                    >
                      {sugg}
                    </motion.button>
                  ))}
                </div>
              )}

              {selectedPlaybook && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-3 mt-2"
                >
                  <textarea
                    value={selectedPlaybook}
                    onChange={(e) => setSelectedPlaybook(e.target.value)}
                    rows={10}
                    className="w-full border p-2 rounded text-sm"
                  />
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    ✅ Save to Playbooks
                  </button>
                </motion.div>
              )}
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
