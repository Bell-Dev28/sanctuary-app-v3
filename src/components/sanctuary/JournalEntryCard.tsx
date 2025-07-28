import { format } from 'date-fns';

interface Comment {
  id: number;
  content: string;
  author: string;
  created_at: string;
}

interface JournalEntryCardProps {
  entry: {
    id: number;
    content: string;
    created_at: string;
    author: string;
    comments: Comment[];
  };
}

export default function JournalEntryCard({ entry }: JournalEntryCardProps) {
  return (
    <div className="border rounded p-4 mb-4 bg-white shadow">
      <p className="text-sm text-gray-500 mb-1">
        {entry.author} — {format(new Date(entry.created_at), 'PPP p')}
      </p>
      <p className="mb-2">{entry.content}</p>

      {entry.comments.length > 0 && (
        <div className="mt-3 border-t pt-2">
          <p className="font-semibold text-sm mb-1 text-gray-700">Comments:</p>
          <ul className="space-y-1 text-sm text-gray-600">
            {entry.comments.map((comment) => (
              <li key={comment.id}>
                <span className="font-medium">{comment.author}:</span> {comment.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
