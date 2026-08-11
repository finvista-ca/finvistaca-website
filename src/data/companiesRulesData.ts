export interface CompaniesRuleSet {
  id: string;
  title: string;
  description: string;
  category: string;
  officialSourceUrl: string;
  forms?: { formNo: string; purpose: string }[];
  popularRules?: { ruleNo: string; title: string }[];
}

export const companiesRulesData: CompaniesRuleSet[] = [
  {
    id: "rules-spec-def",
    title: "Companies (Specification of Definitions Details) Rules, 2014",
    description: "Detailed definitions of key corporate terms such as related party, small company, and subsidiary.",
    category: "General",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    popularRules: [
      { ruleNo: "2", title: "Definitions" }
    ]
  },
  {
    id: "rules-incorp",
    title: "Companies (Incorporation) Rules, 2014",
    description: "Procedures and forms for the incorporation of a company, conversion of companies, and registered office.",
    category: "Incorporation",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "INC-9", purpose: "Application for reservation of name" },
      { formNo: "INC-32 (SPICe)", purpose: "Simplified Proforma for Incorporating Company Electronically" },
      { formNo: "INC-22", purpose: "Notice of situation or change of situation of registered office" }
    ],
    popularRules: [
      { ruleNo: "8", title: "Names which resemble too nearly with name of existing company" },
      { ruleNo: "25", title: "Verification of registered office" }
    ]
  },
  {
    id: "rules-prospectus",
    title: "Companies (Prospectus and Allotment of Securities) Rules, 2014",
    description: "Regulations regarding public offer, private placement, and allotment of securities.",
    category: "Share Capital",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "PAS-3", purpose: "Return of allotment" },
      { formNo: "PAS-4", purpose: "Private Placement Offer Letter" }
    ],
    popularRules: [
      { ruleNo: "14", title: "Private Placement" }
    ]
  },
  {
    id: "rules-sharecap",
    title: "Companies (Share Capital and Debentures) Rules, 2014",
    description: "Rules regarding the issue of equity shares, preference shares, sweat equity, bonus shares, and debentures.",
    category: "Share Capital",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "SH-7", purpose: "Notice to Registrar of any alteration of share capital" },
      { formNo: "SH-8", purpose: "Notice to Registrar of alteration of share capital" }
    ],
    popularRules: [
      { ruleNo: "4", title: "Equity shares with differential rights" },
      { ruleNo: "8", title: "Issue of sweat equity shares" },
      { ruleNo: "18", title: "Debentures" }
    ]
  },
  {
    id: "rules-deposits",
    title: "Companies (Acceptance of Deposits) Rules, 2014",
    description: "Conditions and procedures for accepting deposits from members and the public.",
    category: "Deposits",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "DPT-3", purpose: "Return of deposits" }
    ],
    popularRules: [
      { ruleNo: "3", title: "Terms and conditions of acceptance of deposits by companies" }
    ]
  },
  {
    id: "rules-charges",
    title: "Companies (Registration of Charges) Rules, 2014",
    description: "Filing particulars of creation, modification, and satisfaction of charges.",
    category: "Charges",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "CHG-1", purpose: "Application for registration of creation, modification of charge" },
      { formNo: "CHG-4", purpose: "Particulars for satisfaction of charge thereof" }
    ],
    popularRules: [
      { ruleNo: "3", title: "Registration of creation or modification of charge" },
      { ruleNo: "8", title: "Satisfaction of charge" }
    ]
  },
  {
    id: "rules-mgmt",
    title: "Companies (Management and Administration) Rules, 2014",
    description: "Maintenance of registers, filing of annual returns, general meetings, and e-voting.",
    category: "Meetings",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "MGT-7", purpose: "Form for filing annual return by a company" },
      { formNo: "MGT-14", purpose: "Filing of Resolutions and agreements" }
    ],
    popularRules: [
      { ruleNo: "11", title: "Annual Return" },
      { ruleNo: "20", title: "Voting through electronic means" }
    ]
  },
  {
    id: "rules-dividend",
    title: "Companies (Declaration and Payment of Dividend) Rules, 2014",
    description: "Rules for declaration of dividend out of reserves and transfer of unpaid dividend to IEPF.",
    category: "Accounts",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    popularRules: [
      { ruleNo: "3", title: "Declaration of dividend out of reserves" }
    ]
  },
  {
    id: "rules-accounts",
    title: "Companies (Accounts) Rules, 2014",
    description: "Preparation of financial statements, Board's Report, and internal audit requirements.",
    category: "Accounts",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "AOC-4", purpose: "Form for filing financial statement and other documents" }
    ],
    popularRules: [
      { ruleNo: "8", title: "Matters to be included in Board's report" },
      { ruleNo: "13", title: "Companies required to appoint internal auditor" }
    ]
  },
  {
    id: "rules-audit",
    title: "Companies (Audit and Auditors) Rules, 2014",
    description: "Appointment, resignation, rotation, and remuneration of statutory auditors.",
    category: "Audit",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "ADT-1", purpose: "Notice of appointment of auditor by the company" },
      { formNo: "ADT-3", purpose: "Notice of Resignation by the Auditor" }
    ],
    popularRules: [
      { ruleNo: "3", title: "Manner and procedure of selection and appointment of auditors" },
      { ruleNo: "5", title: "Class of Companies for Rotation of auditors" }
    ]
  },
  {
    id: "rules-directors",
    title: "Companies (Appointment and Qualification of Directors) Rules, 2014",
    description: "Director identification number (DIN), independent directors, and disqualifications.",
    category: "Directors",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "DIR-3", purpose: "Application for allotment of DIN" },
      { formNo: "DIR-12", purpose: "Particulars of appointment of directors and the key managerial personnel" }
    ],
    popularRules: [
      { ruleNo: "4", title: "Number of Independent Directors" },
      { ruleNo: "9", title: "Application for allotment of Director Identification Number" }
    ]
  },
  {
    id: "rules-meetings",
    title: "Companies (Meetings of Board and its Powers) Rules, 2014",
    description: "Notices, quorum, video conferencing meetings, and related party transactions.",
    category: "Meetings",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    popularRules: [
      { ruleNo: "3", title: "Meetings of Board through video conferencing" },
      { ruleNo: "15", title: "Contract or arrangement with a related party" }
    ]
  },
  {
    id: "rules-managerial",
    title: "Companies (Appointment and Remuneration of Managerial Personnel) Rules, 2014",
    description: "Appointment of Key Managerial Personnel (KMP) and secretarial audit requirements.",
    category: "Directors",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "MR-1", purpose: "Return of appointment of MD/WTD/Manager" }
    ],
    popularRules: [
      { ruleNo: "8", title: "Appointment of Key Managerial Personnel" },
      { ruleNo: "9", title: "Secretarial Audit Report" }
    ]
  },
  {
    id: "rules-investigation",
    title: "Companies (Inspection, Investigation and Inquiry) Rules, 2014",
    description: "Rules regarding inspection of documents and investigations by SFIO.",
    category: "General",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    popularRules: [
      { ruleNo: "4", title: "Inspection of books and papers" }
    ]
  },
  {
    id: "rules-reg-fees",
    title: "Companies (Registration Offices and Fees) Rules, 2014",
    description: "Schedules for fees for filing documents with the Registrar of Companies.",
    category: "ROC / Filing",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "GNL-1", purpose: "Form for filing document with Registrar" }
    ],
    popularRules: [
      { ruleNo: "12", title: "Fees for filings" }
    ]
  },
  {
    id: "rules-foreign",
    title: "Companies (Registration of Foreign Companies) Rules, 2014",
    description: "Documents, accounts, and filings for companies incorporated outside India.",
    category: "Foreign Companies",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "FC-1", purpose: "Information to be filed by foreign company" }
    ],
    popularRules: [
      { ruleNo: "3", title: "Registration of foreign company" }
    ]
  },
  {
    id: "rules-csr",
    title: "Companies (Corporate Social Responsibility Policy) Rules, 2014",
    description: "Guidelines for CSR committees, policies, and eligible activities.",
    category: "CSR",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "CSR-1", purpose: "Registration of Entities for undertaking CSR Activities" }
    ],
    popularRules: [
      { ruleNo: "4", title: "CSR Activities" },
      { ruleNo: "5", title: "CSR Committees" }
    ]
  },
  {
    id: "rules-nidhi",
    title: "Nidhi Rules, 2014",
    description: "Rules governing the incorporation and operations of Nidhi companies.",
    category: "General",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "NDH-1", purpose: "Return of Statutory Compliances" }
    ]
  },
  {
    id: "rules-misc",
    title: "Companies (Miscellaneous) Rules, 2014",
    description: "Rules governing dormant companies, removal of names, and NCLT transition.",
    category: "General",
    officialSourceUrl: "https://www.mca.gov.in/MinistryV2/companylawrules.html",
    forms: [
      { formNo: "MSC-1", purpose: "Application to ROC for obtaining the status of dormant company" }
    ],
    popularRules: [
      { ruleNo: "3", title: "Application for obtaining status of dormant company" }
    ]
  }
];

export const relatedActs = [
  { title: "Companies Act, 2013", path: "/knowledge-base/companies-act" },
  { title: "Company Secretaries Act", path: "/knowledge-base/company-secretaries-act" },
  { title: "Limited Liability Partnership Act", path: "/knowledge-base/llp-act" },
  { title: "Chartered Accountants Act", path: "/knowledge-base/chartered-accountants-act" },
];
