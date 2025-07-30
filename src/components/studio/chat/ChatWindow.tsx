'use client';

import { useState } from 'react';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';

type Props = {
  journalId: string;
};

export default function ChatWindow({ journalId }: Props) {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', content: 'Welcome back. What’s on your heart today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), role: 'user', content: input }]);
    setInput('');
  };

  const handleAddToShared = (msg: string) => {
    toast.success('Successfully added to shared journal.', {
      action: {
        label: 'View Journal',
        onClick: () => window.location.href = `/journal/${journalId}`,
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xl p-3 rounded ${
              msg.role === 'user'
                ? 'ml-auto bg-blue-100 text-right'
                : 'bg-gray-100 text-left'
            }`}
          >
            <p>{msg.content}</p>
            {msg.role === 'ai' && (
              <button
                onClick={() => handleAddToShared(msg.content)}
                className="text-sm text-blue-600 mt-2 underline hover:text-blue-800"
              >
                + Add to Shared Journal
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="border-t p-4 flex gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your thoughts..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <PaperPlaneIcon />
        </button>
      </div>
    </div>
  );
}
