import { getSupabaseServer } from '@/utils/supabase/server';

export async function getUserJournals(userId: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('journals')
    .select('*')
    .eq('user_id', userId);
  if (error) throw new Error(error.message);
  return data;
}
