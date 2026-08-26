/**
 * Instrument-style ring used to frame verified credentials data — full ring =
 * active/verified status. Decorative bezel ticks only; never encodes a
 * fabricated percentage.
 */
export function GaugeRing({
  children,
  color = "#c9a468",
  size = 96,
}: {
  children: React.ReactNode;
  color?: string;
  size?: number;
}) {
  const r = size / 2 - 6;
  const c = 2 * Math.PI * r;
  const ticks = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 -rotate-90">
        {ticks.map((i) => {
          const angle = (i / ticks.length) * 360;
          return (
            <line
              key={i}
              x1={size / 2}
              y1={4}
              x2={size / 2}
              y2={8}
              stroke="white"
              strokeOpacity="0.18"
              strokeWidth="1.5"
              transform={`rotate(${angle} ${size / 2} ${size / 2})`}
            />
          );
        })}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2.5"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * 0.03}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}
