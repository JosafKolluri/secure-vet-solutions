import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, SectionHeading, CTASection } from "@/components/sections/Primitives";
import { blogPosts } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageHead({
      title: "Insights | Cloud, Security & Healthcare Staffing | CyberCloud Infra",
      description:
        "Practical guidance on cloud migration, zero trust, infrastructure modernization, and healthcare staffing from CyberCloud Infra LLC delivery teams.",
      path: "/blog",
    }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from cloud, security, and staffing delivery"
        description="What we have learned delivering modernization programs and staffing mission-critical IT, infrastructure, and healthcare roles."
        breadcrumb="Blog"
      />

      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Latest articles"
            title="Guidance you can act on this quarter"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                      <span className="font-semibold uppercase tracking-[0.12em] text-brand">
                        {post.category}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="mt-3 text-lg leading-snug">{post.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
