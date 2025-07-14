"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare } from 'lucide-react';

export default function LoginPage() {
  const { user, signInWithEmail } = useAuth();
  const router = useRouter();

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

  return (
    <div className="w-full max-w-md p-8 md:p-10 space-y-8 bg-card rounded-2xl shadow-2xl">
      <div className="text-center">
        <div className="inline-flex items-center justify-center mb-4">
            <MessageSquare className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-foreground">
          Sanctuary
        </h1>
        <p className="text-muted-foreground mt-2">
          A private space for connection.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="h-12"
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
                    className="h-12"
                />
            </div>
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full font-bold tracking-wide"
          size="lg"
        >
          {loading ? 'Signing In…' : 'Secure Sign In'}
        </Button>
      </form>
    </div>
  );
}