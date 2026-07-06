import { defineTool } from "@lovable.dev/mcp-js";
import { benefits, jobs } from "@/data/site";

export default defineTool({
  name: "list_job_openings",
  title: "List job openings",
  description:
    "List current CyberCloudInfra career openings with role, location, department, and company benefits.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { jobs, benefits };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
