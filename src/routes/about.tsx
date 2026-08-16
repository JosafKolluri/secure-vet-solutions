import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, Reveal, SectionHeading, CTASection } from "@/components/sections/Primitives";
import { StatBlock } from "@/components/sections/AnimatedCounter";
import { coreValues, milestones, homeStats, certifications, company } from "@/data/site";
import { pageHead } from "@/lib/seo";
import aboutHandshake from "@/assets/about-handshake.jpg";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About CyberCloud Infra LLC | Veteran-Owned SDVOSB",
      description:
        "CyberCloud Infra LLC is a veteran-owned SDVOSB delivering IT, infrastructure, non-IT professional services, and healthcare solutions to government and enterprise.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A veteran-owned SDVOSB for technology and talent"
        description="Mission-critical organizations deserve one partner who can engineer the solution and staff the people who run it — across IT, infrastructure, non-IT, and healthcare."
        breadcrumb="About Us"
      />

      {/* Story */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-primary opacity-10 blur-2xl" />
              <img
                src={aboutHandshake}
                alt="Client and consultant shaking hands in an office lobby"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Service is not a slogan here"
              description={`${company.name} was built by people who spent their careers responsible for uptime, security, and the teams behind them.`}
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              That background shapes how we work. We scope honestly, we escalate early, and we
              measure success by whether your program stayed on mission — not by how many hours we
              billed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Today we support federal, state, and commercial clients across cloud and
              infrastructure engineering, cybersecurity, managed IT, and specialized IT, non-IT,
              and healthcare staffing.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Veteran-owned leadership",
                "Federal & commercial delivery",
                "Certified engineers & recruiters",
                "Single accountable delivery lead",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm font-medium">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((s, i) => (
            <StatBlock key={s.label} {...s} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-9 shadow-soft">
              <h2 className="text-2xl">Our mission</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To give mission-critical organizations dependable technology and dependable people —
                delivered with the transparency, urgency, and accountability our clients' missions
                demand.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-gradient-navy p-9 text-white shadow-card">
              <h2 className="text-2xl text-white">Our vision</h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                To be the partner agencies and enterprises call first when a program has to work —
                trusted equally for the systems we engineer and the professionals we place.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core values"
            title="The standards behind every engagement"
            description="These are the commitments our clients can hold us to, on every project and every placement."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our journey"
              title="Built deliberately, one capability at a time"
              description="We expanded only where clients asked us to take on more responsibility."
            />
            <ol className="mt-10 space-y-6">
              {milestones.map((m, i) => (
                <li key={m.title} className="relative pl-10">
                  <span className="absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {i < milestones.length - 1 && (
                    <span className="absolute left-3.5 top-9 h-full w-px bg-border" />
                  )}
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    {m.year}
                  </p>
                  <h3 className="mt-1.5 text-lg">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={aboutTeam}
              alt="Team collaborating around a conference table"
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-card"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
                >
                  <c.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{c.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Let's talk about your mission"
        description="Tell us what has to work, and we will tell you exactly how we would deliver it."
      />
    </>
  );
}
