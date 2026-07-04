import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface CertificationServicesProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const CertificationServices: React.FC<CertificationServicesProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Certification Services",
    intro_title: "Statutory & Financial Certifications",
    intro_p1: "Certain financial information needs to be certified for various purposes such as statutory requirements, regulatory mandates, tendering processes, or on the request of third parties.",
    intro_p2: "As part of our professional services, we provide prompt and accurate certification services to our clients, ensuring that all financial declarations meet the stringent standards required by authorities.",
    features: [
      { title: "Statutory Certifications", desc: "Certifications required under the Companies Act and Income Tax Act.", icon: "FileSignature" },
      { title: "Regulatory Compliance", desc: "Issuing certificates for RBI, FEMA, and other regulatory bodies.", icon: "Building" },
      { title: "Tender Certifications", desc: "Financial capacity and net worth certificates for government tenders.", icon: "Briefcase" },
      { title: "Third-Party Certificates", desc: "Custom certifications requested by banks, investors, or foreign entities.", icon: "FileText" }
    ],
    benefits: [
      { title: "Unquestionable Authority", desc: "Certificates backed by a practicing Chartered Accountant's seal.", icon: "BadgeCheck" },
      { title: "Timely Delivery", desc: "Fast turnaround times for urgent tender or loan requirements.", icon: "Clock" },
      { title: "100% Accuracy", desc: "Rigorous financial verification ensuring flawless certification.", icon: "ShieldCheck" }
    ],
    timeline: [
      "Requirement Gathering",
      "Document Verification",
      "Financial Analysis",
      "Draft Review",
      "Final Certification"
    ],
    faqs: [
{ q: "When do I need a CA certificate?", a: "You need it for bank loans, government tenders, regulatory filings, visa applications, and subsidies." },
    { q: "Can you certify financial projections?", a: "Yes, we review and certify projected financial statements for project financing." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
