import { JournalEntry, EntryProps } from "./_components/journal-entry";
import { PlaybookGenerator } from "./_components/playbook-generator";

// This type is correct for Next.js 15 Server Components with dynamic routes
type SanctuaryPageProps = {
  params: Promise<{ journalId: string }>;
};

const mockEntries: EntryProps[] = [
    { id: "1", author: { name: "Marie", avatarUrl: "https://github.com/shadcn.png" }, content: "I felt a little distant today...", isOwnEntry: false },
    { id: "2", author: { name: "Aaron", avatarUrl: "https://github.com/aaron.png" }, content: "I noticed that too...", isOwnEntry: true },
];

const topicTitles: { [key: string]: string } = {
  unspoken: "The Unspoken",
  peacemakers: "The Peacemaker's Playbook",
  dreams: "The Dream Journal",
};

// The component MUST be an `async` function
export default async function SanctuaryPage({ params }: SanctuaryPageProps) {
  // You MUST `await` the params to get their value
  const { journalId } = await params;

  const journalTitle = topicTitles[journalId] || "Our Journal";

  return (
    <div className="h-screen flex flex-col p-6 md:p-10">
        <header className="flex justify-between items-center border-b pb-4 mb-6">
            <div>
                <h1 className="text-3xl font-serif font-bold">{journalTitle}</h1>
                <p className="text-muted-foreground">Our shared history. A space for truth and connection.</p>
            </div>
            <PlaybookGenerator />
        </header>

        <div className="flex-1 space-y-6 overflow-y-auto pr-4">
            {mockEntries.map((entry) => (
                <JournalEntry key={entry.id} entry={entry} />
            ))}
        </div>

        <footer className="mt-6">
            <div className="w-full h-16 rounded-lg bg-secondary flex items-center justify-center">
                <p className="text-muted-foreground text-sm">New Entry Input Area</p>
            </div>
        </footer>
    </div>
  );
}