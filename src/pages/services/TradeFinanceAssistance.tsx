import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface TradeFinanceAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const TradeFinanceAssistance: React.FC<TradeFinanceAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Trade Finance Assistance",
    intro_title: "Trade Finance Assistance",
    intro_p1: "Supporting Domestic and International Business Transactions",
    intro_p2: "Strengthen your business operations with expert guidance on trade finance solutions designed to improve cash flow and facilitate secure transactions.",
    overview: "Trade finance plays a vital role in enabling businesses to manage supplier payments, customer receivables, and cross-border transactions. Finvista helps businesses navigate suitable trade finance products offered by financial institutions.",
    features: [],
    benefits: [
      { title: "Improved Cash Flow", desc: "Improved cash flow", icon: "CheckCircle" },
      { title: "Secure Transactions", desc: "Secure business transactions", icon: "CheckCircle" },
      { title: "Trade Financing", desc: "Financing for trade operations", icon: "CheckCircle" },
      { title: "Documentation", desc: "Documentation support", icon: "CheckCircle" },
      { title: "Banking Coordination", desc: "Banking coordination", icon: "CheckCircle" },
      { title: "Expert Advisory", desc: "Expert financial advisory", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Importers",
      "Exporters",
      "Manufacturers",
      "Trading Companies",
      "MSMEs"
    ],
    documentsRequired: [
      "Business Registration",
      "GST Registration",
      "Import Export Code (IEC)",
      "Financial Statements",
      "Bank Statements",
      "Trade Contracts",
      "KYC Documents"
    ],
    timeline: [
      "Business Consultation",
      "Trade Assessment",
      "Documentation Review",
      "Product Selection",
      "Application Processing",
      "Approval Coordination",
      "Ongoing Advisory"
    ],
    faqs: [
      { question: "What is trade finance?", answer: "Trade finance facilitates domestic and international business transactions by improving cash flow and reducing payment risks." },
      { question: "Who can use trade finance?", answer: "Importers, exporters, manufacturers, wholesalers, and trading companies." },
      { question: "What products are included?", answer: "Letters of Credit, Bank Guarantees, Invoice Financing, Bills Discounting, and Supply Chain Finance." },
      { question: "Is trade finance only for international trade?", answer: "No. It can also support domestic trade transactions." },
      { question: "Do I need an Import Export Code (IEC)?", answer: "For international trade, an IEC is generally required." },
      { question: "Can MSMEs use trade finance?", answer: "Yes." },
      { question: "Does trade finance improve cash flow?", answer: "Yes. It enables businesses to receive working capital before customer payments are received." },
      { question: "What documents are commonly required?", answer: "Purchase orders, invoices, shipping documents, IEC, GST registration, and financial statements." },
      { question: "How long does approval take?", answer: "Depends on lender requirements and documentation." },
      { question: "Can existing businesses switch lenders?", answer: "Yes." },
      { question: "How does Finvista assist?", answer: "We help businesses choose suitable trade finance products and coordinate documentation." },
      { question: "Does Finvista issue Letters of Credit?", answer: "No. These are issued by banks." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
