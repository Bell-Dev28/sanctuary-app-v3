import { createServerSupabaseClient } from '@/utils/supabase/server';

export async function fetchAiMemories(userId: string) {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('ai_memory_core')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  return data;
}

export async function fetchAIMemoryByTopic(topicId: string) {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('ai_memory_core')
    .select('*')
    .eq('topic_id', topicId)
    .single();

  if (error) throw error;
  return data;
}
