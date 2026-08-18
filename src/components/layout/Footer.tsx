import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/data/site";
import { Logo } from "./Header";

const columns = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/who-we-serve", label: "Who We Serve" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/careers", label: "Careers" },
      { to: "/blog", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { to: "/services", label: "All Services" },
      { to: "/it-services", label: "IT Services" },
      { to: "/non-it-services", label: "Non-IT Services" },
      { to: "/infrastructure-services", label: "Infrastructure Services" },
      { to: "/healthcare-services", label: "Healthcare Services" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { to: "/industries", label: "Government" },
      { to: "/industries", label: "Healthcare" },
      { to: "/industries", label: "Financial Services" },
      { to: "/industries", label: "Education" },
      { to: "/industries", label: "Manufacturing" },
    ],
  },
] as const;

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand/40" />
      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo inverted className="text-white" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {company.tagline}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand" /> {company.phone}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  704 Fox Squirrel CT
                  <br />
                  Arlington, TX 76005
                </span>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} CyberCloud Infra LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
            <button
              onClick={scrollTop}
              className="inline-flex items-center gap-1.5 font-medium text-white/70 transition-colors hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
