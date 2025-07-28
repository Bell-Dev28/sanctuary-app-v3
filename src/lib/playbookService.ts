import { getSupabaseServer } from '@/utils/supabase/server';

export async function savePlaybook(userId: string, title: string, content: string) {
  const supabase = getSupabaseServer();
  const { error } = await supabase
    .from('playbooks')
    .insert([{ user_id: userId, title, content }]);
  if (error) throw new Error(error.message);
}
