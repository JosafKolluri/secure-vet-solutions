import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  Radar,
  Clock,
  Search,
  ShieldAlert,
  Star,
  ChevronRight,
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
import {
  homeStats,
  homeCerts,
  homeServices,
  whyChooseUs,
  processSteps,
  homeIndustries,
  techPartners,
  coreCompetencies,
  naicsCodes,
  homeFaqs,
  blogPosts,
} from "@/data/site";
import socHero from "@/assets/soc-hero.jpg";
import dashboardLaptop from "@/assets/dashboard-laptop.jpg";
import securityAnalyst from "@/assets/security-analyst.jpg";
import teamDark from "@/assets/team-dark.jpg";
import socAnalysts from "@/assets/soc-analysts.jpg";

const trustStats = [
  { icon: ShieldCheck, value: "500+", label: "Missions Secured & Protected" },
  { icon: Radar, value: "1200+", label: "Security Threats Prevented" },
  { icon: Clock, value: "24/7", label: "Continuous Security Monitoring" },
];

const capabilityTags = [
  "Cyber Protection",
  "Cloud Security",
  "Zero Trust",
  "Threat Detection",
  "Disaster Recovery",
  "Managed SecOps",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberCloudInfra | SDVOSB Cloud, Cybersecurity & IT Modernization" },
      {
        name: "description",
        content:
          "SDVOSB delivering Azure-first cloud modernization, Zero Trust cybersecurity, AI automation, disaster recovery, and managed IT for federal and enterprise missions.",
      },
      { property: "og:title", content: "CyberCloudInfra | SDVOSB Technology Solutions" },
      {
        property: "og:description",
        content:
          "Secure cloud, cybersecurity, AI, and infrastructure solutions from a Service-Disabled Veteran-Owned Small Business.",
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
          serviceType: "Government IT & Cybersecurity Contractor",
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
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={socHero}
          alt="CyberCloudInfra security operations center monitoring a global threat map"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Service-Disabled Veteran-Owned Small Business
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Mission-Driven Technology for{" "}
              <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-white bg-clip-text text-transparent">
                Government and Enterprise
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              CyberCloudInfra delivers Azure-first cloud modernization, AI-driven cybersecurity,
              disaster recovery, and data center modernization for private and government missions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  <CalendarCheck className="h-5 w-5" /> Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="/capability-statement.pdf" download>
                  <Download className="h-5 w-5" /> Download Capability Statement
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-b bg-surface-blue py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {homeStats.map((s, i) => (
              <StatBlock
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals}
                label={s.label}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
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
            {homeServices.map((s, i) => {
              const highlighted = i === 0;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                  <div
                    className={
                      highlighted
                        ? "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-elegant transition-all duration-300 hover:-translate-y-1.5"
                        : "group relative flex h-full flex-col rounded-3xl border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
                    }
                  >
                    {highlighted && (
                      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_60%_at_80%_0%,oklch(0.62_0.16_250/0.5),transparent)]" />
                    )}
                    <div className="relative flex items-start justify-between">
                      <h3 className="max-w-[70%] text-xl font-semibold leading-snug">{s.title}</h3>
                      <span
                        className={
                          highlighted
                            ? "font-display text-2xl font-bold text-white/40"
                            : "font-display text-2xl font-bold text-muted-foreground/40"
                        }
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      className={
                        highlighted
                          ? "relative mt-3 flex-1 text-sm leading-relaxed text-white/75"
                          : "relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground"
                      }
                    >
                      {s.description}
                    </p>
                    <ul className="relative mt-4 flex flex-wrap gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className={
                            highlighted
                              ? "rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                              : "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                          }
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="relative mt-6 flex items-center justify-between">
                      <Link
                        to="/capabilities"
                        className={
                          highlighted
                            ? "inline-flex items-center gap-1 text-sm font-semibold text-sky-300 transition-colors hover:text-white"
                            : "inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                        }
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow transition-transform duration-300 group-hover:scale-110">
                        <s.icon className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted expert — dark stats */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(50%_60%_at_15%_20%,oklch(0.62_0.16_250/0.35),transparent)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <img
                src={dashboardLaptop}
                alt="Cybersecurity dashboard showing threats blocked and system status"
                loading="lazy"
                width={1200}
                height={1008}
                className="rounded-3xl border border-white/10 shadow-elegant"
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {capabilityTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted cybersecurity experts protecting your mission
              </h2>
              <p className="mt-4 text-white/70">
                Veteran-led teams combine AI-driven defense with best-in-class tooling to keep your
                systems, networks, and data secure — ensuring resilience and mission continuity.
              </p>
              <div className="mt-8 space-y-4">
                {trustStats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-accent/40"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-display text-2xl font-bold">{s.value}</p>
                      <p className="text-sm text-white/70">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Helping stay safe — split feature */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                What We Do
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Helping missions stay secure in a digital world
              </h2>
              <p className="mt-4 text-muted-foreground">
                We identify vulnerabilities before adversaries do and respond decisively when
                threats emerge — protecting sensitive data and critical systems around the clock.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl border bg-card p-5 shadow-card">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                    <Search className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Identify Vulnerabilities</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Continuous assessment across cloud, endpoint, and network.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border bg-card p-5 shadow-card">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                    <ShieldAlert className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Respond to Incidents</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Rapid triage, containment, and remediation on a defined SLA.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/capabilities">
                  Explore Capabilities <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <img
                src={securityAnalyst}
                alt="Security analyst protecting data with a holographic shield"
                loading="lazy"
                width={1200}
                height={1008}
                className="rounded-3xl shadow-elegant"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-navy/85 p-5 text-white backdrop-blur-md">
                <p className="text-sm text-white/80">
                  <span className="font-display text-lg font-bold text-sky-300">250+</span> missions
                  supported across federal, defense &amp; commercial teams united by one purpose.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Credentials"
              title="Certified & Contract-Ready"
              description="Recognized credentials that make partnering with us fast, compliant, and low-risk."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {homeCerts.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/50 bg-white/60 p-6 text-center shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <p className="mt-4 font-semibold text-foreground">{c.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy py-24 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Why CyberCloudInfra
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A Partner Built for the Mission
              </h2>
              <p className="mt-4 text-navy-foreground/70">
                Veteran discipline, federal experience, and deep technical expertise in one team.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.08}>
                <div className="group flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/10">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{r.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-foreground/70">
                      {r.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="Our Delivery Process"
              description="A proven, repeatable approach that de-risks modernization from discovery to support."
            />
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block" />
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border bg-card text-accent shadow-card transition-transform duration-300 hover:scale-110">
                      <step.icon className="h-6 w-6" />
                      <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-gradient-accent text-[10px] font-bold text-accent-foreground">
                        {i + 1}
                      </span>
                    </span>
                    <h3 className="mt-4 font-semibold">{step.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Serve"
              title="Industries We Support"
              description="Trusted across the public sector and regulated commercial industries."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {homeIndustries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 4) * 0.06}>
                <div className="group h-full rounded-3xl border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elegant">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-accent transition-colors duration-300 group-hover:bg-gradient-accent group-hover:text-accent-foreground">
                    <ind.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-semibold">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ind.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology partners */}
      <section className="border-y bg-surface-blue py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Technology Partners &amp; Platforms
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {techPartners.map((p, i) => (
              <Reveal key={p} delay={(i % 4) * 0.05}>
                <div className="flex items-center justify-center rounded-2xl border bg-background px-4 py-5 text-center font-display text-sm font-bold tracking-tight text-foreground/70 shadow-sm transition-all duration-300 hover:border-accent/40 hover:text-foreground hover:shadow-card">
                  {p}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials over dark image */}
      <section className="relative overflow-hidden py-24 text-white">
        <img
          src={teamDark}
          alt="CyberCloudInfra team collaborating in a security operations center"
          loading="lazy"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Testimonials
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-white/70">
                Trusted partners who depend on us for mission success.
              </p>
            </div>
          </Reveal>
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <img
                src={socAnalysts}
                alt="CyberCloudInfra analysts monitoring systems for threats"
                loading="lazy"
                width={1008}
                height={1200}
                className="rounded-3xl shadow-elegant"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-navy/85 px-5 py-3 text-white backdrop-blur-md">
                <span className="font-display text-2xl font-bold text-sky-300">4.9/5</span>
                <div className="flex flex-col">
                  <span className="flex text-sky-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                  <span className="text-xs text-white/70">Client satisfaction</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <SectionHeading
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know about our services"
                align="left"
              />
              <Accordion type="single" collapsible defaultValue="item-0" className="mt-8">
                {homeFaqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${i}`}
                    className="mb-3 rounded-2xl border bg-card px-5 shadow-sm data-[state=open]:border-accent/40 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capability statement */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Capability Statement"
                  title="Everything You Need to Contract With Us"
                  description="A concise overview of our competencies, codes, and identifiers for acquisition teams."
                  align="left"
                />
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Core Competencies
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {coreCompetencies.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        NAICS Codes
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {naicsCodes.map((n) => (
                          <span
                            key={n}
                            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          UEI
                        </p>
                        <p className="mt-1 font-display text-sm font-bold">CL49NFRAQC9N</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          CAGE
                        </p>
                        <p className="mt-1 font-display text-sm font-bold">9K3W4</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Past Performance
                      </p>
                      <p className="mt-1 text-sm text-foreground">
                        250+ projects across federal, defense &amp; commercial missions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-white shadow-elegant sm:p-10">
                <div className="absolute inset-0 opacity-30 [background:radial-gradient(50%_80%_at_90%_10%,oklch(0.62_0.16_250/0.6),transparent)]" />
                <div className="relative text-center">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/10 backdrop-blur-md">
                    <Download className="h-8 w-8 text-white/90" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">Download Our Capability Statement</h3>
                  <p className="mt-3 text-white/80">
                    A one-page PDF with certifications, competencies, NAICS codes, and past
                    performance.
                  </p>
                  <Button asChild variant="hero" size="xl" className="mt-6">
                    <a href="/capability-statement.pdf" download>
                      <Download className="h-5 w-5" /> Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Latest insights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Insights"
                title="Latest Insights"
                description="Perspectives on government IT, cloud, cybersecurity, AI, and compliance."
                align="left"
              />
              <Button asChild variant="outline">
                <Link to="/blog">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-secondary-foreground">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                      Read More <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 text-white">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(60%_80%_at_50%_0%,oklch(0.62_0.16_250/0.5),transparent)]" />
        <motion.div
          aria-hidden="true"
          className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/40 blur-[120px]"
          animate={{ opacity: [0.5, 0.25, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Modernize Your Mission?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Partner with CyberCloudInfra to accelerate secure cloud adoption, strengthen
              cybersecurity, and modernize mission-critical systems.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  <CalendarCheck className="h-5 w-5" /> Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
