// src/app/(main)/playbooks/page.tsx
"use client";

import { useEffect, useState } from "react";
import PlaybookCard from "../playbooks/_components/playbookcard";
import { fetchPlaybooks, Playbook } from "@/lib/playbookService";

export default function PlaybooksPage() {
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);

  useEffect(() => {
    fetchPlaybooks("relationship").then(setPlaybooks);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">📖 Playbooks Archive</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">The Relationship Log</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {playbooks.map((pb) => (
              <PlaybookCard
                key={pb.id}
                title={pb.title}
                content={pb.content}
                journal="The Relationship Log"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
