'use server';

import { createServerClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

// Create a journal entry
export async function createJournal(formData: FormData) {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('Not authenticated');

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  const { error } = await supabase.from('journal_entries').insert({
    title,
    content,
    user_id: session.user.id,
  });

  if (error) throw new Error(error.message);
  revalidatePath('/sanctuary');
}

// Update a journal entry
export async function updateJournal(journalId: string, formData: FormData) {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('Not authenticated');

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  const { error } = await supabase
    .from('journal_entries')
    .update({ title, content })
    .eq('id', journalId)
    .eq('user_id', session.user.id); // 🔒 protect by user

  if (error) throw new Error(error.message);
  revalidatePath(`/sanctuary/${journalId}`);
}

// Delete a journal entry
export async function deleteJournal(journalId: string) {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('journal_entries')
    .delete()
    .eq('id', journalId)
    .eq('user_id', session.user.id); // 🔒 protect by user

  if (error) throw new Error(error.message);
  revalidatePath('/sanctuary');
}
