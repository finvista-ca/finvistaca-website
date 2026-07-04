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
    "Charge of wealth-tax"
  ],
  [
    "4",
    "Net wealth to include certain assets"
  ],
  [
    "5",
    "Exemptions in respect of certain assets"
  ],
  [
    "6",
    "Exclusion of assets and debts outside India"
  ],
  [
    "7",
    "Value of assets, how to be determined"
  ],
  [
    "8",
    "Wealth-tax authorities and their jurisdiction"
  ],
  [
    "8A",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "8AA",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "8B",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "9",
    "Control of wealth-tax authorities"
  ],
  [
    "9A",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "10",
    "Instructions to subordinate authorities"
  ],
  [
    "10A",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "11",
    "Jurisdiction of Assessing Officers and power to transfer cases"
  ],
  [
    "11A",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "11AA",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "11B",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987,W.E.F. 1-4-1988]"
  ],
  [
    "12",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "12A",
    "Appointment of Valuation Officers"
  ],
  [
    "13",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1988]"
  ],
  [
    "13A",
    "Powers of Director General or Director, Chief Commis&shy;sioner or Commissioner and Joint Commissioner to make enquiries"
  ],
  [
    "14",
    "Return of wealth"
  ],
  [
    "15",
    "Return after due date and amendment of return"
  ],
  [
    "15A",
    "Return by whom to be signed"
  ],
  [
    "15B",
    "Self-assessment"
  ],
  [
    "15C",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1987, W.E.F. 1-4-1989]"
  ],
  [
    "16",
    "Assessment"
  ],
  [
    "16A",
    "Reference to Valuation Officer"
  ],
  [
    "17",
    "Wealth escaping assessment"
  ],
  [
    "17A",
    "Time limit for completion of assessment and reassess&shy;ment"
  ],
  [
    "17B",
    "Interest for defaults in furnishing return of net wealth"
  ],
  [
    "18",
    "Penalty for failure to furnish returns, to comply with notices and concealment of assets, etc."
  ],
  [
    "18A",
    "Penalty for failure to answer questions, sign state&shy;ments, furnish information, allow inspection, etc."
  ],
  [
    "18B",
    "Power to reduce or waive penalty in certain cases"
  ],
  [
    "18BA",
    "Power of Commissioner to grant immunity from penalty"
  ],
  [
    "18C",
    "Procedure when assessee claims identical question of law is pending before High Court or Supreme Court"
  ],
  [
    "18D",
    "[OMITTED BY THE DIRECT TAX LAWS (AMENDMENT) ACT, 1989, W.E.F. 1-4-1989]"
  ],
  [
    "19",
    "Tax of deceased person payable by legal representative"
  ],
  [
    "19A",
    "Assessment in the case of executors"
  ],
  [
    "20",
    "Assessment after partition of a Hindu undivided family"
  ],
  [
    "20A",
    "Assessment after partial partition of a Hindu undivided family"
  ],
  [
    "21",
    "Assessment when assets are held by courts of wards, administrators-general, etc."
  ],
  [
    "21A",
    "Assessment in cases of diversion of property, or of income from property, held under trust for public charitable or religious purposes"
  ],
  [
    "21AA",
    "Assessment when assets are held by certain associ&shy;ations of persons"
  ],
  [
    "22",
    "Assessment of persons residing outside India"
  ],
  [
    "22A",
    "Definitions"
  ],
  [
    "22B",
    "Wealth-tax Settlement Commission"
  ],
  [
    "22BA",
    "Jurisdiction and powers of Settlement Commission"
  ]
];

export const WealthTaxAct: React.FC = () => {
  return (
    <ResourceLayout 
      title="Wealth Tax Act"
      description="View and search through Wealth Tax Act documents."
      data={pageData}
      type="table"
    />
  );
};
