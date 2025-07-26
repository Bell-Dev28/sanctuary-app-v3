import { createServerClient } from '@/utils/supabase/server';
import { createBrowserClient } from '@/utils/supabase/browser';

// Fetch current user's profile
export async function getUserProfile() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('avatar_url, theme')
    .eq('id', user.id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

// Update avatar or theme
export async function updateUserProfile(data: { avatar_url?: string; theme?: string }) {
  const supabase = createBrowserClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { error } = await supabase
    .from('profiles')
    .update(data)
    .eq('id', user.id);

  if (error) throw new Error(error.message);
}
