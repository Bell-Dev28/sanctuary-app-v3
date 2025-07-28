import { notFound } from 'next/navigation';
import { getUser } from '@/utils/supabase/server';
import { fetchJournalById } from '@/lib/actions/journals/fetchJournal';
import { fetchJournalEntries } from '@/lib/actions/journals/Entries';
import JournalEntryCard from '@/components/sanctuary/JournalEntryCard';
import JournalEditor from '@/components/sanctuary/JournalEditor';

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
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">{journal.title}</h1>
      <JournalEditor journalId={journalId} userId={user.id} />
      <div>
        {entries.map((entry) => (
          <JournalEntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
