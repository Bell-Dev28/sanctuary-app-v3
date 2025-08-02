'use client';

export default function MobileNavToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="md:hidden fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-2 rounded shadow border border-gray-200 dark:border-gray-600"
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      ☰
    </button>
  );
}