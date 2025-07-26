// src/components/lists/CommentList.tsx
import { formatDistanceToNow } from "date-fns";

interface Comment {
  id: string;
  content: string;
  created_at: string;
}

export function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <div className="mt-4 space-y-3 border-t pt-4">
      {comments.map((c) => (
        <div key={c.id} className="text-sm">
          <div className="text-gray-400 text-xs mb-1">
            {formatDistanceToNow(new Date(c.created_at), { addSuffix: true })}
          </div>
          <p className="whitespace-pre-line">{c.content}</p>
        </div>
      ))}
    </div>
  );
}
