// app/page.tsx
import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // send them to your login route
    redirect('/login');
  }
  // or, if your “home” is at /home:
  // redirect('/home')
  return <div>…your protected home UI…</div>;
}
