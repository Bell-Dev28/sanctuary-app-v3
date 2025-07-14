// src/app/sanctuary/[journalId]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchJournalEntries, JournalEntry } from "@/lib/entryService";
import { savePlaybook } from "@/lib/playbookService";

export default function SharedSanctuaryPage() {
  const { journalId } = useParams();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showPanel, setShowPanel] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedPlaybook, setSelectedPlaybook] = useState<string>("");

  useEffect(() => {
    if (typeof journalId === "string") {
      fetchJournalEntries(journalId).then(setEntries);
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
    <div className="flex h-full">
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
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={`max-w-xl px-4 py-3 rounded-lg shadow-sm ${
                entry.author === "marie"
                  ? "bg-blue-100 self-start"
                  : "bg-pink-100 self-end ml-auto"
              }`}
            >
              <div className="text-sm text-gray-500 mb-1">
                {entry.author} – {new Date(entry.created_at).toLocaleDateString()}
              </div>
              <div className="text-gray-800">{entry.text}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Collaboration Panel */}
      {showPanel && (
        <aside className="w-96 bg-white border-l p-6 shadow-md flex flex-col">
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
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(sugg)}
                  className="block w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-left text-sm"
                >
                  {sugg}
                </button>
              ))}
            </div>
          )}

          {selectedPlaybook && (
            <div className="flex flex-col space-y-3">
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
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
