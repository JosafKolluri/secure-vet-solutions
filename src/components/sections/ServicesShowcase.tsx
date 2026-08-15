import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/sections/Primitives";
import { pillars, type Pillar } from "@/data/site";
import itImage from "@/assets/dashboard-laptop.jpg";
import nonItImage from "@/assets/hero-team.jpg";
import infraImage from "@/assets/infrastructure-datacenter.jpg";
import healthcareImage from "@/assets/healthcare-staff.jpg";
import { cn } from "@/lib/utils";

const images: Record<string, string> = {
  "it-services": itImage,
  "non-it-services": nonItImage,
  "infrastructure-services": infraImage,
  "healthcare-services": healthcareImage,
};

export function ServicesShowcase({ heading = true }: { heading?: boolean }) {
  const [activeSlug, setActiveSlug] = useState(pillars[0].slug);
  const active = pillars.find((p) => p.slug === activeSlug) ?? pillars[0];
  const tabId = useId();

  return (
    <div>
      {heading && (
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Services"
            title="Pick a lane. See the work."
            description="Four pillars, one delivery lead. Select a lane to preview offerings — then open the catalog or request a quote."
          />
        </Reveal>
      )}

      <div className={cn(heading && "mt-12 lg:mt-16")}>
        <div
          role="tablist"
          aria-label="Service pillars"
          className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden"
        >
          {pillars.map((pillar) => (
            <TabButton
              key={pillar.slug}
              id={`${tabId}-${pillar.slug}`}
              panelId={`${tabId}-panel`}
              pillar={pillar}
              selected={pillar.slug === activeSlug}
              compact
              onSelect={() => setActiveSlug(pillar.slug)}
            />
          ))}
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[280px_1fr]">
          <div
            role="tablist"
            aria-label="Service pillars"
            className="hidden flex-col border-b border-border lg:flex lg:border-b-0 lg:border-r"
          >
            {pillars.map((pillar) => (
              <TabButton
                key={pillar.slug}
                id={`${tabId}-desk-${pillar.slug}`}
                panelId={`${tabId}-panel`}
                pillar={pillar}
                selected={pillar.slug === activeSlug}
                onSelect={() => setActiveSlug(pillar.slug)}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              role="tabpanel"
              id={`${tabId}-panel`}
              aria-labelledby={`${tabId}-desk-${active.slug} ${tabId}-${active.slug}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative min-h-[220px] lg:min-h-[420px]">
                <img
                  src={images[active.slug]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340] via-[#0c2340]/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    {active.number} · {active.services.length} offerings
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-[1.85rem]">
                    {active.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                    {active.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                <p className="text-[0.975rem] leading-[1.75] text-muted-foreground">
                  {active.summary}
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {active.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="flex min-h-12 items-center rounded-lg border border-border px-3.5 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:border-primary/35 hover:bg-muted hover:text-primary"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    className="h-12 rounded-md bg-brand px-6 font-semibold text-brand-foreground hover:bg-brand/90"
                  >
                    <Link to="/get-quote">
                      Get a quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Link
                    to={active.href}
                    className="inline-flex min-h-12 items-center justify-center gap-2 px-1 text-sm font-semibold text-primary"
                  >
                    Open {active.title} catalog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  id,
  panelId,
  pillar,
  selected,
  compact,
  onSelect,
}: {
  id: string;
  panelId: string;
  pillar: Pillar;
  selected: boolean;
  compact?: boolean;
  onSelect: () => void;
}) {
  const Icon = pillar.icon;
  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={selected}
      aria-controls={panelId}
      onClick={onSelect}
      className={cn(
        "text-left transition-colors",
        compact
          ? cn(
              "min-h-12 shrink-0 rounded-lg border px-4 py-2.5",
              selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground",
            )
          : cn(
              "flex min-h-[4.75rem] items-center gap-3 border-b border-border px-5 py-4 last:border-b-0",
              selected ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted",
            ),
      )}
    >
      {!compact && (
        <span
          className={cn(
            "grid h-10 w-10 shrink-0 place-items-center rounded-lg",
            selected ? "bg-brand text-brand-foreground" : "bg-muted text-primary",
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      )}
      <span className="min-w-0">
        <span
          className={cn(
            "block text-[11px] font-semibold uppercase tracking-[0.14em]",
            compact
              ? selected
                ? "text-brand"
                : "text-teal"
              : selected
                ? "text-brand"
                : "text-teal",
          )}
        >
          {pillar.number}
        </span>
        <span
          className={cn(
            "mt-0.5 block text-sm font-semibold leading-snug",
            compact && "whitespace-nowrap",
          )}
        >
          {compact ? pillar.title.replace(" Services", "") : pillar.title}
        </span>
      </span>
    </button>
  );
}
