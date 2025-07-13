'use client';

import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

interface StudioClientProps {
  topicId: string;
}

export default function StudioClient({ topicId }: StudioClientProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = input.trim();
    if (!content) return;

    const userMsg: Message = { id: Date.now(), role: 'user', content };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topicId, messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'AI request failed');

      const reply: string = data.text ?? data.generated_text ?? '';
      const aiMsg: Message = { id: Date.now() + 1, role: 'assistant', content: reply };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown AI error';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-lg px-3 py-2 rounded ${
              m.role === 'user'
                ? 'self-end bg-blue-100 text-blue-900'
                : 'self-start bg-gray-100 text-gray-900'
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border-t p-4 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          disabled={loading}
          placeholder="Type your message…"
          className="flex-1 border border-gray-300 rounded px-2 py-1"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-1 rounded disabled:opacity-50"
        >
          {loading ? '…' : 'Send'}
        </button>
      </form>
    </div>
  );
}
