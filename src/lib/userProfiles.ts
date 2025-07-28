import { getSupabaseServer } from '@/utils/supabase/server';

export async function getUserProfile(userId: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) throw new Error(error.message);
  return data;
}
