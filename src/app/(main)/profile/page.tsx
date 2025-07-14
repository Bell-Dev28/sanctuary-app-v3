"use client"; // This page uses a hook, so it must be a Client Component

import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold">Profile</h1>
      <p className="mt-4">
        Welcome, {user ? user.email : "Guest"}.
      </p>
    </div>
  );
}