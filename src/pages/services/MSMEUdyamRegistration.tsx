import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface MSMEUdyamRegistrationProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const MSMEUdyamRegistration: React.FC<MSMEUdyamRegistrationProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "MSME Udyam Registration",
    intro_title: "Micro, Small & Medium Enterprises",
    intro_p1: "MSME Udyam Registration is a Government of India initiative that provides Micro, Small, and Medium Enterprises with official recognition and access to numerous financial and business benefits.",
    intro_p2: "FinvistaCA simplifies the entire Udyam Registration process for startups, manufacturers, service providers, and small businesses by assisting with eligibility assessment, Aadhaar authentication, and certificate generation.",
    features: [
      { title: "Eligibility Assessment", desc: "Determine your classification as a Micro, Small, or Medium enterprise.", icon: "BarChart" },
      { title: "Aadhaar Authentication", desc: "Seamless online registration using OTP-based Aadhaar verification.", icon: "Lock" },
      { title: "Certificate Generation", desc: "Obtain the official Udyam Registration Certificate swiftly.", icon: "FileCheck" },
      { title: "Profile Updates", desc: "Assistance with modifying details or updating investment/turnover figures.", icon: "Settings" },
      { title: "Advisory Services", desc: "Guidance on leveraging various MSME schemes and subsidies.", icon: "TrendingUp" },
      { title: "Tender Support", desc: "Assistance in participating in exclusive government tenders for MSMEs.", icon: "Briefcase" }
    ],
    benefits: [
      { title: "Collateral-Free Loans", desc: "Access priority sector lending and collateral-free bank loans easily.", icon: "Wallet" },
      { title: "Delayed Payment Protection", desc: "Legal protection against delayed payments from buyers under MSME Samadhaan.", icon: "ShieldCheck" },
      { title: "Government Subsidies", desc: "Eligibility for various tax incentives, trademark subsidies, and ISO reimbursement.", icon: "BadgeCheck" }
    ],
    timeline: [
      "Eligibility Check",
      "Aadhaar Verification",
      "Data Entry",
      "Application Submission",
      "Udyam Certificate Issued"
    ],
    faqs: [
{ q: "What are the benefits of Udyam Registration?", a: "Benefits include collateral-free loans, protection against delayed payments, and priority in government tenders." },
    { q: "Who is eligible for MSME registration?", a: "Manufacturers, service providers, startups, and small businesses that fall under the specified investment and turnover criteria." },
    { q: "Is a physical copy of the certificate provided?", a: "No, the Udyam Certificate is generated entirely online and can be downloaded digitally." },
    { q: "Do I need to renew my Udyam Registration?", a: "No, it has lifetime validity, but investment and turnover details are updated automatically via Income Tax and GST portals." },
    { q: "Is Aadhaar mandatory for registration?", a: "Yes, Aadhaar of the proprietor, partner, or director is mandatory for OTP authentication." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
