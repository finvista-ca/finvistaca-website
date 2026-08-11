export interface IncomeTaxNotification {
  id: string;
  notificationNumber: string;
  title: string;
  date: string;
  year: number;
  category: string;
  applicableAct: 'Income-tax Act, 1961' | 'Income-tax Act, 2025' | 'Income-tax Rules, 1962' | 'Income-tax Rules, 2026' | 'Other / General';
  effectiveDate?: string;
  sections?: string[];
  summary: string;
  source: string;
  sourceUrl: string;
  status?: 'Active' | 'Superseded' | 'Withdrawn' | 'Amended' | 'Historical';
}

export const incomeTaxNotificationsData: IncomeTaxNotification[] = [
  {
    id: "notif-112-2024",
    notificationNumber: "112/2024",
    title: "Income-tax (Eighth Amendment) Rules, 2024",
    date: "15/10/2024",
    year: 2024,
    category: "Income Tax",
    applicableAct: "Income-tax Rules, 1962",
    summary: "Amendments to the Income-tax Rules regarding the computation of capital gains and related procedures.",
    source: "CBDT / Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/communications/notification/notification-112-2024.pdf",
    status: "Active"
  },
  {
    id: "notif-48-2024",
    notificationNumber: "48/2024",
    title: "Income-tax (Sixth Amendment) Rules, 2024",
    date: "05/06/2024",
    year: 2024,
    category: "Income Tax",
    applicableAct: "Income-tax Rules, 1962",
    summary: "Introduced the sixth amendment to the Income Tax rules for the year 2024.",
    source: "CBDT / Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/communications/notification/notification-48-2024.pdf",
    status: "Active"
  },
  {
    id: "notif-19-2024",
    notificationNumber: "19/2024",
    title: "Income-tax (Amendment) Rules, 2024",
    date: "01/03/2024",
    year: 2024,
    category: "Income Tax",
    applicableAct: "Income-tax Rules, 1962",
    summary: "General amendments introduced early in the year to update procedural requirements.",
    source: "CBDT / Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/communications/notification/notification-19-2024.pdf",
    status: "Active"
  },
  {
    id: "notif-4-2024",
    notificationNumber: "04/2024",
    title: "Procedure for making declarations and furnishing undertakings in Form-1 under Rule 4 of the Direct Tax Vivad Se Vishwas Rules, 2024",
    date: "26/10/2024",
    year: 2024,
    category: "Tax Administration",
    applicableAct: "Other / General",
    sections: ["Vivad Se Vishwas"],
    summary: "Prescribes the procedure, formats, and standards for making declarations and undertakings under the Direct Tax Vivad Se Vishwas Rules, 2024.",
    source: "CBDT / Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/communications/notification/notification-4-2024.pdf",
    status: "Active"
  },
  {
    id: "notif-1-2024",
    notificationNumber: "01/2024",
    title: "Specifies forms, returns, statements, reports, orders, by whatever name called, prescribed in Appendix-II",
    date: "23/02/2024",
    year: 2024,
    category: "Compliance",
    applicableAct: "Income-tax Rules, 1962",
    sections: ["Rule 131"],
    summary: "Notification specifying various forms and reports to be furnished electronically under Rule 131 of the Income-tax Rules, 1962.",
    source: "CBDT / Income Tax Department",
    sourceUrl: "https://incometaxindia.gov.in/communications/notification/notification-1-2024.pdf",
    status: "Active"
  }
];

export const relatedActs = [
  { title: "Income Tax Act", path: "/knowledge-base/income-tax-act" },
  { title: "Income-tax Rules", path: "/knowledge-base/income-tax-rules" },
  { title: "Income Tax Circulars", path: "/knowledge-base/income-tax-circulars" },
  { title: "Income Tax Forms", path: "/knowledge-base/income-tax-forms" },
  { title: "Income Tax Calculators", path: "/calculators/income-tax" },
  { title: "TDS Rates", path: "/knowledge-base/rates-of-tds" },
  { title: "Cost Inflation Index", path: "/knowledge-base/cost-inflation-index" },
  { title: "Company Law Circulars", path: "/knowledge-base/company-law-circulars" }
];
