import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "Short title, extent and commencement"
  ],
  [
    "2",
    "Definitions"
  ],
  [
    "3",
    "Charge of gift-tax"
  ],
  [
    "4",
    "Gifts to include certain transfers."
  ],
  [
    "5",
    "Exemption in respect of certain gifts."
  ],
  [
    "6",
    "Value of gifts, how determined."
  ],
  [
    "6A",
    "Aggregation of gifts made during a certain period."
  ],
  [
    "7",
    "Gift-tax authorities and their jurisdiction."
  ],
  [
    "7A",
    "Powers of Commissioner respecting specified areas"
  ],
  [
    "7AA",
    "Concurrent jurisdiction of Inspecting Assistant"
  ],
  [
    "7B",
    "Power to transfer cases."
  ],
  [
    "8",
    "Control of gift-tax authorities."
  ],
  [
    "9",
    "Instructions to subordinate authorities."
  ],
  [
    "9A",
    "Directors of Inspection."
  ],
  [
    "10",
    "Jurisdiction of Assessing Officers and power to"
  ],
  [
    "11",
    "Inspector of Gift-tax."
  ],
  [
    "11A",
    "Commissioner competent to perform any function or"
  ],
  [
    "11AA",
    "Gift-tax Officer competent to perform any function"
  ],
  [
    "11B",
    "Control of gift-tax authorities."
  ],
  [
    "12",
    "Gift-tax authorities to follow orders, etc., of the Board"
  ],
  [
    "12A",
    "[Power of [Chief Commissioner or Commissioner] and ] Commissioner] to make enquiries under this Act."
  ],
  [
    "13",
    "Return of gifts."
  ],
  [
    "14",
    "[Return after due date and amendment of return."
  ],
  [
    "14A",
    "Return by whom to be signed."
  ],
  [
    "14B",
    "Self-assessment."
  ],
  [
    "15",
    "Assessment."
  ],
  [
    "16",
    "Gift escaping assessment."
  ],
  [
    "16A",
    "Time limit for completion of assessment and reassessment"
  ],
  [
    "16B",
    "Interest for defaults in furnishing return of gift"
  ],
  [
    "17",
    "Penalty for failure to furnish returns, to comply with notices and concealment of gifts, etc."
  ],
  [
    "17A",
    "Penalty for failure to answer questions, sign statements , furnish information, allow inspections, etc."
  ],
  [
    "18",
    "[Rebate on advance payments."
  ],
  [
    "18A",
    "[Credit for stamp duty paid on instrument of gift."
  ],
  [
    "18B",
    "Additional gift-tax."
  ],
  [
    "19",
    "Tax of deceased person payable by legal representative."
  ],
  [
    "19A",
    "[Assessment of persons leaving India"
  ],
  [
    "20",
    "Assessment after partition of a Hindu undivided family"
  ],
  [
    "21",
    "Liability in case of discontinued firm or association of persons."
  ],
  [
    "21A",
    "[Assessment of donee when the donor cannot be found"
  ],
  [
    "22",
    "Appeal to the [Deputy Commissioner (Appeals)] from orders of [Assessing Officer]."
  ],
  [
    "22A",
    "Application by the assessee in certain cases."
  ],
  [
    "23",
    "Appeal to the Appellate Tribunal."
  ],
  [
    "24",
    "Powers of Commissioner to revise orders of subordinate authorities."
  ],
  [
    "25",
    "Appeal to the Appellate Tribunal from orders of enhancement by [Chief Commissioner or Commissioner]."
  ],
  [
    "26",
    "Reference to High Court."
  ],
  [
    "27",
    "Hearing by High Court."
  ],
  [
    "28",
    "Appeal to Supreme Court."
  ],
  [
    "28A",
    "[Tax to be paid notwithstanding reference, etc."
  ],
  [
    "28B",
    "[Definition of High Court."
  ],
  [
    "29",
    "[Gift-tax by whom payable."
  ]
];

export const GiftTaxAct: React.FC = () => {
  return (
    <ResourceLayout 
      title="Gift Tax Act"
      description="View and search through Gift Tax Act documents."
      data={pageData}
      type="table"
    />
  );
};
