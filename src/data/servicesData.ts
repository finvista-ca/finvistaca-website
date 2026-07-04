export interface ServiceItem {
  name: string;
  slug: string;
  externalUrl?: string;
  keywords?: string[];
  related?: string[];
}

import { otherServicesData } from './otherServicesData';
import { knowledgeBaseData } from './knowledgeBaseData';

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface ServiceColumn {
  categories: ServiceCategory[];
}

const gstKeywords = ['gst', 'returns', 'gstr', 'registration', 'eway', 'e-way', 'lut', 'tax filing'];
const companyKeywords = ['company', 'startup', 'incorporation', 'business setup', 'opc', 'llp', 'private limited', 'public limited'];
const auditKeywords = ['audit', 'verification', 'compliance review', 'financial review', 'forensic'];
const taxKeywords = ['tax', 'income tax', 'tax planning', 'tax advisory', 'corporate tax', 'personal tax'];
const complianceKeywords = ['roc', 'annual filing', 'company compliance', 'llp compliance', 'section 8', 'nbfc'];

export const servicesData: ServiceColumn[] = [
  {
    categories: [
      {
        title: "BUSINESS REGISTRATION",
        items: [
          { name: "Proprietorship", slug: "proprietorship", keywords: companyKeywords, related: ['partnership', 'one-person-company', 'gst-registration'] },
          { name: "Partnership", slug: "partnership", keywords: companyKeywords, related: ['proprietorship', 'limited-liability-partnership', 'gst-registration'] },
          { name: "One Person Company", slug: "one-person-company", keywords: companyKeywords, related: ['private-limited-company', 'proprietorship', 'gst-registration'] },
          { name: "Limited Liability Partnership", slug: "limited-liability-partnership", keywords: companyKeywords, related: ['private-limited-company', 'annual-compliance-of-llp', 'partnership'] },
          { name: "Private Limited Company", slug: "private-limited-company", keywords: companyKeywords, related: ['annual-compliance-for-private-limited-company', 'gst-registration', 'corporate-tax-advisory-compliance', 'statutory-audit'] },
          { name: "Public Limited Company", slug: "public-limited-company", keywords: companyKeywords, related: ['private-limited-company', 'statutory-audit', 'corporate-tax-advisory-compliance'] },
          { name: "Nidhi Company", slug: "nidhi-company", keywords: companyKeywords, related: ['nidhi-company-compliance', 'private-limited-company'] },
          { name: "Producer Company", slug: "producer-company", keywords: companyKeywords, related: ['private-limited-company', 'gst-registration'] },
          { name: "Section 8 Company", slug: "section-8-company", keywords: companyKeywords, related: ['section-8-company-compliance', 'trust-registration', 'society-registration'] },
          { name: "Trust Registration", slug: "trust-registration", keywords: companyKeywords, related: ['society-registration', 'section-8-company'] },
          { name: "Society Registration", slug: "society-registration", keywords: companyKeywords, related: ['trust-registration', 'section-8-company'] },
          { name: "Indian Subsidiary", slug: "indian-subsidiary", keywords: companyKeywords, related: ['private-limited-company', 'international-tax-advisory-compliance'] }
        ]
      }
    ]
  },
  {
    categories: [
      {
        title: "DIRECT TAXATION",
        items: [
          { name: "Corporate Tax Advisory / Compliance", slug: "corporate-tax-advisory-compliance", keywords: taxKeywords, related: ['tax-audit', 'transfer-pricing-study-documentation', 'litigation-representation-assistance'] },
          { name: "International Tax Advisory / Compliance", slug: "international-tax-advisory-compliance", keywords: taxKeywords, related: ['corporate-tax-advisory-compliance', 'transfer-pricing-study-documentation', 'indian-subsidiary'] },
          { name: "Transfer Pricing Study / Documentation", slug: "transfer-pricing-study-documentation", keywords: taxKeywords, related: ['international-tax-advisory-compliance', 'corporate-tax-advisory-compliance'] },
          { name: "Litigation / Representation Assistance", slug: "litigation-representation-assistance", keywords: taxKeywords, related: ['corporate-tax-advisory-compliance', 'personal-tax-advisory'] },
          { name: "Personal Tax Advisory", slug: "personal-tax-advisory", keywords: taxKeywords, related: ['litigation-representation-assistance'] }
        ]
      },
      {
        title: "GOODS & SERVICE TAX",
        items: [
          { name: "GST Advisory and Compliance Service", slug: "gst-advisory-and-compliance-service", keywords: gstKeywords, related: ['gst-returns', 'gst-annual-return', 'gst-audit'] },
          { name: "GST Litigation Services", slug: "gst-litigation-services", keywords: gstKeywords, related: ['gst-advisory-and-compliance-service', 'gst-returns'] },
          { name: "GST Registration", slug: "gst-registration", keywords: gstKeywords, related: ['gst-returns', 'gst-annual-return', 'gst-advisory-and-compliance-service', 'gst-litigation-services', 'lut-in-gst'] },
          { name: "GST Returns", slug: "gst-returns", keywords: gstKeywords, related: ['gst-registration', 'gst-annual-return', 'gst-eway-bill'] },
          { name: "GST Annual Return", slug: "gst-annual-return", keywords: gstKeywords, related: ['gst-returns', 'gst-audit', 'gst-advisory-and-compliance-service'] },
          { name: "GST E-Way Bill", slug: "gst-eway-bill", keywords: gstKeywords, related: ['gst-returns', 'gst-registration'] },
          { name: "LUT in GST", slug: "lut-in-gst", keywords: gstKeywords, related: ['gst-registration', 'gst-returns'] },
          { name: "GST Cancellation", slug: "gst-cancellation", keywords: gstKeywords, related: ['gst-registration', 'gst-returns'] },
          { name: "GST Registration for Foreigners", slug: "gst-registration-for-foreigners", keywords: gstKeywords, related: ['gst-registration', 'international-tax-advisory-compliance'] }
        ]
      }
    ]
  },
  {
    categories: [
      {
        title: "ROC COMPLIANCES",
        items: [
          { name: "Annual Compliance for Private Limited Company", slug: "annual-compliance-for-private-limited-company", keywords: complianceKeywords, related: ['private-limited-company', 'statutory-audit', 'corporate-tax-advisory-compliance'] },
          { name: "Annual Compliance of LLP", slug: "annual-compliance-of-llp", keywords: complianceKeywords, related: ['limited-liability-partnership', 'tax-audit'] },
          { name: "Nidhi Company Compliance", slug: "nidhi-company-compliance", keywords: complianceKeywords, related: ['nidhi-company'] },
          { name: "Section 8 Company Compliance", slug: "section-8-company-compliance", keywords: complianceKeywords, related: ['section-8-company'] },
          { name: "NBFC Compliance", slug: "nbfc-compliance", keywords: complianceKeywords, related: ['private-limited-company', 'statutory-audit'] },
          { name: "Winding Private Limited Company", slug: "winding-private-limited-company", keywords: complianceKeywords, related: ['private-limited-company', 'closure-of-llp'] },
          { name: "Closure of LLP", slug: "closure-of-llp", keywords: complianceKeywords, related: ['limited-liability-partnership', 'winding-private-limited-company'] },
          { name: "Revival of Struck Off Companies", slug: "revival-of-struck-off-companies", keywords: complianceKeywords, related: ['private-limited-company', 'annual-compliance-for-private-limited-company'] },
          { name: "Other Event Based Compliances", slug: "other-event-based-compliances", keywords: complianceKeywords, related: ['annual-compliance-for-private-limited-company'] }
        ]
      }
    ]
  },
  {
    categories: [
      {
        title: "AUDIT & ASSURANCE",
        items: [
          { name: "Statutory Audit", slug: "statutory-audit", keywords: auditKeywords, related: ['tax-audit', 'corporate-tax-advisory-compliance', 'annual-compliance-for-private-limited-company'] },
          { name: "Tax Audit", slug: "tax-audit", keywords: auditKeywords, related: ['statutory-audit', 'gst-audit', 'corporate-tax-advisory-compliance', 'financial-reporting-and-accounting-advisory-services'] },
          { name: "GST Audit", slug: "gst-audit", keywords: auditKeywords, related: ['tax-audit', 'gst-annual-return', 'gst-advisory-and-compliance-service'] }
        ]
      },
      {
        title: "OTHER AUDITS",
        items: [
          { name: "Other Audits", slug: "other-audits", keywords: auditKeywords, related: ['statutory-audit', 'forensic-audit'] },
          { name: "Forensic Audit", slug: "forensic-audit", keywords: auditKeywords, related: ['statutory-audit', 'management-audits'] },
          { name: "Secretarial Audit", slug: "secretarial-audit", keywords: auditKeywords, related: ['statutory-audit', 'annual-compliance-for-private-limited-company'] },
          { name: "Due Diligence", slug: "due-diligence", keywords: auditKeywords, related: ['forensic-audit', 'management-audits'] },
          { name: "Financial Reporting and Accounting Advisory Services", slug: "financial-reporting-and-accounting-advisory-services", keywords: auditKeywords, related: ['statutory-audit', 'tax-audit'] },
          { name: "Management Audits", slug: "management-audits", keywords: auditKeywords, related: ['statutory-audit', 'forensic-audit'] },
          { name: "Certification Services", slug: "certification-services", keywords: auditKeywords, related: ['statutory-audit', 'agreed-upon-procedures'] },
          { name: "Agreed Upon Procedures", slug: "agreed-upon-procedures", keywords: auditKeywords, related: ['certification-services', 'management-audits'] }
        ]
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const allData = [...servicesData, ...otherServicesData, ...knowledgeBaseData];
  for (const column of allData) {
    for (const category of column.categories) {
      const found = category.items.find(item => item.slug === slug);
      if (found) return found;
    }
  }
  return undefined;
}

export function getRelatedServices(slugs: string[] | undefined): ServiceItem[] {
  if (!slugs || slugs.length === 0) return [];
  const allData = [...servicesData, ...otherServicesData, ...knowledgeBaseData];
  const related: ServiceItem[] = [];
  
  for (const slug of slugs) {
    let foundItem: ServiceItem | null = null;
    for (const column of allData) {
      for (const category of column.categories) {
        const found = category.items.find(item => item.slug === slug);
        if (found) {
          foundItem = found as ServiceItem;
          break;
        }
      }
      if (foundItem) break;
    }
    if (foundItem) related.push(foundItem);
  }
  
  return related;
}

export function getAllServices(): ServiceItem[] {
  const allData = [...servicesData, ...otherServicesData, ...knowledgeBaseData];
  const allItems: ServiceItem[] = [];
  for (const column of allData) {
    for (const category of column.categories) {
      allItems.push(...category.items as ServiceItem[]);
    }
  }
  return allItems;
}
