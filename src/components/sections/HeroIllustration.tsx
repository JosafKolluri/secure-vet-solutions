import { motion } from "motion/react";
import { Cloud, ShieldCheck, Cpu, Server, Globe, Landmark, Network } from "lucide-react";

/**
 * Animated hero illustration: an Azure cloud + cybersecurity shield core,
 * orbiting technology nodes, government building, digital globe and
 * animated network connections. Pure SVG + Motion, no external assets.
 */
export function HeroIllustration() {
  const nodes = [
    { icon: Cloud, angle: -90, label: "Azure Cloud" },
    { icon: Cpu, angle: -30, label: "AI Data" },
    { icon: Server, angle: 30, label: "Infrastructure" },
    { icon: Globe, angle: 90, label: "Digital Globe" },
    { icon: Landmark, angle: 150, label: "Government" },
    { icon: Network, angle: 210, label: "Network" },
  ];
  const radius = 140;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
      {/* Glow */}
      <div className="absolute inset-8 rounded-full bg-accent/25 blur-[80px]" />

      {/* Orbit rings */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-6 rounded-full border border-white/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-16 rounded-full border border-dashed border-accent/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Connection lines */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = 200 + radius * Math.cos(rad);
          const y = 200 + radius * Math.sin(rad);
          return (
            <motion.line
              key={i}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.16 250)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.72 0.13 200)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center core: shield */}
      <motion.div
        className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-gradient-accent text-accent-foreground shadow-glow"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.2 }}
      >
        <ShieldCheck className="h-12 w-12" />
        <motion.span
          className="absolute inset-0 rounded-3xl ring-2 ring-white/40"
          animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.25, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Orbiting nodes */}
      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const x = 50 + (radius / 4) * Math.cos(rad);
        const y = 50 + (radius / 4) * Math.sin(rad);
        return (
          <motion.div
            key={i}
            className="absolute grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 0.5 + i * 0.12 },
              scale: { duration: 0.4, delay: 0.5 + i * 0.12 },
              y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
            }}
            aria-label={n.label}
          >
            <n.icon className="h-6 w-6" />
          </motion.div>
        );
      })}
    </div>
  );
}
