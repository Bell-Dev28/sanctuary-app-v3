// ✅ src/components/favourites/FavoriteCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export type FavoriteCardProps = {
  favorite: {
    created_at: string;
    playbook_id: number;
    user_id: string | null;
    playbooks: {
      id: number;
      title: string | null;
      topic: string;
      content: string | null;
    };
  };
};

export default function FavoriteCard({ favorite }: FavoriteCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {favorite.playbooks.title ?? "Untitled Playbook"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {favorite.playbooks.content ?? "No content available."}
        </p>
        <Link href={`/playbooks/${favorite.playbook_id}`} passHref>
          <Button>View Playbook</Button>
        </Link>
      </CardContent>
    </Card>
  );
}