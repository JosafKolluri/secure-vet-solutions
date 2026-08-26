/** Decorative circuit-line SVG placed behind the hero ID card. Purely ornamental. */
export function CircuitAccent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={className}>
      <g stroke="#c9a468" strokeOpacity="0.35" strokeWidth="1.4">
        <path d="M0 60 H120 V140 H260" />
        <path d="M400 100 H300 V40" />
        <path d="M0 260 H90 V340 H220 V400" />
        <path d="M400 300 H280 V220 H180" />
        <path d="M400 360 H340 V260" />
      </g>
      <g stroke="#3a6ea5" strokeOpacity="0.3" strokeWidth="1.4">
        <path d="M0 180 H60 V220" />
        <path d="M400 200 H360 V140 H300" />
        <path d="M40 0 V40 H140" />
      </g>
      <g fill="#c9a468" fillOpacity="0.55">
        <circle cx="120" cy="60" r="3" />
        <circle cx="260" cy="140" r="3" />
        <circle cx="300" cy="40" r="3" />
        <circle cx="90" cy="260" r="3" />
        <circle cx="220" cy="340" r="3" />
        <circle cx="340" cy="260" r="3" />
      </g>
      <g fill="#3a6ea5" fillOpacity="0.5">
        <circle cx="60" cy="180" r="3" />
        <circle cx="360" cy="200" r="3" />
        <circle cx="140" cy="0" r="3" />
        <circle cx="180" cy="220" r="3" />
      </g>
    </svg>
  );
}
