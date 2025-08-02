'use client';

import { useState } from 'react';
import { SendHorizonal } from 'lucide-react';
import { useChatSession } from '@/lib/hooks/useChatSession';
import { saveMessage } from '@/lib/actions/ai/saveMessage';

export default function ChatWindow({ conversationId }: { conversationId: string }) {
  const [input, setInput] = useState('');
  const { messages, sendMessage, loading } = useChatSession(conversationId);

  const handleSend = async () => {
    if (!input.trim()) return;
    const { userInput, aiOutput } = await sendMessage(input);
    setInput('');

    await saveMessage(conversationId, 'user', userInput);
    await saveMessage(conversationId, 'ai', aiOutput);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xl p-3 rounded ${
              msg.sender === 'user'
                ? 'ml-auto bg-blue-100 text-right'
                : 'bg-gray-100 text-left'
            }`}
          >
            <p>{msg.content}</p>
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
          disabled={loading}
          className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <SendHorizonal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}