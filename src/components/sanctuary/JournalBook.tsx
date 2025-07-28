'use client';

import Link from 'next/link';

type JournalBookProps = {
  id: number;
  title: string;
};

export default function JournalBook({ id, title }: JournalBookProps) {
  return (
    <Link href={`/journal/${id}`}>
      <div className="shadow p-4 rounded bg-white hover:bg-gray-100 cursor-pointer">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
    </Link>
  );
}
