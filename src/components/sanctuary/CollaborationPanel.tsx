'use client';

import { useState } from 'react';

type Props = {
  journalId: string;
  open: boolean;
};

const suggestions = [
  { id: 1, label: 'Write a fantasy scene' },
  { id: 2, label: 'Create a date night plan' },
  { id: 3, label: 'Draft an apology letter' },
];

export default function CollaborationPanel({ journalId, open }: Props) {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const [draft, setDraft] = useState('');

  const handleSuggestion = (label: string) => {
    setSelectedSuggestion(label);
    // Simulate AI response
    setDraft(`Here’s a thoughtful response for: ${label}`);
  };

  const handleSave = () => {
    alert('Saved to Playbooks!');
    setSelectedSuggestion(null);
    setDraft('');
  };

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white border-l shadow-lg p-6 transform transition-transform duration-300 z-40 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Playbook Suggestions</h2>

      {!selectedSuggestion ? (
        <div className="space-y-3">
          {suggestions.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSuggestion(s.label)}
              className="w-full bg-gray-100 hover:bg-gray-200 rounded px-4 py-2 text-left text-sm transition"
            >
              {s.label}
            </button>
          ))}
        </div>
      ) : (
        <>
          <p className="text-sm mb-2 text-gray-700">Suggestion: <strong>{selectedSuggestion}</strong></p>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="w-full h-40 border rounded p-2 text-sm"
          />
          <button
            onClick={handleSave}
            className="mt-4 bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
          >
            Save to Playbooks
          </button>
        </>
      )}
    </aside>
  );
}
