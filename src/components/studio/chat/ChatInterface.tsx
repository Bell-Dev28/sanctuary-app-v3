"use client";

import { Avatar, AvatarFallback } from "@/components/shared/user/Avatar"; // Removed 'AvatarImage'
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { CornerDownLeft, Share2 } from "lucide-react";
import { toast } from "sonner";

// Mock chat messages
const messages = [
  {
    role: "assistant",
    content: "Welcome to your private studio for 'The Unspoken'. What's on your mind? Feel free to explore any thoughts or feelings you'd like to understand better.",
  },
  {
    role: "user",
    content: "I've been feeling a bit disconnected lately, and I'm not sure why.",
  },
  {
    role: "assistant",
    content: "That's a very common feeling, and it's insightful of you to notice it. Could you tell me more about what 'disconnected' feels like for you right now? Is it a mental distance, an emotional one, or something else?",
  },
];

export const ChatInterface = ({ topicTitle }: { topicTitle: string }) => {
  const handleShare = (content: string) => {
    // In a real app, you would use the 'content' variable here
    // to save it to your database.
    console.log("Sharing to Sanctuary:", content); 

    toast.success(`Insight shared to ${topicTitle}`, {
      action: {
        label: "View Journal",
        onClick: () => console.log("Navigate to journal"),
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
        <header className="border-b border-border p-4">
            <h1 className="text-2xl font-serif font-bold">Private AI Studio</h1>
            <p className="text-muted-foreground">{topicTitle}</p>
        </header>
        <div className="flex-1 space-y-6 p-6 overflow-y-auto">
            {messages.map((msg, index) => (
            <div
                key={index}
                className={cn(
                "flex items-start gap-x-4",
                msg.role === "user" ? "justify-end" : "justify-start"
                )}
            >
                {msg.role === "assistant" && (
                <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                )}
                <div
                className={cn(
                    "max-w-xl p-4 rounded-lg group relative", // Added relative positioning
                    msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                )}
                >
                <p>{msg.content}</p>
                 {msg.role === 'assistant' && (
                    <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-2 -right-2"
                        onClick={() => handleShare(msg.content)}
                    >
                        <Share2 className="h-4 w-4" />
                    </Button>
                )}
                </div>
            </div>
            ))}
        </div>
        <footer className="p-4 border-t border-border">
            <div className="relative">
                <Input placeholder="Type your message..." className="h-12 pr-14" />
                <Button size="icon" className="absolute top-1/2 right-2 -translate-y-1/2">
                    <CornerDownLeft className="h-5 w-5"/>
                </Button>
            </div>
        </footer>
    </div>
  );
};