import { defineMcp } from "@lovable.dev/mcp-js";
import companyOverviewTool from "./tools/company-overview";
import listCapabilitiesTool from "./tools/list-capabilities";
import listServicesTool from "./tools/list-services";
import listBlogPostsTool from "./tools/list-blog-posts";
import listJobOpeningsTool from "./tools/list-job-openings";

export default defineMcp({
  name: "cybercloudinfra-mcp",
  title: "CyberCloudInfra MCP",
  version: "0.1.0",
  instructions:
    "Tools for CyberCloudInfra, an SDVOSB cloud and cybersecurity contractor. Use `company_overview` for a high-level profile, `list_services` and `list_capabilities` for offerings, `list_blog_posts` for insights, and `list_job_openings` for careers.",
  tools: [
    companyOverviewTool,
    listServicesTool,
    listCapabilitiesTool,
    listBlogPostsTool,
    listJobOpeningsTool,
  ],
});
