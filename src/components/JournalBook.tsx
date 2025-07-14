// src/components/JournalBook.tsx
"use client";

type Props = {
  id: string;
  title: string;
  emoji: string;
  onClick: () => void;
};

export default function JournalBook({ title, emoji, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition-all w-full text-left"
    >
      <div className="text-4xl mb-2">{emoji}</div>
      <div className="text-xl font-semibold">{title}</div>
    </button>
  );
}
