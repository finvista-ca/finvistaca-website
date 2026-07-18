import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface CommercialVehicleLoanProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const CommercialVehicleLoan: React.FC<CommercialVehicleLoanProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Commercial Vehicle Loan Assistance",
    intro_title: "Commercial Vehicle Loan Assistance",
    intro_p1: "Helping Businesses Expand Their Transportation Capabilities",
    intro_p2: "Finance commercial vehicles with confidence through our expert advisory services.",
    overview: "We help logistics providers, transport businesses, fleet owners, and entrepreneurs secure financing for commercial vehicles through leading banks and financial institutions.",
    features: [],
    benefits: [
      { title: "Fleet Expansion", desc: "Fleet expansion support", icon: "CheckCircle" },
      { title: "Competitive Financing", desc: "Competitive financing guidance", icon: "CheckCircle" },
      { title: "Lender Comparison", desc: "Multiple lender comparison", icon: "CheckCircle" },
      { title: "Documentation", desc: "Documentation assistance", icon: "CheckCircle" },
      { title: "Business Advisory", desc: "Business-focused advisory", icon: "CheckCircle" },
      { title: "End-to-end Support", desc: "End-to-end support", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Fleet Owners",
      "Transport Businesses",
      "Logistics Companies",
      "Contractors",
      "MSMEs"
    ],
    documentsRequired: [
      "Business Registration",
      "Financial Statements",
      "PAN & Aadhaar",
      "Bank Statements",
      "Vehicle Quotation",
      "GST Registration"
    ],
    timeline: [
      "Consultation",
      "Eligibility Assessment",
      "Documentation",
      "Lender Comparison",
      "Loan Application",
      "Approval",
      "Vehicle Delivery"
    ],
    faqs: [
      { question: "Who can apply for commercial vehicle loans?", answer: "Transport operators, logistics companies, contractors, fleet owners, and eligible businesses." },
      { question: "Which vehicles are covered?", answer: "Trucks, buses, tippers, trailers, tankers, pickup vehicles, and commercial vans." },
      { question: "Can multiple vehicles be financed?", answer: "Yes. Eligible businesses can finance multiple commercial vehicles." },
      { question: "Are used commercial vehicles eligible?", answer: "Many lenders provide financing for pre-owned commercial vehicles subject to valuation." },
      { question: "What documents are required?", answer: "Business proof, financial statements, KYC documents, vehicle quotation, and bank statements." },
      { question: "What determines loan eligibility?", answer: "Business income, repayment history, vehicle value, and credit profile." },
      { question: "Why choose Finvista?", answer: "We simplify lender selection, documentation, and financing negotiations for commercial fleet purchases." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
