import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  console.log('generating text for prompt:', prompt);

  const { text } = await generateText({
    model: openai('gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    prompt,
  });

  console.log('generated text is', text);
  return Response.json({ text });
}