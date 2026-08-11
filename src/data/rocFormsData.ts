export interface ROCForm {
  id: string;
  formNumber: string;
  title: string;
  category: string;
  applicableLaw: 'Companies Act, 2013' | 'LLP Act, 2008' | 'Companies Rules' | 'LLP Rules' | 'Other Corporate Law';
  entityTypes: string[];
  purpose: string;
  triggerEvent?: string;
  relevantSections?: string[];
  applicableRules?: string[];
  filingMode?: string;
  status: 'Current' | 'Historical' | 'Superseded' | 'Amended';
  summary: string;
  source: string;
  sourceUrl: string;
}

export const rocFormsData: ROCForm[] = [
  // Companies Act Forms
  {
    id: "roc-spice-plus",
    formNumber: "SPICe+ (INC-32)",
    title: "Simplified Proforma for Incorporating Company Electronically Plus",
    category: "Incorporation",
    applicableLaw: "Companies Rules",
    entityTypes: ["Company"],
    purpose: "Comprehensive web-based form for incorporation of a company.",
    triggerEvent: "Company Incorporation",
    relevantSections: ["Section 4", "Section 7", "Section 8", "Section 12", "Section 152"],
    applicableRules: ["Companies (Incorporation) Rules, 2014"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "SPICe+ is an integrated Web form offering 10 services by 3 Central Govt Ministries & Departments (Ministry of Corporate Affairs, Ministry of Labour & Department of Revenue in the Ministry of Finance) and One State Government (Maharashtra), thereby saving as many procedures, time and cost for Starting a Business in India.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/mca/e-filing/incorporation/spice.html"
  },
  {
    id: "roc-aoc-4",
    formNumber: "AOC-4",
    title: "Form for filing financial statement and other documents with the Registrar",
    category: "Financial Statements",
    applicableLaw: "Companies Rules",
    entityTypes: ["Company"],
    purpose: "To file the company's financial statements and the Board's Report.",
    triggerEvent: "Adoption of financial statements at the AGM",
    relevantSections: ["Section 137"],
    applicableRules: ["Companies (Accounts) Rules, 2014"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "AOC-4 is the standard form used by companies to file their audited financial statements, consolidated financial statements, and Board reports with the ROC.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "roc-mgt-7",
    formNumber: "MGT-7",
    title: "Form for filing annual return by a company",
    category: "Annual Return",
    applicableLaw: "Companies Rules",
    entityTypes: ["Company"],
    purpose: "To file the annual return of the company containing details of shareholders, directors, and capital structure.",
    triggerEvent: "Conclusion of Annual General Meeting (AGM)",
    relevantSections: ["Section 92(1)"],
    applicableRules: ["Companies (Management and Administration) Rules, 2014"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "MGT-7 is the comprehensive electronic annual return form for companies, providing the ROC with updated information on the company's stakeholders, governance, and capital position for the financial year.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "roc-dir-12",
    formNumber: "DIR-12",
    title: "Particulars of appointment of directors and the key managerial personnel and the changes among them",
    category: "Director / KMP Changes",
    applicableLaw: "Companies Rules",
    entityTypes: ["Company"],
    purpose: "To notify the ROC of the appointment, resignation, or change in designation of Directors or Key Managerial Personnel (KMP).",
    triggerEvent: "Appointment, resignation, or change in designation of a Director or KMP",
    relevantSections: ["Section 7(1)(c)", "Section 168", "Section 170(2)", "Section 152", "Section 153"],
    applicableRules: ["Companies (Appointment and Qualification of Directors) Rules, 2014"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "DIR-12 must be filed whenever a company appoints a new director/KMP, or when an existing director/KMP resigns or undergoes a change in their designation.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "roc-adt-1",
    formNumber: "ADT-1",
    title: "Information to the Registrar by company for appointment of auditor",
    category: "Auditor Appointment",
    applicableLaw: "Companies Rules",
    entityTypes: ["Company"],
    purpose: "To intimate the ROC about the appointment or reappointment of the company's statutory auditor.",
    triggerEvent: "Appointment of statutory auditor at the AGM",
    relevantSections: ["Section 139(1)"],
    applicableRules: ["Companies (Audit and Auditors) Rules, 2014"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "ADT-1 is the mandatory form filed by a company to officially inform the Registrar of Companies of the auditor's appointment following an Annual General Meeting.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },

  // LLP Forms
  {
    id: "roc-fillip",
    formNumber: "FiLLiP",
    title: "Form for incorporation of Limited Liability Partnership",
    category: "Incorporation",
    applicableLaw: "LLP Rules",
    entityTypes: ["LLP"],
    purpose: "Web-based form for incorporating a new Limited Liability Partnership.",
    triggerEvent: "LLP Incorporation",
    relevantSections: ["Section 11", "Section 12", "Section 13", "Section 16"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "FiLLiP (Form for incorporation of Limited Liability Partnership) is the integrated form for registering a new LLP, incorporating name reservation and application for DIN/DPIN.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "roc-llp-form-8",
    formNumber: "Form 8",
    title: "Statement of Account & Solvency",
    category: "Financial Statements",
    applicableLaw: "LLP Rules",
    entityTypes: ["LLP"],
    purpose: "To declare the financial position, statement of account, and solvency of the LLP.",
    triggerEvent: "Close of the financial year",
    relevantSections: ["Section 34(2)", "Section 34(3)"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "Form 8 is an annual compliance form for LLPs detailing their statement of accounts and a declaration of solvency by the designated partners.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "roc-llp-form-11",
    formNumber: "Form 11",
    title: "Annual Return of Limited Liability Partnership (LLP)",
    category: "Annual Return",
    applicableLaw: "LLP Rules",
    entityTypes: ["LLP"],
    purpose: "To file the annual return summarizing management, partners, and operational details of the LLP.",
    triggerEvent: "Close of the financial year",
    relevantSections: ["Section 35(1)"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "Form 11 is the statutory annual return for an LLP, providing the ROC with updated information on designated partners, partner contributions, and corporate details.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "roc-llp-form-3",
    formNumber: "Form 3",
    title: "Information with regard to limited liability partnership agreement and changes, if any, made therein",
    category: "LLP Agreement",
    applicableLaw: "LLP Rules",
    entityTypes: ["LLP"],
    purpose: "To file the initial LLP Agreement or report any modifications/amendments to the agreement.",
    triggerEvent: "Execution or amendment of the LLP Agreement",
    relevantSections: ["Section 23(2)"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "Form 3 must be filed within 30 days of incorporation to register the initial LLP agreement, and subsequently whenever the agreement is amended.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  }
];

export const relatedKnowledgeBase = [
  { title: "Companies Act", path: "/knowledge-base/companies-act" },
  { title: "Company Law Rules", path: "/knowledge-base/company-law-rules" },
  { title: "Company Law Circulars", path: "/knowledge-base/company-law-circulars" },
  { title: "Company Law Notifications", path: "/knowledge-base/company-law-notifications" },
  { title: "LLP Act", path: "/knowledge-base/llp-act" },
  { title: "LLP Rules", path: "/knowledge-base/llp-rules" },
  { title: "Company Law Compliance", path: "/knowledge-base/company-law-compliance" }
];
