import itServices from "@/assets/dashboard-laptop.jpg";
import nonItServices from "@/assets/non-it-professionals.jpg";
import infrastructureServices from "@/assets/infrastructure-datacenter.jpg";
import healthcareServices from "@/assets/healthcare-staff.jpg";
import privateSector from "@/assets/who-serve-enterprise.jpg";
import governmentSector from "@/assets/who-serve-government.jpg";
import industryGovernment from "@/assets/industry-government.jpg";
import industryHealthcare from "@/assets/industry-healthcare.jpg";
import industryFinance from "@/assets/industry-finance.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryEducation from "@/assets/industry-education.jpg";
import industryEnterprise from "@/assets/industry-enterprise.jpg";
import pageHeroAtmosphere from "@/assets/page-hero-atmosphere.jpg";

export const pageHeroImage = pageHeroAtmosphere;

export const pillarPhotos: Record<string, { src: string; alt: string }> = {
  "it-services": {
    src: itServices,
    alt: "Engineer reviewing cybersecurity and cloud operations dashboards on a laptop",
  },
  "non-it-services": {
    src: nonItServices,
    alt: "HR, finance, and operations professionals collaborating in an office",
  },
  "infrastructure-services": {
    src: infrastructureServices,
    alt: "Infrastructure engineer working between server racks in a data center",
  },
  "healthcare-services": {
    src: healthcareServices,
    alt: "Healthcare professionals collaborating in a hospital corridor",
  },
};

export const marketPhotos: Record<string, { src: string; alt: string }> = {
  "private-sector": {
    src: privateSector,
    alt: "Enterprise team collaborating in a modern glass office",
  },
  "government-public-sector": {
    src: governmentSector,
    alt: "Public-sector professionals in a briefing meeting",
  },
};

export const industryPhotos: Record<string, { src: string; alt: string }> = {
  "Government & Public Sector": {
    src: industryGovernment,
    alt: "Civic office building at dusk",
  },
  Healthcare: {
    src: industryHealthcare,
    alt: "Clinician approaching a modern hospital entrance",
  },
  "Financial Services": {
    src: industryFinance,
    alt: "Financial operations professionals at dual monitors",
  },
  Manufacturing: {
    src: industryManufacturing,
    alt: "Technician reviewing a tablet on a manufacturing floor",
  },
  Education: {
    src: industryEducation,
    alt: "University computer lab with students and an IT specialist",
  },
  "Commercial Enterprise": {
    src: industryEnterprise,
    alt: "Glass headquarters campus at dusk",
  },
};
