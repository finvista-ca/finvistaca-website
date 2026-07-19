import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface PartnershipProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const Partnership: React.FC<PartnershipProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Partnership Firm Registration",
    intro_title: "Grow your business together",
    intro_p1: "A Partnership Firm is a popular business structure where two or more individuals manage and operate a business according to the terms and objectives set out in a Partnership Deed.",
    intro_p2: "It is an ideal choice for small to medium-sized businesses due to its ease of formation and minimal compliance requirements. The partners share the responsibilities, profits, and losses of the business.",
    features: [
      { title: "Partners", desc: "Minimum 2 partners required.", icon: "Users" },
      { title: "Partnership Deed", desc: "A drafted and notarized deed outlining terms.", icon: "FileSignature" },
      { title: "KYC Documents", desc: "PAN, Aadhaar, and address proof of all partners.", icon: "FileText" }
    ],
    benefits: [
      { title: "Quick Setup", desc: "One of the easiest and most affordable business structures to register.", icon: "Zap" },
      { title: "Shared Responsibility", desc: "Risk, workload, and financial burdens are shared among partners.", icon: "Users" },
      { title: "More Capital", desc: "Multiple partners can pool their resources for better funding.", icon: "TrendingUp" }
    ],
    timeline: [
      "Drafting Deed",
      "Notarization",
      "PAN & TAN"
    ],
    faqs: [
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." },
      { q: "Are there any hidden charges?", a: "No, FinvistaCA believes in complete transparency. Our quoted professional fees are inclusive of all standard advisory, and any government fees are communicated upfront." },
      { q: "Will I get ongoing support after completion?", a: "Absolutely! Our team provides continuous support and updates on any compliance or regulatory changes affecting your business." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
