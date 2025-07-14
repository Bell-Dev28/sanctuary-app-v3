"use client";

import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface JournalBookProps {
  id: string;
  title: string;
  description: string;
  color: string;
}

export const JournalBook = ({ id, title, description, color }: JournalBookProps) => {
  const router = useRouter();

  const handleNavigate = (path: 'studio' | 'sanctuary') => {
    router.push(`/${path}/${id}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`relative w-full h-80 rounded-lg shadow-xl cursor-pointer overflow-hidden group border-2 ${color}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="flex flex-col justify-end h-full p-6">
            <BookMarked className="w-10 h-10 text-white/70 mb-2 group-hover:text-primary transition-colors" />
            <h2 className="text-3xl font-serif font-bold text-white">
              {title}
            </h2>
            <p className="text-white/70 text-sm mt-1">{description}</p>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Where would you like to begin your journey today?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button variant="default" size="lg" onClick={() => handleNavigate('sanctuary')}>
            View Our Journal
          </Button>
          <Button variant="outline" size="lg" onClick={() => handleNavigate('studio')}>
            Explore with AI
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};