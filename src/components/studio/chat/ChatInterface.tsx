'use client';

import { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

export default function ChatInterface() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const handleSend = (msg: string) => {
    setMessages((prev) => [...prev, { role: 'user', content: msg }]);
    // Placeholder: integrate with AI response
    setMessages((prev) => [...prev, { role: 'assistant', content: 'This is a response.' }]);
  };

  return (
    <div className="p-4">
      <div className="space-y-2">
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
