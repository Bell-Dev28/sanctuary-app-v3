'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type JournalBookProps = {
  id: number;
  title: string;
};

export default function JournalBook({ id, title }: JournalBookProps) {
  return (
    <Link href={`/journal/${id}`} passHref>
      {/* Use motion.div *inside* Link, not motion.a */}
      <motion.div
        whileHover={{
          rotateY: 10,
          scale: 1.03,
          transition: { type: 'spring', stiffness: 150, damping: 15 },
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '800px',
        }}
        className="block bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
                   rounded-xl p-6 w-full max-w-sm cursor-pointer transform-gpu 
                   transition-transform duration-300 shadow-lg"
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-sm text-blue-600 dark:text-blue-400">Tap to explore</p>
      </motion.div>
    </Link>
  );
}
