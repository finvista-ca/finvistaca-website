import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface StatutoryAuditProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const StatutoryAudit: React.FC<StatutoryAuditProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Statutory Audit",
    intro_title: "Ensure Regulatory Compliance",
    intro_p1: "Statutory Audit is an audit which is prescribed by different statutes like Companies Act, Income Tax, GST Act, and Reserve Bank of India. A Chartered Accountant conducts these audits as per the specific statutory requirements.",
    intro_p2: "It aims at achieving full compliance with regulations and corporate laws alongside financial records. Our audit approach is based on compliance issues tailored to your business specifics and industry peculiarities.",
    features: [
      { title: "Private Limited Companies", desc: "Mandatory yearly statutory audits for all private entities.", icon: "Building" },
      { title: "Public Limited Companies", desc: "Comprehensive statutory audits for public corporations.", icon: "Landmark" },
      { title: "Section 8 Companies", desc: "Specialized audits for non-profit and charitable organizations.", icon: "ShieldCheck" },
      { title: "Bank Branch Audit", desc: "Statutory audits conducted for bank branches under RBI guidelines.", icon: "Briefcase" },
      { title: "LLP & Partnerships", desc: "Audits ensuring financial transparency for partnerships.", icon: "Users" },
      { title: "Trust Audit", desc: "Dedicated audits for trusts ensuring fund utilization compliance.", icon: "FileText" }
    ],
    benefits: [
      { title: "Regulatory Compliance", desc: "Stay strictly compliant with the Companies Act, Income Tax, and RBI.", icon: "BadgeCheck" },
      { title: "Financial Transparency", desc: "Ensure your financial records portray a true and fair view of the business.", icon: "Search" },
      { title: "Investor Confidence", desc: "Build immense trust among stakeholders, banks, and investors.", icon: "TrendingUp" },
      { title: "Risk Identification", desc: "Proactively identify internal control risks and financial discrepancies.", icon: "ShieldAlert" }
    ],
    timeline: [
      "Pre-Audit Consultation",
      "Audit Strategy & Planning",
      "System & Control Review",
      "Substantive Testing",
      "Audit Report Issuance"
    ],
    faqs: [
{ q: "Who needs a statutory audit?", a: "Companies, LLPs, trusts, and bank branches depending on specific turnover or statutory mandates require a statutory audit." },
    { q: "Can any accountant perform a statutory audit?", a: "No, a statutory audit must be conducted by a qualified Chartered Accountant holding a valid certificate of practice." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
