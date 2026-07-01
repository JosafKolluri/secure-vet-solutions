import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Download, CalendarCheck, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/sections/Primitives";
import { Testimonials } from "@/components/sections/Testimonials";
import { StatBlock } from "@/components/sections/AnimatedCounter";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
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
  blogPosts,
} from "@/data/site";

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
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-hero">
        {/* Layered azure glows */}
        <div className="absolute inset-0 [background:radial-gradient(70%_60%_at_75%_25%,oklch(0.62_0.16_250/0.35),transparent)]" />
        <motion.div
          aria-hidden="true"
          className="absolute -left-32 top-1/4 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[130px]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-[130px]"
          animate={{ opacity: [0.5, 0.25, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Technical grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:42px_42px] [mask-image:radial-gradient(80%_70%_at_40%_40%,black,transparent)]"
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="absolute h-1.5 w-1.5 rounded-full bg-accent/60"
            style={{ left: `${12 + i * 15}%`, top: `${20 + (i % 3) * 22}%` }}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-white"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden lg:block"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-b bg-card py-14">
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

      {/* Featured services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Featured Services"
              description="A full spectrum of secure technology services engineered for mission-critical environments."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <div className="group relative h-full rounded-3xl border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="relative mt-4 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/capabilities"
                    className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-accent"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
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
      <section className="border-y bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Technology Partners & Platforms
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

      {/* Capability statement */}
      <section className="py-24">
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
                        250+ projects across federal, defense & commercial missions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-white shadow-elegant sm:p-10">
                <div className="absolute inset-0 opacity-30 [background:radial-gradient(50%_80%_at_90%_10%,oklch(0.62_0.16_250/0.6),transparent)]" />
                <motion.div
                  className="relative mx-auto mb-8 grid h-40 w-32 place-items-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FileText className="h-16 w-16 text-white/90" />
                  <span className="absolute bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/30" />
                  <span className="absolute bottom-6 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/20" />
                </motion.div>
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold">Download Our Capability Statement</h3>
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

      {/* Testimonials */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What Our Clients Say"
              description="Trusted partners who depend on us for mission success."
            />
          </Reveal>
          <Testimonials />
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
                      Read More <ArrowRight className="h-4 w-4" />
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
