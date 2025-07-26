// src/lib/commentService.ts
import { supabase } from './supabase/supabaseClient';
import { encrypt, decrypt } from './encryptionService';
import type { Database } from './database';

export type Comment = Database['public']['Tables']['journal_comments']['Row'];

/**
 * Inserts a new comment under an entry (encrypted) and returns the decrypted comment.
 */
export async function insertComment(
  entryId: string,
  content: string
): Promise<Comment> {
  const encrypted = encrypt(content);
  const { data, error } = await supabase
    .from('journal_comments')
    .insert({ entry_id: entryId, content: encrypted })
    .select('*')
    .single();

  if (error) throw error;
  if (!data) throw new Error('Failed to insert comment.');

  return { ...data, content: decrypt(data.content) };
}

/**
 * Fetches all comments for a given entry, decrypting each.
 */
export async function fetchComments(
  entryId: string
): Promise<Comment[]> {
  const { data, error } = await supabase
    .from('journal_comments')
    .select('*')
    .eq('entry_id', entryId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return (data ?? []).map((row) => ({
    ...row,
    content: decrypt(row.content),
  }));
}
