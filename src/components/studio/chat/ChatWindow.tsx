'use client';

import { useState, useEffect, useCallback } from 'react';
import { SendHorizonal } from 'lucide-react';
import { saveMessage } from '@/lib/actions/ai/saveMessage';
import { createClient } from '@/utils/supabase/client';
import type { AIMessage } from '@/types/ai';

type Props = {
  conversationId: string;
};

export default function ChatWindow({ conversationId }: Props) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const fetchMessages = useCallback(async () => {
    const { data, error } = await supabase
      .from('ai_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setMessages(data as AIMessage[]);
    }
  }, [conversationId, supabase]);

  useEffect(() => {
    fetchMessages();

    const channel = supabase
      .channel(`chat:${conversationId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'ai_messages' },
        () => fetchMessages()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId, fetchMessages, supabase]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const userInput = input;
    setInput('');

    // Simulate AI output (replace with your LLM call if needed)
    const aiOutput = `Echo: ${userInput}`;

    await saveMessage(conversationId, 'user', userInput);
    await saveMessage(conversationId, 'ai', aiOutput);
    setLoading(false);
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
