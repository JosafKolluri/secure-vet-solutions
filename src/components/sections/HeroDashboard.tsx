import { motion } from "motion/react";
import { Activity, ShieldCheck, Cloud, TrendingUp } from "lucide-react";

const bars = [42, 68, 55, 82, 60, 74, 48, 90];

/** Animated glassmorphism "live SOC dashboard" mockup for the hero right side. */
export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative"
    >
      <div className="animate-float rounded-3xl border border-border bg-navy p-5 shadow-elegant">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
              <Activity className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Threat Operations Center</p>
              <p className="text-[11px] text-muted-foreground">Live SIEM · Global</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-semibold text-success">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-success" /> Secure
          </span>
        </div>

        {/* metric tiles */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { icon: ShieldCheck, label: "Threats Blocked", value: "10.2M", tint: "text-accent" },
            { icon: TrendingUp, label: "Risk Score", value: "A+", tint: "text-success" },
            { icon: Cloud, label: "Cloud Monitors", value: "1,284", tint: "text-cyan" },
            { icon: Activity, label: "Detection Rate", value: "99.99%", tint: "text-accent" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-3"
            >
              <m.icon className={`h-4 w-4 ${m.tint}`} />
              <p className="mt-2 font-display text-xl font-bold text-white">{m.value}</p>
              <p className="text-[11px] text-muted-foreground">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* chart */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-white">Security Analytics</p>
            <p className="text-[11px] text-cyan">+18% this week</p>
          </div>
          <div className="mt-3 flex h-24 items-end gap-1.5">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-primary to-cyan"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* floating badge */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 bottom-10 hidden rounded-2xl border border-white/10 bg-navy/90 p-3 shadow-glow backdrop-blur-md sm:block"
      >
        <p className="text-[11px] text-muted-foreground">Incident Response</p>
        <p className="font-display text-lg font-bold text-white">&lt; 15 min SLA</p>
      </motion.div>
    </motion.div>
  );
}
