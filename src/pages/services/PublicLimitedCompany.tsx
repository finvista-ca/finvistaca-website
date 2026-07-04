import React from 'react';
import { ServiceLayout, type ServicePageData } from '../../components/services/ServiceLayout';
import type { ServiceItem } from '../../data/servicesData';

interface PublicLimitedCompanyProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export const PublicLimitedCompany: React.FC<PublicLimitedCompanyProps> = ({ service, relatedServices }) => {
  const pageData: ServicePageData = {
    title: "Public Limited Company",
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
