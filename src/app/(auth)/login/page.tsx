// src/app/(auth)/login/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-sm w-full bg-white rounded shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold">Sign In</h1>
        {sent ? (
          <p className="text-sm text-green-600">Check your email to complete login.</p>
        ) : (
          <>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border px-4 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
            >
              Send Magic Link
            </button>
          </>
        )}
      </div>
    </div>
  );
}
