// src/components/cards/CommentForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { addComment } from "@/lib/actions/journals/Comments";

export default function CommentForm({
  entryId,
  userId,
}: {
  entryId: string;
  userId: string;
}) {
  const [comment, setComment] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!comment.trim()) return;
    await addComment({ entryId, userId, content: comment });
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <textarea
        className="w-full rounded-lg border border-gray-300 p-2 text-sm dark:bg-gray-800 dark:text-white"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-1 text-sm text-white hover:bg-blue-600"
      >
        Post Comment
      </button>
    </form>
  );
}
