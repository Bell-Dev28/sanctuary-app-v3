// lib/actions/comments.ts
'use server';

import { createServerClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function postComment(entryId: string, content: string) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('journal_comments')
    .insert({
      entry_id: entryId,
      content,
      user_id: user.id,
    });

  if (error) throw new Error(error.message);

  revalidatePath('/journal');
}

export async function updateComment(commentId: string, content: string) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('journal_comments')
    .update({
      content,
      updated_at: new Date().toISOString(),
    })
    .eq('id', commentId)
    .eq('user_id', user.id);

  if (error) throw new Error(error.message);

  revalidatePath('/journal');
}

export async function deleteComment(commentId: string) {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('journal_comments')
    .delete()
    .eq('id', commentId)
    .eq('user_id', user.id);

  if (error) throw new Error(error.message);

  revalidatePath('/journal');
}
