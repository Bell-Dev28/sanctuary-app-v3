'use client';

import { useState } from 'react';

export default function CommentInput({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 border p-2 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handleSend} className="px-4 py-2 bg-blue-500 text-white rounded">
        Send
      </button>
    </div>
  );
}
