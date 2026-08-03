import { Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, ArrowUp, Clock } from "lucide-react";
import { company, services } from "@/data/site";

const columns = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/industries", label: "Industries" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    heading: "Services",
    links: services.map((s) => ({ to: s.href, label: s.title })),
  },
  {
    heading: "Resources",
    links: [
      { to: "/blog", label: "Insights & Blog" },
      { to: "/contact", label: "Contact" },
      { to: "/get-quote", label: "Get a Quote" },
    ],
  },
] as const;

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(50%_60%_at_10%_0%,rgba(59,130,246,0.4),transparent_60%),radial-gradient(40%_60%_at_90%_100%,rgba(235,125,52,0.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold leading-none text-white">
                CyberCloud<span className="text-brand"> Infra LLC</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {company.shortDescription}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand" /> {company.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-brand" /> {company.hours}
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/65 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved. Service-Disabled
            Veteran-Owned Small Business.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-1.5 font-medium text-white/75 transition-colors hover:text-brand"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
