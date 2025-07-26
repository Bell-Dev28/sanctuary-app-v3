import { createServerSupabaseClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { getEntries } from '@/lib/actions/journals/Entries';

export default async function HomePage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const entries = await getEntries('default-journal-id'); // Replace with actual journal ID context

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Your Journal</h1>
      <pre>{JSON.stringify(entries, null, 2)}</pre>
    </div>
  );
}
