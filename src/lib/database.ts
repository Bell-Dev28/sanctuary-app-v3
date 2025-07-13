// src/lib/database.ts
export interface Database {
  public: {
    Tables: {
      journal_entries: {
        Row: {
          id: string;
          topic_id: string;
          content: string;
          created_at: string;
          user_id: string;
        };
        Insert: {
          topic_id: string;
          content: string;
        };
        Update: Partial<{
          topic_id: string;
          content: string;
        }>;
      };
      journal_comments: {
        Row: {
          id: string;
          entry_id: string;
          content: string;
          created_at: string;
          user_id: string;
        };
        Insert: {
          entry_id: string;
          content: string;
        };
        Update: Partial<{
          entry_id: string;
          content: string;
        }>;
      };
      playbooks: {
        Row: {
          id: string;
          topic_id: string;
          content: string;
          user_id: string;
          favorites: string[];
          created_at: string;
        };
        Insert: {
          topic_id: string;
          content: string;
          favorites?: string[];
        };
        Update: Partial<{
          topic_id: string;
          content: string;
          favorites: string[];
        }>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
