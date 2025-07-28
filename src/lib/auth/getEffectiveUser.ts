import { getSupabaseServer } from '@/utils/supabase/server';

export async function getEffectiveUser() {
  const supabase = getSupabaseServer();
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user;
}
