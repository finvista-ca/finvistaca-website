import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ProjectFinanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ProjectFinance: React.FC<ProjectFinanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Project Finance Assistance",
    intro_title: "Project Finance Assistance",
    intro_p1: "Transform Your Business Vision into Reality with Strategic Project Financing",
    intro_p2: "Whether you're setting up a new venture, expanding existing operations, or undertaking large-scale infrastructure projects, Finvista helps you secure the right project financing solutions.",
    overview: "Project finance requires careful planning, financial analysis, and lender confidence. Our experts assist businesses in preparing project reports, evaluating funding options, and coordinating with banks and financial institutions to obtain financing for long-term projects.",
    features: [],
    benefits: [
      { title: "Project Funding", desc: "Comprehensive project funding guidance", icon: "CheckCircle" },
      { title: "Financial Planning", desc: "Detailed financial planning", icon: "CheckCircle" },
      { title: "Project Reports", desc: "Project report assistance", icon: "CheckCircle" },
      { title: "Lender Comparison", desc: "Lender comparison", icon: "CheckCircle" },
      { title: "Documentation Support", desc: "Documentation support", icon: "CheckCircle" },
      { title: "Long-term Financing", desc: "Long-term financing solutions", icon: "CheckCircle" },
      { title: "End-to-end Advisory", desc: "End-to-end advisory", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Manufacturing Companies",
      "Infrastructure Projects",
      "Real Estate Developers",
      "MSMEs",
      "Large Enterprises",
      "Startups with scalable projects"
    ],
    documentsRequired: [
      "Detailed Project Report (DPR)",
      "Business Registration Documents",
      "Financial Statements",
      "Bank Statements",
      "Promoter KYC",
      "Land/Asset Documents (if applicable)",
      "Project Cost Estimates"
    ],
    timeline: [
      "Project Consultation",
      "Financial Feasibility Analysis",
      "Documentation Preparation",
      "Lender Identification",
      "Loan Application",
      "Approval Coordination",
      "Project Funding Support"
    ],
    faqs: [
      { question: "What is project finance?", answer: "Project finance is a funding solution designed for large-scale projects such as manufacturing units, infrastructure, commercial developments, and business expansions." },
      { question: "Who can apply for project finance?", answer: "Businesses, MSMEs, startups, developers, infrastructure companies, and manufacturing units can apply, subject to lender eligibility." },
      { question: "What types of projects can be financed?", answer: "Manufacturing plants, commercial buildings, renewable energy projects, infrastructure, industrial expansion, and large business investments." },
      { question: "Is a Detailed Project Report (DPR) mandatory?", answer: "Yes. Most lenders require a professionally prepared Detailed Project Report to assess project feasibility." },
      { question: "How much funding can I obtain?", answer: "The loan amount depends on project cost, promoter contribution, repayment capacity, and lender policies." },
      { question: "Is collateral required?", answer: "Collateral requirements vary depending on the lender, project size, and financing structure." },
      { question: "How long does the approval process take?", answer: "Approval timelines vary depending on documentation completeness and lender evaluation." },
      { question: "Can startups apply for project finance?", answer: "Yes, provided they have a viable business model, project feasibility, and meet lender criteria." },
      { question: "Does Finvista prepare project reports?", answer: "Yes. We assist in preparing financial projections and project documentation." },
      { question: "Can multiple lenders finance one project?", answer: "Yes. Large projects may involve consortium or multiple lender financing." },
      { question: "How does Finvista help?", answer: "We provide complete advisory, documentation, lender coordination, and end-to-end financing support." },
      { question: "Does Finvista provide loans directly?", answer: "No. We assist clients in obtaining suitable financing from banks and financial institutions." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
