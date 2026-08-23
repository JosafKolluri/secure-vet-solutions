import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, Cloud, Shield, Server, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Eyebrow, SectionHeading, HudCorners } from "@/components/sections/Primitives";
import {
  company,
  trustChips,
  faqs,
  homeStats,
  whyChooseUs,
  processSteps,
  homeIndustries,
  caseStudies,
  certifications,
} from "@/data/site";
import { jsonLdScript, pageHead, SITE_URL } from "@/lib/seo";
import heroPhoto from "@/assets/soc-hero.jpg";
import handshakePhoto from "@/assets/about-handshake.jpg";
import cloudPhoto from "@/assets/dashboard-laptop.jpg";
import cyberPhoto from "@/assets/security-analyst.jpg";
import infraPhoto from "@/assets/infrastructure-datacenter.jpg";
import healthPhoto from "@/assets/healthcare-staff.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "CyberCloud Infra LLC | IT, Non-IT, Infrastructure & Healthcare",
      description:
        "SDVOSB delivering IT, non-IT professional services, infrastructure, and healthcare solutions for government and enterprise. One accountable partner in Arlington, TX.",
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

const missionLanes = [
  {
    label: "Cloud",
    title: "Cloud platforms",
    copy: "Landing zones, identity, and day-2 operations on Azure, AWS, and Google Cloud.",
    href: "/it-services",
    image: cloudPhoto,
    icon: Cloud,
  },
  {
    label: "Cyber + AI",
    title: "Cybersecurity with AI-assisted ops",
    copy: "Zero-trust, SIEM, and monitoring — with AI used to speed detection, not to replace control owners.",
    href: "/it-services",
    image: cyberPhoto,
    icon: Shield,
  },
  {
    label: "Infrastructure",
    title: "Infrastructure operations",
    copy: "Data center, network, end-user computing, and 24/7 NOC coverage.",
    href: "/infrastructure-services",
    image: infraPhoto,
    icon: Server,
  },
  {
    label: "Healthcare",
    title: "Healthcare services",
    copy: "Clinical and non-clinical staffing, healthcare IT, and medical operations support.",
    href: "/healthcare-services",
    image: healthPhoto,
    icon: HeartPulse,
  },
] as const;

const SECTION = "px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24";
const CONTAINER = "mx-auto max-w-[1120px]";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Process />
      <Industries />
      <CaseStudies />
      <Credentials />
      <Faq />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-[68px] md:pt-[108px]">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroPhoto}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55" />
        <div className="absolute inset-0 mesh-circuit" />
        <div className="absolute inset-0 scanlines" />
      </div>
      <div className={`relative ${CONTAINER} px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24`}>
        <Reveal>
          <Eyebrow tone="light">SDVOSB · Cloud · Cyber · Infrastructure · Healthcare</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-[2.1rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-[2.85rem] lg:text-[3.2rem]">
            Cloud, cybersecurity with AI, infrastructure, and healthcare — one mission stack
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.7] text-white/70 sm:text-lg">
            We design and run the platforms, security operations, facilities, and care-support
            teams that keep government and enterprise programs online. AI is used inside
            cybersecurity and analytics to accelerate detection — not as a black-box product.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {missionLanes.map((lane) => (
              <li
                key={lane.label}
                className="inline-flex items-center gap-2 rounded-sm border border-brand/30 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand"
              >
                <lane.icon className="h-3.5 w-3.5" />
                {lane.label}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 min-w-[188px] rounded-sm bg-brand px-7 text-base font-semibold text-brand-foreground hover:bg-brand/90"
            >
              <Link to="/get-quote">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 min-w-[168px] rounded-sm border-white/25 bg-transparent px-6 text-base font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact">
                <Phone className="h-4 w-4" /> Talk to an expert
              </Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {["Government & enterprise", "24/7 operations support", "Credentialed specialists"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/75">
                  <Check className="h-4 w-4 text-brand" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className={`${CONTAINER} grid grid-cols-2 gap-px bg-border sm:grid-cols-4`}>
        {homeStats.map((stat) => (
          <div key={stat.label} className="bg-card px-5 py-8 text-center sm:py-10">
            <p className="font-display text-3xl font-semibold tracking-tight text-teal sm:text-4xl">
              {stat.value}
              {stat.suffix}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Mission stack"
            title="Cloud. Cyber. Infrastructure. Healthcare."
            description="Four visual lanes a contracting officer or CIO can scan in seconds. Non-IT professional services still sit under the same contract when the mission needs them."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {missionLanes.map((lane, i) => (
            <Reveal key={lane.label} delay={i * 0.05}>
              <Link
                to={lane.href}
                className="group relative flex min-h-[280px] overflow-hidden border border-border"
              >
                <img
                  src={lane.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/15" />
                <HudCorners />
                <div className="relative mt-auto flex w-full flex-col p-6 sm:p-7">
                  <p className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    <lane.icon className="h-3.5 w-3.5" />
                    {lane.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{lane.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{lane.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    Explore
                    <ArrowRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Also delivering{" "}
          <Link to="/non-it-services" className="font-semibold text-foreground underline-offset-4 hover:underline">
            non-IT professional services and staffing
          </Link>{" "}
          on the same accountable model.
        </p>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}>
        <Reveal>
          <Eyebrow>Why CyberCloud</Eyebrow>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.2] sm:text-[2.15rem]">
            Built for organizations that cannot afford guesswork
          </h2>
          <div className="relative mt-8 overflow-hidden rounded-lg">
            <img
              src={handshakePhoto}
              alt="Handshake at the start of a delivery engagement"
              className="aspect-[4/3] w-full object-cover"
            />
            <HudCorners />
          </div>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            You get a named delivery lead, a written plan, and the same four service lanes on
            government and commercial work — not a rotating bench of subcontractors.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="h-full border border-border bg-card p-5">
                <item.icon className="h-5 w-5 text-teal" />
                <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="How we work"
            title="From first conversation to ongoing support"
            description="A short, repeatable path so scoping, delivery, and operations stay in one thread."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05}>
              <article className="relative h-full overflow-hidden border border-border bg-card p-6">
                <p className="font-display text-5xl font-semibold text-foreground/[0.06]">
                  {step.step}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Industries"
            title="Sector experience that shortens the learning curve"
            description="Public sector, healthcare, finance, manufacturing, education, and enterprise — same delivery model."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeIndustries.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 0.04}>
              <div className="h-full border border-border bg-card p-6">
                <industry.icon className="h-5 w-5 text-brand" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link
          to="/industries"
          className="mt-8 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-foreground"
        >
          See who we serve <ArrowRight className="h-4 w-4 text-teal" />
        </Link>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Case studies"
            title="Outcomes, not activity reports"
            description="Representative engagements. Client names withheld where contracts require it."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={study.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-sm bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-foreground">
                    {study.industry}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{study.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {study.results[0]}
                  </p>
                  <Link
                    to="/case-studies"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                  >
                    Read the story <ArrowRight className="h-4 w-4 text-teal" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Credentials"
            title="Compliance-aligned from day one"
            description="Status and practices we can stand behind today. UEI, CAGE, and partnership badges stay off the site until they are verified."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.label} delay={i * 0.04}>
              <div className="flex items-start gap-3 border border-border bg-card p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-teal">
                  <cert.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{cert.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{cert.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          {trustChips.map((chip, i) => (
            <span key={chip.lead}>
              {i > 0 && <span className="mx-2 text-border">·</span>}
              <span className="font-semibold text-foreground/80">{chip.lead}</span> {chip.rest}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={`${CONTAINER} max-w-2xl`}>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions agencies and enterprises ask"
            description="SDVOSB status, service coverage, staffing speed, and what happens after go-live."
          />
        </Reveal>
        <Reveal delay={0.06} className="mt-10">
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

function FinalCTA() {
  return (
    <section className="px-5 pb-24 sm:px-6 lg:px-8 lg:pb-28">
      <div className={`${CONTAINER} relative overflow-hidden rounded-lg bg-navy px-6 py-16 sm:px-12 lg:py-20`}>
        <div className="pointer-events-none absolute inset-0 grid-pattern" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand/50" />
        <div className="relative mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">Next step</Eyebrow>
          <h2 className="mt-5 text-[1.85rem] font-semibold leading-[1.2] tracking-tight text-white sm:text-[2.35rem]">
            Ready to scope cloud, cyber, infrastructure, or healthcare support?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.75] text-white/68 sm:text-lg">
            Tell us the mission. We return a scoped quote with approach, timeline, and staffing plan.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 min-w-[200px] rounded-sm bg-brand px-8 text-base font-semibold text-brand-foreground hover:bg-brand/90"
            >
              <Link to="/get-quote">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-sm border-white/25 bg-transparent px-7 text-base font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact">Talk to an expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
