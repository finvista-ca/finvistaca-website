import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface VehicleLoanAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const VehicleLoanAssistance: React.FC<VehicleLoanAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Vehicle Loan Assistance",
    intro_title: "Vehicle Loan Assistance",
    intro_p1: "Drive Your Dreams Forward with the Right Financing",
    intro_p2: "Whether you're purchasing your first car or upgrading to a new vehicle, Finvista helps you secure competitive vehicle financing through trusted banks and financial institutions.",
    overview: "Buying a vehicle is a significant investment, and choosing the right financing option is just as important. Our experts guide you through lender comparisons, documentation, eligibility assessment, and loan processing to ensure a smooth borrowing experience.",
    features: [],
    benefits: [
      { title: "Competitive Options", desc: "Competitive financing options", icon: "CheckCircle" },
      { title: "Lender Comparison", desc: "Expert lender comparison", icon: "CheckCircle" },
      { title: "Quick Documentation", desc: "Quick documentation assistance", icon: "CheckCircle" },
      { title: "Flexible Repayment", desc: "Flexible repayment guidance", icon: "CheckCircle" },
      { title: "Transparent Process", desc: "Transparent advisory process", icon: "CheckCircle" },
      { title: "End-to-end Support", desc: "End-to-end application support", icon: "CheckCircle" },
      { title: "Faster Approval", desc: "Faster approval assistance", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Salaried Employees",
      "Self-employed Professionals",
      "Business Owners",
      "Partnership Firms",
      "Companies"
    ],
    documentsRequired: [
      "PAN Card",
      "Aadhaar Card",
      "Address Proof",
      "Income Proof",
      "Bank Statements",
      "Vehicle Quotation",
      "Passport Size Photograph"
    ],
    timeline: [
      "Initial Consultation",
      "Eligibility Assessment",
      "Lender Comparison",
      "Documentation Support",
      "Loan Application",
      "Approval Coordination",
      "Vehicle Delivery Support"
    ],
    faqs: [
      { question: "Who can apply for a vehicle loan?", answer: "Both salaried and self-employed individuals, as well as businesses, can apply subject to lender eligibility criteria." },
      { question: "Can I finance both new and used vehicles?", answer: "Yes. Financing options are available for both new and pre-owned vehicles, depending on the lender." },
      { question: "Is the vehicle used as collateral?", answer: "Yes. The financed vehicle generally serves as security until the loan is fully repaid." },
      { question: "What documents are required?", answer: "Common documents include identity proof, address proof, income proof, bank statements, and vehicle quotation." },
      { question: "Can I repay the loan early?", answer: "Most lenders allow foreclosure or prepayment, subject to applicable terms and charges." },
      { question: "How long does loan approval take?", answer: "Approval timelines depend on documentation and lender processing, but many loans are processed quickly." },
      { question: "How does Finvista assist?", answer: "We compare lenders, guide you through documentation, negotiate competitive loan options, and support you until disbursement." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
