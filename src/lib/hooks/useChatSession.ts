'use client';

import { useEffect, useState } from 'react';
import { Database } from '@/types/supabase';
import { createClient } from '@/utils/supabase/client';

export type AIMessage = Database['public']['Tables']['ai_messages']['Row'];

export function useChatSession(conversationId: string) {
  const supabase = createClient();
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('ai_messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (data) setMessages(data);
    };
    fetchMessages();
  }, [conversationId]);

  const sendMessage = async (userInput: string) => {
    const updated = [
      ...messages,
      { sender: 'user', content: userInput } as AIMessage,
    ];
    setMessages(updated);
    setLoading(true);

    const res = await fetch('/api/ai/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: updated }),
    });
    const data = await res.json();

    const aiMessage = { sender: 'ai', content: data.output } as AIMessage;
    setMessages([...updated, aiMessage]);
    setLoading(false);

    return { userInput, aiOutput: data.output };
  };

  return { messages, sendMessage, loading };
}