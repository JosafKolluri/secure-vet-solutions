import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero, Reveal } from "@/components/sections/Primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | CyberCloudInfra — Get in Touch" },
      {
        name: "description",
        content:
          "Contact CyberCloudInfra for cloud, cybersecurity, and IT infrastructure solutions. Office in McLean, VA. Call (703) 555-0142.",
      },
      { property: "og:title", content: "Contact CyberCloudInfra" },
      { property: "og:description", content: "Get in touch with our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const details = [
  { icon: MapPin, label: "Office", value: "1750 Tysons Blvd, Suite 1500, McLean, VA 22102" },
  { icon: Mail, label: "Email", value: "contracts@cybercloudinfra.com", href: "mailto:contracts@cybercloudinfra.com" },
  { icon: Phone, label: "Phone", value: "(703) 555-0142", href: "tel:+17035550142" },
];

function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const result = contactSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      company: data.get("company"),
      message: data.get("message"),
    });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Thank you! Your message has been sent. We'll respond within one business day.");
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Mission"
        description="Whether you have a contract opportunity or a technical challenge, our team is ready to help."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="mt-3 text-muted-foreground">
                  Reach out and a member of our team will respond within one business day.
                </p>
              </div>
              <ul className="space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a href={d.href} className="text-foreground hover:text-accent">
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="overflow-hidden rounded-2xl border shadow-card">
                <iframe
                  title="CyberCloudInfra office location map"
                  src="https://www.google.com/maps?q=Tysons+Corner,+McLean,+VA&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block border-0"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border bg-card p-8 shadow-card">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Organization" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} placeholder="How can we help?" required />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
