import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Search, ShieldCheck, ChevronDown } from "lucide-react";
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
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-card backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span
            className={cn(
              "grid h-9 w-9 place-items-center rounded-lg bg-gradient-accent text-accent-foreground shadow-glow",
            )}
          >
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight",
              scrolled || pathname !== "/" ? "text-foreground" : "text-white",
            )}
          >
            CyberCloud<span className="text-gradient">Infra</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
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
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    scrolled || pathname !== "/"
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-white/85 hover:text-white",
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {megaOpen && (
                  <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3">
                    <div className="grid grid-cols-2 gap-1 rounded-xl border bg-popover p-3 shadow-elegant">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to="/capabilities"
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                            <s.icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold">{s.title}</span>
                            <span className="block truncate text-xs text-muted-foreground">
                              {s.description}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled || pathname !== "/"
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/85 hover:text-white",
                )}
                activeProps={{ className: "text-gradient font-semibold" }}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search the site"
            onClick={() => setSearchOpen(true)}
            className={cn(
              scrolled || pathname !== "/"
                ? "text-foreground"
                : "text-white hover:bg-white/10 hover:text-white",
            )}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "lg:hidden",
              scrolled || pathname !== "/"
                ? "text-foreground"
                : "text-white hover:bg-white/10 hover:text-white",
            )}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-foreground font-semibold" }}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      )}

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
