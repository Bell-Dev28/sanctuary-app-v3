'use client';

import React from 'react';

export interface TagFilterBarProps {
  tags: string[];
  activeTag: string | null;
}

export const TagFilterBar = ({ tags, activeTag }: TagFilterBarProps) => {
  return (
    <div className="flex gap-2 mb-4">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`px-3 py-1 rounded-full border ${activeTag === tag ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilterBar;
