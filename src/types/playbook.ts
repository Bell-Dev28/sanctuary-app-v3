export interface Playbook {
  id: string;
  title: string;
  content: string;
  tags?: string[];
  favorited?: boolean;
  created_at: string;
  user_id: string;
}
