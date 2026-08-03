import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/site";
import { CTASection } from "@/components/sections/Primitives";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData ? blogPosts.find((p) => p.slug === loaderData.slug) : undefined;
    if (!post) {
      return { meta: [{ title: "Article unavailable" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${post.title} | CyberCloud Infra LLC` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: `https://secure-vet-solutions.lovable.app/blog/${params.slug}`,
        },
      ],
      links: [
        { rel: "canonical", href: `https://secure-vet-solutions.lovable.app/blog/${params.slug}` },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useLoaderData();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) throw notFound();

  return (
    <>
      <article className="pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs font-medium text-muted-foreground">
            <span className="font-semibold uppercase tracking-[0.12em] text-brand">
              {post.category}
            </span>
            <span>{post.readingTime}</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { dateStyle: "medium" })}</span>
          </div>
          <h1 className="mt-4 text-3xl leading-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-3xl object-cover shadow-card"
          />
        </div>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          {post.content.map((p) => (
            <p key={p} className="mb-6 text-base leading-[1.85] text-foreground/85">
              {p}
            </p>
          ))}
        </div>
      </article>

      <CTASection />
    </>
  );
}
