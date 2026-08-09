import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Github } from "lucide-react";
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
      { to: "/industries", label: "Technology" },
      { to: "/industries", label: "Manufacturing" },
    ],
  },
] as const;


const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X" },
  { icon: Github, label: "GitHub" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(50%_60%_at_8%_0%,rgba(16,102,242,0.35),transparent_62%),radial-gradient(45%_60%_at_92%_100%,rgba(108,99,255,0.3),transparent_62%)]" />
      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="text-white [&_span:last-child]:text-white/90" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Technology, Infrastructure & Talent for Mission-Critical Organizations.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary" /> {company.phone}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  704 Fox Squirrel CT
                  <br />
                  Arlington, TX 76005
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <span
                  key={s.label}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/12 bg-white/5 text-white/70"
                >
                  <s.icon className="h-4 w-4" />
                </span>
              ))}
            </div>
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
                      className="text-sm text-white/65 transition-colors hover:text-white"
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
              className="inline-flex items-center gap-1.5 font-medium text-white/75 transition-colors hover:text-white"
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
