'use client';

import { useState } from 'react';
import IntentionModal from './IntentionModal';

type Props = {
  id: number;
  title: string;
};

export default function JournalBookCard({ id, title }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-lg border bg-white shadow hover:shadow-md transition p-4"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">Tap to explore</p>
      </div>
      <IntentionModal open={open} onClose={() => setOpen(false)} journalId={id} />
    </>
  );
}
