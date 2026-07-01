import {
  Cloud,
  Shield,
  Server,
  Cpu,
  GitBranch,
  Landmark,
  Network,
  HardDrive,
  Boxes,
  ShieldCheck,
  Eye,
  AlertTriangle,
  FileSearch,
  Building2,
  HeartPulse,
  Banknote,
  GraduationCap,
  Crosshair,
  Zap,
  Users,
  Award,
  Target,
  Rocket,
  Lock,
  LifeBuoy,
  Bot,
  Search,
  ClipboardCheck,
  PenTool,
  DatabaseBackup,
  Gauge,
  Layers,
  type LucideIcon,
} from "lucide-react";


import blogZeroTrust from "@/assets/blog-zero-trust.jpg";
import blogCloudMigration from "@/assets/blog-cloud-migration.jpg";
import blogDevsecops from "@/assets/blog-devsecops.jpg";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    description:
      "Azure-first migrations (plus AWS & GCP) that move workloads from the data center to secure, scalable cloud — with zero-trust controls built in.",
    icon: Cloud,
  },
  {
    slug: "data-center",
    title: "Data Center Expertise",
    description:
      "Deep data center engineering — design, consolidation, virtualization, and modernization for private and government environments.",
    icon: Server,
  },
  {
    slug: "cybersecurity-ai",
    title: "AI-Driven Cybersecurity",
    description:
      "Threat detection and response powered by AI and best-in-class tools: Prisma Cloud, Splunk, CrowdStrike, and Wiz.",
    icon: Shield,
  },
  {
    slug: "disaster-recovery",
    title: "Disaster Recovery",
    description:
      "Resilient backup, replication, and DR strategies that keep mission-critical systems available through any disruption.",
    icon: HeartPulse,
  },
  {
    slug: "managed-secops",
    title: "Managed Security Operations",
    description:
      "24/7 monitoring, SIEM, and continuous compliance hardening to defend private and government missions around the clock.",
    icon: Eye,
  },
  {
    slug: "government-consulting",
    title: "Government Consulting",
    description:
      "Acquisition strategy, program management, and IT advisory tailored for federal and public-sector missions.",
    icon: Landmark,
  },
];

export interface Capability {
  category: string;
  icon: LucideIcon;
  items: { name: string; icon: LucideIcon }[];
}

export const capabilities: Capability[] = [
  {
    category: "Cloud & Migration",
    icon: Cloud,
    items: [
      { name: "Microsoft Azure (Primary)", icon: Cloud },
      { name: "AWS & Google Cloud", icon: Cloud },
      { name: "Data Center to Cloud Migration", icon: GitBranch },
      { name: "Hybrid & Multi-Cloud", icon: Boxes },
    ],
  },
  {
    category: "Cybersecurity & AI",
    icon: Shield,
    items: [
      { name: "Prisma Cloud", icon: ShieldCheck },
      { name: "Splunk SIEM", icon: Eye },
      { name: "CrowdStrike EDR", icon: AlertTriangle },
      { name: "Wiz Cloud Security", icon: FileSearch },
      { name: "AI-Driven Threat Detection", icon: Cpu },
      { name: "Zero Trust Architecture", icon: ShieldCheck },
    ],
  },
  {
    category: "Data Center & Infrastructure",
    icon: Server,
    items: [
      { name: "Data Center Design", icon: Server },
      { name: "Networking", icon: Network },
      { name: "Storage & Virtualization", icon: HardDrive },
      { name: "Disaster Recovery", icon: HeartPulse },
    ],
  },
  {
    category: "Government Solutions",
    icon: Landmark,
    items: [
      { name: "Federal IT Services", icon: Landmark },
      { name: "Private & Public Sector", icon: Building2 },
      { name: "Contract Support", icon: FileSearch },
      { name: "Program Management", icon: Cpu },
    ],
  },
];

export interface Certification {
  code: string;
  title: string;
  description: string;
}

export const certifications: Certification[] = [
  { code: "SDVOSB", title: "Service-Disabled Veteran-Owned", description: "Certified Service-Disabled Veteran-Owned Small Business." },
  { code: "Small Business", title: "Small Business", description: "Officially recognized small business concern." },
  { code: "Veteran Owned", title: "Veteran Owned", description: "Founded and led by U.S. military veterans." },
  { code: "SBA", title: "SBA Registered", description: "Registered with the U.S. Small Business Administration." },
  { code: "SAM", title: "SAM Registered", description: "Active registration in the System for Award Management." },
  { code: "CAGE", title: "CAGE Code", description: "Commercial and Government Entity code on file." },
  { code: "UEI", title: "UEI Number", description: "Unique Entity Identifier for federal contracting." },
];

export interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  { title: "Federal Government", description: "Modern, compliant IT for civilian and federal agencies.", icon: Landmark },
  { title: "Healthcare", description: "HIPAA-ready cloud and security for patient data.", icon: HeartPulse },
  { title: "Defense", description: "Mission-assured infrastructure for defense programs.", icon: Crosshair },
  { title: "Financial Services", description: "Regulated, resilient environments for financial data.", icon: Banknote },
  { title: "Education", description: "Scalable, secure platforms for institutions.", icon: GraduationCap },
];

export const coreValues = [
  { title: "Integrity", description: "We do what is right, even when no one is watching." },
  { title: "Innovation", description: "We engineer modern solutions to hard problems." },
  { title: "Service", description: "Mission-first commitment rooted in military values." },
  { title: "Security", description: "Security is the foundation of everything we deliver." },
  { title: "Excellence", description: "We hold ourselves to the highest standards." },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "CyberCloudInfra modernized our agency cloud while keeping us fully compliant. Their team operates with true mission focus.",
    name: "Program Director",
    role: "Federal Civilian Agency",
    rating: 5,
    company: "FEDERAL",
  },
  {
    quote:
      "Their Zero Trust rollout was seamless. The veteran leadership brings a discipline and reliability we rarely see.",
    name: "CISO",
    role: "Defense Contractor",
    rating: 5,
    company: "DEFENSE",
  },
  {
    quote:
      "From migration to managed services, they have been a dependable partner that consistently delivers ahead of schedule.",
    name: "IT Director",
    role: "Healthcare System",
    rating: 5,
    company: "HEALTH+",
  },
];


export const clientLogos = [
  "DEFENSE",
  "FEDERAL",
  "HEALTH+",
  "SECURE",
  "AGENCY",
  "GOVTECH",
];

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
}

export const jobs: Job[] = [
  { id: "cloud-eng", title: "Senior Cloud Engineer", location: "Remote / DC Metro", type: "Full-time", department: "Engineering", summary: "Design and deploy secure AWS/Azure environments for federal clients." },
  { id: "secops", title: "Security Operations Analyst", location: "Hybrid — Arlington, VA", type: "Full-time", department: "Cybersecurity", summary: "Monitor, detect, and respond to threats across mission systems." },
  { id: "pm", title: "Program Manager", location: "On-site — DC Metro", type: "Full-time", department: "Delivery", summary: "Lead government IT programs from kickoff through delivery." },
  { id: "devsecops", title: "DevSecOps Engineer", location: "Remote", type: "Full-time", department: "Engineering", summary: "Build secure CI/CD pipelines and automate compliance." },
];

export const benefits = [
  "Comprehensive medical, dental & vision",
  "401(k) with company match",
  "Generous PTO & federal holidays",
  "Certification & training reimbursement",
  "Veteran-friendly culture",
  "Remote & hybrid flexibility",
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "zero-trust-federal",
    title: "Implementing Zero Trust Across Federal Agencies",
    excerpt:
      "A practical roadmap for agencies adopting Zero Trust Architecture under the federal mandate.",
    category: "Cybersecurity",
    date: "2026-05-18",
    readTime: "6 min",
    cover: blogZeroTrust,
    body: [
      "Zero Trust has shifted from buzzword to mandate. Federal agencies are now required to architect systems that never implicitly trust any user or device.",
      "The journey starts with identity. Strong authentication, least-privilege access, and continuous verification form the backbone of any Zero Trust rollout.",
      "Segmentation and continuous monitoring close the loop, ensuring that even if a perimeter is breached, lateral movement is contained.",
    ],
  },
  {
    slug: "cloud-migration-government",
    title: "Cloud Migration Strategies for Government IT",
    excerpt:
      "How to move legacy government workloads to the cloud without compromising compliance.",
    category: "Cloud",
    date: "2026-04-02",
    readTime: "5 min",
    cover: blogCloudMigration,
    body: [
      "Government cloud migration is as much about governance as it is about technology. Compliance frameworks like FedRAMP shape every architectural decision.",
      "A phased approach — assess, re-platform, optimize — reduces risk while delivering early wins to stakeholders.",
      "Automation and infrastructure-as-code ensure migrations are repeatable, auditable, and secure.",
    ],
  },
  {
    slug: "devsecops-compliance",
    title: "DevSecOps: Building Compliance Into the Pipeline",
    excerpt:
      "Shifting security left to meet government compliance without slowing delivery.",
    category: "DevSecOps",
    date: "2026-03-11",
    readTime: "4 min",
    cover: blogDevsecops,
    body: [
      "Traditional compliance happens at the end of a project. DevSecOps moves it to the beginning, embedding controls directly into CI/CD pipelines.",
      "Automated scanning, policy-as-code, and continuous authorization let teams ship faster while staying audit-ready.",
      "The result is a culture where security is everyone's responsibility, not a final gate.",
    ],
  },
];

/* ---------- Homepage content ---------- */

export interface HomeStat {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export const homeStats: HomeStat[] = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Service Availability" },
  { value: 100, suffix: "%", label: "Mission Focused" },
  { value: 24, suffix: "/7", label: "Support" },
];

export interface HomeCert {
  title: string;
  icon: LucideIcon;
}

export const homeCerts: HomeCert[] = [
  { title: "SDVOSB Certified", icon: ShieldCheck },
  { title: "Veteran Owned", icon: Award },
  { title: "Federal Contract Ready", icon: Landmark },
  { title: "NIST Security Framework", icon: Lock },
  { title: "SAM Registered", icon: FileSearch },
  { title: "CAGE Code", icon: Building2 },
  { title: "Azure Expertise", icon: Cloud },
  { title: "Compliance Focus", icon: ClipboardCheck },
];

export interface HomeService {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

export const homeServices: HomeService[] = [
  {
    slug: "cloud-modernization",
    title: "Cloud Modernization",
    description: "Azure-first cloud adoption, migration, and hybrid infrastructure engineered for scale and security.",
    icon: Cloud,
    points: ["Azure Cloud", "AWS Migration", "Hybrid Infrastructure"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Zero Trust architecture, identity protection, and managed SOC services defending mission systems.",
    icon: Shield,
    points: ["Zero Trust", "Identity Protection", "SOC Services"],
  },
  {
    slug: "managed-it",
    title: "Managed IT",
    description: "24x7 monitoring, responsive help desk, and infrastructure management that keeps operations running.",
    icon: Gauge,
    points: ["24x7 Monitoring", "Help Desk", "Infrastructure"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description: "Generative AI, workflow automation, and AI assistants that accelerate mission outcomes.",
    icon: Bot,
    points: ["Generative AI", "Workflow Automation", "AI Assistants"],
  },
  {
    slug: "disaster-recovery",
    title: "Disaster Recovery",
    description: "Business continuity, backup, and resiliency strategies that protect critical systems and data.",
    icon: DatabaseBackup,
    points: ["Business Continuity", "Backup", "Resiliency"],
  },
  {
    slug: "data-center",
    title: "Data Center",
    description: "Virtualization, storage, and networking expertise for modern, efficient data center operations.",
    icon: Server,
    points: ["Virtualization", "Storage", "Networking"],
  },
];

export interface WhyReason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseUs: WhyReason[] = [
  { title: "Veteran Leadership", description: "Founded and led by U.S. military veterans with mission discipline.", icon: Award },
  { title: "Federal Experience", description: "Deep track record delivering for government and regulated industries.", icon: Landmark },
  { title: "Cloud Specialists", description: "Azure-first engineers certified across cloud platforms.", icon: Cloud },
  { title: "Cybersecurity Experts", description: "Zero Trust and AI-driven defense from top security tools.", icon: Shield },
  { title: "Rapid Delivery", description: "Agile teams that consistently deliver ahead of schedule.", icon: Rocket },
  { title: "Mission Focused", description: "100% committed to the outcomes that matter to your mission.", icon: Target },
];

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  { title: "Discover", description: "Understand mission goals and current state.", icon: Search },
  { title: "Assess", description: "Evaluate risks, gaps, and opportunities.", icon: ClipboardCheck },
  { title: "Design", description: "Architect secure, scalable solutions.", icon: PenTool },
  { title: "Implement", description: "Deploy with agile precision.", icon: Rocket },
  { title: "Secure", description: "Harden with Zero Trust controls.", icon: Lock },
  { title: "Support", description: "24/7 monitoring and optimization.", icon: LifeBuoy },
];

export const homeIndustries: Industry[] = [
  { title: "Federal Government", description: "Modern, compliant IT for civilian and federal agencies.", icon: Landmark },
  { title: "Defense", description: "Mission-assured infrastructure for defense programs.", icon: Crosshair },
  { title: "Healthcare", description: "HIPAA-ready cloud and security for patient data.", icon: HeartPulse },
  { title: "Education", description: "Scalable, secure platforms for institutions.", icon: GraduationCap },
  { title: "Energy", description: "Resilient systems for critical energy infrastructure.", icon: Zap },
  { title: "Commercial", description: "Enterprise-grade solutions for private sector.", icon: Building2 },
  { title: "Government Agencies", description: "Tailored IT for state and local agencies.", icon: Building2 },
  { title: "Financial Services", description: "Regulated, resilient environments for financial data.", icon: Banknote },
];

export const techPartners = [
  "Microsoft Azure",
  "AWS",
  "Cisco",
  "VMware",
  "CrowdStrike",
  "Palo Alto",
  "Microsoft Defender",
  "Red Hat",
];

export const coreCompetencies = [
  "Azure-First Cloud Migration",
  "Zero Trust Cybersecurity",
  "Data Center Modernization",
  "Disaster Recovery & Continuity",
  "Managed Security Operations",
  "AI & Workflow Automation",
];

export const naicsCodes = ["541512", "541519", "518210", "541513", "541611"];

