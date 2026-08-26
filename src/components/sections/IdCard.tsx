import { credentialing, naicsCodes, company } from "@/data/site";

const rows: { label: string; value: string }[] = [
  { label: "Entity", value: company.legalName },
  { label: "CAGE Code", value: credentialing.cageCode },
  { label: "Ownership", value: credentialing.ownershipType },
  { label: "NAICS", value: credentialing.naics.join(" · ") },
  { label: "SAM.gov", value: `${credentialing.samStatus} registration` },
];

export function IdCard({ className }: { className?: string }) {
  return (
    <div
      className={
        "corner-notch relative w-full max-w-sm overflow-hidden border border-gold/40 bg-gradient-to-b from-navy to-[#0f2a4d] shadow-lift " +
        (className ?? "")
      }
    >
      <div className="pointer-events-none absolute inset-0 grid-line-texture opacity-40" />

      <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div>
          <p className="font-mono-label text-[10px] text-gold-bright">Federal Contractor ID</p>
          <p className="mt-1 font-display text-sm font-bold tracking-tight text-white">
            {company.name}
          </p>
        </div>
        <span className="corner-notch-sm grid h-9 w-9 shrink-0 place-items-center bg-gradient-brand text-navy">
          <ShieldMark />
        </span>
      </div>

      <dl className="relative divide-y divide-white/10">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4 px-6 py-3.5">
            <dt className="font-mono-label shrink-0 text-[10px] text-white/50">{row.label}</dt>
            <dd className="text-right font-mono text-[13px] leading-snug text-white/90">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="relative flex items-center justify-between gap-3 border-t border-success/30 bg-success/10 px-6 py-4">
        <span className="font-mono-label text-xs font-semibold tracking-[0.2em] text-success">
          {credentialing.statusLabel}
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-status-pulse rounded-full bg-success" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
        </span>
      </div>

      <p className="relative border-t border-white/10 px-6 py-2.5 font-mono text-[10px] text-white/40">
        NAICS {naicsCodes.join(" · ")}
      </p>
    </div>
  );
}

function ShieldMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <path
        d="M12 3 L19 6 V11.5 C19 16 16 19.2 12 21 C8 19.2 5 16 5 11.5 V6 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12 L11 14.5 L15.5 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
