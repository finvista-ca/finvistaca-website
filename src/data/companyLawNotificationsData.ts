export interface CompanyLawNotification {
  id: string;
  notificationNumber: string;
  title: string;
  date: string;
  year: number;
  category: string;
  applicableLaw: 'Companies Act, 2013' | 'LLP Act, 2008' | 'Companies Rules' | 'General / Corporate Law';
  effectiveDate?: string;
  sections?: string[];
  summary: string;
  source: string;
  sourceUrl: string;
  status?: 'Active' | 'Superseded' | 'Withdrawn' | 'Amended' | 'Historical';
}

export const companyLawNotificationsData: CompanyLawNotification[] = [
  {
    id: "mca-gsr-794e-2024",
    notificationNumber: "G.S.R. 794(E)",
    title: "Companies (Accounts) Second Amendment Rules, 2024",
    date: "31/12/2024",
    year: 2024,
    category: "Accounts & Audit",
    applicableLaw: "Companies Rules",
    summary: "Extended the deadline for filing the Corporate Social Responsibility (CSR) report (Form CSR-2) for the financial year 2023–2024 to March 31, 2025.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=wK6HnB2fL4%2Bf2B9%2F2Yx7rA%3D%3D&type=open",
    status: "Active"
  },
  {
    id: "mca-gsr-583e-2024",
    notificationNumber: "G.S.R. 583(E)",
    title: "Companies (Prospectus and Allotment of Securities) Amendment Rules, 2024",
    date: "20/09/2024",
    year: 2024,
    category: "Share Capital & Securities",
    applicableLaw: "Companies Rules",
    summary: "Introduced amendments regarding the compliance timeline for producer companies under Rule 9B.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=P3%2BCQ13l3%2B2zR2%2B3F3x4gQ%3D%3D&type=open",
    status: "Active"
  },
  {
    id: "mca-gsr-577e-2024",
    notificationNumber: "G.S.R. 577(E)",
    title: "National Financial Reporting Authority (Manner of Appointment and other Terms and Conditions of Service of Chairperson and Members) Second Amendment Rules, 2024",
    date: "18/09/2024",
    year: 2024,
    category: "Corporate Governance",
    applicableLaw: "Companies Rules",
    effectiveDate: "01/01/2024",
    summary: "Provided for a revised consolidated monthly salary for the Chairperson and full-time members of the NFRA.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=Q3%2BCQ13l3%2B2zR2%2B3F3x4gQ%3D%3D&type=open",
    status: "Active"
  },
  {
    id: "mca-gsr-555e-2024",
    notificationNumber: "G.S.R. 555(E)",
    title: "Companies (Compromises, Arrangements and Amalgamations) Amendment Rules, 2024",
    date: "09/09/2024",
    year: 2024,
    category: "Corporate Governance",
    applicableLaw: "Companies Rules",
    effectiveDate: "17/09/2024",
    summary: "Facilitated the merger of certain foreign holding companies with their Indian wholly-owned subsidiaries through a fast-track procedure.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=R3%2BCQ13l3%2B2zR2%2B3F3x4gQ%3D%3D&type=open",
    status: "Active"
  },
  {
    id: "mca-gsr-411e-2024",
    notificationNumber: "G.S.R. 411(E)",
    title: "Companies (Incorporation) Amendment Rules, 2024",
    date: "16/07/2024",
    year: 2024,
    category: "Incorporation",
    applicableLaw: "Companies Rules",
    summary: "Amended the Companies (Incorporation) Rules, 2014, specifically regarding Nidhi company provisions.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=S3%2BCQ13l3%2B2zR2%2B3F3x4gQ%3D%3D&type=open",
    status: "Active"
  }
];

export const relatedActs = [
  { title: "Companies Act, 2013", path: "/knowledge-base/companies-act" },
  { title: "Companies Rules, 2014", path: "/knowledge-base/company-law-rules" },
  { title: "Company Law Circulars", path: "/knowledge-base/company-law-circulars" },
  { title: "LLP Act, 2008", path: "/knowledge-base/llp-act" },
  { title: "Competition Act, 2002", path: "/knowledge-base/competition-act" },
  { title: "Insolvency and Bankruptcy Code, 2016", path: "/knowledge-base/insolvency-bankruptcy-code" },
  { title: "Income Tax Notifications", path: "/knowledge-base/income-tax-notifications" },
  { title: "Income Tax Circulars", path: "/knowledge-base/income-tax-circulars" }
];
