export interface LLPForm {
  id: string;
  formNumber: string;
  title: string;
  category: string;
  applicableLaw: 'LLP Act, 2008' | 'LLP Rules, 2009' | 'Other Corporate Law';
  purpose: string;
  triggerEvent?: string;
  applicableEntities?: string[];
  relevantSections?: string[];
  applicableRules?: string[];
  filingMode?: string;
  status: 'Current' | 'Historical' | 'Superseded' | 'Amended';
  summary: string;
  source: string;
  sourceUrl: string;
}

export const llpFormsData: LLPForm[] = [
  {
    id: "llp-fillip",
    formNumber: "FiLLiP",
    title: "Form for incorporation of Limited Liability Partnership",
    category: "Incorporation",
    applicableLaw: "LLP Rules, 2009",
    purpose: "Web-based form for incorporating a new Limited Liability Partnership and applying for DPIN/DIN.",
    triggerEvent: "LLP Incorporation",
    applicableEntities: ["LLP"],
    relevantSections: ["Section 11", "Section 12", "Section 13", "Section 16"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "FiLLiP (Form for incorporation of Limited Liability Partnership) is an integrated form for registering a new LLP, incorporating name reservation and application for DIN/DPIN. It replaced the previous Form 2.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "llp-form-3",
    formNumber: "Form 3",
    title: "Information with regard to limited liability partnership agreement and changes, if any, made therein",
    category: "LLP Agreement",
    applicableLaw: "LLP Rules, 2009",
    purpose: "To file the initial LLP Agreement or report any modifications/amendments to the agreement.",
    triggerEvent: "Execution of the initial LLP Agreement or any subsequent amendment",
    applicableEntities: ["LLP"],
    relevantSections: ["Section 23(2)", "Section 23(3)"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "Form 3 must be filed within 30 days of incorporation to register the initial LLP agreement, and subsequently whenever the agreement is amended.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "llp-form-4",
    formNumber: "Form 4",
    title: "Notice of appointment, cessation, change in name/ address/designation of a designated partner or partner and consent to become a partner/designated partner",
    category: "Partner / Designated Partner Changes",
    applicableLaw: "LLP Rules, 2009",
    purpose: "To notify the Registrar of the appointment, cessation, or change in details of an LLP partner or designated partner.",
    triggerEvent: "Admission, resignation, cessation, or change in particulars of a partner or designated partner",
    applicableEntities: ["LLP"],
    relevantSections: ["Section 7", "Section 25(2)", "Section 25(3)"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "Form 4 is used to file notice of appointment, cessation, and changes in the name, address, or designation of a designated partner or partner.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "llp-form-5",
    formNumber: "Form 5",
    title: "Notice for change of name",
    category: "Name Changes",
    applicableLaw: "LLP Rules, 2009",
    purpose: "To give notice to the Registrar regarding the change of name of the Limited Liability Partnership.",
    triggerEvent: "Change of LLP name",
    applicableEntities: ["LLP"],
    relevantSections: ["Section 19"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "Form 5 must be filed to notify the Registrar of Companies of any change in the name of the LLP.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "llp-form-8",
    formNumber: "Form 8",
    title: "Statement of Account & Solvency",
    category: "Annual Compliance",
    applicableLaw: "LLP Rules, 2009",
    purpose: "To declare the financial position, statement of account, and solvency of the LLP for the financial year.",
    triggerEvent: "Close of the financial year",
    applicableEntities: ["LLP"],
    relevantSections: ["Section 34(2)", "Section 34(3)"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "Form 8 is an annual compliance form for LLPs detailing their statement of accounts and a declaration of solvency by the designated partners.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  },
  {
    id: "llp-form-11",
    formNumber: "Form 11",
    title: "Annual Return of Limited Liability Partnership (LLP)",
    category: "Annual Compliance",
    applicableLaw: "LLP Rules, 2009",
    purpose: "To file the annual return summarizing management, partners, and operational details of the LLP.",
    triggerEvent: "Close of the financial year",
    applicableEntities: ["LLP"],
    relevantSections: ["Section 35(1)"],
    applicableRules: ["LLP Rules, 2009"],
    filingMode: "MCA V3 web-form",
    status: "Current",
    summary: "Form 11 is the statutory annual return for an LLP, providing the ROC with updated information on designated partners, partner contributions, and corporate details.",
    source: "MCA V3 Portal",
    sourceUrl: "https://www.mca.gov.in/content/mca/global/en/home.html"
  }
];

export const relatedKnowledgeBase = [
  { title: "LLP Act", path: "/knowledge-base/llp-act" },
  { title: "LLP Rules", path: "/knowledge-base/llp-rules" },
  { title: "ROC Forms", path: "/knowledge-base/roc-forms" },
  { title: "Companies Act", path: "/knowledge-base/companies-act" },
  { title: "Company Law Rules", path: "/knowledge-base/company-law-rules" },
  { title: "Company Law Circulars", path: "/knowledge-base/company-law-circulars" },
  { title: "Company Law Notifications", path: "/knowledge-base/company-law-notifications" }
];
