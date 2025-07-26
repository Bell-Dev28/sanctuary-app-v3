import { createServerSupabaseClient } from '@/utils/supabase/server';
import PlaybookForm from '@/components/forms/PlaybookForm';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    playbookId: string;
  };
}

export default async function EditPlaybookPage({ params }: Props) {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const { data: playbook } = await supabase
    .from('playbooks')
    .select('*')
    .eq('id', params.playbookId)
    .single();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Playbook</h1>
      <PlaybookForm initialData={playbook} />
    </div>
  );
}
