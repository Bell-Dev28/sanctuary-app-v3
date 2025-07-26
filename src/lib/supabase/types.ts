export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      journal_entries: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          content: string;
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          content: string;
          created_at?: string;
          updated_at?: string | null;
        };
        Update: Partial<Omit<Database["public"]["Tables"]["journal_entries"]["Insert"], "user_id">>;
      };
      // Add other tables here...
    };
    Views: object;
    Functions: object;
    Enums: object;
  };
}
