// src/lib/entryService.ts
import { supabase } from './supabase/supabaseClient';
import { encrypt, decrypt } from './encryptionService';
import type { Database } from './database';

export type JournalEntry = Database['public']['Tables']['journal_entries']['Row'];

/**
 * Inserts a new journal entry (encrypted) and returns the decrypted entry.
 */
export async function insertJournalEntry(
  topicId: string,
  content: string
): Promise<JournalEntry> {
  const encrypted = encrypt(content);
  const { data, error } = await supabase
    .from('journal_entries')
    .insert({ topic_id: topicId, content: encrypted })
    .select('*')
    .single();

  if (error) throw error;
  if (!data) throw new Error('Failed to insert journal entry.');

  return { ...data, content: decrypt(data.content) };
}

/**
 * Fetches all journal entries for a given topic, decrypting each.
 */
export async function fetchJournalEntries(
  topicId: string
): Promise<JournalEntry[]> {
  const { data, error } = await supabase
    .from('journal_entries')
    .select('*')
    .eq('topic_id', topicId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((row) => ({
    ...row,
    content: decrypt(row.content),
  }));
}
