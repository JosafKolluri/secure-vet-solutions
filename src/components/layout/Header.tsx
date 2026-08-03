import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company, services } from "@/data/site";

const mainNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }, [pathname]);

  const isServiceRoute = services.some((s) => pathname.startsWith(s.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy text-navy-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/75">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            Service-Disabled Veteran-Owned Small Business
          </div>
          <div className="flex items-center gap-6 text-white/75">
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Mail className="h-3.5 w-3.5" /> {company.email}
            </a>
            <a href="tel:" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "glass shadow-soft" : "bg-background/95 backdrop-blur",
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label={`${company.name} home`}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold leading-none tracking-tight text-foreground">
              CyberCloud<span className="text-primary"> Infra LLC</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {mainNav.slice(0, 2).map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} active={pathname === item.to} />
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  isServiceRoute ? "text-primary" : "text-foreground hover:text-primary",
                )}
              >
                Services
                <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
                  >
                    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-popover p-3 shadow-card">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={s.href}
                          className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                            <s.icon className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                              {s.title}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                              {s.description}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainNav.slice(2).map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} active={pathname === item.to} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden bg-brand text-brand-foreground hover:bg-brand/90 sm:inline-flex">
              <Link to="/get-quote">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground xl:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <nav className="mx-auto max-w-7xl space-y-1 px-4 py-5 sm:px-6" aria-label="Mobile">
              {mainNav.slice(0, 2).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setMobileServices((v) => !v)}
                aria-expanded={mobileServices}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
              >
                Services
                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServices && "rotate-180")} />
              </button>
              {mobileServices &&
                services.map((s) => (
                  <Link
                    key={s.slug}
                    to={s.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 pl-6 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                  >
                    <s.icon className="h-4 w-4 text-primary" />
                    {s.title}
                  </Link>
                ))}
              {mainNav.slice(2).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-3 w-full bg-brand text-brand-foreground hover:bg-brand/90">
                <Link to="/get-quote">Get a Quote</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
        active ? "text-primary" : "text-foreground hover:text-primary",
      )}
    >
      {label}
      {active && <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand" />}
    </Link>
  );
}
