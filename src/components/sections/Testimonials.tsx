import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const current = testimonials[index];

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <div className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-8 shadow-elegant backdrop-blur-xl sm:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <Quote className="h-12 w-12 text-accent/30" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-4"
          >
            <div className="flex gap-1" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-4 text-lg font-medium leading-relaxed text-foreground sm:text-xl">
              "{current.quote}"
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent font-display text-xs font-bold text-accent-foreground">
                {current.company.slice(0, 3)}
              </span>
              <span>
                <p className="font-semibold text-foreground">{current.name}</p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" aria-label="Previous testimonial" onClick={prev}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" aria-label="Next testimonial" onClick={next}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
