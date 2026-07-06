import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface NGORegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const NGORegistration: React.FC<NGORegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "NGO Registration",
    intro_title: "Create Meaningful Social Impact",
    intro_p1: "Non-Governmental Organizations (NGOs) play a vital role in addressing social, educational, environmental, and healthcare initiatives. Registering an NGO provides legal identity, operational transparency, and greater opportunities.",
    intro_p2: "NGOs may be established as a Trust, Society, or Section 8 Company. Finvista assists individuals and institutions in selecting the most suitable structure and provides complete registration and advisory services.",
    features: [
      { title: "Structure Advisory", desc: "Consultation to choose between Trust, Society, or Section 8 Company.", icon: "Search" },
      { title: "Complete Registration", desc: "End-to-end handling of the chosen incorporation process.", icon: "CheckCircle" },
      { title: "12A & 80G Registration", desc: "Assistance with obtaining crucial tax exemptions from the Income Tax department.", icon: "Wallet" },
      { title: "FCRA Advisory", desc: "Guidance on foreign contribution regulations for international grants.", icon: "Globe" },
      { title: "NITI Aayog Darpan", desc: "Registration on the Darpan portal for government funding eligibility.", icon: "Landmark" },
      { title: "Compliance Management", desc: "Annual filings, audit coordination, and statutory maintenance.", icon: "ShieldCheck" }
    ],
    benefits: [
      { title: "Operational Transparency", desc: "Establish a clear, legal framework that builds trust with donors and volunteers.", icon: "BadgeCheck" },
      { title: "Receive Donations", desc: "Legally collect public donations and apply for corporate CSR funding.", icon: "TrendingUp" },
      { title: "Tax Benefits", desc: "Allow your donors to claim tax deductions while exempting the NGO's income.", icon: "HeartHandshake" }
    ],
    timeline: [
      "Consultation",
      "Name Approval",
      "Drafting MOA/Deed",
      "Registration Filing",
      "Post-Registration Approvals"
    ],
    faqs: [{ q: "Which structure should I choose?", a: "Section 8 Companies offer the highest transparency, Trusts are easier to manage for small groups, and Societies are best for democratic operations." },
    { q: "Can NGOs receive foreign donations?", a: "Yes, but only after obtaining an FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs." },
    { q: "Is an NGO exempt from taxes automatically?", a: "No, an NGO must specifically apply for Section 12A registration to get its income exempted from tax." },
    { q: "How long does it take to register an NGO?", a: "A Trust takes about 10-15 days, a Section 8 Company takes 15-20 days, and a Society can take 30-45 days depending on the state." },
      { q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
