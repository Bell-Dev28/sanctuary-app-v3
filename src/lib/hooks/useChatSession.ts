import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export function useChatSession(conversationId: string, handleUpdate: () => void) {
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel(`chat:${conversationId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'ai_messages' }, handleUpdate)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId, handleUpdate, supabase]); // ✅ Added supabase to deps
}