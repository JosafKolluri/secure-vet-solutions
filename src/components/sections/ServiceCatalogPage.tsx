import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, SectionHeading, PageHero, CTASection } from "@/components/sections/Primitives";
import { Button } from "@/components/ui/button";
import { processSteps, type ServiceDetail } from "@/data/site";

export function ServiceCatalogPage({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  intro,
  highlights,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: { heading: string; body: string[] };
  highlights: string[];
  items: ServiceDetail[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} breadcrumb={eyebrow} />

      {/* Intro split */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-primary opacity-10 blur-2xl" />
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl">{intro.heading}</h2>
            {intro.body.map((p) => (
              <p key={p} className="mt-5 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-9">
              <Link to="/get-quote">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Capability grid */}
      <section className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we deliver"
            title="Capabilities built around your mission"
            description="Each engagement is scoped to your environment, compliance posture, and timeline — never a fixed template."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.06}>
                <article className="hover-lift group h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <ul className="mt-5 space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="h-3.5 w-3.5 shrink-0 text-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we work"
            title="A delivery process you can hold us to"
            description="Four disciplined phases with named owners, written milestones, and reporting at every step."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="font-display text-4xl font-extrabold text-primary/15">{step.step}</span>
                  <span className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
