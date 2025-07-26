/* components/playbooks/PlaybookCard.tsx */
'use client';

import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toggleReaction } from '@/lib/actions/reactions';

interface PlaybookCardProps {
  playbook: {
    id: number;
    title: string;
    content: string;
    tags?: string[];
    favorited?: boolean;
  };
}

export function PlaybookCard({ playbook }: PlaybookCardProps) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm('Delete this playbook?')) {
      // implement your delete logic
    }
  };

  const handleReact = async (emoji: string) => {
    await toggleReaction(playbook.id, emoji);
    router.refresh();
  };

  return (
    <div className="border rounded-md p-4 bg-background relative shadow-sm">
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={() => router.push(`/playbooks/edit/${playbook.id}`)}
          className="p-1 rounded hover:bg-muted"
        >
          <Pencil className="w-4 h-4 text-muted-foreground" />
        </button>
        <button onClick={handleDelete} className="p-1 rounded hover:bg-muted">
          <Trash className="w-4 h-4 text-destructive" />
        </button>
      </div>

      <h3 className="text-lg font-semibold">{playbook.title}</h3>
      <p className="text-sm text-muted-foreground mt-1 whitespace-pre-wrap">
        {playbook.content}
      </p>

      {playbook.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {playbook.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-3">
        {['❤️', '🔥'].map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleReact(emoji)}
            className="text-xl hover:scale-110 transition"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
