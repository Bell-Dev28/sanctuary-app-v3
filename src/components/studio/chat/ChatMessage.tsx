'use client';

import { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import { cn } from '@/lib/utils';

export function AIChat({ topicId }: { topicId: string }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: `/api/chat/${topicId}`,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-full w-full overflow-hidden">
      {/* Chat history */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/10"
        aria-label="Chat messages"
      >
        {messages.map((msg) => (
          <div key={msg.id} className="max-w-prose rounded-md px-4 py-2 bg-background shadow-sm">
            <p className="text-sm">{msg.content}</p>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-border bg-background flex items-center gap-2"
        role="search"
      >
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className={cn(
            'flex-1 rounded-lg border border-input px-4 py-2 text-sm bg-white dark:bg-zinc-900',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          )}
          aria-label="Chat message input"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-md px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary/90"
          aria-label="Send message"
        >
          Send
        </button>
      </form>
    </div>
  );
}
