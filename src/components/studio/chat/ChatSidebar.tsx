'use client';

type Props = {
  journalId: string;
};

export default function ChatSidebar({ journalId }: Props) {
  return (
    <aside className="w-64 bg-gray-100 p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Previous Conversations</h2>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="hover:underline cursor-pointer">Chat 1 – Reflection</li>
        <li className="hover:underline cursor-pointer">Chat 2 – Emotions</li>
        <li className="hover:underline cursor-pointer">Chat 3 – Growth</li>
      </ul>
    </aside>
  );
}
