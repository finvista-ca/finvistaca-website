import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ExportImportFinanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ExportImportFinance: React.FC<ExportImportFinanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Export & Import Finance Assistance",
    intro_title: "Export & Import Finance Assistance",
    intro_p1: "Empowering Global Business Through Smart Financial Solutions",
    intro_p2: "Expand your international business confidently with financing solutions tailored for importers and exporters.",
    overview: "FinvistaCA assists businesses in obtaining export and import finance facilities that improve liquidity, manage international transactions, and support global trade operations.",
    features: [],
    benefits: [
      { title: "International Financing", desc: "International trade financing", icon: "CheckCircle" },
      { title: "Export Support", desc: "Export working capital support", icon: "CheckCircle" },
      { title: "Import Financing", desc: "Import financing guidance", icon: "CheckCircle" },
      { title: "Foreign Trade Advisory", desc: "Foreign trade advisory", icon: "CheckCircle" },
      { title: "Documentation", desc: "Documentation assistance", icon: "CheckCircle" },
      { title: "Banking Coordination", desc: "Banking coordination", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Exporters",
      "Importers",
      "Trading Companies",
      "Manufacturers",
      "MSMEs"
    ],
    documentsRequired: [
      "Import Export Code (IEC)",
      "GST Registration",
      "Business Registration",
      "Financial Statements",
      "Trade Contracts",
      "Bank Statements",
      "KYC Documents"
    ],
    timeline: [
      "Consultation",
      "Business Evaluation",
      "Documentation Support",
      "Financing Strategy",
      "Lender Coordination",
      "Approval Assistance",
      "Ongoing Financial Support"
    ],
    faqs: [
      { question: "What is export finance?", answer: "Export finance provides working capital before or after shipment to support export activities." },
      { question: "What is import finance?", answer: "Import finance helps businesses purchase goods from overseas suppliers while managing payment obligations." },
      { question: "Is IEC registration compulsory?", answer: "Yes, for most import and export activities." },
      { question: "Which businesses are eligible?", answer: "Exporters, importers, manufacturers, trading companies, and MSMEs." },
      { question: "What financing options are available?", answer: "Packing Credit, Post Shipment Finance, Import Bills Financing, Buyer's Credit, Supplier's Credit, and more." },
      { question: "Can small exporters apply?", answer: "Yes." },
      { question: "Do banks require collateral?", answer: "Requirements vary by lender and loan product." },
      { question: "Can export incentives be combined with financing?", answer: "Yes, depending on eligibility and government policies." },
      { question: "What documents are needed?", answer: "IEC, GST registration, invoices, shipping documents, financial statements, and KYC." },
      { question: "Does FinvistaCA assist with documentation?", answer: "Yes." },
      { question: "Does FinvistaCA provide export loans directly?", answer: "No." },
      { question: "How does FinvistaCA help?", answer: "We simplify financing, documentation, and lender coordination." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
