'use client';

import ChatSidebar from './chat/ChatSidebar';
import ChatWindow from './chat/ChatWindow';

type Props = {
  conversationId: string;
};

export default function StudioLayout({ conversationId }: Props) {
  return (
    <div className="flex min-h-screen bg-white">
      <ChatSidebar />
      <div className="flex-1 border-l">
        <ChatWindow conversationId={conversationId} />
      </div>
    </div>
  );
}