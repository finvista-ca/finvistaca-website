import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface NBFCComplianceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const NBFCCompliance: React.FC<NBFCComplianceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "NBFC Compliance",
    intro_title: "Strict RBI Regulations",
    intro_p1: "Lately, RBI compliances have become more complex for NBFCs. RBI has drafted new compliances for NBFCs and keeps them under their screening. A portion of the significant rules are Securitization of Standard Assets and Guidelines for Private Placement of NBFCs.",
    intro_p2: "NBFCs are actively involved in financial activities and are registered by the Reserve Bank of India. No NBFC can run their business without receiving the license from the Reserve Bank of India.",
    features: [
      { title: "CIC Registration", desc: "Mandatory membership in Credit Information Companies like CIBIL and Experian.", icon: "CreditCard" },
      { title: "FIU-IND Registration", desc: "Financial Intelligence Registration to prevent money laundering.", icon: "ShieldAlert" },
      { title: "Central KYC", desc: "Adopting CKYC registration to gather records for customers.", icon: "UserCheck" },
      { title: "NBS Returns", desc: "Quarterly returns (NBS-1, NBS-2, NBS-3) covering deposit and prudential norms.", icon: "FileText" },
      { title: "ALM Returns", desc: "Asset Liability Management returns for dynamic liquidity tracking.", icon: "BarChart" },
      { title: "AOC-4 & MGT-7", desc: "Standard ROC annual return filings for all registered companies.", icon: "FileCheck" }
    ],
    benefits: [
      { title: "RBI Compliance", desc: "Stay perfectly aligned with Reserve Bank of India mandates.", icon: "BadgeCheck" },
      { title: "Fraud Prevention", desc: "Recognize and check fraud activities during the lending process.", icon: "ShieldCheck" },
      { title: "Credit Trust", desc: "Ensure your customers and operations remain trustworthy and compliant.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Monthly Returns",
      "Quarterly NBS Filings",
      "Half-Yearly ALM",
      "Statutory Audit",
      "Annual ROC Filings"
    ],
    faqs: [
{ q: "What is CERSAI?", a: "CERSAI stands for Central Registry of Securitization and Asset Reconstruction, used to check fraud during lending." },
    { q: "Are NBFCs required to file standard ROC returns?", a: "Yes, Form AOC-4 NBFC and MGT-7 must be filed within 30 days and 60 days of the AGM respectively." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
