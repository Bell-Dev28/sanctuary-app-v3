// src/lib/playbookService.ts
import { supabase } from "./supabaseClient";

export type Playbook = {
  id: string;
  journal_id: string;
  title: string;
  content: string;
  created_at: string;
};

export async function fetchPlaybooks(journalId: string) {
  const { data, error } = await supabase
    .from("playbooks")
    .select("*")
    .eq("journal_id", journalId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch playbooks error:", error.message);
    return [];
  }

  return data as Playbook[];
}

export async function savePlaybook(journalId: string, title: string, content: string) {
  const { data, error } = await supabase.from("playbooks").insert([
    {
      journal_id: journalId,
      title,
      content,
    },
  ]);

  if (error) {
    console.error("Save playbook error:", error.message);
    return null;
  }

  return data?.[0];
}
