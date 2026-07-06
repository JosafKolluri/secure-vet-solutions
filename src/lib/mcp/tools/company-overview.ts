import { defineTool } from "@lovable.dev/mcp-js";
import { certifications, coreValues, industries } from "@/data/site";

export default defineTool({
  name: "company_overview",
  title: "Company overview",
  description:
    "Get an overview of CyberCloudInfra: an SDVOSB delivering secure cloud, cybersecurity, and IT infrastructure, including certifications, core values, and industries served.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      name: "CyberCloudInfra LLC",
      summary:
        "Service-Disabled Veteran-Owned Small Business (SDVOSB) delivering secure cloud, cybersecurity, and IT infrastructure solutions for government and enterprise missions.",
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
