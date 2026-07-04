import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "G.S.R. 416(E)-Amendment of Schedule VII of the Companies Act,2013",
    "Notification",
    "27/05/2026"
  ],
  [
    "2",
    "G.S.R. 415(E)-The Companies (Corporate Social Responsibility Policy) Amendment Rules, 2026.",
    "Notification",
    "27/05/2026"
  ],
  [
    "3",
    "G.S.R. 300(E)-The Companies (Registration Offices and Fees) Amendment Rules, 2026.",
    "Notification",
    "21/04/2026"
  ],
  [
    "4",
    "G.S.R. 169(E)-The Companies (Accounting Standards) Amendment Rules, 2026",
    "Notification",
    "10/03/2026"
  ],
  [
    "5",
    "S.O. 701(E)-Amendment to delegation under section 208 of the Companies Act, 2013.",
    "Notification",
    "10/02/2026"
  ],
  [
    "6",
    "S.O. 707(E)-Amendment to delegation under section 66 of the Companies Act, 2013.",
    "Notification",
    "10/02/2026"
  ],
  [
    "7",
    "S.O. 709(E)-Amendment to delegation under section 8 and others.",
    "Notification",
    "10/02/2026"
  ],
  [
    "8",
    "S.O. 699(E)-Amendment to delegation under section 94 of the Companies Act, 2013",
    "Notification",
    "10/02/2026"
  ],
  [
    "9",
    "S.O. 700(E)-Amendment to delegation under sections 153 and 154 of the Companies Act, 2013.",
    "Notification",
    "10/02/2026"
  ],
  [
    "10",
    "S.O. 708(E)-Amendment to delegation under clause 41 of Section 2 and Section 14 of Companies Act, 2013.",
    "Notification",
    "10/02/2026"
  ],
  [
    "11",
    "S.O. 698(E)-Notification under section 154 of the Companies Act, 2013. | 764KB",
    "Notification",
    "10/02/2026"
  ],
  [
    "12",
    "S.O. 697(E)-Amendment to delegation of power under section 17 of LLP Act, 2008",
    "Notification",
    "10/02/2026"
  ],
  [
    "13",
    "S.O. 696(E)-Notification under section 76A of the Limited Liability Partnership Act, 2008",
    "Notification",
    "10/02/2026"
  ],
  [
    "14",
    "G.S.R. 940(E)-The Companies (Removal of Names of Companies from the Register of Companies) Amendment Rules, 2025.",
    "Notification",
    "31/12/2025"
  ],
  [
    "15",
    "G.S.R. 943(E)-The Companies (Appointment and Qualification of Directors) Amendment Rules, 2025.",
    "Notification",
    "31/12/2025"
  ],
  [
    "16",
    "G.S.R. 880(E)-The Companies (Specification of definition details) Amendment Rules, 2025",
    "Notification",
    "01/12/2025"
  ],
  [
    "17",
    "G.S.R. 811(E)-The Companies (Meetings of Board and its Powers) Amendment Rules, 2025.",
    "Notification",
    "03/11/2025"
  ],
  [
    "18",
    "S.O. 4850(E)-Establishment of ROCs under the Companies Act, 2013",
    "Notification",
    "23/10/2025"
  ],
  [
    "19",
    "S.O. 4852(E)-Establishment of RDs under the Companies Act, 2013",
    "Notification",
    "23/10/2025"
  ],
  [
    "20",
    "S.O. 4849(E)-Establishment of ROCs under the LLP Act, 2008",
    "Notification",
    "23/10/2025"
  ],
  [
    "21",
    "S.O. 4851(E)-Establishment of RDs under the LLP Act, 2008",
    "Notification",
    "23/10/2025"
  ],
  [
    "22",
    "G.S.R. 733(E)-The Investor Education and Protection Fund Authority (Accounting, Audit, Transfer and Refund) Amendment Rules, 2025",
    "Notification",
    "01/10/2025"
  ],
  [
    "23",
    "G.S.R. 603(E)-The Companies (Compromises, Arrangements and Amalgamations) Amendment Rules, 2025.",
    "Notification",
    "04/09/2025"
  ],
  [
    "24",
    "G.S.R. 579(E)-The Companies (Incorporation) Second Amendment Rules, 2025",
    "Notification",
    "26/08/2025"
  ],
  [
    "25",
    "G.S.R. 549(E)-Companies (Indian Accounting Standards) Second Amendment Rules, 2025.",
    "Notification",
    "13/08/2025"
  ],
  [
    "26",
    "G.S.R. 452(E)-The Companies (Corporate Social Responsibility Policy) Rules, 2025",
    "Notification",
    "07/07/2025"
  ],
  [
    "27",
    "G.S.R. 443(E)-The Companies (Listing of equity shares in permissible jurisdictions) Amendment Rules,2025",
    "Notification",
    "30/05/2025"
  ],
  [
    "28",
    "G.S.R. 426(E)-The Companies (Incorporation) Amendment Rules, 2025",
    "Notification",
    "30/05/2025"
  ],
  [
    "29",
    "G.S.R. 427(E)-The Companies (Restriction on number of layers) Amendment Rules, 2025.",
    "Notification",
    "30/05/2025"
  ],
  [
    "30",
    "G.S.R. 371(E)-The Companies (Filing of Documents and Forms in Extensible Business Reporting Language) Amendment Rules, 2025",
    "Notification",
    "30/05/2025"
  ],
  [
    "31",
    "G.S.R. 360(E)-The Companies (Registration Offices and Fees) Amendment Rules, 2025",
    "Notification",
    "30/05/2025"
  ],
  [
    "32",
    "G.S.R. 361(E)-The Companies (Cost Records and Audit) Amendment Rules, 2025.",
    "Notification",
    "30/05/2025"
  ],
  [
    "33",
    "G.S.R. 359(E)-The Companies (Audit and Auditors) Amendment Rules, 2025",
    "Notification",
    "30/05/2025"
  ],
  [
    "34",
    "G.S.R.358(E)-The Companies (Management and Administration) Amendment Rules, 2025.",
    "Notification",
    "30/05/2025"
  ],
  [
    "35",
    "G.S.R. 357(E)-The Companies (Accounts) Second Amendment Rules, 2025.",
    "Notification",
    "30/05/2025"
  ],
  [
    "36",
    "G.S.R. 317(E)-The Companies (Accounts) Amendment Rules, 2025",
    "Notification",
    "19/05/2025"
  ],
  [
    "37",
    "G.S.R. 291(E)-The Companies (Indian Accounting Standards) Amendment Rules, 2025",
    "Notification",
    "07/05/2025"
  ],
  [
    "38",
    "G.S.R. 131(E)-The Companies (Prospectus and Allotment of Securities) Amendment Rules, 2025",
    "Notification",
    "12/02/2025"
  ],
  [
    "39",
    "G.S.R. 794(E)-The Companies (Accounts) Second Amendment Rules, 2024.",
    "Notification",
    "31/12/2024"
  ],
  [
    "40",
    "G.S.R. 630(E)-The Companies (Adjudication of Penalties) Second Amendment Rules, 2024.",
    "Notification",
    "09/10/2024"
  ],
  [
    "41",
    "G.S.R. 607(E)-The Investor Education and Protection Fund Authority (Form of Annual Statement of Accounts) Amendment Rules, 2024.",
    "Notification",
    "03/10/2024"
  ],
  [
    "42",
    "G.S.R. 602(E)-The Companies (Indian Accounting Standards) Third Amendment Rules, 2024",
    "Notification",
    "28/09/2024"
  ],
  [
    "43",
    "G.S.R. 587(E)-The Companies (Accounts) Amendment Rules, 2024.",
    "Notification",
    "24/09/2024"
  ],
  [
    "44",
    "G.S.R. 554(E)-The Companies (Indian Accounting Standards) Second Amendment Rules, 2024.",
    "Notification",
    "09/09/2024"
  ],
  [
    "45",
    "G.S.R. 552(E)-The Investor Education and Protection Fund Authority (Accounting, Audit, Transfer and Refund) Second Amendment Rules, 2024",
    "Notification",
    "09/09/2024"
  ],
  [
    "46",
    "G.S.R. 555 (E)-The Companies (Compromises, Arrangements and Amalgamations) Amendment Rules, 2024.",
    "Notification",
    "09/09/2024"
  ],
  [
    "47",
    "G.S.R. 491(E)-The Companies (Registration of Foreign Companies) Amendment Rules, 2024",
    "Notification",
    "12/08/2024"
  ],
  [
    "48",
    "G.S.R. 492(E)-The Companies (Indian Accounting Standards) Amendment Rules, 2024.",
    "Notification",
    "12/08/2024"
  ],
  [
    "49",
    "G.S.R. 475(E)-The Limited Liability Partnership (Amendment) Rules,2024.",
    "Notification",
    "05/08/2024"
  ],
  [
    "50",
    "G.S.R. 476(E)-The Companies (Adjudication of Penalties) Amendment Rules, 2024",
    "Notification",
    "05/08/2024"
  ]
];

export const CompanyLawNotifications: React.FC = () => {
  return (
    <ResourceLayout 
      title="Company Law Notifications"
      description="View and search through Company Law Notifications documents."
      data={pageData}
      type="table"
    />
  );
};
