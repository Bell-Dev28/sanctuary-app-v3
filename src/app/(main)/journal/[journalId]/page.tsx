import { createServerSupabaseClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { journalId: string };
}) {
  const supabase = createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return notFound();

  const { data: journal, error } = await supabase
    .from('journal_entries')
    .select('*')
    .eq('journal_id', params.journalId)
    .order('created_at', { ascending: true });

  if (error || !journal) return <div>Error loading journal.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4">Journal</h1>
      {journal.map((entry) => (
        <div key={entry.id} className="bg-muted p-4 rounded">
          <p>{entry.content}</p>
        </div>
      ))}
    </div>
  );
}
