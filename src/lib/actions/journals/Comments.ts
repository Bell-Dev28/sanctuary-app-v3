'use server';

import { getSupabaseServer } from '@/utils/supabase/server';

export async function fetchCommentsForEntry(entryId: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('journal_comments')
    .select('*')
    .eq('entry_id', entryId)
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error('Failed to fetch comments');
  }

  return data;
}

export async function postComment(entryId: string, content: string, userId: string) {
  const supabase = getSupabaseServer();
  const { error } = await supabase
    .from('journal_comments')
    .insert([{ entry_id: entryId, content, user_id: userId }]);

  if (error) {
    throw new Error('Failed to post comment');
  }
}
