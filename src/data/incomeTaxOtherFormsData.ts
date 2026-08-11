export interface IncomeTaxOtherForm {
  id: string;
  formNumber: string;
  title: string;
  category: string;
  applicableLaw: 'Income-tax Act, 1961' | 'Income-tax Act, 2025' | 'Income-tax Rules, 1962' | 'Income-tax Rules, 2026' | 'Other Acts';
  purpose: string;
  whoUsesIt?: string[];
  relevantSections?: string[];
  applicablePeriod?: string;
  status: 'Current' | 'Historical' | 'Superseded' | 'Amended';
  summary: string;
  source: string;
  sourceUrl: string;
}

export const incomeTaxOtherFormsData: IncomeTaxOtherForm[] = [
  {
    id: "form-10e",
    formNumber: "Form 10E",
    title: "Form for furnishing particulars of income under section 192(2A) for the year ending 31st March, for claiming relief under section 89(1)",
    category: "Relief / Exemption",
    applicableLaw: "Income-tax Rules, 1962",
    purpose: "To claim relief under section 89(1) for arrears or advance of salary.",
    whoUsesIt: ["Salaried Individuals"],
    relevantSections: ["Section 89(1)", "Section 192(2A)", "Rule 21AA"],
    applicablePeriod: "Assessment Year 2024-25 and earlier",
    status: "Current",
    summary: "Form 10E is required to be filed online by taxpayers who have received arrears of salary or advance salary and wish to claim tax relief under Section 89 to avoid paying higher taxes.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "form-35",
    formNumber: "Form 35",
    title: "Appeal to the Commissioner of Income-tax (Appeals)",
    category: "Appeal",
    applicableLaw: "Income-tax Rules, 1962",
    purpose: "To file an appeal against an assessment order, penalty order, or other applicable orders passed by an Assessing Officer.",
    whoUsesIt: ["Any aggrieved taxpayer"],
    relevantSections: ["Section 246A", "Rule 45"],
    applicablePeriod: "Ongoing",
    status: "Current",
    summary: "Form 35 is the standard application used by taxpayers to escalate a dispute or appeal an order passed by an Assessing Officer to the Commissioner of Income-tax (Appeals).",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "form-60",
    formNumber: "Form 60",
    title: "Declaration to be filed by an individual or a person (not being a company or firm) who does not have a PAN",
    category: "Declaration",
    applicableLaw: "Income-tax Rules, 1962",
    purpose: "To serve as a declaration in lieu of a Permanent Account Number (PAN) when entering into specific financial transactions.",
    whoUsesIt: ["Individuals without PAN", "Hindu Undivided Families (HUF) without PAN"],
    relevantSections: ["Rule 114B"],
    applicablePeriod: "Ongoing",
    status: "Current",
    summary: "Form 60 is a mandatory declaration filed by persons who do not possess a PAN but are undertaking transactions specified under Rule 114B, such as opening a bank account or buying a vehicle.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  },
  {
    id: "form-13",
    formNumber: "Form 13",
    title: "Application by a person for a certificate under section 197 and/or 206C(9) for no deduction of tax or deduction or collection of tax at lower rate",
    category: "Application",
    applicableLaw: "Income-tax Rules, 1962",
    purpose: "To apply for a certificate from the Assessing Officer authorizing nil or lower rate of TDS/TCS.",
    whoUsesIt: ["Taxpayers subject to TDS/TCS", "Non-residents", "Trusts/Societies"],
    relevantSections: ["Section 197", "Section 206C(9)", "Rule 28", "Rule 28AA", "Rule 28AB", "Rule 37G"],
    applicablePeriod: "Ongoing",
    status: "Current",
    summary: "Form 13 is an application submitted to the Income Tax Department requesting permission for the deductor to deduct tax at a lower rate or at a nil rate, typically filed when the final tax liability is expected to be lower than the standard TDS rate.",
    source: "Income Tax Department e-Filing",
    sourceUrl: "https://www.incometax.gov.in/iec/foportal/"
  }
];

export const relatedKnowledgeBase = [
  { title: "Income Tax Act", path: "/knowledge-base/income-tax-act" },
  { title: "Income-tax Rules", path: "/knowledge-base/income-tax-rules" },
  { title: "Income Tax Forms", path: "/knowledge-base/income-tax-forms" },
  { title: "Income Tax Return Forms", path: "/knowledge-base/income-tax-returns-forms" },
  { title: "Income Tax Challans", path: "/knowledge-base/income-tax-challans" },
  { title: "Income Tax Circulars", path: "/knowledge-base/income-tax-circulars" },
  { title: "Income Tax Notifications", path: "/knowledge-base/income-tax-notifications" },
  { title: "Income Tax Calculators", path: "/calculator/income-tax" }
];
