import { notFound } from 'next/navigation';
import { getUser } from '@/utils/supabase/server';
import { fetchJournalById } from '@/lib/actions/journals/fetchJournal';
import { fetchJournalEntries } from '@/lib/actions/journals/Entries';
import JournalEntryCard from '@/components/sanctuary/JournalEntryCard';
import JournalEditor from '@/components/sanctuary/JournalEditor';
import CollaborationPanel from '@/components/sanctuary/CollaborationPanel';
import { Suspense } from 'react';

interface Props {
  params: { journalId: string };
}

export default async function JournalPage({ params }: Props) {
  const user = await getUser();
  if (!user) return notFound();

  const journalId = params.journalId;
  const journal = await fetchJournalById(journalId);
  const entries = await fetchJournalEntries(journalId);

  if (!journal) return notFound();

  return (
    <div className="relative flex min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <h1 className="text-2xl font-bold">{journal.title}</h1>

        <JournalEditor journalId={journalId} userId={user.id} />

        <div className="space-y-4">
          {entries.map((entry) => (
            <JournalEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>

      {/* Collaboration Panel (open by default for now) */}
      <Suspense fallback={null}>
        <CollaborationPanel open={true} />
      </Suspense>
    </div>
  );
}
