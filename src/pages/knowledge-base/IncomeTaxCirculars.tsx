import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "Circular No. 4/2026",
    "31/03/2026"
  ],
  [
    "Circular No. 3/2026",
    "30/03/2026"
  ],
  [
    "Circular No. 2/2026",
    "25/03/2026"
  ],
  [
    "Circular No. 1/2026",
    "23/03/2026"
  ],
  [
    "Circular No.15/2025",
    "29/10/2025"
  ],
  [
    "Circular No. 14/2025",
    "25/09/2025"
  ],
  [
    "Circular No. 13 /2025",
    "19/09/2025"
  ],
  [
    "Circular No. 12/2025",
    "15/09/2025"
  ],
  [
    "Circular No. 11/2025",
    "02/09/2025"
  ],
  [
    "Circular No.10/2025",
    "28/07/2025"
  ],
  [
    "Circular No.9/2025",
    "21/07/2025"
  ],
  [
    "Circular No. 8/2025",
    "01/07/2025"
  ],
  [
    "Circular No.7/2025",
    "25/06/2025"
  ],
  [
    "Circular No. 6/2025",
    "27/05/2025"
  ],
  [
    "Circular No. 5/2025",
    "28/03/2025"
  ],
  [
    "Circular No. 4/2025",
    "17/03/2025"
  ],
  [
    "Circular No. 3/2025",
    "20/02/2025"
  ],
  [
    "Circular No. 2/2025",
    "18/02/2025"
  ],
  [
    "Circular No. 1/2025",
    "21/01/2025"
  ],
  [
    "Circular No. 21/2024",
    "31/12/2024"
  ],
  [
    "Circular No. 20/2024",
    "30/12/2024"
  ],
  [
    "Circular No. 19/024",
    "16/12/2024"
  ],
  [
    "Circular No. 18/2024",
    "30/11/2024"
  ],
  [
    "Circular No. 16/2024",
    "18/11/2024"
  ],
  [
    "Circular No. 17/2024",
    "18/11/2024"
  ],
  [
    "Circular No. 15/2024",
    "04/11/2024"
  ],
  [
    "Circular No. 14/2024",
    "30/10/2024"
  ],
  [
    "Circular No.13/2024",
    "26/10/2024"
  ],
  [
    "Circular No.12/2024",
    "15/10/2024"
  ],
  [
    "Circular No.11/2024",
    "01/10/2024"
  ],
  [
    "Circular No.10/2024",
    "20/09/2024"
  ],
  [
    "Circular No.8/2024",
    "05/08/2024"
  ],
  [
    "Circular No. 7/2024",
    "25/04/2024"
  ],
  [
    "Circular No. 6/2024",
    "23/04/2024"
  ],
  [
    "Circular No. 4/2024",
    "07/03/2024"
  ],
  [
    "Circular No. 3/2024",
    "06/03/2024"
  ],
  [
    "Circular No. 2/2024 :?Order under section 119 of the Income-tax Act, 1961",
    "05/03/2024"
  ],
  [
    "Circular No. 1/2024",
    "23/01/2024"
  ],
  [
    "Circular No. 20/2023",
    "28/10/2023"
  ],
  [
    "Circular No. 19/2023",
    "23/10/2023"
  ],
  [
    "Circular No. 18/2023",
    "20/10/2023"
  ],
  [
    "Circular No. 17/2023",
    "09/10/2023"
  ],
  [
    "Circular No.16/2023",
    "18/09/2023"
  ],
  [
    "Circular No.15/2023",
    "16/08/2023"
  ],
  [
    "Circular No. 14/2023",
    "27/07/2023"
  ],
  [
    "Circular No. 13/2023",
    "26/07/2023"
  ],
  [
    "Circular No. 12/2023",
    "12/07/2023"
  ],
  [
    "Circular No. 11/2023",
    "06/07/2023"
  ],
  [
    "Circular No. 10/2023",
    "30/06/2023"
  ],
  [
    "Circular No. 9/2023",
    "28/06/2023"
  ]
];

export const IncomeTaxCirculars: React.FC = () => {
  return (
    <ResourceLayout 
      title="Income Tax Circulars"
      description="View and search through Income Tax Circulars documents."
      data={pageData}
      type="table"
    />
  );
};
