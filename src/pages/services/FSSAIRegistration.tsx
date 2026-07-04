import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface FSSAIRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const FSSAIRegistration: React.FC<FSSAIRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "FSSAI Registration",
    intro_title: "Food Safety & Standards Authority",
    intro_p1: "FSSAI Registration is a mandatory license for every food business operator involved in the manufacturing, processing, packaging, storage, distribution, or sale of food products in India.",
    intro_p2: "At Finvista, we assist businesses in obtaining Basic Registration, State License, and Central License based on their turnover, nature of business, and operational scale. Our experts manage the complete registration process, documentation, and compliance requirements.",
    features: [
      { title: "Basic Registration", desc: "For small food businesses with an annual turnover of up to Rs. 12 lakhs.", icon: "CheckCircle" },
      { title: "State License", desc: "For mid-sized businesses with a turnover between Rs. 12 lakhs and 20 crores.", icon: "Building" },
      { title: "Central License", desc: "For large businesses with a turnover exceeding Rs. 20 crores or importing food.", icon: "Globe" },
      { title: "License Renewal", desc: "Assistance with timely renewal before the expiration of your current license.", icon: "Clock" },
      { title: "License Modification", desc: "Update your existing FSSAI license for new products or premises.", icon: "Settings" },
      { title: "Compliance Support", desc: "Ongoing guidance to ensure you meet all food safety and standards.", icon: "ShieldCheck" }
    ],
    benefits: [
      { title: "Legal Compliance", desc: "Avoid severe penalties by operating within the legal framework.", icon: "BadgeCheck" },
      { title: "Business Credibility", desc: "Build immense trust among your consumers regarding food quality.", icon: "HeartHandshake" },
      { title: "Business Growth", desc: "Easily expand into new outlets or register on food delivery platforms.", icon: "TrendingUp" }
    ],
    timeline: [
      "Consultation",
      "Document Collection",
      "Application Preparation",
      "Submission to FSSAI",
      "License Issued"
    ],
    faqs: [
{ q: "Is FSSAI Registration mandatory?", a: "Yes, it is mandatory for every food business operator, including restaurants, cloud kitchens, bakers, and grocery stores." },
    { q: "Which license do I need?", a: "The type of license (Basic, State, or Central) depends purely on your annual turnover and scale of operations." },
    { q: "How long does registration take?", a: "Basic registration usually takes 7-10 days, while State and Central licenses may take 30-60 days." },
    { q: "What happens if I don't renew my FSSAI license?", a: "Operating with an expired license can lead to heavy fines and closure of the business." },
    { q: "Do I need a separate license for multiple outlets?", a: "Yes, a separate license is required for each premise, and a Central License is needed for the head office." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
