import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface NRITaxationServicesProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const NRITaxationServices: React.FC<NRITaxationServicesProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "NRI Taxation Services",
    intro_title: "Tax Solutions for Non-Residents",
    intro_p1: "Managing tax obligations as a Non-Resident Indian (NRI) can be complex due to varying residential status, foreign income, Indian-source income, capital gains, and Double Taxation Avoidance Agreements (DTAA).",
    intro_p2: "Whether you earn rental income, sell property, receive investments, or maintain financial assets in India, proper tax planning is essential. Finvista offers specialized NRI Taxation Services to simplify compliance and optimize your tax liabilities both in India and abroad.",
    features: [
      { title: "Residential Status Check", desc: "Accurate determination of your residential status under FEMA and Income Tax Act.", icon: "UserCheck" },
      { title: "NRI Income Tax Returns", desc: "Filing of income tax returns for Indian-source income like rent, interest, or dividends.", icon: "FileText" },
      { title: "Capital Gains Computation", desc: "Calculating tax on the sale of Indian real estate, mutual funds, or shares.", icon: "TrendingUp" },
      { title: "TDS Advisory", desc: "Guidance on lower TDS deduction certificates for property sales.", icon: "Wallet" },
      { title: "Repatriation Advisory", desc: "Assistance with remitting funds outside India, including Form 15CA/15CB.", icon: "Globe" },
      { title: "DTAA Benefits", desc: "Claiming tax relief under applicable tax treaties between India and your country of residence.", icon: "ShieldCheck" }
    ],
    benefits: [
      { title: "Tax Optimization", desc: "Legally minimize your tax liabilities on Indian investments and properties.", icon: "TrendingDown" },
      { title: "Regulatory Compliance", desc: "Ensure strict adherence to complex FEMA and Indian Income Tax regulations.", icon: "BadgeCheck" },
      { title: "Smooth Repatriation", desc: "Transfer funds abroad without regulatory hurdles or unnecessary tax leakages.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Status Determination",
      "Income Assessment",
      "DTAA Applicability",
      "Tax Computation",
      "Return Filing",
      "Repatriation Support"
    ],
    faqs: [
{ q: "Do NRIs need to file tax returns in India?", a: "Yes, if your income earned or accrued in India exceeds the basic exemption limit (Rs. 2.5 Lakhs)." },
    { q: "Is foreign income taxable in India for NRIs?", a: "No, if you qualify as an NRI, your income earned outside India is not taxable in India." },
    { q: "What is the TDS rate on property sales by an NRI?", a: "The buyer must deduct TDS at 20% (for long-term capital gains) or 30% (short-term) plus applicable surcharge and cess." },
    { q: "Can I claim a refund for high TDS deducted on my property sale?", a: "Yes, you can claim a refund by filing an income tax return if your actual tax liability is lower than the TDS deducted." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
