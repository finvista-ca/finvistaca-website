import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface AnnualComplianceLLPProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const AnnualComplianceLLP: React.FC<AnnualComplianceLLPProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Annual Compliance of LLP",
    intro_title: "LLP Statutory Maintenance",
    intro_p1: "Limited Liability Partnerships must adhere to strict annual compliance requirements set by the MCA. These include the filing of statements of account, solvency, and annual returns.",
    intro_p2: "Under the LLP Settlement Scheme and general provisions, it is imperative to file Form 8 and Form 11 correctly to avoid penalties and maintain active standing.",
    features: [
      { title: "LLP Form 11", desc: "Annual Return of Limited Liability Partnership.", icon: "FileText" },
      { title: "LLP Form 8", desc: "Statement of Account & Solvency (Annual or Interim).", icon: "BarChart" },
      { title: "Income Tax Return", desc: "Income tax return filing is mandatory every financial year.", icon: "Wallet" },
      { title: "DIR-3 KYC", desc: "Annual KYC filing for Designated Partners.", icon: "UserCheck" }
    ],
    benefits: [
      { title: "Avoid High Penalties", desc: "Prevent the ₹100 per day penalty for late filing.", icon: "ShieldAlert" },
      { title: "Legal Protection", desc: "Ensure the LLP stays in good standing without threat of striking off.", icon: "ShieldCheck" },
      { title: "Credibility", desc: "A fully compliant LLP attracts better vendor and client trust.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Collate Financials",
      "Prepare Form 11",
      "Audit (if applicable)",
      "Prepare Form 8",
      "Final Filing"
    ],
    faqs: [
{ q: "What is the penalty for not filing LLP forms?", a: "The failure penalty for LLPs defaulting in any sanctioned filing return is Rs.100 per day with no maximum limit." },
    { q: "What is Form 8?", a: "Form 8 is the Statement of Account and Solvency that must be filed annually by the LLP." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
