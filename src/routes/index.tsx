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

const stats = [
  { icon: ShieldCheck, label: "SDVOSB Certified" },
  { icon: Award, label: "Veteran Owned" },
  { icon: Building2, label: "Federal Contract Ready" },
  { icon: Users, label: "100% Client Focused" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 [background:radial-gradient(70%_60%_at_70%_20%,oklch(0.62_0.16_250/0.4),transparent)]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-accent" /> Service-Disabled Veteran-Owned Small Business
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Mission-Driven Technology Solutions for Government and Enterprise
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              CyberCloudInfra is a Service-Disabled Veteran-Owned Small Business (SDVOSB)
              specializing in Azure-first cloud migration, data center modernization, AI-driven
              cybersecurity, and disaster recovery for private and government missions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/capabilities">
                  Explore Services <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-0 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3 border-border px-6 py-10 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <p className="font-display text-lg font-semibold">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
