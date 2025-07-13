import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlaybookCard, Playbook } from "./_components/playbook-card";

// --- Mock Data ---
// In a real app, this would be fetched from your database and grouped by topic.
const playbooksByTopic: { topic: string; playbooks: Playbook[] }[] = [
  {
    topic: "From 'The Unspoken'",
    playbooks: [
      {
        id: "pb1",
        title: "The 'Check-In' Ritual",
        content: "A simple ritual for us to reconnect when we feel distant.\n1. One of us initiates by saying 'I'd love to check-in.'\n2. We find a quiet moment and each share one thing on our mind, and one thing we appreciate about the other person today.",
        isFavoritedByMe: true,
        isFavoritedByPartner: true,
      },
      {
        id: "pb2",
        title: "The 'Safe Word' for Arguments",
        content: "When a discussion gets too heated, either of us can say 'Sanctuary'. This means we pause the conversation for 10 minutes to cool down, no questions asked.",
        isFavoritedByMe: true,
        isFavoritedByPartner: false,
      },
    ],
  },
  {
    topic: "From 'The Peacemaker's Playbook'",
    playbooks: [
      {
        id: "pb3",
        title: "The 'Unity' Perspective",
        content: "When we disagree, we state the problem as a shared challenge. Instead of 'You did X', we say 'We have a situation with X. How can we solve it together?'",
        isFavoritedByMe: false,
        isFavoritedByPartner: true,
      },
    ],
  },
];


export default function PlaybooksPage() {
  return (
    <div className="h-full px-4 py-6 lg:px-8">
        <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold tracking-tight">
                Our Playbooks
            </h1>
            <p className="text-muted-foreground mt-2">
                A collection of our co-created rituals and strategies for connection.
            </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {playbooksByTopic.map((group, index) => (
                <AccordionItem key={group.topic} value={`item-${index}`}>
                    <AccordionTrigger className="text-xl font-serif">
                        {group.topic}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-6 pt-4">
                            {group.playbooks.map((playbook) => (
                                <PlaybookCard key={playbook.id} playbook={playbook} />
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  );
}