"use client";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/login'); // Redirect to login page after sign out
  };

  return (
    <div className="h-full p-6 md:p-10">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold tracking-tight">
          Your Profile
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your account details and preferences.
        </p>
      </div>

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>This is the email associated with your Sanctuary account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <p className="text-lg font-medium">
              {user ? user.email : "Loading..."}
            </p>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button variant="destructive" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}