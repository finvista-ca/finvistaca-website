import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "Section - 1",
    "Section - 1, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 2",
    "Section - 2, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 3",
    "Section - 3, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 4",
    "Section - 4, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 5",
    "Section - 5, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 5A",
    "Section - 5A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 6",
    "Section - 6, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 7",
    "Section - 7, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 8",
    "Section - 8, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 9",
    "Section - 9, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 9A",
    "Section - 9A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 9B",
    "Section - 9B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 10",
    "Section - 10, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 10A",
    "Section - 10A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 10AA",
    "Section - 10AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 10B",
    "Section - 10B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 10BA",
    "Section - 10BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 10BB",
    "Section - 10BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 10C",
    "Section - 10C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 11",
    "Section - 11, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 12",
    "Section - 12, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 12A",
    "Section - 12A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 12AA",
    "Section - 12AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 12AB",
    "Section - 12AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 12AC",
    "Section - 12AC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 13",
    "Section - 13, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 13A",
    "Section - 13A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 13B",
    "Section - 13B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 14",
    "Section - 14, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 14A",
    "Section - 14A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 15",
    "Section - 15, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 16",
    "Section - 16, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 17",
    "Section - 17, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 18 to 21",
    "Section - 18 to 21, Income-tax Act, 1961-2024 (No. 2)"
  ],
  [
    "Section - 22",
    "Section - 22, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 23",
    "Section - 23, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 24",
    "Section - 24, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 25",
    "Section - 25, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 25A",
    "Section - 25A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 26",
    "Section - 26, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 27",
    "Section - 27, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 28",
    "Section - 28, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 29",
    "Section - 29, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 30",
    "Section - 30, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 31",
    "Section - 31, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 32",
    "Section - 32, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 32A",
    "Section - 32A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 32AB",
    "Section - 32AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 32AC",
    "Section - 32AC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 32AD",
    "Section - 32AD, Income-tax Act, 1961-2025"
  ]
];

export const IncomeTaxAct: React.FC = () => {
  return (
    <ResourceLayout 
      title="Income Tax Act"
      description="View and search through Income Tax Act documents."
      data={pageData}
      type="table"
    />
  );
};
