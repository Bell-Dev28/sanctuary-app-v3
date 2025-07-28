import { getSupabaseServer } from '@/utils/supabase/server';

export async function fetchPlaybookById(playbookId: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('playbooks')
    .select('*')
    .eq('id', playbookId)
    .single();

  if (error) {
    console.error('Error fetching playbook:', error);
    return null;
  }

  return data;
}
