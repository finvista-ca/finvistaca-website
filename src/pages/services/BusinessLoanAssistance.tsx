import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface BusinessLoanAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const BusinessLoanAssistance: React.FC<BusinessLoanAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Business Loan Assistance",
    intro_title: "Fuel Business Growth with the Right Financing",
    intro_p1: "Access business loans that help expand operations, manage working capital, purchase equipment, or invest in growth opportunities.",
    intro_p2: "FinvistaCA works closely with entrepreneurs and businesses to identify suitable loan products, prepare financial documents, and streamline the approval process.",
    features: [], // Left empty intentionally as benefits are used primarily
    benefits: [
          {
                "title": "Expansion Funding",
                "desc": "Secure funding for business expansion and growth.",
                "icon": "TrendingUp"
          },
          {
                "title": "Working Capital",
                "desc": "Support for daily working capital requirements.",
                "icon": "Wallet"
          },
          {
                "title": "Lender Selection",
                "desc": "Better lender selection based on your profile.",
                "icon": "Building"
          },
          {
                "title": "Financial Documentation",
                "desc": "Assistance with complex financial documentation.",
                "icon": "FileText"
          },
          {
                "title": "Faster Application",
                "desc": "Guidance for a faster and smoother application process.",
                "icon": "Zap"
          },
          {
                "title": "End-to-End Advisory",
                "desc": "Advisory support throughout the entire process.",
                "icon": "HeartHandshake"
          }
    ],
    eligibleApplicants: [
          "Proprietorships",
          "Partnership Firms",
          "LLPs",
          "Private Limited Companies",
          "MSMEs",
          "Startups"
    ],
    documentsRequired: [
          "Business Registration",
          "PAN",
          "GST Returns",
          "Financial Statements",
          "Bank Statements",
          "Income Tax Returns",
          "KYC Documents"
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
                "q": "Can new businesses apply?",
                "a": "Yes, depending on lender eligibility."
          },
          {
                "q": "What can a business loan be used for?",
                "a": "Business loans may be used for expansion, working capital, inventory, equipment purchases, technology upgrades, marketing, or infrastructure."
          },
          {
                "q": "Is collateral always required?",
                "a": "Not always. Some lenders offer unsecured business loans depending on eligibility and financial profile."
          },
          {
                "q": "Can newly established businesses apply?",
                "a": "Yes. Eligibility depends on lender policies, business model, projected cash flow, and documentation."
          },
          {
                "q": "How long does the approval process take?",
                "a": "Approval timelines vary by lender and the completeness of documentation."
          },
          {
                "q": "Can startups also apply?",
                "a": "Yes. We also provide dedicated Startup Funding Assistance for eligible ventures."
          },
          {
                "q": "What financial statements are usually required?",
                "a": "Typically, lenders require Income Tax Returns, Profit & Loss Statements, Balance Sheets, GST Returns, and Bank Statements."
          },
          {
                "q": "Why choose FinvistaCA?",
                "a": "Our experts simplify documentation, compare multiple financing options, and help improve the likelihood of successful loan approval."
          }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
