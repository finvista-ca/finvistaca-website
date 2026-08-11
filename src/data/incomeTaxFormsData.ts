export interface IncomeTaxForm {
  id: string;
  formNumber: string;
  title: string;
  category: string;
  applicableLaw: 'Income-tax Act, 1961' | 'Income-tax Act, 2025' | 'Income-tax Rules, 1962' | 'Income-tax Rules, 2026' | 'Other Acts';
  purpose: string;
  whoShouldUse: string[];
  relevantSections?: string[];
  source: string;
  sourceUrl: string;
}

export const incomeTaxFormsData: IncomeTaxForm[] = [
  {
    id: "form-15ca-1961",
    formNumber: "Form 15CA",
    title: "Information to be furnished for payments to a non-resident not being a company, or to a foreign company",
    category: "Foreign Remittance",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Used to furnish information regarding remittances being made to non-residents (or foreign companies), ensuring applicable taxes are deducted.",
    whoShouldUse: ["Any person remitting money to a non-resident or foreign company"],
    relevantSections: ["Section 195(6)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-15cb-1961",
    formNumber: "Form 15CB",
    title: "Certificate of an accountant",
    category: "Foreign Remittance",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "A certificate required from a Chartered Accountant determining the rate and amount of tax deductible on the remittance to a non-resident.",
    whoShouldUse: ["Chartered Accountants (on behalf of the remitter)"],
    relevantSections: ["Section 195(6)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-16-1961",
    formNumber: "Form 16",
    title: "Certificate under section 203 of the Income-tax Act, 1961 for tax deducted at source on salary",
    category: "TDS / TCS",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Provides a detailed summary of salary paid and tax deducted at source (TDS) by an employer.",
    whoShouldUse: ["Employers (to be issued to Employees)"],
    relevantSections: ["Section 203"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-16a-1961",
    formNumber: "Form 16A",
    title: "Certificate under section 203 of the Income-tax Act, 1961 for tax deducted at source on income other than salary",
    category: "TDS / TCS",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Provides a summary of tax deducted at source (TDS) on income other than salary, such as interest, rent, or professional fees.",
    whoShouldUse: ["Deductors (to be issued to Deductees)"],
    relevantSections: ["Section 203"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-26q-1961",
    formNumber: "Form 26Q",
    title: "Quarterly statement of deduction of tax under sub-section (3) of section 200 of the Income-tax Act in respect of payments other than salary",
    category: "TDS / TCS",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Used for filing quarterly TDS returns for TDS deducted on payments other than salary (e.g., professional fees, rent, interest).",
    whoShouldUse: ["Deductors"],
    relevantSections: ["Section 200(3)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-24q-1961",
    formNumber: "Form 24Q",
    title: "Quarterly statement of deduction of tax under sub-section (3) of section 200 of the Income-tax Act in respect of salary for the quarter ended",
    category: "TDS / TCS",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Used for filing quarterly TDS returns for TDS deducted on salary payments.",
    whoShouldUse: ["Employers / Deductors"],
    relevantSections: ["Section 200(3)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-27q-1961",
    formNumber: "Form 27Q",
    title: "Quarterly statement of deduction of tax under sub-section (3) of section 200 of the Income-tax Act in respect of payments other than salary made to non-residents",
    category: "TDS / TCS",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Used for filing quarterly TDS returns for TDS deducted on payments made to non-residents and foreign companies.",
    whoShouldUse: ["Deductors remitting to non-residents"],
    relevantSections: ["Section 200(3)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-15g-1961",
    formNumber: "Form 15G",
    title: "Declaration under section 197A(1) and section 197A(1A) to be made by an individual or a person (not being a company or firm) claiming certain incomes without deduction of tax",
    category: "Declarations",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Submitted by resident individuals (under 60 years of age) to prevent TDS deduction on interest income if their estimated total tax liability is nil.",
    whoShouldUse: ["Resident Individuals under age 60", "HUF or Trust"],
    relevantSections: ["Section 197A(1)", "Section 197A(1A)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-15h-1961",
    formNumber: "Form 15H",
    title: "Declaration under section 197A(1C) to be made by an individual who is of the age of sixty years or more claiming certain incomes without deduction of tax",
    category: "Declarations",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Submitted by resident senior citizens (60 years or older) to prevent TDS deduction on interest income if their estimated total tax liability is nil.",
    whoShouldUse: ["Resident Senior Citizens (age 60 or above)"],
    relevantSections: ["Section 197A(1C)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-3cd-1961",
    formNumber: "Form 3CD",
    title: "Statement of particulars required to be furnished under section 44AB of the Income-tax Act, 1961",
    category: "Tax Audit",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "A detailed statement of particulars containing various financial, tax, and compliance details required as part of the tax audit report.",
    whoShouldUse: ["Assessees liable for tax audit under Section 44AB", "Chartered Accountants"],
    relevantSections: ["Section 44AB"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-3cb-1961",
    formNumber: "Form 3CB",
    title: "Audit report under section 44AB of the Income-tax Act 1961, in the case of a person referred to in clause (b) of sub-rule (1) of rule 6G",
    category: "Tax Audit",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Audit report furnished by a Chartered Accountant for a person who is not required to get their accounts audited under any other law.",
    whoShouldUse: ["Chartered Accountants"],
    relevantSections: ["Section 44AB"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-3ca-1961",
    formNumber: "Form 3CA",
    title: "Audit report under section 44AB of the Income-tax Act, 1961, in a case where the accounts of the business or profession of a person have been audited under any other law",
    category: "Tax Audit",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Audit report furnished by a Chartered Accountant for a person who is already required to get their accounts audited under another law (e.g., Companies Act).",
    whoShouldUse: ["Chartered Accountants"],
    relevantSections: ["Section 44AB"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-3ceb-1961",
    formNumber: "Form 3CEB",
    title: "Report from an accountant to be furnished under section 92E relating to international transaction(s) and specified domestic transaction(s)",
    category: "International Taxation",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Required to report international transactions or specified domestic transactions to ensure compliance with transfer pricing regulations.",
    whoShouldUse: ["Assessees engaged in international/specified domestic transactions", "Chartered Accountants"],
    relevantSections: ["Section 92E"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-10b-1961",
    formNumber: "Form 10B",
    title: "Audit report under section 12A(1)(b) of the Income-tax Act, 1961, in the case of charitable or religious trusts or institutions",
    category: "Charitable / Religious Institutions",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Audit report required for charitable or religious trusts or institutions whose total income exceeds the maximum amount not chargeable to tax.",
    whoShouldUse: ["Charitable / Religious Trusts or Institutions", "Chartered Accountants"],
    relevantSections: ["Section 12A(1)(b)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-10bb-1961",
    formNumber: "Form 10BB",
    title: "Audit report under section 10(23C) of the Income-tax Act, 1961, in the case of any fund or trust or institution or any university or other educational institution or any hospital or other medical institution",
    category: "Charitable / Religious Institutions",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Audit report required for specified funds, trusts, educational institutions, or hospitals claiming exemption under Section 10(23C).",
    whoShouldUse: ["Funds, Trusts, Educational/Medical Institutions claiming exemption", "Chartered Accountants"],
    relevantSections: ["Section 10(23C)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-49a-1961",
    formNumber: "Form 49A",
    title: "Application for Allotment of Permanent Account Number",
    category: "PAN / TAN",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Used by Indian citizens, Indian companies, and entities incorporated in India to apply for a new Permanent Account Number (PAN).",
    whoShouldUse: ["Indian Citizens", "Indian Entities"],
    relevantSections: ["Section 139A"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-49b-1961",
    formNumber: "Form 49B",
    title: "Application for Allotment of Tax Deduction and Collection Account Number",
    category: "PAN / TAN",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Used to apply for a Tax Deduction and Collection Account Number (TAN) required by persons deducting or collecting tax at source.",
    whoShouldUse: ["Persons deducting/collecting tax at source"],
    relevantSections: ["Section 203A"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-10f-1961",
    formNumber: "Form 10F",
    title: "Information to be provided under sub-section (5) of section 90 or sub-section (5) of section 90A of the Income-tax Act, 1961",
    category: "International Taxation",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Used by non-residents to provide necessary information to claim relief under a Double Taxation Avoidance Agreement (DTAA) when the Tax Residency Certificate does not contain all required details.",
    whoShouldUse: ["Non-Residents claiming DTAA relief"],
    relevantSections: ["Section 90(5)", "Section 90A(5)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  },
  {
    id: "form-61a-1961",
    formNumber: "Form 61A",
    title: "Statement of Specified Financial Transactions under section 285BA(1) of the Income-tax Act, 1961",
    category: "Statements",
    applicableLaw: "Income-tax Act, 1961",
    purpose: "Used by specified reporting entities (like banks, registrars, mutual funds) to report high-value financial transactions to the Income Tax Department.",
    whoShouldUse: ["Reporting Entities (Banks, Mutual Funds, Sub-Registrars, etc.)"],
    relevantSections: ["Section 285BA(1)"],
    source: "Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/pages/downloads/income-tax-forms.aspx"
  }
];

export const relatedKnowledgeBase = [
  { title: "Income Tax Act", path: "/knowledge-base/income-tax-act" },
  { title: "Income-tax Rules", path: "/knowledge-base/income-tax-rules" },
  { title: "Income Tax Return Forms", path: "/knowledge-base/income-tax-returns-forms" },
  { title: "Income Tax Circulars", path: "/knowledge-base/income-tax-circulars" },
  { title: "Income Tax Notifications", path: "/knowledge-base/income-tax-notifications" },
  { title: "Income Tax Calculators", path: "/calculator/income-tax" },
  { title: "TDS Rates", path: "/knowledge-base/rates-of-tds" },
  { title: "Cost Inflation Index", path: "/knowledge-base/cost-inflation-index" }
];
