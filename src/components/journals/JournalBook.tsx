// src/components/journals/JournalBook.tsx

"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BookOpenIcon } from "lucide-react";

type JournalBookProps = {
  journalId: number;
  title: string;
  intention?: string | null;
};

export default function JournalBook({ journalId, title, intention }: JournalBookProps) {
  const router = useRouter();

  const handleOpen = () => {
    router.push(`/sanctuary/${journalId}`);
  };

  return (
    <Card
      className="group cursor-pointer border shadow-sm transition hover:shadow-md"
      onClick={handleOpen}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-primary truncate">{title}</h3>
          <BookOpenIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
        </div>
        {intention && (
          <p className="text-sm text-muted-foreground line-clamp-2 italic">
            {intention}
          </p>
        )}
        <Button
          variant="outline"
          size="sm"
          className="w-full mt-2"
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
        >
          Open
        </Button>
      </CardContent>
    </Card>
  );
}
