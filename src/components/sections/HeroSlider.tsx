import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, ShieldCheck } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import socHero from "@/assets/soc-hero.jpg";
import infrastructureDatacenter from "@/assets/infrastructure-datacenter.jpg";
import nonItProfessionals from "@/assets/non-it-professionals.jpg";
import healthcareStaff from "@/assets/healthcare-staff.jpg";

interface Slide {
  id: string;
  label: string;
  dotLabel: string;
  image: string;
  imageAlt: string;
  /** Per-image scrim — bright photos need more darkening than already-dark ones. */
  scrim: string;
  lead: string;
  accent: string;
  tail: string;
  body: string;
  href: string;
  ctaLabel: string;
}

const slides: Slide[] = [
  {
    id: "cyber-ai",
    label: "01 / Cybersecurity + AI",
    dotLabel: "Cybersecurity + AI",
    image: socHero,
    scrim: "bg-navy/15",
    imageAlt:
      "Security analysts monitoring a global threat map in a cyber defense operations center",
    lead: "Cybersecurity hardened by",
    accent: "AI-assisted detection",
    tail: "",
    body: "Zero-trust architecture, continuous monitoring, and AI-assisted triage that shortens dwell time — scoped against the NIST 800-171 and CMMC 2.0 controls your program actually has to answer for.",
    href: "/it-services",
    ctaLabel: "Explore IT Services",
  },
  {
    id: "cloud-ai",
    label: "02 / Microsoft Azure + AI",
    dotLabel: "Azure Cloud + AI",
    image: infrastructureDatacenter,
    scrim: "bg-navy/25",
    imageAlt: "Infrastructure engineer working between server racks in a data center",
    lead: "Microsoft Azure landing zones,",
    accent: "AI-ready by design",
    tail: "",
    body: "Migration, identity, and day-2 operations on Azure — with governance, cost controls, and AI/ML workload readiness engineered in from the first wave, not retrofitted after go-live.",
    href: "/infrastructure-services",
    ctaLabel: "Explore Infrastructure Services",
  },
  {
    id: "non-it",
    label: "03 / Non-IT Professional Services",
    dotLabel: "Non-IT Services",
    image: nonItProfessionals,
    scrim: "bg-navy/60",
    imageAlt: "Administrative and professional staff working in a modern operations office",
    lead: "Professional staff,",
    accent: "ready at task-order award",
    tail: "",
    body: "Administrative, finance, HR, and program-support professionals screened for the actual work of the role — mobilized on the timeline your contract requires, not weeks after it.",
    href: "/non-it-services",
    ctaLabel: "Explore Non-IT Services",
  },
  {
    id: "healthcare",
    label: "04 / Healthcare Services",
    dotLabel: "Healthcare Services",
    image: healthcareStaff,
    scrim: "bg-navy/60",
    imageAlt: "Healthcare professionals collaborating in a hospital corridor",
    lead: "Credentialed clinical staffing that",
    accent: "holds coverage",
    tail: "",
    body: "Clinical and non-clinical staffing, healthcare IT, and medical operations support — with pre-verified licensure packets that put qualified candidates in front of hiring managers in days.",
    href: "/healthcare-services",
    ctaLabel: "Explore Healthcare Services",
  },
];

const AUTOPLAY_MS = 7000;

export function HeroSlider() {
  const reduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 28 });
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const hovering = useRef(false);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay — never runs under reduced motion, and pauses on hover/focus.
  useEffect(() => {
    if (!emblaApi || !playing || reduceMotion) return;
    const timer = window.setInterval(() => {
      if (!hovering.current) emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [emblaApi, playing, reduceMotion]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section
      className="relative overflow-hidden bg-navy"
      aria-roledescription="carousel"
      aria-label="CyberCloud Infra capabilities"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      onFocusCapture={() => (hovering.current = true)}
      onBlurCapture={() => (hovering.current = false)}
    >
      <h1 className="sr-only">
        CyberCloud Infra LLC — SDVOSB cybersecurity, Microsoft Azure cloud, healthcare staffing, and
        non-IT professional services
      </h1>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="relative min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${slide.dotLabel}`}
              aria-hidden={selected !== i}
            >
              <div className="relative min-h-[620px] pt-[112px] pb-24 sm:pt-[132px] lg:min-h-[680px] lg:pt-[148px]">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
                <div className={cn("pointer-events-none absolute inset-0", slide.scrim)} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/35" />
                <div className="pointer-events-none absolute inset-0 grid-line-texture opacity-25" />

                <div className="relative mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-gold-bright">
                      <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />
                      Service-Disabled Veteran-Owned Small Business
                    </span>

                    <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                      {slide.label}
                    </p>

                    <h2 className="mt-3 text-[2.05rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.85rem] lg:text-[3.25rem]">
                      {slide.lead} <span className="text-gold-bright">{slide.accent}</span>
                      {slide.tail}
                    </h2>

                    <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.7] text-white/80 sm:text-lg">
                      {slide.body}
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        className="h-12 min-w-[240px] rounded-md bg-brand px-8 text-base font-semibold text-brand-foreground shadow-[0_10px_30px_rgba(176,141,87,0.32)] hover:bg-brand/90"
                      >
                        <a
                          href="/capability-statement.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={selected === i ? undefined : -1}
                        >
                          Request Capability Statement <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="h-12 rounded-md border-white/30 bg-white/5 px-7 text-base font-medium text-white hover:bg-white/15 hover:text-white"
                      >
                        <Link to={slide.href} tabIndex={selected === i ? undefined : -1}>
                          {slide.ctaLabel}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-6 gap-y-4 px-5 pb-7 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/25 bg-white/5 text-white transition-colors hover:bg-white/15"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="grid h-11 w-11 place-items-center rounded-md border border-white/25 bg-white/5 text-white transition-colors hover:bg-white/15"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/25 bg-white/5 text-white transition-colors hover:bg-white/15"
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            )}
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {slides.map((slide, i) => (
              <li key={slide.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}: ${slide.dotLabel}`}
                  aria-current={selected === i}
                  className={cn(
                    "group flex items-center gap-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                    selected === i ? "text-gold-bright" : "text-white/45 hover:text-white/80",
                  )}
                >
                  <span
                    className={cn(
                      "h-[3px] w-8 rounded-full transition-colors",
                      selected === i ? "bg-gold-bright" : "bg-white/25 group-hover:bg-white/50",
                    )}
                  />
                  <span className="hidden sm:inline">{slide.dotLabel}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
