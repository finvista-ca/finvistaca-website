import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface WindingPrivateLimitedCompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const WindingPrivateLimitedCompany: React.FC<WindingPrivateLimitedCompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Winding Up Private Limited Company",
    intro_title: "Official Company Closure",
    intro_p1: "A private limited company necessitates to be closed, or windup, meanwhile there are no changes or the Directors of the company are not willing to continue its services. Winding up involves bargaining all the assets, paying off the bankers and administering the remaining assets.",
    intro_p2: "The Ministry of Corporate Affairs has notified rules 2020 for winding up small businesses without having to go to a tribunal, under a provision in the Companies Act that offers an alternative to the commonly used liquidation procedure.",
    features: [
      { title: "Ordinary Resolution", desc: "Filing an ordinary resolution in the Board of Directors conference.", icon: "FileSignature" },
      { title: "No Debt Declaration", desc: "Constitution by members stating there is no pending debt on the company.", icon: "ShieldCheck" },
      { title: "Official Liquidator", desc: "Appointment of an Official Liquidator approved by the central government.", icon: "UserCheck" },
      { title: "Sale of Assets", desc: "Disposing of assets to discharge collected funds into the public account.", icon: "Wallet" },
      { title: "Creditor Returns", desc: "Calling upon creditors to determine and settle their claims.", icon: "Users" },
      { title: "WIN Forms Filing", desc: "Filing extensive WIN series forms from WIN-1 to WIN-95 as required.", icon: "FileText" }
    ],
    benefits: [
      { title: "Release from Debts", desc: "Administrators and leaders are freed from lender accounts and pressure.", icon: "BadgeCheck" },
      { title: "Halt Legal Actions", desc: "Withdrawing legal action upon the company during the liquidation method.", icon: "ShieldAlert" },
      { title: "Cancel Agreements", desc: "Eliminates all terms and conditions of existing lease contracts.", icon: "XOctagon" },
      { title: "Protection for Creditors", desc: "Creditors benefit from a structured statement of credits.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Board Resolution",
      "Liquidator Appointment",
      "Asset Sale",
      "Creditor Settlement",
      "Final Dissolution"
    ],
    faqs: [
{ q: "What is the summary procedure for liquidation?", a: "It allows companies with assets under Rs 1 crore to wind up through the Central Government rather than the Tribunal." },
    { q: "What happens to leases when a company is wound up?", a: "If the company has entered into a lease, the liquidation process will legally eliminate all terms and conditions of the contract." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
