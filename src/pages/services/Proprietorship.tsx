import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ProprietorshipProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const Proprietorship: React.FC<ProprietorshipProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Proprietorship Registration",
    intro_title: "Start your solo entrepreneurial journey",
    intro_p1: "A Sole Proprietorship is the simplest and most common business structure in India...",
    intro_p2: "It is ideal for unorganized sectors, freelancers, and small traders who want to start a business quickly with minimal compliance. Since the business and the owner are considered the same entity, the proprietor has complete control over operations and profits.",
    features: [
      { title: "Proprietorship Registration", desc: "Complete assistance in registering your sole proprietorship.", icon: "FileText" },
      { title: "PAN & TAN Assistance", desc: "Fast-track application and processing of PAN and TAN for your business.", icon: "CheckCircle" },
      { title: "GST Registration", desc: "Seamless GSTIN acquisition to ensure compliance from day one.", icon: "FileSignature" },
      { title: "MSME (Udyam) Registration", desc: "Get Udyam registration to avail government benefits and subsidies.", icon: "Briefcase" },
      { title: "Bank Account Assistance", desc: "Support with opening a current account in your business name.", icon: "Landmark" },
      { title: "Tax Consultation", desc: "Expert advice on taxation and annual compliance requirements.", icon: "HelpCircle" }
    ],
    benefits: [
      { title: "Fast & Easy Setup", desc: "Start your business operations within a few days with minimal legal formalities.", icon: "Zap" },
      { title: "Low Compliance", desc: "Fewer statutory requirements compared to companies or LLPs.", icon: "ShieldCheck" },
      { title: "Complete Control", desc: "Retain 100% ownership and control over all business decisions and profits.", icon: "Check" },
      { title: "Affordable", desc: "Highly cost-effective registration and maintenance for small businesses.", icon: "Wallet" },
      { title: "Tax Guidance", desc: "Taxed at individual slab rates, which can be advantageous for new businesses.", icon: "TrendingUp" }
    ],
    timeline: [
      "Initial Consultation & Requirement Gathering",
      "Collection of KYC Documents (PAN, Aadhaar, Address Proof)",
      "Filing of MSME / Udyam Registration",
      "Filing of GST Registration (if applicable)",
      "Opening of Current Bank Account"
    ],
    faqs: [
      { q: "Do I need a separate PAN for my Proprietorship?", a: "No, a Sole Proprietorship does not have a separate legal entity. The business operates under the PAN of the proprietor." },
      { q: "Is GST Registration mandatory for a Proprietorship?", a: "It is mandatory only if your aggregate turnover crosses the threshold limit (usually Rs. 40 Lakhs for goods, Rs. 20 Lakhs for services) or if you engage in inter-state trade or e-commerce." },
      { q: "Can I use a fictitious name for my business?", a: "Yes, you can operate under a trade name, but legal documents will still bear your personal name along with the trade name." },
      { q: "What documents are required to open a current account?", a: "Banks generally require any two proof of business (like MSME certificate, GST registration, or Shop & Establishment license) along with your KYC documents." },
      { q: "How are taxes filed for a Proprietorship?", a: "You file your business income under 'Profits and Gains from Business or Profession' along with your personal Income Tax Return (ITR-3 or ITR-4)." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
