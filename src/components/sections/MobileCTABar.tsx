import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/site";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur md:hidden">
      <div className="flex items-stretch gap-2 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a
          href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
        >
          <Phone className="h-4 w-4 text-primary" /> Call
        </a>
        <Link
          to="/get-quote"
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground"
        >
          Get a Free Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
