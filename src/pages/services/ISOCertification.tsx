import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ISOCertificationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ISOCertification: React.FC<ISOCertificationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "ISO Certification",
    intro_title: "International Standards Compliance",
    intro_p1: "ISO Certification demonstrates that an organization follows internationally recognized standards for quality management, operational efficiency, customer satisfaction, or occupational safety.",
    intro_p2: "Achieving ISO certification enhances business credibility, strengthens customer confidence, and increases opportunities. FinvistaCA assists businesses in obtaining various ISO certifications with complete support from gap assessment to certification.",
    features: [
      { title: "ISO 9001 (QMS)", desc: "Quality Management System certification for consistent quality of products and services.", icon: "CheckCircle" },
      { title: "ISO 14001 (EMS)", desc: "Environmental Management System certification for environmental responsibility.", icon: "Leaf" },
      { title: "ISO 27001 (ISMS)", desc: "Information Security Management System for robust data security.", icon: "Lock" },
      { title: "ISO 45001 (OHSAS)", desc: "Occupational Health and Safety management for secure workplaces.", icon: "ShieldCheck" },
      { title: "Gap Assessment", desc: "Detailed analysis to identify areas needing improvement before certification.", icon: "Search" },
      { title: "Audit Assistance", desc: "Complete coordination during the final certification audit.", icon: "Users" }
    ],
    benefits: [
      { title: "Business Credibility", desc: "Demonstrate global standards and build immense trust among clients.", icon: "BadgeCheck" },
      { title: "Operational Efficiency", desc: "Improve internal processes and reduce wastage and operational costs.", icon: "TrendingUp" },
      { title: "Global Market Access", desc: "Unlock new opportunities in domestic and international markets.", icon: "Globe" }
    ],
    timeline: [
      "Gap Assessment",
      "Documentation",
      "Implementation",
      "Internal Audit",
      "Final Certification Audit"
    ],
    faqs: [
{ q: "Why do I need ISO Certification?", a: "It proves that your business follows global standards, which is often a prerequisite for government tenders and international trade." },
    { q: "How long is an ISO certificate valid?", a: "An ISO certificate is typically valid for 3 years, subject to successful annual surveillance audits." },
    { q: "Which ISO standard is best for my business?", a: "ISO 9001 is universally applicable. Specific standards like 27001 or 14001 depend on your industry and requirements." },
    { q: "What is the certification process?", a: "It involves gap analysis, documentation, implementation, internal audit, and a final external audit by the certification body." },
    { q: "Does FinvistaCA provide implementation support?", a: "Yes, we provide end-to-end guidance from documentation to final certification assistance." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
