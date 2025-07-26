// src/components/ui/SidebarHistory.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  fetchJournalEntries,
  JournalEntry,
} from '@/lib/entryService';

interface SidebarHistoryProps {
  topicId: string;
}

export const SidebarHistory: React.FC<SidebarHistoryProps> = ({ topicId }) => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    fetchJournalEntries(topicId).then(setEntries).catch(console.error);
  }, [topicId]);

  return (
    <aside className="w-full p-4">
      <h2 className="text-lg font-semibold mb-2">History</h2>
      <ul className="space-y-1">
        {entries.map((e) => (
          <li key={e.id}>
            <Link
              href={`/studio/${topicId}?entry=${e.id}`}
              className="text-blue-600 hover:underline text-sm"
            >
              {new Date(e.created_at).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
