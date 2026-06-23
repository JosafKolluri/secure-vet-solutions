import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/sections/Primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobs, benefits } from "@/data/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | CyberCloudInfra — Join a Veteran-Led Team" },
      {
        name: "description",
        content:
          "Explore open positions and benefits at CyberCloudInfra. Join a veteran-led team building secure technology for government and enterprise.",
      },
      { property: "og:title", content: "Careers | CyberCloudInfra" },
      { property: "og:description", content: "Open positions and benefits at CyberCloudInfra." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const applySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  position: z.string().trim().min(1, "Please select a position"),
  message: z.string().trim().max(1000).optional(),
});

function Careers() {
  const [position, setPosition] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const result = applySchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      position,
      message: data.get("message"),
    });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Application received! Our team will be in touch shortly.");
    form.reset();
    setPosition("");
  }

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Mission With Us"
        description="We're looking for mission-driven professionals who want to make an impact on the work that matters most."
      />

      {/* Open positions */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Open Positions"
              title="Current Openings"
            />
          </Reveal>
          <div className="mt-12 grid gap-5">
            {jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.05}>
                <div className="flex flex-col gap-4 rounded-2xl border bg-card p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {job.department}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{job.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="shrink-0"
                    onClick={() => {
                      setPosition(job.title);
                      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-subtle py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Benefits" title="Why You'll Love Working Here" />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={(i % 2) * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border bg-card px-5 py-4 shadow-card">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Apply Now" title="Submit Your Application" />
            <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-3xl border bg-card p-8 shadow-card">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Jane Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="jane@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Select value={position} onValueChange={setPosition}>
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobs.map((j) => (
                      <SelectItem key={j.id} value={j.title}>
                        {j.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Cover Note (optional)</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Tell us about yourself..." />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
