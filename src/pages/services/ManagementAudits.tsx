import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface ManagementAuditsProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const ManagementAudits: React.FC<ManagementAuditsProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Management Audits",
    intro_title: "Analyze Management Efficiency",
    intro_p1: "Management Audit helps us to analyze the health of company management. It plays a vital role in the management support system, essential to strengthen the way operations are planned and executed.",
    intro_p2: "It is an inspection of company management where actions and decisions are assessed critically. This type of audit is mostly preferred by Investor Group Shareholders to evaluate operational efficiency.",
    features: [
      { title: "Efficiency Evaluation", desc: "Assessing plans and policies to improve management's operational efficiency.", icon: "Activity" },
      { title: "Resource Optimization", desc: "Ensuring that human and capital resources are utilized at an optimum level.", icon: "TrendingUp" },
      { title: "Internal Control Review", desc: "Finding weaknesses in internal systems and conveying suitable suggestions.", icon: "Search" },
      { title: "Human Resource Evaluation", desc: "Checking performance evaluation of human resources at every process level.", icon: "Users" }
    ],
    benefits: [
      { title: "Identify Deficiencies", desc: "Point out critical deficiencies in operations during the audit.", icon: "Target" },
      { title: "Sickness Signals", desc: "Provides early warning signals about company sickness beforehand.", icon: "ShieldAlert" },
      { title: "Predict Problems", desc: "Helps you magnify and foresee problems, suggesting suitable remedies.", icon: "Eye" }
    ],
    timeline: [
      "Operations Review",
      "Policy Assessment",
      "Deficiency Identification",
      "Management Evaluation",
      "Remedy Suggestion"
    ],
    faqs: [
{ q: "What is the focus of a Management Audit?", a: "It focuses on analyzing the health of company management, evaluating decisions, policies, and operational efficiency." },
    { q: "Who usually prefers a Management Audit?", a: "It is mostly preferred by Investor Group Shareholders to safeguard their investments and ensure competent management." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
