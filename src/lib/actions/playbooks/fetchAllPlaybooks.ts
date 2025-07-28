import { SupabaseClient } from '@supabase/supabase-js';
import { Playbook } from '@/types';

export async function fetchAllPlaybooks(supabase: SupabaseClient): Promise<Playbook[]> {
  const { data, error } = await supabase.from('playbooks').select('*');
  if (error) throw error;
  return data as Playbook[];
}