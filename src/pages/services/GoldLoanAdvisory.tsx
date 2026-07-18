import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GoldLoanAdvisoryProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GoldLoanAdvisory: React.FC<GoldLoanAdvisoryProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Gold Loan Advisory",
    intro_title: "Gold Loan Advisory",
    intro_p1: "Quick Financial Support Backed by Your Gold Assets",
    intro_p2: "Need immediate funds? We help you obtain suitable gold loan solutions through trusted financial institutions with complete transparency.",
    overview: "Gold loans offer a convenient financing option for short-term financial needs. Finvista assists clients in choosing suitable lenders while ensuring clarity throughout the borrowing process.",
    features: [],
    benefits: [
      { title: "Quick Financing", desc: "Quick financing guidance", icon: "CheckCircle" },
      { title: "Minimal Documentation", desc: "Minimal documentation", icon: "CheckCircle" },
      { title: "Transparent Advisory", desc: "Transparent advisory", icon: "CheckCircle" },
      { title: "Lender Comparison", desc: "Multiple lender comparison", icon: "CheckCircle" },
      { title: "Flexible Repayment", desc: "Flexible repayment understanding", icon: "CheckCircle" },
      { title: "End-to-end Assistance", desc: "End-to-end assistance", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Individuals",
      "Business Owners",
      "Self-employed Professionals",
      "Salaried Employees"
    ],
    documentsRequired: [
      "Aadhaar Card",
      "PAN Card",
      "Address Proof",
      "Gold Ornaments",
      "Passport Size Photograph"
    ],
    timeline: [
      "Consultation",
      "Gold Evaluation Guidance",
      "Lender Comparison",
      "Documentation",
      "Loan Processing",
      "Approval",
      "Disbursement"
    ],
    faqs: [
      { question: "What purity of gold is accepted?", answer: "Most lenders accept gold ornaments ranging from 18 to 24 karats." },
      { question: "Is the gold safely stored?", answer: "Yes. Gold pledged with the lender is securely stored until loan repayment." },
      { question: "How is the loan amount calculated?", answer: "The amount depends on the purity and market value of the pledged gold, within regulatory limits." },
      { question: "Can I reclaim my gold after repayment?", answer: "Yes. Your gold is returned once the loan and applicable charges are fully repaid." },
      { question: "Are interest rates fixed?", answer: "Interest rates vary depending on the lender and loan scheme selected." },
      { question: "Is income proof always required?", answer: "For many gold loan products, documentation requirements are relatively minimal." },
      { question: "How does Finvista help?", answer: "We help clients compare lenders, understand repayment options, and complete documentation smoothly." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
