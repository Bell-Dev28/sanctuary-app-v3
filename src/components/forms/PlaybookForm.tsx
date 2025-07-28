'use client';

import { useState } from 'react';

export default function PlaybookForm({ onSave }: { onSave: (title: string, content: string) => void }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(title, content);
      }}
      className="space-y-2"
    >
      <input
        type="text"
        className="w-full border rounded p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Playbook title"
      />
      <textarea
        className="w-full border rounded p-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Playbook content"
      />
      <button className="px-4 py-2 bg-green-600 text-white rounded" type="submit">Save</button>
    </form>
  );
}
