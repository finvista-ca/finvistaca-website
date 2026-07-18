import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface MSMELoanAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const MSMELoanAssistance: React.FC<MSMELoanAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "MSME Loan Assistance",
    intro_title: "Empowering Small Businesses with Smart Financing Solutions",
    intro_p1: "Support your enterprise with financing designed specifically for Micro, Small, and Medium Enterprises.",
    intro_p2: "We assist MSMEs in securing funding through government-backed schemes and private financial institutions while ensuring documentation and compliance readiness.",
    features: [], // Left empty intentionally as benefits are used primarily
    benefits: [
          {
                "title": "Government Schemes",
                "desc": "Guidance on various government scheme backed loans.",
                "icon": "Landmark"
          },
          {
                "title": "Working Capital",
                "desc": "Working capital support for smooth operations.",
                "icon": "Wallet"
          },
          {
                "title": "Machinery Financing",
                "desc": "Assistance in securing machinery and equipment financing.",
                "icon": "Settings"
          },
          {
                "title": "Expansion Funding",
                "desc": "Business expansion funding support.",
                "icon": "TrendingUp"
          },
          {
                "title": "Documentation Assistance",
                "desc": "Complete documentation assistance.",
                "icon": "FileText"
          },
          {
                "title": "Compliance Support",
                "desc": "Support in meeting compliance requirements.",
                "icon": "ShieldCheck"
          }
    ],
    eligibleApplicants: [
          "Registered MSMEs",
          "Proprietorships",
          "Partnership Firms",
          "LLPs",
          "Companies"
    ],
    documentsRequired: [
          "Udyam Registration",
          "GST Registration",
          "PAN",
          "Financial Statements",
          "Bank Statements",
          "KYC"
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
                "q": "Do I need Udyam Registration?",
                "a": "Recommended, and often required under many MSME schemes."
          },
          {
                "q": "What qualifies as an MSME?",
                "a": "Micro, Small, and Medium Enterprises registered under the applicable government criteria are eligible for MSME benefits."
          },
          {
                "q": "Is Udyam Registration mandatory?",
                "a": "Many government-backed MSME loan schemes require Udyam Registration, and we can assist with the registration process."
          },
          {
                "q": "Can MSMEs receive collateral-free loans?",
                "a": "Certain schemes and lenders offer collateral-free loans subject to eligibility."
          },
          {
                "q": "Are government subsidy schemes available?",
                "a": "Yes. Depending on your business type and eligibility, various government-supported financing schemes may be available."
          },
          {
                "q": "Can service businesses also apply?",
                "a": "Yes. Both manufacturing and service-based MSMEs are eligible."
          },
          {
                "q": "What industries are supported?",
                "a": "Manufacturing, retail, trading, healthcare, hospitality, education, technology, logistics, and many more."
          },
          {
                "q": "Does Finvista help with compliance documentation?",
                "a": "Yes. We assist in preparing financial statements, GST records, and other required documentation."
          }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
