'use client';

import { useRouter } from 'next/navigation';

export default function JournalBook({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  return (
    <div
      className="border rounded p-4 hover:bg-gray-50 cursor-pointer"
      onClick={() => router.push('/journal/' + id)}
    >
      <h2 className="font-semibold text-lg">{title}</h2>
    </div>
  );
}
