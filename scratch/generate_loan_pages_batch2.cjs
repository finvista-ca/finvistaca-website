const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../src/pages/services');

const data = [
  {
    name: 'VehicleLoanAssistance',
    title: 'Vehicle Loan Assistance',
    intro_title: 'Vehicle Loan Assistance',
    intro_p1: 'Drive Your Dreams Forward with the Right Financing',
    intro_p2: 'Whether you\'re purchasing your first car or upgrading to a new vehicle, Finvista helps you secure competitive vehicle financing through trusted banks and financial institutions.',
    overview: 'Buying a vehicle is a significant investment, and choosing the right financing option is just as important. Our experts guide you through lender comparisons, documentation, eligibility assessment, and loan processing to ensure a smooth borrowing experience.',
    benefits: [
      { title: 'Competitive Options', desc: 'Competitive financing options', icon: 'CheckCircle' },
      { title: 'Lender Comparison', desc: 'Expert lender comparison', icon: 'CheckCircle' },
      { title: 'Quick Documentation', desc: 'Quick documentation assistance', icon: 'CheckCircle' },
      { title: 'Flexible Repayment', desc: 'Flexible repayment guidance', icon: 'CheckCircle' },
      { title: 'Transparent Process', desc: 'Transparent advisory process', icon: 'CheckCircle' },
      { title: 'End-to-end Support', desc: 'End-to-end application support', icon: 'CheckCircle' },
      { title: 'Faster Approval', desc: 'Faster approval assistance', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Salaried Employees', 'Self-employed Professionals', 'Business Owners', 'Partnership Firms', 'Companies'],
    documentsRequired: ['PAN Card', 'Aadhaar Card', 'Address Proof', 'Income Proof', 'Bank Statements', 'Vehicle Quotation', 'Passport Size Photograph'],
    timeline: ['Initial Consultation', 'Eligibility Assessment', 'Lender Comparison', 'Documentation Support', 'Loan Application', 'Approval Coordination', 'Vehicle Delivery Support']
  },
  {
    name: 'EducationLoanAssistance',
    title: 'Education Loan Assistance',
    intro_title: 'Education Loan Assistance',
    intro_p1: 'Invest in Your Future with Confidence',
    intro_p2: 'Higher education is an investment in your future. Finvista helps students and parents secure education loans that support academic aspirations without unnecessary financial stress.',
    overview: 'We simplify the education loan process by assisting with lender selection, documentation, financial planning, and application support for studies in India and abroad.',
    benefits: [
      { title: 'Loan Comparison', desc: 'Loan comparison across lenders', icon: 'CheckCircle' },
      { title: 'Global Studies', desc: 'Assistance for domestic & international studies', icon: 'CheckCircle' },
      { title: 'Documentation Guidance', desc: 'Documentation guidance', icon: 'CheckCircle' },
      { title: 'Competitive Financing', desc: 'Competitive financing options', icon: 'CheckCircle' },
      { title: 'Flexible Repayment', desc: 'Flexible repayment understanding', icon: 'CheckCircle' },
      { title: 'End-to-end Advisory', desc: 'End-to-end advisory', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Students', 'Parents & Guardians', 'Working Professionals pursuing higher education'],
    documentsRequired: ['Admission Letter', 'Academic Records', 'PAN & Aadhaar', 'Income Proof of Co-applicant', 'Bank Statements', 'Fee Structure', 'Passport (for overseas education)'],
    timeline: ['Education Planning', 'Eligibility Assessment', 'Documentation Support', 'Lender Selection', 'Loan Application', 'Approval Assistance', 'Loan Disbursement']
  },
  {
    name: 'LoanAgainstProperty',
    title: 'Loan Against Property',
    intro_title: 'Loan Against Property (LAP)',
    intro_p1: 'Unlock the Value of Your Property',
    intro_p2: 'Leverage your residential or commercial property to secure financing for business expansion, education, medical expenses, or other financial requirements.',
    overview: 'Finvista assists clients in obtaining loans against eligible properties through careful lender evaluation, documentation, and professional advisory support.',
    benefits: [
      { title: 'Higher Eligibility', desc: 'Higher loan eligibility', icon: 'CheckCircle' },
      { title: 'Competitive Interest', desc: 'Competitive interest guidance', icon: 'CheckCircle' },
      { title: 'Longer Tenure', desc: 'Longer repayment tenure', icon: 'CheckCircle' },
      { title: 'Property Documentation', desc: 'Property documentation assistance', icon: 'CheckCircle' },
      { title: 'End-to-end Support', desc: 'End-to-end support', icon: 'CheckCircle' },
      { title: 'Transparent Advisory', desc: 'Transparent advisory', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Individuals', 'Business Owners', 'Professionals', 'Companies', 'Partnership Firms'],
    documentsRequired: ['Property Documents', 'Identity Proof', 'Address Proof', 'Income Proof', 'Bank Statements', 'PAN Card', 'Property Valuation Documents'],
    timeline: ['Property Assessment', 'Eligibility Review', 'Documentation Support', 'Lender Comparison', 'Loan Application', 'Approval Assistance', 'Disbursement Support']
  },
  {
    name: 'GoldLoanAdvisory',
    title: 'Gold Loan Advisory',
    intro_title: 'Gold Loan Advisory',
    intro_p1: 'Quick Financial Support Backed by Your Gold Assets',
    intro_p2: 'Need immediate funds? We help you obtain suitable gold loan solutions through trusted financial institutions with complete transparency.',
    overview: 'Gold loans offer a convenient financing option for short-term financial needs. Finvista assists clients in choosing suitable lenders while ensuring clarity throughout the borrowing process.',
    benefits: [
      { title: 'Quick Financing', desc: 'Quick financing guidance', icon: 'CheckCircle' },
      { title: 'Minimal Documentation', desc: 'Minimal documentation', icon: 'CheckCircle' },
      { title: 'Transparent Advisory', desc: 'Transparent advisory', icon: 'CheckCircle' },
      { title: 'Lender Comparison', desc: 'Multiple lender comparison', icon: 'CheckCircle' },
      { title: 'Flexible Repayment', desc: 'Flexible repayment understanding', icon: 'CheckCircle' },
      { title: 'End-to-end Assistance', desc: 'End-to-end assistance', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Individuals', 'Business Owners', 'Self-employed Professionals', 'Salaried Employees'],
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Address Proof', 'Gold Ornaments', 'Passport Size Photograph'],
    timeline: ['Consultation', 'Gold Evaluation Guidance', 'Lender Comparison', 'Documentation', 'Loan Processing', 'Approval', 'Disbursement']
  },
  {
    name: 'MachineryEquipmentLoan',
    title: 'Machinery & Equipment Loan Assistance',
    intro_title: 'Machinery & Equipment Loan Assistance',
    intro_p1: 'Power Business Growth Through Smart Asset Financing',
    intro_p2: 'Acquire the machinery and equipment your business needs with expert financing guidance from Finvista.',
    overview: 'Whether you\'re expanding manufacturing capacity or upgrading technology, we assist businesses in obtaining suitable financing for machinery and equipment purchases.',
    benefits: [
      { title: 'Equipment Financing', desc: 'Equipment financing guidance', icon: 'CheckCircle' },
      { title: 'Business Expansion', desc: 'Business expansion support', icon: 'CheckCircle' },
      { title: 'Documentation Assistance', desc: 'Documentation assistance', icon: 'CheckCircle' },
      { title: 'Competitive Options', desc: 'Competitive lender options', icon: 'CheckCircle' },
      { title: 'End-to-end Advisory', desc: 'End-to-end advisory', icon: 'CheckCircle' },
      { title: 'Faster Processing', desc: 'Faster processing', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Manufacturers', 'MSMEs', 'Startups', 'Industrial Businesses', 'Service Providers'],
    documentsRequired: ['Business Registration', 'Financial Statements', 'GST Returns', 'Bank Statements', 'Machinery Quotation', 'PAN Card', 'KYC Documents'],
    timeline: ['Requirement Analysis', 'Financial Assessment', 'Documentation', 'Lender Selection', 'Application', 'Approval', 'Asset Financing']
  },
  {
    name: 'CommercialVehicleLoan',
    title: 'Commercial Vehicle Loan Assistance',
    intro_title: 'Commercial Vehicle Loan Assistance',
    intro_p1: 'Helping Businesses Expand Their Transportation Capabilities',
    intro_p2: 'Finance commercial vehicles with confidence through our expert advisory services.',
    overview: 'We help logistics providers, transport businesses, fleet owners, and entrepreneurs secure financing for commercial vehicles through leading banks and financial institutions.',
    benefits: [
      { title: 'Fleet Expansion', desc: 'Fleet expansion support', icon: 'CheckCircle' },
      { title: 'Competitive Financing', desc: 'Competitive financing guidance', icon: 'CheckCircle' },
      { title: 'Lender Comparison', desc: 'Multiple lender comparison', icon: 'CheckCircle' },
      { title: 'Documentation', desc: 'Documentation assistance', icon: 'CheckCircle' },
      { title: 'Business Advisory', desc: 'Business-focused advisory', icon: 'CheckCircle' },
      { title: 'End-to-end Support', desc: 'End-to-end support', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Fleet Owners', 'Transport Businesses', 'Logistics Companies', 'Contractors', 'MSMEs'],
    documentsRequired: ['Business Registration', 'Financial Statements', 'PAN & Aadhaar', 'Bank Statements', 'Vehicle Quotation', 'GST Registration'],
    timeline: ['Consultation', 'Eligibility Assessment', 'Documentation', 'Lender Comparison', 'Loan Application', 'Approval', 'Vehicle Delivery']
  },
  {
    name: 'AgricultureLoanAssistance',
    title: 'Agriculture Loan Assistance',
    intro_title: 'Agriculture Loan Assistance',
    intro_p1: 'Supporting Farmers and Agribusinesses with Smart Financial Solutions',
    intro_p2: 'Empowering agricultural growth through professional financial advisory and financing assistance.',
    overview: 'Finvista assists farmers, agribusinesses, and rural entrepreneurs in identifying suitable agricultural financing options, government-supported schemes, and institutional loans.',
    benefits: [
      { title: 'Agricultural Advisory', desc: 'Agricultural finance advisory', icon: 'CheckCircle' },
      { title: 'Government Schemes', desc: 'Government scheme guidance', icon: 'CheckCircle' },
      { title: 'Farm Equipment', desc: 'Farm equipment financing', icon: 'CheckCircle' },
      { title: 'Crop Financing', desc: 'Crop financing support', icon: 'CheckCircle' },
      { title: 'Documentation', desc: 'Documentation assistance', icon: 'CheckCircle' },
      { title: 'End-to-end Advisory', desc: 'End-to-end advisory', icon: 'CheckCircle' }
    ],
    eligibleApplicants: ['Farmers', 'Agribusiness Owners', 'Dairy Operators', 'Horticulture Businesses', 'Agricultural Entrepreneurs'],
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Land Records', 'Bank Statements', 'Agricultural Details', 'Income Proof', 'Passport Size Photograph'],
    timeline: ['Consultation', 'Scheme Identification', 'Eligibility Assessment', 'Documentation', 'Lender Coordination', 'Approval', 'Financial Assistance']
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

console.log('Generated 7 loan advisory pages (Batch 2) successfully.');
