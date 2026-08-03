import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { nonItStaffing } from "@/data/site";
import heroTeam from "@/assets/hero-team.jpg";

export const Route = createFileRoute("/non-it-staffing")({
  head: () => ({
    meta: [
      { title: "Non-IT Staffing | CyberCloud Infra LLC" },
      {
        name: "description",
        content:
          "Administrative, finance, engineering, light industrial, customer support, and executive talent — sourced, vetted, and placed at program speed.",
      },
      { property: "og:title", content: "Non-IT Staffing | CyberCloud Infra LLC" },
      {
        property: "og:description",
        content:
          "Professional and skilled non-IT talent for government programs and commercial enterprises.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/non-it-staffing" },
    ],
    links: [{ rel: "canonical", href: "https://secure-vet-solutions.lovable.app/non-it-staffing" }],
  }),
  component: () => (
    <ServiceCatalogPage
      eyebrow="Non-IT Staffing"
      title="Professional talent, qualified before you see them"
      description="We recruit for the roles that keep programs running — administrative, finance, engineering, logistics, and leadership — with screening tuned to your environment."
      image={heroTeam}
      imageAlt="Professional team collaborating in a modern office"
      intro={{
        heading: "Fewer resumes. Better candidates.",
        body: [
          "Our recruiters work against a written scorecard agreed with your hiring manager, so the first slate reflects the role you actually need to fill.",
          "Compliance, background screening, and onboarding logistics are handled before day one, whether the placement is contract, contract-to-hire, or direct.",
        ],
      }}
      highlights={[
        "Contract, contract-to-hire, and direct",
        "Scorecard-based screening",
        "Background and compliance handled",
        "Surge capacity for program spikes",
      ]}
      items={nonItStaffing}
    />
  ),
});
