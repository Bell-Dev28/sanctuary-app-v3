'use server';

import { getSupabaseServer } from '@/utils/supabase/server';

export async function getJournalEntries(journalId: string) {
  const supabase = getSupabaseServer();

  const { data, error } = await supabase
    .from('journal_entries')
    .select('*')
    .eq('journal_id', journalId)
    .order('created_at', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}
