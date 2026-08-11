export interface MinorHead {
  code: string;
  name: string;
}

export interface IncomeTaxChallan {
  id: string;
  challanNumber: string;
  title: string;
  applicableLaw: 'Income-tax Act, 1961' | 'Income-tax Act, 2025';
  category: string;
  purpose: string;
  majorHeads: string[];
  minorHeads: MinorHead[];
  applicablePeriod: string;
  paymentTypes: string[];
  summary: string;
  source: string;
  sourceUrl: string;
}

export const incomeTaxChallansData: IncomeTaxChallan[] = [
  // --- 1961 Act Challans ---
  {
    id: "challan-280-1961",
    challanNumber: "ITNS 280",
    title: "Payment of Income Tax & Corporation Tax",
    applicableLaw: "Income-tax Act, 1961",
    category: "Income Tax",
    purpose: "Used for payment of Advance Tax, Self Assessment Tax, Tax on Regular Assessment, Surtax, Tax on Distributed Profits of Domestic Company and Tax on Distributed Income to unit holders.",
    majorHeads: ["0020 - Corporation Tax", "0021 - Income Tax (Other than Companies)"],
    minorHeads: [
      { code: "100", name: "Advance Tax" },
      { code: "102", name: "Surtax" },
      { code: "106", name: "Tax on Distributed Profit" },
      { code: "107", name: "Tax on Distributed Income" },
      { code: "300", name: "Self Assessment Tax" },
      { code: "400", name: "Tax on Regular Assessment" }
    ],
    applicablePeriod: "Assessment Year 2026-27 or earlier",
    paymentTypes: ["Advance Tax", "Self-Assessment Tax", "Regular Assessment / Outstanding Demand", "Surtax"],
    summary: "The primary legacy challan for paying personal income tax and corporate tax under the 1961 Act.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "challan-281-1961",
    challanNumber: "ITNS 281",
    title: "Payment of TDS / TCS",
    applicableLaw: "Income-tax Act, 1961",
    category: "TDS / TCS",
    purpose: "Used for depositing Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) by corporate and non-corporate deductors.",
    majorHeads: ["0020 - Company Deductees", "0021 - Non-Company Deductees"],
    minorHeads: [
      { code: "200", name: "TDS/TCS Payable by Taxpayer" },
      { code: "400", name: "TDS/TCS Regular Assessment (Raised by I.T. Department)" }
    ],
    applicablePeriod: "Assessment Year 2026-27 or earlier",
    paymentTypes: ["TDS / TCS"],
    summary: "The standard legacy challan for depositing TDS or TCS collected on behalf of employees, vendors, or buyers under the 1961 Act.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "challan-282-1961",
    challanNumber: "ITNS 282",
    title: "Payment of Securities Transaction Tax, Wealth Tax & Other Taxes",
    applicableLaw: "Income-tax Act, 1961",
    category: "Other Taxes",
    purpose: "Used for payment of Securities Transaction Tax, Wealth Tax, Gift Tax, Expenditure Tax, Estate Duty, Commodities Transaction Tax, and Equalisation Levy.",
    majorHeads: ["0023 - Hotel Receipt Tax", "0024 - Interest Tax", "0026 - Wealth Tax", "0028 - Gift Tax", "0031 - Estate Duty", "0032 - Wealth Tax (Agricultural Property)", "0033 - Expenditure Tax", "0034 - Securities Transaction Tax"],
    minorHeads: [
      { code: "100", name: "Advance Tax" },
      { code: "300", name: "Self Assessment Tax" },
      { code: "400", name: "Tax on Regular Assessment" }
    ],
    applicablePeriod: "Assessment Year 2026-27 or earlier",
    paymentTypes: ["Securities Transaction Tax", "Commodities Transaction Tax", "Wealth Tax", "Equalisation Levy", "Other Tax"],
    summary: "Used for specialized taxes and legacy wealth/gift taxes under the 1961 Act.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "challan-288-1961",
    challanNumber: "ITNS 288",
    title: "Payment of Tax for Block Assessment",
    applicableLaw: "Income-tax Act, 1961",
    category: "Block Assessment",
    purpose: "Used for payment of tax under Block Assessment (in cases of search and seizure operations).",
    majorHeads: ["0020 - Corporation Tax", "0021 - Income Tax (Other than Companies)"],
    minorHeads: [
      { code: "400", name: "Tax on Regular Assessment" }
    ],
    applicablePeriod: "Assessment Year 2026-27 or earlier",
    paymentTypes: ["Block Assessment"],
    summary: "Specific legacy challan for block assessment tax payments following search or requisition under the 1961 Act.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },

  // --- 2025 Act Challans ---
  {
    id: "challan-280n-2025",
    challanNumber: "ITNS 280N",
    title: "Payment of Income Tax & Corporation Tax (New)",
    applicableLaw: "Income-tax Act, 2025",
    category: "Income Tax",
    purpose: "Used for payment of Advance Tax, Self Assessment Tax, Tax on Regular Assessment, and other domestic corporate/personal taxes under the new framework.",
    majorHeads: ["0020 - Corporation Tax", "0021 - Income Tax (Other than Companies)"],
    minorHeads: [
      { code: "100", name: "Advance Tax" },
      { code: "300", name: "Self Assessment Tax" },
      { code: "400", name: "Tax on Regular Assessment" }
    ],
    applicablePeriod: "Tax Year 2026-27 and onwards",
    paymentTypes: ["Advance Tax", "Self-Assessment Tax", "Regular Assessment / Outstanding Demand"],
    summary: "The direct equivalent of ITNS 280 for periods governed by the Income-tax Act, 2025 via the updated e-Pay Tax portal.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "challan-281n-2025",
    challanNumber: "ITNS 281N",
    title: "Payment of TDS / TCS (New)",
    applicableLaw: "Income-tax Act, 2025",
    category: "TDS / TCS",
    purpose: "Used for depositing Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) under the updated tax framework.",
    majorHeads: ["0020 - Company Deductees", "0021 - Non-Company Deductees"],
    minorHeads: [
      { code: "200", name: "TDS/TCS Payable by Taxpayer" },
      { code: "400", name: "TDS/TCS Regular Assessment (Raised by I.T. Department)" }
    ],
    applicablePeriod: "Tax Year 2026-27 and onwards",
    paymentTypes: ["TDS / TCS"],
    summary: "The direct equivalent of ITNS 281 for periods governed by the Income-tax Act, 2025 via the updated e-Pay Tax portal.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "challan-282n-2025",
    challanNumber: "ITNS 282N",
    title: "Payment of Securities Transaction Tax & Other Taxes (New)",
    applicableLaw: "Income-tax Act, 2025",
    category: "Other Taxes",
    purpose: "Used for payment of Securities Transaction Tax, Commodities Transaction Tax, Equalisation Levy and other miscellaneous tax obligations.",
    majorHeads: ["0034 - Securities Transaction Tax", "0035 - Commodities Transaction Tax", "0036 - Equalisation Levy"],
    minorHeads: [
      { code: "100", name: "Advance Tax" },
      { code: "300", name: "Self Assessment Tax" },
      { code: "400", name: "Tax on Regular Assessment" }
    ],
    applicablePeriod: "Tax Year 2026-27 and onwards",
    paymentTypes: ["Securities Transaction Tax", "Commodities Transaction Tax", "Equalisation Levy", "Other Tax"],
    summary: "The direct equivalent of ITNS 282 for non-income transactional taxes governed by the Income-tax Act, 2025.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "challan-288n-2025",
    challanNumber: "ITNS 288N",
    title: "Payment of Tax for Block Assessment (New)",
    applicableLaw: "Income-tax Act, 2025",
    category: "Block Assessment",
    purpose: "Used for payment of tax under Block Assessment (in cases of search and seizure operations).",
    majorHeads: ["0020 - Corporation Tax", "0021 - Income Tax (Other than Companies)"],
    minorHeads: [
      { code: "400", name: "Tax on Regular Assessment" }
    ],
    applicablePeriod: "Tax Year 2026-27 and onwards",
    paymentTypes: ["Block Assessment"],
    summary: "The direct equivalent of ITNS 288 for block assessments conducted under the Income-tax Act, 2025.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  }
];

export const relatedKnowledgeBase = [
  { title: "Income Tax Act", path: "/knowledge-base/income-tax-act" },
  { title: "Income-tax Rules", path: "/knowledge-base/income-tax-rules" },
  { title: "Income Tax Return Forms", path: "/knowledge-base/income-tax-returns-forms" },
  { title: "Income Tax Forms", path: "/knowledge-base/income-tax-forms" },
  { title: "Income Tax Circulars", path: "/knowledge-base/income-tax-circulars" },
  { title: "Income Tax Notifications", path: "/knowledge-base/income-tax-notifications" },
  { title: "TDS Rates", path: "/knowledge-base/rates-of-tds" },
  { title: "Income Tax Calculators", path: "/calculator/income-tax" }
];
