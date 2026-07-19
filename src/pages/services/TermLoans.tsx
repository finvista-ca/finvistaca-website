import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface TermLoansProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const TermLoans: React.FC<TermLoansProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Term Loan Assistance",
    intro_title: "Structured Financing for Long-Term Business Growth",
    intro_p1: "Secure long-term financing for expansion, infrastructure, equipment, or major business investments.",
    intro_p2: "FinvistaCA helps businesses evaluate loan options, prepare documentation, and complete the financing process with confidence.",
    features: [], // Left empty intentionally as benefits are used primarily
    benefits: [
          {
                "title": "Long-term Financing",
                "desc": "Secure stable long-term financing.",
                "icon": "Landmark"
          },
          {
                "title": "Business Expansion",
                "desc": "Funding for major business expansion projects.",
                "icon": "TrendingUp"
          },
          {
                "title": "Asset Acquisition",
                "desc": "Assistance with financing for asset acquisition.",
                "icon": "Briefcase"
          },
          {
                "title": "Competitive Comparison",
                "desc": "Competitive lender comparison.",
                "icon": "Building"
          },
          {
                "title": "Documentation Support",
                "desc": "Comprehensive documentation support.",
                "icon": "FileText"
          },
          {
                "title": "End-to-End Advisory",
                "desc": "End-to-end advisory throughout the lifecycle.",
                "icon": "HeartHandshake"
          }
    ],
    eligibleApplicants: [
          "Businesses",
          "Manufacturers",
          "Service Companies",
          "LLPs",
          "Private Limited Companies"
    ],
    documentsRequired: [
          "Company Registration",
          "Financial Statements",
          "Bank Statements",
          "Income Tax Returns",
          "KYC Documents",
          "Project Report (if applicable)"
    ],
    timeline: [
          "Initial Consultation",
          "Eligibility Assessment",
          "Documentation Support",
          "Lender Comparison",
          "Loan Application",
          "Approval Assistance",
          "Disbursement Support"
    ],
    faqs: [

          {
                "q": "What repayment tenure is available?",
                "a": "Varies depending on lender and loan type."
          },
          {
                "q": "What is a term loan?",
                "a": "A term loan provides funding that is repaid over a fixed period through scheduled installments."
          },
          {
                "q": "What can a term loan be used for?",
                "a": "Business expansion, machinery purchases, infrastructure development, technology upgrades, or long-term investments."
          },
          {
                "q": "Is collateral required?",
                "a": "Depending on the loan amount and lender, collateral may or may not be required."
          },
          {
                "q": "How is repayment structured?",
                "a": "Repayment is generally made through monthly or quarterly installments over an agreed tenure."
          },
          {
                "q": "Can I repay the loan before maturity?",
                "a": "Many lenders allow prepayment, subject to applicable terms and charges."
          },
          {
                "q": "Do I need a project report?",
                "a": "For larger financing requirements, lenders may request a detailed project report and financial projections."
          },
          {
                "q": "Why should I choose FinvistaCA?",
                "a": "We provide strategic guidance, documentation support, lender comparisons, and end-to-end assistance throughout the financing process."
          }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
