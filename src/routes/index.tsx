import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Server,
  Shield,
  Users,
  Workflow,
  Search,
  PenTool,
  Rocket,
  Gauge,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Reveal, Eyebrow, SectionHeading } from "@/components/sections/Primitives";
import { blogPosts, industries, pillars, whoWeServe } from "@/data/site";
import aboutTeam from "@/assets/about-team.jpg";
import imgDatacenter from "@/assets/infrastructure-datacenter.jpg";
import imgHealthcare from "@/assets/healthcare-staff.jpg";
import imgSecurity from "@/assets/security-analyst.jpg";
import imgSoc from "@/assets/soc-analysts.jpg";
import imgDashboard from "@/assets/dashboard-laptop.jpg";
import imgTeam from "@/assets/team-dark.jpg";

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


const solutions = [
  {
    number: "01",
    title: "Cloud & Infrastructure Modernization",
    description:
      "Move off aging data centers with dependency-mapped migration waves, hardened landing zones, and cost governance from day one.",
    to: "/infrastructure-services",
  },
  {
    number: "02",
    title: "Digital Transformation",
    description:
      "Replace manual process with automated workflow, secure applications, and data platforms your teams actually adopt.",
    to: "/it-services",
  },
  {
    number: "03",
    title: "Workforce & Staffing Solutions",
    description:
      "Scale delivery with vetted IT, non-IT, and healthcare professionals matched to mission requirements, not keyword lists.",
    to: "/non-it-services",
  },
];

const industryCards = [
  { ...industries[0], image: imgDatacenter },
  { ...industries[1], image: imgHealthcare },
  { ...industries[2], image: imgSecurity },
  { ...industries[3], image: imgDashboard },
  { ...industries[4], image: imgSoc },
  { ...industries[5], image: imgTeam },
];

const staffingCards = [
  { title: "IT & Technology Talent", detail: "Cloud, security, data, and platform engineers" },
  { title: "Non-IT Professionals", detail: "Administrative, finance, HR, and engineering talent" },
  { title: "Healthcare Workforce", detail: "Clinical, non-clinical, and medical office professionals" },
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
    description: "A single delivery lead across technology and talent — no hand-offs, no finger-pointing.",
  },
  {
    number: "02",
    title: "Enterprise-Ready Expertise",
    description: "Certified engineers and recruiters with experience in regulated, mission-critical programs.",
  },
  {
    number: "03",
    title: "Technology + Talent",
    description: "Platforms and people delivered together, so modernization does not stall on staffing gaps.",
  },
  {
    number: "04",
    title: "Mission-Critical Delivery",
    description: "Disciplined sprints, transparent reporting, and SLA-backed support after go-live.",
  },
];

const processSteps = [
  { number: "01", title: "Discover", icon: Search, description: "Map objectives, constraints, and compliance obligations with the people who own the outcome." },
  { number: "02", title: "Design", icon: PenTool, description: "A prioritized roadmap with scope, staffing plan, milestones, and measurable success criteria." },
  { number: "03", title: "Deliver", icon: Rocket, description: "Execution in disciplined sprints with weekly reporting, risk tracking, and stakeholder demos." },
  { number: "04", title: "Optimize", icon: Gauge, description: "Continuous improvement, SLA-backed support, and quarterly reviews that compound value." },
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
      <TrustBar />
      <About />
      <Services />
      <WhoWeServe />
      <FeaturedSolutions />
      <Industries />
      <Staffing />
      <TechEcosystem />
      <WhyCyberCloud />
      <Process />
      <Testimonials />
      <Insights />
      <FinalCTA />
    </>
  );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-16 pt-[104px] sm:pb-20 lg:min-h-[780px] lg:pb-24 lg:pt-[150px]">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gradient-primary opacity-[0.10] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-70 [mask-image:linear-gradient(180deg,black,transparent_75%)]" />
      <div className={`relative ${CONTAINER} px-5 sm:px-6 lg:px-8`}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>IT • Non-IT • Infrastructure • Healthcare</Eyebrow>
            <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[4rem]">
              Technology, Infrastructure & Talent for{" "}
              <span className="text-gradient">Mission-Critical Organizations</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
              CyberCloud Infra LLC delivers technology, infrastructure, professional workforce,
              non-IT, and healthcare solutions to private and government organizations through one
              accountable partner.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-[52px] rounded-[10px] bg-gradient-primary px-7 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <Link to="/services">
                  Explore Our Services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-[52px] rounded-[10px] border-primary/40 px-7 text-base font-semibold text-primary transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-primary"
              >
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
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

/* ------------------------------------------------------------ TrustBar */

function TrustBar() {
  return (
    <section className="border-y border-border bg-background px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className={`${CONTAINER} grid grid-cols-2 gap-y-8 lg:grid-cols-4`}>
        {trustStats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={i > 0 ? "lg:border-l lg:border-border" : ""}
          >
            <div className="px-2 text-center">
              <p className="font-display text-[2.25rem] font-bold leading-none text-primary sm:text-[2.6rem]">
                {s.value}
              </p>
              <p className="mt-2.5 text-sm text-muted-foreground">{s.label}</p>
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
            className="mt-9 h-[52px] rounded-[10px] bg-gradient-primary px-7 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
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
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 0.06}>
              <Link
                to={pillar.href}
                className="group flex h-full flex-col rounded-[20px] border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-accent p-3.5 text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-border">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="mt-6 text-[1.2rem] font-bold text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-[1.65] text-muted-foreground">
                  {pillar.summary}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {pillar.services.slice(0, 4).map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
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
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
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


/* --------------------------------------------------- FeaturedSolutions */

function FeaturedSolutions() {
  return (
    <section className={`relative overflow-hidden bg-gradient-navy ${SECTION}`}>
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(50%_60%_at_15%_10%,rgba(16,102,242,0.35),transparent_60%),radial-gradient(45%_60%_at_90%_90%,rgba(108,99,255,0.35),transparent_60%)]" />
      <div className={`relative ${CONTAINER}`}>
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Featured Solutions"
            title={
              <>
                Modernize Your Technology.
                <br className="hidden sm:block" /> Strengthen Your Workforce.
              </>
            }
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.08}>
              <Link
                to={s.to}
                className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-9 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
                <span className="font-display text-5xl font-extrabold text-white/25">
                  {s.number}
                </span>
                <h3 className="mt-6 text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-4 flex-1 text-[0.975rem] leading-[1.7] text-white/70">
                  {s.description}
                </p>
                <ArrowUpRight className="mt-8 h-6 w-6 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Industries */

function Industries() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Built for Organizations Where Reliability Matters"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {industryCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <Link
                to="/industries"
                className="group relative block h-[230px] overflow-hidden rounded-[20px] border border-border shadow-card transition-shadow duration-300 hover:shadow-lift"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#080d24] via-[#080d24]/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">
                      {card.description}
                    </p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
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

/* ------------------------------------------------------------ Staffing */

function Staffing() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy px-5 py-16 sm:px-6 sm:py-[85px] lg:px-8 lg:py-[120px]">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_70%_at_80%_20%,rgba(108,99,255,0.4),transparent_62%),radial-gradient(50%_60%_at_0%_100%,rgba(16,102,242,0.35),transparent_62%)]" />
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
            className="mt-9 h-[52px] rounded-[10px] bg-white px-7 font-semibold text-navy hover:bg-white/90"
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
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
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
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
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

function FinalCTA() {
  return (
    <section className="px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div
        className={`${CONTAINER} relative overflow-hidden rounded-[28px] px-6 py-16 text-center sm:px-12 lg:py-20`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, #080D24 0%, #1066F2 55%, #6C63FF 100%)",
        }}
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full border border-white/15" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="relative mx-auto max-w-[900px]">
          <h2 className="text-[2rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.5rem] lg:text-[3rem]">
            Ready to Build What Comes Next?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.7] text-white/80 sm:text-lg">
            Let's discuss how CyberCloud Infra LLC can modernize your technology, strengthen your
            infrastructure, and deliver the talent you need.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-[52px] rounded-[10px] bg-white px-7 text-base font-semibold text-navy transition-transform hover:-translate-y-0.5 hover:bg-white/90"
            >
              <Link to="/contact">
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[52px] rounded-[10px] border-white/40 bg-white/10 px-7 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/20 hover:text-white"
            >
              <Link to="/it-services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
