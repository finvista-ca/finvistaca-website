export interface IncomeTaxCircular {
  id: string;
  circularNumber: string;
  title: string;
  date: string;
  year: number;
  category: string;
  applicableAct?: 'Income-tax Act, 1961' | 'Income-tax Act, 2025' | 'General / Other';
  sections?: string[];
  summary: string;
  source: string;
  sourceUrl: string;
  status?: 'Active' | 'Superseded' | 'Withdrawn' | 'Amended' | 'Historical';
}

export const incomeTaxCircularsData: IncomeTaxCircular[] = [
  {
    id: "circ-17-2024",
    circularNumber: "17/2024",
    title: "Condonation of delay under clause (b) of sub-section (2) of section 119 of the Income-tax Act, 1961 for returns of income claiming deduction u/s 80P of the Act for various assessment years.",
    date: "18/11/2024",
    year: 2024,
    category: "Compliance",
    applicableAct: "Income-tax Act, 1961",
    sections: ["119(2)(b)", "80P"],
    summary: "Circular regarding the condonation of delay in filing Form No. 10-IC or Form No. 10-ID for Assessment Years 2020-21, 2021-22, and 2022-23.",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-17-2024.pdf",
    status: "Active"
  },
  {
    id: "circ-16-2024",
    circularNumber: "16/2024",
    title: "Condonation of delay under section 119(2)(b) of the Income-tax Act, 1961 in filing of Form No. 9A/10/10B/10BB for Assessment Year 2018-19 and subsequent assessment years.",
    date: "18/11/2024",
    year: 2024,
    category: "Charitable / Religious Institutions",
    applicableAct: "Income-tax Act, 1961",
    sections: ["119(2)(b)"],
    summary: "Condonation of delay under section 119(2)(b) in filing Form No. 9A/10/10B/10BB for A.Y. 2018-19 and subsequent years.",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-16-2024.pdf",
    status: "Active"
  },
  {
    id: "circ-14-2024",
    circularNumber: "14/2024",
    title: "Condonation of delay under clause (b) of sub-section (2) of section 119 of the Income-tax Act, 1961 for returns of income claiming deduction u/s 80P of the Act for Assessment Year 2023-24.",
    date: "30/10/2024",
    year: 2024,
    category: "Compliance",
    applicableAct: "Income-tax Act, 1961",
    sections: ["119(2)(b)", "80P"],
    summary: "Condonation of delay under section 119(2)(b) for returns claiming deduction u/s 80P for A.Y. 2023-24.",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-14-2024.pdf",
    status: "Active"
  },
  {
    id: "circ-11-2024",
    circularNumber: "11/2024",
    title: "Order under section 119(2)(b) of the Income-tax Act, 1961 authorizing the Income-tax authorities to admit application or claim for refund and carry forward of loss.",
    date: "01/10/2024",
    year: 2024,
    category: "Income Tax Returns",
    applicableAct: "Income-tax Act, 1961",
    sections: ["119(2)(b)"],
    summary: "Order authorizing Income-tax authorities to admit application or claim for refund and carry forward of loss under section 119(2)(b).",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-11-2024.pdf",
    status: "Active"
  },
  {
    id: "circ-5-2024",
    circularNumber: "5/2024",
    title: "Circular under section 268A of the Income-tax Act, 1961 regarding filing of appeals by the Department.",
    date: "15/03/2024",
    year: 2024,
    category: "Appeals & Litigation",
    applicableAct: "Income-tax Act, 1961",
    sections: ["268A"],
    summary: "Circular regarding the monetary limits for filing of appeals by the Department before Income Tax Appellate Tribunal, High Courts and SLPs/appeals before Supreme Court to reduce litigation.",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-5-2024.pdf",
    status: "Active"
  },
  {
    id: "circ-4-2024",
    circularNumber: "4/2024",
    title: "Ex-post facto extension of due date for filing Form No. 26QE which was required to be filed during the period 01.07.2022 to 28.02.2023.",
    date: "07/03/2024",
    year: 2024,
    category: "TDS / TCS",
    applicableAct: "Income-tax Act, 1961",
    summary: "Ex-post facto extension of the due date for filing Form No. 26QE (TDS on VDA) for F.Y. 2022-23.",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-4-2024.pdf",
    status: "Active"
  },
  {
    id: "circ-3-2024",
    circularNumber: "3/2024",
    title: "Circular under section 119 of the Income-tax Act, 1961.",
    date: "06/03/2024",
    year: 2024,
    category: "General / Other",
    applicableAct: "Income-tax Act, 1961",
    sections: ["119"],
    summary: "Official circular providing administrative instructions under section 119 of the Income-tax Act, 1961.",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-3-2024.pdf",
    status: "Active"
  },
  {
    id: "circ-2-2024",
    circularNumber: "2/2024",
    title: "Order under section 119 of the Income-tax Act, 1961.",
    date: "05/03/2024",
    year: 2024,
    category: "General / Other",
    applicableAct: "Income-tax Act, 1961",
    sections: ["119"],
    summary: "Official order and directions issued under section 119 of the Income-tax Act, 1961.",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-2-2024.pdf",
    status: "Active"
  },
  {
    id: "circ-1-2024",
    circularNumber: "1/2024",
    title: "Explanatory Notes to the Provisions of the Finance Act, 2023.",
    date: "23/01/2024",
    year: 2024,
    category: "General / Other",
    applicableAct: "Income-tax Act, 1961",
    summary: "Circular explaining the substance of the provisions of the Finance Act, 2023 relating to direct taxes.",
    source: "CBDT",
    sourceUrl: "https://incometaxindia.gov.in/communications/circular/circular-1-2024.pdf",
    status: "Active"
  }
];

export const relatedActs = [
  { title: "Income Tax Act", path: "/knowledge-base/income-tax-act" },
  { title: "Income-tax Rules", path: "/knowledge-base/income-tax-rules" },
  { title: "Income Tax Notifications", path: "/knowledge-base/income-tax-notifications" },
  { title: "Income Tax Forms", path: "/knowledge-base/income-tax-forms" },
  { title: "Income Tax Calculators", path: "/calculator/income-tax" },
  { title: "TDS Rates", path: "/knowledge-base/rates-of-tds" },
  { title: "Cost Inflation Index", path: "/knowledge-base/cost-inflation-index" },
];
