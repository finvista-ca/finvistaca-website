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

    ],
    benefits: [

    ],
    timeline: [

    ],
    faqs: [

    ]
  };

  return <ServiceLayout service={service} relatedServices={relatedServices} pageData={pageData} />;
};
