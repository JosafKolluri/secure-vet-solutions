import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerNav = [
  {
    heading: "Quick Links",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/capabilities", label: "Capabilities" },
      { to: "/certifications", label: "Certifications" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { to: "/capabilities", label: "Cloud Solutions" },
      { to: "/capabilities", label: "Cybersecurity" },
      { to: "/capabilities", label: "Managed IT" },
      { to: "/industries", label: "Industries" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
      { to: "/capabilities", label: "Capability Statement" },
    ],
  },
] as const;

const socials: { icon: typeof Linkedin; label: string; href: string }[] = [
  // Add real profile URLs before re-enabling social links.
];

export function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-navy">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">
                CyberCloud<span className="text-gold">Infra</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
              A Service-Disabled Veteran-Owned Small Business delivering secure cloud,
              cybersecurity, and infrastructure solutions for government and enterprise.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-navy-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" /> contracts@cybercloudinfra.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" /> [INSERT REAL NUMBER]
              </li>
            </ul>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-navy-foreground/80 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-foreground/90">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.to}-${i}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-navy-foreground/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h3 className="font-display text-lg font-bold text-white">Stay Mission-Ready</h3>
            <p className="mt-1 text-sm text-navy-foreground/70">
              Get insights on government IT, cloud, and cybersecurity in your inbox.
            </p>
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@agency.gov"
              className="border-white/20 bg-white/10 text-white placeholder:text-navy-foreground/50"
            />
            <Button type="submit" variant="hero" aria-label="Subscribe" className="bg-gold text-navy hover:bg-gold/90">
              <Send className="h-4 w-4" /> Subscribe
            </Button>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-navy-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} CyberCloudInfra LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/" className="transition-colors hover:text-gold">Privacy Policy</Link>
            <Link to="/" className="transition-colors hover:text-gold">Accessibility</Link>
            <Link to="/" className="transition-colors hover:text-gold">Terms</Link>
            <Link to="/capabilities" className="transition-colors hover:text-gold">Capability Statement</Link>
            <button
              onClick={scrollTop}
              className="inline-flex items-center gap-1 font-medium text-navy-foreground/80 transition-colors hover:text-gold"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
