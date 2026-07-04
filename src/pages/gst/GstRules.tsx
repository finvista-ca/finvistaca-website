import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "Central Goods and Services Tax Rules, 2017",
    " ",
    ""
  ],
  [
    "Introduction",
    "Preliminary",
    ""
  ],
  [
    "Rule 1",
    "Short title and Commencement",
    ""
  ],
  [
    "Rule 2",
    "Definitions",
    ""
  ],
  [
    "Introduction",
    "Composition Levy",
    ""
  ],
  [
    "Rule 3",
    "Intimation for composition levy",
    ""
  ],
  [
    "Rule 4",
    "Effective date for composition levy",
    ""
  ],
  [
    "Rule 5",
    "Conditions and restrictions for composition levy",
    ""
  ],
  [
    "Rule 6",
    "Validity of composition levy",
    ""
  ],
  [
    "Rule 7",
    "Rate of tax of the composition levy",
    ""
  ],
  [
    "Introduction",
    "Registration",
    ""
  ],
  [
    "Rule 8",
    "Application for registration",
    ""
  ],
  [
    "Rule 9",
    "Verification of the application and approval",
    ""
  ],
  [
    "Rule 10",
    "Issue of registration certificate",
    ""
  ],
  [
    "Rule 10A",
    "Furnishing of Bank Account Details",
    ""
  ],
  [
    "Rule 10B",
    "Aadhaar authentication for registered person",
    ""
  ],
  [
    "Rule 11",
    "Separate registration for multiple places of business within a State or a Union territory",
    ""
  ],
  [
    "Rule 12",
    "Grant of registration to persons required to deduct tax at source or to collect tax at\r\nsource",
    ""
  ],
  [
    "Rule 13",
    "Grant of registration to non-resident taxable person",
    ""
  ],
  [
    "Rule 14",
    "Grant of registration to a person supplying online information and database access\r\nor retrieval services from a place outside India to a non-taxable online recipient",
    ""
  ]
];

export const GstRules: React.FC = () => {
  return (
    <ResourceLayout 
      title="Gst Rules"
      description="View and search through Gst Rules documents."
      data={pageData}
      type="table"
    />
  );
};
