-- Sample Supabase RLS policy setup
-- Adjust based on your actual schema

-- Allow users to read their own journals
CREATE POLICY "User can read their own journals"
ON public.journals
FOR SELECT
USING (auth.uid() = user_id);

-- Allow inserting journals for self
CREATE POLICY "User can insert their journals"
ON public.journals
FOR INSERT
WITH CHECK (auth.uid() = user_id);
