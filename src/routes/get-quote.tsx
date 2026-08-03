import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/sections/Primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { services } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  organization: z.string().trim().max(120).optional(),
  service: z.string().trim().min(1, "Select a service"),
  details: z.string().trim().min(10, "Add a little more detail").max(1500),
});

export const Route = createFileRoute("/get-quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote | CyberCloud Infra LLC" },
      {
        name: "description",
        content:
          "Request a free, no-obligation quote for IT services, infrastructure engineering, or IT, non-IT, and healthcare staffing support.",
      },
      { property: "og:title", content: "Get a Free Quote | CyberCloud Infra LLC" },
      {
        property: "og:description",
        content: "Tell us your requirements and receive a scoped quote from our delivery team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/get-quote" },
    ],
    links: [{ rel: "canonical", href: "https://secure-vet-solutions.lovable.app/get-quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    e.currentTarget.reset();
    toast.success("Quote request received", {
      description: "A practice lead will follow up within one business day.",
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Request a free, scoped quote"
        description="Share your requirements and we will come back with scope, approach, and pricing — no obligation."
        breadcrumb="Get a Quote"
      />

      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="What happens next"
              title="Three steps, one business day"
            />
            <ol className="mt-9 space-y-5">
              {[
                "We review your requirements and confirm scope questions by email.",
                "A practice lead schedules a short discovery call at your convenience.",
                "You receive a written quote with approach, milestones, and pricing.",
              ].map((s, i) => (
                <li key={s} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s}</p>
                </li>
              ))}
            </ol>
            <ul className="mt-8 space-y-2.5">
              {["No obligation", "Confidential review", "Response within one business day"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <h2 className="text-2xl">Tell us about your project</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="q-name">Full name</Label>
                  <Input id="q-name" name="name" className="mt-2" placeholder="Jane Doe" />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="q-email">Work email</Label>
                  <Input id="q-email" name="email" type="email" className="mt-2" placeholder="jane@agency.gov" />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="q-org">Organization</Label>
                  <Input id="q-org" name="organization" className="mt-2" placeholder="Agency or company" />
                </div>
                <div>
                  <Label htmlFor="q-service">Service needed</Label>
                  <select
                    id="q-service"
                    name="service"
                    defaultValue=""
                    className="mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other / not sure yet</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.service}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="q-details">Project details</Label>
                  <Textarea
                    id="q-details"
                    name="details"
                    rows={5}
                    className="mt-2"
                    placeholder="Scope, timeline, environment, compliance requirements, headcount needed…"
                  />
                  {errors.details && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.details}</p>
                  )}
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-7 w-full bg-brand text-brand-foreground hover:bg-brand/90">
                Request my quote
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
