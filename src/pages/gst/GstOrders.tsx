import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

// GST removal/appeal & other orders are published and updated frequently on the
// official CBIC-GST portal. We link out to the authoritative source.
const pageData = [
  { href: 'https://cbic-gst.gov.in/central-tax-orders.html', text: 'Central Tax Orders (Removal of Difficulties) – CBIC-GST' },
  { href: 'https://cbic-gst.gov.in/hindi-cgst-order.html', text: 'Central Tax Orders (Hindi) – CBIC-GST' },
  { href: 'https://cbic-gst.gov.in/', text: 'CBIC-GST Portal – all GST orders & updates' },
];

export const GstOrders: React.FC = () => {
  return (
    <ResourceLayout
      title="GST Orders"
      description="Access GST Orders issued by CBIC. Orders are updated regularly on the official portal."
      data={pageData}
      type="links"
    />
  );
};
