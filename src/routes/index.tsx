import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading, CTASection, Eyebrow } from "@/components/sections/Primitives";
import { StatBlock } from "@/components/sections/AnimatedCounter";
import {
  services,
  solutionPillars,
  devSecOpsPhases,
  homeStats,
  whyChooseUs,
  processSteps,
  blogPosts,
  homeFaqs,
  certifications,
  techPartners,
  company,
} from "@/data/site";
import heroSoc from "@/assets/hero-soc-navy.jpg";
import aboutHandshake from "@/assets/about-handshake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberCloud Infra LLC | DevSecOps, Cloud & Staffing" },
      {
        name: "description",
        content:
          "Veteran-owned CyberCloud Infra LLC delivers DevSecOps, software development, Agile transformation, low-code solutions, infrastructure engineering, and specialized staffing.",
      },
      { property: "og:title", content: "CyberCloud Infra LLC | DevSecOps, Cloud & Staffing" },
      {
        property: "og:description",
        content:
          "Security built into every step of delivery — DevSecOps, cloud modernization, Agile transformation, and mission-ready talent.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://secure-vet-solutions.lovable.app/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <img
          src={heroSoc}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1200}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-navy opacity-90" />
        <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern-light opacity-70" />
        <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-brand/25 blur-3xl animate-pulse-glow" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Eyebrow tone="light">Service-Disabled Veteran-Owned Small Business</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[4rem]">
              Security built into every step of{" "}
              <span className="text-brand">delivery</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {company.name} integrates DevSecOps, cloud and infrastructure engineering, Agile
              transformation, and mission-ready talent — so government agencies and enterprises
              modernize faster without trading away security.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                <Link to="/get-quote">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 underline-offset-4 hover:text-brand hover:underline"
              >
                <Phone className="h-4 w-4" /> Talk to an expert
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {["Government & enterprise programs", "24/7 support", "Certified specialists"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/20 text-brand">
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Service quick-links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((s) => (
              <Link
                key={s.slug}
                to={s.href}
                className="glass-navy group flex items-center gap-3 rounded-2xl p-4 transition-colors hover:border-brand/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1 truncate font-display text-sm font-semibold text-white">
                  {s.title}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Partner strip ---------------- */}
      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Platforms and partners we build on
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {techPartners.map((p) => (
              <span key={p} className="font-display text-base font-bold text-foreground/45">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Bento: what we do ---------------- */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="Six capabilities. One accountable partner."
            description="Using the right tools at the right time, our teams accelerate delivery and drive value while building security into every step of the process."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {/* Feature tile */}
            <Reveal className="lg:col-span-2">
              <Link
                to={solutionPillars[0]!.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-navy p-8 shadow-card lg:p-10"
              >
                <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-60" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-brand-foreground shadow-glow">
                    <ShieldCheck className="h-7 w-7" />
                  </span>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    {solutionPillars[0]!.kicker}
                  </p>
                  <h3 className="mt-3 text-3xl text-white lg:text-4xl">
                    {solutionPillars[0]!.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                    {solutionPillars[0]!.description}
                  </p>
                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {solutionPillars[0]!.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    {solutionPillars[0]!.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* Secondary tiles */}
            {solutionPillars.slice(1).map((p, i) => (
              <Reveal key={p.title} delay={0.06 * (i + 1)}>
                <Link
                  to={p.href}
                  className="hover-lift group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    {p.kicker}
                  </p>
                  <h3 className="mt-2 text-xl">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CI/CD band ---------------- */}
      <section className="relative overflow-hidden bg-navy px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-pattern-light opacity-50" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow tone="light">Continuous integration & deployment</Eyebrow>
            <h2 className="mt-5 text-3xl leading-[1.15] text-white sm:text-4xl">
              Faster deployments. <span className="text-brand">Continuous innovation.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              We leverage automation across the toolchain to boost productivity, shorten release
              cycles, and keep security controls verifiable at every stage of the lifecycle.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                <Link to="/it-services">
                  Explore our delivery model <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-navy rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Our DevSecOps lifecycle
              </p>
              <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {devSecOpsPhases.map((phase, i) => (
                  <li
                    key={phase}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center"
                  >
                    <span className="block font-display text-xs font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1.5 block text-sm font-semibold text-white">{phase}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-border bg-card p-10 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((s, i) => (
            <StatBlock key={s.label} {...s} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ---------------- Why choose us ---------------- */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why CyberCloud Infra"
              title="Built for organizations that cannot afford guesswork"
              description="We combine engineering discipline with recruiting depth, backed by veteran-owned values of accountability and service."
            />
            <div className="relative mt-10">
              <img
                src={aboutHandshake}
                alt="Two professionals shaking hands in a modern office lobby"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg">{r.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {r.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our process"
            title="From first conversation to continuous support"
            description="A predictable four-phase engagement model with named owners and written milestones."
          />
          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-border lg:block" />
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-brand/25">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Credentials strip ---------------- */}
      <section className="border-y border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm">
            <Eyebrow>Credentials</Eyebrow>
            <h2 className="mt-4 text-2xl leading-snug">Compliance-aligned from day one</h2>
          </div>
          <ul className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <li
                key={c.label}
                title={c.detail}
                className="flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5"
              >
                <c.icon className="h-4 w-4 text-brand" />
                <span className="text-sm font-semibold text-foreground">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Insights ---------------- */}
      <section className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Insights"
              title="Perspectives from our delivery teams"
            />
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              View all insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blogPosts.slice(0, 2).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft sm:flex-row"
                >
                  <div className="shrink-0 overflow-hidden sm:w-2/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                      <span className="font-semibold uppercase tracking-[0.12em] text-brand">
                        {post.category}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="mt-3 text-lg leading-snug">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions we hear before every engagement"
            description="Straight answers on scope, timelines, compliance, and how we staff programs."
          />
          <Accordion type="single" collapsible className="w-full">
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </>
  );
}
