import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { nonItStaffing } from "@/data/site";
import { pageHead } from "@/lib/seo";
import heroTeam from "@/assets/hero-team.jpg";

export const Route = createFileRoute("/non-it-services")({
  head: () =>
    pageHead({
      title: "Non-IT Services | Professional Staffing & Operations | CyberCloud Infra",
      description:
        "Non-IT professional services: administrative, finance, HR, customer service, and engineering staffing plus business operations and project support.",
      path: "/non-it-services",
    }),
  component: () => (
    <ServiceCatalogPage
      eyebrow="Non-IT Services"
      title="Professional workforce and operational support"
      description="Administrative, finance, HR, customer service, and engineering professionals — plus business operations and project support that keep programs moving."
      image={heroTeam}
      imageAlt="Professional team collaborating in a modern office"
      intro={{
        heading: "People and process, delivered together",
        body: [
          "We recruit against a written scorecard agreed with your hiring manager, so the first slate reflects the role you actually need to fill.",
          "Beyond placement, our operations and project support teams take ownership of the day-to-day work — coordination, reporting, and back-office execution.",
        ],
      }}
      highlights={[
        "Administrative & professional staffing",
        "Finance, accounting, and HR talent",
        "Business operations & project support",
        "Skilled workforce and engineering roles",
      ]}
      items={nonItStaffing}
    />
  ),
});
