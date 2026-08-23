import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HudCorners({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-3 sm:inset-4", className)} aria-hidden>
      <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-brand" />
      <span className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-brand" />
      <span className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-brand" />
      <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-brand" />
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: "primary" | "brand" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em]",
        tone === "primary" && "text-teal",
        tone === "brand" && "text-teal",
        tone === "light" && "text-brand",
      )}
    >
      <span className={cn("h-px w-6", tone === "light" ? "bg-brand" : "bg-teal")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "primary",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "primary" | "brand" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 text-[1.75rem] font-semibold leading-[1.2] sm:text-[2.15rem] lg:text-[2.35rem]",
          tone === "light" ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-[1.75] sm:text-[1.0625rem]",
            align === "center" && "mx-auto",
            tone === "light" ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 lg:pt-44 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute inset-0 scanlines" />
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(50%_60%_at_90%_0%,rgba(30,200,184,0.16),transparent_62%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mt-8 text-sm text-white/55">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span className="px-2 text-brand/70">/</span>
              <span className="text-white">{breadcrumb}</span>
            </nav>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Ready to scope IT, infrastructure, or healthcare support?",
  description = "Tell us the program. We will return a clear scope, timeline, and staffing plan — no generic brochure.",
  primaryLabel = "Get a Free Quote",
  primaryTo = "/get-quote",
  secondaryLabel = "Contact Us",
  secondaryTo = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg bg-navy px-6 py-16 text-center sm:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 grid-pattern" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand/50" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-[1.85rem] font-semibold text-white sm:text-[2.25rem]">{title}</h2>
          <p className="mt-5 text-base leading-[1.75] text-white/70">{description}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-sm bg-brand font-semibold text-brand-foreground hover:bg-brand/90"
            >
              <Link to={primaryTo}>
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-sm border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link to={secondaryTo}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
