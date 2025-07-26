'use client';

import { useState } from 'react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

type Props = {
  journalId: number;
  onNewEntry: () => void;
};

export default function NewEntryForm({ journalId, onNewEntry }: Props) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createPagesBrowserClient<Database>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const user = (await supabase.auth.getUser()).data.user;

    if (!user) {
      setLoading(false);
      return;
    }

    const { error } = await supabase.from('journal_entries').insert({
      journal_id: journalId,
      user_id: user.id,
      content,
    });

    setLoading(false);
    if (!error) {
      setContent('');
      onNewEntry();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        rows={3}
        className="w-full rounded border p-2 text-sm"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write something..."
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-2 rounded bg-green-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {loading ? 'Posting...' : 'Post Entry'}
      </button>
    </form>
  );
}
