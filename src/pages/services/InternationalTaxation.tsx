import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface InternationalTaxationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const InternationalTaxation: React.FC<InternationalTaxationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "International Taxation",
    intro_title: "Global Tax Planning & Compliance",
    intro_p1: "International taxation governs the tax implications of cross-border transactions, foreign investments, overseas income, and international business operations. With increasing globalization, dealing with multiple tax jurisdictions makes it essential to comply with both Indian and international tax regulations.",
    intro_p2: "Proper international tax planning helps avoid double taxation, minimizes tax risks, and ensures compliance with treaties. At FinvistaCA, our experienced professionals help businesses and individuals navigate complex international tax regulations while maximizing tax efficiency.",
    features: [
      { title: "DTAA Advisory", desc: "Expert guidance on Double Taxation Avoidance Agreements to prevent dual tax liabilities.", icon: "Globe" },
      { title: "Cross Border Tax Planning", desc: "Strategic structuring of cross-border transactions for optimal tax efficiency.", icon: "TrendingUp" },
      { title: "Withholding Tax Advisory", desc: "Assistance with TDS on foreign remittances and royalty payments.", icon: "Wallet" },
      { title: "FEMA Compliance", desc: "Ensuring complete adherence to Foreign Exchange Management Act guidelines.", icon: "ShieldCheck" },
      { title: "Permanent Establishment", desc: "Risk assessment and advisory on Permanent Establishment (PE) exposures in India.", icon: "Building" },
      { title: "Foreign Investment Structuring", desc: "Structuring inbound and outbound investments for maximum regulatory compliance.", icon: "Briefcase" }
    ],
    benefits: [
      { title: "Cross Border Compliance", desc: "Ensure 100% adherence to international and domestic tax laws.", icon: "ShieldCheck" },
      { title: "Reduced Tax Risk", desc: "Proactively identify and mitigate international tax risks and penalties.", icon: "ShieldAlert" },
      { title: "DTAA Benefits", desc: "Leverage tax treaties to legally minimize overall tax liabilities.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Consultation",
      "Requirement Analysis",
      "Tax Planning",
      "Structuring",
      "Compliance Implementation",
      "Ongoing Advisory"
    ],
    faqs: [{ q: "What is DTAA?", a: "DTAA (Double Taxation Avoidance Agreement) is a tax treaty between two countries that prevents the same income from being taxed twice." },
    { q: "How is foreign income taxed in India?", a: "Resident Indians are taxed on their global income, while Non-Residents are only taxed on income earned or accrued in India." },
    { q: "What is Permanent Establishment (PE)?", a: "A PE is a fixed place of business in India through which a foreign enterprise conducts its business, triggering Indian tax liabilities." },
    { q: "Are there withholding taxes on foreign payments?", a: "Yes, remittances made to non-residents (like royalties, technical fees, or interest) are subject to specific withholding tax rates." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
