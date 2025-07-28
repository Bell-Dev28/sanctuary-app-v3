'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/Button';
import { createJournalEntry } from '@/lib/actions/journals/Entries';

interface JournalEditorProps {
  journalId: string; // 🔄 CHANGED from number to string
  userId: string;
}

export default function JournalEditor({ journalId, userId }: JournalEditorProps) {
  const [content, setContent] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    if (content.trim()) {
      startTransition(async () => {
        await createJournalEntry(journalId, content, userId);
        setContent('');
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea
        className="w-full p-2 border rounded min-h-[100px]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your journal entry..."
      />
      <Button onClick={handleSubmit} disabled={isPending}>
        {isPending ? 'Saving...' : 'Submit'}
      </Button>
    </div>
  );
}
