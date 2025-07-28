'use server';

import { getSupabaseServer } from '@/utils/supabase/server';

export async function fetchJournalById(journalId: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('journals')
    .select('*')
    .eq('id', journalId)
    .single();

  if (error) {
    throw new Error('Failed to fetch journal');
  }

  return data;
}
