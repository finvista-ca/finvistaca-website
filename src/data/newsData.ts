export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  source: string;
  sourceUrl: string;
}

export const newsData: NewsItem[] = [
  {
    id: "news-1",
    title: "Companies Compliance Facilitation Scheme 2026 Extended Until 31 August",
    summary: "The Ministry of Corporate Affairs has extended the Companies Compliance Facilitation Scheme, 2026, giving eligible companies additional time to regularise certain pending statutory filings under the concessional framework. Refer to MCA General Circular No. 03/2026.",
    category: "Corporate Law",
    date: "2026-07-08",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in"
  },
  {
    id: "news-2",
    title: "CBDT Enables Taxpayers to View Foreign Asset Information Through AIS",
    summary: "The Income Tax Department has enabled taxpayers to view foreign asset information received through CRS/FATCA in the Annual Information Statement, strengthening transparency and helping taxpayers review information relevant to their income-tax reporting.",
    category: "Income Tax",
    date: "2026-07-20",
    source: "Income Tax Department / CBDT",
    sourceUrl: "https://incometaxindia.gov.in"
  },
  {
    id: "news-3",
    title: "CBDT Introduces ITR-BN for Search and Requisition Cases",
    summary: "CBDT has notified the Income-tax (Third Amendment) Rules, 2026, introducing Form ITR-BN and related provisions for returns connected with search and requisition cases.",
    category: "Income Tax",
    date: "2026-07-27",
    source: "Income Tax Department / CBDT",
    sourceUrl: "https://incometaxindia.gov.in"
  },
  {
    id: "news-4",
    title: "GSTN Introduces Changes to e-Invoice and e-Way Bill APIs",
    summary: "New API changes covering e-Invoice generation, e-Way Bill integration, validations and voluntary closure of e-Way Bills have been implemented from 1 August 2026. Businesses using ERP, GSP or API-based GST systems should review the updated specifications and ensure system readiness.",
    category: "GST",
    date: "2026-08-01",
    source: "GSTN",
    sourceUrl: "https://www.gst.gov.in"
  },
  {
    id: "news-5",
    title: "GST Completes Nine Years of India's Indirect Tax Transformation",
    summary: "India marked nine years of GST in July 2026, with the tax system continuing to evolve through digitalisation, compliance reforms and technology-driven administration.",
    category: "GST",
    date: "2026-07-01",
    source: "Ministry of Finance / PIB",
    sourceUrl: "https://pib.gov.in"
  },
  {
    id: "news-6",
    title: "Income Tax Department Rolls Out AY 2026-27 Filing Utilities",
    summary: "Income-tax return utilities for AY 2026-27 continue to be rolled out across different taxpayer categories, with online and Excel-based filing facilities being progressively enabled through the e-Filing portal.",
    category: "Income Tax",
    date: "2026-06-15",
    source: "Income Tax Department",
    sourceUrl: "https://www.incometax.gov.in"
  }
];
