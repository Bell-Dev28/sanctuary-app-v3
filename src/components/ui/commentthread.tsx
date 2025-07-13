// src/components/ui/CommentThread.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import {
  fetchComments,
  insertComment,
  Comment,
} from '@/lib/commentService';

interface CommentThreadProps {
  entryId: string;
}

export default function CommentThread({ entryId }: CommentThreadProps) {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  // Load comments whenever entryId changes
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchComments(entryId);
        setComments(data);
      } catch {
        toast.error('Error loading comments');
      }
    }
    load();
  }, [entryId]); // no missing-deps warning now

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setLoading(true);
    try {
      const inserted = await insertComment(entryId, newComment.trim());
      setComments((prev) => [...prev, inserted]);
      setNewComment('');
      toast.success('Comment added');
    } catch {
      toast.error('Failed to add comment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-1 space-y-1">
      {comments.map((c) => (
        <div
          key={c.id}
          className={`text-sm ${
            c.user_id === user?.id
              ? 'text-right text-blue-600'
              : 'text-left text-gray-700'
          }`}
        >
          {c.content}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex space-x-2 mt-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
          placeholder="Add comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !newComment.trim()}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm disabled:opacity-50"
        >
          {loading ? '…' : 'Reply'}
        </button>
      </form>
    </div>
  );
}
