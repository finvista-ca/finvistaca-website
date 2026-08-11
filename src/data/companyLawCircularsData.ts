export interface CompanyLawCircular {
  id: string;
  circularNumber: string;
  title: string;
  date: string;
  year: number;
  category: string;
  applicableLaw?: 'Companies Act, 2013' | 'LLP Act, 2008' | 'General / Corporate Law' | string;
  sections?: string[];
  summary: string;
  source: string;
  sourceUrl: string;
  status?: 'Active' | 'Superseded' | 'Withdrawn' | 'Amended' | 'Historical';
}

export const companyLawCircularsData: CompanyLawCircular[] = [
  {
    id: "circ-09-2024",
    circularNumber: "09/2024",
    title: "Clarification on holding of Annual General Meeting (AGM) and Extraordinary General Meeting (EGM) through Video Conference (VC) or Other Audio Visual Means (OAVM) and passing of Ordinary and Special resolutions by the companies under the Companies Act, 2013",
    date: "19/09/2024",
    year: 2024,
    category: "Board & General Meetings",
    applicableLaw: "Companies Act, 2013",
    summary: "Clarifies the procedures for holding AGMs and EGMs through Video Conference (VC) or Other Audio Visual Means (OAVM), extending the allowance up to September 30, 2025.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=q2f3F%252BDm1l0x%252FTf1o5wR6Q%253D%253D&type=open",
    status: "Active"
  },
  {
    id: "circ-04-2024",
    circularNumber: "04/2024",
    title: "Filing of various forms (including BEN-2 and MGT-6) on MCA21 V3 Portal",
    date: "04/07/2024",
    year: 2024,
    category: "ROC / MCA Filings",
    applicableLaw: "Companies Act, 2013",
    summary: "Addresses the timeline for filing of forms (such as BEN-2 and MGT-6) due to the migration from the V2 version to the V3 version on the MCA21 portal between July 4, 2024, and July 14, 2024.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=Xo5F89l1l0x%252FTf1o5wR6Q%253D%253D&type=open",
    status: "Active"
  },
  {
    id: "circ-02-2024",
    circularNumber: "02/2024",
    title: "Deployment and usage of Change Request Form (CRF) on MCA-21",
    date: "19/02/2024",
    year: 2024,
    category: "ROC / MCA Filings",
    applicableLaw: "Companies Act, 2013",
    summary: "Provides guidelines for the deployment and usage of the Change Request Form (CRF) on the MCA21 portal for exceptional circumstances such as master data correction.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=F9d8F%252B1l0x%252FTf1o5wR6Q%253D%253D&type=open",
    status: "Active"
  },
  {
    id: "circ-09-2023",
    circularNumber: "09/2023",
    title: "Clarification on holding of Annual General Meeting (AGM) and EGM through Video Conference (VC) or Other Audio Visual Means (OAVM)",
    date: "25/09/2023",
    year: 2023,
    category: "Board & General Meetings",
    applicableLaw: "Companies Act, 2013",
    summary: "Clarified and extended the timeline for companies to hold Annual General Meetings (AGMs) and Extraordinary General Meetings (EGMs) through Video Conference (VC) or Other Audio-Visual Means (OAVM) up to 2024.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=b5g1F%252BDm1l0x%252FTf1o5wR6Q%253D%253D&type=open",
    status: "Historical"
  },
  {
    id: "circ-05-2023",
    circularNumber: "05/2023",
    title: "Filing of forms GNL-2, MGT-14, PAS-3, SH-8, SH-9, and SH-11 in physical mode due to migration from V2 to V3",
    date: "22/02/2023",
    year: 2023,
    category: "ROC / MCA Filings",
    applicableLaw: "Companies Act, 2013",
    summary: "Permitted companies to file certain forms in physical mode from February 22, 2023, to March 31, 2023, without additional fees, due to portal migration.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=l9m5F%252B1l0x%252FTf1o5wR6Q%253D%253D&type=open",
    status: "Historical"
  },
  {
    id: "circ-04-2023",
    circularNumber: "04/2023",
    title: "Extension of time for filing of 45 company e-Forms, PAS-03 and DIR-3KYC in MCA21 V3 Portal without additional fee",
    date: "21/02/2023",
    year: 2023,
    category: "ROC / MCA Filings",
    applicableLaw: "Companies Act, 2013",
    summary: "Addressed further extensions and fee waivers related to the migration to MCA21 Version 3.0, including extensions for name reservations and resubmissions.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=o9n8F%252B1l0x%252FTf1o5wR6Q%253D%253D&type=open",
    status: "Historical"
  },
  {
    id: "circ-03-2023",
    circularNumber: "03/2023",
    title: "Extension of Time for filing of 45 company e-Forms and PAS-03 in MCA-21 Version 3.0 without additional fee",
    date: "07/02/2023",
    year: 2023,
    category: "ROC / MCA Filings",
    applicableLaw: "Companies Act, 2013",
    summary: "Granted a further 15-day extension for filing 45 e-Forms and Form PAS-03, acknowledging stabilization processes for the new V3 portal.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=u9l3F%252B1l0x%252FTf1o5wR6Q%253D%253D&type=open",
    status: "Historical"
  },
  {
    id: "circ-01-2023",
    circularNumber: "01/2023",
    title: "Release Plan of 45 company e-Forms in MCA 21 Version 3.0 - regarding",
    date: "09/01/2023",
    year: 2023,
    category: "ROC / MCA Filings",
    applicableLaw: "Companies Act, 2013",
    summary: "Provided an additional 15 days, without additional fees, for filing 45 company e-Forms that were unavailable in MCA21 Version-2 due to the transition to Version 3.0.",
    source: "Ministry of Corporate Affairs",
    sourceUrl: "https://www.mca.gov.in/bin/dms/getdocument?mds=p2k1F%252B1l0x%252FTf1o5wR6Q%253D%253D&type=open",
    status: "Historical"
  }
];

export const relatedActs = [
  { title: "Companies Act, 2013", path: "/knowledge-base/companies-act" },
  { title: "Companies Rules, 2014", path: "/knowledge-base/company-law-rules" },
  { title: "LLP Act, 2008", path: "/knowledge-base/llp-act" },
  { title: "Partnership Act, 1932", path: "/knowledge-base/partnership-act" },
  { title: "Competition Act, 2002", path: "/knowledge-base/competition-act" },
  { title: "Insolvency and Bankruptcy Code, 2016", path: "/knowledge-base/insolvency-bankruptcy-code" },
  { title: "Income Tax Circulars", path: "/knowledge-base/income-tax-circulars" },
  { title: "GST Circulars / Updates", path: "/knowledge-base/gst-circulars" },
];
