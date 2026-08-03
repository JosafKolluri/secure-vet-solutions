import { defineTool } from "@lovable.dev/mcp-js";
import { certifications, coreValues, industries } from "@/data/site";

export default defineTool({
  name: "company_overview",
  title: "Company overview",
  description:
    "Get an overview of CyberCloud Infra LLC: a veteran-owned provider of IT services, infrastructure engineering, and IT, non-IT, and healthcare staffing.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      name: "CyberCloud Infra LLC",
      summary:
        "Service-Disabled Veteran-Owned Small Business delivering IT services, infrastructure engineering, and specialized IT, non-IT, and healthcare staffing.",
      certifications,
      coreValues,
      industriesServed: industries.map((i) => ({
        title: i.title,
        description: i.description,
      })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
