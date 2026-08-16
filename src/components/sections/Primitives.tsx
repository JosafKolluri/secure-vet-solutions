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
        "inline-flex items-center gap-2 rounded-sm px-0 text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "primary" && "text-teal",
        tone === "brand" && "text-brand",
        tone === "light" && "text-brand",
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" || tone === "brand" ? "bg-brand" : "bg-teal",
        )}
      />
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
          "mt-4 text-[1.75rem] font-bold leading-[1.2] sm:text-[2.15rem] lg:text-[2.35rem]",
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
    <section className="relative overflow-hidden bg-gradient-hero pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 plus-pattern" />
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(60%_70%_at_85%_0%,rgba(14,116,144,0.35),transparent_65%),radial-gradient(45%_60%_at_5%_100%,rgba(255,184,28,0.12),transparent_70%)]" />
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
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mt-8 text-sm text-white/60">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span className="px-2">/</span>
              <span className="text-white">{breadcrumb}</span>
            </nav>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Ready to strengthen your technology and your team?",
  description = "Talk with our team about your program goals. We will come back with a clear scope, timeline, and staffing plan.",
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
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-navy px-6 py-16 text-center sm:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 plus-pattern opacity-80" />
        <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(50%_80%_at_20%_0%,rgba(14,116,144,0.4),transparent_60%),radial-gradient(50%_80%_at_85%_100%,rgba(255,184,28,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-[1.85rem] font-bold text-white sm:text-[2.25rem]">{title}</h2>
          <p className="mt-5 text-base leading-[1.75] text-white/75">{description}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-brand font-semibold text-brand-foreground hover:bg-brand/90"
            >
              <Link to={primaryTo}>
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <Link to={secondaryTo}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
