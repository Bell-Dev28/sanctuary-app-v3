"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface EntryProps {
  id: string;
  author: {
    name: string;
    avatarUrl?: string;
  };
  content: string;
  isOwnEntry: boolean;
}

export const JournalEntry = ({ entry }: { entry: EntryProps }) => {
  return (
    <div
      className={cn(
        "flex items-end gap-x-3 w-full",
        entry.isOwnEntry ? "justify-end" : "justify-start"
      )}
    >
      {!entry.isOwnEntry && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={entry.author.avatarUrl} />
          <AvatarFallback>{entry.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}

      <Card
        className={cn(
          "max-w-2xl rounded-2xl",
          entry.isOwnEntry
            ? "bg-primary text-primary-foreground rounded-br-none"
            : "bg-secondary rounded-bl-none"
        )}
      >
        <CardContent className="p-4">
          <p className="text-base">{entry.content}</p>
          {/* A placeholder for the comment system */}
          <p className="text-xs text-muted-foreground/50 mt-2 cursor-pointer hover:underline">
            Reply...
          </p>
        </CardContent>
      </Card>
      
      {entry.isOwnEntry && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={entry.author.avatarUrl} />
          <AvatarFallback>{entry.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};