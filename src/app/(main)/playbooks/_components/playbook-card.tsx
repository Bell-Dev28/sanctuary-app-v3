"use client";

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface Playbook {
  id: string;
  title: string;
  content: string;
  isFavoritedByMe: boolean;
  isFavoritedByPartner: boolean;
}

export const PlaybookCard = ({ playbook }: { playbook: Playbook }) => {
  const [isFavoritedByMe, setIsFavoritedByMe] = useState(playbook.isFavoritedByMe);

  const handleFavoriteClick = () => {
    setIsFavoritedByMe(prev => !prev);
  };

  const bothFavorited = isFavoritedByMe && playbook.isFavoritedByPartner;

  return (
    <Card className={cn("transition-all", bothFavorited && "bg-amber-900/20 border-amber-500/50")}>
      <CardHeader>
        <CardTitle className="font-serif text-xl">{playbook.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground whitespace-pre-wrap">{playbook.content}</p>
      </CardContent>
      <div className="flex justify-end items-center gap-x-4 p-6 pt-0">
        <p className={cn("text-xs text-muted-foreground transition-all", bothFavorited && "text-amber-400 font-semibold")}>
            {bothFavorited ? "Mutually cherished!" : "Mark as a favorite"}
        </p>
        <div className="flex gap-x-1">
            <Heart className={cn("h-6 w-6 text-slate-600 transition-all", playbook.isFavoritedByPartner && "fill-rose-500 text-rose-500")} />
            <Heart 
              className={cn("h-6 w-6 text-slate-600 transition-all cursor-pointer hover:text-rose-400", isFavoritedByMe && "fill-rose-500 text-rose-500")}
              onClick={handleFavoriteClick}
            />
        </div>
      </div>
    </Card>
  );
};