import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface Section8CompanyComplianceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const Section8CompanyCompliance: React.FC<Section8CompanyComplianceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Section 8 Company Compliance",
    intro_title: "NGO & Non-Profit Compliance",
    intro_p1: "The Companies Act, 2013 has made it mandatory for all the Section 8 Companies to adhere to Compliance with the MCA. The purpose of forming Section 8 Company is to promote, encourage, and nourish activities related to art, science, sports, commerce, charitable activities, etc.",
    intro_p2: "These Companies are not liable to give income or dividend to its members. Adherence to annual compliances is necessary to maintain their special tax-exempt status.",
    features: [
      { title: "Auditor Appointment", desc: "Compulsory to appoint an auditor to take care of financial recordings every year.", icon: "FileSignature" },
      { title: "Register Maintenance", desc: "Maintaining statutory records regarding members, loans, charges, and investments.", icon: "BookOpen" },
      { title: "Board & Annual Meetings", desc: "Holding Board Meetings twice a year and an AGM before 30th September.", icon: "Users" },
      { title: "Form AOC-4", desc: "Filing financial statements within 30 days of the AGM.", icon: "BarChart" },
      { title: "Form MGT-7", desc: "Filing the annual return within 60 days of the AGM.", icon: "FileText" },
      { title: "Tax Exemptions", desc: "Registration under Section 12A and 80G for tax benefits.", icon: "Wallet" }
    ],
    benefits: [
      { title: "Better Credibility", desc: "Gives the company better credibility among donors and society.", icon: "BadgeCheck" },
      { title: "Avoid Legal Trouble", desc: "Protects the company and its chiefs from detainment and fines.", icon: "ShieldCheck" },
      { title: "Customer Trust", desc: "Works in the direction of forming immense trust amongst customers.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Board Meetings",
      "Director's Report",
      "AGM (By 30th Sept)",
      "AOC-4 (30 days of AGM)",
      "MGT-7 (60 days of AGM)"
    ],
    faqs: [{ q: "Is it mandatory to hold an AGM for a Section 8 company?", a: "Yes, an Annual General Meeting should be held yearly on or before 30th September." },
    { q: "What are the penalties for non-compliance?", a: "The Central Government may revoke the permit, and fines can stretch from ten lakh to one crore rupees." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
