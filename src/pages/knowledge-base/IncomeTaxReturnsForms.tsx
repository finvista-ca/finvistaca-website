import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "2026",
    "Form No.:ITR-1 SAHAJ",
    "For individuals being a resident (other than not ordinarily resident) having total income upto Rs.50 lakh & ITR-1 having Income from Salaries, one house property, other sources(Interest etc.),long-term capital gains under section 112A up to Rs. 1.25 lakh,"
  ],
  [
    "2",
    "2026",
    "Form No.:ITR-2",
    "For Individuals and HUFs not having income from profits and gains of business or profession"
  ],
  [
    "3",
    "2026",
    "Form No.:ITR-3",
    "For individuals and HUFs having income from profits and gains of business or profession"
  ],
  [
    "4",
    "2026",
    "Form No.:ITR-4 Sugam",
    "For Individuals, HUFs and Firms (other than LLP) being a resident having total income upto Rs.50 lakh and having income from business and profession which is computed under sections 44AD, 44ADA or 44AE, and having long-term capital gains under section 1"
  ],
  [
    "5",
    "2026",
    "Form No.:ITR-5",
    "For persons other than- (i) individual, (ii) HUF, (iii) company and (iv) person filing Form ITR-7"
  ],
  [
    "6",
    "2026",
    "Form No.:ITR-6",
    "For Companies other than companies claiming exemption under section 11"
  ],
  [
    "7",
    "2026",
    "Form No.:ITR-7",
    "For persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D) only"
  ],
  [
    "8",
    "2026",
    "Form No.:ITR-V",
    "Where the data of the Return of Income in Form ITR-1 (SAHAJ),ITR-2, ITR-3, ITR-4(SUGAM), ITR-5, ITR-7 filed but NOT verified electronically"
  ],
  [
    "9",
    "2026",
    "Form No. : ITR-U",
    "For persons to update income/reduce loss within forty-eight months from the end of the relevant assessment year"
  ],
  [
    "10",
    "2026",
    "Form No. : ITR-A",
    "For successor entities to furnish return of income under section 170A consequent to business reorganisation"
  ],
  [
    "11",
    "2025",
    "Form No.:ITR-1 SAHAJ",
    "For individuals being a resident (other than not ordinarily resident) having total income upto Rs.50 lakh & ITR-1 having Income from Salaries, one house property, other sources(Interest etc.),long-term capital gains under section 112A up to Rs. 1.25 lakh,"
  ],
  [
    "12",
    "2025",
    "Form No.:ITR-2",
    "For Individuals and HUFs not having income from profits and gains of business or profession"
  ],
  [
    "13",
    "2025",
    "Form No.:ITR-3",
    "For individuals and HUFs having income from profits and gains of business or profession"
  ],
  [
    "14",
    "2025",
    "Form No.:ITR-4 Sugam",
    "For Individuals, HUFs and Firms (other than LLP) being a resident having total income upto Rs.50 lakh and having income from business and profession which is computed under sections 44AD, 44ADA or 44AE, and having long-term capital gains under section 1"
  ],
  [
    "15",
    "2025",
    "Form No.:ITR-5",
    "For persons other than- (i) individual, (ii) HUF, (iii) company and (iv) person filing Form ITR-7"
  ],
  [
    "16",
    "2025",
    "Form No.:ITR-6",
    "For Companies other than companies claiming exemption under section 11"
  ],
  [
    "17",
    "2025",
    "Form No.:ITR-7",
    "For persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D) only"
  ],
  [
    "18",
    "2025",
    "Form No.:ITR-V",
    "Where the data of the Return of Income in Form ITR-1(SAHAJ), ITR-2, ITR-3, ITR-4(SUGAM), ITR-5, ITR-7 filed but NOT verified electronically"
  ],
  [
    "19",
    "2025",
    "Form No. : ITR-U",
    "For persons to update income within forty-eight months from the end of the relevant assessment year"
  ],
  [
    "20",
    "2025",
    "Form No. : ITR-B",
    "For search and seizure cases (Chapter XIV-B)"
  ],
  [
    "21",
    "2024",
    "Form No.:Acknowledgement",
    "Where the data of the Return of Income in Form ITR-1 (SAHAJ), ITR-2, ITR-3 ITR-4(SUGAM), ITR-5, ITR-6, ITR-7 filed and verified"
  ],
  [
    "22",
    "2024",
    "Form No.:ITR-1 SAHAJ",
    "For individuals being a resident (other than not ordinarily resident) having total income up to Rs.50 lakh, having Income from Salaries, one house property, other sources (Interest etc.), and agricultural income up to Rs.5 thousand"
  ],
  [
    "23",
    "2024",
    "Form No.:ITR-2",
    "For Individuals and HUFs not having income from profits and gains of business or profession"
  ],
  [
    "24",
    "2024",
    "Form No.:ITR-3",
    "For individuals and HUFs having income from profits and gains of business or profession"
  ],
  [
    "25",
    "2024",
    "Form No.:ITR-4 Sugam",
    "For Individuals, HUFs and Firms (other than LLP) being a resident having total income upto Rs.50 lakh and having income from business and profession which is computed under sections 44AD, 44ADA or 44AE"
  ],
  [
    "26",
    "2024",
    "Form No.:ITR-5",
    "For persons other than- (i) individual, (ii) HUF, (iii) company and (iv) person filing Form ITR-7"
  ],
  [
    "27",
    "2024",
    "Form No.:ITR-6",
    "For Companies other than companies claiming exemption under section 11"
  ],
  [
    "28",
    "2024",
    "Form No.:ITR-7",
    "For persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D) only"
  ],
  [
    "29",
    "2024",
    "Form No.:ITR-V",
    "Where the data of the Return of Income in Form ITR-1 (SAHAJ), ITR-2, ITR-3, ITR-4(SUGAM), ITR-5, ITR-7 filed but NOT verified electronically"
  ],
  [
    "30",
    "2024",
    "Form No.:Acknowledgement",
    "Where the data of the Return of Income in Form ITR-1 (SAHAJ), ITR-2, ITR-3 ITR-4(SUGAM), ITR-5, ITR-6, ITR-7 filed and verified"
  ],
  [
    "31",
    "2023",
    "Form No.:ITR-1 SAHAJ",
    "For individuals being a resident (other than not ordinarily resident) having total income upto Rs.50 lakh, having Income from Salaries, one house property, other sources (Interest etc.), and agricultural income upto Rs.5 thousand"
  ],
  [
    "32",
    "2023",
    "Form No.:ITR-2",
    "For Individuals and HUFs not having income from profits and gains of business or profession"
  ],
  [
    "33",
    "2023",
    "Form No.:ITR-3",
    "For individuals and HUFs having income from profits and gains of business or profession"
  ],
  [
    "34",
    "2023",
    "Form No.:ITR-4 Sugam",
    "For Individuals, HUFs and Firms (other than LLP) being a resident having total income upto Rs.50 lakh and having income from business and profession which is computed under sections 44AD, 44ADA or 44AE"
  ],
  [
    "35",
    "2023",
    "Form No.:ITR-5",
    "For persons other than- (i) individual, (ii) HUF, (iii) company and (iv) person filing Form ITR-7"
  ],
  [
    "36",
    "2023",
    "Form No.:ITR-6",
    "For Companies other than companies claiming exemption under section 11"
  ],
  [
    "37",
    "2023",
    "Form No.:ITR-7",
    "For persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D) only"
  ],
  [
    "38",
    "2023",
    "Form No.:ITR-V",
    "Where the data of the Return of Income in Form ITR-1 (SAHAJ), ITR-2, ITR-3, ITR-4(SUGAM), ITR-5, ITR-7 filed but NOT verified electronically"
  ],
  [
    "39",
    "2023",
    "Form No.:Acknowledgement",
    "Where the data of the Return of Income in Form ITR-1 (SAHAJ), ITR-2, ITR-3, ITR-4(SUGAM), ITR-5, ITR-6, ITR-7 filed and verified"
  ],
  [
    "40",
    "2022",
    "Form No.:ITR-1 SAHAJ",
    "For individuals being a resident (other than not ordinarily resident) having total income upto Rs.50 lakh, having Income from Salaries, one house property, other sources (Interest etc.), and agricultural income upto Rs.5 thousand"
  ],
  [
    "41",
    "2022",
    "Form No.:ITR-2",
    "For Individuals and HUFs not having income from profits and gains of business or profession"
  ],
  [
    "42",
    "2022",
    "Form No.:ITR-3",
    "For individuals and HUFs having income from profits and gains of business or profession"
  ],
  [
    "43",
    "2022",
    "Form No.:ITR-4 Sugam",
    "For Individuals, HUFs and Firms (other than LLP) being a resident having total income upto Rs.50 lakh and having income from business and profession which is computed under sections 44AD, 44ADA or 44AE"
  ],
  [
    "44",
    "2022",
    "Form No.:ITR-5",
    "For persons other than- (i) individual, (ii) HUF, (iii) company and (iv) person filing Form ITR-7"
  ],
  [
    "45",
    "2022",
    "Form No.:ITR-6",
    "For Companies other than companies claiming exemption under section 11"
  ],
  [
    "46",
    "2022",
    "Form No.:ITR-7",
    "For persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D) only"
  ],
  [
    "47",
    "2022",
    "Form No.:ITR-V",
    "Where the data of the Return of Income in Form ITR-1 (SAHAJ), ITR-2, ITR-3, ITR-4(SUGAM), ITR-5, ITR-7 filed but NOT verified electronically"
  ],
  [
    "48",
    "2022",
    "Form No.:Acknowledgement",
    "Where the data of the Return of Income in Form ITR-1 (SAHAJ), ITR-2, ITR-3, ITR-4(SUGAM), ITR-5, ITR-6, ITR-7 filed and verified"
  ],
  [
    "49",
    "2022",
    "Form No.:ITR-U",
    "For persons to update income within twenty-four months from the end of the relevant assessment year"
  ],
  [
    "50",
    "2021",
    "ITR-1 Notified Form AY 2021-22",
    "For Individuals having Income from Salaries, one house property, other sources (Interest etc.) and having total income upto Rs.50 lakh"
  ]
];

export const IncomeTaxReturnsForms: React.FC = () => {
  return (
    <ResourceLayout 
      title="Income Tax Returns Forms"
      description="View and search through Income Tax Returns Forms documents."
      data={pageData}
      type="table"
    />
  );
};
