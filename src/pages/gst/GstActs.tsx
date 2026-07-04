import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "Section 1",
    "Short title, extent and commencement",
    ""
  ],
  [
    "Section 2",
    "Definitions",
    ""
  ],
  [
    "Section 3",
    "Officers under this Act",
    ""
  ],
  [
    "Section 4",
    "Appointment of Officers",
    ""
  ],
  [
    "Section 5",
    "Powers of officers under GST",
    ""
  ],
  [
    "Section 6",
    "Authorisation of officers of State tax or Union territory tax as proper officer in certain circumstances",
    ""
  ],
  [
    "Section 7",
    "Scope of supply",
    ""
  ],
  [
    "Section 8",
    "Tax liability on composite and mixed supplies",
    ""
  ],
  [
    "Section 9",
    "Levy and collection",
    ""
  ],
  [
    "Section 10",
    "Composition levy",
    ""
  ],
  [
    "Section 11",
    "Power to grant exemption from tax",
    ""
  ],
  [
    "Section 12",
    "Time of Supply of Goods",
    ""
  ],
  [
    "Section 13",
    "Time of Supply of Services",
    ""
  ],
  [
    "Section 14",
    "Change in rate of tax in respect of supply of goods or services",
    ""
  ],
  [
    "Section 15",
    "Value of Taxable Supply",
    ""
  ],
  [
    "Section 16",
    "Eligibility and conditions for taking input tax credit",
    ""
  ],
  [
    "Section 17",
    "Apportionment of credit and blocked credits",
    ""
  ],
  [
    "Section 18",
    "Availability of credit in special circumstances",
    ""
  ],
  [
    "Section 19",
    "Taking input tax credit in respect of inputs and capital goods sent for job work",
    ""
  ],
  [
    "Section 20",
    "Manner of distribution of credit by Input Service Distributor",
    ""
  ]
];

export const GstActs: React.FC = () => {
  return (
    <ResourceLayout 
      title="Gst Acts"
      description="View and search through Gst Acts documents."
      data={pageData}
      type="table"
    />
  );
};
