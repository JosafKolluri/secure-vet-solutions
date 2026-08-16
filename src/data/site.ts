import {
  Cloud,
  Shield,
  Server,
  Cpu,
  Users,
  Stethoscope,
  Network,
  HardDrive,
  Boxes,
  ShieldCheck,
  Building2,
  HeartPulse,
  Banknote,
  GraduationCap,
  Factory,
  Landmark,
  Truck,
  Award,
  Target,
  Rocket,
  Lock,
  LifeBuoy,
  Search,
  ClipboardCheck,
  PenTool,
  Gauge,
  Headset,
  Code2,
  LineChart,
  Wrench,
  BadgeCheck,
  Handshake,
  Clock,
  type LucideIcon,
} from "lucide-react";

import blogZeroTrust from "@/assets/blog-zero-trust.jpg";
import blogCloudMigration from "@/assets/blog-cloud-migration.jpg";
import blogClinicalStaffing from "@/assets/blog-clinical-staffing.jpg";
import caseNocOperations from "@/assets/case-noc-operations.jpg";
import { offeringsForPillar } from "@/data/offerings";

export type { Offering } from "@/data/offerings";
export { offerings, getOffering, offeringsForPillar } from "@/data/offerings";

/* ------------------------------------------------------------------ */
/* Company                                                             */
/* ------------------------------------------------------------------ */

export const company = {
  name: "CyberCloud Infra LLC",
  legalName: "CyberCloud Infra LLC",
  tagline: "IT, Non-IT, Infrastructure & Healthcare for mission-critical work",
  shortDescription:
    "CyberCloud Infra LLC is a Service-Disabled Veteran-Owned Small Business (SDVOSB) delivering IT services, non-IT professional services, infrastructure engineering, and healthcare solutions to government agencies and enterprises.",
  email: "info@cybercloudinfra.com",
  phone: "[INSERT REAL NUMBER]",
  address: {
    line1: "704 Fox Squirrel CT",
    line2: "Arlington, TX 76005",
    country: "United States",
  },
  addressText: "704 Fox Squirrel CT, Arlington, TX 76005, United States",
  locationShort: "Arlington, TX",
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

/** Top-level service pillars used in nav + home grid */
export const services: Service[] = [
  {
    slug: "it-services",
    title: "IT Services",
    description:
      "Cloud, cybersecurity, application development, and managed IT delivered by certified engineers.",
    icon: Cloud,
    href: "/it-services",
  },
  {
    slug: "non-it-services",
    title: "Non-IT Services",
    description:
      "Administrative, finance, HR, and professional staffing plus operations and project support.",
    icon: Users,
    href: "/non-it-services",
  },
  {
    slug: "infrastructure-services",
    title: "Infrastructure Services",
    description:
      "Data center, network, end-user computing, and 24/7 NOC support that keeps operations running.",
    icon: Server,
    href: "/infrastructure-services",
  },
  {
    slug: "healthcare-services",
    title: "Healthcare Services",
    description:
      "Clinical and non-clinical staffing, healthcare IT, and medical operations support for care delivery.",
    icon: Stethoscope,
    href: "/healthcare-services",
  },
];

export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

export const itServices: ServiceDetail[] = offeringsForPillar("it-services");
export const nonItStaffing: ServiceDetail[] = offeringsForPillar("non-it-services");
export const nonItServices: ServiceDetail[] = nonItStaffing;
export const healthcareStaffing: ServiceDetail[] = offeringsForPillar("healthcare-services");
export const healthcareServices: ServiceDetail[] = healthcareStaffing;
export const infrastructureServices: ServiceDetail[] =
  offeringsForPillar("infrastructure-services");

export const serviceCatalog: Record<string, { title: string; items: ServiceDetail[] }> = {
  "it-services": { title: "IT Services", items: itServices },
  "non-it-services": { title: "Non-IT Services", items: nonItStaffing },
  "non-it-staffing": { title: "Non-IT Services", items: nonItStaffing },
  "healthcare-services": { title: "Healthcare Services", items: healthcareStaffing },
  "healthcare-staffing": { title: "Healthcare Services", items: healthcareStaffing },
  "infrastructure-services": { title: "Infrastructure Services", items: infrastructureServices },
};

/** Legacy alias kept for agent tooling */
export const homeServices = services.map((s) => ({
  slug: s.slug,
  title: s.title,
  description: s.description,
  points: (serviceCatalog[s.slug]?.items ?? []).slice(0, 3).map((i) => i.title),
}));

export const capabilities: ServiceDetail[] = [...itServices, ...infrastructureServices];

/* ------------------------------------------------------------------ */
/* Stats, differentiators, process                                     */
/* ------------------------------------------------------------------ */

export interface HomeStat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

export const homeStats: HomeStat[] = [
  { value: 10, suffix: "+", label: "Years of expertise" },
  { value: 50, suffix: "+", label: "Enterprise programs" },
  { value: 100, suffix: "+", label: "Professionals" },
  { value: 24, suffix: "/7", label: "Operations support" },
];

export interface WhyReason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseUs: WhyReason[] = [
  {
    title: "Certified Expertise",
    description:
      "Engineers and recruiters credentialed across cloud, security, and clinical specialties — not generalists.",
    icon: Award,
  },
  {
    title: "24/7 Support",
    description:
      "Around-the-clock monitoring and escalation so incidents never wait for business hours.",
    icon: Clock,
  },
  {
    title: "Scalable Solutions",
    description:
      "Teams and platforms that flex with program surges, seasonal demand, and multi-year growth.",
    icon: Rocket,
  },
  {
    title: "Client-First Delivery",
    description:
      "A single accountable delivery lead, transparent reporting, and no hand-offs into a black box.",
    icon: Handshake,
  },
  {
    title: "Security by Default",
    description:
      "Zero-trust principles, least-privilege access, and compliance alignment built into every engagement.",
    icon: Shield,
  },
  {
    title: "Speed to Value",
    description:
      "Qualified candidate slates in days and technical discovery to roadmap in weeks, not quarters.",
    icon: Target,
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We map your objectives, constraints, and compliance obligations with the people who own the outcome.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "A prioritized roadmap with scope, staffing plan, milestones, and measurable success criteria.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Delivery in disciplined sprints with weekly reporting, risk tracking, and stakeholder demos.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Support",
    description:
      "Continuous improvement, SLA-backed support, and quarterly reviews that keep value compounding.",
    icon: LifeBuoy,
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  {
    title: "Government & Public Sector",
    description:
      "Federal, state, and local agencies modernizing infrastructure while meeting strict compliance mandates.",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    description:
      "Hospitals, clinics, and health systems needing HIPAA-aligned technology and credentialed clinical talent.",
    icon: HeartPulse,
  },
  {
    title: "Financial Services",
    description:
      "Banks, credit unions, and insurers protecting sensitive data under continuous regulatory scrutiny.",
    icon: Banknote,
  },
  {
    title: "Manufacturing",
    description:
      "Plants and supply chains connecting OT and IT securely while scaling skilled technical labor.",
    icon: Factory,
  },
  {
    title: "Education",
    description:
      "Districts and universities modernizing networks, identity, and student-facing digital services.",
    icon: GraduationCap,
  },
  {
    title: "Commercial Enterprise",
    description:
      "Multi-site enterprises consolidating infrastructure and standardizing managed IT operations.",
    icon: Building2,
  },
];

export const homeIndustries = industries.slice(0, 6);

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "federal-cloud-migration",
    title: "Federal agency moves 240 workloads to Azure",
    client: "Federal civilian agency",
    industry: "Government & Public Sector",
    service: "IT Services",
    challenge:
      "An aging data center with end-of-life hardware created outage risk and could not meet new continuous-monitoring requirements.",
    solution:
      "We designed an Azure landing zone, sequenced 240 workloads into migration waves, and automated environment builds with infrastructure as code.",
    results: [
      "Migration completed across three waves with no unplanned downtime",
      "Infrastructure operating costs reduced through right-sizing and reserved capacity",
      "Continuous monitoring aligned to NIST 800-53 control families",
    ],
    image: blogCloudMigration,
  },
  {
    slug: "health-system-staffing-surge",
    title: "Health system fills a 90-position clinical surge",
    client: "Regional health system",
    industry: "Healthcare",
    service: "Healthcare Staffing",
    challenge:
      "Seasonal census growth and turnover left critical nursing and allied health shifts uncovered across four facilities.",
    solution:
      "We stood up a dedicated recruiting pod, pre-credentialed a candidate pipeline, and delivered weekly qualified slates against a shared scorecard.",
    results: [
      "Ninety positions filled across nursing and allied health",
      "Time-to-submit reduced with pre-verified licensure packets",
      "Contract-to-permanent conversions retained institutional knowledge",
    ],
    image: blogClinicalStaffing,
  },
  {
    slug: "zero-trust-rollout",
    title: "Zero-trust rollout for a multi-site enterprise",
    client: "National commercial enterprise",
    industry: "Commercial Enterprise",
    service: "Cybersecurity",
    challenge:
      "Flat network architecture and inconsistent identity controls left lateral movement risk across 30 sites.",
    solution:
      "We implemented identity-centric access, network segmentation, and centralized logging with tuned detection content.",
    results: [
      "Segmented network zones across all sites",
      "Centralized detection with measurable reduction in dwell time",
      "Privileged access consolidated behind conditional policies",
    ],
    image: blogZeroTrust,
  },
  {
    slug: "noc-modernization",
    title: "24/7 NOC modernization for a manufacturer",
    client: "Industrial manufacturer",
    industry: "Manufacturing",
    service: "Infrastructure Services",
    challenge:
      "Plant outages were detected by operators rather than monitoring, extending downtime on production-critical systems.",
    solution:
      "We deployed unified monitoring across IT and OT, built escalation runbooks, and staffed a 24/7 NOC with tiered response.",
    results: [
      "Outage detection shifted from manual reports to automated alerting",
      "Documented runbooks for every priority-one scenario",
      "Monthly reporting adopted by plant leadership",
    ],
    image: caseNocOperations,
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials & partners                                             */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [];

export const clientLogos = [
  "Azure",
  "AWS",
  "Google Cloud",
  "Microsoft 365",
  "Cisco",
  "VMware",
  "Fortinet",
  "ServiceNow",
];

export const techPartners = [
  "Microsoft Azure",
  "Amazon Web Services",
  "Google Cloud",
  "Cisco",
  "VMware",
  "Fortinet",
  "Palo Alto Networks",
  "ServiceNow",
];

/* ------------------------------------------------------------------ */
/* Certifications & compliance                                         */
/* ------------------------------------------------------------------ */

export interface Certification {
  label: string;
  detail: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  { label: "SDVOSB", detail: "Service-Disabled Veteran-Owned Small Business", icon: ShieldCheck },
  {
    label: "SAM.gov Registered",
    detail: "Active federal contractor registration",
    icon: BadgeCheck,
  },
  {
    label: "NIST 800-53 Aligned",
    detail: "Security controls mapped to federal baselines",
    icon: Shield,
  },
  { label: "CMMC 2.0 Aligned", detail: "Practices aligned to CMMC Level 2 objectives", icon: Lock },
];

export const coreCompetencies = [
  "Cloud migration & modernization",
  "Cybersecurity & zero trust",
  "Data center & network engineering",
  "Managed IT & 24/7 NOC",
  "IT, non-IT, and professional staffing",
  "Healthcare workforce, IT, and operations support",
];

export const naicsCodes = ["541512", "541519", "541611", "561320", "621399", "518210"];

export const trustChips = [
  { lead: "SDVOSB", rest: "Veteran-owned" },
  { lead: "SAM", rest: "Active registration" },
  { lead: "NIST", rest: "800-53 aligned" },
  { lead: "CMMC", rest: "Level 2 practices" },
  { lead: "NAICS", rest: "541512 · 541611" },
];

export const contractingQuals: { label: string; value: string }[] = [
  { label: "Certification", value: "Service-Disabled Veteran-Owned Small Business (SDVOSB)" },
  { label: "Registration", value: "SAM.gov active federal contractor" },
  { label: "NAICS", value: naicsCodes.join(", ") },
  { label: "Contract types", value: "FFP, T&M, IDIQ task orders, staff augmentation" },
  {
    label: "Delivery lanes",
    value: "IT, non-IT professional services, infrastructure, cybersecurity, healthcare",
  },
  { label: "Sectors", value: "Federal, state, local, and commercial mission-critical programs" },
  { label: "Support", value: "24/7 NOC and SLA-backed operations after go-live" },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Are you a certified SDVOSB?",
    a: "Yes. CyberCloud Infra LLC is a Service-Disabled Veteran-Owned Small Business. We support primes meeting subcontracting goals and agencies buying under small-business set-asides.",
  },
  {
    q: "What services do you provide?",
    a: "Four pillars: IT services (cloud, cybersecurity, software, managed IT), non-IT professional services and staffing, infrastructure engineering and 24/7 NOC, and healthcare workforce, IT, and operations support.",
  },
  {
    q: "Do you work with federal and commercial clients?",
    a: "Both. We deliver the same model to government agencies, public institutions, and private-sector organizations that cannot afford downtime or unfilled critical roles.",
  },
  {
    q: "Can you provide technology and staffing on the same engagement?",
    a: "Yes. Platform work and the people who run it are scoped, staffed, and reported under a single delivery lead — so you are not coordinating four vendors.",
  },
  {
    q: "How fast can you mobilize?",
    a: "Discovery starts as soon as we have objectives and constraints. Staffing slates and engineering kickoff timelines are confirmed in the scope call so you are not guessing against a deadline.",
  },
  {
    q: "What happens after go-live?",
    a: "SLA-backed support, 24/7 monitoring where the contract requires it, and quarterly reviews. We stay on the program until operations are stable — not just until the cutover weekend ends.",
  },
  {
    q: "How do we start?",
    a: "Request a quote or email info@cybercloudinfra.com. We return a clear scope, timeline, and staffing plan — not a generic brochure.",
  },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const coreValues = [
  {
    title: "Integrity",
    description: "We commit to what we can deliver and report honestly when reality shifts.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description: "Engineering rigor and recruiting discipline applied to every engagement.",
    icon: Award,
  },
  {
    title: "Partnership",
    description: "We measure success by your outcomes, not by hours billed.",
    icon: Handshake,
  },
  {
    title: "Service",
    description: "Veteran-founded values: mission first, people always.",
    icon: Target,
  },
];

export const milestones = [
  {
    year: "Founded",
    title: "Veteran-owned launch",
    description:
      "Established as a Service-Disabled Veteran-Owned Small Business focused on federal IT delivery.",
  },
  {
    year: "Expansion",
    title: "Infrastructure practice",
    description: "Added data center, network, and 24/7 NOC capability for multi-site clients.",
  },
  {
    year: "Growth",
    title: "Staffing divisions",
    description: "Launched dedicated IT, non-IT, and healthcare staffing practices.",
  },
  {
    year: "Today",
    title: "Integrated delivery",
    description: "Technology and talent delivered together under one accountable partner.",
  },
];

/* ------------------------------------------------------------------ */
/* Careers                                                             */
/* ------------------------------------------------------------------ */

export interface Job {
  title: string;
  location: string;
  type: string;
  department: string;
}

export const jobs: Job[] = [
  {
    title: "Cloud Solutions Architect",
    location: "Remote (US)",
    type: "Full-time",
    department: "IT Services",
  },
  {
    title: "Cybersecurity Analyst",
    location: "Hybrid — Washington, DC",
    type: "Full-time",
    department: "IT Services",
  },
  {
    title: "Network Engineer",
    location: "On-site — Client sites",
    type: "Full-time",
    department: "Infrastructure",
  },
  {
    title: "Technical Recruiter",
    location: "Remote (US)",
    type: "Full-time",
    department: "Staffing",
  },
  {
    title: "Healthcare Credentialing Specialist",
    location: "Remote (US)",
    type: "Full-time",
    department: "Healthcare Staffing",
  },
  {
    title: "Service Desk Technician",
    location: "On-site — Client sites",
    type: "Full-time",
    department: "Managed IT",
  },
];

export const benefits = [
  "Competitive compensation and performance bonuses",
  "Medical, dental, and vision coverage",
  "401(k) with company contribution",
  "Certification reimbursement and training budget",
  "Paid time off and federal holidays",
  "Remote and hybrid flexibility where the role allows",
];

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "zero-trust-federal-agencies",
    title: "Zero Trust: what federal agencies actually have to change",
    excerpt:
      "Zero trust is an architecture decision, not a product purchase. Here is the sequence that works in regulated environments.",
    date: "2026-05-18",
    readingTime: "6 min read",
    category: "Cybersecurity",
    image: blogZeroTrust,
    content: [
      "Zero trust replaces implicit network trust with continuous verification of identity, device posture, and context. For federal agencies, that means the perimeter stops being the control boundary and identity takes its place.",
      "The sequence that works starts with identity consolidation. Until every user and service authenticates through a single, policy-enforced identity provider, segmentation and conditional access have nothing reliable to key on.",
      "Next comes device and workload posture. Enrollment, patch state, and configuration compliance become inputs to access decisions rather than reports reviewed after the fact.",
      "Finally, telemetry. Centralized logging with tuned detection content is what turns a segmented network into a defensible one. Without it, you have architecture but no visibility.",
    ],
  },
  {
    slug: "data-center-to-azure",
    title: "Data center to Azure: sequencing a migration that does not stall",
    excerpt:
      "Most stalled migrations fail on dependency mapping and ownership, not on technology. A wave-based approach fixes both.",
    date: "2026-04-22",
    readingTime: "7 min read",
    category: "Cloud",
    image: blogCloudMigration,
    content: [
      "Migrations rarely stall because a workload cannot run in the cloud. They stall because nobody agreed who owns the application, what depends on it, and what downtime is acceptable.",
      "Start with a dependency map built from real network telemetry rather than documentation. Group workloads into waves where every member shares owners and downtime tolerance.",
      "Build the landing zone before the first wave: identity, network topology, policy, logging, and cost guardrails. Retrofitting governance after migration is far more expensive.",
      "Treat the first wave as a rehearsal. Measure cutover time, rollback readiness, and post-migration performance, then adjust the runbook before scaling volume.",
    ],
  },
  {
    slug: "healthcare-staffing-shortage",
    title: "Closing clinical coverage gaps without burning out your core staff",
    excerpt:
      "Surge staffing works when credentialing, scheduling, and retention are planned together rather than sequentially.",
    date: "2026-03-11",
    readingTime: "5 min read",
    category: "Healthcare Staffing",
    image: blogClinicalStaffing,
    content: [
      "Coverage gaps compound. Every unfilled shift shifts load to permanent staff, which accelerates the turnover that created the gap in the first place.",
      "The fix is to shorten time-to-submit. Pre-verified licensure, references, and compliance packets let qualified candidates reach hiring managers in days instead of weeks.",
      "Scheduling matters as much as sourcing. Blocked schedules and predictable rotations make contract roles attractive to the clinicians you most want to convert to permanent.",
      "Finally, measure conversion. Contract-to-permanent placements retain institutional knowledge and reduce the cost of the next surge.",
    ],
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "What makes CyberCloud Infra LLC different from a typical IT vendor?",
    answer:
      "We deliver technology and talent together. The same partner that engineers your cloud or infrastructure can also staff the roles required to run it, which removes hand-offs between vendors.",
  },
  {
    question: "Do you work with federal and state government agencies?",
    answer:
      "Yes. As a Service-Disabled Veteran-Owned Small Business we support federal, state, and local agencies, and we align delivery to NIST 800-53 and CMMC 2.0 objectives.",
  },
  {
    question: "How quickly can you provide qualified candidates?",
    answer:
      "For most IT, non-IT, and healthcare roles we deliver a first qualified slate within days of an approved job order, using pre-verified compliance and licensure packets.",
  },
  {
    question: "Can you support 24/7 operations?",
    answer:
      "Yes. Our NOC and managed IT services run around the clock with tiered escalation, documented runbooks, and SLA-backed response commitments.",
  },
  {
    question: "How do engagements typically start?",
    answer:
      "Most begin with a short discovery consultation, followed by a written scope and roadmap. You will always see pricing, milestones, and success criteria before work begins.",
  },
];

/* ------------------------------------------------------------------ */
/* Solution pillars (bento grid on home)                               */
/* ------------------------------------------------------------------ */

export interface SolutionPillar {
  title: string;
  kicker: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  href: string;
  cta: string;
}

export const solutionPillars: SolutionPillar[] = [
  {
    title: "DevSecOps",
    kicker: "Security as an innovation catalyst",
    description:
      "We integrate security seamlessly into development and operations, so every commit ships hardened instead of waiting on a late-stage review.",
    bullets: [
      "CI/CD pipeline engineering and automation",
      "Container, IaC, and supply-chain scanning",
      "Continuous compliance evidence and reporting",
    ],
    icon: ShieldCheck,
    href: "/it-services",
    cta: "Start integrating today",
  },
  {
    title: "Software Development",
    kicker: "Ideas into digital reality",
    description:
      "Full-stack product teams that design, build, and modernize mission applications one disciplined sprint at a time.",
    bullets: ["Cloud-native application delivery", "Legacy modernization and API layers"],
    icon: Code2,
    href: "/it-services",
    cta: "Let's build something",
  },
  {
    title: "Agile & DevSecOps Training",
    kicker: "Upskill your teams",
    description:
      "Practitioner-led training that builds an Agile mindset and equips self-managed, cross-functional teams to hit business goals.",
    bullets: ["Role-based curricula", "Hands-on labs and coaching"],
    icon: GraduationCap,
    href: "/careers",
    cta: "Start upskilling today",
  },
  {
    title: "Agile Transformation",
    kicker: "Modernize how you deliver",
    description:
      "Subject-matter experts guide ceremonies, launch Agile release trains, and improve flexibility, collaboration, and responsiveness to customers.",
    bullets: ["Release train launch and coaching", "Delivery metrics and maturity roadmaps"],
    icon: Rocket,
    href: "/case-studies",
    cta: "Start transforming today",
  },
  {
    title: "No-Code / Low-Code",
    kicker: "Accelerate digital innovation",
    description:
      "Migrate traditional applications and manual processes onto platforms like ServiceNow and Salesforce to reduce barriers and cost.",
    bullets: ["ServiceNow and Salesforce delivery", "Workflow and process automation"],
    icon: Boxes,
    href: "/infrastructure-services",
    cta: "Start creating today",
  },
  {
    title: "Healthcare Staffing",
    kicker: "Credentialed clinical talent",
    description:
      "Clinical and allied health professionals for hospitals, clinics, and federal facilities — credentialed, compliant, and deployment-ready.",
    bullets: ["Clinical and allied health roles", "Compliance-first credentialing"],
    icon: Stethoscope,
    href: "/healthcare-services",
    cta: "Explore healthcare staffing",
  },
];

export const devSecOpsPhases = [
  "Plan",
  "Code",
  "Build",
  "Test",
  "Release",
  "Deploy",
  "Operate",
  "Monitor",
];

/* ------------------------------------------------------------------ */
/* Four service pillars + client markets                               */
/* ------------------------------------------------------------------ */

export interface Pillar {
  number: string;
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  href: string;
  services: { title: string; slug: string }[];
}

export const pillars: Pillar[] = [
  {
    number: "01",
    slug: "it-services",
    title: "IT Services",
    summary:
      "Cloud, cybersecurity, software, and managed IT — advisory, build, and run for government and enterprise.",
    icon: Cloud,
    href: "/it-services",
    services: itServices.map((s) => ({ title: s.title, slug: s.slug })),
  },
  {
    number: "02",
    slug: "non-it-services",
    title: "Non-IT Services",
    summary:
      "Administrative, finance, HR, and professional staffing plus business operations and project support.",
    icon: Users,
    href: "/non-it-services",
    services: nonItServices.map((s) => ({ title: s.title, slug: s.slug })),
  },
  {
    number: "03",
    slug: "infrastructure-services",
    title: "Infrastructure Services",
    summary:
      "Data center, network, end-user computing, disaster recovery, and 24/7 NOC operations.",
    icon: Server,
    href: "/infrastructure-services",
    services: infrastructureServices.map((s) => ({ title: s.title, slug: s.slug })),
  },
  {
    number: "04",
    slug: "healthcare-services",
    title: "Healthcare Services",
    summary:
      "Clinical and non-clinical staffing, healthcare IT, and medical operations support for care delivery.",
    icon: Stethoscope,
    href: "/healthcare-services",
    services: healthcareServices.map((s) => ({ title: s.title, slug: s.slug })),
  },
];

export interface Market {
  slug: string;
  title: string;
  message: string;
  icon: LucideIcon;
  segments: string[];
}

export const whoWeServe: Market[] = [
  {
    slug: "private-sector",
    title: "Private Sector",
    message:
      "IT, infrastructure, professional workforce, and healthcare solutions that help enterprises and growing businesses modernize without stacking vendors.",
    icon: Building2,
    segments: [
      "Enterprises",
      "Small & Medium Businesses",
      "Technology Companies",
      "Financial Services",
      "Manufacturing",
      "Professional Services",
      "Healthcare Organizations",
    ],
  },
  {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    message:
      "SDVOSB-ready IT, infrastructure, professional workforce, and healthcare support aligned to public-sector missions, compliance, and procurement.",
    icon: Landmark,
    segments: [
      "Federal Government",
      "State Government",
      "Local Government",
      "Public Agencies",
      "Government Contractors",
      "Public Institutions",
    ],
  },
];
