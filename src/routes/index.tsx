import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Phone, Star } from "lucide-react";
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
  homeStats,
  whyChooseUs,
  processSteps,
  homeIndustries,
  caseStudies,
  blogPosts,
  homeFaqs,
  certifications,
  techPartners,
  company,
} from "@/data/site";
import heroTeam from "@/assets/hero-team.jpg";
import aboutHandshake from "@/assets/about-handshake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberCloud Infra LLC | IT, Infrastructure & Staffing" },
      {
        name: "description",
        content:
          "CyberCloud Infra LLC is a veteran-owned provider of IT services, infrastructure engineering, and IT, non-IT, and healthcare staffing for government and enterprise.",
      },
      { property: "og:title", content: "CyberCloud Infra LLC | IT, Infrastructure & Staffing" },
      {
        property: "og:description",
        content:
          "Technology and talent solutions for mission-critical organizations — cloud, cybersecurity, infrastructure, and specialized staffing.",
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
      <section className="relative overflow-hidden bg-gradient-hero pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-brand/15 blur-3xl animate-pulse-glow" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Service-Disabled Veteran-Owned Small Business</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Technology & talent for <span className="text-gradient">mission-critical</span>{" "}
              organizations
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {company.name} delivers IT services, infrastructure engineering, and specialized IT,
              non-IT, and healthcare staffing — so agencies and enterprises can modernize and staff
              from one accountable partner.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                <Link to="/get-quote">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  <Phone className="h-4 w-4" /> Talk to an Expert
                </Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {["Government & enterprise clients", "24/7 support", "Certified specialists"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-15 blur-3xl" />
            <img
              src={heroTeam}
              alt="Consultants reviewing performance dashboards with a client team"
              width={1408}
              height={1104}
              className="w-full rounded-3xl object-cover shadow-card"
            />
            <div className="glass absolute -bottom-6 -left-4 hidden rounded-2xl p-4 shadow-card sm:block lg:-left-10">
              <p className="font-display text-2xl font-extrabold text-foreground">98%</p>
              <p className="text-xs font-medium text-muted-foreground">Client retention</p>
            </div>
            <div className="glass absolute -top-6 right-4 hidden items-center gap-2 rounded-2xl px-4 py-3 shadow-card sm:flex">
              <Star className="h-4 w-4 fill-brand text-brand" />
              <p className="text-xs font-semibold text-foreground">Veteran-owned. Mission first.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Trust strip ---------------- */}
      <section className="border-y border-border bg-surface py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Platforms and partners we build on
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {techPartners.map((p) => (
              <span key={p} className="font-display text-base font-bold text-muted-foreground/70">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-border bg-card p-10 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((s, i) => (
            <StatBlock key={s.label} {...s} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="Four practices. One accountable partner."
            description="Technology delivery and specialized staffing under a single contract vehicle, single delivery lead, and single standard of quality."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07}>
                <Link
                  to={s.href}
                  className="hover-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-105">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Explore {s.title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
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
                    <span className="font-display text-3xl font-extrabold text-primary/15">
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

      {/* Industries & case studies live on their dedicated pages */}


      {/* ---------------- Certifications ---------------- */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Credentials"
            title="Compliance-aligned from day one"
            description="Our delivery practices map to the federal frameworks our clients are measured against."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display font-bold text-foreground">{c.label}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                      {c.detail}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Insights ---------------- */}
      <section className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Insights"
            title="Perspectives from our delivery teams"
            description="Practical guidance on modernization, security, and workforce strategy."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
            description="Still unsure where to start? A short discovery call usually answers it faster than a proposal."
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
