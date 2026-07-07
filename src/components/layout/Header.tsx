import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  X,
  Search,
  ShieldCheck,
  ChevronDown,
  Phone,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/certifications", label: "Certifications" },
  { to: "/industries", label: "Industries" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const searchItems = [
  ...navLinks.map((n) => ({ to: n.to, label: n.label })),
  ...services.map((s) => ({ to: "/capabilities", label: s.title })),
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCapsOpen, setMobileCapsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileCapsOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onHome = pathname === "/";
  const solid = scrolled || !onHome;
  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Trust / utility strip */}
      <div
        className={cn(
          "hidden border-b border-white/10 bg-navy text-navy-foreground transition-[max-height,opacity] duration-300 md:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-semibold uppercase tracking-[0.14em] text-navy-foreground/90">
              Certified SDVOSB
            </span>
            <span className="text-navy-foreground/40">•</span>
            <span className="text-navy-foreground/70">
              Veteran-Owned Government Contractor
            </span>
          </div>
          <div className="flex items-center gap-5 text-navy-foreground/70">
            <span className="hidden lg:inline">CAGE: 9K3W4</span>
            <span className="hidden lg:inline">UEI: CL49NFRAQC9N</span>
            <a
              href="tel:+18002923700"
              className="flex items-center gap-1.5 font-medium text-navy-foreground transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" />
              (800) 292-3700
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-300",
          solid
            ? "bg-background/90 shadow-card backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-accent text-accent-foreground shadow-glow">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span
              className={cn(
                "font-display text-lg font-bold leading-none tracking-tight",
                solid ? "text-foreground" : "text-white",
              )}
            >
              CyberCloudInfra<span className="text-gradient">LLC</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.label === "Capabilities" ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    to={link.to}
                    className={cn(
                      "relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      solid
                        ? "text-foreground/75 hover:text-foreground"
                        : "text-white/85 hover:text-white",
                      isActive(link.to) && (solid ? "text-foreground" : "text-white"),
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        megaOpen && "rotate-180",
                      )}
                    />
                    {isActive(link.to) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-accent"
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 top-full w-[44rem] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border bg-popover shadow-elegant">
                          <div className="grid grid-cols-2 gap-1 p-3">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                to="/capabilities"
                                className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                              >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-accent transition-colors group-hover:bg-gradient-accent group-hover:text-accent-foreground">
                                  <s.icon className="h-5 w-5" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-foreground">
                                    {s.title}
                                  </span>
                                  <span className="line-clamp-2 block text-xs leading-relaxed text-muted-foreground">
                                    {s.description}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                          <Link
                            to="/capabilities"
                            className="flex items-center justify-between gap-2 border-t bg-secondary/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                          >
                            Explore all capabilities
                            <ArrowRight className="h-4 w-4 text-accent" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    solid
                      ? "text-foreground/75 hover:text-foreground"
                      : "text-white/85 hover:text-white",
                    isActive(link.to) && (solid ? "text-foreground" : "text-white"),
                  )}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-accent"
                    />
                  )}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search the site"
              onClick={() => setSearchOpen(true)}
              className={cn(
                solid
                  ? "text-foreground"
                  : "text-white hover:bg-white/10 hover:text-white",
              )}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              asChild
              variant="hero"
              size="lg"
              className="hidden sm:inline-flex"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={cn(
                "lg:hidden",
                solid
                  ? "text-foreground"
                  : "text-white hover:bg-white/10 hover:text-white",
              )}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background lg:hidden"
          >
            <div className="bg-navy px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground/90">
              Certified SDVOSB · Veteran-Owned
            </div>
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5">
              {navLinks.map((link) =>
                link.label === "Capabilities" ? (
                  <div key={link.to} className="rounded-lg">
                    <button
                      onClick={() => setMobileCapsOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-semibold text-foreground"
                    >
                      Capabilities
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform",
                          mobileCapsOpen && "rotate-180 text-accent",
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileCapsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-2 px-2 pb-3 pt-1">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                to="/capabilities"
                                className="flex items-start gap-3 rounded-xl border bg-secondary/40 p-3"
                              >
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-background text-accent shadow-sm">
                                  <s.icon className="h-5 w-5" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-foreground">
                                    {s.title}
                                  </span>
                                  <span className="line-clamp-1 block text-xs text-muted-foreground">
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
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    className="flex items-center justify-between rounded-md px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-secondary"
                    activeProps={{
                      className:
                        "bg-secondary text-foreground border-l-2 border-accent",
                    }}
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <Button asChild variant="hero" size="lg" className="mt-3">
                <Link to="/contact">Get in Touch</Link>
              </Button>

              <a
                href="tel:+18002923700"
                className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4 text-accent" />
                (800) 292-3700
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search pages and services..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {searchItems.map((item, i) => (
              <CommandItem
                key={`${item.to}-${i}`}
                value={item.label}
                onSelect={() => {
                  setSearchOpen(false);
                  window.location.href = item.to;
                }}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
