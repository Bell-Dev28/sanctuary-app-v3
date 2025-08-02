import { NextRequest, NextResponse } from 'next/server';
import type { Database } from '@/types/supabase';

type AIMessage = Database['public']['Tables']['ai_messages']['Row'];
type ChatRole = 'user' | 'ai';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages = body.messages as AIMessage[];

  const history = messages.filter((m) =>
    m.role === 'user' || m.role === 'ai'
  );

  const lastUserMessage = history
    .filter((m) => m.role === 'user')
    .pop();

  const userInputs = history
    .filter((m) => m.role === 'user')
    .map((m) => m.content);

  const aiResponses = history
    .filter((m) => m.role === 'ai')
    .map((m) => m.content);

  const response = await fetch(process.env.HUGGING_FACE_ENDPOINT_URL!, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: {
        past_user_inputs: userInputs,
        generated_responses: aiResponses,
        text: lastUserMessage?.content || '',
      },
    }),
  });

  const result: { generated_text: string } = await response.json();

  return NextResponse.json({ output: result.generated_text });
}
