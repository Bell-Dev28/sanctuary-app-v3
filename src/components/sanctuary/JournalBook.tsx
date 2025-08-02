'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

const MotionDiv = motion<React.HTMLAttributes<HTMLDivElement>>('div');

type JournalBookProps = {
  id: number;
  title: string;
};

export default function JournalBook({ id, title }: JournalBookProps) {
  const flipStyle: CSSProperties = {
    perspective: '1200px',
  };

  return (
    <Link href={`/journal/${id}`}>
      <MotionDiv
        whileHover={{ rotateY: 25, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 160, damping: 14 }}
        style={flipStyle}
        className="shadow-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl p-6 w-full max-w-sm cursor-pointer transform origin-left"
      >
        <div className="transform-gpu transition-transform duration-300">
          <h2 className="text-xl font-extrabold text-gray-800 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-sm text-blue-600 dark:text-blue-400">Tap to explore</p>
        </div>
      </MotionDiv>
    </Link>
  );
}