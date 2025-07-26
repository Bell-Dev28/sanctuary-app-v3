/* lib/actions/reactions.ts */
'use server';

import { createServerClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function toggleReaction(playbookId: number, emoji: string) {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data: existing } = await supabase
    .from('playbook_reactions')
    .select('id')
    .eq('user_id', user.id)
    .eq('playbook_id', playbookId)
    .eq('emoji', emoji)
    .maybeSingle();

  if (existing) {
    await supabase.from('playbook_reactions').delete().eq('id', existing.id);
  } else {
    await supabase.from('playbook_reactions').insert({
      user_id: user.id,
      playbook_id: playbookId,
      emoji,
    });
  }

  revalidatePath('/playbooks');
}