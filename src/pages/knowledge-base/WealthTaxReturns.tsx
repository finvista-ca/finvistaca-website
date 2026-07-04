import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "Form No.:BA",
    "Return of net wealth - For individuals/Hindu undivided families/companies"
  ],
  [
    "2",
    "Form No.:BB",
    "Return of Net Wealth"
  ]
];

export const WealthTaxReturns: React.FC = () => {
  return (
    <ResourceLayout 
      title="Wealth Tax Returns"
      description="View and search through Wealth Tax Returns documents."
      data={pageData}
      type="table"
    />
  );
};
