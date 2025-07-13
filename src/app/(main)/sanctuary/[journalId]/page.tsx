import { JournalEntry, EntryProps } from "./_components/journal-entry";

// This type reflects the new asynchronous nature of props in Next.js 15
type SanctuaryPageProps = {
  params: Promise<{ journalId: string }>;
};

// --- Mock Data ---
const mockEntries: EntryProps[] = [
    {
        id: "1",
        author: { name: "Marie", avatarUrl: "https://github.com/shadcn.png" },
        content: "I felt a little distant today...",
        timestamp: "10:30 AM",
        isOwnEntry: false,
    },
    {
        id: "2",
        author: { name: "Aaron", avatarUrl: "https://github.com/aaron.png" },
        content: "I noticed that too...",
        timestamp: "10:35 AM",
        isOwnEntry: true,
    },
];

// The page component MUST be an `async` function now
export default async function SanctuaryPage({ params }: SanctuaryPageProps) {
  // You MUST `await` the params object to resolve the promise
  const { journalId } = await params;
  
  const journalTitle = journalId.charAt(0).toUpperCase() + journalId.slice(1);

  return (
    <div className="h-full flex flex-col p-4 md:p-6">
        <header className="border-b pb-4 mb-6">
            <h1 className="text-3xl font-serif font-bold">The {journalTitle}</h1>
            <p className="text-muted-foreground">Our shared history. A space for truth and connection.</p>
        </header>

        <div className="flex-1 space-y-6 overflow-y-auto pr-2">
            {mockEntries.map((entry) => (
                <JournalEntry key={entry.id} entry={entry} />
            ))}
        </div>

        <footer className="mt-6">
            <div className="w-full h-16 rounded-lg bg-secondary flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Message Input Area</p>
            </div>
        </footer>
    </div>
  );
}