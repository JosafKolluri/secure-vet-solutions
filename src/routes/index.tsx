import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Eyebrow, SectionHeading } from "@/components/sections/Primitives";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { pillars, whoWeServe, company, trustChips, contractingQuals, faqs } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberCloud Infra LLC | IT, Non-IT, Infrastructure & Healthcare" },
      {
        name: "description",
        content:
          "SDVOSB delivering IT services, non-IT professional services, infrastructure, and healthcare solutions for government and enterprise.",
      },
      {
        property: "og:title",
        content: "CyberCloud Infra LLC | IT, Non-IT, Infrastructure & Healthcare",
      },
      {
        property: "og:description",
        content:
          "IT, Non-IT, Infrastructure, and Healthcare services through one accountable SDVOSB partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://secure-vet-solutions.lovable.app/" }],
  }),
  component: HomePage,
});

const SECTION = "px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32";
const CONTAINER = "mx-auto max-w-[1120px]";

const trustStats = [
  { value: "10+", label: "Years of expertise" },
  { value: "50+", label: "Enterprise projects" },
  { value: "100+", label: "Professionals" },
  { value: "24/7", label: "Operations support" },
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
      <Services />
      <Proof />
      <WhoWeServe />
      <Qualifications />
      <Faq />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-[96px] pb-14 sm:pt-[120px] sm:pb-16 lg:pt-[132px] lg:pb-20">
      <div className="pointer-events-none absolute inset-0 plus-pattern opacity-70" />
      <div className={`relative ${CONTAINER} px-5 sm:px-6 lg:px-8`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Eyebrow tone="light">SDVOSB · {company.locationShort}</Eyebrow>
          <h1 className="mt-5 text-[2.15rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[3rem] lg:text-[3.35rem]">
            IT, Non-IT, Infrastructure & Healthcare services for mission-critical work
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-[1.7] text-white/78 sm:text-lg">
            CyberCloud Infra LLC delivers technology, professional workforce, infrastructure, and
            healthcare solutions to government and enterprise — one accountable partner, not four
            vendors.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-9 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {pillars.map((pillar) => (
            <li key={pillar.slug}>
              <Link
                to={pillar.href}
                className="flex min-h-[72px] flex-col items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-3 py-3 text-center transition-colors hover:border-brand/50 hover:bg-white/[0.1]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  {pillar.number}
                </span>
                <span className="mt-1 text-sm font-semibold leading-snug text-white">
                  {pillar.title.replace(" Services", "")}
                </span>
              </Link>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            className="h-12 min-w-[200px] rounded-md bg-brand px-8 text-base font-semibold text-brand-foreground shadow-[0_10px_30px_rgba(255,184,28,0.28)] hover:bg-brand/90"
          >
            <Link to="/get-quote">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 min-w-[180px] rounded-md border-white/30 bg-transparent px-7 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white"
          >
            <Link to="/contact">Talk to an expert</Link>
          </Button>
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-white/60 sm:text-[13px]">
          {trustChips.map((chip, i) => (
            <span key={chip.lead}>
              {i > 0 && <span className="mx-2 text-white/25">·</span>}
              <span className="font-semibold text-white/80">{chip.lead}</span> {chip.rest}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <ServicesShowcase />
      </div>
    </section>
  );
}

function Proof() {
  const [index, setIndex] = useState(0);
  const total = quotes.length;
  const active = quotes[index];

  return (
    <section className={`bg-surface ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Proof"
            title="What delivery partners tell us"
            description="Credentials in the header. Outcomes next to the decision to call."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-4">
          {trustStats.map((s) => (
            <div key={s.label} className="border-t border-border pt-5">
              <p className="font-display text-3xl font-bold tracking-tight text-primary">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <Reveal delay={0.08} className="mt-14">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <Quote className="h-8 w-8 text-brand" />
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 max-w-3xl text-lg leading-[1.7] text-foreground sm:text-[1.25rem]"
            >
              “{active.quote}”
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

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Ready to scope IT, staffing, infrastructure, or healthcare support? We come back with a
            written plan — not a brochure.
          </p>
          <Button
            asChild
            className="h-12 rounded-md bg-brand px-7 font-semibold text-brand-foreground hover:bg-brand/90"
          >
            <Link to="/get-quote">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Who we serve"
            title="Private sector and government, same delivery model"
          />
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {whoWeServe.map((market) => (
            <div key={market.slug} className="border-t border-border pt-8">
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
                      className="w-[34%] bg-muted/50 px-4 py-4 font-semibold text-foreground sm:px-5"
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

function Faq() {
  return (
    <section className={`bg-background ${SECTION}`}>
      <div className={`${CONTAINER} mx-auto max-w-2xl`}>
        <Reveal>
          <SectionHeading
            eyebrow="Before you ask"
            title="Straight answers"
            description="The questions buyers usually ask before the first call."
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

function FinalCTA() {
  return (
    <section className="px-5 pb-24 sm:px-6 lg:px-8 lg:pb-32">
      <div
        className={`${CONTAINER} relative overflow-hidden rounded-3xl bg-gradient-hero px-6 py-16 text-center sm:px-12 lg:py-20`}
      >
        <div className="relative mx-auto max-w-2xl">
          <Eyebrow tone="light">Next step</Eyebrow>
          <h2 className="mt-5 text-[1.85rem] font-bold leading-[1.2] tracking-tight text-white sm:text-[2.4rem]">
            Have a program on the clock?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-[1.75] text-white/75 sm:text-lg">
            Tell us the mission. We return a clear scope, timeline, and staffing plan.
          </p>
          <blockquote className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/65">
            “{quotes[0].quote}”
          </blockquote>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 min-w-[200px] rounded-md bg-brand px-8 text-base font-semibold text-brand-foreground hover:bg-brand/90"
            >
              <Link to="/get-quote">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-md border-white/30 bg-transparent px-7 text-base font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
