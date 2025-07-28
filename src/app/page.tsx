import { redirect } from 'next/navigation';
import { getSupabaseServer } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = getSupabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  } else {
    redirect('/home');
  }

  return null;
}
