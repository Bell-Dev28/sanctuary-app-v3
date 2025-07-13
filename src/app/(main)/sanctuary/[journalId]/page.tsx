import { JournalEntry, EntryProps } from "./_components/journal-entry";

// This is a robust and standard way to type props for dynamic pages
// in recent versions of Next.js.
type PageProps<T = { journalId: string }> = {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
};

// --- Mock Data ---
const mockEntries: EntryProps[] = [
    {
        id: "1",
        author: { name: "Marie", avatarUrl: "https://github.com/shadcn.png" },
        content: "I felt a little distant today. I was thinking about the conversation we had this morning and wasn't sure how to bring it up again.",
        timestamp: "10:30 AM",
        isOwnEntry: false,
    },
    {
        id: "2",
        author: { name: "Aaron", avatarUrl: "https://github.com/aaron.png" },
        content: "I noticed that too. I'm so glad you wrote it here. I've been thinking about it as well and wanted to make sure you felt heard.",
        timestamp: "10:35 AM",
        isOwnEntry: true,
    },
];

// Apply the robust PageProps type here
export default function SanctuaryPage({ params }: PageProps) {
  const journalTitle = params.journalId.charAt(0).toUpperCase() + params.journalId.slice(1);

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