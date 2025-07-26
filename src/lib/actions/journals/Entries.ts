import { supabase } from '@/utils/supabase/client';

export async function getEntries(journalId: string) {
  const { data, error } = await supabase
    .from('journal_entries')
    .select('*')
    .eq('journal_id', journalId);

  if (error) throw error;
  return data;
}
