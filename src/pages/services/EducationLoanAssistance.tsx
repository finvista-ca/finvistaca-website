import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface EducationLoanAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const EducationLoanAssistance: React.FC<EducationLoanAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Education Loan Assistance",
    intro_title: "Education Loan Assistance",
    intro_p1: "Invest in Your Future with Confidence",
    intro_p2: "Higher education is an investment in your future. FinvistaCA helps students and parents secure education loans that support academic aspirations without unnecessary financial stress.",
    overview: "We simplify the education loan process by assisting with lender selection, documentation, financial planning, and application support for studies in India and abroad.",
    features: [],
    benefits: [
      { title: "Loan Comparison", desc: "Loan comparison across lenders", icon: "CheckCircle" },
      { title: "Global Studies", desc: "Assistance for domestic & international studies", icon: "CheckCircle" },
      { title: "Documentation Guidance", desc: "Documentation guidance", icon: "CheckCircle" },
      { title: "Competitive Financing", desc: "Competitive financing options", icon: "CheckCircle" },
      { title: "Flexible Repayment", desc: "Flexible repayment understanding", icon: "CheckCircle" },
      { title: "End-to-end Advisory", desc: "End-to-end advisory", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Students",
      "Parents & Guardians",
      "Working Professionals pursuing higher education"
    ],
    documentsRequired: [
      "Admission Letter",
      "Academic Records",
      "PAN & Aadhaar",
      "Income Proof of Co-applicant",
      "Bank Statements",
      "Fee Structure",
      "Passport (for overseas education)"
    ],
    timeline: [
      "Education Planning",
      "Eligibility Assessment",
      "Documentation Support",
      "Lender Selection",
      "Loan Application",
      "Approval Assistance",
      "Loan Disbursement"
    ],
    faqs: [
      { question: "Who is eligible for an education loan?", answer: "Students pursuing higher education in India or abroad may be eligible, subject to lender requirements." },
      { question: "Are parents required as co-applicants?", answer: "In most cases, a parent or guardian acts as the co-applicant." },
      { question: "Does the loan cover living expenses?", answer: "Many education loans cover tuition fees, accommodation, books, travel, and other approved educational expenses." },
      { question: "Is collateral mandatory?", answer: "Collateral requirements depend on the loan amount and lender policies." },
      { question: "What is the repayment period?", answer: "Repayment generally begins after the moratorium period and may extend over several years." },
      { question: "Can I apply before receiving admission confirmation?", answer: "Some lenders offer provisional approvals, though final sanction usually requires admission confirmation." },
      { question: "How does FinvistaCA help?", answer: "We help compare lenders, prepare documentation, and guide students throughout the loan approval process." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
