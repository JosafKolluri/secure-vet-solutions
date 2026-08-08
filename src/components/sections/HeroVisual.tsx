import { motion } from "motion/react";
import { Cloud, Server, Shield, Database, Network, Cpu, Users } from "lucide-react";

const orbit = [
  { icon: Server, label: "Servers", x: "6%", y: "12%" },
  { icon: Shield, label: "Security", x: "78%", y: "6%" },
  { icon: Database, label: "Data", x: "0%", y: "62%" },
  { icon: Network, label: "Network", x: "84%", y: "58%" },
  { icon: Cpu, label: "AI", x: "44%", y: "0%" },
  { icon: Users, label: "Talent", x: "40%", y: "86%" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* radial mesh backdrop */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-primary opacity-[0.12] blur-2xl" />
      <div className="pointer-events-none absolute inset-8 rounded-full border border-primary/15" />
      <div className="pointer-events-none absolute inset-20 rounded-full border border-primary/10" />
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-60 [mask-image:radial-gradient(closest-side,black,transparent)]" />

      {/* connecting lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {[
          [12, 20],
          [84, 14],
          [8, 68],
          [90, 64],
          [50, 8],
          [46, 90],
        ].map(([x, y], i) => (
          <motion.line
            key={i}
            x1="50"
            y1="50"
            x2={x}
            y2={y}
            stroke="url(#hg)"
            strokeWidth="0.4"
            strokeDasharray="2 2"
            initial={{ opacity: 0.25 }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 5, delay: i * 0.6, repeat: Infinity }}
          />
        ))}
        <defs>
          <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1066F2" />
            <stop offset="100%" stopColor="#6C63FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* center cloud */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] bg-gradient-primary text-primary-foreground shadow-glow sm:h-40 sm:w-40"
      >
        <Cloud className="h-14 w-14 sm:h-16 sm:w-16" strokeWidth={1.4} />
      </motion.div>

      {/* orbiting nodes */}
      {orbit.map((node, i) => (
        <motion.div
          key={node.label}
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          className="absolute grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card text-primary shadow-card"
          aria-hidden="true"
        >
          <node.icon className="h-6 w-6" strokeWidth={1.6} />
        </motion.div>
      ))}

      {/* floating cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-2 top-[34%] rounded-2xl border border-border bg-card px-4 py-3 shadow-lift"
      >
        <p className="text-xs font-semibold text-foreground">Cloud Infrastructure</p>
        <p className="text-[11px] text-muted-foreground">Azure-first architecture</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 bottom-[26%] rounded-2xl border border-border bg-card px-4 py-3 shadow-lift"
      >
        <p className="text-xs font-semibold text-foreground">Enterprise Security</p>
        <p className="text-[11px] text-muted-foreground">Zero-trust by default</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift"
      >
        <p className="text-xs font-semibold text-foreground">99.9% Reliability</p>
      </motion.div>
    </div>
  );
}
