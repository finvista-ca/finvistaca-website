import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1. Short Title and Commencement",
    "The Companies Act, 2013"
  ],
  [
    "2. Definitions",
    "The Companies Act, 2013"
  ],
  [
    "2A. Companies not to be considered as listed companies",
    "The Companies Act, 2013"
  ],
  [
    "3. Related Party",
    "The Companies Act, 2013"
  ],
  [
    "4. List of Relatives in Terms of Clause (77) of section 2",
    "The Companies Act, 2013"
  ]
];

export const CompanyLawRules: React.FC = () => {
  return (
    <ResourceLayout 
      title="Company Law Rules"
      description="View and search through Company Law Rules documents."
      data={pageData}
      type="table"
    />
  );
};
