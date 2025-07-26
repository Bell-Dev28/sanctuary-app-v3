'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/supabase';

type Props = {
  entryId: number;
  initialContent: string;
  onClose: () => void;
  onSave: () => void;
};

export default function EditEntryModal({
  entryId,
  initialContent,
  onClose,
  onSave,
}: Props) {
  const [content, setContent] = useState(initialContent);
  const [loading, setLoading] = useState(false);

  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON!
  );

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from('journal_entries')
      .update({ content })
      .eq('id', entryId);

    setLoading(false);
    if (!error) {
      onSave();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Edit Entry</h2>
        <textarea
          aria-label="Edit entry content"
          rows={4}
          className="w-full rounded border p-2 text-sm"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="rounded px-4 py-2 text-gray-700 hover:underline">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
