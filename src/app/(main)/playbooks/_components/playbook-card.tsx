"use client";

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // Make sure you have this from installing shadcn/ui

export interface Playbook {
  id: string;
  title: string;
  content: string;
  isFavoritedByMe: boolean;
  isFavoritedByPartner: boolean;
}

export const PlaybookCard = ({ playbook }: { playbook: Playbook }) => {
  // In a real app, this state would be managed by your database.
  // This is a local simulation for UI purposes.
  const [isFavoritedByMe, setIsFavoritedByMe] = useState(playbook.isFavoritedByMe);

  const handleFavoriteClick = () => {
    setIsFavoritedByMe(prev => !prev);
    // In a real app, you would also trigger a mutation to update the database.
  };

  const bothFavorited = isFavoritedByMe && playbook.isFavoritedByPartner;

  return (
    <Card className={cn("transition-all", bothFavorited && "bg-amber-50 border-amber-200")}>
      <CardHeader>
        <CardTitle className="font-serif text-xl">{playbook.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground whitespace-pre-wrap">{playbook.content}</p>
      </CardContent>
      <CardFooter className="flex justify-end items-center gap-x-4">
        <p className={cn("text-xs text-muted-foreground transition-all", bothFavorited && "text-amber-600 font-semibold")}>
            {bothFavorited ? "Mutually cherished!" : "Mark as a favorite"}
        </p>
        <div className="flex gap-x-1">
            {/* Partner's Heart */}
            <Heart className={cn(
                "h-6 w-6 text-slate-300 transition-all", 
                playbook.isFavoritedByPartner && "fill-rose-500 text-rose-500"
            )} />
            {/* My Heart */}
            <Heart 
              className={cn(
                  "h-6 w-6 text-slate-300 transition-all cursor-pointer hover:text-rose-500",
                  isFavoritedByMe && "fill-rose-500 text-rose-500"
              )}
              onClick={handleFavoriteClick}
            />
        </div>
      </CardFooter>
    </Card>
  );
};