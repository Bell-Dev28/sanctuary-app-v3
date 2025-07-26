// src/app/(main)/studio/[topicId]/page.tsx
import { fetchAIMemoryByTopic } from "@/lib/actions/aiMemory";
import MemoryCard from "@/components/studio/MemoryCard";

interface StudioPageProps {
  params: {
    topicId: string;
  };
}

export default async function StudioPage({ params }: StudioPageProps) {
  const memories = await fetchAIMemoryByTopic(params.topicId);

  return (
    <div className="space-y-4">
      {memories.map((entry) => (
        <MemoryCard key={entry.id} memory={entry} />
      ))}
    </div>
  );
}
