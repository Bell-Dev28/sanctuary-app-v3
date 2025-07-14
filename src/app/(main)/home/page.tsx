import { JournalBook } from "./_components/journal-book";

const journals = [
  {
    id: "unspoken",
    title: "The Unspoken",
    description: "For thoughts and feelings left unsaid.",
    color: "border-sky-500/50",
  },
  {
    id: "peacemakers",
    title: "The Peacemaker's Playbook",
    description: "Resolving conflicts and finding harmony.",
    color: "border-emerald-500/50",
  },
  {
    id: "dreams",
    title: "The Dream Journal",
    description: "Sharing our aspirations and futures.",
    color: "border-indigo-500/50",
  },
];

export default function HomePage() {
  const userName = "Aaron"; // This would come from your auth context

  return (
    <div className="h-full p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold tracking-tight">
          Welcome back, {userName}.
        </h1>
        <p className="text-muted-foreground mt-2">
          Your Shared Library awaits. Choose a journal to continue your story.
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