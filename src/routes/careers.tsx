import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Briefcase, Check } from "lucide-react";
import { PageHero, Reveal, SectionHeading, CTASection } from "@/components/sections/Primitives";
import { Button } from "@/components/ui/button";
import { jobs, benefits, company } from "@/data/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | SDVODB Technologies" },
      {
        name: "description",
        content:
          "Join a veteran-owned team delivering cloud, cybersecurity, infrastructure, and staffing solutions. View open roles and benefits.",
      },
      { property: "og:title", content: "Careers | SDVODB Technologies" },
      {
        property: "og:description",
        content: "Open roles across IT services, infrastructure, and staffing at SDVODB Technologies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/careers" },
    ],
    links: [{ rel: "canonical", href: "https://secure-vet-solutions.lovable.app/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career on work that matters"
        description="We hire engineers, recruiters, and specialists who want ownership of outcomes — not tickets in a queue."
        breadcrumb="Careers"
      />

      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Open positions"
            title="Current opportunities"
            description="Do not see your role? Send your resume and we will keep you in mind for upcoming programs."
          />
          <div className="mt-14 space-y-4">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.05}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg">{job.title}</h2>
                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-primary" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-primary" /> {job.type}
                      </span>
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <Button asChild className="shrink-0">
                    <a href={`mailto:${company.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}>
                      Apply now
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Benefits"
            title="What we offer our team"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-medium text-foreground">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to apply?"
        description="Send your resume and the role you are targeting. Our recruiting team responds to every qualified applicant."
        primaryLabel="Contact Recruiting"
        primaryTo="/contact"
        secondaryLabel="Get a Quote"
        secondaryTo="/get-quote"
      />
    </>
  );
}
