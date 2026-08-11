export interface WealthTaxReturnForm {
  id: string;
  formNumber: string;
  title: string;
  applicablePeriod?: string;
  category: string;
  purpose: string;
  whoUsedIt: string[];
  relevantSections?: string[];
  historicalStatus: 'Historical';
  summary: string;
  source: string;
  sourceUrl: string;
}

export const wealthTaxReturnsFormsData: WealthTaxReturnForm[] = [
  {
    id: "wt-form-ba",
    formNumber: "Form BA",
    title: "Return of Net Wealth (Form BA)",
    applicablePeriod: "Up to Assessment Year 2013-14",
    category: "Wealth Tax Return",
    purpose: "Historical return of net wealth used for computing wealth-tax liability before the introduction of mandatory electronic filing forms.",
    whoUsedIt: ["Individuals", "Hindu Undivided Families (HUFs)", "Companies"],
    relevantSections: ["Section 14 of the Wealth-tax Act, 1957", "Rule 3(1)(B) of Wealth-tax Rules"],
    historicalStatus: "Historical",
    summary: "Form BA was the widely used paper-based Return of Net Wealth applicable up to Assessment Year 2013-14. It was subsequently replaced by Form BB for electronic filing.",
    source: "Income Tax Department / India Code Archives",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/wealth-tax-forms.aspx"
  },
  {
    id: "wt-form-bb",
    formNumber: "Form BB",
    title: "Return of Net Wealth (Electronic Filing)",
    applicablePeriod: "Assessment Year 2014-15 & 2015-16",
    category: "Wealth Tax Return",
    purpose: "Designated form for the electronic filing of the return of net wealth for the final years before the abolition of the Wealth-tax Act.",
    whoUsedIt: ["Individuals", "Hindu Undivided Families (HUFs)", "Companies"],
    relevantSections: ["Section 14 of the Wealth-tax Act, 1957", "Rule 3(1)(BA) of Wealth-tax Rules"],
    historicalStatus: "Historical",
    summary: "Introduced by the CBDT for AY 2014-15 onwards, Form BB mandated electronic filing of wealth-tax returns. It remained in use until the Wealth-tax Act was abolished in 2016.",
    source: "Income Tax Department / India Code Archives",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/wealth-tax-forms.aspx"
  },
  {
    id: "wt-form-a",
    formNumber: "Form A",
    title: "Notice of Demand under section 30 of the Wealth-tax Act, 1957",
    applicablePeriod: "Historical (Pre-2016)",
    category: "Assessment / Demand",
    purpose: "Official notice of demand issued by the Assessing Officer specifying the amount of wealth-tax, interest, or penalty payable.",
    whoUsedIt: ["Assessing Officers", "Wealth-tax Assessees"],
    relevantSections: ["Section 30 of the Wealth-tax Act, 1957"],
    historicalStatus: "Historical",
    summary: "Form A was used by the tax authorities to formally demand payment of wealth-tax dues or penalties from an assessee following an assessment.",
    source: "Income Tax Department / India Code Archives",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/wealth-tax-forms.aspx"
  },
  {
    id: "wt-form-b",
    formNumber: "Form B",
    title: "Notice of Demand under section 30 of the Wealth-tax Act, 1957 for provisional assessment",
    applicablePeriod: "Historical (Pre-2016)",
    category: "Assessment / Demand",
    purpose: "Notice of demand specifically issued for provisional assessments made under the Wealth-tax Act.",
    whoUsedIt: ["Assessing Officers", "Wealth-tax Assessees"],
    relevantSections: ["Section 30 of the Wealth-tax Act, 1957"],
    historicalStatus: "Historical",
    summary: "A legacy procedural form used for provisional assessments of wealth-tax liabilities.",
    source: "Income Tax Department / India Code Archives",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/wealth-tax-forms.aspx"
  },
  {
    id: "wt-form-c",
    formNumber: "Form C",
    title: "Notice under section 16(2) of the Wealth-tax Act, 1957",
    applicablePeriod: "Historical (Pre-2016)",
    category: "Assessment / Demand",
    purpose: "Notice issued to the assessee to produce accounts, records, or other documents in connection with a wealth-tax return.",
    whoUsedIt: ["Assessing Officers"],
    relevantSections: ["Section 16(2) of the Wealth-tax Act, 1957"],
    historicalStatus: "Historical",
    summary: "A legacy notice used during wealth-tax assessment proceedings to compel the production of evidence.",
    source: "Income Tax Department / India Code Archives",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/wealth-tax-forms.aspx"
  }
];

export const relatedKnowledgeBase = [
  { title: "Income Tax Act", path: "/knowledge-base/income-tax-act" },
  { title: "Income-tax Rules", path: "/knowledge-base/income-tax-rules" },
  { title: "Income Tax Return Forms", path: "/knowledge-base/income-tax-returns-forms" },
  { title: "Income Tax Forms", path: "/knowledge-base/income-tax-forms" },
  { title: "Income Tax Circulars", path: "/knowledge-base/income-tax-circulars" },
  { title: "Income Tax Notifications", path: "/knowledge-base/income-tax-notifications" },
  { title: "Income Tax Calculators", path: "/calculator/income-tax" }
];
