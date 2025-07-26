import { Playbook } from '@/types/playbook';

interface CardProps {
  playbook: Playbook;
}

export default function Card({ playbook }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white dark:bg-gray-900">
      <h2 className="text-xl font-semibold mb-2">{playbook.title}</h2>
      <p className="text-sm text-muted-foreground mb-3">{playbook.content.slice(0, 100)}...</p>
      <div className="flex flex-wrap gap-1">
        {playbook.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 text-xs px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
