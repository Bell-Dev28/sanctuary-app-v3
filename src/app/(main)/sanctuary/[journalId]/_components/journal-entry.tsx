"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Make sure you have this utility installed from shadcn/ui.
// If not: npm install clsx tailwind-merge
// Then create lib/utils.ts with the code from shadcn/ui docs.

export interface EntryProps {
  id: string;
  author: {
    name: string;
    avatarUrl?: string; // Optional avatar image URL
  };
  content: string;
  timestamp: string;
  isOwnEntry: boolean; // Crucial prop for styling
}

export const JournalEntry = ({ entry }: { entry: EntryProps }) => {
  return (
    <div
      className={cn(
        "flex items-end gap-x-3 w-full",
        entry.isOwnEntry ? "justify-end" : "justify-start"
      )}
    >
      {/* Avatar for partner */}
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
            {/* Here you would render markdown. For now, we use a simple p tag */}
            <p className="text-base">{entry.content}</p>
        </CardContent>
      </Card>
      
      {/* Avatar for self */}
      {entry.isOwnEntry && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={entry.author.avatarUrl} />
          <AvatarFallback>{entry.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};