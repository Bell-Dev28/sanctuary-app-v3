import { JournalBook } from "./_components/journal-book";

// --- Mock Data ---
// In a real app, this would come from your database.
const journals = [
  {
    id: "unspoken",
    title: "The Unspoken",
    description: "A space for the thoughts and feelings left unsaid.",
    color: "bg-slate-500",
  },
  {
    id: "peacemakers",
    title: "The Peacemaker's Playbook",
    description: "Resolving conflicts and finding harmony together.",
    color: "bg-emerald-500",
  },
  {
    id: "dreams",
    title: "The Dream Journal",
    description: "Sharing our aspirations, hopes, and futures.",
    color: "bg-indigo-500",
  },
];

// Simple function to get a time-based greeting
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
};

export default function HomePage() {
  const greeting = getGreeting();
  // In a real app, you would get the user's name from your auth session
  const userName = "Aaron"; 

  return (
    <div className="h-full px-4 py-6 lg:px-8">
        <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold tracking-tight">
                {greeting}, {userName}.
            </h1>
            <p className="text-muted-foreground mt-2">
                Your Sanctuary awaits. Choose a journal to continue your story.
            </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {journals.map((journal) => (
                <JournalBook
                    key={journal.id}
                    id={journal.id}
                    title={journal.title}
                    description={journal.description}
                    color={journal.color}
                />
            ))}
        </div>
    </div>
  );
}