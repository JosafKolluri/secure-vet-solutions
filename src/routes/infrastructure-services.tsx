import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { infrastructureServices } from "@/data/site";
import { pageHead } from "@/lib/seo";
import infrastructureDatacenter from "@/assets/infrastructure-datacenter.svg";

export const Route = createFileRoute("/infrastructure-services")({
  head: () =>
    pageHead({
      title: "Infrastructure Services | Data Center, Network & NOC | CyberCloud Infra",
      description:
        "Infrastructure engineering: data center, network, end-user computing, 24/7 NOC, disaster recovery, and physical security for multi-site organizations.",
      path: "/infrastructure-services",
    }),
  component: () => (
    <ServiceCatalogPage
      eyebrow="Infrastructure Services"
      title="Infrastructure services that keep operations running"
      description="Data center, network, and end-user infrastructure designed, deployed, and monitored around the clock by engineers who own the outcome."
      image={infrastructureDatacenter}
      imageAlt="Engineer working between server racks in a modern data center"
      intro={{
        heading: "Resilience you can prove, not assume",
        body: [
          "We document the current environment, remove single points of failure, and standardize configuration so every site behaves the same way.",
          "Then we monitor it — 24/7, with runbooks for every priority-one scenario and reporting your leadership can actually read.",
        ],
      }}
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
