import { defineTool } from "@lovable.dev/mcp-js";
import { offerings } from "@/data/site";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List CyberCloud Infra LLC' service offerings (cloud, cybersecurity, managed IT, disaster recovery, and more) with descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const combined = offerings.map((s) => ({
      slug: s.slug,
      title: s.title,
      pillar: s.pillarSlug,
      description: s.description,
      highlights: s.points,
      href: `/services/${s.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(combined, null, 2) }],
      structuredContent: { services: combined },
    };
  },
});
