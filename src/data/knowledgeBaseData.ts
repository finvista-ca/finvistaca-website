import type { ServiceColumn } from './servicesData';

const taxKeywords = ['tax', 'income tax', 'tds', 'section', 'returns', 'assessment'];
const companyKeywords = ['company', 'companies', 'mca', 'roc', 'incorporation', 'section'];
const gstKeywords = ['gst', 'goods and services tax', 'section', 'returns'];
const actKeywords = ['act', 'law', 'section', 'legal', 'code'];
const ruleKeywords = ['rule', 'rules', 'regulation'];
const formKeywords = ['form', 'format', 'application'];
const tdsKeywords = ['tds', 'tax deducted at source', 'deduction', 'rates', 'section'];

export const knowledgeBaseData: ServiceColumn[] = [
  {
    categories: [
      {
        title: 'TOOLS',
        items: [
          { name: 'Rates of Income Tax', slug: 'rates-of-income-tax', keywords: ['rate', ...taxKeywords] },
          { name: 'TDS Rates for N.R.I u/s 195', slug: 'tds-rates-for-nri', keywords: ['nri', ...tdsKeywords] },
          { name: 'Rates of TDS', slug: 'rates-of-tds', keywords: tdsKeywords },
          { name: 'Rates of NSC Interest', slug: 'rates-of-nsc-interest', keywords: ['nsc', 'interest', 'rate'] },
          { name: 'Rates of Depreciation Under Income Tax Act', slug: 'rates-of-depreciation-income-tax', keywords: ['depreciation', 'rate', ...taxKeywords] },
          { name: 'Rates of Depreciation Under Company Act', slug: 'rates-of-depreciation-company-act', keywords: ['depreciation', 'rate', ...companyKeywords] },
          { name: 'Cost Inflation Index', slug: 'cost-inflation-index', keywords: ['cii', 'index', 'inflation', 'capital gain', ...taxKeywords] },
          { name: 'ROC Fee Structure', slug: 'roc-fee-structure', keywords: ['roc', 'fee', 'structure', 'mca', ...companyKeywords] },
          { name: 'MICR Codes', slug: 'micr-codes', externalUrl: 'https://www.rbi.org.in/', keywords: ['micr', 'code', 'bank'] },
          { name: 'IFSC Codes', slug: 'ifsc-codes', externalUrl: 'https://www.rbi.org.in/Scripts/IFSCMICRDetails.aspx', keywords: ['ifsc', 'code', 'bank', 'neft', 'rtgs'] }
        ]
      }
    ]
  },
  {
    categories: [
      {
        title: 'IMPORTANT LINKS',
        items: [
          { name: 'ITATonline.org', slug: 'itat-online', externalUrl: 'https://itatonline.org/', keywords: ['itat', 'tribunal', 'online', ...taxKeywords] },
          { name: 'PAN', slug: 'pan', externalUrl: 'https://www.protean-tinpan.com/services/pan/pan-index.html', keywords: ['pan', 'permanent account number', 'nsdl', ...taxKeywords] },
          { name: 'TAN', slug: 'tan', externalUrl: 'https://www.protean-tinpan.com/services/tan/tan-index.html', keywords: ['tan', 'tax deduction account number', ...tdsKeywords] },
          { name: 'E-Payment Online', slug: 'e-payment-online', externalUrl: 'https://www.incometax.gov.in/iec/foportal/', keywords: ['epayment', 'online', 'challan', 'tax payment'] },
          { name: 'Income Tax', slug: 'income-tax-link', externalUrl: 'https://www.incometax.gov.in/', keywords: ['portal', 'efiling', ...taxKeywords] },
          { name: 'CBIC', slug: 'cbic', externalUrl: 'https://www.cbic.gov.in/', keywords: ['cbic', 'customs', 'indirect', ...gstKeywords] },
          { name: 'PF & ESI', slug: 'pf-esi', externalUrl: 'https://www.epfindia.gov.in/', keywords: ['pf', 'esi', 'epfo', 'provident fund'] },
          { name: 'Excise and Service Tax', slug: 'excise-service-tax', externalUrl: 'https://www.cbic.gov.in/', keywords: ['excise', 'service tax', 'indirect tax'] },
          { name: 'MCA', slug: 'mca', externalUrl: 'https://www.mca.gov.in/', keywords: ['mca', 'ministry of corporate affairs', 'portal', ...companyKeywords] },
          { name: 'CA/CS', slug: 'ca-cs', externalUrl: 'https://www.icai.org/', keywords: ['ca', 'cs', 'icai', 'icsi', 'institute'] },
          { name: 'Supreme Court', slug: 'supreme-court', externalUrl: 'https://www.sci.gov.in/', keywords: ['supreme court', 'judgement', 'law'] },
          { name: 'More Link', slug: 'more-link', externalUrl: 'https://www.india.gov.in/', keywords: ['link', 'more'] }
        ]
      }
    ]
  },
  {
    categories: [
      {
        title: 'ACTS',
        items: [
          { name: 'Income Tax Act', slug: 'income-tax-act', keywords: [...taxKeywords, ...actKeywords] },
          { name: 'Wealth Tax Act', slug: 'wealth-tax-act', keywords: ['wealth', ...taxKeywords, ...actKeywords] },
          { name: 'Gift Tax Act', slug: 'gift-tax-act', keywords: ['gift', ...taxKeywords, ...actKeywords] },
          { name: 'Interest Tax Act', slug: 'interest-tax-act', keywords: ['interest', ...taxKeywords, ...actKeywords] },
          { name: 'Expenditure Tax Act', slug: 'expenditure-tax-act', keywords: ['expenditure', ...taxKeywords, ...actKeywords] },
          { name: 'Companies Act', slug: 'companies-act', keywords: [...companyKeywords, ...actKeywords] },
          { name: 'Companies ( Donation to National ) Fund Act', slug: 'companies-donation-fund-act', externalUrl: 'https://www.mca.gov.in/', keywords: ['donation', ...companyKeywords, ...actKeywords] },
          { name: 'Limited Liability Partnership Act', slug: 'llp-act', keywords: ['llp', 'partnership', ...actKeywords] },
          { name: 'Partnership Act', slug: 'partnership-act', keywords: ['partnership', 'firm', ...actKeywords] },
          { name: 'Societies Registration Act', slug: 'societies-registration-act', keywords: ['society', 'ngo', ...actKeywords] },
          { name: 'Monopolies and Restrictive Trade Practices Act', slug: 'monopolies-act', keywords: ['mrtp', 'monopoly', ...actKeywords] },
          { name: 'Competition Act', slug: 'competition-act', keywords: ['competition', 'cci', ...actKeywords] },
          { name: 'Chartered Accountants Act', slug: 'chartered-accountants-act', externalUrl: 'https://www.icai.org/', keywords: ['ca', 'icai', ...actKeywords] },
          { name: 'Company Secretaries Act', slug: 'company-secretaries-act', externalUrl: 'https://www.icsi.edu/', keywords: ['cs', 'icsi', ...actKeywords] },
          { name: 'Cost And Works Accountants Act', slug: 'cost-works-accountants-act', keywords: ['cma', 'icwai', ...actKeywords] },
          { name: 'Insolvency And Bankruptcy Code', slug: 'insolvency-bankruptcy-code', keywords: ['ibc', 'nclt', 'insolvency', 'bankruptcy', ...companyKeywords, ...actKeywords] }
        ]
      }
    ]
  },
  {
    categories: [
      {
        title: 'RULES',
        items: [
          { name: 'Income Tax Rules', slug: 'income-tax-rules', keywords: [...taxKeywords, ...ruleKeywords] },
          { name: 'Company Law Rules', slug: 'company-law-rules', keywords: [...companyKeywords, ...ruleKeywords] }
        ]
      },
      {
        title: 'CIRCULARS',
        items: [
          { name: 'Income Tax', slug: 'income-tax-circulars', keywords: ['circular', ...taxKeywords] },
          { name: 'Company Law', slug: 'company-law-circulars', keywords: ['circular', ...companyKeywords] }
        ]
      },
      {
        title: 'NOTIFICATION',
        items: [
          { name: 'Income Tax', slug: 'income-tax-notifications', keywords: ['notification', ...taxKeywords] },
          { name: 'Company Law', slug: 'company-law-notifications', keywords: ['notification', ...companyKeywords] }
        ]
      },
      {
        title: 'FORMS',
        items: [
          { name: 'Income Tax Returns Forms', slug: 'income-tax-returns-forms', keywords: ['itr', 'return', ...taxKeywords, ...formKeywords] },
          { name: 'Income Tax Forms', slug: 'income-tax-forms', keywords: [...taxKeywords, ...formKeywords] },
          { name: 'Wealth Tax Returns', slug: 'wealth-tax-returns', keywords: ['wealth', 'return', ...taxKeywords, ...formKeywords] },
          { name: 'Income Tax Challans', slug: 'income-tax-challans', keywords: ['challan', 'payment', '280', '281', ...taxKeywords, ...formKeywords] },
          { name: 'Income Tax Other Forms', slug: 'income-tax-other-forms', keywords: ['other', ...taxKeywords, ...formKeywords] },
          { name: 'ROC Forms', slug: 'roc-forms', keywords: ['roc', 'mca', ...companyKeywords, ...formKeywords] },
          { name: 'Limited Liability Partnership (LLP)', slug: 'llp-forms', keywords: ['llp', ...formKeywords] }
        ]
      }
    ]
  }
];
