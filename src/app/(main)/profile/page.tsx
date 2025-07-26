import { createServerSupabaseClient } from '@/utils/supabase/server';

export default async function ProfilePage() {
  const supabase = await createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return <p>Please log in.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
