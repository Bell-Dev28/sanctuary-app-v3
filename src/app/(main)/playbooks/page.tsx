// src/app/(main)/playbooks/page.tsx
"use client";

import { useEffect, useState } from "react";
import PlaybookCard from "../playbooks/_components/playbookcard";
import { fetchPlaybooks, Playbook } from "@/lib/playbookService";
import PageTransition from "@/components/shared/PageTransition";
import Skeleton from "@/components/shared/skeleton";
import { motion } from "framer-motion";

export default function PlaybooksPage() {
  const [playbooks, setPlaybooks] = useState<Playbook[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlaybooks("relationship").then((data) => {
      setPlaybooks(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <PageTransition>
      <h1 className="text-3xl font-bold mb-8">📖 Playbooks Archive</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">The Relationship Log</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isLoading
              ? [...Array(2)].map((_, idx) => (
                  <div key={idx} className="space-y-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ))
              : playbooks.map((pb, idx) => (
                  <motion.div
                    key={pb.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <PlaybookCard
                      title={pb.title}
                      content={pb.content}
                      journal="The Relationship Log"
                    />
                  </motion.div>
                ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
