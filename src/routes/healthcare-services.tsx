import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { healthcareStaffing } from "@/data/site";
import healthcareStaff from "@/assets/healthcare-staff.jpg";

const URL = "https://secure-vet-solutions.lovable.app/healthcare-services";

export const Route = createFileRoute("/healthcare-services")({
  head: () => ({
    meta: [
      { title: "Healthcare Services | CyberCloud Infra LLC" },
      {
        name: "description",
        content:
          "Healthcare workforce, technology, and operational solutions: clinical and non-clinical staffing, healthcare IT, medical office support, and operations support.",
      },
      { property: "og:title", content: "Healthcare Services | CyberCloud Infra LLC" },
      {
        property: "og:description",
        content:
          "Clinical and non-clinical staffing, healthcare IT, and operational support for health organizations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: () => (
    <ServiceCatalogPage
      eyebrow="Healthcare Services"
      title="Healthcare workforce, technology, and operations"
      description="Clinical and non-clinical staffing, healthcare IT, and administrative support for hospitals, clinics, medical offices, and public health organizations."
      image={healthcareStaff}
      imageAlt="Healthcare professionals collaborating in a bright hospital corridor"
      intro={{
        heading: "Credentialing and coverage, handled up front",
        body: [
          "Every candidate arrives with licensure, certifications, and references verified — so your leaders review qualified people, not paperwork.",
          "Our healthcare IT and operations teams support the systems and administrative workflows behind care delivery, from medical office staffing to technology support.",
        ],
      }}
      highlights={[
        "Clinical & non-clinical staffing",
        "Healthcare IT and technology support",
        "Medical office & administrative staffing",
        "Healthcare operations support",
      ]}
      items={healthcareStaffing}
    />
  ),
});
