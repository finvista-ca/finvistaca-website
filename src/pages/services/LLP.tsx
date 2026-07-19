import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface LLPProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const LLP: React.FC<LLPProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Limited Liability Partnership (LLP)",
    intro_title: "Flexibility of partnership, protection of a company",
    intro_p1: "A Limited Liability Partnership (LLP) is an alternative corporate business form that offers the benefits of limited liability to its partners and allows them to organize their internal structure like a traditional partnership.",
    intro_p2: "It is a legally separated entity from its partners, providing protection to individual partners from the joint liability created by another partner's misconduct. It's highly preferred by professionals and micro/small enterprises.",
    features: [
      { title: "Partners", desc: "Minimum 2 designated partners.", icon: "Users" },
      { title: "DSC", desc: "Digital Signature Certificate for designated partners.", icon: "FileCheck" },
      { title: "Office Address", desc: "Utility bill and NOC for registered office.", icon: "Building" }
    ],
    benefits: [
      { title: "Limited Liability", desc: "Partners are not liable for the independent actions of other partners.", icon: "ShieldCheck" },
      { title: "No Audit Requirement", desc: "Audit is required only if turnover exceeds 40 Lakhs or contribution exceeds 25 Lakhs.", icon: "FileCheck" },
      { title: "Legal Entity", desc: "LLP has a separate legal entity distinct from its partners.", icon: "Building" }
    ],
    timeline: [
      "Name Approval",
      "Incorporation",
      "LLP Agreement"
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
