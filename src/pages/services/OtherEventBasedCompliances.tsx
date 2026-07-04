import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface OtherEventBasedCompliancesProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const OtherEventBasedCompliances: React.FC<OtherEventBasedCompliancesProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Other Event-Based Compliances",
    intro_title: "Dynamic ROC Compliances",
    intro_p1: "Event-Based Compliances are mandatory compliances which are other than the usual annual compliances. These relate to any adventitious or unforeseen tasks, events, or new dimensions of a company.",
    intro_p2: "Every change in any registered particulars associated with the company is to be reported appropriately to the relevant ROC and other regulatory authorities to stay legally comprehensive.",
    features: [
      { title: "Change in Registered Office", desc: "Filing INC-22 within 15 days of the address change.", icon: "Building" },
      { title: "Change in Directors", desc: "Filing DIR-12 within 30 days of appointment or resignation.", icon: "Users" },
      { title: "Increase Share Capital", desc: "Filing SH-7 within 30 days of passing Ordinary Resolution.", icon: "TrendingUp" },
      { title: "Allotment of Shares", desc: "Filing PAS-3 within 15 days of the allotment.", icon: "PieChart" },
      { title: "Charge Modification", desc: "Filing CHG-1 for creation or satisfaction of charges within 30 days.", icon: "Wallet" },
      { title: "Resolutions & Agreements", desc: "Filing MGT-14 within 30 days of passing the resolution.", icon: "FileText" }
    ],
    benefits: [
      { title: "Legal Protection", desc: "Ensures activities do not deviate from rules given in MOA and AOA.", icon: "ShieldCheck" },
      { title: "Accurate Records", desc: "Maintains correct disclosure of information to all concerned parties.", icon: "BadgeCheck" },
      { title: "Penalty Avoidance", desc: "Filing exact forms within their strict 15/30 day limits prevents massive fines.", icon: "ShieldAlert" }
    ],
    timeline: [
      "Triggering Event Occurs",
      "Pass Board/General Resolution",
      "Prepare Respective Form",
      "Filing within 15-30 Days",
      "ROC Approval"
    ],
    faqs: [
{ q: "What is an event-based compliance?", a: "It is a non-periodical filing triggered by specific company events like changing directors, address, or share capital." },
    { q: "When is form DIR-12 filed?", a: "DIR-12 must be filed within 30 days of any change (appointment/resignation) in Directors or Key Managerial Personnel." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
