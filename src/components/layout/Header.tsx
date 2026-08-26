import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight, Cloud } from "lucide-react";
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

export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${company.name} home`}
    >
      <span
        className={cn(
          "corner-notch-sm grid h-10 w-10 shrink-0 place-items-center text-primary-foreground shadow-soft",
          inverted ? "bg-gradient-brand text-navy" : "bg-gradient-primary",
        )}
      >
        <Cloud className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "font-display text-[1.05rem] font-extrabold leading-[1.1] tracking-tight",
          inverted && "text-white",
        )}
      >
        CyberCloud
        <span
          className={cn(
            "block text-[0.72rem] font-semibold uppercase tracking-[0.2em]",
            inverted ? "text-brand" : "text-primary",
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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSub(null);
  }, [pathname]);

  const isHome = pathname === "/";
  const solid = scrolled || mobileOpen || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border bg-background/90 shadow-soft backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-6 lg:h-[78px] lg:px-8">
        <Logo inverted={!solid} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    !solid
                      ? active
                        ? "text-brand"
                        : "text-white/85 hover:text-white"
                      : active
                        ? "text-primary"
                        : "text-foreground/80 hover:bg-accent hover:text-primary",
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
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    !solid
                      ? active
                        ? "text-brand"
                        : "text-white/85 hover:text-white"
                      : active
                        ? "text-primary"
                        : "text-foreground/80 hover:bg-accent hover:text-primary",
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
                      <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-lift">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
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
            className="hidden h-11 rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-md hover:bg-brand/90 lg:inline-flex"
          >
            <a href="/capability-statement.pdf" target="_blank" rel="noopener noreferrer">
              Request Capability Statement <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl border lg:hidden",
              solid
                ? "border-border bg-card text-foreground"
                : "border-white/20 bg-white/10 text-white",
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
                className="mt-5 h-12 w-full rounded-md bg-brand text-base font-semibold text-brand-foreground"
              >
                <a href="/capability-statement.pdf" target="_blank" rel="noopener noreferrer">
                  Request Capability Statement <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
