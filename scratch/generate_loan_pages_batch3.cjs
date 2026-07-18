const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../src/pages/services');

const data = [
  {
    name: 'ProjectFinance',
    title: 'Project Finance Assistance',
    intro_title: 'Project Finance Assistance',
    intro_p1: 'Transform Your Business Vision into Reality with Strategic Project Financing',
    intro_p2: 'Whether you\'re setting up a new venture, expanding existing operations, or undertaking large-scale infrastructure projects, Finvista helps you secure the right project financing solutions.',
    overview: 'Project finance requires careful planning, financial analysis, and lender confidence. Our experts assist businesses in preparing project reports, evaluating funding options, and coordinating with banks and financial institutions to obtain financing for long-term projects.',
    benefits: [
      { title: 'Project Funding', desc: 'Comprehensive project funding guidance', icon: 'CheckCircle' },
      { title: 'Financial Planning', desc: 'Detailed financial planning', icon: 'CheckCircle' },
      { title: 'Project Reports', desc: 'Project report assistance', icon: 'CheckCircle' },
      { title: 'Lender Comparison', desc: 'Lender comparison', icon: 'CheckCircle' },
      { title: 'Documentation Support', desc: 'Documentation support', icon: 'CheckCircle' },
      { title: 'Long-term Financing', desc: 'Long-term financing solutions', icon: 'CheckCircle' },
      { title: 'End-to-end Advisory', desc: 'End-to-end advisory', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Manufacturing Companies', 'Infrastructure Projects', 'Real Estate Developers', 'MSMEs', 'Large Enterprises', 'Startups with scalable projects'],
    documentsRequired: ['Detailed Project Report (DPR)', 'Business Registration Documents', 'Financial Statements', 'Bank Statements', 'Promoter KYC', 'Land/Asset Documents (if applicable)', 'Project Cost Estimates'],
    timeline: ['Project Consultation', 'Financial Feasibility Analysis', 'Documentation Preparation', 'Lender Identification', 'Loan Application', 'Approval Coordination', 'Project Funding Support']
  },
  {
    name: 'MortgageLoanAssistance',
    title: 'Mortgage Loan Assistance',
    intro_title: 'Mortgage Loan Assistance',
    intro_p1: 'Unlock Financial Flexibility Through Property-Backed Financing',
    intro_p2: 'Utilize your property as collateral to access financing for business growth, investments, or personal financial requirements.',
    overview: 'Finvista provides expert guidance in securing mortgage loans by helping clients understand eligibility, prepare documentation, compare lenders, and complete the application process with confidence.',
    benefits: [
      { title: 'Higher Capacity', desc: 'Higher borrowing capacity', icon: 'CheckCircle' },
      { title: 'Competitive Financing', desc: 'Competitive financing options', icon: 'CheckCircle' },
      { title: 'Flexible Repayment', desc: 'Flexible repayment guidance', icon: 'CheckCircle' },
      { title: 'Property Documentation', desc: 'Property documentation assistance', icon: 'CheckCircle' },
      { title: 'Personalized Advisory', desc: 'Personalized financial advisory', icon: 'CheckCircle' },
      { title: 'End-to-end Support', desc: 'End-to-end support', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Individuals', 'Business Owners', 'Professionals', 'Companies', 'Partnership Firms'],
    documentsRequired: ['Property Documents', 'Identity Proof', 'Address Proof', 'Income Proof', 'Bank Statements', 'PAN Card', 'Property Valuation Report'],
    timeline: ['Initial Consultation', 'Property Evaluation', 'Documentation Support', 'Lender Comparison', 'Loan Application', 'Approval Assistance', 'Loan Disbursement']
  },
  {
    name: 'OverdraftCashCredit',
    title: 'Overdraft & Cash Credit Advisory',
    intro_title: 'Overdraft & Cash Credit Advisory',
    intro_p1: 'Maintain Business Liquidity with Flexible Credit Solutions',
    intro_p2: 'Manage your day-to-day business finances efficiently through expert guidance on overdraft and cash credit facilities.',
    overview: 'Businesses often require flexible financing to manage working capital and operational expenses. Finvista helps identify suitable overdraft and cash credit solutions while assisting with documentation and lender coordination.',
    benefits: [
      { title: 'Cash Flow Management', desc: 'Improved cash flow management', icon: 'CheckCircle' },
      { title: 'Flexible Utilization', desc: 'Flexible credit utilization', icon: 'CheckCircle' },
      { title: 'Working Capital', desc: 'Working capital support', icon: 'CheckCircle' },
      { title: 'Documentation Assistance', desc: 'Documentation assistance', icon: 'CheckCircle' },
      { title: 'Lender Comparison', desc: 'Competitive lender comparison', icon: 'CheckCircle' },
      { title: 'Business Advisory', desc: 'Business-focused financial advisory', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Proprietorships', 'Partnership Firms', 'LLPs', 'Private Limited Companies', 'MSMEs'],
    documentsRequired: ['Business Registration', 'Financial Statements', 'GST Returns', 'Bank Statements', 'Income Tax Returns', 'PAN & KYC Documents'],
    timeline: ['Financial Assessment', 'Credit Requirement Analysis', 'Documentation Support', 'Lender Comparison', 'Application Submission', 'Credit Approval', 'Facility Activation']
  },
  {
    name: 'TradeFinanceAssistance',
    title: 'Trade Finance Assistance',
    intro_title: 'Trade Finance Assistance',
    intro_p1: 'Supporting Domestic and International Business Transactions',
    intro_p2: 'Strengthen your business operations with expert guidance on trade finance solutions designed to improve cash flow and facilitate secure transactions.',
    overview: 'Trade finance plays a vital role in enabling businesses to manage supplier payments, customer receivables, and cross-border transactions. Finvista helps businesses navigate suitable trade finance products offered by financial institutions.',
    benefits: [
      { title: 'Improved Cash Flow', desc: 'Improved cash flow', icon: 'CheckCircle' },
      { title: 'Secure Transactions', desc: 'Secure business transactions', icon: 'CheckCircle' },
      { title: 'Trade Financing', desc: 'Financing for trade operations', icon: 'CheckCircle' },
      { title: 'Documentation', desc: 'Documentation support', icon: 'CheckCircle' },
      { title: 'Banking Coordination', desc: 'Banking coordination', icon: 'CheckCircle' },
      { title: 'Expert Advisory', desc: 'Expert financial advisory', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Importers', 'Exporters', 'Manufacturers', 'Trading Companies', 'MSMEs'],
    documentsRequired: ['Business Registration', 'GST Registration', 'Import Export Code (IEC)', 'Financial Statements', 'Bank Statements', 'Trade Contracts', 'KYC Documents'],
    timeline: ['Business Consultation', 'Trade Assessment', 'Documentation Review', 'Product Selection', 'Application Processing', 'Approval Coordination', 'Ongoing Advisory']
  },
  {
    name: 'ExportImportFinance',
    title: 'Export & Import Finance Assistance',
    intro_title: 'Export & Import Finance Assistance',
    intro_p1: 'Empowering Global Business Through Smart Financial Solutions',
    intro_p2: 'Expand your international business confidently with financing solutions tailored for importers and exporters.',
    overview: 'Finvista assists businesses in obtaining export and import finance facilities that improve liquidity, manage international transactions, and support global trade operations.',
    benefits: [
      { title: 'International Financing', desc: 'International trade financing', icon: 'CheckCircle' },
      { title: 'Export Support', desc: 'Export working capital support', icon: 'CheckCircle' },
      { title: 'Import Financing', desc: 'Import financing guidance', icon: 'CheckCircle' },
      { title: 'Foreign Trade Advisory', desc: 'Foreign trade advisory', icon: 'CheckCircle' },
      { title: 'Documentation', desc: 'Documentation assistance', icon: 'CheckCircle' },
      { title: 'Banking Coordination', desc: 'Banking coordination', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Exporters', 'Importers', 'Trading Companies', 'Manufacturers', 'MSMEs'],
    documentsRequired: ['Import Export Code (IEC)', 'GST Registration', 'Business Registration', 'Financial Statements', 'Trade Contracts', 'Bank Statements', 'KYC Documents'],
    timeline: ['Consultation', 'Business Evaluation', 'Documentation Support', 'Financing Strategy', 'Lender Coordination', 'Approval Assistance', 'Ongoing Financial Support']
  },
  {
    name: 'BalanceTransferRestructuring',
    title: 'Balance Transfer & Loan Restructuring Advisory',
    intro_title: 'Balance Transfer & Loan Restructuring Advisory',
    intro_p1: 'Optimize Your Existing Loans with Smarter Financial Strategies',
    intro_p2: 'Reduce borrowing costs and improve financial flexibility through expert guidance on loan balance transfers and restructuring options.',
    overview: 'If you\'re paying high interest rates or struggling with existing repayment terms, Finvista helps evaluate better financing alternatives offered by banks and financial institutions.',
    benefits: [
      { title: 'Lower Interest', desc: 'Lower interest rate guidance', icon: 'CheckCircle' },
      { title: 'EMI Optimization', desc: 'EMI optimization', icon: 'CheckCircle' },
      { title: 'Improved Structure', desc: 'Improved repayment structure', icon: 'CheckCircle' },
      { title: 'Financial Assessment', desc: 'Financial assessment', icon: 'CheckCircle' },
      { title: 'Lender Comparison', desc: 'Multiple lender comparison', icon: 'CheckCircle' },
      { title: 'Complete Advisory', desc: 'Complete advisory support', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Existing Loan Borrowers', 'Home Loan Customers', 'Business Loan Customers', 'Personal Loan Borrowers', 'Mortgage Loan Customers'],
    documentsRequired: ['Existing Loan Statement', 'Identity Proof', 'Address Proof', 'Income Proof', 'Bank Statements', 'PAN Card', 'Existing Loan Documents'],
    timeline: ['Loan Review', 'Financial Analysis', 'Alternative Lender Comparison', 'Documentation Support', 'Balance Transfer Processing', 'Approval Coordination', 'Loan Closure & Transition']
  },
  {
    name: 'GovernmentSubsidyLoans',
    title: 'Government Subsidy Linked Loan Assistance',
    intro_title: 'Government Subsidy Linked Loan Assistance',
    intro_p1: 'Helping You Benefit from Government-Backed Financing Schemes',
    intro_p2: 'Take advantage of government-supported financial assistance and subsidy-linked loan programs with expert advisory from Finvista.',
    overview: 'We assist businesses, entrepreneurs, MSMEs, startups, and individuals in identifying suitable government schemes, preparing documentation, and applying for eligible subsidy-linked loans.',
    benefits: [
      { title: 'Scheme Identification', desc: 'Government scheme identification', icon: 'CheckCircle' },
      { title: 'Eligibility Assessment', desc: 'Subsidy eligibility assessment', icon: 'CheckCircle' },
      { title: 'Documentation', desc: 'Documentation assistance', icon: 'CheckCircle' },
      { title: 'Compliance', desc: 'Compliance guidance', icon: 'CheckCircle' },
      { title: 'Bank Coordination', desc: 'Bank coordination', icon: 'CheckCircle' },
      { title: 'End-to-end Advisory', desc: 'End-to-end advisory', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['MSMEs', 'Startups', 'Farmers', 'Women Entrepreneurs', 'SC/ST Entrepreneurs', 'Rural Businesses', 'Manufacturing Units'],
    documentsRequired: ['Aadhaar & PAN', 'Business Registration', 'Udyam Registration (if applicable)', 'Financial Statements', 'Bank Statements', 'Project Report', 'Scheme-specific Documents'],
    timeline: ['Consultation', 'Scheme Identification', 'Eligibility Assessment', 'Documentation Preparation', 'Application Submission', 'Bank & Government Coordination', 'Loan & Subsidy Assistance']
  }
];

const template = (service) => `import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ${service.name}Props {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ${service.name}: React.FC<${service.name}Props> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "${service.title}",
    intro_title: "${service.intro_title}",
    intro_p1: "${service.intro_p1}",
    intro_p2: "${service.intro_p2}",
    overview: "${service.overview}",
    features: [],
    benefits: [
${service.benefits.map(b => `      { title: "${b.title}", desc: "${b.desc}", icon: "${b.icon}" }`).join(',\n')}
    ],
    eligibleApplicants: [
${service.eligibleApplicants.map(ea => `      "${ea}"`).join(',\n')}
    ],
    documentsRequired: [
${service.documentsRequired.map(dr => `      "${dr}"`).join(',\n')}
    ],
    timeline: [
${service.timeline.map(t => `      "${t}"`).join(',\n')}
    ],
    faqs: []
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
`;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

data.forEach(service => {
  const filePath = path.join(outputDir, `${service.name}.tsx`);
  fs.writeFileSync(filePath, template(service), 'utf8');
});

console.log('Generated 7 loan advisory pages (Batch 3) successfully.');
