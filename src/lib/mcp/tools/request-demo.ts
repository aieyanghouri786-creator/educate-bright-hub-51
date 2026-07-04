import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "request_demo_link",
  title: "Get demo request link",
  description: "Return the URL where a prospect can schedule a Smart Campuses product demo.",
  inputSchema: {
    institution: z.string().optional().describe("Optional institution name for context."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ institution }) => {
    const url = "/contact/schedule-demo";
    const message = institution
      ? `Schedule a demo for ${institution} at ${url}`
      : `Schedule a demo at ${url}`;
    return {
      content: [{ type: "text", text: message }],
      structuredContent: { url, institution: institution ?? null },
    };
  },
});
