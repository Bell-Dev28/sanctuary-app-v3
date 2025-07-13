import { JournalEntry, EntryProps } from "./_components/journal-entry";

// --- Mock Data ---
// In a real app, this would come from your database for the specific journalId.
// The `isOwnEntry` flag would be set by comparing the entry's author ID
// with the currently logged-in user's ID.

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
        author: { name: "Aaron", avatarUrl: "https://github.com/aaron.png" }, // Placeholder URL
        content: "I noticed that too. I'm so glad you wrote it here. I've been thinking about it as well and wanted to make sure you felt heard.",
        timestamp: "10:35 AM",
        isOwnEntry: true,
    },
    {
        id: "3",
        author: { name: "Marie", avatarUrl: "https://github.com/shadcn.png" },
        content: "That means so much to hear. Thank you for creating this space for us. It really does make it easier.",
        timestamp: "10:37 AM",
        isOwnEntry: false,
    },
];


// We can use the params to fetch the correct journal title
export default function SanctuaryPage({ params }: { params: { journalId: string } }) {
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

        {/* The text input area for new entries would go here */}
        <footer className="mt-6">
            {/* Placeholder for the message input component */}
            <div className="w-full h-16 rounded-lg bg-secondary flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Message Input Area</p>
            </div>
        </footer>
    </div>
  );
}