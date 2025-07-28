"use client";

import { format } from 'date-fns';

interface EntryCardProps {
  entry: {
    id: string;
    content: string;
    created_at: string;
    author: string;
  };
}

export default function EntryCard({ entry }: EntryCardProps) {
  return (
    <div className="p-4 border rounded mb-2">
      <p className="text-sm text-gray-600">{entry.author} — {format(new Date(entry.created_at), 'PPP')}</p>
      <p>{entry.content}</p>
    </div>
  );
}
