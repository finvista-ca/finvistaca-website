import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface LoanAgainstPropertyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const LoanAgainstProperty: React.FC<LoanAgainstPropertyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Loan Against Property",
    intro_title: "Loan Against Property (LAP)",
    intro_p1: "Unlock the Value of Your Property",
    intro_p2: "Leverage your residential or commercial property to secure financing for business expansion, education, medical expenses, or other financial requirements.",
    overview: "FinvistaCA assists clients in obtaining loans against eligible properties through careful lender evaluation, documentation, and professional advisory support.",
    features: [],
    benefits: [
      { title: "Higher Eligibility", desc: "Higher loan eligibility", icon: "CheckCircle" },
      { title: "Competitive Interest", desc: "Competitive interest guidance", icon: "CheckCircle" },
      { title: "Longer Tenure", desc: "Longer repayment tenure", icon: "CheckCircle" },
      { title: "Property Documentation", desc: "Property documentation assistance", icon: "CheckCircle" },
      { title: "End-to-end Support", desc: "End-to-end support", icon: "CheckCircle" },
      { title: "Transparent Advisory", desc: "Transparent advisory", icon: "CheckCircle" }
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
      "Property Valuation Documents"
    ],
    timeline: [
      "Property Assessment",
      "Eligibility Review",
      "Documentation Support",
      "Lender Comparison",
      "Loan Application",
      "Approval Assistance",
      "Disbursement Support"
    ],
    faqs: [
      { question: "What properties can be pledged?", answer: "Residential, commercial, and certain industrial properties are generally accepted, subject to lender evaluation." },
      { question: "Do I continue owning the property?", answer: "Yes. Ownership remains with you while the property serves as collateral." },
      { question: "Can the loan be used for business purposes?", answer: "Yes. LAP funds may be used for business expansion, education, medical expenses, or other legitimate financial needs." },
      { question: "How is the loan amount determined?", answer: "The sanctioned amount depends on the property's market value and lender policies." },
      { question: "Is property valuation compulsory?", answer: "Yes. Lenders conduct technical and legal evaluations before approving the loan." },
      { question: "Can existing LAP loans be transferred?", answer: "Yes. Balance transfer options may be available with better interest rates." },
      { question: "Why choose FinvistaCA?", answer: "We assist with property documentation, lender comparison, valuation coordination, and end-to-end loan processing." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
