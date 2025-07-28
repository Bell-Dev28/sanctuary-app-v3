'use client';

import { useState } from 'react';

export default function CommentForm({ onSubmit }: { onSubmit: (text: string) => void }) {
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
        className="w-full border p-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Post</button>
    </form>
  );
}
