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
        className="group perspective"
      >
        <div className="relative w-full h-40 rounded-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border dark:border-gray-700 shadow-lg transform-gpu transition-all duration-300 group-hover:rotate-x-2 group-hover:rotate-y-3 group-hover:scale-105 cursor-pointer flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Tap to explore</p>
          </div>
        </div>
      </div>

      <IntentionModal open={open} onClose={() => setOpen(false)} journalId={id} />
    </>
  );
}
