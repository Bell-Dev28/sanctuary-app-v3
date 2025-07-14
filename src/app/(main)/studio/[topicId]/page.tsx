import { ChatInterface } from "./_components/chat-interface";

// This is a mapping from slug to a user-friendly title
const topicTitles: { [key: string]: string } = {
  unspoken: "The Unspoken",
  peacemakers: "The Peacemaker's Playbook",
  dreams: "The Dream Journal",
};

export default function StudioPage({ params }: { params: { topicId: string } }) {
  const topicTitle = topicTitles[params.topicId] || "Your Studio";

  return (
    <div className="h-screen">
      <ChatInterface topicTitle={topicTitle} />
    </div>
  );
}