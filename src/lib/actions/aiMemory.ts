import { getSupabaseServer } from '@/utils/supabase/server';

export async function fetchAIMemoryByTopic(topicId: string) {
  const supabase = getSupabaseServer();
  const { data, error } = await supabase
    .from('ai_memory_core')
    .select('*')
    .eq('topic_id', topicId);

  if (error) {
    console.error('Error fetching AI memory:', error);
    return null;
  }

  return data;
}
