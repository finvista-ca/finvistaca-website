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

    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
