import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/sections/Primitives";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";

const URL = "https://secure-vet-solutions.lovable.app/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | CyberCloud Infra LLC" },
      {
        name: "description",
        content:
          "IT services, non-IT professional services, infrastructure services, and healthcare services for private, government, and public-sector organizations.",
      },
      { property: "og:title", content: "Services | CyberCloud Infra LLC" },
      {
        property: "og:description",
        content:
          "Four service pillars: IT, Non-IT, Infrastructure, and Healthcare — delivered through one accountable partner.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology, infrastructure, workforce, and healthcare solutions"
        description="Four service pillars covering the technology you run, the infrastructure it runs on, the professionals who operate it, and the healthcare workforce behind care delivery."
        breadcrumb="Services"
      />

      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1120px]">
          <ServicesShowcase heading={false} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
