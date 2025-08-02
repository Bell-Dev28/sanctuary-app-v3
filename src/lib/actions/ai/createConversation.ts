import { createClient } from '@/utils/supabase/server';

export async function createConversation(journalId: number | null, userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('ai_conversations')
    .insert({ journal_id: journalId, user_id: userId })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}