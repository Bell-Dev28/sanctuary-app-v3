'use client';

import ChatSidebar from './chat/ChatSidebar';
import ChatWindow from './chat/ChatWindow';

type Props = {
  journalId: string;
};

export default function StudioLayout({ journalId }: Props) {
  return (
    <div className="flex min-h-screen bg-white">
      <ChatSidebar journalId={journalId} />
      <div className="flex-1 border-l">
        <ChatWindow journalId={journalId} />
      </div>
    </div>
  );
}
