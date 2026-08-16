import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeading, CTASection } from "@/components/sections/Primitives";
import { industries } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageHead({
      title: "Industries | Government, Healthcare & Enterprise | CyberCloud Infra",
      description:
        "CyberCloud Infra LLC serves government, healthcare, financial services, manufacturing, education, and commercial enterprises with IT, infrastructure, and healthcare services.",
      path: "/industries",
    }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry experience that shortens delivery"
        description="We already understand the compliance obligations, procurement cycles, and operating pressures of government, healthcare, finance, manufacturing, education, and enterprise."
        breadcrumb="Industries"
      />

      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who we serve"
            title="Specialized delivery for regulated environments"
            description="Each sector gets a delivery team that has worked inside its constraints before."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.06}>
                <div className="hover-lift group h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                    <ind.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 text-lg">{ind.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {ind.description}
                  </p>
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
