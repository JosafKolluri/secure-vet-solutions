import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, CTASection, Reveal } from "@/components/sections/Primitives";
import { pillars } from "@/data/site";

const URL = "https://secure-vet-solutions.lovable.app/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | CyberCloud Infra LLC" },
      {
        name: "description",
        content:
          "IT services, non-IT professional services, infrastructure services, and healthcare services for private, government, and public-sector organizations.",
      },
      { property: "og:title", content: "Services | CyberCloud Infra LLC" },
      {
        property: "og:description",
        content:
          "Four service pillars: IT, Non-IT, Infrastructure, and Healthcare — delivered through one accountable partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology, infrastructure, workforce, and healthcare solutions"
        description="Four service pillars covering the technology you run, the infrastructure it runs on, the professionals who operate it, and the healthcare workforce behind care delivery."
        breadcrumb="Services"
      />

      <section className="px-5 py-16 sm:px-6 sm:py-[85px] lg:px-8 lg:py-[110px]">
        <div className="mx-auto max-w-[1200px] space-y-8">
          {pillars.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <div className="grid gap-8 rounded-[24px] border border-border bg-card p-8 shadow-card lg:grid-cols-[1fr_1.35fr] lg:p-10">
                <div>
                  <span className="font-display text-sm font-bold text-primary/60">{p.number}</span>
                  <h2 className="mt-2 text-[1.75rem] font-bold text-foreground">{p.title}</h2>
                  <p className="mt-3 text-[0.975rem] leading-[1.7] text-muted-foreground">
                    {p.summary}
                  </p>
                  <Link
                    to={p.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Explore {p.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {p.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="block rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
