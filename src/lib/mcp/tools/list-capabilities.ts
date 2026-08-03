import { defineTool } from "@lovable.dev/mcp-js";
import { capabilities, coreCompetencies, naicsCodes, techPartners } from "@/data/site";

export default defineTool({
  name: "list_capabilities",
  title: "List capabilities",
  description:
    "List CyberCloud Infra LLC' technical capabilities, core competencies, technology partners, and NAICS codes for federal contracting.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      capabilities: capabilities.map((c) => ({
        slug: c.slug,
        title: c.title,
        description: c.description,
        highlights: c.points,
      })),
      coreCompetencies,
      techPartners,
      naicsCodes,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
