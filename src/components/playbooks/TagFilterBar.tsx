'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface TagFilterBarProps {
  tags: string[];
  activeTag?: string;
}

export default function TagFilterBar({ tags, activeTag }: TagFilterBarProps) {
  const router = useRouter();
  const params = useSearchParams();

  const handleTagClick = (tag: string) => {
    const search = new URLSearchParams(Array.from(params.entries()));
    if (search.get('tag') === tag) {
      search.delete('tag');
    } else {
      search.set('tag', tag);
    }
    router.push(`?${search.toString()}`);
  };

  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`px-3 py-1 text-sm rounded-full border ${
            tag === activeTag
              ? 'bg-blue-600 text-white'
              : 'bg-muted text-muted-foreground hover:bg-blue-100 dark:hover:bg-blue-800'
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
