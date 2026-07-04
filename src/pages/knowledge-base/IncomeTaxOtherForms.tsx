import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "Form No.:Form 1",
    "Notice of demand"
  ],
  [
    "2",
    "Form No.:Form 2",
    "Appeal to the Commissioner (Appeals) Designation of the Commissioner (Appeals)"
  ],
  [
    "3",
    "Form No.:Form 3",
    "Form of appeal to the Appellate Tribunal"
  ],
  [
    "4",
    "Form No.:Form 4",
    "Form of memorandum of cross-objections to the Appellate Tribunal"
  ],
  [
    "5",
    "Form No.:Form 5",
    "Certificate under section 31 or 33 of the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015"
  ],
  [
    "6",
    "Form No.:Form 6",
    "Form of declaration of undisclosed asset located outside India under section 59 of the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015"
  ],
  [
    "7",
    "Form No.:Form 7",
    "Acknowledgement of declaration of undisclosed foreign asset under Chapter VI of the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015"
  ],
  [
    "8",
    "Form No.:Form 8",
    "Application for registration as an approved valuer under sub-section (1) of section 77 of the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015"
  ]
];

export const IncomeTaxOtherForms: React.FC = () => {
  return (
    <ResourceLayout 
      title="Income Tax Other Forms"
      description="View and search through Income Tax Other Forms documents."
      data={pageData}
      type="table"
    />
  );
};
