import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface MachineryEquipmentLoanProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const MachineryEquipmentLoan: React.FC<MachineryEquipmentLoanProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Machinery & Equipment Loan Assistance",
    intro_title: "Machinery & Equipment Loan Assistance",
    intro_p1: "Power Business Growth Through Smart Asset Financing",
    intro_p2: "Acquire the machinery and equipment your business needs with expert financing guidance from FinvistaCA.",
    overview: "Whether you're expanding manufacturing capacity or upgrading technology, we assist businesses in obtaining suitable financing for machinery and equipment purchases.",
    features: [],
    benefits: [
      { title: "Equipment Financing", desc: "Equipment financing guidance", icon: "CheckCircle" },
      { title: "Business Expansion", desc: "Business expansion support", icon: "CheckCircle" },
      { title: "Documentation Assistance", desc: "Documentation assistance", icon: "CheckCircle" },
      { title: "Competitive Options", desc: "Competitive lender options", icon: "CheckCircle" },
      { title: "End-to-end Advisory", desc: "End-to-end advisory", icon: "CheckCircle" },
      { title: "Faster Processing", desc: "Faster processing", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Manufacturers",
      "MSMEs",
      "Startups",
      "Industrial Businesses",
      "Service Providers"
    ],
    documentsRequired: [
      "Business Registration",
      "Financial Statements",
      "GST Returns",
      "Bank Statements",
      "Machinery Quotation",
      "PAN Card",
      "KYC Documents"
    ],
    timeline: [
      "Requirement Analysis",
      "Financial Assessment",
      "Documentation",
      "Lender Selection",
      "Application",
      "Approval",
      "Asset Financing"
    ],
    faqs: [
      { question: "What types of equipment can be financed?", answer: "Industrial machinery, manufacturing equipment, medical devices, agricultural equipment, and commercial machinery." },
      { question: "Can new businesses apply?", answer: "Yes. Eligibility depends on the business plan, financial profile, and lender requirements." },
      { question: "Is the equipment itself used as security?", answer: "In many cases, the financed equipment serves as collateral." },
      { question: "Can imported machinery also be financed?", answer: "Yes. Many lenders finance imported machinery subject to documentation." },
      { question: "How is repayment structured?", answer: "Repayment is generally made through fixed monthly installments over an agreed tenure." },
      { question: "Are subsidies available?", answer: "Certain industries and government schemes may provide financial assistance or subsidies." },
      { question: "How can FinvistaCA assist?", answer: "We help identify suitable lenders, prepare project reports, and manage the documentation process." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
