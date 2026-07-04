import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "ITNS-280",
    "ITNS-280"
  ],
  [
    "2",
    "ITNS-281",
    "ITNS-281"
  ],
  [
    "3",
    "ITNS-282",
    "ITNS-282"
  ],
  [
    "4",
    "ITNS-283",
    "ITNS-283"
  ],
  [
    "5",
    "ITNS-284",
    "ITNS-284"
  ],
  [
    "6",
    "ITNS-285",
    "ITNS-285"
  ],
  [
    "7",
    "ITNS-286",
    "ITNS-286"
  ],
  [
    "8",
    "ITNS-287",
    "ITNS-287"
  ]
];

export const IncomeTaxChallans: React.FC = () => {
  return (
    <ResourceLayout 
      title="Income Tax Challans"
      description="View and search through Income Tax Challans documents."
      data={pageData}
      type="table"
    />
  );
};
