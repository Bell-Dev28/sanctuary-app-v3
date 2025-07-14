import { ChatInterface } from "./_components/chat-interface";

// This type reflects the new asynchronous nature of props in Next.js 15
type StudioPageProps = {
  params: Promise<{ topicId: string }>;
};

// This is a mapping from slug to a user-friendly title
const topicTitles: { [key: string]: string } = {
  unspoken: "The Unspoken",
  peacemakers: "The Peacemaker's Playbook",
  dreams: "The Dream Journal",
};

// The page component MUST be an `async` function now
export default async function StudioPage({ params }: StudioPageProps) {
  // You MUST `await` the params object to resolve the promise
  const { topicId } = await params;

  const topicTitle = topicTitles[topicId] || "Your Studio";

  return (
    <div className="h-screen">
      <ChatInterface topicTitle={topicTitle} />
    </div>
  );
}