import { createFileRoute } from "@tanstack/react-router";
import { Download, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/sections/Primitives";
import { Button } from "@/components/ui/button";
import { capabilities } from "@/data/site";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities | CyberCloudInfra" },
      {
        name: "description",
        content:
          "CyberCloudInfra capability statement: cloud services, cybersecurity, infrastructure, and government solutions for federal missions.",
      },
      { property: "og:title", content: "Capabilities | CyberCloudInfra" },
      {
        property: "og:description",
        content: "Cloud, cybersecurity, infrastructure, and government solutions.",
      },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: Capabilities,
});

function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Capability Statement"
        title="Core Competencies & Capabilities"
        description="A comprehensive portfolio of secure technology services purpose-built for government and enterprise environments."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.category} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-3xl border bg-card p-8 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                      <cap.icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-xl font-bold">{cap.category}</h2>
                  </div>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {cap.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Capability Statement"
              title="Take Our Capabilities With You"
              description="Download our full capability statement, including NAICS codes, certifications, and past performance."
            />
            <Button asChild variant="hero" size="xl" className="mt-8">
              <a href="/capability-statement.pdf" download>
                <Download className="h-5 w-5" /> Download Capability Statement
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
