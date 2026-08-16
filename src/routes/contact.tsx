import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/sections/Primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company } from "@/data/site";
import { pageHead } from "@/lib/seo";
import contactOffice from "@/assets/contact-office.jpg";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(1500),
});

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact CyberCloud Infra LLC | Arlington, TX SDVOSB",
      description:
        "Contact CyberCloud Infra LLC in Arlington, TX to discuss IT, non-IT, infrastructure, or healthcare services for government and enterprise programs.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    e.currentTarget.reset();
    toast.success("Thanks — your message is ready to send", {
      description: `Our team will follow up at ${parsed.data.email}.`,
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with CyberCloud Infra LLC"
        description="Reach our Arlington, TX team about IT, non-IT, infrastructure, or healthcare support. We reply with a real person and a clear next step."
        breadcrumb="Contact"
      />

      <section className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <img
              src={contactOffice}
              alt="Professional office interior for CyberCloud Infra LLC in Arlington, Texas"
              className="mb-8 w-full rounded-3xl object-cover shadow-card"
              width={1536}
              height={1024}
            />
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title="Arlington, TX office and nationwide delivery"
              description="Email the team or send the form. We route every inquiry to the right practice lead."
            />
            <ul className="mt-9 space-y-4">
              {[
                { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
                { icon: Phone, label: "Phone", value: company.phone },
                {
                  icon: MapPin,
                  label: "Office Address",
                  value: `${company.address.line1}, ${company.address.line2}, ${company.address.country}`,
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block font-semibold text-foreground hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <span className="mt-1 block font-semibold text-foreground">{item.value}</span>
                    )}
                  </span>
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
              <h2 className="text-2xl">Send us a message</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" className="mt-2" placeholder="Jane Doe" />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" name="email" type="email" className="mt-2" placeholder="jane@agency.gov" />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="company">Organization</Label>
                  <Input id="company" name="company" className="mt-2" placeholder="Agency or company" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2"
                    placeholder="Share your goals, timeline, and any compliance requirements."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-7 w-full bg-brand text-brand-foreground hover:bg-brand/90">
                Send message
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
