'use client';

import { useState } from 'react';
import CollaborationPanel from '@/components/sanctuary/CollaborationPanel';

type Entry = {
  id: number;
  author: 'Marie' | 'Aaron';
  content: string;
};

const mockEntries: Entry[] = [
  {
    id: 1,
    author: 'Marie',
    content: 'I’ve been thinking about how we connect during the week.',
  },
  {
    id: 2,
    author: 'Aaron',
    content: 'That’s been on my mind too. Let’s make space for it.',
  },
  {
    id: 3,
    author: 'Marie',
    content: 'Maybe even schedule it intentionally?',
  },
];

export default function JournalPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen">
      {/* Main Journal Entries Section */}
      <div className="flex-1 p-6 space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Shared Sanctuary</h1>
        {mockEntries.map((entry) => (
          <div
            key={entry.id}
            className={`max-w-xl p-4 rounded shadow-sm ${
              entry.author === 'Marie'
                ? 'bg-blue-100 ml-auto text-right'
                : 'bg-gray-100 mr-auto text-left'
            }`}
          >
            <p className="text-sm text-gray-700">{entry.content}</p>
            <p className="text-xs mt-1 text-gray-500">{entry.author}</p>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-4 right-4 z-50 bg-white shadow p-2 rounded hover:bg-gray-100 transition"
      >
        {open ? 'Close Panel' : 'Open Panel'}
      </button>

      {/* Slide-Out Collaboration Panel */}
      <CollaborationPanel open={open} />
    </div>
  );
}
