import { JournalEntry, EntryProps } from "./_components/journal-entry";
import { PlaybookGenerator } from "./_components/playbook-generator"; // Import the new component

const mockEntries: EntryProps[] = [
    // ... (your mock entries remain the same)
];

const topicTitles: { [key: string]: string } = {
  // ... (your topic titles remain the same)
};

export default function SanctuaryPage({ params }: { params: { journalId: string } }) {
  const journalTitle = topicTitles[params.journalId] || "Our Journal";

  return (
    <div className="h-screen flex flex-col p-6 md:p-10">
        <header className="flex justify-between items-center border-b border-border pb-4 mb-6">
            <div>
                <h1 className="text-3xl font-serif font-bold">{journalTitle}</h1>
                <p className="text-muted-foreground">Our shared history. A space for truth and connection.</p>
            </div>
            <PlaybookGenerator /> {/* Add the component here */}
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