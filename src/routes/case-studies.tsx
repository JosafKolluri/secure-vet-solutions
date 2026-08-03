import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, Reveal, SectionHeading, CTASection } from "@/components/sections/Primitives";
import { caseStudies } from "@/data/site";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | CyberCloud Infra LLC" },
      {
        name: "description",
        content:
          "Real engagements in cloud migration, clinical staffing surges, zero-trust security, and 24/7 NOC modernization — with the outcomes delivered.",
      },
      { property: "og:title", content: "Case Studies | CyberCloud Infra LLC" },
      {
        property: "og:description",
        content: "Client outcomes across cloud, security, infrastructure, and staffing engagements.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://secure-vet-solutions.lovable.app/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Programs delivered, problems retired"
        description="A representative sample of engagements. Client names are withheld where contracts require it."
        breadcrumb="Case Studies"
      />

      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Challenge, approach, and measurable result"
          />
          <div className="mt-14 space-y-8">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.05}>
                <article className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    loading="lazy"
                    className="h-56 w-full object-cover lg:h-full"
                  />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        {cs.industry}
                      </span>
                      <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                        {cs.service}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl leading-snug">{cs.title}</h2>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">{cs.client}</p>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                          Challenge
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                          Solution
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {cs.solution}
                        </p>
                      </div>
                    </div>
                    <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                      Results
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-foreground">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-3 w-3" />
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
