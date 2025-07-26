import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Database } from "@/types/supabase";

type Entry = Database["public"]["Tables"]["journal_entries"]["Row"];
type Comment = Database["public"]["Tables"]["journal_comments"]["Row"];

interface Props {
  entry: Entry;
  comments: Comment[];
}

export default function JournalEntryCard({ entry, comments }: Props) {
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-primary">
            {entry.topic || "Untitled Entry"}
          </h3>
          {entry.is_shared && <Badge variant="outline">Shared</Badge>}
        </div>
        <p className="text-muted-foreground whitespace-pre-wrap">
          {entry.content}
        </p>
        {comments.length > 0 && (
          <div className="mt-4 space-y-1">
            <h4 className="text-sm font-medium text-muted-foreground">
              Comments:
            </h4>
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="text-sm text-muted-foreground pl-2 border-l"
              >
                {comment.comment_text}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
