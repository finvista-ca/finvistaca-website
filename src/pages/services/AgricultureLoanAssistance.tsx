import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface AgricultureLoanAssistanceProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const AgricultureLoanAssistance: React.FC<AgricultureLoanAssistanceProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Agriculture Loan Assistance",
    intro_title: "Agriculture Loan Assistance",
    intro_p1: "Supporting Farmers and Agribusinesses with Smart Financial Solutions",
    intro_p2: "Empowering agricultural growth through professional financial advisory and financing assistance.",
    overview: "Finvista assists farmers, agribusinesses, and rural entrepreneurs in identifying suitable agricultural financing options, government-supported schemes, and institutional loans.",
    features: [],
    benefits: [
      { title: "Agricultural Advisory", desc: "Agricultural finance advisory", icon: "CheckCircle" },
      { title: "Government Schemes", desc: "Government scheme guidance", icon: "CheckCircle" },
      { title: "Farm Equipment", desc: "Farm equipment financing", icon: "CheckCircle" },
      { title: "Crop Financing", desc: "Crop financing support", icon: "CheckCircle" },
      { title: "Documentation", desc: "Documentation assistance", icon: "CheckCircle" },
      { title: "End-to-end Advisory", desc: "End-to-end advisory", icon: "CheckCircle" }
    ],
    eligibleApplicants: [
      "Farmers",
      "Agribusiness Owners",
      "Dairy Operators",
      "Horticulture Businesses",
      "Agricultural Entrepreneurs"
    ],
    documentsRequired: [
      "Aadhaar Card",
      "PAN Card",
      "Land Records",
      "Bank Statements",
      "Agricultural Details",
      "Income Proof",
      "Passport Size Photograph"
    ],
    timeline: [
      "Consultation",
      "Scheme Identification",
      "Eligibility Assessment",
      "Documentation",
      "Lender Coordination",
      "Approval",
      "Financial Assistance"
    ],
    faqs: [
      { question: "Who can apply for agricultural loans?", answer: "Farmers, agricultural entrepreneurs, dairy owners, horticulture businesses, and allied agricultural enterprises." },
      { question: "What can agricultural loans be used for?", answer: "Crop cultivation, irrigation, farm equipment, livestock, storage facilities, and agricultural infrastructure." },
      { question: "Are government subsidy schemes available?", answer: "Yes. Several government-supported agricultural finance schemes are available based on eligibility." },
      { question: "Can I finance agricultural machinery?", answer: "Yes. Tractors, harvesters, irrigation systems, and other farm equipment can often be financed." },
      { question: "Is collateral always required?", answer: "Not always. Some agricultural loan schemes offer collateral-free financing within prescribed limits." },
      { question: "What documents are commonly required?", answer: "Land records, identity proof, bank statements, cultivation details, and other lender-specific documents." },
      { question: "How does Finvista help?", answer: "We help identify the most suitable agricultural finance schemes, prepare documentation, and coordinate with financial institutions." }
    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
