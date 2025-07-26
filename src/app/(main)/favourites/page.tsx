// src/app/(main)/favourites/page.tsx
import { fetchFavoritesByUser }          from '@/lib/actions/favorites'
import FavoriteCard                      from '@/components/favourites/FavoriteCard'
import { createServerSupabaseClient }    from '@/utils/supabase/server'

export default async function FavoritesPage() {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return <div className="p-4">Please sign in to view your favorites.</div>
  }

  const favorites = await fetchFavoritesByUser(user.id)

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites?.length
        ? favorites.map(f => (
            <FavoriteCard
              key={f.playbook_id}
              favorite={{
                ...f,
                user_id: null,
                playbooks: {
                  id: f.playbook_id,
                  title: null,
                  topic: '',
                  content: null
                }
              }}
            />
          ))
        : <p className="text-muted-foreground">No favorites yet.</p>
      }
    </div>
  )
}
