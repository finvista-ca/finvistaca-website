import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface WorkingCapitalLoansProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const WorkingCapitalLoans: React.FC<WorkingCapitalLoansProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Working Capital Loan Assistance",
    intro_title: "Maintain Healthy Cash Flow for Daily Business Operations",
    intro_p1: "Working capital financing helps businesses manage operational expenses without disrupting business continuity.",
    intro_p2: "We help businesses secure suitable working capital facilities to meet short-term operational needs efficiently.",
    features: [], // Left empty intentionally as benefits are used primarily
    benefits: [
          {
                "title": "Improved Cash Flow",
                "desc": "Maintain improved and healthy cash flow.",
                "icon": "Zap"
          },
          {
                "title": "Operational Stability",
                "desc": "Ensure operational stability without disruption.",
                "icon": "ShieldCheck"
          },
          {
                "title": "Flexible Options",
                "desc": "Guidance on flexible financing options.",
                "icon": "Briefcase"
          },
          {
                "title": "Documentation Assistance",
                "desc": "End-to-end documentation assistance.",
                "icon": "FileText"
          },
          {
                "title": "Lender Comparison",
                "desc": "Comparison of lenders to find the best terms.",
                "icon": "Building"
          },
          {
                "title": "Faster Processing",
                "desc": "Guidance for faster application processing.",
                "icon": "CheckCircle"
          }
    ],
    eligibleApplicants: [
          "SMEs",
          "MSMEs",
          "Trading Businesses",
          "Manufacturers",
          "Service Providers"
    ],
    documentsRequired: [
          "Financial Statements",
          "GST Returns",
          "Bank Statements",
          "KYC",
          "Business Registration"
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
                "q": "What is working capital used for?",
                "a": "Inventory, salaries, rent, utilities, and operational expenses."
          },
          {
                "q": "What is working capital financing?",
                "a": "It is short-term financing that helps businesses manage day-to-day operational expenses."
          },
          {
                "q": "What expenses can working capital loans cover?",
                "a": "Inventory purchases, employee salaries, rent, utility bills, supplier payments, and other operational costs."
          },
          {
                "q": "Is collateral required?",
                "a": "Requirements vary depending on the lender and loan product."
          },
          {
                "q": "Can seasonal businesses apply?",
                "a": "Yes. Seasonal businesses often use working capital financing to manage fluctuating cash flow."
          },
          {
                "q": "How is the loan amount determined?",
                "a": "It depends on turnover, financial statements, business performance, and lender policies."
          },
          {
                "q": "Can existing businesses refinance their working capital facilities?",
                "a": "Yes. We can assist in evaluating refinancing or restructuring opportunities where appropriate."
          },
          {
                "q": "How does Finvista help?",
                "a": "We assist in documentation, lender comparison, financial assessment, and application support."
          }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
