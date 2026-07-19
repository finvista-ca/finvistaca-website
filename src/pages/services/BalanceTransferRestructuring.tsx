import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface BalanceTransferRestructuringProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const BalanceTransferRestructuring: React.FC<BalanceTransferRestructuringProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Balance Transfer & Loan Restructuring Advisory",
    intro_title: "Balance Transfer & Loan Restructuring Advisory",
    intro_p1: "Optimize Your Existing Loans with Smarter Financial Strategies",
    intro_p2: "Reduce borrowing costs and improve financial flexibility through expert guidance on loan balance transfers and restructuring options.",
    overview: "If you're paying high interest rates or struggling with existing repayment terms, FinvistaCA helps evaluate better financing alternatives offered by banks and financial institutions.",
    features: [],
    benefits: [
      { title: "Lower Interest", desc: "Lower interest rate guidance", icon: "CheckCircle" },
      { title: "EMI Optimization", desc: "EMI optimization", icon: "CheckCircle" },
      { title: "Improved Structure", desc: "Improved repayment structure", icon: "CheckCircle" },
      { title: "Financial Assessment", desc: "Financial assessment", icon: "CheckCircle" },
      { title: "Lender Comparison", desc: "Multiple lender comparison", icon: "CheckCircle" },
      { title: "Complete Advisory", desc: "Complete advisory support", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Existing Loan Borrowers",
      "Home Loan Customers",
      "Business Loan Customers",
      "Personal Loan Borrowers",
      "Mortgage Loan Customers"
    ],
    documentsRequired: [
      "Existing Loan Statement",
      "Identity Proof",
      "Address Proof",
      "Income Proof",
      "Bank Statements",
      "PAN Card",
      "Existing Loan Documents"
    ],
    timeline: [
      "Loan Review",
      "Financial Analysis",
      "Alternative Lender Comparison",
      "Documentation Support",
      "Balance Transfer Processing",
      "Approval Coordination",
      "Loan Closure & Transition"
    ],
    faqs: [
      { question: "What is a balance transfer?", answer: "A balance transfer moves an existing loan to another lender offering better interest rates or repayment terms." },
      { question: "When should I consider a balance transfer?", answer: "When another lender offers lower interest rates, reduced EMIs, or improved loan features." },
      { question: "Which loans can be transferred?", answer: "Home loans, business loans, LAP, mortgage loans, and selected personal loans." },
      { question: "What is loan restructuring?", answer: "Loan restructuring modifies repayment terms to make repayment more manageable." },
      { question: "Does restructuring affect my credit score?", answer: "It may, depending on lender reporting and repayment history." },
      { question: "Can I reduce my EMI through restructuring?", answer: "In many cases, yes." },
      { question: "Are there processing charges?", answer: "Some lenders may charge processing or foreclosure fees." },
      { question: "How is eligibility assessed?", answer: "Based on repayment history, income, outstanding balance, and credit profile." },
      { question: "Will new documentation be required?", answer: "Yes." },
      { question: "Can self-employed borrowers apply?", answer: "Yes." },
      { question: "How does FinvistaCA help?", answer: "We compare lenders and recommend suitable restructuring options." },
      { question: "Does FinvistaCA guarantee lower interest rates?", answer: "No. Final approval rests with the lending institution." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
