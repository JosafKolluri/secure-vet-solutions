import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Star } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/sections/Primitives";
import { coreValues } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | CyberCloudInfra — Veteran-Led Technology" },
      {
        name: "description",
        content:
          "Learn about CyberCloudInfra, a Service-Disabled Veteran-Owned Small Business built on integrity, innovation, service, security, and excellence.",
      },
      { property: "og:title", content: "About CyberCloudInfra" },
      { property: "og:description", content: "Veteran-led mission-driven technology company." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Veteran-Led. Mission-Driven. Security-First."
        description="Founded by veterans, CyberCloudInfra brings the discipline of military service to the technology challenges facing government and enterprise."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={aboutTeam}
              alt="CyberCloudInfra leadership team in a secure data center"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-3xl shadow-elegant"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                    <Target className="h-5 w-5" />
                  </span>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To deliver secure, resilient, and modern technology solutions that empower
                  government agencies and enterprises to accomplish their most critical missions —
                  with the integrity and accountability earned through military service.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                    <Eye className="h-5 w-5" />
                  </span>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To be the most trusted veteran-owned technology partner in the federal
                  marketplace — recognized for engineering excellence, unwavering security, and a
                  relentless commitment to client success.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Built on a Foundation of Service"
              description="After decades of combined service in uniform and in industry, our founders set out to build a technology firm that operates with the same discipline, integrity, and mission focus they learned in the military. Today, that ethos defines every engagement — from a single cloud migration to enterprise-wide security transformation."
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Core Values" title="The Principles That Drive Us" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border bg-card p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                    <Star className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
