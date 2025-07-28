'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [username, setUsername] = useState('Marie');

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>
      <label className="block mb-2 text-sm">Username</label>
      <input
        className="w-full border p-2 rounded mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </main>
  );
}
