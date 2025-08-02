import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

export async function saveMessage(
  conversationId: string,
  sender: 'user' | 'ai',
  content: string
) {
  const { error } = await supabase.from('ai_messages').insert({
    conversation_id: conversationId,
    sender,
    content,
  });

  if (error) throw new Error(error.message);
}