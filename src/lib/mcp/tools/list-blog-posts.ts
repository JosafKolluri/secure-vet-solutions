import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/data/site";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List CyberCloudInfra blog posts. Optionally pass a slug to fetch the full body of a single post.",
  inputSchema: {
    slug: z
      .string()
      .optional()
      .describe("Optional post slug to return the full article body."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    if (slug) {
      const post = blogPosts.find((p) => p.slug === slug);
      if (!post) {
        return {
          content: [{ type: "text", text: `No blog post found with slug "${slug}".` }],
          isError: true,
        };
      }
      return {
        content: [{ type: "text", text: JSON.stringify(post, null, 2) }],
        structuredContent: { post },
      };
    }
    const summaries = blogPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      date: p.date,
      readTime: p.readTime,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summaries, null, 2) }],
      structuredContent: { posts: summaries },
    };
  },
});
