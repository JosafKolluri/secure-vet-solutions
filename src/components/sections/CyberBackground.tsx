import { motion } from "motion/react";

/** Animated cyber grid + glowing particle field for dark hero/section backgrounds. */
export function CyberBackground({ dense = false }: { dense?: boolean }) {
  const particles = Array.from({ length: dense ? 22 : 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-60 [mask-image:radial-gradient(80%_80%_at_50%_30%,black,transparent)]" />
      <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/15 blur-[120px]" />
      {particles.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const size = 2 + (i % 3);
        const duration = 6 + (i % 5) * 1.5;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-accent/70 shadow-glow"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        );
      })}
    </div>
  );
}
