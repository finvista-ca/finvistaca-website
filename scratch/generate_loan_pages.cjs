const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../src/pages/services');

const data = [
  {
    name: 'HomeLoanAssistance',
    title: 'Home Loan Assistance',
    intro_title: 'Helping You Own Your Dream Home with Expert Financial Guidance',
    intro_p1: "Whether you're purchasing your first home, constructing a new property, or refinancing an existing loan, Finvista provides end-to-end assistance in securing the right home loan from leading banks and financial institutions.",
    intro_p2: "Buying a home is one of the most significant financial decisions you'll make. Our experts help you compare lenders, assess eligibility, prepare documentation, and guide you throughout the loan approval process to make financing simple and hassle-free.",
    benefits: [
      { title: "Lender Selection", desc: "Assistance in selecting the best lender for your needs.", icon: "Building" },
      { title: "Competitive Rates", desc: "Guidance on securing competitive interest rates.", icon: "TrendingUp" },
      { title: "Documentation Support", desc: "Faster and more organized documentation support.", icon: "FileText" },
      { title: "End-to-End Assistance", desc: "Complete application assistance from start to finish.", icon: "CheckCircle" },
      { title: "Eligibility Assessment", desc: "Accurate loan eligibility assessment.", icon: "ShieldCheck" },
      { title: "Balance Transfer", desc: "Guidance on balance transfers and top-ups.", icon: "Zap" },
      { title: "Transparent Advisory", desc: "Clear, transparent, and unbiased advisory.", icon: "HeartHandshake" }
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
      { q: "How much home loan can I get?", a: "Depends on your income, repayment capacity, and lender policies." },
      { q: "Can self-employed individuals apply?", a: "Yes." },
      { q: "Can Finvista reduce my interest rate?", a: "We help identify lenders offering competitive terms." }
    ]
  },
  {
    name: 'PersonalLoanAssistance',
    title: 'Personal Loan Assistance',
    intro_title: 'Quick Financial Support for Your Personal Needs',
    intro_p1: "Whether it's medical emergencies, education, weddings, travel, or unexpected expenses, we help you secure the right personal loan with minimal hassle.",
    intro_p2: "Our advisors simplify the borrowing process by helping you compare lenders, understand eligibility, and prepare complete documentation to improve approval chances.",
    benefits: [
      { title: "Faster Processing", desc: "Faster loan processing with complete readiness.", icon: "Zap" },
      { title: "Interest Rate Guidance", desc: "Guidance on finding the most suitable interest rates.", icon: "TrendingUp" },
      { title: "Lender Comparison", desc: "Multiple lender comparison to find the best fit.", icon: "Building" },
      { title: "Documentation Assistance", desc: "Minimal documentation assistance.", icon: "FileText" },
      { title: "Transparent Advisory", desc: "Unbiased and transparent advisory.", icon: "HeartHandshake" },
      { title: "EMI Planning", desc: "Assistance with EMI and repayment planning.", icon: "Landmark" },
      { title: "Credit Review", desc: "Credit profile review and guidance.", icon: "CheckCircle" }
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
      { q: "Is collateral required?", a: "Usually no." },
      { q: "How quickly can approval happen?", a: "Depending on lender policies and documentation." }
    ]
  },
  {
    name: 'BusinessLoanAssistance',
    title: 'Business Loan Assistance',
    intro_title: 'Fuel Business Growth with the Right Financing',
    intro_p1: "Access business loans that help expand operations, manage working capital, purchase equipment, or invest in growth opportunities.",
    intro_p2: "Finvista works closely with entrepreneurs and businesses to identify suitable loan products, prepare financial documents, and streamline the approval process.",
    benefits: [
      { title: "Expansion Funding", desc: "Secure funding for business expansion and growth.", icon: "TrendingUp" },
      { title: "Working Capital", desc: "Support for daily working capital requirements.", icon: "Wallet" },
      { title: "Lender Selection", desc: "Better lender selection based on your profile.", icon: "Building" },
      { title: "Financial Documentation", desc: "Assistance with complex financial documentation.", icon: "FileText" },
      { title: "Faster Application", desc: "Guidance for a faster and smoother application process.", icon: "Zap" },
      { title: "End-to-End Advisory", desc: "Advisory support throughout the entire process.", icon: "HeartHandshake" }
    ],
    eligibleApplicants: [
      "Proprietorships",
      "Partnership Firms",
      "LLPs",
      "Private Limited Companies",
      "MSMEs",
      "Startups"
    ],
    documentsRequired: [
      "Business Registration",
      "PAN",
      "GST Returns",
      "Financial Statements",
      "Bank Statements",
      "Income Tax Returns",
      "KYC Documents"
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
      { q: "Can new businesses apply?", a: "Yes, depending on lender eligibility." }
    ]
  },
  {
    name: 'MSMELoanAssistance',
    title: 'MSME Loan Assistance',
    intro_title: 'Empowering Small Businesses with Smart Financing Solutions',
    intro_p1: "Support your enterprise with financing designed specifically for Micro, Small, and Medium Enterprises.",
    intro_p2: "We assist MSMEs in securing funding through government-backed schemes and private financial institutions while ensuring documentation and compliance readiness.",
    benefits: [
      { title: "Government Schemes", desc: "Guidance on various government scheme backed loans.", icon: "Landmark" },
      { title: "Working Capital", desc: "Working capital support for smooth operations.", icon: "Wallet" },
      { title: "Machinery Financing", desc: "Assistance in securing machinery and equipment financing.", icon: "Settings" },
      { title: "Expansion Funding", desc: "Business expansion funding support.", icon: "TrendingUp" },
      { title: "Documentation Assistance", desc: "Complete documentation assistance.", icon: "FileText" },
      { title: "Compliance Support", desc: "Support in meeting compliance requirements.", icon: "ShieldCheck" }
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
      { q: "Do I need Udyam Registration?", a: "Recommended, and often required under many MSME schemes." }
    ]
  },
  {
    name: 'StartupFundingAssistance',
    title: 'Startup Funding Assistance',
    intro_title: 'Helping Innovative Ideas Secure the Right Capital',
    intro_p1: "Whether you're launching a startup or scaling operations, Finvista assists in identifying suitable funding opportunities and preparing your business for investment or financing.",
    intro_p2: "Our team supports startups through financial planning, documentation, compliance, and lender or investor readiness.",
    benefits: [
      { title: "Readiness Assessment", desc: "Comprehensive funding readiness assessment.", icon: "CheckCircle" },
      { title: "Financial Projections", desc: "Assistance with creating robust financial projections.", icon: "TrendingUp" },
      { title: "Pitch Support", desc: "Support with pitch preparation and structuring.", icon: "Briefcase" },
      { title: "Government Schemes", desc: "Guidance on startup-specific government schemes.", icon: "Landmark" },
      { title: "Bank Loan Assistance", desc: "Assistance in securing traditional bank loans.", icon: "Building" },
      { title: "Compliance Advisory", desc: "Startup compliance and legal advisory.", icon: "ShieldCheck" }
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
      { q: "Can newly incorporated startups apply?", a: "Yes, depending on funding source and eligibility." }
    ]
  },
  {
    name: 'WorkingCapitalLoans',
    title: 'Working Capital Loan Assistance',
    intro_title: 'Maintain Healthy Cash Flow for Daily Business Operations',
    intro_p1: "Working capital financing helps businesses manage operational expenses without disrupting business continuity.",
    intro_p2: "We help businesses secure suitable working capital facilities to meet short-term operational needs efficiently.",
    benefits: [
      { title: "Improved Cash Flow", desc: "Maintain improved and healthy cash flow.", icon: "Zap" },
      { title: "Operational Stability", desc: "Ensure operational stability without disruption.", icon: "ShieldCheck" },
      { title: "Flexible Options", desc: "Guidance on flexible financing options.", icon: "Briefcase" },
      { title: "Documentation Assistance", desc: "End-to-end documentation assistance.", icon: "FileText" },
      { title: "Lender Comparison", desc: "Comparison of lenders to find the best terms.", icon: "Building" },
      { title: "Faster Processing", desc: "Guidance for faster application processing.", icon: "CheckCircle" }
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
      { q: "What is working capital used for?", a: "Inventory, salaries, rent, utilities, and operational expenses." }
    ]
  },
  {
    name: 'TermLoans',
    title: 'Term Loan Assistance',
    intro_title: 'Structured Financing for Long-Term Business Growth',
    intro_p1: "Secure long-term financing for expansion, infrastructure, equipment, or major business investments.",
    intro_p2: "Finvista helps businesses evaluate loan options, prepare documentation, and complete the financing process with confidence.",
    benefits: [
      { title: "Long-term Financing", desc: "Secure stable long-term financing.", icon: "Landmark" },
      { title: "Business Expansion", desc: "Funding for major business expansion projects.", icon: "TrendingUp" },
      { title: "Asset Acquisition", desc: "Assistance with financing for asset acquisition.", icon: "Briefcase" },
      { title: "Competitive Comparison", desc: "Competitive lender comparison.", icon: "Building" },
      { title: "Documentation Support", desc: "Comprehensive documentation support.", icon: "FileText" },
      { title: "End-to-End Advisory", desc: "End-to-end advisory throughout the lifecycle.", icon: "HeartHandshake" }
    ],
    eligibleApplicants: [
      "Businesses",
      "Manufacturers",
      "Service Companies",
      "LLPs",
      "Private Limited Companies"
    ],
    documentsRequired: [
      "Company Registration",
      "Financial Statements",
      "Bank Statements",
      "Income Tax Returns",
      "KYC Documents",
      "Project Report (if applicable)"
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
      { q: "What repayment tenure is available?", a: "Varies depending on lender and loan type." }
    ]
  }
];

data.forEach(item => {
  const content = `import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ${item.name}Props {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ${item.name}: React.FC<${item.name}Props> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: ${JSON.stringify(item.title)},
    intro_title: ${JSON.stringify(item.intro_title)},
    intro_p1: ${JSON.stringify(item.intro_p1)},
    intro_p2: ${JSON.stringify(item.intro_p2)},
    features: [], // Left empty intentionally as benefits are used primarily
    benefits: ${JSON.stringify(item.benefits, null, 6).replace(/\n/g, '\n    ')},
    eligibleApplicants: ${JSON.stringify(item.eligibleApplicants, null, 6).replace(/\n/g, '\n    ')},
    documentsRequired: ${JSON.stringify(item.documentsRequired, null, 6).replace(/\n/g, '\n    ')},
    timeline: ${JSON.stringify(item.timeline, null, 6).replace(/\n/g, '\n    ')},
    faqs: ${JSON.stringify(item.faqs, null, 6).replace(/\n/g, '\n    ')}
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
`;

  fs.writeFileSync(path.join(outputDir, item.name + '.tsx'), content);
});

console.log('Generated 7 loan advisory pages successfully.');
