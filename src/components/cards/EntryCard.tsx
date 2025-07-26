// src/components/cards/EntryCard.tsx
"use client";

import { useState } from "react";
import { format } from "date-fns";
import EditEntryModal from "@/components/modals/entry/EditEntryModal";
import { Button } from "@/components/ui/Button";

interface Entry {
  id: string;
  content: string;
  created_at: string;
}

export function EntryCard({ entry }: { entry: Entry }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
        <div className="flex justify-between items-start">
          <div className="text-sm text-gray-400">
            {format(new Date(entry.created_at), "MMM d, yyyy - h:mm a")}
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsEditing(true)}
            className="text-xs"
          >
            Edit
          </Button>
        </div>
        <p className="mt-2 whitespace-pre-line">{entry.content}</p>
      </div>

      {isEditing && (
        <EditEntryModal 
          entryId={Number(entry.id)} 
          isOpen={isEditing} 
          onClose={() => setIsEditing(false)}
          initialContent={entry.content}
          onSave={() => {}}
        />
      )}
    </>
  );
}
