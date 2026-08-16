import { defineTool } from "@lovable.dev/mcp-js";
import { certifications, coreValues, industries } from "@/data/site";

export default defineTool({
  name: "company_overview",
  title: "Company overview",
  description:
    "Get an overview of CyberCloud Infra LLC: an SDVOSB delivering IT, non-IT professional services, infrastructure, and healthcare solutions to government and enterprise.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      name: "CyberCloud Infra LLC",
      summary:
        "Service-Disabled Veteran-Owned Small Business delivering IT, non-IT professional services, infrastructure engineering, and healthcare solutions.",
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
