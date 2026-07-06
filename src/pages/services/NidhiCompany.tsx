import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface NidhiCompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const NidhiCompany: React.FC<NidhiCompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Nidhi Company",
    intro_title: "",
    intro_p1: "",
    intro_p2: "",
    features: [
      { title: "Nidhi Incorporation", desc: "Incorporation of a Nidhi Company under the Companies Act, 2013.", icon: "Building" },
      { title: "NDH Forms Filing", desc: "Filing of mandatory NDH-1, NDH-2, NDH-3, and NDH-4 forms.", icon: "FileText" },
      { title: "Compliance Setup", desc: "Guidance on Nidhi Rules, 2014 regarding deposits, loans, and net owned funds.", icon: "ShieldCheck" },
      { title: "Drafting Policies", desc: "Drafting loan and deposit policies in accordance with regulations.", icon: "FileSignature" },
      { title: "Statutory Audits", desc: "Assistance with specialized Nidhi company auditing.", icon: "CheckCircle" }
    ],
    benefits: [
      { title: "No RBI Approval", desc: "Operates as a non-banking financial company without needing RBI approval.", icon: "Zap" },
      { title: "Easy Lending", desc: "Simple mechanism to accept deposits and lend money strictly to its members.", icon: "Wallet" },
      { title: "Promotes Savings", desc: "Encourages a culture of savings and thrift among community members.", icon: "HeartHandshake" },
      { title: "Low Capital Setup", desc: "Can be started with a relatively small minimum capital of Rs. 10 Lakhs.", icon: "TrendingUp" }
    ],
    timeline: [
      "DSC & DIN Generation for Minimum 3 Directors",
      "Name Approval (must end with 'Nidhi Limited')",
      "Incorporation under SPICe+",
      "Post-Incorporation Compliance (Adding 200 members)",
      "Filing NDH-4 for Declaration as a Nidhi Company"
    ],
    faqs: [
      { q: "What is a Nidhi Company?", a: "A Nidhi Company is a type of NBFC formed to cultivate the habit of thrift and savings amongst its members, receiving deposits from and lending to its members only." },
      { q: "Does a Nidhi Company require RBI registration?", a: "No, Nidhi Companies are exempted from core provisions of the RBI Act and are governed by the Ministry of Corporate Affairs (MCA)." },
      { q: "What is the minimum requirement to start?", a: "It requires a minimum of 3 directors, 7 members, and a minimum paid-up equity share capital of Rs. 10 Lakhs." },
      { q: "What are the post-incorporation requirements?", a: "Within 1 year, the Nidhi must have at least 200 members, Net Owned Funds of Rs. 20 Lakhs, and unencumbered term deposits of not less than 10% of outstanding deposits." },
      { q: "Can a Nidhi Company issue preference shares?", a: "No, a Nidhi Company cannot issue preference shares, debentures, or any other debt instruments." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
