"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Lightbulb, Sparkles } from "lucide-react";
import { useState } from "react";

// Mock AI suggestions
const suggestions = [
  "Create a 'Weekly Check-in' ritual.",
  "Design a 'Safe Word' for arguments.",
  "Outline a 'Dream-Sharing' exercise.",
];

export const PlaybookGenerator = () => {
  const [generatedPlaybook, setGeneratedPlaybook] = useState("");

  const handleGenerate = () => {
    // In a real app, this would call the AI service
    setGeneratedPlaybook(
      "**Playbook Title:** The Weekly Check-In Ritual\n\n" +
      "**Objective:** To create a dedicated, gentle space to reconnect and share what's truly on our minds.\n\n" +
      "**Steps:**\n" +
      "1. **Set the Time:** Choose a calm, quiet time each week (e.g., Sunday evening).\n" +
      "2. **The Prompt:** One person starts by asking, 'What was one high point and one low point of your week?'\n" +
      "3. **Active Listening:** The other person listens without interrupting or offering solutions, simply being present.\n" +
      "4. **Switch Roles:** Repeat the process for the other person."
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Lightbulb className="h-5 w-5 text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] p-6">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Playbook Generator</SheetTitle>
        </SheetHeader>
        <div className="py-6">
          <p className="text-muted-foreground mb-4">
            Generate tailored rituals and connection exercises based on your journal.
          </p>
          <Button className="w-full" onClick={() => setGeneratedPlaybook("")}>
            <Sparkles className="h-4 w-4 mr-2" />
            Generate New Suggestions
          </Button>

          <div className="mt-6 space-y-2">
            {suggestions.map((s, i) => (
              <Button key={i} variant="secondary" className="w-full justify-start" onClick={handleGenerate}>
                {s}
              </Button>
            ))}
          </div>

          {generatedPlaybook && (
            <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-2">Generated Playbook:</h3>
                <textarea 
                    className="w-full h-48 p-2 bg-secondary rounded-md text-sm"
                    value={generatedPlaybook}
                    onChange={(e) => setGeneratedPlaybook(e.target.value)}
                />
                <Button className="w-full mt-2">Save to Playbooks</Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};