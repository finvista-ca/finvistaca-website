import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ProducerCompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ProducerCompany: React.FC<ProducerCompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Producer Company",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
    features: [
      { title: "Producer Company Registration", desc: "Incorporation of a company for farmers, agriculturists, and artisans.", icon: "Building" },
      { title: "MoA & AoA Drafting", desc: "Specialized drafting focusing on agricultural and production objectives.", icon: "FileSignature" },
      { title: "Statutory Licenses", desc: "Acquiring FSSAI, APEDA, or other agricultural export/import licenses.", icon: "ShieldCheck" },
      { title: "NABARD Subsidy Assistance", desc: "Consulting on government schemes, grants, and subsidies.", icon: "Wallet" },
      { title: "Compliance Management", desc: "Managing mandatory ROC filings and audits.", icon: "TrendingUp" }
    ],
    benefits: [
      { title: "Farmer Empowerment", desc: "Helps farmers pool resources and improve economies of scale.", icon: "Users" },
      { title: "Tax Exemptions", desc: "Certain agricultural incomes are exempt from tax.", icon: "BadgeCheck" },
      { title: "Government Subsidies", desc: "Highly favored by the government for various agricultural subsidies and schemes.", icon: "TrendingUp" },
      { title: "Limited Liability", desc: "Members' liability is limited to their unpaid share capital.", icon: "ShieldCheck" }
    ],
    timeline: [
      "Gather KYC for 10+ Producer Members / 5+ Directors",
      "DSC & DIN Generation",
      "Name Approval (must end with 'Producer Company Limited')",
      "Filing SPICe+ Forms",
      "Opening Bank Account and applying for Agricultural Licenses"
    ],
    faqs: [
      { q: "Who can form a Producer Company?", a: "Only 'Primary Producers' (farmers, agriculturists, handloom weavers, etc.) or Producer Institutions can form a Producer Company." },
      { q: "What is the minimum member requirement?", a: "It requires a minimum of 10 individuals, or 2 producer institutions, or a combination, along with a minimum of 5 directors." },
      { q: "Can a Producer Company be converted to a Public Company?", a: "Yes, but only under specific provisions of the Companies Act after passing special resolutions." },
      { q: "What is the minimum capital requirement?", a: "A Producer Company must have a minimum paid-up capital of Rs. 5 Lakhs." },
      { q: "Are Producer Companies exempt from Income Tax?", a: "While agricultural income is generally exempt under Section 10(1), income derived from processing or trading may be taxable depending on specific business activities." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
