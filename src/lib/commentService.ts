import { getSupabaseServer } from '@/utils/supabase/server';

export async function postComment(entryId: string, userId: string, content: string) {
  const supabase = getSupabaseServer();
  const { error } = await supabase
    .from('journal_comments')
    .insert([{ entry_id: entryId, user_id: userId, content }]);
  if (error) throw new Error(error.message);
}
