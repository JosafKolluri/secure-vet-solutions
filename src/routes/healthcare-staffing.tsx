import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { healthcareStaffing } from "@/data/site";
import healthcareStaff from "@/assets/healthcare-staff.jpg";

export const Route = createFileRoute("/healthcare-staffing")({
  head: () => ({
    meta: [
      { title: "Healthcare Staffing | SDVODB Technologies" },
      {
        name: "description",
        content:
          "Credentialed nursing, allied health, physician, behavioral health, and revenue cycle professionals for hospitals, clinics, and federal health facilities.",
      },
      { property: "og:title", content: "Healthcare Staffing | SDVODB Technologies" },
      {
        property: "og:description",
        content:
          "Credentialed clinical and allied health talent, ready to deploy across travel, contract, and permanent roles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secure-vet-solutions.lovable.app/healthcare-staffing" },
    ],
    links: [
      { rel: "canonical", href: "https://secure-vet-solutions.lovable.app/healthcare-staffing" },
    ],
  }),
  component: () => (
    <ServiceCatalogPage
      eyebrow="Healthcare Staffing"
      title="Credentialed clinicians when coverage cannot slip"
      description="Nursing, allied health, physicians, and revenue cycle professionals — pre-verified and ready for hospitals, clinics, and federal health facilities."
      image={healthcareStaff}
      imageAlt="Nurse speaking with a colleague in a bright hospital corridor"
      intro={{
        heading: "Credentialing is the bottleneck. We solve it first.",
        body: [
          "Every candidate arrives with licensure, certifications, immunization records, and references verified — so your clinical leaders review qualified people, not paperwork.",
          "We plan surge coverage and permanent conversion together, protecting your core staff from the burnout that unfilled shifts create.",
        ],
      }}
      highlights={[
        "Travel, contract, and permanent",
        "Pre-verified licensure packets",
        "Joint Commission-aware processes",
        "Veteran and community health programs",
      ]}
      items={healthcareStaffing}
    />
  ),
});
