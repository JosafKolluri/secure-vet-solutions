import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { nonItStaffing } from "@/data/site";
import heroTeam from "@/assets/hero-team.jpg";

const URL = "https://secure-vet-solutions.lovable.app/non-it-services";

export const Route = createFileRoute("/non-it-services")({
  head: () => ({
    meta: [
      { title: "Non-IT Services | CyberCloud Infra LLC" },
      {
        name: "description",
        content:
          "Professional workforce and operational support: administrative, finance, HR, customer service, engineering staffing, business operations, and project support.",
      },
      { property: "og:title", content: "Non-IT Services | CyberCloud Infra LLC" },
      {
        property: "og:description",
        content:
          "Professional staffing, business operations, and project support for private and public-sector organizations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
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
