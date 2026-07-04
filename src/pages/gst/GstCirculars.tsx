import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "2025",
    "254/11/2025-GST",
    "Assigning proper officer under section 74A, section 75(2) and section 122 of the Central Goods and Services Tax Act, 2017",
    ""
  ],
  [
    "2025",
    "253/10/2025-GST",
    "Regarding withdrawal of circular No. 212/6/2024-GST.",
    ""
  ],
  [
    "2025",
    "252/09/2025-GST",
    "Communication to taxpayers through eOffice - requirement of Document Identification Number (DIN)",
    ""
  ],
  [
    "2025",
    "251/08/2025-GST",
    "Clarification on various doubts related to treatment of secondary or post-sale discounts under GST",
    ""
  ],
  [
    "2025",
    "250/07/2025-GST",
    "Reviewing authority, Revisional Authority and Appellate Authority in respect of orders passed by Common Adjudicating Authority (CAA) for show cause notices issued by DGGI",
    ""
  ],
  [
    "2025",
    "249/06/2025-GST",
    "Generation and quoting of Document Identification Number(DIN) on any communication issued by the officers of the Central Board of Indirect Taxes and Customs (CBIC) to tax payers and other concerned persons",
    ""
  ],
  [
    "2025",
    "248/05/2025-GST",
    "Various issues related to availment of benefit of Section 128A of the CGST Act, 2017",
    ""
  ],
  [
    "2025",
    "247/04/2025-GST",
    "Clarification regarding GST rates & classification (goods) based on the recommendations of the GST Council in its 55th meeting held on 21st December, 2024, at Jaisalmer.",
    ""
  ],
  [
    "2025",
    "246/03/2025-GST",
    "Clarification on applicability of late fee for delay in furnishing of FORM GSTR-9C",
    ""
  ],
  [
    "2025",
    "245/02/2025-GST",
    "Clarifications regarding applicability of GST on certain services.",
    ""
  ],
  [
    "2025",
    "28-Jan-2025",
    "Regularizing payment of GST on co-insurance premium apportioned by the lead insurer to the co-insurer and on ceding /re-insurance commission deducted from the reinsurance premium paid by the insurer to the reinsurer.",
    ""
  ],
  [
    "2024",
    "243/37/2024-GST",
    "Clarification on various issues pertaining to GST treatment of vouchers",
    ""
  ],
  [
    "2024",
    "242/36/2024-GST",
    "Clarification on place of supply of Online Services supplied by the suppliers of services to unregistered recipients",
    ""
  ],
  [
    "2024",
    "241/35/2024-GST",
    "Clarification on availability of input tax credit as per clause (b) of sub-section (2) of section 16 of the Central Goods and Services Tax Act, 2017 in respect of goods which have been delivered by the supplier at his place of business under Ex-Works Contract",
    ""
  ],
  [
    "2024",
    "240/34/2024-GST",
    "Clarification in respect of input tax credit availed by electronic commerce operators where services specified under Section 9(5) of Central Goods and Services Tax Act, 2017 are supplied through their platform",
    ""
  ],
  [
    "2024",
    "239/33/2024--GST",
    "Amendment to Circular No. 31/05/2018-GST, dated 9th February, 2018 on Proper officer under sections 73 and 74 of the Central Goods and Services Tax Act, 2017 and under the Integrated Goods and Services Tax Act, 2017–reg.",
    ""
  ],
  [
    "2024",
    "238/32/2024-GST",
    "Clarification of various doubts related to Section 128A of the CGST Act, 2017.",
    ""
  ],
  [
    "2024",
    "237/31/2024-GST",
    "Clarifying the issues regarding implementation of provisions of sub-section (5) and sub-section (6) in section 16 of CGST Act,2017.",
    ""
  ],
  [
    "2024",
    "236/30/2024-GST",
    "Clarification regarding the scope of “as is / as is, where is basis” mentioned in the GST Circulars issued on the basis of recommendation of the GST Council in its meetings",
    ""
  ],
  [
    "2024",
    "235/29/2024-GST",
    "Clarification regarding GST rates & classification (goods) based on the recommendations of the GST Council in its 54th meeting held on 9 th September 2024 at New Delhi",
    ""
  ]
];

export const GstCirculars: React.FC = () => {
  return (
    <ResourceLayout 
      title="Gst Circulars"
      description="View and search through Gst Circulars documents."
      data={pageData}
      type="table"
    />
  );
};
