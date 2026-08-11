export interface SACCode {
  id: string;
  serialNumber?: number;
  sacCode: string;
  description: string;
  section?: string;
  division?: string;
  group?: string;
  category?: string;
  gstRate?: string;
  source: string;
  sourceUrl: string;
}

export const gstSacCodesData: SACCode[] = [
  {
    id: "sac-1",
    sacCode: "9954",
    description: "Construction services",
    category: "Construction",
    source: "SAC Code Repository",
    sourceUrl: "https://irkandassociates.com/GstSACCode.aspx"
  },
  {
    id: "sac-2",
    sacCode: "9961",
    description: "Services in wholesale trade",
    category: "Wholesale Trade",
    source: "SAC Code Repository",
    sourceUrl: "https://irkandassociates.com/GstSACCode.aspx"
  },
  {
    id: "sac-3",
    sacCode: "9983",
    description: "Other professional, technical and business services",
    category: "Professional Services",
    source: "SAC Code Repository",
    sourceUrl: "https://irkandassociates.com/GstSACCode.aspx"
  },
  {
    id: "sac-4",
    sacCode: "9982",
    description: "Legal and accounting services",
    category: "Professional Services",
    source: "SAC Code Repository",
    sourceUrl: "https://irkandassociates.com/GstSACCode.aspx"
  }
];

export const relatedKnowledgeBase = [
  { title: "GST Circulars", path: "/knowledge-base/gst-circulars" },
  { title: "GST Notifications", path: "/knowledge-base/gst-notifications" },
  { title: "GST Acts", path: "/knowledge-base/gst-acts" },
  { title: "GST Rules", path: "/knowledge-base/gst-rules" },
  { title: "GST Orders", path: "/knowledge-base/gst-orders" },
  { title: "GST HSN Codes", path: "/knowledge-base/gst-hsn-codes" },
  { title: "GST Forms", path: "/knowledge-base/gst-forms" }
];
