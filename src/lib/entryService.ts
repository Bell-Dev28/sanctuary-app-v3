// src/lib/entryService.ts
import { supabase } from "./supabaseClient";

export type JournalEntry = {
  id: string;
  journal_id: string;
  author: "marie" | "aaron";
  text: string;
  created_at: string;
};

export async function fetchJournalEntries(journalId: string) {
  const { data, error } = await supabase
    .from("journal_entries")
    .select("*")
    .eq("journal_id", journalId)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Fetch journal entries error:", error.message);
    return [];
  }

  return data as JournalEntry[];
}

export async function addJournalEntry(journalId: string, author: string, text: string) {
  const { data, error } = await supabase.from("journal_entries").insert([
    {
      journal_id: journalId,
      author,
      text,
    },
  ]);

  if (error) {
    console.error("Add journal entry error:", error.message);
    return null;
  }

  return data?.[0];
}
