import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/sections/Primitives";
import { industries } from "@/data/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | CyberCloudInfra — Federal, Defense, Healthcare" },
      {
        name: "description",
        content:
          "CyberCloudInfra serves Federal Government, Healthcare, Defense, Financial Services, and Education with secure technology solutions.",
      },
      { property: "og:title", content: "Industries We Serve | CyberCloudInfra" },
      {
        property: "og:description",
        content: "Federal, Healthcare, Defense, Financial Services, and Education.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Solutions for High-Stakes Industries"
        description="We bring deep domain expertise and security-first engineering to the sectors that demand the most."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 3) * 0.07}>
                <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-accent opacity-10 transition-opacity group-hover:opacity-20" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary">
                    <ind.icon className="h-7 w-7" />
                  </span>
                  <h2 className="relative mt-6 text-xl font-semibold">{ind.title}</h2>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {ind.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
