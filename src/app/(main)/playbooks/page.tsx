// src/app/(main)/playbooks/page.tsx
"use client";

import PlaybookCard from "../playbooks/_components/playbookcard";

const mockPlaybooks = [
  {
    journal: "The Relationship Log",
    title: "Write a fantasy scene",
    content:
      "You and Aaron meet in a dreamlike world, where you explore your connection through adventure and grace...",
  },
  {
    journal: "The Relationship Log",
    title: "Create a date night plan",
    content:
      "Start with a shared cooking session, then a playlist of songs that tell your story. End the night with quiet reflection.",
  },
];

export default function PlaybooksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">📖 Playbooks Archive</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">The Relationship Log</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockPlaybooks.map((pb, idx) => (
              <PlaybookCard key={idx} {...pb} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
