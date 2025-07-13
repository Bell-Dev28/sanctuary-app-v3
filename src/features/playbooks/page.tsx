// src/features/playbooks/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import {
  fetchPlaybooks,
  insertPlaybook,
  toggleFavorite,
  Playbook,
} from '@/lib/playbookService';
import { useAuth } from '@/context/AuthContext';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function PlaybooksPage() {
  const { user } = useAuth();
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);
  const [newContent, setNewContent] = useState('');
  const [loading, setLoading] = useState(false);

  // Load all playbooks on mount
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPlaybooks();
        setPlaybooks(data);
      } catch (err: unknown) {
        toast.error(
          err instanceof Error ? err.message : 'Failed to load playbooks'
        );
      }
    }
    load();
  }, []);

  // Group playbooks by topic
  const byTopic = playbooks.reduce<Record<string, Playbook[]>>((acc, pb) => {
    (acc[pb.topic_id] ||= []).push(pb);
    return acc;
  }, {});

  // Add a new playbook under the given topic
  const handleAdd = async (topic: string) => {
    if (!newContent.trim()) return;
    setLoading(true);
    try {
      const inserted = await insertPlaybook(topic, newContent.trim());
      setPlaybooks(prev => [inserted, ...prev]);
      setNewContent('');
      toast.success('Playbook saved');
    } catch (err: unknown) {
      toast.error(
        err instanceof Error ? err.message : 'Failed to save playbook'
      );
    } finally {
      setLoading(false);
    }
  };

  // Toggle current user's favorite on a playbook
  const handleFav = async (id: string) => {
    if (!user) return toast.error('Sign in to favorite');
    try {
      const updated = await toggleFavorite(id, user.id);
      setPlaybooks(prev =>
        prev.map(pb => (pb.id === id ? updated : pb))
      );
    } catch (err: unknown) {
      toast.error(
        err instanceof Error ? err.message : 'Failed to update favorite'
      );
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 font-semibold">Playbooks Archive</h1>

      {Object.entries(byTopic).map(([topic, list]) => (
        <Accordion key={topic} type="single" collapsible className="mb-6">
          <AccordionItem value={topic}>
            <AccordionTrigger>{topic}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {list.map(pb => (
                  <Card key={pb.id}>
                    <CardTitle className="flex justify-between items-center">
                      <span>
                        {new Date(pb.created_at).toLocaleString()}
                      </span>
                      <button onClick={() => handleFav(pb.id)}>
                        <Heart
                          className={cn(
                            'transition-colors',
                            pb.favorites.includes(user?.id ?? '')
                              ? 'fill-red-500 text-red-500'
                              : 'fill-none text-gray-400'
                          )}
                        />
                      </button>
                    </CardTitle>
                    <CardContent>{pb.content}</CardContent>
                  </Card>
                ))}

                {/* New playbook input */}
                <div className="flex space-x-2 mt-2">
                  <input
                    type="text"
                    placeholder="New playbook…"
                    value={newContent}
                    onChange={e => setNewContent(e.target.value)}
                    disabled={loading}
                    className="flex-1 border border-gray-300 rounded px-2 py-1"
                  />
                  <button
                    onClick={() => handleAdd(topic)}
                    disabled={loading || !newContent.trim()}
                    className="px-4 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
                  >
                    {loading ? 'Saving…' : 'Save'}
                  </button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      {playbooks.length === 0 && (
        <p className="text-gray-500">No playbooks yet.</p>
      )}
    </div>
  );
}
