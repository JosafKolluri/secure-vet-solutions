import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { PageHero, Reveal } from "@/components/sections/Primitives";
import { certifications } from "@/data/site";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications | CyberCloudInfra — SDVOSB, SAM, SBA" },
      {
        name: "description",
        content:
          "CyberCloudInfra certifications and registrations: SDVOSB, Small Business, Veteran Owned, SBA, SAM, CAGE Code, and UEI Number.",
      },
      { property: "og:title", content: "Certifications | CyberCloudInfra" },
      {
        property: "og:description",
        content: "SDVOSB, Small Business, SAM, SBA, CAGE, and UEI registrations.",
      },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Certified, Registered & Contract-Ready"
        description="Our certifications and federal registrations make doing business with us simple, compliant, and fast."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.code} delay={(i % 3) * 0.07}>
                <div className="group flex h-full flex-col rounded-2xl border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                      <BadgeCheck className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {c.code}
                    </span>
                  </div>
                  <h2 className="mt-5 text-lg font-semibold">{c.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
