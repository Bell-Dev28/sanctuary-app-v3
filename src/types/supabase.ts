export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      journal_entries: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          content: string;
          journal_id: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          content: string;
          journal_id: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          content?: string;
          journal_id?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, unknown>;
    Functions: Record<string, unknown>;
    Enums: Record<string, unknown>;
  };
}
