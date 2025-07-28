'use client';

import { useState } from 'react';

export default function NewEntryForm({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [text, setText] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text);
        setText('');
      }}
      className="space-y-2"
    >
      <textarea
        className="w-full border rounded p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something..."
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded" type="submit">Submit</button>
    </form>
  );
}
