// src/components/studio/MemoryCard.tsx
import { Database } from "@/types/supabase";

type AIMemory = Database["public"]["Tables"]["ai_memory_core"]["Row"];

interface MemoryCardProps {
  memory: AIMemory;
}

export default function MemoryCard({ memory }: MemoryCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {memory.memory_text}
      </p>
      <div className="mt-2 text-xs text-gray-400">
        {new Date(memory.created_at).toLocaleString()}
      </div>
    </div>
  );
}
