"use client";

import React from 'react';
import { Vortex } from '@/components/ui/vortex'; // Import the new component
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={210}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="w-full max-w-md p-8 md:p-10 space-y-8 bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-border">
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
          
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="h-12 bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="h-12 bg-transparent"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full font-bold tracking-wide"
              size="lg"
            >
              Secure Sign In
            </Button>
          </form>

          <div className="text-center">
              <p className="text-xs text-muted-foreground">
                  New to Sanctuary? <Link href="#" className="text-primary hover:underline">Create an account</Link>
              </p>
          </div>
        </div>
      </Vortex>
    </div>
  );
}