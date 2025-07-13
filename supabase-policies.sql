-- Enable RLS
ALTER TABLE public.journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Only owners can manage their journal entries
CREATE POLICY "Entries: users can manage their entries"
  ON public.journal_entries
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Only owners can manage comments on their entries
CREATE POLICY "Comments: users can manage their comments"
  ON public.comments
  FOR ALL
  USING (
    auth.uid() = user_id OR
    auth.uid() = (
      SELECT user_id FROM public.journal_entries WHERE id = comment.entry_id
    )
  )
  WITH CHECK (
    auth.uid() = user_id
  );