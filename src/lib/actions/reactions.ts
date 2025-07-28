import { getSupabaseServer } from '@/utils/supabase/server';

export async function reactToEntry(entryId: string, userId: string, reaction: string) {
  const supabase = getSupabaseServer();
  const { error } = await supabase
    .from('reactions')
    .insert([{ entry_id: entryId, user_id: userId, reaction }]);
  if (error) throw new Error(error.message);
}
