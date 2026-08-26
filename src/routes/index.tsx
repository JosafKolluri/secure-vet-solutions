import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "motion/react";
import { ArrowRight, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Eyebrow, SectionHeading } from "@/components/sections/Primitives";
import { IdCard } from "@/components/sections/IdCard";
import { CircuitAccent } from "@/components/sections/CircuitAccent";
import { GaugeRing } from "@/components/sections/GaugeRing";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import {
  ItServicesIcon,
  StaffingNetworkIcon,
  ServerRackIcon,
  HealthcarePulseIcon,
} from "@/components/sections/PillarIcons";
import {
  pillars,
  whoWeServe,
  company,
  contractingQuals,
  faqs,
  homeStats,
  processSteps,
  naicsCodes,
  getOffering,
} from "@/data/site";
import { jsonLdScript, pageHead, SITE_URL } from "@/lib/seo";
import { marketPhotos } from "@/data/media";
import bannerItServices from "@/assets/illustrations/banner-it-services.svg";
import bannerNonItServices from "@/assets/illustrations/banner-non-it-services.svg";
import bannerInfrastructureServices from "@/assets/illustrations/banner-infrastructure-services.svg";
import bannerHealthcareServices from "@/assets/illustrations/banner-healthcare-services.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "CyberCloud Infra LLC | SDVOSB Cybersecurity, Azure Cloud & Staffing",
      description:
        "CyberCloud Infra LLC is a Service-Disabled Veteran-Owned Small Business delivering cybersecurity, Microsoft Azure cloud, healthcare staffing, and non-IT professional staffing to federal agencies, DoD contractors, and enterprises.",
      path: "/",
    }),
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }),
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: company.name,
        url: SITE_URL,
        description: company.shortDescription,
      }),
    ],
  }),
  component: HomePage,
});

const SECTION = "px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32";
const CONTAINER = "mx-auto max-w-[1180px]";

const bannerBySlug: Record<string, string> = {
  "it-services": bannerItServices,
  "non-it-services": bannerNonItServices,
  "infrastructure-services": bannerInfrastructureServices,
  "healthcare-services": bannerHealthcareServices,
};

const iconBySlug: Record<string, React.ComponentType<{ className?: string }>> = {
  "it-services": ItServicesIcon,
  "non-it-services": StaffingNetworkIcon,
  "infrastructure-services": ServerRackIcon,
  "healthcare-services": HealthcarePulseIcon,
};

const detailPairsBySlug: Record<string, [string, string]> = {
  "it-services": ["cybersecurity", "cloud-services"],
  "non-it-services": ["professional-staffing", "business-operations"],
  "infrastructure-services": ["data-center-services", "network-operations"],
  "healthcare-services": ["clinical-staffing", "healthcare-it"],
};

const trustStripItems = [
  "SDVOSB VERIFIED",
  "SAM.GOV REGISTERED",
  "MICROSOFT AZURE PARTNER-ALIGNED",
  `NAICS ${naicsCodes.slice(0, 3).join(" · ")}`,
  "NIST 800-171 ALIGNED",
  "CMMC 2.0 PRACTICES",
];

const quotes = [
  {
    quote:
      "The migration plan was the first one we saw that accounted for dependencies and ownership before touching a single workload. Cutover weekends stopped being events.",
    name: "Director of Infrastructure",
    role: "Public sector agency (name withheld)",
  },
  {
    quote:
      "We needed credentialed clinical staff at short notice and got qualified slates in days, not weeks. Coverage held without burning out our core team.",
    name: "VP of Clinical Operations",
    role: "Regional health system (name withheld)",
  },
  {
    quote:
      "Security work was scoped against the controls we actually have to answer for, and the reporting made audit preparation straightforward.",
    name: "Chief Information Security Officer",
    role: "Financial services firm (name withheld)",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CapabilityPillars />
      <VisualBannerRow />
      <CapabilityDetailList />
      <CredentialsBand />
      <Qualifications />
      <WhoWeServe />
      <Process />
      <Proof />
      <Faq />
      <ContactCTA />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 1 — Hero                                                            */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-[112px] pb-16 sm:pt-[132px] sm:pb-20 lg:pt-[148px] lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-line-texture [mask-image:radial-gradient(ellipse_75%_65%_at_50%_28%,black_18%,transparent_78%)]" />
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-steel/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-[-4rem] h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
      <div className={`relative ${CONTAINER} px-5 sm:px-6 lg:px-8`}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow tone="light" icon>
              Service-Disabled Veteran-Owned Small Business
            </Eyebrow>
            <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[3rem] lg:text-[3.35rem]">
              Mission-ready <span className="text-gold-bright">cybersecurity and cloud</span>, built
              on veteran discipline
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.7] text-white/78 sm:text-lg">
              CyberCloud Infra LLC delivers cybersecurity, Microsoft Azure cloud services,
              healthcare staffing, and non-IT professional staffing to federal agencies, DoD
              contractors, and commercial enterprises — under one accountable, veteran-owned
              contract vehicle.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 min-w-[240px] rounded-md bg-brand px-8 text-base font-semibold text-brand-foreground shadow-[0_10px_30px_rgba(176,141,87,0.32)] hover:bg-brand/90"
              >
                <a href="/capability-statement.pdf" target="_blank" rel="noopener noreferrer">
                  Request Capability Statement <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 min-w-[180px] rounded-md border-white/30 bg-transparent px-7 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact">Talk to an expert</Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <li key={pillar.slug}>
                  <Link
                    to={pillar.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-white/85 transition-colors hover:border-gold/50 hover:bg-white/[0.1]"
                  >
                    <span className="font-mono text-gold-bright">{pillar.number}</span>
                    {pillar.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <CircuitAccent className="pointer-events-none absolute -inset-16 -z-10 opacity-80" />
            <IdCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — Trust strip                                                     */
/* ------------------------------------------------------------------ */

function TrustStrip() {
  const items = [...trustStripItems, ...trustStripItems];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#081930] py-3.5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-white/55"
          >
            {item}
            <span className="ml-10 text-gold/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4 — Capability pillars                                              */
/* ------------------------------------------------------------------ */

function CapabilityPillars() {
  return (
    <section id="services" className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Capabilities"
            title="Four pillars, one accountable contract"
            description="Every engagement maps to one of these four lanes — so an agency or prime always knows who owns the work."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = iconBySlug[pillar.slug];
            return (
              <Reveal key={pillar.slug} delay={i * 0.05} className="h-full">
                <Link
                  to={pillar.href}
                  className="group flex h-full flex-col bg-card p-7 transition-colors hover:bg-accent/60"
                >
                  <span className="font-mono text-xs font-semibold tracking-[0.16em] text-brand">
                    {pillar.number} / {pillar.slug.replace("-services", "").toUpperCase()}
                  </span>
                  <span className="mt-5 grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold-bright transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
                    {pillar.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5 — Visual banner row                                               */
/* ------------------------------------------------------------------ */

function VisualBannerRow() {
  return (
    <section className="bg-navy px-5 py-14 sm:px-6 lg:px-8">
      <div
        className={`${CONTAINER} grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {pillars.map((pillar) => (
          <figure key={pillar.slug} className="bg-navy p-2">
            <img
              src={bannerBySlug[pillar.slug]}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
            <figcaption className="mt-3 pb-2 text-center font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
              {pillar.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6 — Capability detail list                                          */
/* ------------------------------------------------------------------ */

function CapabilityDetailList() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="What's included"
            title="Two ways in, per pillar"
            description="A representative slice of each pillar's scope — the full catalog runs deeper on each service page."
          />
        </Reveal>
        <div className="mt-14 space-y-10">
          {pillars.map((pillar, i) => {
            const [slugA, slugB] = detailPairsBySlug[pillar.slug];
            const a = getOffering(slugA);
            const b = getOffering(slugB);
            return (
              <Reveal key={pillar.slug} delay={i * 0.05}>
                <div className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[220px_1fr_1fr] lg:gap-10">
                  <div>
                    <span className="font-mono text-xs font-semibold tracking-[0.16em] text-brand">
                      {pillar.number} / {pillar.slug.replace("-services", "").toUpperCase()}
                    </span>
                    <Link
                      to={pillar.href}
                      className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      View pillar <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  {[a, b].map(
                    (item) =>
                      item && (
                        <div key={item.slug}>
                          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                          <p className="mt-2.5 text-sm leading-[1.7] text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      ),
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7 — Credentials / stats band                                        */
/* ------------------------------------------------------------------ */

const statCaptions: Record<string, string> = {
  "Years of expertise": "Verified past-performance record",
  "Enterprise programs": "Federal, DoD, and commercial delivery",
  Professionals: "Credentialed engineers and clinical staff",
  "Operations support": "SLA-backed monitoring and response",
};

const gaugeStats = [
  { big: "SDVOSB", label: "Ownership status", color: "#c9a468" },
  { big: "SAM", label: "Federal registration", color: "#7fd99a" },
  { big: "4", label: "Service pillars", color: "#3a6ea5" },
  { big: "Azure", label: "Cloud platform focus", color: "#c9a468" },
];

function CredentialsBand() {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 grid-line-texture opacity-30" />
      <div className={`relative ${CONTAINER}`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Eyebrow tone="light" icon>
              Credentials
            </Eyebrow>
            <h2 className="mt-4 max-w-xl text-2xl font-bold text-white sm:text-3xl">
              Verified standing, not marketing claims
            </h2>
          </div>
          <div className="flex items-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-status-pulse rounded-full bg-success" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono-label text-[11px] font-semibold text-success">
              Credentials verified
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gaugeStats.map((s) => (
            <div key={s.label} className="flex items-center gap-5">
              <GaugeRing color={s.color}>
                <span
                  className="font-display text-sm font-bold tracking-tight text-white"
                  style={{ color: s.color }}
                >
                  {s.big}
                </span>
              </GaugeRing>
              <div>
                <p className="font-mono-label text-[10px] text-white/40">Status</p>
                <p className="mt-0.5 text-sm font-medium text-white/80">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-2xl font-semibold text-white">
                <AnimatedCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </p>
              <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-steel to-gold-bright" />
              </div>
              <p className="mt-2 text-xs text-white/50">{statCaptions[s.label] ?? s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contracting qualifications table (bonus — kept from prior build)    */
/* ------------------------------------------------------------------ */

function Qualifications() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div
        className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20`}
      >
        <Reveal>
          <Eyebrow>For primes &amp; SBLOs</Eyebrow>
          <h2 className="mt-5 max-w-xl text-[1.85rem] font-bold leading-[1.2] tracking-tight text-foreground sm:text-[2.25rem]">
            SDVOSB capacity, task-order ready
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[480px] text-left text-sm">
              <tbody>
                {contractingQuals.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <th
                      scope="row"
                      className="w-[34%] bg-muted/50 px-4 py-4 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-foreground sm:px-5"
                    >
                      {row.label}
                    </th>
                    <td className="px-4 py-4 leading-relaxed text-muted-foreground sm:px-5">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:pt-16">
          <p className="text-base leading-[1.75] text-muted-foreground">
            Certifications, NAICS, contract types, and how we show up after award — in one table a
            small-business liaison can drop into a sub plan.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-8 h-12 rounded-md border-primary/25 px-7 font-semibold text-primary hover:bg-accent"
          >
            <Link to="/contact">
              Book a teaming conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Who we serve (bonus — kept from prior build)                        */
/* ------------------------------------------------------------------ */

function WhoWeServe() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Who we serve"
            title="Federal, DoD, and commercial — same accountable model"
            description="Federal agencies, DoD contractors, and enterprises get the same four service pillars under one contract."
          />
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {whoWeServe.map((market) => (
            <div key={market.slug}>
              <img
                src={marketPhotos[market.slug].src}
                alt={marketPhotos[market.slug].alt}
                loading="lazy"
                className="mb-6 aspect-[16/9] w-full rounded-2xl object-cover"
              />
              <h3 className="text-xl font-bold text-foreground">{market.title}</h3>
              <p className="mt-3 text-[0.975rem] leading-[1.75] text-muted-foreground">
                {market.message}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {market.segments.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          to="/who-we-serve"
          className="mt-10 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-primary"
        >
          How we support each sector <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8 — Process                                                         */
/* ------------------------------------------------------------------ */

const processLabels: Record<string, string> = {
  "01": "Requirements Intake",
  "02": "Capability Statement & Teaming",
  "03": "Proposal & Compliance Review",
  "04": "Delivery & Sustainment",
};

function Process() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={`${CONTAINER} max-w-3xl`}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="How we work"
            title="A process contracting officers can plan around"
            description="Four disciplined phases, each with a named owner and a written artifact — not a verbal promise."
          />
        </Reveal>
        <ol className="mt-14 space-y-0">
          {processSteps.map((step, i) => (
            <li key={step.step}>
              <Reveal delay={i * 0.06}>
                <div className="relative flex gap-6 border-t border-border py-8 first:border-t-0 first:pt-0">
                  <div className="flex flex-col items-center">
                    <span className="font-display text-2xl font-bold text-brand">{step.step}</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-steel">
                      {processLabels[step.step]}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Proof / testimonials (bonus — kept from prior build)                 */
/* ------------------------------------------------------------------ */

function Proof() {
  const [index, setIndex] = useState(0);
  const total = quotes.length;
  const active = quotes[index];

  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Proof"
            title="What program leaders tell us"
            description="Representative outcomes from cloud, cybersecurity, and healthcare staffing work. Client names withheld where contracts require it."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <Quote className="h-8 w-8 text-brand" />
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 max-w-3xl text-lg leading-[1.7] text-foreground sm:text-[1.25rem]"
            >
              "{active.quote}"
            </motion.blockquote>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground">{active.name}</p>
                <p className="text-sm text-muted-foreground">{active.role}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => setIndex((i) => (i - 1 + total) % total)}
                  className="grid h-12 w-12 place-items-center rounded-md border border-border"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setIndex((i) => (i + 1) % total)}
                  className="grid h-12 w-12 place-items-center rounded-md border border-border"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ (bonus — kept from prior build)                                  */
/* ------------------------------------------------------------------ */

function Faq() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={`${CONTAINER} mx-auto max-w-2xl`}>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions agencies and enterprises ask"
            description="SDVOSB status, service coverage, staffing speed, and what happens after go-live."
          />
        </Reveal>
        <Reveal delay={0.06} className="mt-12">
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.975rem] leading-[1.75] text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9 — Contact / CTA                                                   */
/* ------------------------------------------------------------------ */

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  organization: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid email").max(255),
  summary: z.string().trim().min(10, "Add a little more detail").max(1500),
});

function ContactCTA() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    e.currentTarget.reset();
    toast.success("Request received", {
      description: "A practice lead will follow up within one business day.",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-line-texture opacity-25" />
      <div className={`relative ${CONTAINER} grid gap-12 lg:grid-cols-2 lg:gap-16`}>
        <Reveal>
          <Eyebrow tone="light">Next step</Eyebrow>
          <h2 className="mt-5 text-[1.85rem] font-bold leading-[1.2] tracking-tight text-white sm:text-[2.4rem]">
            Request a capability statement or scope a requirement
          </h2>
          <p className="mt-5 max-w-lg text-base leading-[1.75] text-white/75 sm:text-lg">
            Tell us the mission. We return a scoped response with approach, timeline, and staffing
            plan — not a generic brochure.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-md border-white/30 bg-transparent px-7 text-base font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <a href="/capability-statement.pdf" target="_blank" rel="noopener noreferrer">
                Download capability statement <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-white/45">
            {company.email} · {company.locationShort}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="home-name" className="text-white/80">
                  Name
                </Label>
                <Input
                  id="home-name"
                  name="name"
                  className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40"
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-300">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="home-org" className="text-white/80">
                  Organization
                </Label>
                <Input
                  id="home-org"
                  name="organization"
                  className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40"
                  placeholder="Agency or company"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="home-email" className="text-white/80">
                  Email
                </Label>
                <Input
                  id="home-email"
                  name="email"
                  type="email"
                  className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40"
                  placeholder="jane@agency.gov"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-300">{errors.email}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="home-summary" className="text-white/80">
                  Requirement summary
                </Label>
                <Textarea
                  id="home-summary"
                  name="summary"
                  rows={4}
                  className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40"
                  placeholder="Scope, timeline, compliance requirements…"
                />
                {errors.summary && <p className="mt-1.5 text-xs text-red-300">{errors.summary}</p>}
              </div>
            </div>
            <Button
              type="submit"
              className="mt-7 h-12 w-full rounded-md bg-brand font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Submit request
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
