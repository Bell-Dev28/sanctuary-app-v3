export type AIMessage = {
  id?: string;
  sender: 'user' | 'ai';
  content: string;
  created_at?: string;
  conversation_id?: string;
};
