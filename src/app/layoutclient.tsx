// src/app/LayoutClient.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r shadow-md p-4 flex flex-col">
        <div className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Sanctuary
        </div>
        <nav className="space-y-4 text-gray-700 dark:text-gray-300">
          <Link href="/">📚 Shared Library</Link>
          <Link href="/studio/sample">💡 Private AI Studio</Link>
          <Link href="/sanctuary/sample">🤝 Shared Sanctuary</Link>
          <Link href="/playbooks">📖 Playbooks</Link>
          <Link href="/features/assistant">🎙️ Your AI Assistant</Link>
          <Link href="/profile">👤 Profile</Link>
        </nav>
        <div className="mt-auto pt-6 text-xs text-gray-400 dark:text-gray-500">
          Signed in as Marie
          <div className="mt-4">
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 border rounded text-xs"
            >
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-white dark:bg-gray-900 transition-colors">
        {children}
      </main>
    </div>
  );
}
