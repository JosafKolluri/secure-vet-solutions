import type { SVGProps } from "react";

/** Custom line-art icon set for the four capability pillars — stroke uses currentColor. */

export function ItServicesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M11 30 C6 30 3 26.6 3 22.6 C3 18.8 5.8 15.7 9.6 15.3 C10.9 9.9 15.5 6 21 6 C27 6 31.9 10.3 33 15.9 C38 16.4 41.5 20.2 41.5 24.8 C41.5 29.6 37.7 33.2 33 33.2 H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 27 L38 30 V36.5 C38 40.5 34.8 43 30.5 44.5 C26.2 43 23 40.5 23 36.5 V30 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M27.5 36.3 L29.7 38.5 L34 33.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StaffingNetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle cx="24" cy="9" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="35" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="39" cy="35" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20.5 13 L11.7 30.5 M27.5 13 L36.3 30.5 M14 35 h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="0.5 5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ServerRackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <rect x="8" y="4" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2" />
      {[11, 20, 29].map((y) => (
        <g key={y}>
          <rect x="12" y={y} width="24" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy={y + 3} r="0.9" fill="currentColor" />
          <circle cx="19.5" cy={y + 3} r="0.9" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export function HealthcarePulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M19 8 h10 v11 h11 v10 H29 v11 H19 V29 H8 V19 h11 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 40 h8 l3 -7 l4 13 l4 -19 l3 13 l2.5 -6 h9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
