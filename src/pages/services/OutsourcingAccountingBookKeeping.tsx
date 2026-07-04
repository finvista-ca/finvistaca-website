import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface OutsourcingAccountingBookKeepingProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const OutsourcingAccountingBookKeeping: React.FC<OutsourcingAccountingBookKeepingProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Outsourcing Accounting & Book Keeping",
    intro_title: "Professional Financial Management",
    intro_p1: "Managing accounting and bookkeeping functions efficiently is essential for every business, regardless of its size or location. Outsourcing accounting services enables businesses to reduce operational costs, improve financial accuracy, and focus on their core activities.",
    intro_p2: "Finvista provides comprehensive Accounting & Bookkeeping Outsourcing services for businesses in India and overseas. By leveraging secure cloud-based solutions and international accounting standards, we help businesses maintain accurate records and ensure regulatory compliance.",
    features: [
      { title: "General Ledger Maintenance", desc: "Accurate recording of day-to-day financial transactions and journal entries.", icon: "BookOpen" },
      { title: "Bank Reconciliation", desc: "Regular reconciliation of bank statements with accounting ledgers.", icon: "Landmark" },
      { title: "Accounts Payable & Receivable", desc: "Efficient tracking of vendor payments and customer invoices.", icon: "Wallet" },
      { title: "Financial Statements", desc: "Preparation of Balance Sheets, P&L accounts, and Cash Flow statements.", icon: "FileText" },
      { title: "MIS Reporting", desc: "Customized Management Information System reports for business insights.", icon: "BarChart" },
      { title: "Month & Year-End Closing", desc: "Systematic closure of financial periods ensuring tax readiness.", icon: "Calendar" }
    ],
    benefits: [
      { title: "Reduced Operational Costs", desc: "Save significantly on hiring, training, and retaining in-house accounting staff.", icon: "TrendingDown" },
      { title: "Accurate Bookkeeping", desc: "Ensure error-free financial records maintained by experienced Chartered Accountants.", icon: "BadgeCheck" },
      { title: "Better Financial Control", desc: "Gain deep insights into your cash flow and financial health with timely reports.", icon: "TrendingUp" }
    ],
    timeline: [
      "Consultation",
      "Requirement Analysis",
      "Process Mapping",
      "Software Setup",
      "Data Migration",
      "Ongoing Bookkeeping"
    ],
    faqs: [
{ q: "Why should I outsource my bookkeeping?", a: "Outsourcing saves costs, ensures high accuracy, provides access to expert professionals, and frees up your time to focus on business growth." },
    { q: "Do you provide accounting services for overseas businesses?", a: "Yes, we handle accounting for overseas clients adhering to international accounting standards (IFRS, US GAAP) using cloud software." },
    { q: "How secure is my financial data?", a: "We use encrypted, industry-standard cloud accounting software (like Xero, Zoho, QuickBooks) and maintain strict data confidentiality policies." },
    { q: "How often will I receive financial reports?", a: "We can provide reports on a weekly, monthly, or quarterly basis depending on your business requirements." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
