// src/app/LayoutClient.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthProvider from "@/context/AuthContext";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <AuthProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r shadow-md p-4 flex flex-col">
          <div className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Sanctuary
          </div>
          <nav className="space-y-4 text-gray-700 dark:text-gray-300">
            <Link href="/" className={pathname === "/" ? "font-semibold" : ""}>
              📚 Shared Library
            </Link>
            <Link href="/studio/sample" className={pathname.includes("/studio") ? "font-semibold" : ""}>
              💡 Private AI Studio
            </Link>
            <Link href="/sanctuary/sample" className={pathname.includes("/sanctuary") ? "font-semibold" : ""}>
              🤝 Shared Sanctuary
            </Link>
            <Link href="/playbooks" className={pathname === "/playbooks" ? "font-semibold" : ""}>
              📖 Playbooks
            </Link>
            <Link href="/features/assistant" className={pathname.includes("/features") ? "font-semibold" : ""}>
              🎙️ Your AI Assistant
            </Link>
            <Link href="/profile" className={pathname === "/profile" ? "font-semibold" : ""}>
              👤 Profile
            </Link>
            <Link href="/login" className={pathname === "/login" ? "font-semibold text-blue-500" : ""}>
              🔑 Login
            </Link>
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
    </AuthProvider>
  );
}
