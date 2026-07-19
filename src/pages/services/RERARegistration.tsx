import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface RERARegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const RERARegistration: React.FC<RERARegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "RERA Registration",
    intro_title: "Real Estate Compliance",
    intro_p1: "The Real Estate (Regulation and Development) Act (RERA) was introduced to bring transparency, accountability, and efficiency to the real estate sector. Builders, developers, and agents are required to obtain RERA registration.",
    intro_p2: "FinvistaCA offers comprehensive RERA registration and compliance services for developers, housing projects, commercial projects, and real estate agents across India, ensuring complete compliance with RERA guidelines.",
    features: [
      { title: "Project Registration", desc: "Mandatory registration of new real estate projects before marketing or selling.", icon: "Building" },
      { title: "Agent Registration", desc: "Official RERA registration for real estate agents and brokers.", icon: "Users" },
      { title: "Document Preparation", desc: "Drafting required affidavits, declarations, and legal project documents.", icon: "FileText" },
      { title: "Quarterly Updates", desc: "Assistance with mandatory quarterly project status updates on the RERA portal.", icon: "Clock" },
      { title: "Annual Filings", desc: "Filing annual audit reports and compliance certificates.", icon: "FileCheck" },
      { title: "Project Modification", desc: "Legal support for modifying project plans or timelines with RERA approval.", icon: "Settings" }
    ],
    benefits: [
      { title: "Buyer Confidence", desc: "Enhance trust and transparency, giving buyers confidence to invest.", icon: "HeartHandshake" },
      { title: "Legal Compliance", desc: "Minimize legal risks and avoid heavy penalties for non-registration.", icon: "ShieldCheck" },
      { title: "Better Funding", desc: "RERA registered projects attract easier funding from banks and investors.", icon: "TrendingUp" }
    ],
    timeline: [
      "Project Assessment",
      "Document Collation",
      "Application Filing",
      "RERA Verification",
      "Certificate Issuance"
    ],
    faqs: [
{ q: "Who needs RERA Registration?", a: "Builders, developers, and real estate agents dealing with eligible commercial or residential projects." },
    { q: "When should a project be registered?", a: "A project must be registered before any advertisement, marketing, booking, or selling takes place." },
    { q: "Are there ongoing compliances under RERA?", a: "Yes, developers must provide quarterly updates on project progress and file annual audit reports." },
    { q: "What happens if I don't register?", a: "Non-registration can attract a penalty of up to 10% of the estimated project cost and imprisonment." },
    { q: "Do real estate agents need RERA?", a: "Yes, every real estate agent facilitating the sale of RERA registered projects must have an agent registration." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
