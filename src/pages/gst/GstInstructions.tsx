import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

// GST instructions/guidelines are published and updated frequently on the
// official CBIC-GST portal. We link out to the authoritative source.
const pageData = [
  { href: 'https://cbic-gst.gov.in/cgst-instructions.html', text: 'CGST Instructions / Guidelines – CBIC-GST' },
  { href: 'https://cbic-gst.gov.in/', text: 'CBIC-GST Portal – all GST instructions & updates' },
];

export const GstInstructions: React.FC = () => {
  return (
    <ResourceLayout
      title="GST Instructions"
      description="Access GST Instructions and guidelines issued by CBIC. Updated regularly on the official portal."
      data={pageData}
      type="links"
    />
  );
};
