import type { ServiceColumn } from './servicesData';

const coreGstKeywords = ['gst', 'goods and services tax', 'tax'];

export const gstData: ServiceColumn[] = [
  {
    categories: [
      {
        title: 'ACTS & RULES',
        items: [
          { name: 'GST Acts', slug: 'gst-acts', keywords: [...coreGstKeywords, 'act', 'law', 'section', 'legal'] },
          { name: 'GST Rules', slug: 'gst-rules', keywords: [...coreGstKeywords, 'rule', 'rules', 'regulation'] }
        ]
      },
      {
        title: 'UPDATES',
        items: [
          { name: 'Circulars', slug: 'gst-circulars', keywords: [...coreGstKeywords, 'circular', 'update', 'clarification'] },
          { name: 'Notifications', slug: 'gst-notifications', keywords: [...coreGstKeywords, 'notification', 'update'] },
          { name: 'Orders / Instructions', slug: 'gst-instructions', keywords: [...coreGstKeywords, 'order', 'instruction', 'direction'] }
        ]
      },
      {
        title: 'RESOURCES',
        items: [
          { name: 'Forms', slug: 'gst-forms', keywords: [...coreGstKeywords, 'form', 'format', 'return', 'registration', 'gstr'] },
          { name: 'SAC Codes', slug: 'gst-sac-codes', keywords: [...coreGstKeywords, 'sac', 'code', 'services accounting code', 'rate'] },
          { name: 'HSN Codes', slug: 'gst-hsn-codes', keywords: [...coreGstKeywords, 'hsn', 'code', 'harmonized system of nomenclature', 'rate', 'goods'] }
        ]
      }
    ]
  }
];
