import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "General Circular No.01/2025",
    "Circular",
    "16/06/2025"
  ],
  [
    "2",
    "General Circular No.02/2025",
    "Circular",
    "16/06/2025"
  ],
  [
    "3",
    "General Circular No.09/2024",
    "Circular",
    "19/09/2024"
  ],
  [
    "4",
    "General Circular No.07/2024",
    "Circular",
    "17/07/2024"
  ],
  [
    "5",
    "General Circular No.06/2024",
    "Circular",
    "16/07/2024"
  ],
  [
    "6",
    "General Circular No.05/2024",
    "Circular",
    "06/07/2024"
  ],
  [
    "7",
    "General Circular No.04",
    "Circular",
    "04/07/2024"
  ],
  [
    "8",
    "General Circular No.03/2024",
    "Circular",
    "07/05/2024"
  ],
  [
    "9",
    "General Circular No.02/2024",
    "Circular",
    "19/02/2024"
  ],
  [
    "10",
    "General Circular No.01/2024",
    "Circular",
    "07/02/2024"
  ],
  [
    "11",
    "General Circular No.09/2023-Clarification",
    "Circular",
    "25/09/2023"
  ],
  [
    "12",
    "General Circular No.08/2023",
    "Circular",
    "23/08/2023"
  ],
  [
    "13",
    "General Circular No.07/2023",
    "Circular",
    "12/07/2023"
  ],
  [
    "14",
    "General Circular No.06/2023",
    "Circular",
    "21/06/2023"
  ],
  [
    "15",
    "General Circular No.04-2023",
    "Circular",
    "21/02/2023"
  ],
  [
    "16",
    "General Circular No.03/2023-Extension",
    "Circular",
    "07/02/2023"
  ],
  [
    "17",
    "General Circular No.05/2023-Filing",
    "Circular",
    "22/01/2023"
  ],
  [
    "18",
    "General Circular No.02/2023-Filing of Forms GNL-2",
    "Circular",
    "09/01/2023"
  ],
  [
    "19",
    "General Circular No.01/2023-Release Plan of 45 company e-Forms in MCA 21 Version 3.0-reg.",
    "Circular",
    "09/01/2023"
  ],
  [
    "20",
    "General Circular No.10/2022-Clarification of holding of Annual General Meeting (AGM) through Video Conference (VC) or Other Audio Visual Means (OAVM)-reg.",
    "Circular",
    "28/12/2022"
  ],
  [
    "21",
    "General Circular No.09/2022-Extension of time for filing e-form DIR-3 KYC and web-form DIR-3 KYC WEB without fee upto 15.10.2022",
    "Circular",
    "28/09/2022"
  ],
  [
    "22",
    "General Circular No.11/2022-Clarification on passing of Ordinary and Special resolutions by the companies under the Companies Act, 2013 read with rules made thereunder on account of COVID-19-Extention of timeline-reg.",
    "Circular",
    "28/09/2022"
  ],
  [
    "23",
    "General Circular No.08/2022-Clarification on spending of CSR fund for Har Ghar Tiranga campaign - reg.",
    "Circular",
    "26/07/2022"
  ],
  [
    "24",
    "General Circular No.07/2022-Further relaxation in paying additional fee in case delay",
    "Circular",
    "29/06/2022"
  ],
  [
    "25",
    "General Circular No.06/2022-Relaxation in paying additional fees in case of delay in",
    "Circular",
    "31/05/2022"
  ],
  [
    "26",
    "General Circular No.05/2022-Micro Finance/Micro Credit as an object in the Object",
    "Circular",
    "30/05/2022"
  ],
  [
    "27",
    "General Circular No.04/2022-Relaxation in paying additional fees in case of delay in",
    "Circular",
    "27/05/2022"
  ],
  [
    "28",
    "General Circular No.03/2022-Clarification on passing of Ordinary and Special",
    "Circular",
    "05/05/2022"
  ],
  [
    "29",
    "General Circular No.02/2022-Clarification of holding of Annual General Meeting (AGM)",
    "Circular",
    "05/05/2022"
  ],
  [
    "30",
    "General Circular No.01/2022-Relaxation on levy of additional fees in filing of e-forms",
    "Circular",
    "14/02/2022"
  ],
  [
    "31",
    "General Circular No.22/2021",
    "Circular",
    "29/12/2021"
  ],
  [
    "32",
    "General Circular No.20/2021-Clarification on passing of Ordinary and Special resolutions by the companies under the Companies Act, 2013 read with rules made thereunder on account of COVID-19-Extention of timeline-reg.",
    "Circular",
    "08/12/2021"
  ],
  [
    "33",
    "General Circular No.19/2021-Clarification of holding of Annual General Meeting (AGM) through Video Conference (VC) or Other Audio Visual Means (OAVM)-reg.",
    "Circular",
    "08/12/2021"
  ],
  [
    "34",
    "General Circular No.17/2021-Relaxation on levy of additional fees in filing of e-forms AOC-4, AOC-4 (CFS), AOC-4, AOC-4 XBRL AOC-4 Non-XBRL and MGT-7/MGT-7A for the financial year ended on 31.03.2021 under the Companies Act, 2013",
    "Circular",
    "29/10/2021"
  ],
  [
    "35",
    "General Circular No.16/2021-Relaxations in paying additional fees in case of delay in filing Form 8 (the Statement of Account and Solvency) by Limited Liability Partnerships upto 30th December, 2021.",
    "Circular",
    "26/10/2021"
  ],
  [
    "36",
    "General Circular No.15/2021-Extension of last date of filing of Cost Audit Report to the Board of Directors under Rule 6(5) of the Companies (Cost Records and Audit) Rules 2014-reg",
    "Circular",
    "27/09/2021"
  ],
  [
    "37",
    "General Circular No.14/2021-Frequently Asked Questions (FAQs) on Corporate Social Responsibility (CSR) -reg.",
    "Circular",
    "25/08/2021"
  ],
  [
    "38",
    "General Circular No.13/2021-Clarification on spending of CSR fund for COVID-19 vaccination - reg.",
    "Circular",
    "30/07/2021"
  ],
  [
    "39",
    "Relaxation of time for filing forms related to creation or modification of charges",
    "Circular",
    "30/06/2021"
  ],
  [
    "40",
    "Relaxation on levy of additional fees in filing of certain Forms under the Companies Act, 2013",
    "Circular",
    "30/06/2021"
  ],
  [
    "41",
    "Clarification on passing of ordinary and special resolutions by companies under the Companies Act,",
    "Circular",
    "23/06/2021"
  ],
  [
    "42",
    "Clarification on offsetting the excess CSR spent for FY 2019-20",
    "Circular",
    "20/05/2021"
  ],
  [
    "43",
    "Clarification on spending of CSR funds for ‘creating health infrastructure for COVID care",
    "Circular",
    "05/05/2021"
  ],
  [
    "44",
    "Relaxation of time for filing forms related to creation or modification of charges under",
    "Circular",
    "03/05/2021"
  ],
  [
    "45",
    "Gap between two board meetings under section 173 of the Companies Act, 2013 (CA-13) – Clarification",
    "Circular",
    "03/05/2021"
  ],
  [
    "46",
    "Relaxation of time for filing certain forms under the Companies Act, 2013.",
    "Circular",
    "03/05/2021"
  ],
  [
    "47",
    "Clarification on spending of CSR funds for setting up temporary COVID Care facilities and makeshift",
    "Circular",
    "22/04/2021"
  ],
  [
    "48",
    "Relaxation of additional fee in filing all AOC-4 e-forms",
    "Circular",
    "28/01/2021"
  ],
  [
    "49",
    "Scheme for condonation of delay for companies restored during Dec 2020 u/s 252 of the CA 2013",
    "Circular",
    "15/01/2021"
  ],
  [
    "50",
    "Clarification on holding of AGM through VC other OAVM",
    "Circular",
    "13/01/2021"
  ]
];

export const CompanyLawCirculars: React.FC = () => {
  return (
    <ResourceLayout 
      title="Company Law Circulars"
      description="View and search through Company Law Circulars documents."
      data={pageData}
      type="table"
    />
  );
};
