// Shared current news snapshot. Update these items periodically.
// Consumed by the NewsFeed page and the home LatestUpdates section.
export interface NewsItem {
  id: number;
  title: string;
  source: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "GST at 9: India Inc seeks GST 2.0 with faster ITC refunds, AI-led compliance and lower litigation",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/celebrating-nine-years-of-gst-a-call-for-reform-and-innovation-in-indias-tax-landscape/132105350",
    date: "Jul 1, 2026",
    category: "GST",
    featured: true
  },
  {
    id: 2,
    title: "India's top 10 States by GST collections in FY26 — and who lagged behind",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/indias-gst-revenue-breakdown-for-fy26-top-performers-and-laggards-revealed/132093571",
    date: "Jun 30, 2026",
    category: "GST",
    featured: false
  },
  {
    id: 3,
    title: "Govt Extends Customs Duty Exemption on Critical Petrochemical Imports Till July 15, 2026",
    source: "CA Club India",
    url: "https://www.caclubindia.com/news/govt-extends-customs-duty-exemption-on-critical-petrochemical-imports-till-july-15-2026-26628.asp",
    date: "Jun 29, 2026",
    category: "Taxation",
    featured: true
  },
  {
    id: 4,
    title: "Sebi bars 10 entities over alleged fraud at Darjeeling Industries",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/governance-risk-compliance/sebi-bars-10-entities-over-alleged-fraud-at-darjeeling-industries/132105054",
    date: "Jun 28, 2026",
    category: "Compliance",
    featured: false
  },
  {
    id: 5,
    title: "Exclusive: MCA set to notify SA 600, 40 revised audit standards by August",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/mca-to-revise-40-audit-standards-including-sa-600-by-august-2024/132087362",
    date: "Jun 27, 2026",
    category: "Audit",
    featured: false
  },
  {
    id: 6,
    title: "ICAI Strengthens AI Push with Sarvam AI Partnership and New AI Certification Course",
    source: "CA Club India",
    url: "https://www.caclubindia.com/news/icai-strengthens-ai-push-with-sarvam-ai-partnership-and-new-ai-certification-course-26625.asp",
    date: "Jun 26, 2026",
    category: "Technology",
    featured: false
  },
  {
    id: 7,
    title: "AI driving credit risk, may threaten jobs and tax revenues in developed economies: Fitch",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/cfo-tech/ai-driving-credit-risk-may-threaten-jobs-and-tax-revenues-in-developed-economies-fitch/132105030",
    date: "Jun 25, 2026",
    category: "Technology",
    featured: false
  },
  {
    id: 8,
    title: "GSTAT Appeal Filing Deadline Extended Till 31st July 2026",
    source: "CA Club India",
    url: "https://www.caclubindia.com/news/gstat-appeal-filing-deadline-extended-till-31st-july-2026-26626.asp",
    date: "Jun 24, 2026",
    category: "GST",
    featured: false
  },
  {
    id: 9,
    title: "Why Gen Z are planning for life without a state pension",
    source: "BBC News",
    url: "https://www.bbc.co.uk/news/articles/c8e2yp1gg37o",
    date: "Jun 23, 2026",
    category: "Economy",
    featured: false
  }
];
