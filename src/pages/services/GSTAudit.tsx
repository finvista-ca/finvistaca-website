import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTAuditProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTAudit: React.FC<GSTAuditProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST Audit",
    intro_title: "Goods & Services Tax Verification",
    intro_p1: "Audit under GST is the process of examination of records, returns and other documents maintained by a taxable person. The purpose is to verify the correctness of turnover declared, taxes paid, and input tax credit availed.",
    intro_p2: "It is essential to assess the compliance with the provisions of the GST Act. We conduct detailed verifications to ensure your business remains perfectly compliant with complex GST regulations.",
    features: [
      { title: "Turnover Verification", desc: "Detailed examination of outward supplies and declared turnover.", icon: "BarChart" },
      { title: "Input Tax Credit (ITC)", desc: "Thorough assessment of ITC availed to ensure strict compliance.", icon: "Wallet" },
      { title: "Taxes Paid & Refunded", desc: "Verifying the correctness of all taxes paid and refunds claimed.", icon: "FileCheck" },
      { title: "Documentation Review", desc: "Complete audit of sales, purchases, and related GST records.", icon: "Search" }
    ],
    benefits: [
      { title: "Ensure GST Compliance", desc: "Maintain 100% adherence to all GST laws and provisions.", icon: "ShieldCheck" },
      { title: "Prevent Reversals", desc: "Identify ineligible ITC early to prevent heavy interest reversals later.", icon: "ShieldAlert" },
      { title: "Smooth Assessments", desc: "A well-audited GST record ensures smooth departmental assessments.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Invoice Collation",
      "ITC Reconciliation",
      "Turnover Matching",
      "Draft Audit Report",
      "Final Submission"
    ],
    faqs: [{ q: "What is the primary purpose of a GST audit?", a: "To verify the correctness of turnover declared, taxes paid, refund claimed, and input tax credit availed." },
    { q: "What documents are required for a GST audit?", a: "Sales invoices, purchase invoices, filed GST returns, and corresponding books of accounts." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
