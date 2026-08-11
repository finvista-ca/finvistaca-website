export interface ITRForm {
  id: string;
  formNumber: string;
  formName: string;
  assessmentYear: string;
  taxpayerTypes: string[];
  residentialStatus?: string[];
  incomeTypes: string[];
  eligibility: string[];
  exclusions: string[];
  specialConditions: string[];
  summary: string;
  officialSource: string;
  officialSourceUrl: string;
}

export const incomeTaxReturnFormsData: ITRForm[] = [
  {
    id: "itr-1-2024-25",
    formNumber: "ITR-1",
    formName: "SAHAJ",
    assessmentYear: "AY 2024-25",
    taxpayerTypes: ["Individual"],
    residentialStatus: ["Resident (not ordinarily resident excluded)"],
    incomeTypes: [
      "Salary / Pension",
      "One House Property",
      "Other Sources (Interest, etc.)",
      "Agricultural Income up to ₹5,000"
    ],
    eligibility: [
      "Resident Individual",
      "Total income up to ₹50 Lakh",
      "Income from Salary / Pension",
      "Income from One House Property (excluding cases where loss is brought forward from previous years)",
      "Income from Other Sources (Interest, Family Pension, Dividend etc.)",
      "Agricultural income up to ₹5,000"
    ],
    exclusions: [
      "Total income exceeds ₹50 Lakh",
      "Director in a company",
      "Held unlisted equity shares at any time during the previous year",
      "Any asset (including financial interest in any entity) located outside India",
      "Signing authority in any account located outside India",
      "Income from any source outside India",
      "Income from Business or Profession",
      "Capital Gains",
      "Income from more than one house property",
      "Income taxable under section 115BBDA or 115BBE"
    ],
    specialConditions: [],
    summary: "For individuals being a resident (other than not ordinarily resident) having total income up to ₹50 lakh, having Income from Salaries, one house property, other sources (Interest etc.), and agricultural income up to ₹5 thousand.",
    officialSource: "Income Tax Department",
    officialSourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-return.aspx"
  },
  {
    id: "itr-2-2024-25",
    formNumber: "ITR-2",
    formName: "ITR-2",
    assessmentYear: "AY 2024-25",
    taxpayerTypes: ["Individual", "HUF"],
    incomeTypes: [
      "Salary / Pension",
      "Multiple House Properties",
      "Capital Gains",
      "Other Sources",
      "Foreign Income / Assets",
      "Agricultural Income"
    ],
    eligibility: [
      "Individuals and HUFs not having income from profits and gains of business or profession",
      "Income from Salary / Pension",
      "Income from House Property",
      "Income from Capital Gains",
      "Income from Other Sources",
      "Director in a company",
      "Investments in unlisted equity shares",
      "Foreign assets or foreign income"
    ],
    exclusions: [
      "Any income from profits and gains of business or profession"
    ],
    specialConditions: [
      "Director in a company",
      "Hold unlisted equity shares",
      "Foreign assets / income"
    ],
    summary: "For Individuals and HUFs not having income from profits and gains of business or profession. Used when ITR-1 is not applicable (e.g. income > ₹50L, capital gains, foreign assets).",
    officialSource: "Income Tax Department",
    officialSourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-return.aspx"
  },
  {
    id: "itr-3-2024-25",
    formNumber: "ITR-3",
    formName: "ITR-3",
    assessmentYear: "AY 2024-25",
    taxpayerTypes: ["Individual", "HUF"],
    incomeTypes: [
      "Salary / Pension",
      "House Property",
      "Business / Profession",
      "Capital Gains",
      "Other Sources",
      "Foreign Income / Assets"
    ],
    eligibility: [
      "Individuals and HUFs having income from profits and gains of business or profession",
      "May also include Salary, House Property, Capital Gains, and Other Sources",
      "Director in a company",
      "Investments in unlisted equity shares",
      "Partner in a firm (where ITR-2 cannot be used)"
    ],
    exclusions: [
      "Persons other than Individuals and HUFs (e.g., Company, Firm)"
    ],
    specialConditions: [
      "Business / Profession income",
      "Director in a company",
      "Hold unlisted equity shares",
      "Foreign assets / income"
    ],
    summary: "For individuals and HUFs having income from profits and gains of business or profession.",
    officialSource: "Income Tax Department",
    officialSourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-return.aspx"
  },
  {
    id: "itr-4-2024-25",
    formNumber: "ITR-4",
    formName: "SUGAM",
    assessmentYear: "AY 2024-25",
    taxpayerTypes: ["Individual", "HUF", "Firm (other than LLP)"],
    residentialStatus: ["Resident"],
    incomeTypes: [
      "Presumptive Business / Profession (Sec 44AD, 44ADA, 44AE)",
      "Salary / Pension",
      "One House Property",
      "Other Sources"
    ],
    eligibility: [
      "Resident Individuals, HUFs and Firms (other than LLP)",
      "Total income up to ₹50 Lakh",
      "Income from business and profession computed under sections 44AD, 44ADA or 44AE (Presumptive Taxation)",
      "Income from Salary / Pension",
      "Income from One House Property"
    ],
    exclusions: [
      "Total income exceeds ₹50 Lakh",
      "LLPs or Companies",
      "Director in a company",
      "Held unlisted equity shares at any time during the previous year",
      "Any asset or financial interest located outside India",
      "Signing authority in any account outside India",
      "Income from any source outside India",
      "Capital Gains",
      "More than one house property"
    ],
    specialConditions: [
      "Presumptive Taxation"
    ],
    summary: "For Individuals, HUFs and Firms (other than LLP) being a resident having total income up to ₹50 lakh and having income from business and profession which is computed under sections 44AD, 44ADA or 44AE.",
    officialSource: "Income Tax Department",
    officialSourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-return.aspx"
  },
  {
    id: "itr-5-2024-25",
    formNumber: "ITR-5",
    formName: "ITR-5",
    assessmentYear: "AY 2024-25",
    taxpayerTypes: ["Firm / LLP", "AOP", "BOI", "Artificial Juridical Person", "Business Trust", "Investment Fund"],
    incomeTypes: [
      "Business / Profession",
      "House Property",
      "Capital Gains",
      "Other Sources"
    ],
    eligibility: [
      "Firms, LLPs, AOPs, BOIs, Artificial Juridical Persons, Co-operative Societies, and Local Authorities"
    ],
    exclusions: [
      "Individuals",
      "HUFs",
      "Companies",
      "Persons filing Form ITR-7"
    ],
    specialConditions: [],
    summary: "For persons other than- (i) individual, (ii) HUF, (iii) company and (iv) person filing Form ITR-7 (e.g. Firms, LLPs, AOPs, BOIs).",
    officialSource: "Income Tax Department",
    officialSourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-return.aspx"
  },
  {
    id: "itr-6-2024-25",
    formNumber: "ITR-6",
    formName: "ITR-6",
    assessmentYear: "AY 2024-25",
    taxpayerTypes: ["Company"],
    incomeTypes: [
      "Business / Profession",
      "House Property",
      "Capital Gains",
      "Other Sources"
    ],
    eligibility: [
      "Companies registered under the Companies Act"
    ],
    exclusions: [
      "Companies claiming exemption under section 11 (Income from property held for charitable or religious purposes)"
    ],
    specialConditions: [],
    summary: "For Companies other than companies claiming exemption under section 11.",
    officialSource: "Income Tax Department",
    officialSourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-return.aspx"
  },
  {
    id: "itr-7-2024-25",
    formNumber: "ITR-7",
    formName: "ITR-7",
    assessmentYear: "AY 2024-25",
    taxpayerTypes: ["Trust / Institution", "Company", "Other"],
    incomeTypes: [
      "Any"
    ],
    eligibility: [
      "Persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D) only",
      "Trusts, political parties, research associations, news agencies, etc."
    ],
    exclusions: [
      "Taxpayers not claiming exemptions under the specified sections"
    ],
    specialConditions: [
      "Section 11 exemption / Charitable or religious trust"
    ],
    summary: "For persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D) only.",
    officialSource: "Income Tax Department",
    officialSourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-return.aspx"
  }
];

export const relatedKnowledgeBase = [
  { title: "Income Tax Act", path: "/knowledge-base/income-tax-act" },
  { title: "Income-tax Rules", path: "/knowledge-base/income-tax-rules" },
  { title: "Income Tax Circulars", path: "/knowledge-base/income-tax-circulars" },
  { title: "Income Tax Notifications", path: "/knowledge-base/income-tax-notifications" },
  { title: "Income Tax Calculators", path: "/calculator/income-tax" },
  { title: "TDS Rates", path: "/knowledge-base/rates-of-tds" },
  { title: "Cost Inflation Index", path: "/knowledge-base/cost-inflation-index" },
  { title: "Company Law Notifications", path: "/knowledge-base/company-law-notifications" }
];
