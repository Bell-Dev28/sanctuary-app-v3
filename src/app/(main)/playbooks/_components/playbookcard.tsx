// src/app/playbooks/_components/playbookcard.tsx
"use client";

import { useState } from "react";

type Props = {
  title: string;
  content: string;
  journal: string;
};

export default function PlaybookCard({ title, content, journal }: Props) {
  const [marieHeart, setMarieHeart] = useState(false);
  const [aaronHeart, setAaronHeart] = useState(false);

  return (
    <div className="bg-white border p-4 rounded-lg shadow hover:shadow-md transition-all">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setMarieHeart(!marieHeart)}
            title="Marie"
            className={marieHeart ? "text-pink-500" : "text-gray-300"}
          >
            💖
          </button>
          <button
            onClick={() => setAaronHeart(!aaronHeart)}
            title="Aaron"
            className={aaronHeart ? "text-blue-500" : "text-gray-300"}
          >
            💙
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-2">{content.slice(0, 120)}...</p>
      <div className="text-xs text-gray-400">Journal: {journal}</div>
    </div>
  );
}
