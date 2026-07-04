import type { ServiceColumn } from './servicesData';

const registrationKeywords = ['registration', 'register', 'incorporation', 'setup'];
const ngoKeywords = ['ngo', 'trust', 'society', 'csr', 'darpan', 'non-profit'];
const taxKeywords = ['tax', 'taxation', 'international', 'nri', 'expatriate', 'clearance'];
const accountingKeywords = ['accounting', 'book keeping', 'bookkeeping', 'book', 'zoho', 'xero', 'quickbooks', 'quick books'];
const payrollKeywords = ['payroll', 'salary', 'hr'];

export const otherServicesData: ServiceColumn[] = [
  {
    categories: [
      {
        title: 'PERMITS AND LICENCES',
        items: [
          { name: 'FSSAI Registration', slug: 'fssai', keywords: ['fssai', 'food', 'license', ...registrationKeywords] },
          { name: 'Import & Export Code', slug: 'import-export-code', keywords: ['iec', 'import', 'export', 'code', 'license'] },
          { name: 'ISO Certification', slug: 'iso-certification', keywords: ['iso', 'certification', 'quality', 'standard'] },
          { name: 'RERA Registration', slug: 'rera-registration', keywords: ['rera', 'real estate', ...registrationKeywords] },
          { name: 'MSME Udyam Registration', slug: 'msme-udyam-registration', keywords: ['msme', 'udyam', 'small business', ...registrationKeywords] },
          { name: 'Startup India Registration', slug: 'startup-india-registration', keywords: ['startup', 'india', 'dpiit', ...registrationKeywords] },
          { name: 'Shop & Establishment Registration', slug: 'shop-act-registration', keywords: ['shop', 'establishment', 'act', 'gumasta', ...registrationKeywords] },
          { name: 'ESI & PF Registration', slug: 'esi-pf-registration', keywords: ['esi', 'pf', 'epfo', 'esic', 'provident fund', ...registrationKeywords] },
          { name: 'NGO Darpan Registration', slug: 'ngo-darpan', keywords: [...ngoKeywords, ...registrationKeywords] },
          { name: 'Trust & Society Registration', slug: 'trust-society-registration', keywords: [...ngoKeywords, ...registrationKeywords] },
          { name: 'NGO Registration', slug: 'ngo-registration', keywords: [...ngoKeywords, ...registrationKeywords] },
          { name: 'CSR Registration for NGOs', slug: 'csr-registration-ngos', keywords: [...ngoKeywords, ...registrationKeywords] }
        ]
      }
    ]
  },
  {
    categories: [
      {
        title: 'INTERNATIONAL TAXATION',
        items: [
          { name: 'International Taxation', slug: 'international-taxation', keywords: taxKeywords },
          { name: 'NRI Taxation Services', slug: 'nri-taxation-services', keywords: ['nri', 'non resident', ...taxKeywords] },
          { name: 'Setup Business in India', slug: 'setup-business-in-india', keywords: ['setup', 'india', 'foreign', 'fdi', 'business'] },
          { name: 'Tax Clearance Certificate', slug: 'tax-clearance-certificate', keywords: ['clearance', 'certificate', ...taxKeywords] },
          { name: 'Taxation of Expatriate Employees', slug: 'taxation-expatriate-employees', keywords: ['expat', 'expatriate', 'employee', ...taxKeywords] }
        ]
      }
    ]
  },
  {
    categories: [
      {
        title: 'GLOBAL TAXATION & BOOK KEEPING',
        items: [
          { name: 'Outsourcing Accounting & Book Keeping', slug: 'outsourcing-accounting-book-keeping', keywords: ['outsourcing', 'outside india', ...accountingKeywords] },
          { name: 'Payroll Management', slug: 'payroll-management', keywords: payrollKeywords },
          { name: 'Online Accounting', slug: 'online-accounting', keywords: ['online', ...accountingKeywords] },
          { name: 'Zoho Accounting Services', slug: 'zoho', keywords: ['zoho', ...accountingKeywords] },
          { name: 'Xero Accounting Services', slug: 'xero', keywords: ['xero', ...accountingKeywords] },
          { name: 'QuickBooks Accounting Services', slug: 'quick-books', keywords: ['quickbooks', 'quick books', ...accountingKeywords] }
        ]
      }
    ]
  }
];
