export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      playbooks: {
        Row: {
          id: number
          title: string | null
          content: string | null
          tags: string[] | null
          topic: string
          created_at: string
        }
        Insert: {
          id?: number
          title?: string | null
          content?: string | null
          tags?: string[] | null
          topic: string
          created_at?: string
        }
        Update: {
          id?: number
          title?: string | null
          content?: string | null
          tags?: string[] | null
          topic?: string
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
}
