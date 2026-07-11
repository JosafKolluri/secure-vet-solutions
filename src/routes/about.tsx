import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Target, Eye, Star, Award, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/sections/Primitives";
import { StatBlock } from "@/components/sections/AnimatedCounter";
import { coreValues, clientLogos, homeStats } from "@/data/site";
import socHero from "@/assets/soc-hero.jpg";
import aboutDatacenter from "@/assets/about-datacenter.jpg";
import aboutDiscuss from "@/assets/about-discuss.jpg";
import teamDark from "@/assets/team-dark.jpg";

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

const missionPoints = [
  "Integrity and accountability in every engagement",
  "Security engineered into everything we deliver",
  "Mission-first commitment rooted in military values",
];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 text-white">
        <img
          src={socHero}
          alt="CyberCloudInfra security operations center"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Veteran-Led. Mission-Driven. Security-First.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Founded by veterans, CyberCloudInfra brings the discipline of military service to the
              technology challenges facing government and enterprise.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/90">About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image collage + experience */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 grid grid-cols-6 gap-2 opacity-40"
              >
                {[...Array(24)].map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-accent" />
                ))}
              </div>
              <img
                src={aboutDatacenter}
                alt="CyberCloudInfra team in a secure data center"
                loading="lazy"
                width={1008}
                height={1200}
                className="relative rounded-3xl shadow-elegant"
              />
              <img
                src={aboutDiscuss}
                alt="CyberCloudInfra colleagues reviewing a project"
                loading="lazy"
                width={1200}
                height={912}
                className="absolute -bottom-8 -right-4 w-1/2 rounded-2xl border-4 border-background shadow-elegant"
              />
              {/* Experience badge removed until a verified figure is available. */}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Who We Are
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Built on a Foundation of Service
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                After decades of combined service in uniform and in industry, our founders set out
                to build a technology firm that operates with the same discipline, integrity, and
                mission focus they learned in the military. Today, that ethos defines every
                engagement — from a single cloud migration to enterprise-wide security
                transformation.
              </p>
              <ul className="mt-6 space-y-3">
                {missionPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact">
                  Work With Us <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trusted by logos */}
      <section className="border-y bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by teams across government &amp; industry
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
            {clientLogos.map((logo, i) => (
              <Reveal key={logo} delay={(i % 6) * 0.05}>
                <div className="flex items-center justify-center rounded-xl px-4 py-4 text-center font-display text-sm font-bold tracking-tight text-foreground/50 transition-colors hover:text-foreground">
                  {logo}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="h-full rounded-3xl border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To deliver secure, resilient, and modern technology solutions that empower
                government agencies and enterprises to accomplish their most critical missions —
                with the integrity and accountability earned through military service.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow">
                <Eye className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be the most trusted veteran-owned technology partner in the federal marketplace —
                recognized for engineering excellence, unwavering security, and a relentless
                commitment to client success.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video / feature banner */}
      <section className="relative overflow-hidden py-32 text-white">
        <img
          src={teamDark}
          alt="CyberCloudInfra experts monitoring security systems"
          loading="lazy"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-transform hover:scale-105">
              <Play className="h-8 w-8 fill-current" />
            </span>
            <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
              Discipline in every mission we deliver
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              From cloud modernization to Zero Trust security, our veteran-led teams bring focus,
              accountability, and technical excellence to the most demanding environments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats removed until verified metrics are available. Do not display placeholder numbers. */}


      {/* Core values */}
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(60%_80%_at_50%_0%,oklch(0.62_0.16_250/0.5),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Build Something Secure Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Partner with a veteran-led team that treats your mission as its own.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact">
                Get in Touch <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
