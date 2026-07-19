import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface StartupFundingAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const StartupFundingAssistance: React.FC<StartupFundingAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Startup Funding Assistance",
    intro_title: "Helping Innovative Ideas Secure the Right Capital",
    intro_p1: "Whether you're launching a startup or scaling operations, FinvistaCA assists in identifying suitable funding opportunities and preparing your business for investment or financing.",
    intro_p2: "Our team supports startups through financial planning, documentation, compliance, and lender or investor readiness.",
    features: [], // Left empty intentionally as benefits are used primarily
    benefits: [
          {
                "title": "Readiness Assessment",
                "desc": "Comprehensive funding readiness assessment.",
                "icon": "CheckCircle"
          },
          {
                "title": "Financial Projections",
                "desc": "Assistance with creating robust financial projections.",
                "icon": "TrendingUp"
          },
          {
                "title": "Pitch Support",
                "desc": "Support with pitch preparation and structuring.",
                "icon": "Briefcase"
          },
          {
                "title": "Government Schemes",
                "desc": "Guidance on startup-specific government schemes.",
                "icon": "Landmark"
          },
          {
                "title": "Bank Loan Assistance",
                "desc": "Assistance in securing traditional bank loans.",
                "icon": "Building"
          },
          {
                "title": "Compliance Advisory",
                "desc": "Startup compliance and legal advisory.",
                "icon": "ShieldCheck"
          }
    ],
    eligibleApplicants: [
          "Startups",
          "Early-stage Companies",
          "Technology Businesses",
          "Innovation-driven Enterprises"
    ],
    documentsRequired: [
          "Business Plan",
          "Financial Projections",
          "Registration Documents",
          "Founder KYC",
          "Bank Statements"
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
                "q": "Can newly incorporated startups apply?",
                "a": "Yes, depending on funding source and eligibility."
          },
          {
                "q": "What funding options are available for startups?",
                "a": "Funding may include bank loans, government schemes, incubator programs, venture capital, angel investment, and startup grants."
          },
          {
                "q": "Do I need an incorporated company?",
                "a": "Not necessarily. However, many funding programs require a registered business entity."
          },
          {
                "q": "Can FinvistaCA prepare financial projections?",
                "a": "Yes. We assist with financial planning, cash flow projections, and investor-ready documentation."
          },
          {
                "q": "Will you help prepare investor presentations?",
                "a": "Yes. We support startups in preparing business plans and pitch materials."
          },
          {
                "q": "Can first-time entrepreneurs apply?",
                "a": "Absolutely. We work with both first-time founders and experienced entrepreneurs."
          },
          {
                "q": "Do you assist with Startup India registration?",
                "a": "Yes. We guide eligible businesses through Startup India registration and related compliance."
          },
          {
                "q": "Does FinvistaCA arrange investments?",
                "a": "We provide advisory and funding assistance but do not directly invest or guarantee funding."
          }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
