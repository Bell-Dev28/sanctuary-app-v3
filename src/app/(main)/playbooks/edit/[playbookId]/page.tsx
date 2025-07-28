import { Metadata } from 'next';
import { fetchPlaybookById } from '@/lib/actions/playbooks/fetchPlaybook';
import PlaybookEditor from '@/components/playbooks/PlaybookEditor';

export const metadata: Metadata = {
  title: 'Edit Playbook',
};

export default async function Page({ params }: { params: { playbookId: string } }) {
  const playbook = await fetchPlaybookById(params.playbookId);

  if (!playbook) {
    return <div>Playbook not found.</div>;
  }

  return <PlaybookEditor playbook={playbook} />;
}
