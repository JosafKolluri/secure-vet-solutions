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
  Building2,
  HeartPulse,
  Banknote,
  Truck,
  Target,
  Rocket,
  LifeBuoy,
  Search,
  ClipboardCheck,
  Gauge,
  Headset,
  Code2,
  LineChart,
  Wrench,
  BadgeCheck,
  Handshake,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Offering {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  pillarSlug: "it-services" | "non-it-services" | "infrastructure-services" | "healthcare-services";
  body: string[];
}

export const offerings: Offering[] = [
  {
    slug: "it-consulting",
    title: "IT Consulting",
    pillarSlug: "it-services",
    icon: Target,
    description:
      "Advisory that turns strategy into a funded roadmap — architecture, vendors, and operating model scored against the constraints you actually have.",
    points: ["Current-state assessment", "Target architecture", "Build-vs-buy recommendations"],
    body: [
      "We start with the estate you run today: applications, integrations, contracts, and the compliance obligations that sit on top of them. The output is a sequenced roadmap leadership can fund — not a slide deck of options.",
      "Engagements typically cover cloud posture, security gaps, technical debt, and the staffing model required to operate what you build. Recommendations are written so a contracting officer or CIO can defend them.",
    ],
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    pillarSlug: "it-services",
    icon: Headset,
    description:
      "Full-lifecycle IT operations — service desk, patching, monitoring, and vendor management under clear SLAs.",
    points: ["Tiered service desk", "Proactive monitoring", "SLA-backed response"],
    body: [
      "Managed IT is the run function: tickets, patching, vendor tickets, and the monthly report your leadership actually reads. We operate against written SLAs with named escalation paths.",
      "You keep ownership of policy and budget. We own the work, the metrics, and the after-hours coverage so the environment does not depend on one hero employee.",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    pillarSlug: "it-services",
    icon: Code2,
    description:
      "Custom software for workflows that off-the-shelf tools cannot cover — built with secure SDLC and automated tests.",
    points: ["Secure SDLC", "Automated testing", "Maintainable codebases"],
    body: [
      "We build software when a commercial product would force you to change the mission to fit the tool. Scope is written against user journeys, data boundaries, and the compliance controls the system has to satisfy.",
      "Delivery runs in sprints with demos, backlog hygiene, and a handover that includes documentation and pipeline ownership — so you are not locked to the people who wrote the first commit.",
    ],
  },
  {
    slug: "application-development",
    title: "Application Development",
    pillarSlug: "it-services",
    icon: Cpu,
    description:
      "Modern web, API, and workflow applications built with secure SDLC practices and automated CI/CD pipelines.",
    points: ["Custom web & API builds", "Legacy modernization", "DevSecOps pipelines"],
    body: [
      "Application work covers greenfield products and the harder job: replacing or wrapping a legacy system without breaking the processes that still depend on it.",
      "Every build ships with CI/CD, environment parity, and access control designed in. We do not treat security as a phase after go-live.",
    ],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    pillarSlug: "it-services",
    icon: Cloud,
    description:
      "Landing zones, workload placement, and day-2 operations on Azure, AWS, and Google Cloud with cost and identity governed from day one.",
    points: ["Multi-cloud landing zones", "Identity & cost governance", "Day-2 operations"],
    body: [
      "Cloud services are the platform layer: accounts, networking, identity, logging, and the guardrails that keep a landing zone from drifting into a science project.",
      "We design for the region, authorization boundary, and budget you have — then operate it with FinOps reporting so spend is a managed input, not a surprise.",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    pillarSlug: "it-services",
    icon: Shield,
    description:
      "Zero-trust architecture, vulnerability management, and continuous monitoring aligned to NIST 800-53 and CMMC 2.0.",
    points: ["Zero-trust design", "SIEM & threat detection", "Compliance readiness"],
    body: [
      "Security work is scoped against the controls you have to answer for — NIST 800-53, CMMC 2.0, or your internal baseline — not a generic product catalog.",
      "We design identity, segmentation, detection, and response as one system, then leave you with evidence your assessor can read.",
    ],
  },
  {
    slug: "it-support",
    title: "IT Support",
    pillarSlug: "it-services",
    icon: LifeBuoy,
    description:
      "End-user and deskside support that restores productivity quickly — with ticket hygiene, knowledge articles, and after-hours coverage.",
    points: ["Tier 1–2 support", "Knowledge-centered service", "After-hours coverage"],
    body: [
      "IT support is the front door. We staff it with people who can close tickets, not just log them, and we write knowledge articles so the same incident is not rediscovered every quarter.",
      "Coverage models include on-site, remote, and surge deskside for go-lives and seasonal peaks. SLAs are published before the first ticket is opened.",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    pillarSlug: "it-services",
    icon: Rocket,
    description:
      "Program-level change: process, platform, and people sequenced so modernization actually lands in operations.",
    points: ["Process redesign", "Platform selection", "Change & adoption"],
    body: [
      "Transformation fails when technology is delivered without an operating model. We sequence process redesign, platform work, and staffing so each wave has an owner after go-live.",
      "The plan names what stops, what starts, and who is accountable. That is how a program survives contact with the people who still have a day job.",
    ],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    pillarSlug: "it-services",
    icon: LineChart,
    description:
      "Data platforms, pipelines, and dashboards that turn operational data into decisions leadership can act on.",
    points: ["Data warehousing", "ETL & pipelines", "Executive dashboards"],
    body: [
      "Analytics work starts with the decision, not the dashboard. We map the questions leadership actually asks, then build the warehouse, pipelines, and access model behind them.",
      "Quality, lineage, and refresh SLAs are part of the design. A chart nobody trusts is not an analytics program.",
    ],
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    pillarSlug: "it-services",
    icon: Search,
    description:
      "Independent technical judgment on architecture, vendors, and risk — written for executives and the teams who have to live with the decision.",
    points: ["Architecture reviews", "Vendor evaluation", "Risk & readiness"],
    body: [
      "Technology consulting is the independent read: is this design sound, is this vendor a fit, and what breaks if you proceed. Findings are specific, ranked, and tied to a recommended action.",
      "We work as an advisor, not a reseller. If a simpler path exists, we say so before you spend another quarter on the wrong one.",
    ],
  },
  {
    slug: "administrative-staffing",
    title: "Administrative Staffing",
    pillarSlug: "non-it-services",
    icon: ClipboardCheck,
    description:
      "Program assistants, records specialists, schedulers, and front-office staff ready for federal and commercial sites.",
    points: ["Program & office support", "Records management", "Cleared candidates available"],
    body: [
      "Administrative roles keep programs moving: calendars, records, correspondence, and the front desk that is the first impression of the agency or company.",
      "We recruit against a written scorecard, verify eligibility, and can source cleared candidates where the site requires it.",
    ],
  },
  {
    slug: "professional-staffing",
    title: "Professional Staffing",
    pillarSlug: "non-it-services",
    icon: Users,
    description:
      "Mid-career and specialist professionals — analysts, coordinators, and domain experts — screened for the actual work of the role.",
    points: ["Role scorecards", "Specialist screening", "Contract or direct-hire"],
    body: [
      "Professional staffing covers the roles that are not clerical and not licensed trades: analysts, coordinators, and specialists who need domain context on day one.",
      "Slates are small and qualified. We would rather send three people who fit than twelve resumes that do not.",
    ],
  },
  {
    slug: "business-operations",
    title: "Business Operations",
    pillarSlug: "non-it-services",
    icon: Workflow,
    description:
      "Back-office execution: reporting, coordination, vendor administration, and the operating cadence a program needs after award.",
    points: ["Program coordination", "Reporting cadence", "Vendor administration"],
    body: [
      "Operations support is the work that does not show up on an org chart until it is missing: status reports, invoice packages, meeting cadence, and the tracker everyone actually uses.",
      "We embed operators who take ownership of that cadence so your technical leads stay on delivery.",
    ],
  },
  {
    slug: "project-support",
    title: "Project Support",
    pillarSlug: "non-it-services",
    icon: Boxes,
    description:
      "PMO and project-control talent — schedulers, coordinators, and document controllers who keep milestones honest.",
    points: ["Schedule & document control", "PMO support", "Status reporting"],
    body: [
      "Project support staff keep the plan current: schedules, action logs, document control, and the weekly report that matches reality.",
      "We staff to the methodology you already run — waterfall, agile, or a hybrid federal PMO — rather than importing a binder nobody asked for.",
    ],
  },
  {
    slug: "finance-accounting-staffing",
    title: "Finance & Accounting Staffing",
    pillarSlug: "non-it-services",
    icon: Banknote,
    description:
      "Analysts, accountants, contract specialists, and audit support professionals for regulated environments.",
    points: ["Financial analysts", "Contract & procurement", "Audit support"],
    body: [
      "Finance and accounting placements are screened for the systems and regulations you use — not a generic bookkeeping screen.",
      "Typical roles include analysts, accountants, contract specialists, and audit support for both commercial close and federal funds.",
    ],
  },
  {
    slug: "human-resources-staffing",
    title: "Human Resources Staffing",
    pillarSlug: "non-it-services",
    icon: Handshake,
    description:
      "HR generalists, recruiters, and specialists for benefits, employee relations, and federal HR processes.",
    points: ["HR generalists", "Recruiting support", "Employee relations"],
    body: [
      "HR staffing covers generalists, recruiting coordinators, and specialists who already know the difference between a commercial handbook and a federal HR process.",
      "We credential against the sensitivity of the role and the volume of the pipeline you need to run.",
    ],
  },
  {
    slug: "customer-service-staffing",
    title: "Customer Service Staffing",
    pillarSlug: "non-it-services",
    icon: Headset,
    description:
      "Contact-center representatives and case workers trained on your systems, scripts, and quality standards.",
    points: ["Multichannel support", "Case management", "Bilingual talent"],
    body: [
      "Customer service teams are hired against your quality bar: handle time, accuracy, and the tone of the program — veteran services, benefits, or commercial support.",
      "We can staff bilingual roles and surge capacity when volume spikes, with training plans written before the first shift.",
    ],
  },
  {
    slug: "engineering-staffing",
    title: "Engineering Staffing",
    pillarSlug: "non-it-services",
    icon: Wrench,
    description:
      "Mechanical, electrical, civil, and quality engineers for infrastructure, facilities, and manufacturing programs.",
    points: ["Licensed engineers", "QA/QC specialists", "Field & site roles"],
    body: [
      "Engineering staffing is for licensed and degreed engineers who work in the field and in the office — facilities, infrastructure, manufacturing, and quality.",
      "We verify licensure, project history, and site requirements before a name hits your slate.",
    ],
  },
  {
    slug: "skilled-workforce-solutions",
    title: "Skilled Workforce Solutions",
    pillarSlug: "non-it-services",
    icon: Truck,
    description:
      "Warehouse, logistics, production, and skilled trades scaled up or down as program volume changes.",
    points: ["Warehouse & logistics", "Production support", "Shift-based scaling"],
    body: [
      "Skilled workforce solutions cover the volume roles: warehouse, logistics, production, and trades that have to flex with the mission.",
      "We scale by shift, credential against site rules, and stay on the account so turnover is managed instead of discovered.",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    pillarSlug: "infrastructure-services",
    icon: Cloud,
    description:
      "Cloud networking, compute, storage, and connectivity designed as infrastructure — not as a one-off account.",
    points: ["Cloud networking", "Compute & storage", "Hybrid connectivity"],
    body: [
      "Cloud infrastructure is the plumbing: VPCs, interconnects, identity boundaries, and the storage and compute patterns that applications actually run on.",
      "We treat it like a data center with better APIs — documented, monitored, and change-controlled.",
    ],
  },
  {
    slug: "data-center-services",
    title: "Data Center Services",
    pillarSlug: "infrastructure-services",
    icon: HardDrive,
    description:
      "Design, build, consolidation, and migration of data center environments — including hardware refresh and decommission.",
    points: ["Design & build-out", "Consolidation & refresh", "Structured decommission"],
    body: [
      "Data center work includes design, build, refresh, and the unglamorous decommission that still has to be clean for audit.",
      "We map power, cooling, racks, and circuits before anyone unbolts a server, then execute cutovers against a written runbook.",
    ],
  },
  {
    slug: "network-infrastructure",
    title: "Network Infrastructure",
    pillarSlug: "infrastructure-services",
    icon: Network,
    description:
      "LAN/WAN, SD-WAN, and wireless design and deployment with segmentation and performance baked in.",
    points: ["LAN / WAN / SD-WAN", "Wireless surveys", "Network segmentation"],
    body: [
      "Network infrastructure is designed for the traffic and the threat model: segmentation, QoS, wireless surveys, and WAN patterns that survive a site outage.",
      "We document every circuit and VLAN so the next change is not archaeology.",
    ],
  },
  {
    slug: "systems-engineering",
    title: "Systems Engineering",
    pillarSlug: "infrastructure-services",
    icon: Cpu,
    description:
      "Server, identity, and platform engineering that keeps the operating system layer consistent across sites.",
    points: ["Server platforms", "Identity & directory", "Configuration baselines"],
    body: [
      "Systems engineering is the OS and identity layer: directory, golden images, patch rings, and the configuration baseline that makes every site behave the same way.",
      "Drift is treated as an incident. We automate what we can and write runbooks for the rest.",
    ],
  },
  {
    slug: "infrastructure-modernization",
    title: "Infrastructure Modernization",
    pillarSlug: "infrastructure-services",
    icon: Rocket,
    description:
      "Wave-based refresh of aging infrastructure — hardware, network, and hosting — sequenced so operations never go dark.",
    points: ["Wave-based refresh", "Dependency mapping", "Cutover runbooks"],
    body: [
      "Modernization fails on dependencies, not on the new kit. We map ownership and couplings first, then move in waves with rollback that has been tested.",
      "The goal is a quieter environment after the project, not a more expensive version of the same outages.",
    ],
  },
  {
    slug: "infrastructure-support",
    title: "Infrastructure Support",
    pillarSlug: "infrastructure-services",
    icon: Headset,
    description:
      "Break-fix and lifecycle support for servers, network, and end-user infrastructure under published SLAs.",
    points: ["Break-fix SLAs", "Lifecycle management", "Vendor coordination"],
    body: [
      "Infrastructure support is the keep-the-lights-on contract: incidents, moves/adds/changes, and vendor tickets with a named owner.",
      "We report what broke, what we changed, and what is still at risk — in language operations leadership can use.",
    ],
  },
  {
    slug: "server-storage",
    title: "Server & Storage",
    pillarSlug: "infrastructure-services",
    icon: Server,
    description:
      "Compute and storage platforms — on-prem, hyperconverged, or cloud-attached — sized and operated to the workload.",
    points: ["Capacity planning", "SAN / NAS / object", "High availability"],
    body: [
      "Server and storage work is sized to the workload and the recovery target, not to a vendor’s latest chassis.",
      "We design for availability, snapshot/replication policy, and the path to retire hardware without a fire drill.",
    ],
  },
  {
    slug: "network-operations",
    title: "Network Operations",
    pillarSlug: "infrastructure-services",
    icon: Gauge,
    description:
      "Day-2 network operations: monitoring, change windows, and incident response for LAN, WAN, and wireless.",
    points: ["NOC-aligned ops", "Change control", "Incident response"],
    body: [
      "Network operations is the watch: monitoring, change windows, and the person who answers when a circuit dies at 2 a.m.",
      "We run it with the same discipline as a NOC — even when the contract is a single campus.",
    ],
  },
  {
    slug: "migration-services",
    title: "Migration Services",
    pillarSlug: "infrastructure-services",
    icon: Boxes,
    description:
      "Data center, cloud, and application migrations sequenced in waves with ownership and rollback defined before cutover.",
    points: ["Wave planning", "Dependency mapping", "Tested cutovers"],
    body: [
      "Migrations stall when nobody owns the dependency list. We build that list, assign owners, and move in waves that can roll back.",
      "Whether the target is another data center, a cloud region, or a colo, the method is the same: prove it in a lower environment, then execute.",
    ],
  },
  {
    slug: "infrastructure-monitoring",
    title: "Infrastructure Monitoring",
    pillarSlug: "infrastructure-services",
    icon: Gauge,
    description:
      "Observability for infrastructure — metrics, logs, alerts, and the runbooks that turn a page into an action.",
    points: ["Metrics & logging", "Alert hygiene", "Runbook-driven response"],
    body: [
      "Monitoring that pages everyone is noise. We instrument what matters, tune alerts against real incidents, and attach a runbook to every priority-one.",
      "Leadership gets a monthly view of availability and noise — so the tool is accountable, not just the night shift.",
    ],
  },
  {
    slug: "technical-field-services",
    title: "Technical Field Services",
    pillarSlug: "infrastructure-services",
    icon: Wrench,
    description:
      "On-site technicians for installs, IMAC, wireless surveys, and hands-and-eyes work across distributed locations.",
    points: ["IMAC & installs", "Hands-and-eyes", "Multi-site dispatch"],
    body: [
      "Field services put a technician on the floor: rack-and-stack, IMAC, wireless surveys, and hands-and-eyes for a remote engineer.",
      "We dispatch against a ticket, close with photos and asset updates, and cover multi-site footprints without a local FTE at every building.",
    ],
  },
  {
    slug: "healthcare-staffing",
    title: "Healthcare Staffing",
    pillarSlug: "healthcare-services",
    icon: Users,
    description:
      "Credentialed clinical and non-clinical professionals for hospitals, clinics, and federal health facilities.",
    points: ["Clinical & non-clinical", "Credentialing first", "Travel and permanent"],
    body: [
      "Healthcare staffing covers the full slate: nursing, allied health, physicians, and the non-clinical roles that keep a unit running.",
      "Every candidate arrives with licensure, certifications, and references verified so your leaders review qualified people, not paperwork.",
    ],
  },
  {
    slug: "clinical-staffing",
    title: "Clinical Staffing",
    pillarSlug: "healthcare-services",
    icon: HeartPulse,
    description:
      "RNs, LPNs, NPs, allied health, and locum coverage across med-surg, ICU, ER, ambulatory, and specialty units.",
    points: ["RN / LPN / NP", "Allied health", "Locum & travel"],
    body: [
      "Clinical staffing is unit-specific: med-surg, ICU, ER, imaging, respiratory, lab, and rehab — travel, locum, and permanent.",
      "We match specialty, shift, and privileging requirements before a name is submitted, then stay on credentialing until the clinician can work.",
    ],
  },
  {
    slug: "non-clinical-staffing",
    title: "Non-Clinical Staffing",
    pillarSlug: "healthcare-services",
    icon: ClipboardCheck,
    description:
      "Revenue cycle, HIM, patient access, and support roles that keep clinical teams focused on care.",
    points: ["Patient access", "HIM & coding", "Unit support roles"],
    body: [
      "Non-clinical staffing covers the roles behind the unit: registrars, coders, billers, transporters, and administrative support.",
      "These placements are screened for healthcare setting experience so orientation is measured in days, not months.",
    ],
  },
  {
    slug: "healthcare-it",
    title: "Healthcare IT",
    pillarSlug: "healthcare-services",
    icon: Cloud,
    description:
      "EHR, clinical systems, and healthcare infrastructure support with privacy and availability treated as clinical risk.",
    points: ["EHR & clinical systems", "HIPAA-aligned ops", "Integration support"],
    body: [
      "Healthcare IT is not generic IT with a different logo. Downtime and privacy failures are clinical events, and we staff and design accordingly.",
      "Work includes EHR support, interfaces, identity, and the infrastructure that clinics and hospitals actually run on.",
    ],
  },
  {
    slug: "healthcare-operations-support",
    title: "Healthcare Operations Support",
    pillarSlug: "healthcare-services",
    icon: Headset,
    description:
      "Operational support for clinics and hospitals — scheduling, coordination, and the administrative cadence of care delivery.",
    points: ["Clinic operations", "Scheduling support", "Program coordination"],
    body: [
      "Operations support keeps the clinic moving: scheduling, referral tracking, and the coordination work that is invisible until it stops.",
      "We embed people who already know healthcare workflows, then report against the metrics the facility actually manages.",
    ],
  },
  {
    slug: "administrative-healthcare-staffing",
    title: "Administrative Healthcare Staffing",
    pillarSlug: "healthcare-services",
    icon: BadgeCheck,
    description:
      "Practice managers, credentialing coordinators, and compliance staff for clinics and federal health sites.",
    points: ["Practice operations", "Credentialing", "Compliance support"],
    body: [
      "Administrative healthcare roles include practice managers, credentialing coordinators, and compliance staff who keep a clinic survey-ready.",
      "We screen for setting — FQHC, VA, hospital, or private practice — because the paperwork is not interchangeable.",
    ],
  },
  {
    slug: "medical-office-staffing",
    title: "Medical Office Staffing",
    pillarSlug: "healthcare-services",
    icon: Building2,
    description:
      "Front office, medical assistants, and billing staff for physician practices and outpatient clinics.",
    points: ["Front office", "Medical assistants", "Practice billing"],
    body: [
      "Medical office staffing is the practice floor: reception, MAs, and billing staff who know a clinic’s pace.",
      "We hire to the specialty and the EHR, so the first week is orientation, not a crash course in healthcare.",
    ],
  },
  {
    slug: "healthcare-technology-support",
    title: "Healthcare Technology Support",
    pillarSlug: "healthcare-services",
    icon: Cpu,
    description:
      "Deskside and clinical-device support for hospitals and clinics — workstations, peripherals, and the tickets that block a provider.",
    points: ["Clinical workstations", "Device support", "Provider-priority tickets"],
    body: [
      "Technology support in a care setting has a different clock. A frozen workstation in a clinic is not a low-priority ticket.",
      "We staff technicians who can work around patients, follow infection-control rules, and close the tickets that block providers first.",
    ],
  },
  {
    slug: "healthcare-workforce-solutions",
    title: "Healthcare Workforce Solutions",
    pillarSlug: "healthcare-services",
    icon: Stethoscope,
    description:
      "Program-level workforce design: mix of travel, locum, and permanent staff so coverage holds without burning out the core team.",
    points: ["Coverage modeling", "Credentialing pipeline", "Retention support"],
    body: [
      "Workforce solutions are the program, not a single req: how much travel, how much locum, and what permanent hiring has to look like to hold coverage.",
      "We build the pipeline and the credentialing machine so surge staffing does not collapse the week the contract starts.",
    ],
  },
];

export function getOffering(slug: string) {
  return offerings.find((o) => o.slug === slug);
}

export function offeringsForPillar(pillarSlug: Offering["pillarSlug"]) {
  return offerings.filter((o) => o.pillarSlug === pillarSlug);
}
