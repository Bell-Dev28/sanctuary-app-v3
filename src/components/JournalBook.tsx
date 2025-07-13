// src/components/JournalBook.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IntentionModal } from '@/components/ui/intentionmodal';

interface JournalBookProps {
  title: string;
  coverImageUrl?: string;
}

export function JournalBook({ title, coverImageUrl }: JournalBookProps) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => setModalOpen(true);
  const onView = () => {
    setModalOpen(false);
    router.push(`/journal/${encodeURIComponent(title)}`);
  };
  const onExplore = () => {
    setModalOpen(false);
    router.push(`/studio/${encodeURIComponent(title)}`);
  };

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer select-none">
        {coverImageUrl ? (
          <div className="w-full h-48 relative rounded overflow-hidden">
            <Image
              src={coverImageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">{title}</span>
          </div>
        )}
        <h2 className="mt-2 text-center font-medium">{title}</h2>
      </div>

      <IntentionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onViewJournal={onView}
        onExploreAI={onExplore}
      />
    </>
  );
}
