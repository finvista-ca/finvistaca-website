import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface PersonalLoanAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const PersonalLoanAssistance: React.FC<PersonalLoanAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Personal Loan Assistance",
    intro_title: "Quick Financial Support for Your Personal Needs",
    intro_p1: "Whether it's medical emergencies, education, weddings, travel, or unexpected expenses, we help you secure the right personal loan with minimal hassle.",
    intro_p2: "Our advisors simplify the borrowing process by helping you compare lenders, understand eligibility, and prepare complete documentation to improve approval chances.",
    features: [], // Left empty intentionally as benefits are used primarily
    benefits: [
          {
                "title": "Faster Processing",
                "desc": "Faster loan processing with complete readiness.",
                "icon": "Zap"
          },
          {
                "title": "Interest Rate Guidance",
                "desc": "Guidance on finding the most suitable interest rates.",
                "icon": "TrendingUp"
          },
          {
                "title": "Lender Comparison",
                "desc": "Multiple lender comparison to find the best fit.",
                "icon": "Building"
          },
          {
                "title": "Documentation Assistance",
                "desc": "Minimal documentation assistance.",
                "icon": "FileText"
          },
          {
                "title": "Transparent Advisory",
                "desc": "Unbiased and transparent advisory.",
                "icon": "HeartHandshake"
          },
          {
                "title": "EMI Planning",
                "desc": "Assistance with EMI and repayment planning.",
                "icon": "Landmark"
          },
          {
                "title": "Credit Review",
                "desc": "Credit profile review and guidance.",
                "icon": "CheckCircle"
          }
    ],
    eligibleApplicants: [
          "Salaried Employees",
          "Self-employed Professionals",
          "Business Owners",
          "Pensioners (subject to lender policy)"
    ],
    documentsRequired: [
          "Identity Proof",
          "Address Proof",
          "Income Proof",
          "Bank Statements",
          "PAN Card",
          "Passport Photograph"
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
                "q": "Is collateral required?",
                "a": "Usually no."
          },
          {
                "q": "How quickly can approval happen?",
                "a": "Depending on lender policies and documentation."
          },
          {
                "q": "What is the typical repayment period?",
                "a": "Repayment periods generally range from 12 months to 7 years depending on the lender."
          },
          {
                "q": "Can I get a personal loan without collateral?",
                "a": "Yes. Personal loans are generally unsecured and do not require collateral."
          },
          {
                "q": "Does my credit score matter?",
                "a": "Yes. A higher credit score usually improves approval chances and may help secure better interest rates."
          },
          {
                "q": "Can self-employed individuals apply?",
                "a": "Absolutely. Self-employed professionals and business owners can apply by providing the necessary income documentation."
          },
          {
                "q": "Can I repay the loan early?",
                "a": "Many lenders allow foreclosure or prepayment, though applicable charges vary."
          },
          {
                "q": "What affects my approval chances?",
                "a": "Income stability, repayment history, credit score, employment status, and debt-to-income ratio are key factors."
          },
          {
                "q": "Does FinvistaCA directly provide loans?",
                "a": "No. FinvistaCA is a financial advisory firm that assists clients in obtaining suitable loans from banks and financial institutions."
          }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
