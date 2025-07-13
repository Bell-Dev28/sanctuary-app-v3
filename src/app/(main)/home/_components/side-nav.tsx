// app/(main)/_components/side-nav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, BrainCircuit, Home, MessageSquare, Menu } from "lucide-react";

// The 'cn' import that was causing the error has been removed.
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Define the routes for your navigation
const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
  },
  {
    label: "Playbooks",
    icon: BookOpen,
    href: "/playbooks",
  },
  {
    label: "AI Sandbox", // This can link to your general AI assistant page
    icon: BrainCircuit,
    href: "/assistant", 
  },
];

export function SideNav() {
  const pathname = usePathname();

  const navContent = (
    <>
      <div className="p-4 mb-4 border-b border-border">
        <Link href="/home" className="flex items-center gap-x-3">
          <MessageSquare className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-serif font-bold text-foreground">
            Sanctuary
          </h1>
        </Link>
      </div>
      <div className="flex flex-col space-y-2 px-4">
        {routes.map((route) => (
          <Button
            key={route.href}
            variant={pathname === route.href ? "secondary" : "ghost"}
            className="w-full justify-start h-12"
            asChild
          >
            <Link href={route.href}>
              <route.icon className="h-5 w-5 mr-3" />
              {route.label}
            </Link>
          </Button>
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* --- Mobile Sidebar (Sheet) --- */}
      <div className="md:hidden p-2 border-b">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 bg-card">
            {navContent}
          </SheetContent>
        </Sheet>
      </div>

      {/* --- Desktop Sidebar (Permanent) --- */}
      <aside className="hidden md:flex flex-col h-full w-72 bg-card border-r border-border shadow-sm">
        {navContent}
      </aside>
    </>
  );
}