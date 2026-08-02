import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { infrastructureServices } from "@/data/site";
import infrastructureDatacenter from "@/assets/infrastructure-datacenter.jpg";

export const Route = createFileRoute("/infrastructure-services")({
  head: () => ({
    meta: [
      { title: "Infrastructure Services | SDVODB Technologies" },
      {
        name: "description",
        content:
          "Data center, network engineering, end-user computing, 24/7 NOC, disaster recovery, and physical security services for multi-site organizations.",
      },
      { property: "og:title", content: "Infrastructure Services | SDVODB Technologies" },
      {
        property: "og:description",
        content:
          "Data center, network, end-user computing, and 24/7 monitoring services that keep operations running.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://secure-vet-solutions.lovable.app/infrastructure-services",
      },
    ],
    links: [
      { rel: "canonical", href: "https://secure-vet-solutions.lovable.app/infrastructure-services" },
    ],
  }),
  component: () => (
    <ServiceCatalogPage
      eyebrow="Infrastructure Services"
      title="The foundation your operations run on"
      description="Data center, network, and end-user infrastructure designed, deployed, and monitored around the clock by engineers who own the outcome."
      image={infrastructureDatacenter}
      imageAlt="Engineer working between server racks in a modern data center"
      intro={{
        heading: "Resilience you can prove, not assume"
        }
        }
      highlights={[
        "Data center design and migration",
        "LAN, WAN, SD-WAN, and wireless",
        "24/7 NOC with tiered escalation",
        "Tested backup and DR runbooks",
      ]}
      items={infrastructureServices}
    />
  ),
});
