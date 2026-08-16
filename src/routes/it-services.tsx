import { createFileRoute } from "@tanstack/react-router";
import { ServiceCatalogPage } from "@/components/sections/ServiceCatalogPage";
import { itServices } from "@/data/site";
import { pageHead } from "@/lib/seo";
import dashboardLaptop from "@/assets/dashboard-laptop.jpg";

export const Route = createFileRoute("/it-services")({
  head: () =>
    pageHead({
      title: "IT Services | Cloud, Cybersecurity & Managed IT | CyberCloud Infra",
      description:
        "SDVOSB IT services: cloud migration, cybersecurity, application development, managed IT, data analytics, and AI automation for government and enterprise.",
      path: "/it-services",
    }),
  component: () => (
    <ServiceCatalogPage
      eyebrow="IT Services"
      title="IT services for government and enterprise missions"
      description="From cloud migration to managed operations, we design and run the technology your program depends on — with security and governance built in from the start."
      image={dashboardLaptop}
      imageAlt="Engineer reviewing cloud operations dashboards on a laptop"
      intro={{
        heading: "Technology that stays secure as it scales",
        body: [
          "We start where you are. Legacy estate, hybrid environment, or greenfield cloud — our engineers assess the current state, quantify risk, and build a roadmap you can fund and defend.",
          "Every engagement includes documented architecture, automated deployment, and a support model so nothing depends on tribal knowledge.",
        ],
      }}
      highlights={[
        "Azure, AWS, and Google Cloud",
        "NIST 800-53 and CMMC 2.0 alignment",
        "DevSecOps and automated pipelines",
        "SLA-backed managed operations",
      ]}
      items={itServices}
    />
  ),
});
