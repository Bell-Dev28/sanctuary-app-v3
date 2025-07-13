// src/features/library/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
  fetchJournalEntries,
  insertJournalEntry,
  JournalEntry,
} from '@/lib/entryService';
import CommentThread from '@/components/ui/commentthread';
import { toast } from 'sonner';

export default function JournalPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();

  // Raw param may be string | string[] | undefined
  const raw = params.journalTitle;
  // Normalize to a single string (or empty string if undefined)
  const topicId = Array.isArray(raw) ? raw[0] : raw ?? '';

  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newContent, setNewContent] = useState('');
  const [loading, setLoading] = useState(false);

  // 1) Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user, router]);

  // 2) Redirect home if no topic slug in URL
  useEffect(() => {
    if (!raw) {
      router.replace('/');
    }
  }, [raw, router]);

  // 3) Load entries whenever user and topicId are ready
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchJournalEntries(topicId);
        setEntries(data);
      } catch (err: unknown) {
        toast.error(
          err instanceof Error ? err.message : 'Error loading entries'
        );
      }
    }
    if (user && raw) {
      load();
    }
  }, [user, raw, topicId]);

  // Early return until we have a user and valid topic
  if (!user || !raw) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newContent.trim()) return;
    setLoading(true);
    try {
      const inserted = await insertJournalEntry(
        topicId,
        newContent.trim()
      );
      setEntries((prev) => [...prev, inserted]);
      setNewContent('');
      toast.success('Entry added');
    } catch (err: unknown) {
      toast.error(
        err instanceof Error ? err.message : 'Failed to add entry'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="px-4 py-2 border-b flex items-center justify-between">
        <h1 className="text-xl font-semibold">Journal: {topicId}</h1>
      </header>

      {/* Entries Feed */}
      <main className="flex-1 overflow-auto p-4 space-y-6">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className={`flex flex-col space-y-2 max-w-2xl mx-auto ${
              entry.user_id === user.id ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                entry.user_id === user.id
                  ? 'bg-blue-100 text-blue-900'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {entry.content}
            </div>
            <CommentThread entryId={entry.id} />
          </div>
        ))}
      </main>

      {/* New Entry Form */}
      <footer className="px-4 py-2 border-t">
        <form
          onSubmit={handleSubmit}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            placeholder="Write a new entry…"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            disabled={loading}
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            disabled={loading || !newContent.trim()}
            className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {loading ? 'Saving…' : 'Save'}
          </button>
        </form>
      </footer>
    </div>
  );
}
