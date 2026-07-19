import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface OverdraftCashCreditProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const OverdraftCashCredit: React.FC<OverdraftCashCreditProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Overdraft & Cash Credit Advisory",
    intro_title: "Overdraft & Cash Credit Advisory",
    intro_p1: "Maintain Business Liquidity with Flexible Credit Solutions",
    intro_p2: "Manage your day-to-day business finances efficiently through expert guidance on overdraft and cash credit facilities.",
    overview: "Businesses often require flexible financing to manage working capital and operational expenses. FinvistaCA helps identify suitable overdraft and cash credit solutions while assisting with documentation and lender coordination.",
    features: [],
    benefits: [
      { title: "Cash Flow Management", desc: "Improved cash flow management", icon: "CheckCircle" },
      { title: "Flexible Utilization", desc: "Flexible credit utilization", icon: "CheckCircle" },
      { title: "Working Capital", desc: "Working capital support", icon: "CheckCircle" },
      { title: "Documentation Assistance", desc: "Documentation assistance", icon: "CheckCircle" },
      { title: "Lender Comparison", desc: "Competitive lender comparison", icon: "CheckCircle" },
      { title: "Business Advisory", desc: "Business-focused financial advisory", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Proprietorships",
      "Partnership Firms",
      "LLPs",
      "Private Limited Companies",
      "MSMEs"
    ],
    documentsRequired: [
      "Business Registration",
      "Financial Statements",
      "GST Returns",
      "Bank Statements",
      "Income Tax Returns",
      "PAN & KYC Documents"
    ],
    timeline: [
      "Financial Assessment",
      "Credit Requirement Analysis",
      "Documentation Support",
      "Lender Comparison",
      "Application Submission",
      "Credit Approval",
      "Facility Activation"
    ],
    faqs: [
      { question: "What is an overdraft facility?", answer: "An overdraft allows businesses to withdraw funds beyond their available account balance up to an approved limit." },
      { question: "What is a cash credit facility?", answer: "Cash credit provides revolving working capital against inventory, receivables, or other approved security." },
      { question: "Which businesses can apply?", answer: "MSMEs, manufacturers, traders, service providers, and established businesses." },
      { question: "Is collateral required?", answer: "Depending on the lender and sanctioned limit." },
      { question: "Can startups obtain overdraft facilities?", answer: "Some lenders offer overdraft products for eligible startups." },
      { question: "How is the credit limit decided?", answer: "Based on turnover, financial statements, working capital needs, and repayment capacity." },
      { question: "Can I use the funds for any business purpose?", answer: "Generally yes, for legitimate operational expenses." },
      { question: "Is interest charged on the entire sanctioned amount?", answer: "No. Interest is usually charged only on the amount utilized." },
      { question: "Can the limit be increased later?", answer: "Yes, subject to financial performance and lender approval." },
      { question: "What documents are required?", answer: "Business registration, GST, financial statements, bank statements, and KYC." },
      { question: "How does FinvistaCA help?", answer: "We evaluate your financial requirements and help identify suitable facilities." },
      { question: "Does FinvistaCA sanction overdraft limits?", answer: "No. We provide advisory and application assistance." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
