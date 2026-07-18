import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GovernmentSubsidyLoansProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GovernmentSubsidyLoans: React.FC<GovernmentSubsidyLoansProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Government Subsidy Linked Loan Assistance",
    intro_title: "Government Subsidy Linked Loan Assistance",
    intro_p1: "Helping You Benefit from Government-Backed Financing Schemes",
    intro_p2: "Take advantage of government-supported financial assistance and subsidy-linked loan programs with expert advisory from Finvista.",
    overview: "We assist businesses, entrepreneurs, MSMEs, startups, and individuals in identifying suitable government schemes, preparing documentation, and applying for eligible subsidy-linked loans.",
    features: [],
    benefits: [
      { title: "Scheme Identification", desc: "Government scheme identification", icon: "CheckCircle" },
      { title: "Eligibility Assessment", desc: "Subsidy eligibility assessment", icon: "CheckCircle" },
      { title: "Documentation", desc: "Documentation assistance", icon: "CheckCircle" },
      { title: "Compliance", desc: "Compliance guidance", icon: "CheckCircle" },
      { title: "Bank Coordination", desc: "Bank coordination", icon: "CheckCircle" },
      { title: "End-to-end Advisory", desc: "End-to-end advisory", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "MSMEs",
      "Startups",
      "Farmers",
      "Women Entrepreneurs",
      "SC/ST Entrepreneurs",
      "Rural Businesses",
      "Manufacturing Units"
    ],
    documentsRequired: [
      "Aadhaar & PAN",
      "Business Registration",
      "Udyam Registration (if applicable)",
      "Financial Statements",
      "Bank Statements",
      "Project Report",
      "Scheme-specific Documents"
    ],
    timeline: [
      "Consultation",
      "Scheme Identification",
      "Eligibility Assessment",
      "Documentation Preparation",
      "Application Submission",
      "Bank & Government Coordination",
      "Loan & Subsidy Assistance"
    ],
    faqs: [
      { question: "What are subsidy-linked loans?", answer: "These are loans offered under government-supported schemes that provide financial assistance or interest subsidies to eligible applicants." },
      { question: "Who can apply?", answer: "MSMEs, startups, farmers, women entrepreneurs, SC/ST entrepreneurs, and eligible businesses." },
      { question: "Which government schemes are available?", answer: "Eligibility depends on current Central and State Government schemes." },
      { question: "Is subsidy guaranteed?", answer: "No. Subsidies are subject to eligibility and government approval." },
      { question: "Can existing businesses apply?", answer: "Yes." },
      { question: "Is Udyam Registration required?", answer: "For many MSME schemes, yes." },
      { question: "Can startups benefit from these schemes?", answer: "Yes, if they satisfy scheme requirements." },
      { question: "What documents are generally required?", answer: "KYC, business registration, financial statements, project report, and scheme-specific documents." },
      { question: "Does Finvista help identify suitable schemes?", answer: "Yes. We evaluate eligibility and recommend relevant schemes." },
      { question: "Does Finvista assist with documentation?", answer: "Yes." },
      { question: "Does Finvista provide government grants?", answer: "No. We only provide advisory and application support." },
      { question: "How does Finvista help?", answer: "We guide clients through scheme selection, documentation, compliance, and coordination with banks and government agencies to maximize their chances of successful approval." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
