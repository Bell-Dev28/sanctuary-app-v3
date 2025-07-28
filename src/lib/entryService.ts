import { getSupabaseServer } from '@/utils/supabase/server';

export async function createEntry(journalId: string, userId: string, content: string) {
  const supabase = getSupabaseServer();
  const { error } = await supabase
    .from('journal_entries')
    .insert([{ journal_id: journalId, user_id: userId, content }]);
  if (error) throw new Error(error.message);
}
