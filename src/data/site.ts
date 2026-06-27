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
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "CyberCloudInfra modernized our agency cloud while keeping us fully compliant. Their team operates with true mission focus.",
    name: "Program Director",
    role: "Federal Civilian Agency",
  },
  {
    quote:
      "Their Zero Trust rollout was seamless. The veteran leadership brings a discipline and reliability we rarely see.",
    name: "CISO",
    role: "Defense Contractor",
  },
  {
    quote:
      "From migration to managed services, they have been a dependable partner that consistently delivers ahead of schedule.",
    name: "IT Director",
    role: "Healthcare System",
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
