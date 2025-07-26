import { createServerSupabaseClient } from '@/utils/supabase/server';
import Card from '@/components/playbooks/Card';
import TagFilterBar from '@/components/playbooks/TagFilterBar';
import { redirect } from 'next/navigation';

export default async function Page({ searchParams }: { searchParams: { tag?: string } }) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: playbooks, error } = await supabase
    .from('playbooks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error || !playbooks) {
    return <div className="p-6">Error loading playbooks.</div>;
  }

  const allTags = Array.from(new Set(playbooks.flatMap((p) => p.tags || []))).sort();
  const activeTag = searchParams.tag;

  const filtered = activeTag
    ? playbooks.filter((p) => p.tags?.includes(activeTag))
    : playbooks;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Your Playbooks</h1>

      <TagFilterBar tags={allTags} activeTag={activeTag} />

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.length ? (
          filtered.map((playbook) => (
            <Card key={playbook.id} playbook={playbook} />
          ))
        ) : (
          <div className="text-muted-foreground">No playbooks found.</div>
        )}
      </div>
    </div>
  );
}
