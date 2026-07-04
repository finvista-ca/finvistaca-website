import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface CSRRegistrationNGOsProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const CSRRegistrationNGOs: React.FC<CSRRegistrationNGOsProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "CSR Registration for NGOs",
    intro_title: "Corporate Social Responsibility",
    intro_p1: "Corporate Social Responsibility (CSR) Registration enables eligible NGOs, Trusts, and Section 8 Companies to receive CSR funding from companies under the provisions of the Companies Act, 2013.",
    intro_p2: "Organizations intending to undertake CSR activities must obtain registration with the MCA by filing Form CSR-1. Finvista provides complete assistance in eligibility assessment, documentation, and ongoing compliance advisory.",
    features: [
      { title: "Eligibility Assessment", desc: "Reviewing your track record and documents to ensure MCA compliance.", icon: "Search" },
      { title: "Form CSR-1 Filing", desc: "Accurate preparation and filing of the mandatory CSR-1 form with the MCA.", icon: "FileText" },
      { title: "CSR Registration Number", desc: "Securing your unique CSR registration number for corporate tie-ups.", icon: "BadgeCheck" },
      { title: "Digital Signatures", desc: "Assisting board members with required DSCs for online portal submission.", icon: "Lock" },
      { title: "Impact Assessment", desc: "Guidance on preparing project reports and impact assessments for corporates.", icon: "TrendingUp" },
      { title: "Compliance Advisory", desc: "Ensuring funds are utilized strictly according to CSR guidelines.", icon: "ShieldCheck" }
    ],
    benefits: [
      { title: "Unlock Corporate Funds", desc: "Become legally eligible to receive large-scale CSR funds from major corporations.", icon: "Wallet" },
      { title: "Trusted Partner", desc: "Registration significantly improves your credibility as a trusted implementation agency.", icon: "HeartHandshake" },
      { title: "Social Impact", desc: "Scale your charitable activities rapidly by collaborating on impactful development projects.", icon: "Globe" }
    ],
    timeline: [
      "Document Review",
      "DSC Generation",
      "Form CSR-1 Preparation",
      "CA/CS Certification",
      "MCA Submission & Approval"
    ],
    faqs: [
{ q: "What is Form CSR-1?", a: "It is a registration form filed with the MCA by NGOs to become eligible implementation agencies for corporate CSR activities." },
    { q: "Who needs to file CSR-1?", a: "Any Section 8 Company, Trust, or Society intending to undertake CSR activities on behalf of a corporate entity." },
    { q: "What are the prerequisites for CSR-1?", a: "The NGO must be legally registered and hold valid 12A and 80G registrations from the Income Tax Department." },
    { q: "Do I need a professional to certify the form?", a: "Yes, Form CSR-1 must be digitally signed and certified by a practicing Chartered Accountant, Company Secretary, or Cost Accountant." },
    { q: "How long does it take to get the CSR number?", a: "Once the certified form is successfully filed on the MCA portal, the unique CSR Registration Number is generated immediately." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
