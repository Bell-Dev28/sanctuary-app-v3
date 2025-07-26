'use client';
import { useState } from 'react';
import { insertPlaybook, updatePlaybook } from '@/lib/actions/playbooks';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface Props {
  initialData?: {
    id: string;
    title: string;
    content: string;
  };
}

export default function PlaybookForm({ initialData }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');

  const handleSubmit = async () => {
    try {
      if (initialData) {
        await updatePlaybook(initialData.id, { title, content });
        toast.success('Playbook updated!');
      } else {
        await insertPlaybook({ title, content });
        toast.success('Playbook created!');
      }
      router.refresh();
    } catch (err) {
      toast.error('Something went wrong.');
      console.error(err);
    }
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <button onClick={handleSubmit}>{initialData ? 'Update' : 'Create'} Playbook</button>
    </div>
  );
}
