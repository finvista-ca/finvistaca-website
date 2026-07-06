import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTRegistration: React.FC<GSTRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST Registration",
    intro_title: "Seamless Business Registration",
    intro_p1: "GST is the product of the biggest tax reform in India which has tremendously improved ease of doing business and increasing the taxpayer base in India by including millions of small businesses. Tax complexities would be reduced due to the abolishing and subsuming of multiple taxes into a single, simple system.",
    intro_p2: "The new GST regime mandates that all entities involved in buying or selling goods or providing services or both are required to register and obtain GSTIN. Registration is mandatory once the entity crosses a minimum threshold turnover or when an individual starts a new business that is expected to cross the prescribed turnover.",
    features: [
      { title: "Aggregate Turnover", desc: "Service providers > 20 Lakhs. Exclusive goods supply > 40 Lakhs.", icon: "BarChart" },
      { title: "Inter-state Business", desc: "Mandatory for inter-state supply of goods irrespective of turnover.", icon: "Globe" },
      { title: "E-commerce Platform", desc: "Mandatory for individuals supplying through e-commerce platforms like Amazon/Flipkart.", icon: "CreditCard" },
      { title: "Casual Taxable Person", desc: "For individuals undertaking supply seasonally or intermittently via stalls.", icon: "Clock" },
      { title: "Voluntary Registration", desc: "Register voluntarily. Can be surrendered at any time if required.", icon: "UserPlus" },
      { title: "Composition Scheme", desc: "For taxpayers with turnover < 1.5 Crore to pay a flat GST rate.", icon: "TrendingUp" }
    ],
    benefits: [
      { title: "Legal Recognition", desc: "Obtain your unique GSTIN and operate your business legally.", icon: "BadgeCheck" },
      { title: "Input Tax Credit", desc: "Become eligible to claim input tax credit on business purchases.", icon: "Wallet" },
      { title: "Inter-state Trade", desc: "Expand your business freely across different states in India.", icon: "Globe" },
      { title: "E-commerce Ready", desc: "Sell seamlessly on major e-commerce platforms.", icon: "CreditCard" }
    ],
    timeline: [
      "Determine Eligibility",
      "Document Collection",
      "Filing Application",
      "Officer Verification",
      "GSTIN Issuance"
    ],
    faqs: [{ q: "What is the turnover limit for GST registration?", a: "For services, it is Rs. 20 Lakhs (10 Lakhs for special category states). For exclusive goods supply, it is Rs. 40 Lakhs." },
    { q: "Can I register voluntarily if my turnover is below the limit?", a: "Yes, any entity can obtain GST registration voluntarily, and it can be surrendered at any time." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." },
      { q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." },
      { q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
