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

    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
