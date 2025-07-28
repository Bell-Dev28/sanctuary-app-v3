interface CommentItemProps {
  comment: {
    user: string;
    content: string;
    created_at: string;
  };
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="border rounded p-2 mb-2">
      <p className="text-sm font-semibold">{comment.user}</p>
      <p className="text-sm">{comment.content}</p>
      <p className="text-xs text-gray-500">{new Date(comment.created_at).toLocaleString()}</p>
    </div>
  );
}
