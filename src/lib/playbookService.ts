// src/lib/playbookService.ts
import { supabase } from './supabaseClient';
import { encrypt, decrypt } from './encryptionService';
import type { Database } from './database';

export type Playbook = Database['public']['Tables']['playbooks']['Row'];

/**
 * Fetches all playbooks, decrypting their content.
 */
export async function fetchPlaybooks(): Promise<Playbook[]> {
  const { data, error } = await supabase
    .from('playbooks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []).map((p) => ({
    ...p,
    content: decrypt(p.content),
  }));
}

/**
 * Inserts a new playbook under a topic, encrypting content.
 */
export async function insertPlaybook(
  topicId: string,
  content: string
): Promise<Playbook> {
  const encrypted = encrypt(content);
  const { data, error } = await supabase
    .from('playbooks')
    .insert({ topic_id: topicId, content: encrypted })
    .select('*')
    .single();

  if (error) throw error;
  return { ...data, content: decrypt(data.content) };
}

/**
 * Toggles the current user's favorite status on a playbook.
 */
export async function toggleFavorite(
  playbookId: string,
  userId: string
): Promise<Playbook> {
  // Get existing favorites array
  const { data: existing, error: fetchError } = await supabase
    .from('playbooks')
    .select('favorites')
    .eq('id', playbookId)
    .single();

  if (fetchError || !existing) throw fetchError || new Error('Playbook not found');

  const favs = existing.favorites ?? [];
  const idx = favs.indexOf(userId);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(userId);

  // Update the row with new favorites
  const { data, error } = await supabase
    .from('playbooks')
    .update({ favorites: favs })
    .eq('id', playbookId)
    .select('*')
    .single();

  if (error) throw error;
  return { ...data, content: decrypt(data.content) };
}
