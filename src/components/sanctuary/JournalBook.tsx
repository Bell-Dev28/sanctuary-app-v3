'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type JournalBookProps = {
  id: number;
  title: string;
};

const MotionAnchor = motion.a; // ✅ Best practice, fully typed

export default function JournalBook({ id, title }: JournalBookProps) {
  return (
    <Link href={`/journal/${id}`} passHref legacyBehavior>
      <MotionAnchor
        whileHover={{
          rotateY: 15,
          scale: 1.05,
          transition: {
            type: 'spring',
            stiffness: 120,
            damping: 18,
          },
        }}
        className="block bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
                   rounded-xl p-6 w-full max-w-sm cursor-pointer transform-gpu 
                   transition-transform duration-300 shadow-lg"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '800px',
        }}
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
        <p className="text-sm text-blue-600 dark:text-blue-400">Tap to explore</p>
      </MotionAnchor>
    </Link>
  );
}
