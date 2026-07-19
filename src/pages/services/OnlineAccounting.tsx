import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface OnlineAccountingProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const OnlineAccounting: React.FC<OnlineAccountingProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Online Accounting",
    intro_title: "Cloud-Based Financial Management",
    intro_p1: "Online Accounting enables businesses to manage their financial records securely through cloud-based accounting platforms, providing real-time access to financial information from anywhere in the world.",
    intro_p2: "It eliminates manual bookkeeping, improves collaboration, and enhances data security. FinvistaCA provides complete Online Accounting solutions, ensuring your financial data remains accurate, accessible, and compliant.",
    features: [
      { title: "Cloud Accounting", desc: "Setup and management of accounting books entirely on secure cloud servers.", icon: "Cloud" },
      { title: "Bank Integration", desc: "Live bank feeds for automated, real-time transaction reconciliation.", icon: "Landmark" },
      { title: "Financial Reporting", desc: "Real-time generation of P&L, Balance Sheet, and cash flow statements.", icon: "BarChart" },
      { title: "GST Accounting", desc: "Seamless mapping of transactions for automated GST return preparation.", icon: "FileCheck" },
      { title: "Invoicing", desc: "Creation and tracking of professional, GST-compliant digital invoices.", icon: "FileText" },
      { title: "Anywhere Access", desc: "Access your financial data securely from any device, anywhere in the world.", icon: "Smartphone" }
    ],
    benefits: [
      { title: "Real-Time Information", desc: "Access up-to-date financial data instantly to make informed business decisions.", icon: "Clock" },
      { title: "Cloud Accessibility", desc: "Collaborate seamlessly with your accountant remotely via the cloud.", icon: "CloudLightning" },
      { title: "Enhanced Security", desc: "Your data is backed up automatically and protected by enterprise-grade encryption.", icon: "Lock" }
    ],
    timeline: [
      "Software Selection",
      "Chart of Accounts Setup",
      "Bank Integration",
      "Historical Data Migration",
      "Go Live",
      "Ongoing Support"
    ],
    faqs: [{ q: "What is online accounting?", a: "It involves using internet-based accounting software to store and manage your financial data on remote servers instead of a local computer." },
    { q: "Is my financial data secure in the cloud?", a: "Yes, leading online accounting platforms use bank-level encryption, multi-factor authentication, and automatic backups to secure your data." },
    { q: "Can I access my accounts from my phone?", a: "Absolutely. Most online accounting platforms offer mobile apps that allow you to view reports, send invoices, and capture receipts on the go." },
    { q: "Do I need to install any software?", a: "No, online accounting is completely browser-based, meaning there is nothing to install or manually update." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
