import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface OnePersonCompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const OnePersonCompany: React.FC<OnePersonCompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "One Person Company (OPC)",
    intro_title: "Corporate benefits for solo founders",
    intro_p1: "A One Person Company (OPC) is a revolutionary concept introduced in the Companies Act, 2013 that allows a single entrepreneur to operate a corporate entity with limited liability protection.",
    intro_p2: "It combines the benefits of a sole proprietorship and a private limited company, making it ideal for solo founders who want the credibility of a company without needing a partner.",
    features: [
      { title: "Director & Nominee", desc: "1 Director and 1 Nominee required.", icon: "User" },
      { title: "DSC & DIN", desc: "Digital Signature and Director Identification Number.", icon: "FileCheck" },
      { title: "Office Address", desc: "Proof of registered office address.", icon: "Building" }
    ],
    benefits: [
      { title: "Single Ownership", desc: "Retain 100% control over your business.", icon: "User" },
      { title: "Limited Liability", desc: "Your personal assets are protected from business debts.", icon: "ShieldCheck" },
      { title: "Corporate Status", desc: "Enjoys the status of a separate legal entity.", icon: "Building" }
    ],
    timeline: [
      "Name Approval",
      "Filing Forms",
      "Incorporation"
    ],
    faqs: [
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." },
      { q: "Are there any hidden charges?", a: "No, Finvista believes in complete transparency. Our quoted professional fees are inclusive of all standard advisory, and any government fees are communicated upfront." },
      { q: "Will I get ongoing support after completion?", a: "Absolutely! Our team provides continuous support and updates on any compliance or regulatory changes affecting your business." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
