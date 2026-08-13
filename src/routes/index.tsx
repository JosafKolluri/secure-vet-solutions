import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Users,
  Search,
  PenTool,
  Rocket,
  Gauge,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Reveal, Eyebrow, SectionHeading } from "@/components/sections/Primitives";
import {
  blogPosts,
  pillars,
  whoWeServe,
  company,
  trustChips,
  contractingQuals,
  faqs,
} from "@/data/site";
import aboutTeam from "@/assets/about-team.jpg";
import itImage from "@/assets/dashboard-laptop.jpg";
import nonItImage from "@/assets/hero-team.jpg";
import infraImage from "@/assets/infrastructure-datacenter.jpg";
import healthcareImage from "@/assets/healthcare-staff.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberCloud Infra LLC | Technology, Infrastructure & Talent" },
      {
        name: "description",
        content:
          "CyberCloud Infra LLC delivers enterprise IT services, cloud infrastructure, cybersecurity, application development, ServiceNow consulting, and specialized staffing solutions.",
      },
      {
        property: "og:title",
        content: "CyberCloud Infra LLC | Technology, Infrastructure & Talent",
      },
      {
        property: "og:description",
        content:
          "Enterprise IT services, cloud infrastructure, cybersecurity, application development, ServiceNow consulting, and specialized staffing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://secure-vet-solutions.lovable.app/" }],
  }),
  component: HomePage,
});

const SECTION = "px-5 py-16 sm:px-6 sm:py-[85px] lg:px-8 lg:py-[120px]";
const CONTAINER = "mx-auto max-w-[1200px]";

const trustStats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "50+", label: "Enterprise Projects" },
  { value: "100+", label: "Technology Professionals" },
  { value: "24/7", label: "Operational Support" },
];

// Home service grid is driven by the four pillars in src/data/site.ts

const staffingCards = [
  { title: "IT & Technology Talent", detail: "Cloud, security, data, and platform engineers" },
  { title: "Non-IT Professionals", detail: "Administrative, finance, HR, and engineering talent" },
  {
    title: "Healthcare Workforce",
    detail: "Clinical, non-clinical, and medical office professionals",
  },
];

const techStack = [
  "ServiceNow",
  "AWS",
  "Microsoft Azure",
  "Microsoft 365",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Cybersecurity",
  "Cloud Infrastructure",
];

const whyCards = [
  {
    number: "01",
    title: "One Accountable Partner",
    description:
      "A single delivery lead across technology and talent — no hand-offs, no finger-pointing.",
  },
  {
    number: "02",
    title: "Enterprise-Ready Expertise",
    description:
      "Certified engineers and recruiters with experience in regulated, mission-critical programs.",
  },
  {
    number: "03",
    title: "Technology + Talent",
    description:
      "Platforms and people delivered together, so modernization does not stall on staffing gaps.",
  },
  {
    number: "04",
    title: "Mission-Critical Delivery",
    description:
      "Disciplined sprints, transparent reporting, and SLA-backed support after go-live.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "Map objectives, constraints, and compliance obligations with the people who own the outcome.",
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    description:
      "A prioritized roadmap with scope, staffing plan, milestones, and measurable success criteria.",
  },
  {
    number: "03",
    title: "Deliver",
    icon: Rocket,
    description:
      "Execution in disciplined sprints with weekly reporting, risk tracking, and stakeholder demos.",
  },
  {
    number: "04",
    title: "Optimize",
    icon: Gauge,
    description:
      "Continuous improvement, SLA-backed support, and quarterly reviews that compound value.",
  },
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
      <AudienceRouter />
      <About />
      <Services />
      <WhoWeServe />
      <Qualifications />
      <Staffing />
      <TechEcosystem />
      <WhyCyberCloud />
      <Process />
      <Testimonials />
      <Insights />
      <Faq />
      <FinalCTA />
    </>
  );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-16 pt-[104px] sm:pb-20 lg:min-h-[780px] lg:pb-24 lg:pt-[140px]">
      <div className="pointer-events-none absolute inset-0 plus-pattern" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(70%_80%_at_90%_10%,rgba(14,116,144,0.35),transparent_60%),radial-gradient(50%_50%_at_0%_100%,rgba(255,184,28,0.12),transparent_55%)]" />
      <div className={`relative ${CONTAINER} px-5 sm:px-6 lg:px-8`}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow tone="light">SDVOSB · {company.locationShort}</Eyebrow>
            <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[3.15rem] lg:text-[3.75rem]">
              Win the work. Deliver it. One SDVOSB does both.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75 sm:text-lg">
              Technology, infrastructure, cybersecurity, and specialized staffing for government and
              enterprise programs that cannot afford downtime, drift, or unfilled critical roles.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-[52px] rounded-md bg-brand px-7 text-base font-semibold text-brand-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:bg-brand/90"
              >
                <Link to="/services">
                  See Services &amp; Delivery <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-[52px] rounded-md border-white/35 bg-transparent px-7 text-base font-semibold text-white hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <Link to="/who-we-serve">Prime contractor? Team with us</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {trustStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-[1.65rem] font-bold leading-none text-brand sm:text-[1.85rem]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-white/65">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-xs text-white/70">
              {trustChips.map((chip) => (
                <span key={chip.lead}>
                  <b className="font-semibold text-white">{chip.lead}</b> {chip.rest}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ AudienceRouter */

function AudienceRouter() {
  return (
    <section className="bg-surface px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className={`${CONTAINER} grid gap-6 lg:grid-cols-2`}>
        {whoWeServe.map((market, i) => (
          <Reveal key={market.slug} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                {market.slug === "government-public-sector"
                  ? "For agencies & primes"
                  : "For private-sector teams"}
              </span>
              <h2 className="mt-4 text-[1.55rem] font-bold leading-snug text-foreground">
                {market.slug === "government-public-sector"
                  ? "I need an SDVOSB that can actually deliver"
                  : "I need technology and talent under one contract"}
              </h2>
              <p className="mt-3 flex-1 text-[0.975rem] leading-[1.7] text-muted-foreground">
                {market.message}
              </p>
              <Button
                asChild
                className="mt-7 h-11 w-fit rounded-md bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/who-we-serve">
                  {market.slug === "government-public-sector"
                    ? "See public-sector delivery"
                    : "See private-sector delivery"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- About */

function About() {
  const features = [
    "Enterprise Technology Expertise",
    "Specialized Talent Solutions",
    "Mission-Critical Delivery",
  ];
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-2`}>
        <Reveal className="relative">
          <img
            src={aboutTeam}
            alt="CyberCloud Infra engineers collaborating in an enterprise technology operations center"
            loading="lazy"
            className="h-[420px] w-full rounded-3xl object-cover shadow-card lg:h-[500px]"
          />
          <div className="absolute -bottom-6 left-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-lift sm:left-8">
            <p className="text-sm font-semibold text-foreground">Enterprise Ready</p>
            <p className="text-xs text-muted-foreground">Governance, security, and SLAs built in</p>
          </div>
          <div className="absolute -top-6 right-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lift sm:block">
            <p className="text-sm font-semibold text-foreground">Technology + Talent</p>
            <p className="text-xs text-muted-foreground">One accountable partner</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-[2.375rem] lg:text-[2.875rem]">
            One Partner for Technology, Infrastructure & Talent
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground">
            CyberCloud Infra LLC is a Service-Disabled Veteran-Owned Small Business supporting
            government agencies and enterprises that cannot afford downtime, drift, or unfilled
            critical roles.
          </p>
          <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
            We combine infrastructure engineering, cloud modernization, and cybersecurity with
            specialized staffing — so the platform and the people arrive together.
          </p>
          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium text-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="mt-9 h-[52px] rounded-md bg-brand px-7 font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90"
          >
            <Link to="/about">
              Discover CyberCloud <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Services */

const pillarImages: Record<string, string> = {
  "it-services": itImage,
  "non-it-services": nonItImage,
  "infrastructure-services": infraImage,
  "healthcare-services": healthcareImage,
};

function Services() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Four Service Pillars, One Accountable Partner"
            description="Technology, professional workforce, infrastructure, and healthcare solutions — delivered together for private, government, and public-sector organizations."
          />
        </Reveal>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 0.06}>
              <Link
                to={pillar.href}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="relative">
                  <div className="aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={pillarImages[pillar.slug]}
                      alt={`${pillar.title} at CyberCloud Infra LLC`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute -bottom-7 left-6 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift ring-4 ring-card">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-card/85 px-2.5 py-1 font-display text-xs font-extrabold text-primary backdrop-blur">
                    {pillar.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-11">
                  <h3 className="text-[1.2rem] font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.65] text-muted-foreground">
                    {pillar.summary}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {pillar.services.slice(0, 3).map((s) => (
                      <li
                        key={s.slug}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {s.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- WhoWeServe */

function WhoWeServe() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Trusted Across Private and Public Sectors"
            description="From growing businesses to federal agencies, we bring the same disciplined delivery model to every engagement."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {whoWeServe.map((market, i) => (
            <Reveal key={market.slug} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-[24px] border border-border bg-card p-8 shadow-card lg:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <market.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-[1.45rem] font-bold text-foreground">{market.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-[1.7] text-muted-foreground">
                  {market.message}
                </p>
                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {market.segments.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12}>
          <div className="mt-10 text-center">
            <Link
              to="/who-we-serve"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              See how we support each sector <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Staffing */

function Staffing() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy px-5 py-16 sm:px-6 sm:py-[85px] lg:px-8 lg:py-[120px]">
      <div className="pointer-events-none absolute inset-0 plus-pattern" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_70%_at_80%_20%,rgba(14,116,144,0.4),transparent_62%),radial-gradient(50%_60%_at_0%_100%,rgba(255,184,28,0.18),transparent_62%)]" />
      <div className={`relative ${CONTAINER} grid items-center gap-14 lg:grid-cols-2`}>
        <Reveal>
          <Eyebrow tone="light">Staffing</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.375rem] lg:text-[2.875rem]">
            Find the Right Talent for Critical Roles
          </h2>
          <p className="mt-5 max-w-xl text-base leading-[1.7] text-white/70">
            Our recruiters are specialists, not generalists. We source, screen, and credential
            professionals against the actual requirements of the role — then support them through
            placement and retention.
          </p>
          <Button
            asChild
            className="mt-9 h-[52px] rounded-md bg-brand px-7 font-semibold text-brand-foreground hover:bg-brand/90"
          >
            <Link to="/non-it-services">
              Explore Staffing Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          {staffingCards.map((card, i) => (
            <motion.div
              key={card.title}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm lg:ml-auto lg:max-w-md"
              style={{ marginLeft: i === 1 ? "auto" : undefined }}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
                <Users className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-white">{card.title}</p>
                <p className="text-sm text-white/65">{card.detail}</p>
              </div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- TechEcosystem */

function TechEcosystem() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title="Technology Expertise That Scales With You"
            description="Platforms, clouds, and stacks our engineers work in every day across enterprise and public-sector programs."
          />
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <Reveal key={tech} delay={i * 0.03}>
              <span className="inline-flex items-center rounded-2xl border border-border bg-card px-6 py-4 text-sm font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-primary">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- WhyCyberCloud */

function WhyCyberCloud() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading eyebrow="Why Us" title="Why Organizations Choose CyberCloud" />
        </Reveal>
        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {whyCards.map((c, i) => (
            <Reveal key={c.number} delay={i * 0.08} className="relative">
              <span className="font-display text-[3rem] font-extrabold leading-none text-primary/25">
                {c.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted-foreground">
                {c.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Process */

function Process() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading eyebrow="Process" title="How We Deliver" />
        </Reveal>
        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-7 top-0 hidden h-full w-px bg-border sm:block lg:left-0 lg:right-0 lg:top-7 lg:h-px lg:w-full" />
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="relative">
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                <step.icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-sm font-bold tracking-[0.14em] text-primary">{step.number}</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Testimonials */

function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = quotes.length;
  const active = quotes[index];

  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Delivery Partners Tell Us"
            description="Representative feedback from engagements. Client names withheld under confidentiality agreements."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="mx-auto max-w-[760px] rounded-3xl border border-border bg-card p-8 shadow-card sm:p-[50px]">
            <Quote className="h-9 w-9 text-primary/30" />
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 text-lg leading-[1.7] text-foreground sm:text-xl"
            >
              “{active.quote}”
            </motion.blockquote>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div>
                <p className="font-semibold text-foreground">{active.name}</p>
                <p className="text-sm text-muted-foreground">{active.role}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => setIndex((i) => (i - 1 + total) % total)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setIndex((i) => (i + 1) % total)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {quotes.map((q, i) => (
              <button
                key={q.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-7 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Insights */

function Insights() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Perspectives From Our Engineers"
            description="Practical guidance on cloud infrastructure, security strategy, and building mission-critical teams."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-[1.7] text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- CTA */

function Qualifications() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]`}>
        <Reveal>
          <Eyebrow>For primes &amp; SBLOs</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-[2.375rem] lg:text-[2.75rem]">
            SDVOSB capacity, task-order ready
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <tbody>
                {contractingQuals.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <th
                      scope="row"
                      className="w-[38%] bg-muted/60 px-4 py-3.5 font-semibold text-foreground sm:px-5"
                    >
                      {row.label}
                    </th>
                    <td className="px-4 py-3.5 text-muted-foreground sm:px-5">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base leading-[1.7] text-muted-foreground">
            Everything a contracting officer or small-business liaison needs to evaluate us as a
            delivery partner — certifications, NAICS, contract types, and how we actually show up
            after award.
          </p>
          <Button
            asChild
            className="mt-8 h-[52px] rounded-md bg-primary px-7 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/contact">
              Book a teaming conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-4">
            <Link to="/about" className="text-sm font-semibold text-teal hover:underline">
              Or read about our veteran-owned delivery model →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={`${CONTAINER} mx-auto max-w-3xl`}>
        <Reveal>
          <SectionHeading
            eyebrow="Before you ask"
            title="Straight answers"
            description="The questions agencies, primes, and enterprise buyers usually ask before the first call."
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-10">
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-card px-5"
          >
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.95rem] leading-[1.7] text-muted-foreground">
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

function FinalCTA() {
  return (
    <section className="px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div
        className={`${CONTAINER} relative overflow-hidden rounded-[28px] bg-gradient-hero px-6 py-16 text-center sm:px-12 lg:py-20`}
      >
        <div className="pointer-events-none absolute inset-0 plus-pattern" />
        <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(50%_80%_at_85%_0%,rgba(255,184,28,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-[900px]">
          <Eyebrow tone="light">Next step</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.5rem] lg:text-[3rem]">
            Have a program on the clock?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.7] text-white/80 sm:text-lg">
            Tell us the mission. We will come back with a clear scope, timeline, and staffing plan —
            from a principal who stays on the work.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-[52px] rounded-md bg-brand px-7 text-base font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90"
            >
              <Link to="/contact">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[52px] rounded-md border-white/40 bg-white/10 px-7 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/20 hover:text-white"
            >
              <Link to="/services">View services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
