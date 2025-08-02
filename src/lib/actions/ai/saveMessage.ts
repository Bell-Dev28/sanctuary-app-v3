import { createServerSupabaseClient } from '@/utils/supabase/server';

export async function saveMessage(conversationId: string, sender: 'user' | 'ai', content: string) {
  const supabase = createServerSupabaseClient();
  const { error } = await supabase.from('ai_messages').insert({
    conversation_id: conversationId,
    sender,
    content,
  });
  if (error) throw new Error(error.message);
}
