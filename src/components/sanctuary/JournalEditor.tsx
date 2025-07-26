'use client';
import { useState } from 'react';

export default function JournalEditor() {
  const [entry, setEntry] = useState('');

  return (
    <div>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your journal entry..."
      />
    </div>
  );
}
