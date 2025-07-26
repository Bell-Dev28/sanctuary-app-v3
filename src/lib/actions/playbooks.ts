import { supabase } from '@/utils/supabase/client';

export async function insertPlaybook(playbook: {
  title: string;
  content: string;
  journal_id?: string;
}) {
  const { data, error } = await supabase
    .from('playbooks')
    .insert(playbook)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updatePlaybook(id: string, updates: { title?: string; content?: string }) {
  const { data, error } = await supabase
    .from('playbooks')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}
