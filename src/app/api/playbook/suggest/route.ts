import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Add AI-powered playbook suggestion logic
  return NextResponse.json({
    suggestions: [
      "Write a fantasy scene",
      "Create a date night plan",
      "Build a forgiveness letter"
    ]
  });
}
