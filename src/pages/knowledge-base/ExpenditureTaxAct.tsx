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
    "Application of the Act"
  ],
  [
    "4",
    "Charge of expenditure-tax"
  ],
  [
    "5",
    "Meaning of chargeable expenditure"
  ],
  [
    "6",
    "Tax authorities"
  ],
  [
    "7",
    "Collection and recovery of expenditure-tax"
  ],
  [
    "8",
    "Person responsible for collecting tax to furnish pre­scribed return"
  ],
  [
    "9",
    "Assessment"
  ],
  [
    "10",
    "Best judgment assessment"
  ],
  [
    "11",
    "Chargeable expenditure escaping assessment"
  ],
  [
    "12",
    "Rectification of mistake"
  ],
  [
    "13",
    "Time limit for completion of assessment and reassessment"
  ],
  [
    "14",
    "Interest on delayed payment of expenditure-tax"
  ],
  [
    "15",
    "Penalty for failure to collect or pay expenditure-tax"
  ],
  [
    "16",
    "Penalty for failure to furnish prescribed return"
  ],
  [
    "17",
    "Penalty for concealment of chargeable expenditure"
  ],
  [
    "18",
    "Penalty for failure to comply with notice"
  ],
  [
    "19",
    "Penalty not to be imposed in certain cases"
  ],
  [
    "20",
    "Notice of demand"
  ],
  [
    "21",
    "Revision of orders by the Commissioner"
  ],
  [
    "22",
    "Appeals to the Commissioner (Appeals)"
  ],
  [
    "23",
    "Appeals to Appellate Tribunal"
  ],
  [
    "24",
    "Application of provisions of Income-tax Act"
  ],
  [
    "25",
    "Wilful attempt to evade tax, etc."
  ],
  [
    "26",
    "Failure to furnish prescribed returns"
  ],
  [
    "27",
    "False statement in verification, etc."
  ],
  [
    "28",
    "Abetment of false return, etc."
  ],
  [
    "29",
    "Certain offences to be non-cognizable"
  ],
  [
    "30",
    "Institution of proceedings and composition of offences"
  ],
  [
    "31",
    "Power to make rules"
  ],
  [
    "32",
    "Power to remove difficulties"
  ],
  [
    "33",
    "Consequential amendments"
  ],
  [
    "APPENDIX",
    "APPENDIX : TEXT OF RELEVANT CIRCULARS"
  ]
];

export const ExpenditureTaxAct: React.FC = () => {
  return (
    <ResourceLayout 
      title="Expenditure Tax Act"
      description="View and search through Expenditure Tax Act documents."
      data={pageData}
      type="table"
    />
  );
};
