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
  ],
  [
    "Section - 33",
    "Section - 33, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 33A",
    "Section - 33A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 33AB",
    "Section - 33AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 33ABA",
    "Section - 33ABA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 33AC",
    "Section - 33AC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 33B",
    "Section - 33B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 34",
    "Section - 34, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 34A",
    "Section - 34A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35",
    "Section - 35, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35A",
    "Section - 35A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35AB",
    "Section - 35AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35ABA",
    "Section - 35ABA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35ABB",
    "Section - 35ABB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35AC",
    "Section - 35AC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35AD",
    "Section - 35AD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35B",
    "Section - 35B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35C",
    "Section - 35C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35CC",
    "Section - 35CC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35CCA",
    "Section - 35CCA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35CCB",
    "Section - 35CCB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35CCC",
    "Section - 35CCC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35CCD",
    "Section - 35CCD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35D",
    "Section - 35D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35DD",
    "Section - 35DD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35DDA",
    "Section - 35DDA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 35E",
    "Section - 35E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 36",
    "Section - 36, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 37",
    "Section - 37, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 38",
    "Section - 38, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 39",
    "Section - 39, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 40",
    "Section - 40, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 40A",
    "Section - 40A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 41",
    "Section - 41, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 42",
    "Section - 42, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 43",
    "Section - 43, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 43A",
    "Section - 43A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 43AA",
    "Section - 43AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 43B",
    "Section - 43B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 43C",
    "Section - 43C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 43CA",
    "Section - 43CA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 43CB",
    "Section - 43CB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 43D",
    "Section - 43D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44",
    "Section - 44, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44A",
    "Section - 44A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44AA",
    "Section - 44AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44AB",
    "Section - 44AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44AC",
    "Section - 44AC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44AD",
    "Section - 44AD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44ADA",
    "Section - 44ADA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44AE",
    "Section - 44AE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44AF",
    "Section - 44AF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44B",
    "Section - 44B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44BB",
    "Section - 44BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44BBA",
    "Section - 44BBA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44BBB",
    "Section - 44BBB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44BBC",
    "Section - 44BBC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44BBD",
    "Section - 44BBD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44C",
    "Section - 44C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44D",
    "Section - 44D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44DA",
    "Section - 44DA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 44DB",
    "Section - 44DB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 45",
    "Section - 45, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 46",
    "Section - 46, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 46A",
    "Section - 46A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 47",
    "Section - 47, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 47A",
    "Section - 47A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 48",
    "Section - 48, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 49",
    "Section - 49, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 50",
    "Section - 50, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 50A",
    "Section - 50A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 50AA",
    "Section - 50AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 50B",
    "Section - 50B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 50C",
    "Section - 50C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 50CA",
    "Section - 50CA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 50D",
    "Section - 50D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 51",
    "Section - 51, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 52",
    "Section - 52, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 53",
    "Section - 53, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54",
    "Section - 54, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54A",
    "Section - 54A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54B",
    "Section - 54B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54C",
    "Section - 54C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54D",
    "Section - 54D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54E",
    "Section - 54E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54EA",
    "Section - 54EA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54EB",
    "Section - 54EB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54EC",
    "Section - 54EC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54ED",
    "Section - 54ED, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54EE",
    "Section - 54EE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54F",
    "Section - 54F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54G",
    "Section - 54G, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54GA",
    "Section - 54GA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54GB",
    "Section - 54GB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 54H",
    "Section - 54H, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 55",
    "Section - 55, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 55A",
    "Section - 55A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 56",
    "Section - 56, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 57",
    "Section - 57, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 58",
    "Section - 58, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 59",
    "Section - 59, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 60",
    "Section - 60, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 61",
    "Section - 61, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 62",
    "Section - 62, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 63",
    "Section - 63, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 64",
    "Section - 64, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 65",
    "Section - 65, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 66",
    "Section - 66, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 67",
    "Section - 67, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 67A",
    "Section - 67A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 68",
    "Section - 68, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 69",
    "Section - 69, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 69A",
    "Section - 69A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 69B",
    "Section - 69B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 69C",
    "Section - 69C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 69D",
    "Section - 69D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 70",
    "Section - 70, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 71",
    "Section - 71, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 71A",
    "Section - 71A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 71B",
    "Section - 71B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 72",
    "Section - 72, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 72A",
    "Section - 72A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 72AA",
    "Section - 72AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 72AB",
    "Section - 72AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 73",
    "Section - 73, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 73A",
    "Section - 73A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 74",
    "Section - 74, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 74A",
    "Section - 74A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 75",
    "Section - 75, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 76",
    "Section - 76, Income-tax Act, 1961-2024 (No. 2)"
  ],
  [
    "Section - 77",
    "Section - 77, Income-tax Act, 1961-2024 (No. 2)"
  ],
  [
    "Section - 78",
    "Section - 78, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 79",
    "Section - 79, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 79A",
    "Section - 79A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80",
    "Section - 80, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80A",
    "Section - 80A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80AA",
    "Section - 80AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80AB",
    "Section - 80AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80AC",
    "Section - 80AC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80B",
    "Section - 80B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80C",
    "Section - 80C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CC",
    "Section - 80CC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CCA",
    "Section - 80CCA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CCB",
    "Section - 80CCB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CCC",
    "Section - 80CCC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CCD",
    "Section - 80CCD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CCE",
    "Section - 80CCE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CCF",
    "Section - 80CCF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CCG",
    "Section - 80CCG, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80CCH",
    "Section - 80CCH, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80D",
    "Section - 80D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80DD",
    "Section - 80DD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80DDB",
    "Section - 80DDB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80E",
    "Section - 80E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80EE",
    "Section - 80EE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80EEA",
    "Section - 80EEA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80EEB",
    "Section - 80EEB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80F",
    "Section - 80F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80FF",
    "Section - 80FF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80G",
    "Section - 80G, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80GG",
    "Section - 80GG, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80GGA",
    "Section - 80GGA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80GGB",
    "Section - 80GGB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80GGC",
    "Section - 80GGC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80H",
    "Section - 80H, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80HH",
    "Section - 80HH, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80HHA",
    "Section - 80HHA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80HHB",
    "Section - 80HHB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80HHBA",
    "Section - 80HHBA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80HHC",
    "Section - 80HHC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80HHD",
    "Section - 80HHD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80HHE",
    "Section - 80HHE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80HHF",
    "Section - 80HHF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-I",
    "Section - 80-I, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-IA",
    "Section - 80-IA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-IAB",
    "Section - 80-IAB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-IAC",
    "Section - 80-IAC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-IB",
    "Section - 80-IB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-IBA",
    "Section - 80-IBA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-IC",
    "Section - 80-IC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-ID",
    "Section - 80-ID, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-IE",
    "Section - 80-IE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80J",
    "Section - 80J, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80JJ",
    "Section - 80JJ, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80JJA",
    "Section - 80JJA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80JJAA",
    "Section - 80JJAA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80K",
    "Section - 80K, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80L",
    "Section - 80L, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80LA",
    "Section - 80LA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80M",
    "Section - 80M, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80MM",
    "Section - 80MM, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80N",
    "Section - 80N, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80-O",
    "Section - 80-O, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80P",
    "Section - 80P, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80PA",
    "Section - 80PA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80Q",
    "Section - 80Q, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80QQ",
    "Section - 80QQ, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80QQA",
    "Section - 80QQA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80QQB",
    "Section - 80QQB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80R",
    "Section - 80R, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80RR",
    "Section - 80RR, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80RRA",
    "Section - 80RRA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80RRB",
    "Section - 80RRB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80S",
    "Section - 80S, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80T",
    "Section - 80T, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80TT",
    "Section - 80TT, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80TTA",
    "Section - 80TTA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80TTB",
    "Section - 80TTB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80U",
    "Section - 80U, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80V",
    "Section - 80V, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80VV",
    "Section - 80VV, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 80VVA",
    "Section - 80VVA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 81 to 85C",
    "Section - 81 to 85C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 86",
    "Section - 86, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 86A",
    "Section - 86A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 87",
    "Section - 87, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 87A",
    "Section - 87A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 88",
    "Section - 88, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 88A",
    "Section - 88A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 88B",
    "Section - 88B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 88C",
    "Section - 88C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 88D",
    "Section - 88D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 88E",
    "Section - 88E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 89",
    "Section - 89, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 89A",
    "Section - 89A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 90",
    "Section - 90, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 90A",
    "Section - 90A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 91",
    "Section - 91, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92",
    "Section - 92, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92A",
    "Section - 92A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92B",
    "Section - 92B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92BA",
    "Section - 92BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92C",
    "Section - 92C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92CA",
    "Section - 92CA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92CB",
    "Section - 92CB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92CC",
    "Section - 92CC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92CD",
    "Section - 92CD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92CE",
    "Section - 92CE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92D",
    "Section - 92D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92E",
    "Section - 92E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 92F",
    "Section - 92F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 93",
    "Section - 93, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 94",
    "Section - 94, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 94A",
    "Section - 94A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 94B",
    "Section - 94B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 95",
    "Section - 95, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 96",
    "Section - 96, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 97",
    "Section - 97, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 98",
    "Section - 98, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 99",
    "Section - 99, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 100",
    "Section - 100, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 101",
    "Section - 101, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 102",
    "Section - 102, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 104",
    "Section - 104, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 105",
    "Section - 105, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 106",
    "Section - 106, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 107",
    "Section - 107, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 107A",
    "Section - 107A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 108",
    "Section - 108, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 109",
    "Section - 109, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 110",
    "Section - 110, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 111",
    "Section - 111, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 111A",
    "Section - 111A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 112",
    "Section - 112, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 112A",
    "Section - 112A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 113",
    "Section - 113, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 114",
    "Section - 114, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115",
    "Section - 115, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115A",
    "Section - 115A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115AB",
    "Section - 115AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115AC",
    "Section - 115AC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115ACA",
    "Section - 115ACA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115AD",
    "Section - 115AD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115B",
    "Section - 115B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BA",
    "Section - 115BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BAA",
    "Section - 115BAA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BAB",
    "Section - 115BAB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BAC",
    "Section - 115BAC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BAD",
    "Section - 115BAD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BAE",
    "Section - 115BAE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BB",
    "Section - 115BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBA",
    "Section - 115BBA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBB",
    "Section - 115BBB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBC",
    "Section - 115BBC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBD",
    "Section - 115BBD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBDA",
    "Section - 115BBDA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBE",
    "Section - 115BBE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBF",
    "Section - 115BBF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBG",
    "Section - 115BBG, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBH",
    "Section - 115BBH, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBI",
    "Section - 115BBI, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115BBJ",
    "Section - 115BBJ, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115C",
    "Section - 115C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115D",
    "Section - 115D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115E",
    "Section - 115E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115F",
    "Section - 115F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115G",
    "Section - 115G, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115H",
    "Section - 115H, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115-I",
    "Section - 115-I, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115J",
    "Section - 115J, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JA",
    "Section - 115JA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JAA",
    "Section - 115JAA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JB",
    "Section - 115JB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JC",
    "Section - 115JC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JD",
    "Section - 115JD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JE",
    "Section - 115JE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JEE",
    "Section - 115JEE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JF",
    "Section - 115JF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JG",
    "Section - 115JG, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115JH",
    "Section - 115JH, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115K",
    "Section - 115K, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115L",
    "Section - 115L, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115M",
    "Section - 115M, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115N",
    "Section - 115N, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115-O",
    "Section - 115-O, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115P",
    "Section - 115P, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115Q",
    "Section - 115Q, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115QA",
    "Section - 115QA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115QB",
    "Section - 115QB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115QC",
    "Section - 115QC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115R",
    "Section - 115R, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115S",
    "Section - 115S, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115T",
    "Section - 115T, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115TA",
    "Section - 115TA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115TB",
    "Section - 115TB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115TC",
    "Section - 115TC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115TCA",
    "Section - 115TCA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115TD",
    "Section - 115TD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115TE",
    "Section - 115TE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115TF",
    "Section - 115TF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115U",
    "Section - 115U, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115UA",
    "Section - 115UA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115UB",
    "Section - 115UB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115V",
    "Section - 115V, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VA",
    "Section - 115VA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VB",
    "Section - 115VB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VC",
    "Section - 115VC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VD",
    "Section - 115VD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VE",
    "Section - 115VE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VF",
    "Section - 115VF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VG",
    "Section - 115VG, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VH",
    "Section - 115VH, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115V-I",
    "Section - 115V-I, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VJ",
    "Section - 115VJ, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VK",
    "Section - 115VK, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VL",
    "Section - 115VL, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VM",
    "Section - 115VM, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VN",
    "Section - 115VN, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115V-O",
    "Section - 115V-O, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VP",
    "Section - 115VP, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VQ",
    "Section - 115VQ, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VR",
    "Section - 115VR, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VS",
    "Section - 115VS, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VT",
    "Section - 115VT, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VU",
    "Section - 115VU, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VV",
    "Section - 115VV, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VW",
    "Section - 115VW, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VX",
    "Section - 115VX, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VY",
    "Section - 115VY, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VZ",
    "Section - 115VZ, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VZA",
    "Section - 115VZA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VZB",
    "Section - 115VZB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115VZC",
    "Section - 115VZC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115W",
    "Section - 115W, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WA",
    "Section - 115WA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WB",
    "Section - 115WB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WC",
    "Section - 115WC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WD",
    "Section - 115WD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WE",
    "Section - 115WE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WF",
    "Section - 115WF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WG",
    "Section - 115WG, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WH",
    "Section - 115WH, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WI",
    "Section - 115WI, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WJ",
    "Section - 115WJ, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WK",
    "Section - 115WK, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WKA",
    "Section - 115WKA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WKB",
    "Section - 115WKB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WL",
    "Section - 115WL, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 115WM",
    "Section - 115WM, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 116",
    "Section - 116, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 117",
    "Section - 117, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 118",
    "Section - 118, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 119",
    "Section - 119, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 119A",
    "Section - 119A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 120",
    "Section - 120, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 121",
    "Section - 121, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 121A",
    "Section - 121A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 122",
    "Section - 122, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 123",
    "Section - 123, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 124",
    "Section - 124, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 125",
    "Section - 125, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 125A",
    "Section - 125A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 126",
    "Section - 126, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 127",
    "Section - 127, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 128",
    "Section - 128, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 129",
    "Section - 129, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 130",
    "Section - 130, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 130A",
    "Section - 130A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 131",
    "Section - 131, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 132",
    "Section - 132, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 132A",
    "Section - 132A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 132B",
    "Section - 132B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 133",
    "Section - 133, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 133A",
    "Section - 133A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 133B",
    "Section - 133B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 133C",
    "Section - 133C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 134",
    "Section - 134, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 135",
    "Section - 135, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 135A",
    "Section - 135A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 136",
    "Section - 136, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 137",
    "Section - 137, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 138",
    "Section - 138, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 139",
    "Section - 139, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 139A",
    "Section - 139A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 139AA",
    "Section - 139AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 139B",
    "Section - 139B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 139C",
    "Section - 139C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 139D",
    "Section - 139D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 140",
    "Section - 140, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 140A",
    "Section - 140A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 140B",
    "Section - 140B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 141",
    "Section - 141, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 141A",
    "Section - 141A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 142",
    "Section - 142, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 142A",
    "Section - 142A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 142B",
    "Section - 142B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 143",
    "Section - 143, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 144",
    "Section - 144, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 144A",
    "Section - 144A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 144B",
    "Section - 144B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 144BA",
    "Section - 144BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 144C",
    "Section - 144C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 145",
    "Section - 145, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 145A",
    "Section - 145A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 145B",
    "Section - 145B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 146",
    "Section - 146, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 147",
    "Section - 147, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 148",
    "Section - 148, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 148A",
    "Section - 148A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 148B",
    "Section - 148B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 149",
    "Section - 149, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 150",
    "Section - 150, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 151",
    "Section - 151, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 151A",
    "Section - 151A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 152",
    "Section - 152, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 153",
    "Section - 153, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 153A",
    "Section - 153A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 153B",
    "Section - 153B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 153C",
    "Section - 153C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 153D",
    "Section - 153D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 154",
    "Section - 154, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 155",
    "Section - 155, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 156",
    "Section - 156, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 156A",
    "Section - 156A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 157",
    "Section - 157, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 157A",
    "Section - 157A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158",
    "Section - 158, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158A",
    "Section - 158A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158AA",
    "Section - 158AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158AB",
    "Section - 158AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158B",
    "Section - 158B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BA",
    "Section - 158BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BB",
    "Section - 158BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BC",
    "Section - 158BC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BD",
    "Section - 158BD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BE",
    "Section - 158BE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BF",
    "Section - 158BF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BFA",
    "Section - 158BFA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BG",
    "Section - 158BG, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BH",
    "Section - 158BH, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 158BI",
    "Section - 158BI, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 159",
    "Section - 159, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 160",
    "Section - 160, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 161",
    "Section - 161, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 162",
    "Section - 162, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 163",
    "Section - 163, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 164",
    "Section - 164, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 164A",
    "Section - 164A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 165",
    "Section - 165, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 166",
    "Section - 166, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 167",
    "Section - 167, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 167A",
    "Section - 167A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 167B",
    "Section - 167B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 167C",
    "Section - 167C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 168",
    "Section - 168, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 169",
    "Section - 169, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 170",
    "Section - 170, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 170A",
    "Section - 170A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 171",
    "Section - 171, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 172",
    "Section - 172, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 173",
    "Section - 173, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 174",
    "Section - 174, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 174A",
    "Section - 174A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 175",
    "Section - 175, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 176",
    "Section - 176, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 177",
    "Section - 177, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 178",
    "Section - 178, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 179",
    "Section - 179, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 180",
    "Section - 180, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 180A",
    "Section - 180A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 181",
    "Section - 181, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 182",
    "Section - 182, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 183",
    "Section - 183, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 184",
    "Section - 184, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 185",
    "Section - 185, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 187",
    "Section - 187, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 188",
    "Section - 188, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 188A",
    "Section - 188A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 189",
    "Section - 189, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 189A",
    "Section - 189A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 190",
    "Section - 190, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 191",
    "Section - 191, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 192",
    "Section - 192, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 192A",
    "Section - 192A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 193",
    "Section - 193, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194",
    "Section - 194, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194A",
    "Section - 194A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194B",
    "Section - 194B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194BA",
    "Section - 194BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194BB",
    "Section - 194BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194C",
    "Section - 194C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194D",
    "Section - 194D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194DA",
    "Section - 194DA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194E",
    "Section - 194E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194EE",
    "Section - 194EE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194F",
    "Section - 194F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194G",
    "Section - 194G, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194H",
    "Section - 194H, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194-I",
    "Section - 194-I, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194-IA",
    "Section - 194-IA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194-IB",
    "Section - 194-IB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194-IC",
    "Section - 194-IC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194J",
    "Section - 194J, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194K",
    "Section - 194K, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194L",
    "Section - 194L, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194LA",
    "Section - 194LA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194LB",
    "Section - 194LB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194LBA",
    "Section - 194LBA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194LBB",
    "Section - 194LBB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194LBC",
    "Section - 194LBC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194LC",
    "Section - 194LC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194LD",
    "Section - 194LD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194M",
    "Section - 194M, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194N",
    "Section - 194N, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194-O",
    "Section - 194-O, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194P",
    "Section - 194P, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194Q",
    "Section - 194Q, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194R",
    "Section - 194R, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194S",
    "Section - 194S, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 194T",
    "Section - 194T, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 195",
    "Section - 195, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 195A",
    "Section - 195A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 196",
    "Section - 196, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 196A",
    "Section - 196A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 196B",
    "Section - 196B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 196C",
    "Section - 196C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 196D",
    "Section - 196D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 197",
    "Section - 197, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 197A",
    "Section - 197A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 197B",
    "Section - 197B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 198",
    "Section - 198, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 199",
    "Section - 199, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 200",
    "Section - 200, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 200A",
    "Section - 200A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 201",
    "Section - 201, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 202",
    "Section - 202, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 203",
    "Section - 203, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 203A",
    "Section - 203A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 203AA",
    "Section - 203AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 204",
    "Section - 204, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 205",
    "Section - 205, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206",
    "Section - 206, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206A",
    "Section - 206A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206AA",
    "Section - 206AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206AB",
    "Section - 206AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206B",
    "Section - 206B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206C",
    "Section - 206C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206CA",
    "Section - 206CA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206CB",
    "Section - 206CB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206CC",
    "Section - 206CC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 206CCA",
    "Section - 206CCA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 207",
    "Section - 207, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 208",
    "Section - 208, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 209",
    "Section - 209, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 209A",
    "Section - 209A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 210",
    "Section - 210, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 211",
    "Section - 211, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 212",
    "Section - 212, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 213",
    "Section - 213, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 214",
    "Section - 214, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 215",
    "Section - 215, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 216",
    "Section - 216, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 217",
    "Section - 217, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 218",
    "Section - 218, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 219",
    "Section - 219, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 220",
    "Section - 220, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 221",
    "Section - 221, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 222",
    "Section - 222, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 223",
    "Section - 223, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 224",
    "Section - 224, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 225",
    "Section - 225, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 226",
    "Section - 226, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 227",
    "Section - 227, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 228",
    "Section - 228, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 228A",
    "Section - 228A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 229",
    "Section - 229, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 230",
    "Section - 230, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 230A",
    "Section - 230A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 231",
    "Section - 231, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 232",
    "Section - 232, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 233",
    "Section - 233, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234",
    "Section - 234, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234A",
    "Section - 234A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234B",
    "Section - 234B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234C",
    "Section - 234C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234D",
    "Section - 234D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234E",
    "Section - 234E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234F",
    "Section - 234F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234G",
    "Section - 234G, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 234H",
    "Section - 234H, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 235",
    "Section - 235, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 236",
    "Section - 236, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 236A",
    "Section - 236A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 237",
    "Section - 237, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 238",
    "Section - 238, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 239",
    "Section - 239, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 239A",
    "Section - 239A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 240",
    "Section - 240, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 241",
    "Section - 241, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 241A",
    "Section - 241A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 242",
    "Section - 242, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 243",
    "Section - 243, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 244",
    "Section - 244, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 244A",
    "Section - 244A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245",
    "Section - 245, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245A",
    "Section - 245A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245AA",
    "Section - 245AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245B",
    "Section - 245B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245BA",
    "Section - 245BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245BB",
    "Section - 245BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245BC",
    "Section - 245BC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245BD",
    "Section - 245BD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245C",
    "Section - 245C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245D",
    "Section - 245D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245DD",
    "Section - 245DD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245E",
    "Section - 245E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245F",
    "Section - 245F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245G",
    "Section - 245G, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245H",
    "Section - 245H, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245HA",
    "Section - 245HA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245HAA",
    "Section - 245HAA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245-I",
    "Section - 245-I, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245J",
    "Section - 245J, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245K",
    "Section - 245K, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245L",
    "Section - 245L, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245M",
    "Section - 245M, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245MA",
    "Section - 245MA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245N",
    "Section - 245N, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245-O",
    "Section - 245-O, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245-OA",
    "Section - 245-OA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245-OB",
    "Section - 245-OB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245P",
    "Section - 245P, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245Q",
    "Section - 245Q, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245R",
    "Section - 245R, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245RR",
    "Section - 245RR, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245S",
    "Section - 245S, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245T",
    "Section - 245T, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245U",
    "Section - 245U, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245V",
    "Section - 245V, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 245W",
    "Section - 245W, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 246",
    "Section - 246, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 246A",
    "Section - 246A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 247",
    "Section - 247, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 248",
    "Section - 248, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 249",
    "Section - 249, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 250",
    "Section - 250, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 251",
    "Section - 251, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 252",
    "Section - 252, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 252A",
    "Section - 252A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 253",
    "Section - 253, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 254",
    "Section - 254, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 255",
    "Section - 255, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 256",
    "Section - 256, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 257",
    "Section - 257, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 258",
    "Section - 258, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 259",
    "Section - 259, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 260",
    "Section - 260, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 260A",
    "Section - 260A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 260B",
    "Section - 260B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 261",
    "Section - 261, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 262",
    "Section - 262, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 263",
    "Section - 263, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 264",
    "Section - 264, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 264A",
    "Section - 264A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 264B",
    "Section - 264B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 265",
    "Section - 265, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 266",
    "Section - 266, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 267",
    "Section - 267, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 268",
    "Section - 268, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 268A",
    "Section - 268A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269",
    "Section - 269, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269A",
    "Section - 269A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269AB",
    "Section - 269AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269B",
    "Section - 269B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269C",
    "Section - 269C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269D",
    "Section - 269D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269E",
    "Section - 269E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269F",
    "Section - 269F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269G",
    "Section - 269G, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269H",
    "Section - 269H, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269-I",
    "Section - 269-I, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269J",
    "Section - 269J, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269K",
    "Section - 269K, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269L",
    "Section - 269L, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269M",
    "Section - 269M, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269N",
    "Section - 269N, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269-O",
    "Section - 269-O, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269P",
    "Section - 269P, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269Q",
    "Section - 269Q, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269R",
    "Section - 269R, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269RR",
    "Section - 269RR, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269S",
    "Section - 269S, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269SS",
    "Section - 269SS, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269ST",
    "Section - 269ST, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269SU",
    "Section - 269SU, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269T",
    "Section - 269T, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269TT",
    "Section - 269TT, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269U",
    "Section - 269U, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UA",
    "Section - 269UA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UB",
    "Section - 269UB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UC",
    "Section - 269UC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UD",
    "Section - 269UD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UE",
    "Section - 269UE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UF",
    "Section - 269UF, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UG",
    "Section - 269UG, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UH",
    "Section - 269UH, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UI",
    "Section - 269UI, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UJ",
    "Section - 269UJ, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UK",
    "Section - 269UK, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UL",
    "Section - 269UL, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UM",
    "Section - 269UM, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UN",
    "Section - 269UN, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UO",
    "Section - 269UO, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 269UP",
    "Section - 269UP, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 270",
    "Section - 270, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 270A",
    "Section - 270A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 270AA",
    "Section - 270AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271",
    "Section - 271, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271A",
    "Section - 271A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271AA",
    "Section - 271AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271AAA",
    "Section - 271AAA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271AAB",
    "Section - 271AAB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271AAC",
    "Section - 271AAC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271AAD",
    "Section - 271AAD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271AAE",
    "Section - 271AAE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271B",
    "Section - 271B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271BA",
    "Section - 271BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271BB",
    "Section - 271BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271C",
    "Section - 271C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271CA",
    "Section - 271CA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271D",
    "Section - 271D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271DA",
    "Section - 271DA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271DB",
    "Section - 271DB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271E",
    "Section - 271E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271F",
    "Section - 271F, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271FA",
    "Section - 271FA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271FAA",
    "Section - 271FAA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271FAB",
    "Section - 271FAB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271FB",
    "Section - 271FB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271G",
    "Section - 271G, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271GA",
    "Section - 271GA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271GB",
    "Section - 271GB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271GC",
    "Section - 271GC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271H",
    "Section - 271H, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271-I",
    "Section - 271-I, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271J",
    "Section - 271J, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 271K",
    "Section - 271K, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 272",
    "Section - 272, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 272A",
    "Section - 272A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 272AA",
    "Section - 272AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 272B",
    "Section - 272B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 272BB",
    "Section - 272BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 272BBB",
    "Section - 272BBB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 273",
    "Section - 273, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 273A",
    "Section - 273A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 273AA",
    "Section - 273AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 273B",
    "Section - 273B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 274",
    "Section - 274, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 275",
    "Section - 275, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 275A",
    "Section - 275A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 275B",
    "Section - 275B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276",
    "Section - 276, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276A",
    "Section - 276A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276AA",
    "Section - 276AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276AB",
    "Section - 276AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276B",
    "Section - 276B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276BB",
    "Section - 276BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276C",
    "Section - 276C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276CC",
    "Section - 276CC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276CCC",
    "Section - 276CCC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276D",
    "Section - 276D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276DD",
    "Section - 276DD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 276E",
    "Section - 276E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 277",
    "Section - 277, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 277A",
    "Section - 277A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 278",
    "Section - 278, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 278A",
    "Section - 278A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 278AA",
    "Section - 278AA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 278AB",
    "Section - 278AB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 278B",
    "Section - 278B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 278C",
    "Section - 278C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 278D",
    "Section - 278D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 278E",
    "Section - 278E, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 279",
    "Section - 279, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 279A",
    "Section - 279A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 279B",
    "Section - 279B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280",
    "Section - 280, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280A",
    "Section - 280A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280B",
    "Section - 280B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280C",
    "Section - 280C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280D",
    "Section - 280D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280Y",
    "Section - 280Y, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280Z",
    "Section - 280Z, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280ZA",
    "Section - 280ZA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280ZB",
    "Section - 280ZB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280ZC",
    "Section - 280ZC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280ZD",
    "Section - 280ZD, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 280ZE",
    "Section - 280ZE, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 281",
    "Section - 281, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 281A",
    "Section - 281A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 281B",
    "Section - 281B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 282",
    "Section - 282, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 282A",
    "Section - 282A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 282B",
    "Section - 282B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 283",
    "Section - 283, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 284",
    "Section - 284, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 285",
    "Section - 285, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 285A",
    "Section - 285A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 285B",
    "Section - 285B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 285BA",
    "Section - 285BA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 285BAA",
    "Section - 285BAA, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 285BB",
    "Section - 285BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 286",
    "Section - 286, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 287",
    "Section - 287, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 287A",
    "Section - 287A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 288",
    "Section - 288, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 288A",
    "Section - 288A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 288B",
    "Section - 288B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 289",
    "Section - 289, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 290",
    "Section - 290, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 291",
    "Section - 291, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 292",
    "Section - 292, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 292A",
    "Section - 292A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 292B",
    "Section - 292B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 292BB",
    "Section - 292BB, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 292C",
    "Section - 292C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 292CC",
    "Section - 292CC, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 293",
    "Section - 293, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 293A",
    "Section - 293A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 293B",
    "Section - 293B, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 293C",
    "Section - 293C, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 293D",
    "Section - 293D, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 294",
    "Section - 294, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 294A",
    "Section - 294A, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 295",
    "Section - 295, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 296",
    "Section - 296, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 297",
    "Section - 297, Income-tax Act, 1961-2025"
  ],
  [
    "Section - 298",
    "Section - 298, Income-tax Act, 1961-2025"
  ],
  [
    "First Schedule",
    "First Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Second Schedule",
    "Second Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Third Schedule",
    "Third Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Fourth Schedule",
    "Fourth Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Fifth Schedule",
    "Fifth Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Sixth Schedule",
    "Sixth Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Seventh Schedule",
    "Seventh Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Eighth Schedule",
    "Eighth Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Ninth Schedule",
    "Ninth Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Tenth Schedule",
    "Tenth Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Eleventh Schedule",
    "Eleventh Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Twelfth Schedule",
    "Twelfth Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Thirteenth Schedule",
    "Thirteenth Schedule, Income-tax Act, 1961-2025"
  ],
  [
    "Fourteenth Schedule",
    "Fourteenth Schedule, Income-tax Act, 1961-2025"
  ]
];

export const IncomeTaxAct: React.FC = () => {
  return (
    <ResourceLayout
      title="Income Tax Act"
      description="Browse and search all sections of the Income-tax Act, 1961-2025."
      data={pageData}
      type="table"
    />
  );
};
