import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "Rule - 1",
    "Rule-1, Income-tax Rules"
  ],
  [
    "Rule - 2",
    "Rule-2, Income-tax Rules"
  ],
  [
    "Rule - 2A",
    "Section - |10|Rule-2A, Income-tax Rules"
  ],
  [
    "Rule - 2BBB",
    "Section - |10|Rule-2B, Income-tax Rules"
  ],
  [
    "Rule - 2DCA",
    "Section - |10|Rule-2BA, Income-tax Rules"
  ],
  [
    "Rule - 3",
    "Section - |10|Rule-2BB, Income-tax Rules"
  ],
  [
    "Rule - 4",
    "Section - |10|Rule-2BBA, Income-tax Rules"
  ],
  [
    "Rule - 5",
    "Rule-2BBB, Income-tax Rules"
  ],
  [
    "Rule - 5AA",
    "Section - |32A|Rule-5AA, Income-tax Rules"
  ],
  [
    "Rule - 5AB",
    "Section - |32AB|Rule-5AB, Income-tax Rules"
  ],
  [
    "Rule - 5AD",
    "Section - |32AB|Rule-5AC, Income-tax Rules"
  ],
  [
    "Rule - 5B",
    "Section - |33ABA|Rule-5AD, Income-tax Rules"
  ],
  [
    "Rule - 5C",
    "Section - |33A|33|Rule-5B, Income-tax Rules"
  ],
  [
    "Rule - 5G",
    "Section - |35|Rule-5C, Income-tax Rules"
  ],
  [
    "Rule - 6A",
    "Section - |35|Rule-5CA , Income-tax Rules"
  ],
  [
    "Rule - 6AA",
    "Section - |35|Rule-5D, Income-tax Rules"
  ],
  [
    "Rule - 6AAA",
    "Section - |35|Rule-5E, Income-tax Rules"
  ],
  [
    "Rule - 6AAB",
    "Section - |35|Rule-5F, Income-tax Rules"
  ],
  [
    "Rule - 6AAC",
    "Rule-5G, Income-tax Rules"
  ],
  [
    "Rule - 6AAD",
    "Section - |35CCC|Rule-6AAD, Income-tax Rules"
  ],
  [
    "Rule - 6AAF",
    "Section - |35CCC|Rule-6AAE, Income-tax Rules"
  ],
  [
    "Rule - 6AB",
    "Section - |35CCD|Rule-6AAF, Income-tax Rules"
  ],
  [
    "Rule - 6ABA",
    "Section - |35CCD|Rule-6AAG, Income-tax Rules"
  ],
  [
    "Rule - 6ABBA",
    "Section - |35CCD|Rule-6AAH, Income-tax Rules"
  ],
  [
    "Rule - 6ABBB",
    "Section - |35E|35D|Rule-6AB, Income-tax Rules"
  ],
  [
    "Rule - 6AC",
    "Section - |36|Rule-6ABA, Income-tax Rules"
  ],
  [
    "Rule - 6B",
    "Section - |36|Rule-6ABAA, Income-tax Rules"
  ],
  [
    "Rule - 6C",
    "Section - |36|Rule-6ABB, Income-tax Rules"
  ],
  [
    "Rule - 6D",
    "Section - |269T|269ST|269T|40A|43|43CA|44AD|50C|56|80JJAA|269SS|13A|35AD|Rule-6ABBA, Income-tax Rules"
  ],
  [
    "Rule - 6DD",
    "Rule-6ABBB, Income-tax Rules"
  ],
  [
    "Rule - 6DDA",
    "Rule-6AC, Income-tax Rules"
  ],
  [
    "Rule - 6E",
    "Rule-6B, Income-tax Rules"
  ],
  [
    "Rule - 6EA",
    "Rule-6C, Income-tax Rules"
  ],
  [
    "Rule - 6F",
    "Rule-6D, Income-tax Rules"
  ],
  [
    "Rule - 6G",
    "Section - |40A|Rule-6DD, Income-tax Rules"
  ],
  [
    "Rule - 6GA",
    "Section - |43|Rule-6DDA, Income-tax Rules"
  ],
  [
    "Rule - 6H",
    "Section - |43|Rule-6DDB, Income-tax Rules"
  ],
  [
    "Rule - 7",
    "Section - |43|Rule-6DDC, Income-tax Rules"
  ],
  [
    "Rule - 8A",
    "Section - |43|Rule-6DDD, Income-tax Rules"
  ],
  [
    "Rule - 8AA",
    "Section - |1st Sch|Rule-6E, Income-tax Rules"
  ],
  [
    "Rule - 8AB",
    "Section - |43D|Rule-6EA, Income-tax Rules"
  ],
  [
    "Rule - 8AC",
    "Section - |43D|Rule-6EB, Income-tax Rules"
  ],
  [
    "Rule - 8AD",
    "Section - |44AA|Rule-6F, Income-tax Rules"
  ],
  [
    "Rule - 8D",
    "Section - |44AB|Rule-6G, Income-tax Rules"
  ],
  [
    "Rule - 9",
    "Section - |9|44DA|Rule-6GA, Income-tax Rules"
  ],
  [
    "Rule - 9A",
    "Section - |50B|Rule-6H, Income-tax Rules"
  ],
  [
    "Rule - 9C",
    "Section - |2|Rule-7, Income-tax Rules"
  ],
  [
    "Rule - 10",
    "Section - |2|Rule-7A, Income-tax Rules"
  ],
  [
    "Rule - 10A",
    "Section - |2|Rule-7B, Income-tax Rules"
  ],
  [
    "Rule - 10CA",
    "Section - |2|Rule-8, Income-tax Rules"
  ]
];

export const IncomeTaxRules: React.FC = () => {
  return (
    <ResourceLayout 
      title="Income Tax Rules"
      description="View and search through Income Tax Rules documents."
      data={pageData}
      type="table"
    />
  );
};
