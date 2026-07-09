import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
  Radar,
  Cloud,
  Lock,
  Fingerprint,
  Bot,
  ScanSearch,
  Award,
  Landmark,
  Building2,
  FileCheck2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "@/components/sections/Primitives";
import { Testimonials } from "@/components/sections/Testimonials";
import { StatBlock } from "@/components/sections/AnimatedCounter";
import { CyberBackground } from "@/components/sections/CyberBackground";
import { HeroDashboard } from "@/components/sections/HeroDashboard";
import { BackToTop } from "@/components/sections/BackToTop";
import {
  homeServices,
  whyChooseUs,
  processSteps,
  homeIndustries,
  homeFaqs,
  blogPosts,
} from "@/data/site";

const trustBadges = [
  { label: "SDVOSB Certified", icon: ShieldCheck },
  { label: "CMMC 2.0 Aligned", icon: Lock },
  { label: "NIST Aligned", icon: FileCheck2 },
  { label: "Zero Trust", icon: Fingerprint },
  { label: "SAM Registered", icon: Landmark },
  { label: "Veteran Owned", icon: Award },
];

// Federal identifiers displayed near certification badges — contracting officers
// verify these first. Replace placeholders with real values once confirmed.
const federalIdentifiers = [
  { label: "SAM.gov UEI", value: "[INSERT SAM.gov UEI]" },
  { label: "SDVOSB Certification #", value: "[INSERT SDVOSB CERT #]" },
];

const featuredSolutions = [
  { title: "Cloud Security", description: "End-to-end protection for Azure, AWS & multi-cloud workloads.", icon: Cloud },
  { title: "Identity Security", description: "Zero Trust identity, access governance, and MFA everywhere.", icon: Fingerprint },
  { title: "Managed Detection & Response", description: "24/7 SOC monitoring with rapid containment and remediation.", icon: Radar },
  { title: "Zero Trust Architecture", description: "Never trust, always verify — across users, devices, and data.", icon: Lock },
  { title: "AI Threat Detection", description: "Machine-learning analytics that surface threats in real time.", icon: Bot },
  { title: "Compliance Automation", description: "Continuous compliance for NIST, CMMC, FedRAMP & SOC 2.", icon: FileCheck2 },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberCloudInfra | Enterprise Cybersecurity for Federal & Defense" },
      {
        name: "description",
        content:
          "SDVOSB delivering Zero Trust architecture, managed SOC, cloud security, AI threat detection, and compliance for U.S. federal agencies, DoD, and enterprise and government organizations.",
      },
      { property: "og:title", content: "CyberCloudInfra | Enterprise Cybersecurity" },
      {
        property: "og:description",
        content:
          "Advanced cybersecurity, Zero Trust, cloud security, AI security, and managed SOC services for federal agencies and enterprise organizations.",
      },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://secure-vet-solutions.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          name: "CyberCloudInfra",
          serviceType: "Cybersecurity & Cloud Government Contractor",
          provider: {
            "@type": "Organization",
            name: "CyberCloudInfra",
            url: "https://secure-vet-solutions.lovable.app/",
          },
          areaServed: "US",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-hero">
        <CyberBackground dense />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              Service-Disabled Veteran-Owned Small Business
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Protecting America's{" "}
              <span className="text-gradient">Digital Infrastructure</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Advanced Cybersecurity, Zero Trust Architecture, Cloud Security, Compliance,
              AI Security, and Managed SOC Services for Federal Agencies and Enterprise
              Organizations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  <CalendarCheck className="h-5 w-5" /> Request Consultation
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/capabilities">
                  Explore Solutions <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> SDVOSB</span>
              <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-accent" /> CMMC Ready</span>
              <span className="flex items-center gap-1.5"><FileCheck2 className="h-4 w-4 text-accent" /> NIST</span>
              <span className="flex items-center gap-1.5"><Landmark className="h-4 w-4 text-accent" /> FedRAMP</span>
            </div>
          </motion.div>
          <HeroDashboard />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </section>

      {/* ============ TRUST BADGES + COUNTERS ============ */}
      <section className="border-y border-border bg-surface-blue py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by Federal Agencies, DoD & Enterprise and Government Organizations
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trustBadges.map((b, i) => (
              <Reveal key={b.label} delay={(i % 6) * 0.05}>
                <div className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-white/5 p-4 text-center transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                  <b.icon className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                  <span className="text-[11px] font-semibold text-foreground">{b.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {federalIdentifiers.map((f) => (
              <div key={f.label} className="flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{f.label}:</span>
                <span className="text-xs font-bold text-foreground">{f.value}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Comprehensive Security Services"
              description="A full spectrum of cybersecurity, cloud, and compliance services engineered for mission-critical environments."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(60%_60%_at_80%_0%,rgba(59,130,246,0.18),transparent)]" />
                  <div className="relative flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow transition-transform duration-300 group-hover:scale-110">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-2xl font-bold text-muted-foreground/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="relative mt-4 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/capabilities" className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors group-hover:text-cyan">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="relative overflow-hidden py-24">
        <CyberBackground />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Military precision meets AI-driven defense
              </h2>
              <p className="mt-4 text-muted-foreground">
                Veteran-led teams combine best-in-class tooling with disciplined execution to
                keep your systems, networks, and data secure — with resilience and mission
                continuity at the core.
              </p>
              <div className="mt-8 space-y-3">
                {whyChooseUs.map((r, i) => (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-accent/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{r.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{r.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-8 shadow-elegant">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "99.99%", l: "Detection Accuracy" },
                  { v: "< 15 min", l: "Incident Response" },
                  { v: "24/7/365", l: "SOC Coverage" },
                  { v: "100%", l: "Mission Focused" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-white/5 p-5 text-center">
                    <p className="font-display text-2xl font-bold text-gradient">{s.v}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-5">
                <ScanSearch className="h-8 w-8 shrink-0 text-cyan" />
                <p className="text-sm text-foreground">
                  Continuous threat intelligence across cloud, endpoint, and network layers —
                  powered by AI and human expertise.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS TIMELINE ============ */}
      <section className="bg-surface-blue py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="How We Secure Your Mission"
              description="A proven, repeatable methodology that turns risk into resilience."
            />
          </Reveal>
          <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" />
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="relative text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 bg-card text-accent shadow-glow">
                  <step.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Securing Critical Sectors"
              description="Deep domain expertise across the sectors that keep the nation running."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {homeIndustries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 4) * 0.06}>
                <div className="group flex h-full flex-col items-start gap-3 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow transition-transform group-hover:scale-110">
                    <ind.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-semibold text-foreground">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground">{ind.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED SOLUTIONS ============ */}
      <section className="relative overflow-hidden bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Solutions"
              title="Enterprise-Grade Security Platforms"
              description="Integrated solutions that scale from a single migration to enterprise-wide transformation."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredSolutions.map((sol, i) => (
              <Reveal key={sol.title} delay={(i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-navy p-8 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-cyan">
                    <sol.icon className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-5 text-xl font-semibold text-white">{sol.title}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground">{sol.description}</p>
                  <Link to="/capabilities" className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan transition-colors group-hover:text-white">
                    Discover more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BIG STATS ============ */}
      <section className="relative overflow-hidden bg-navy py-20">
        <CyberBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            {bigStats.map((s, i) => (
              <StatBlock key={s.label} value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by Mission Leaders"
              description="What federal, defense, and enterprise partners say about working with us."
            />
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* ============ BLOG ============ */}
      <section className="bg-surface-blue py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Latest Cybersecurity Intelligence"
              description="Practical guidance from our security architects and cloud engineers."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-glow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold text-cyan backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground">{post.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors group-hover:text-cyan">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Answers to the questions mission leaders ask most."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-10">
              {homeFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-cta px-6 py-16 text-center shadow-elegant sm:px-16">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-30" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Secure Your Organization?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/90">
                Partner with a veteran-led team trusted by federal agencies and Fortune 500
                enterprises to defend what matters most.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    <CalendarCheck className="h-5 w-5" /> Schedule Consultation
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl" className="border-white/60 text-white hover:bg-white/10">
                  <Link to="/contact">
                    Talk to an Expert <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
