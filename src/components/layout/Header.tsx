import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company } from "@/data/site";

type NavItemDef = {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
};

const nav: NavItemDef[] = [
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services", label: "All Services" },
      { to: "/it-services", label: "IT Services" },
      { to: "/non-it-services", label: "Non-IT Services" },
      { to: "/infrastructure-services", label: "Infrastructure Services" },
      { to: "/healthcare-services", label: "Healthcare Services" },
    ],
  },
  { to: "/who-we-serve", label: "Who We Serve" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="5" fill="#0e141b" />
      <path
        d="M11 22.5c0-4.7 3.8-8.5 8.5-8.5 3.1 0 5.9 1.7 7.3 4.2 1-.4 2-.6 3.1-.6 4 0 7.2 3.2 7.2 7.1S33.9 32 29.9 32H13.8C10.6 32 8 29.4 8 26.3c0-2.1 1.1-4 2.8-5.1"
        fill="none"
        stroke="#1ec8b8"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path d="M16 23h10" stroke="#1ec8b8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${company.name} home`}
    >
      <Mark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span
        className={cn(
          "font-display text-[1.02rem] font-semibold leading-[1.05] tracking-tight",
          inverted ? "text-white" : "text-foreground",
        )}
      >
        CyberCloud
        <span
          className={cn(
            "mt-0.5 block text-[0.62rem] font-medium uppercase tracking-[0.22em]",
            inverted ? "text-brand" : "text-teal",
          )}
        >
          Infra LLC
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSub(null);
  }, [pathname]);

  const onHome = pathname === "/";
  const overlay = onHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        overlay
          ? "border-transparent bg-transparent"
          : "border-border bg-background/95 shadow-soft backdrop-blur-xl",
      )}
    >
      <div className="hidden border-b border-border/70 bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex h-9 max-w-[1200px] items-center justify-between gap-4 px-5 text-[11px] font-medium tracking-wide sm:px-6 lg:px-8">
          <p className="uppercase tracking-[0.16em] text-brand">
            Service-Disabled Veteran-Owned Small Business
          </p>
          <div className="flex items-center gap-5 text-white/70">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-brand" />
              {company.email}
            </a>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-6 lg:h-[72px] lg:px-8">
        <Logo inverted={overlay} />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 text-[13px] font-medium tracking-wide transition-colors",
                    overlay
                      ? active
                        ? "text-brand"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-teal"
                        : "text-foreground/75 hover:bg-accent hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            }
            const open = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenMenu(open ? null : item.label)}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-[13px] font-medium tracking-wide transition-colors",
                    overlay
                      ? active
                        ? "text-brand"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-teal"
                        : "text-foreground/75 hover:bg-accent hover:text-foreground",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full w-64 pt-3"
                    >
                      <div className="overflow-hidden rounded-lg border border-border bg-card p-1.5 shadow-lift">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-10 rounded-sm bg-brand px-4 text-[13px] font-semibold text-brand-foreground hover:bg-brand/90 sm:inline-flex"
          >
            <Link to="/get-quote">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-md border lg:hidden",
              overlay
                ? "border-white/20 bg-white/10 text-white"
                : "border-border bg-card text-foreground",
            )}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="mx-auto max-w-[1200px] px-5 py-4" aria-label="Mobile">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-border/70 last:border-0">
                    <button
                      type="button"
                      onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                      aria-expanded={mobileSub === item.label}
                      className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileSub === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    {mobileSub === item.label && (
                      <div className="pb-3 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block py-2.5 text-sm text-muted-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block border-b border-border/70 py-3.5 text-base font-semibold text-foreground last:border-0"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Button
                asChild
                className="mt-5 h-12 w-full rounded-sm bg-brand text-base font-semibold text-brand-foreground"
              >
                <Link to="/get-quote">
                  Get a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
