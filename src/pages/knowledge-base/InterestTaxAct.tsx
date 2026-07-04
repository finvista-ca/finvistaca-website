import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "Short title and extent"
  ],
  [
    "2",
    "Definitions"
  ],
  [
    "3",
    "Tax authorities"
  ],
  [
    "4",
    "Charge of tax"
  ],
  [
    "5",
    "Scope of chargeable interest"
  ],
  [
    "6",
    "Computation of chargeable interest"
  ],
  [
    "7",
    "Return of chargeable interest"
  ],
  [
    "8",
    "Assessment"
  ],
  [
    "9",
    "Self-assessment"
  ],
  [
    "10",
    "Interest escaping assessment"
  ],
  [
    "10A",
    "Time limit for completion of assessments and reassessments"
  ],
  [
    "11",
    "Advance payment of interest-tax"
  ],
  [
    "12",
    "Interest for default in furnishing return of chargeable interest"
  ],
  [
    "12A",
    "Interest for default in payment of interest-tax in advance"
  ],
  [
    "12B",
    "Interest for deferment of interest-tax payable in advance"
  ],
  [
    "13",
    "Penalty for concealment of chargeable interest"
  ],
  [
    "14",
    "Opportunity of being heard"
  ],
  [
    "15",
    "Appeals to the Commissioner Appeals"
  ],
  [
    "15A",
    "Transfer of certain pending appeals"
  ],
  [
    "16",
    "Appeals to Appellate Tribunal"
  ],
  [
    "17",
    "Rectification of mistakes"
  ],
  [
    "18",
    "Interest-tax deductible in computing total income under the Income-tax Act"
  ],
  [
    "19",
    "Revision of order prejudicial to revenue"
  ],
  [
    "20",
    "Revision of orders by Commissioner"
  ],
  [
    "21",
    "Application of provisions of Income-tax Act"
  ],
  [
    "22",
    "Income-tax papers to be available for the purposes of this Act"
  ],
  [
    "23",
    "Failure to comply with notices"
  ],
  [
    "24",
    "False statements"
  ],
  [
    "25",
    "Wilful attempt to evade tax, etc"
  ],
  [
    "26",
    "Abetment of false returns, etc"
  ],
  [
    "26A",
    "Offences by credit institutions"
  ],
  [
    "26B",
    "Institution of proceedings and composition of offences"
  ],
  [
    "26C",
    "Power of credit institutions to vary certain agreements"
  ],
  [
    "27",
    "Power to make rules"
  ],
  [
    "28",
    "Power to exempt"
  ],
  [
    "29",
    "Power to remove difficulty"
  ],
  [
    "30",
    "Consequential amendments"
  ],
  [
    "APPENDIX",
    "CLARIFICATION ON APPLICABILITY OF INTEREST-TAX ACT TO HIRE PURCHASE TRANSACTIONS"
  ]
];

export const InterestTaxAct: React.FC = () => {
  return (
    <ResourceLayout 
      title="Interest Tax Act"
      description="View and search through Interest Tax Act documents."
      data={pageData}
      type="table"
    />
  );
};
