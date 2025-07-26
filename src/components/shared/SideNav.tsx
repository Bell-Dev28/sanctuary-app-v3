"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

const routes = [
  { label: "Shared Library", icon: Home, href: "/home" },
  { label: "Playbooks", icon: BookOpen, href: "/playbooks" },
  { label: "Profile", icon: User, href: "/profile" },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-72 bg-card border-r border-border p-4">
        <div className="p-4 mb-4">
            <Link href="/home" className="flex items-center gap-x-3">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-serif font-bold text-foreground">
                Sanctuary
            </h1>
            </Link>
        </div>
        <div className="flex flex-col space-y-2">
            {routes.map((route) => (
            <Button
                key={route.href}
                variant={pathname.startsWith(route.href) ? "secondary" : "ghost"}
                className="w-full justify-start h-12 text-base"
                asChild
            >
                <Link href={route.href}>
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
                </Link>
            </Button>
            ))}
        </div>
    </aside>
  );
}