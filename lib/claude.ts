// Browser-side replacement for the design tool's `window.claude.complete`.
// Calls the app's /api/complete route, which talks to the Claude API on the server.
// Throws when the AI connection is unavailable, so the design's offline fallbacks kick in.

export type CompleteRequest = {
  messages: { role: "user" | "assistant"; content: string }[];
};

export async function complete(req: CompleteRequest): Promise<string> {
  const res = await fetch("/api/complete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!res.ok) throw new Error(`Prime is unavailable (${res.status})`);
  const data = (await res.json()) as { text?: string };
  if (typeof data.text !== "string") throw new Error("Empty response from Prime");
  return data.text;
}
