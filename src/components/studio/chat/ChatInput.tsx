'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import { Database } from '@/types/supabase';
import { Button } from '@/components/ui/Button';

export default function ChatInput({ topicId }: { topicId: string }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [supabase] = useState(() => createBrowserClient<Database>());
  const router = useRouter();

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      toast.error('Please log in to send a message.');
      setLoading(false);
      return;
    }

    const { error } = await supabase.from('ai_memory_core').insert([
      {
        user_id: user.id,
        topic_id: topicId,
        role: 'user',
        message: input.trim(),
      },
    ]);

    setLoading(false);

    if (error) {
      toast.error('Failed to send message.');
    } else {
      setInput('');
      router.refresh();
    }
  };

  return (
    <div className="p-4 border-t bg-white dark:bg-gray-950">
      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Type your message..."
          className="flex-1 border rounded px-3 py-2 text-sm dark:bg-gray-900"
          disabled={loading}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </div>
  );
}
