import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface GSTCancellationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const GSTCancellation: React.FC<GSTCancellationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "GST Cancellation",
    intro_title: "Official GST Deregistration",
    intro_p1: "GST registration can be canceled by the registered person or by the GST officer, or by the registered person's legal heirs in case of death of the person under GST. GST registration cancellation means that the person will not be registered under GST anymore, and he will not have to pay or collect GST.",
    intro_p2: "If there is no business activity after obtaining GST registration, the taxpayer needs to initiate the GST cancellation as per the process laid out. If the taxpayer stops filing the GST returns and lets the GST registration be canceled, then he cannot obtain another GST registration under the same PAN.",
    features: [
      { title: "Voluntary Cancellation", desc: "Applying for cancellation due to business closure, transfer, or turnover reduction.", icon: "XOctagon" },
      { title: "Form GST REG-16", desc: "Filing the official cancellation application with reason and date.", icon: "FileText" },
      { title: "Final GST Payment", desc: "Clearing all overdue GST liability and reversing ITC on existing stock.", icon: "Wallet" },
      { title: "GSTR-10 Final Return", desc: "Filing the final return within 3 months of cancellation to ensure zero liabilities.", icon: "CheckCircle" }
    ],
    benefits: [
      { title: "Avoid Penalties", desc: "Cancel properly instead of abandoning to prevent heavy non-compliance penalties.", icon: "ShieldAlert" },
      { title: "Clean Slate", desc: "Ensure you can re-register in the future under the same PAN if needed.", icon: "BadgeCheck" },
      { title: "Liability Resolution", desc: "Accurately calculate and pay final liabilities without overpaying.", icon: "TrendingUp" }
    ],
    timeline: [
      "Clear Overdue Returns",
      "File REG-16",
      "Officer Verification",
      "Order of Cancellation",
      "File GSTR-10"
    ],
    faqs: [
{ q: "Can an officer cancel my GST registration automatically?", a: "Yes, if you do not conduct business from the declared place or fail to file returns for six months." },
    { q: "What happens if I just stop filing returns instead of canceling?", a: "Your registration will be canceled by the officer, but you will be liable for heavy penalties and blocked from obtaining another GST under the same PAN until late fees are paid." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
