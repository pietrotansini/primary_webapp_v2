import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5-5";
const MAX_MESSAGES = 20;
const MAX_CHARS = 40_000;

type Msg = { role: "user" | "assistant"; content: string };

function isValid(messages: unknown): messages is Msg[] {
  return (
    Array.isArray(messages) &&
    messages.length > 0 &&
    messages.length <= MAX_MESSAGES &&
    messages.every(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length <= MAX_CHARS,
    )
  );
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY is not configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const messages = (body as { messages?: unknown })?.messages;
  if (!isValid(messages)) {
    return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
  }

  try {
    const client = new Anthropic();
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 4000,
      output_config: { effort: "low" },
      messages,
    });
    if (response.stop_reason === "refusal") {
      return NextResponse.json({ error: "Request declined" }, { status: 422 });
    }
    const text = response.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { text: string }).text)
      .join("");
    return NextResponse.json({ text });
  } catch (err) {
    if (err instanceof Anthropic.APIError) {
      console.error("Claude API error", err.status, err.message);
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }
    throw err;
  }
}
