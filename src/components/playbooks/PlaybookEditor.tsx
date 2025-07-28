
'use client';

import { useState } from 'react';

interface PlaybookEditorProps {
  playbook: {
    id: string;
    title: string;
    content: string;
  };
}

export default function PlaybookEditor({ playbook }: PlaybookEditorProps) {
  const [title, setTitle] = useState(playbook.title);
  const [content, setContent] = useState(playbook.content);

  return (
    <div className="p-4">
      <input
        className="block w-full mb-4 text-lg font-semibold"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="block w-full h-64 p-2 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}
