import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { healthcareStaffing } from "@/data/site";
import { pageHead } from "@/lib/seo";
import healthcareStaff from "@/assets/healthcare-staff.svg";

export const Route = createFileRoute("/healthcare-services")({
  head: () =>
    pageHead({
      title: "Healthcare Services | Clinical Staffing & Health IT | CyberCloud Infra",
      description:
        "Healthcare services: clinical and non-clinical staffing, healthcare IT, medical office support, and operations for hospitals, clinics, and public health.",
      path: "/healthcare-services",
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
