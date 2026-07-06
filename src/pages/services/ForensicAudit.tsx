import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ForensicAuditProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ForensicAudit: React.FC<ForensicAuditProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Forensic Audit",
    intro_title: "Investigating Financial Fraud",
    intro_p1: "A forensic audit is an evaluation and examination of an individual's or a firm's financial records to stem up evidence that can be used in a legal proceeding or court of law. It focuses on reconstructing past financial transactions.",
    intro_p2: "It involves the investigation of embezzlement, bribery, extortion, financial statement fraud, and asset misappropriation. Our auditors act as expert witnesses during trial proceedings.",
    features: [
      { title: "Corruption & Bribery", desc: "Investigating illegitimate use of office, extortion, and conflict of interest.", icon: "ShieldAlert" },
      { title: "Asset Misappropriation", desc: "Detecting fake invoices, theft of inventory, and payments to non-existing entities.", icon: "Search" },
      { title: "Financial Statement Fraud", desc: "Uncovering deliberate misstatement or omission of financial data.", icon: "FileX" },
      { title: "Evidence Gathering", desc: "Using computer-assisted audit techniques to harvest court-admissible evidence.", icon: "Database" },
      { title: "Court Proceedings", desc: "Providing litigation assistance and expert witness testimony in trials.", icon: "Landmark" },
      { title: "Data Analysis", desc: "Applying Forensic Data Analysis (FDA) and Fraud Triangle metrics.", icon: "BarChart" }
    ],
    benefits: [
      { title: "Fraud Prevention", desc: "Helps in fraud identification and prevents future occurrences through stronger controls.", icon: "ShieldCheck" },
      { title: "Legal Evidence", desc: "Provides solid, legally sound evidence admissible in court proceedings.", icon: "BadgeCheck" },
      { title: "Independent Objectivity", desc: "An external forensic auditor is far more objective than internal accountants.", icon: "Users" }
    ],
    timeline: [
      "Accepting Investigation",
      "Planning Strategy",
      "Gathering Evidence",
      "Reporting & Documentation",
      "Court Proceedings"
    ],
    faqs: [{ q: "What is a forensic audit?", a: "It is an examination of financial records to gather evidence for legal proceedings, typically involving fraud or embezzlement." },
    { q: "Can a forensic auditor testify in court?", a: "Yes, forensic auditors frequently provide litigation assistance and serve as expert witnesses in court trials." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
