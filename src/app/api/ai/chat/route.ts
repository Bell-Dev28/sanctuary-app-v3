import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const lastUserMessage = messages.filter((m: any) => m.role === 'user').pop();
  const history = messages
    .filter((m: any) => m.role === 'user' || m.role === 'ai')
    .slice(-10); // limit for prompt length

  const response = await fetch(process.env.HUGGING_FACE_ENDPOINT_URL!, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: {
        past_user_inputs: history.filter((m: any) => m.role === 'user').map((m: any) => m.content),
        generated_responses: history.filter((m: any) => m.role === 'ai').map((m: any) => m.content),
        text: lastUserMessage?.content || '',
      },
    }),
  });

  const result = await response.json();
  return NextResponse.json({ output: result.generated_text });
}