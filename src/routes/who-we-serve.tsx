import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, CTASection, Reveal, SectionHeading } from "@/components/sections/Primitives";
import { whoWeServe, pillars } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/who-we-serve")({
  head: () =>
    pageHead({
      title: "Who We Serve | Government & Enterprise | CyberCloud Infra LLC",
      description:
        "CyberCloud Infra LLC supports private-sector enterprises and small businesses plus federal, state, and local government with IT, infrastructure, and healthcare services.",
      path: "/who-we-serve",
    }),
  component: WhoWeServePage,
});

function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="One accountable partner across private and public sectors"
        description="We deliver technology, infrastructure, workforce, professional services, and healthcare solutions to organizations of every size — commercial and government alike."
        breadcrumb="Who We Serve"
      />

      <section className="px-5 py-16 sm:px-6 sm:py-[85px] lg:px-8 lg:py-[110px]">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          {whoWeServe.map((market, i) => (
            <Reveal key={market.slug} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-[24px] border border-border bg-card p-8 shadow-card lg:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                  <market.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 text-[1.6rem] font-bold text-foreground">{market.title}</h2>
                <p className="mt-3 text-[0.975rem] leading-[1.7] text-muted-foreground">
                  {market.message}
                </p>
                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {market.segments.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-6 sm:py-[85px] lg:px-8 lg:py-[110px]">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Service Pillars"
              title="Four pillars, delivered under one contract"
              description="Technology, professional workforce, infrastructure, and healthcare solutions — coordinated by a single delivery lead."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  to={p.href}
                  className="group flex h-full flex-col rounded-[20px] border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className="font-display text-sm font-bold text-primary/60">{p.number}</span>
                  <h3 className="mt-3 text-[1.15rem] font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-[1.7] text-muted-foreground">
                    {p.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
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
