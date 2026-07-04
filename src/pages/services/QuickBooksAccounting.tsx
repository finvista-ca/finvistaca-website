import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface QuickBooksAccountingProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const QuickBooksAccounting: React.FC<QuickBooksAccountingProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "QuickBooks Accounting Services",
    intro_title: "Efficient Financial Management",
    intro_p1: "QuickBooks is one of the world's most widely used accounting software solutions, helping businesses simplify bookkeeping, financial reporting, payroll, tax management, invoicing, and expense tracking.",
    intro_p2: "Suitable for startups, consultants, and growing enterprises, QuickBooks provides powerful financial management tools. Finvista offers complete QuickBooks implementation, data migration, bookkeeping, and ongoing support.",
    features: [
      { title: "Software Setup", desc: "Configuring QuickBooks Online (QBO) according to your specific industry needs.", icon: "Settings" },
      { title: "Expense Tracking", desc: "Connecting bank accounts and categorizing expenses for accurate tracking.", icon: "CreditCard" },
      { title: "Invoicing", desc: "Creating custom, professional invoice templates to send directly to clients.", icon: "FileText" },
      { title: "Data Migration", desc: "Smooth transition of financial data from Excel or legacy desktop software to QBO.", icon: "Database" },
      { title: "Financial Reporting", desc: "Generating comprehensive Profit & Loss, Balance Sheet, and cash flow reports.", icon: "BarChart" },
      { title: "Inventory Management", desc: "Tracking product costs, quantities, and sales via QuickBooks inventory features.", icon: "Package" }
    ],
    benefits: [
      { title: "User-Friendly", desc: "An intuitive platform that is easy for business owners and consultants to navigate.", icon: "Smile" },
      { title: "Better Cash Flow", desc: "Track unpaid invoices easily and send automatic payment reminders to clients.", icon: "TrendingUp" },
      { title: "Tax Readiness", desc: "Keep your books perfectly organized year-round for stress-free tax filings.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Needs Assessment",
      "Account Setup",
      "Chart of Accounts Design",
      "Bank Connection",
      "Data Import",
      "Monthly Bookkeeping"
    ],
    faqs: [
{ q: "Who is QuickBooks best suited for?", a: "It is ideal for small businesses, freelancers, consultants, retail businesses, and service agencies." },
    { q: "Can QuickBooks integrate with GST?", a: "Yes, QuickBooks Online provides features to track GST on sales and purchases, and generate GST reports." },
    { q: "Do I need accounting knowledge to use it?", a: "While basic features like invoicing are easy for anyone, we recommend having professionals handle the actual reconciliation and reporting to ensure accuracy." },
    { q: "Is QuickBooks a cloud-based software?", a: "Yes, QuickBooks Online is entirely cloud-based, allowing you to access your accounts from any web browser or mobile app." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
