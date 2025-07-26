// src/lib/actions/journals/fetchJournal.ts
"use server";

import { createServerSupabaseClient } from "@/utils/supabase/server";

export async function fetchJournalById(journalId: number) {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from("journals")
    .select(
      `
      id,
      created_at,
      title,
      intention,
      user_id,
      journal_entries (
        id,
        created_at,
        topic,
        content,
        is_shared
      )
    `
    )
    .eq("id", journalId)
    .single();

  if (error) {
    console.error("Error fetching journal:", error.message);
    return null;
  }

  return data;
}
