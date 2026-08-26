import itServices from "@/assets/dashboard-laptop.svg";
import nonItServices from "@/assets/non-it-professionals.svg";
import infrastructureServices from "@/assets/infrastructure-datacenter.svg";
import healthcareServices from "@/assets/healthcare-staff.svg";
import privateSector from "@/assets/who-serve-enterprise.svg";
import governmentSector from "@/assets/who-serve-government.svg";
import industryGovernment from "@/assets/industry-government.svg";
import industryHealthcare from "@/assets/industry-healthcare.svg";
import industryFinance from "@/assets/industry-finance.svg";
import industryManufacturing from "@/assets/industry-manufacturing.svg";
import industryEducation from "@/assets/industry-education.svg";
import industryEnterprise from "@/assets/industry-enterprise.svg";

export const pillarPhotos: Record<string, { src: string; alt: string }> = {
  "it-services": {
    src: itServices,
    alt: "",
  },
  "non-it-services": {
    src: nonItServices,
    alt: "",
  },
  "infrastructure-services": {
    src: infrastructureServices,
    alt: "",
  },
  "healthcare-services": {
    src: healthcareServices,
    alt: "",
  },
};

export const marketPhotos: Record<string, { src: string; alt: string }> = {
  "private-sector": {
    src: privateSector,
    alt: "",
  },
  "government-public-sector": {
    src: governmentSector,
    alt: "",
  },
};

export const industryPhotos: Record<string, { src: string; alt: string }> = {
  "Government & Public Sector": {
    src: industryGovernment,
    alt: "",
  },
  Healthcare: {
    src: industryHealthcare,
    alt: "",
  },
  "Financial Services": {
    src: industryFinance,
    alt: "",
  },
  Manufacturing: {
    src: industryManufacturing,
    alt: "",
  },
  Education: {
    src: industryEducation,
    alt: "",
  },
  "Commercial Enterprise": {
    src: industryEnterprise,
    alt: "",
  },
};
