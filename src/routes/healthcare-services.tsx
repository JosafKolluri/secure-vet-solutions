import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Building2,
  ClipboardList,
  Cpu,
  HeartPulse,
  Landmark,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import { pageHead } from "@/lib/seo";
import { Reveal, Eyebrow, SectionHeading, CTASection } from "@/components/sections/Primitives";
import { Button } from "@/components/ui/button";
import healthcareHero from "@/assets/healthcare-hero.jpg";

export const Route = createFileRoute("/healthcare-services")({
  head: () =>
    pageHead({
      title: "Healthcare Services | CyberCloud Infra LLC",
      description:
        "CyberCloud Infra LLC provides healthcare staffing, clinical and nursing talent, allied health professionals, healthcare IT, informatics, and operational support services.",
      path: "/healthcare-services",
    }),
  component: HealthcareServicesPage,
});

const lanes: {
  id: string;
  title: string;
  description: string;
  roles: string[];
  icon: LucideIcon;
  href: "/services/$slug";
  slug: string;
}[] = [
  {
    id: "clinical-nursing",
    title: "Clinical & Nursing",
    description:
      "Qualified nursing and clinical professionals supporting healthcare organizations and patient-care operations.",
    roles: [
      "Registered Nurses (RN)",
      "Licensed Practical Nurses (LPN/LVN)",
      "Certified Nursing Assistants (CNA)",
      "Nurse Practitioners",
      "Medical Assistants",
    ],
    icon: Stethoscope,
    href: "/services/$slug",
    slug: "clinical-staffing",
  },
  {
    id: "allied-health",
    title: "Allied Health",
    description:
      "Specialized allied health professionals supporting diagnostics, treatment, clinical operations, and patient care.",
    roles: [
      "Laboratory Technicians",
      "Pharmacy Professionals",
      "Radiology / Imaging Technicians",
      "Respiratory Therapists",
      "Biomedical Technicians",
    ],
    icon: HeartPulse,
    href: "/services/$slug",
    slug: "healthcare-staffing",
  },
  {
    id: "behavioral-social",
    title: "Behavioral & Social Services",
    description:
      "Specialized professionals supporting behavioral health, mental health, and social care programs.",
    roles: [
      "Clinical Psychologists",
      "Behavioral Health Professionals",
      "Social Workers",
      "Mental Health Support Professionals",
    ],
    icon: Brain,
    href: "/services/$slug",
    slug: "healthcare-workforce-solutions",
  },
  {
    id: "healthcare-it",
    title: "Healthcare IT & Informatics",
    description:
      "Technology and informatics professionals supporting healthcare systems, applications, data, and digital transformation.",
    roles: [
      "Health Informatics Specialists",
      "Healthcare IT Support",
      "EHR/EMR Support",
      "Healthcare Data & Systems Professionals",
    ],
    icon: Cpu,
    href: "/services/$slug",
    slug: "healthcare-it",
  },
  {
    id: "healthcare-admin",
    title: "Healthcare Administration & Support",
    description:
      "Administrative and operational professionals supporting efficient healthcare delivery and organizational operations.",
    roles: [
      "Medical Records Specialists",
      "Healthcare Administrative Professionals",
      "Patient Support Staff",
      "Medical Logistics & Support",
    ],
    icon: ClipboardList,
    href: "/services/$slug",
    slug: "administrative-healthcare-staffing",
  },
];

const benefits: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Specialized Talent",
    body: "Access qualified healthcare, technical, and operational professionals scoped to the roles you actually need to fill.",
    icon: Users,
  },
  {
    title: "Technology Expertise",
    body: "Combine healthcare services with IT, infrastructure, cloud, and cybersecurity capabilities under one delivery lead.",
    icon: Cpu,
  },
  {
    title: "Government & Commercial Support",
    body: "Support public-sector agencies, healthcare organizations, and private enterprises with the same accountable model.",
    icon: Landmark,
  },
  {
    title: "Mission-Focused Delivery",
    body: "Provide dependable workforce and technology solutions aligned with your requirements, timeline, and operating constraints.",
    icon: Building2,
  },
];

const sectors = [
  "Government Healthcare",
  "Hospitals & Health Systems",
  "Clinics & Medical Facilities",
  "Laboratories",
  "Healthcare Contractors",
  "Commercial Healthcare Organizations",
];

function HealthcareServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0c2340] pt-36 pb-20 lg:pt-44 lg:pb-24">
        <img
          src={healthcareHero}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c2340] via-[#0c2340]/90 to-[#0c2340]/72" />
        <div className="pointer-events-none absolute inset-0 plus-pattern" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <Eyebrow tone="light">Healthcare Services</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[3.35rem]">
              Healthcare Talent & Technology for Mission-Critical Organizations
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              CyberCloud Infra LLC delivers specialized healthcare staffing, healthcare IT,
              informatics, and operational support services to government agencies, healthcare
              organizations, and commercial enterprises.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 min-h-12 rounded-md bg-brand px-7 font-semibold text-brand-foreground hover:bg-brand/90"
              >
                <Link to="/get-quote">
                  Request Healthcare Services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 min-h-12 rounded-md border-white/30 bg-transparent px-7 font-medium text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>
            <nav aria-label="Breadcrumb" className="mt-8 text-sm text-white/60">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span className="px-2">/</span>
              <Link to="/services" className="transition-colors hover:text-white">
                Services
              </Link>
              <span className="px-2">/</span>
              <span className="text-white">Healthcare Services</span>
            </nav>
          </div>
          <Reveal className="hidden lg:block">
            <img
              src={healthcareHero}
              alt="Healthcare operations and informatics professionals reviewing clinical systems"
              width={1600}
              height={1067}
              className="w-full rounded-2xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section id="healthcare-lanes" className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Healthcare Services Built Around Your Mission"
            description="Five focused lanes — talent, technology, and operational support — without a catalog of every specialty."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {lanes.map((lane, i) => (
              <Reveal key={lane.id} delay={i * 0.05}>
                <article
                  id={lane.id}
                  className="flex h-full flex-col border border-border bg-card p-7 shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-primary text-primary-foreground">
                    <lane.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{lane.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {lane.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {lane.roles.map((role) => (
                      <li key={role} className="text-sm text-foreground/85">
                        {role}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={lane.href}
                    params={{ slug: lane.slug }}
                    className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Need technology beyond healthcare systems? See{" "}
            <Link to="/it-services" className="font-semibold text-primary hover:underline">
              IT Services
            </Link>{" "}
            and{" "}
            <Link to="/infrastructure-services" className="font-semibold text-primary hover:underline">
              Infrastructure Services
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="why-cybercloud" className="section-py px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            title="One Partner for Healthcare Talent, Technology & Support"
            description="Workforce and systems delivered together so coverage, applications, and operations stay under one accountable lead."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {benefits.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="h-full border border-border bg-card p-7 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-accent-foreground">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Supporting Healthcare Organizations Across Sectors" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector} delay={i * 0.04}>
                <li className="border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground shadow-soft">
                  {sector}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Build a Stronger Healthcare Workforce"
        description="Whether you need specialized healthcare professionals, healthcare IT expertise, or operational support, CyberCloud Infra is ready to help."
        primaryLabel="Request Healthcare Services"
        primaryTo="/get-quote"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
