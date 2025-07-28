'use client';

import { Badge } from '@/components/ui/Badge';

interface PlaybookCardProps {
  title: string;
  content: string;
  favoritedBy: { me: boolean; partner: boolean };
  onFavorite: () => void;
}

export default function PlaybookCard({ title, content, favoritedBy, onFavorite }: PlaybookCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div>
          <span
            className={favoritedBy.me ? 'text-red-500' : 'text-gray-400'}
            onClick={onFavorite}
            role="button"
          >❤️</span>
          <span className={favoritedBy.partner ? 'text-blue-500 ml-2' : 'text-gray-400 ml-2'}>❤️</span>
        </div>
      </div>
      <p className="text-sm whitespace-pre-line">{content}</p>
      <div className="mt-2">
        <Badge>Playbook</Badge>
      </div>
    </div>
  );
}
