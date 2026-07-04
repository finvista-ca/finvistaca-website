import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface RevivalOfStruckOffCompaniesProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const RevivalOfStruckOffCompanies: React.FC<RevivalOfStruckOffCompaniesProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Revival of Struck Off Companies",
    intro_title: "Restore Your Struck Off Company",
    intro_p1: "Following the provisions of Section 248(1) of the Companies Act, 2013, the Registrar of Companies struck off many Companies for non-filing of MGT-7 and AOC-4 during preceding two financial years.",
    intro_p2: "Strike off means temporary closure of Companies. However, the Company can get revived for a period of ‘twenty years’ from the date of strike off by appealing to the National Company Law Tribunal (NCLT).",
    features: [
      { title: "NCLT Appeal (Section 252)", desc: "Appeal to the National Company Law Tribunal within 3 or 20 years.", icon: "Landmark" },
      { title: "Form NCLT-9", desc: "Filing the petition format along with a demand draft of Rs. 1000.", icon: "FileSignature" },
      { title: "ROC Submission", desc: "Serving a copy of the petition to the Registrar of Companies 14 days before hearing.", icon: "FileText" },
      { title: "Tribunal Hearing", desc: "The Tribunal hears both parties and issues the revival order.", icon: "Users" },
      { title: "Gazette Publication", desc: "ROC publishes the final restoration order in the Official Gazette.", icon: "Globe" },
      { title: "Form INC-28", desc: "Filing the Tribunal's order copy with the ROC within 30 days.", icon: "CheckCircle" }
    ],
    benefits: [
      { title: "Recover Assets", desc: "Regain legal access to the company's frozen bank accounts and assets.", icon: "Wallet" },
      { title: "Discharge Liabilities", desc: "Enforce the company to legally discharge its obligations to creditors.", icon: "ShieldCheck" },
      { title: "Remove Disqualifications", desc: "Protect directors from a 5-year disqualification due to non-compliance.", icon: "ShieldAlert" }
    ],
    timeline: [
      "Draft NCLT-9 Petition",
      "Serve Copy to ROC",
      "Tribunal Hearing",
      "Receive Order",
      "File INC-28 & Pending Returns"
    ],
    faqs: [
{ q: "What is the time limit to file an appeal?", a: "An appeal must be filed within 3 years for compulsory strike-off, and within 20 years for voluntary strike-off." },
    { q: "What documents prove the company was in operation?", a: "Up-to-date bank statements, AGM minutes, tax acknowledgments, and sales invoices." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
