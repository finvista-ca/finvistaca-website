import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface HomeLoanAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const HomeLoanAssistance: React.FC<HomeLoanAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Home Loan Assistance",
    intro_title: "Helping You Own Your Dream Home with Expert Financial Guidance",
    intro_p1: "Whether you're purchasing your first home, constructing a new property, or refinancing an existing loan, Finvista provides end-to-end assistance in securing the right home loan from leading banks and financial institutions.",
    intro_p2: "Buying a home is one of the most significant financial decisions you'll make. Our experts help you compare lenders, assess eligibility, prepare documentation, and guide you throughout the loan approval process to make financing simple and hassle-free.",
    features: [], // Left empty intentionally as benefits are used primarily
    benefits: [
          {
                "title": "Lender Selection",
                "desc": "Assistance in selecting the best lender for your needs.",
                "icon": "Building"
          },
          {
                "title": "Competitive Rates",
                "desc": "Guidance on securing competitive interest rates.",
                "icon": "TrendingUp"
          },
          {
                "title": "Documentation Support",
                "desc": "Faster and more organized documentation support.",
                "icon": "FileText"
          },
          {
                "title": "End-to-End Assistance",
                "desc": "Complete application assistance from start to finish.",
                "icon": "CheckCircle"
          },
          {
                "title": "Eligibility Assessment",
                "desc": "Accurate loan eligibility assessment.",
                "icon": "ShieldCheck"
          },
          {
                "title": "Balance Transfer",
                "desc": "Guidance on balance transfers and top-ups.",
                "icon": "Zap"
          },
          {
                "title": "Transparent Advisory",
                "desc": "Clear, transparent, and unbiased advisory.",
                "icon": "HeartHandshake"
          }
    ],
    eligibleApplicants: [
          "Salaried Individuals",
          "Self-employed Professionals",
          "Business Owners",
          "NRIs",
          "Joint Applicants"
    ],
    documentsRequired: [
          "PAN & Aadhaar",
          "Address Proof",
          "Salary Slips / Income Proof",
          "Bank Statements",
          "Income Tax Returns",
          "Property Documents",
          "Passport Size Photographs"
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
                "q": "How much home loan can I get?",
                "a": "Depends on your income, repayment capacity, and lender policies."
          },
          {
                "q": "Can self-employed individuals apply?",
                "a": "Yes."
          },
          {
                "q": "Can Finvista reduce my interest rate?",
                "a": "We help identify lenders offering competitive terms."
          },
          {
                "q": "How is home loan eligibility calculated?",
                "a": "Eligibility depends on factors such as monthly income, existing financial obligations, credit score, employment stability, age, and repayment capacity."
          },
          {
                "q": "Can I apply jointly with my spouse or family member?",
                "a": "Yes. Most lenders allow joint applications, which may improve your loan eligibility."
          },
          {
                "q": "What is the maximum repayment tenure?",
                "a": "Depending on the lender, repayment tenures can extend up to 30 years."
          },
          {
                "q": "Can I transfer my existing home loan?",
                "a": "Yes. We assist with balance transfer options if another lender offers better interest rates or improved loan terms."
          },
          {
                "q": "Are prepayments allowed?",
                "a": "Most lenders permit partial or full prepayments, though some may have conditions or charges."
          },
          {
                "q": "What costs should I expect besides the loan amount?",
                "a": "Apart from the loan, you may incur processing fees, legal verification charges, technical valuation fees, insurance, and registration expenses."
          },
          {
                "q": "How can Finvista help?",
                "a": "We help evaluate eligibility, compare lenders, prepare documentation, coordinate with banks, and support you throughout the approval process."
          }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
