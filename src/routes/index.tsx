import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Award, Cloud, Mouse, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/sections/Primitives";
import { Testimonials } from "@/components/sections/Testimonials";
import { services, clientLogos } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberCloudInfra | Mission-Driven Technology for Government & Enterprise" },
      {
        name: "description",
        content:
          "SDVOSB delivering secure cloud, cybersecurity, managed IT, and infrastructure modernization for federal and enterprise missions.",
      },
      { property: "og:title", content: "CyberCloudInfra | SDVOSB Technology Solutions" },
      {
        property: "og:description",
        content:
          "Secure cloud, cybersecurity, and infrastructure solutions from a Service-Disabled Veteran-Owned Small Business.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const heroBadges = ["SDVOSB Certified", "Veteran-Owned", "Azure-Led"];

const credentials = [
  { value: "SDVOSB", label: "SBA-Certified" },
  { value: "Azure", label: "Cloud-First Architecture" },
  { value: "24/7", label: "Managed SecOps" },
  { value: "CAGE 9K3W4", label: "UEI CL49NFRAQC9N" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[94vh] items-center justify-center overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(oklch(1_0_0)_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="absolute inset-0 [background:radial-gradient(60%_50%_at_50%_15%,oklch(0.62_0.16_250/0.45),transparent)]" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pt-28 pb-20 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {heroBadges.map((b, i) => (
                <span
                  key={b}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-sm ${
                    i === 0
                      ? "border-transparent bg-[oklch(0.72_0.13_215)] text-navy"
                      : "border-white/20 bg-white/10 text-white"
                  }`}
                >
                  {i === 0 && <ShieldCheck className="h-3.5 w-3.5" />}
                  {b}
                </span>
              ))}
            </div>

            <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Secure Cloud &amp; Cyber Modernization{" "}
              <span className="text-[oklch(0.78_0.13_215)]">Built by Veterans</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              CyberCloudInfra is a Service-Disabled Veteran-Owned Small Business delivering
              Azure-first cloud migration, data center modernization, AI-driven cybersecurity, and
              disaster recovery for private and government missions.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.value}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-6 backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-bold text-[oklch(0.78_0.13_215)] sm:text-3xl">
                    {c.value}
                  </p>
                  <p className="mt-1.5 text-xs text-white/70">{c.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Team With Us <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/capabilities">View Capabilities</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 1.8, repeat: Infinity }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/50"
        >
          <Mouse className="h-6 w-6" />
        </motion.div>
      </section>


      {/* Services */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Featured Services"
              description="A full spectrum of secure technology services engineered for mission-critical environments."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <Link
                    to="/capabilities"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-y bg-card py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted across government and regulated industries
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-xl font-bold tracking-tight text-muted-foreground/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Capability statement CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-8 py-14 text-white shadow-elegant sm:px-14">
            <div className="absolute inset-0 opacity-30 [background:radial-gradient(50%_80%_at_90%_10%,oklch(0.62_0.16_250/0.6),transparent)]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Download Our Capability Statement
                </h2>
                <p className="mt-4 text-white/80">
                  Get a one-page overview of our certifications, core competencies, NAICS codes,
                  and past performance.
                </p>
              </div>
              <Button asChild variant="hero" size="xl">
                <a href="/capability-statement.pdf" download>
                  <Download className="h-5 w-5" /> Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What Our Clients Say"
              description="Trusted partners who depend on us for mission success."
            />
          </Reveal>
          <Testimonials />
        </div>
      </section>
    </>
  );
}
