'use client';

import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  id: string;
  title: string;
  content: string;
  favoritedBy: {
    me: boolean;
    partner: boolean;
  };
  onFavorite: (playbookId: string, user: 'me' | 'partner') => void;
};

export default function PlaybookCard({
  id,
  title,
  content,
  favoritedBy,
  onFavorite,
}: Props) {
  return (
    <div className="border rounded p-4 bg-white shadow-sm hover:shadow transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="flex gap-2">
          {/* Marie's Heart */}
          <button
            onClick={() => onFavorite(id, 'me')}
            className={cn(
              'p-1 rounded hover:bg-gray-100 transition',
              favoritedBy.me && 'text-pink-500'
            )}
            aria-label="Favorite by Marie"
          >
            <Heart
              fill={favoritedBy.me ? 'currentColor' : 'none'}
              className="w-5 h-5"
            />
          </button>

          {/* Aaron's Heart */}
          <button
            onClick={() => onFavorite(id, 'partner')}
            className={cn(
              'p-1 rounded hover:bg-gray-100 transition',
              favoritedBy.partner && 'text-blue-500'
            )}
            aria-label="Favorite by Aaron"
          >
            <Heart
              fill={favoritedBy.partner ? 'currentColor' : 'none'}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-700 whitespace-pre-wrap">{content}</p>
    </div>
  );
}
