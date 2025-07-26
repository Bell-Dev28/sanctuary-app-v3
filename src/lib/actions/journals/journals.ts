import { supabase } from '@/utils/supabase/client';

export async function fetchJournalTitles(userId: string) {
  const { data, error } = await supabase
    .from('journals')
    .select('id, title')
    .eq('user_id', userId);
  if (error) throw error;
  return data;
}
