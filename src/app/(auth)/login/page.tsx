"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const { user, signInWithEmail } = useAuth();
  const router = useRouter();
  // const defaultTopicSlug = 'the-unspoken'; // <-- DELETE THIS LINE

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      router.replace(`/home`);
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmail(email, password);
      toast.success('Signed in successfully!');
      router.replace(`/home`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // ... rest of your return statement
  return (
    <div className="w-full max-w-sm p-8 space-y-6 bg-card rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold">
          Welcome to Sanctuary
        </h1>
        <p className="text-muted-foreground mt-2">
          Sign in to continue
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
        </div>
        <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full"
          size="lg"
        >
          {loading ? 'Signing in…' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
}