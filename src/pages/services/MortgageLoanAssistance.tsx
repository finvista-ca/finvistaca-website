import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface MortgageLoanAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const MortgageLoanAssistance: React.FC<MortgageLoanAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Mortgage Loan Assistance",
    intro_title: "Mortgage Loan Assistance",
    intro_p1: "Unlock Financial Flexibility Through Property-Backed Financing",
    intro_p2: "Utilize your property as collateral to access financing for business growth, investments, or personal financial requirements.",
    overview: "FinvistaCA provides expert guidance in securing mortgage loans by helping clients understand eligibility, prepare documentation, compare lenders, and complete the application process with confidence.",
    features: [],
    benefits: [
      { title: "Higher Capacity", desc: "Higher borrowing capacity", icon: "CheckCircle" },
      { title: "Competitive Financing", desc: "Competitive financing options", icon: "CheckCircle" },
      { title: "Flexible Repayment", desc: "Flexible repayment guidance", icon: "CheckCircle" },
      { title: "Property Documentation", desc: "Property documentation assistance", icon: "CheckCircle" },
      { title: "Personalized Advisory", desc: "Personalized financial advisory", icon: "CheckCircle" },
      { title: "End-to-end Support", desc: "End-to-end support", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Individuals",
      "Business Owners",
      "Professionals",
      "Companies",
      "Partnership Firms"
    ],
    documentsRequired: [
      "Property Documents",
      "Identity Proof",
      "Address Proof",
      "Income Proof",
      "Bank Statements",
      "PAN Card",
      "Property Valuation Report"
    ],
    timeline: [
      "Initial Consultation",
      "Property Evaluation",
      "Documentation Support",
      "Lender Comparison",
      "Loan Application",
      "Approval Assistance",
      "Loan Disbursement"
    ],
    faqs: [
      { question: "What is a mortgage loan?", answer: "A mortgage loan is a secured loan where property is pledged as collateral to obtain financing." },
      { question: "Can I continue using my property?", answer: "Yes. You continue to own and use the property while it serves as security." },
      { question: "Which properties are eligible?", answer: "Residential, commercial, and certain industrial properties are generally accepted." },
      { question: "How is the loan amount determined?", answer: "It depends on the property's market value, income profile, and lender policies." },
      { question: "What can the loan be used for?", answer: "Business expansion, education, medical expenses, home renovation, or other financial needs." },
      { question: "Is property valuation compulsory?", answer: "Yes. Technical and legal valuation is conducted before approval." },
      { question: "Can self-employed professionals apply?", answer: "Yes." },
      { question: "Is insurance mandatory?", answer: "Some lenders may require property or loan insurance." },
      { question: "Can I transfer my existing mortgage loan?", answer: "Yes. Balance transfer options are available through many lenders." },
      { question: "What repayment tenures are available?", answer: "Tenures vary by lender and loan type." },
      { question: "How does FinvistaCA assist?", answer: "We coordinate documentation, lender selection, and complete application support." },
      { question: "Does FinvistaCA finance properties directly?", answer: "No. We provide advisory services only." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
