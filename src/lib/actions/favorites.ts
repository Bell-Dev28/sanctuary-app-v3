"use server";

import { createServerSupabaseClient } from "@/utils/supabase/server";

export async function fetchFavoritesByUser(userId: string) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("favorites")
    .select("playbook_id, created_at") // or “*” if you need more fields
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching favorites:", error);
    return [];
  }

  return data;
}
