import { getSupabaseServer } from '@/utils/supabase/server';

export async function toggleFavorite(userId: string, itemId: string, type: 'journal' | 'playbook') {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('favorites')
    .upsert([{ user_id: userId, item_id: itemId, type }]);
  if (error) throw new Error(error.message);
  return data;
}
