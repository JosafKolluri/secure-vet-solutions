import { defineTool } from "@lovable.dev/mcp-js";
import { homeServices, services } from "@/data/site";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List CyberCloudInfra's service offerings (cloud, cybersecurity, managed IT, disaster recovery, and more) with descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const combined = [
      ...homeServices.map((s) => ({
        slug: s.slug,
        title: s.title,
        description: s.description,
        highlights: s.points,
      })),
      ...services.map((s) => ({
        slug: s.slug,
        title: s.title,
        description: s.description,
      })),
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(combined, null, 2) }],
      structuredContent: { services: combined },
    };
  },
});
