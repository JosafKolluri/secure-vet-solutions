import { Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

const footerNav = [
  {
    heading: "Company",
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

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-accent text-accent-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">
                CyberCloud<span className="text-gradient">Infra</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
              A Service-Disabled Veteran-Owned Small Business delivering secure cloud,
              cybersecurity, and infrastructure solutions for government and enterprise.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-navy-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent" /> 1750 Tysons Blvd, Suite 1500, McLean, VA 22102
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" /> contracts@cybercloudinfra.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" /> (703) 555-0142
              </li>
            </ul>
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
                      className="text-sm text-navy-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-navy-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} CyberCloudInfra LLC. All rights reserved.</p>
          <p>SDVOSB • SAM Registered • CAGE Code on file</p>
        </div>
      </div>
    </footer>
  );
}
