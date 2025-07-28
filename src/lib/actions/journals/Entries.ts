'use server';

import { getSupabaseServer } from '@/utils/supabase/server';

export async function fetchJournalEntries(journalId: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('journal_entries')
    .select('*')
    .eq('journal_id', journalId)
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error('Failed to fetch journal entries');
  }

  return data;
}

export async function createJournalEntry(journalId: string, content: string, userId: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('journal_entries')
    .insert([{ journal_id: journalId, content, user_id: userId }]);

  if (error) {
    throw new Error('Failed to create journal entry');
  }

  return data;
}
export async function deleteJournalEntry(entryId: string) {
  const supabase = getSupabaseServer();
  const { error } = await supabase
    .from('journal_entries')
    .delete()
    .eq('id', entryId);

  if (error) {
    throw new Error('Failed to delete journal entry');
  }

  return true;
}
export async function updateJournalEntry(entryId: string, content: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('journal_entries')
    .update({ content })
    .eq('id', entryId);

  if (error) {
    throw new Error('Failed to update journal entry');
  }

  return data;
}
