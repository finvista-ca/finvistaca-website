import fs from 'fs';
import path from 'path';

// This script generates dedicated TSX components for every Knowledge Base, GST, and Calculator page.

const extractedDataPath = path.join(process.cwd(), 'src', 'data', 'extractedResources.ts');
const extractedDataContent = fs.readFileSync(extractedDataPath, 'utf-8');
const startIndex = extractedDataContent.indexOf('{');
const jsonStr = extractedDataContent.slice(startIndex, extractedDataContent.lastIndexOf('}') + 1);
const legacyResources = JSON.parse(jsonStr);

const slugToFileKey = {
  // Acts
  'income-tax-act': 'IncomeTaxAct',
  'wealth-tax-act': 'WealthTaxAct',
  'gift-tax-act': 'GiftTaxAct',
  'interest-tax-act': 'InterestTaxAct',
  'expenditure-tax-act': 'ExpenditureTaxAct',
  'companies-act': 'CompaniesActs',
  'partnership-act': 'PartnershipAct',
  'monopolies-act': 'MonopoliesandRestrictiveTradePracticesAct',
  'insolvency-bankruptcy-code': 'InsolvencyBankruptcyCode',
  
  // Rules
  'income-tax-rules': 'IncomeTaxRules',
  'company-law-rules': 'CompanyLawRules',
  
  // Circulars
  'income-tax-circulars': 'IncomeTaxCirculars',
  'company-law-circulars': 'CompanyLawCirculars',
  
  // Notifications
  'income-tax-notifications': 'Notification',
  'company-law-notifications': 'CompanyLawNotifaction',
  
  // Forms
  'income-tax-returns-forms': 'IncomeTaxReturns',
  'income-tax-forms': 'IncomeTaxForms',
  'wealth-tax-returns': 'WealthTax',
  'income-tax-challans': 'IncomeTaxChallans',
  'income-tax-other-forms': 'IncomeTaxOtherForms',
  'roc-forms': 'RocForms',
  'llp-forms': 'LLpForms',
  
  // Tools & Links (fallback to empty if not found)
  'rates-of-income-tax': 'RatesOfIncomeTax',
  'tds-rates-for-nri': 'TDSRatesForNRI',
  'rates-of-tds': 'RatesOfTDS',
  'rates-of-nsc-interest': 'RatesOfNSCInterest',
  'rates-of-depreciation-income-tax': 'RatesOfDepreciationIncomeTax',
  'rates-of-depreciation-company-act': 'RatesOfDepreciationCompanyAct',
  'cost-inflation-index': 'CostInflationIndex',
  'roc-fee-structure': 'ROCFeeStructure',
  'micr-codes': 'MICRCodes',
  'ifsc-codes': 'IFSCCodes',
  'itat-online': 'ITATOnline',
  'pan': 'PAN',
  'tan': 'TAN',
  'e-payment-online': 'EPaymentOnline',
  'income-tax-link': 'IncomeTaxLink',
  'cbic': 'CBIC',
  'pf-esi': 'PFESI',
  'excise-service-tax': 'ExciseServiceTax',
  'mca': 'MCA',
  'ca-cs': 'CACS',
  'supreme-court': 'SupremeCourt',
  'more-link': 'MoreLink',

  // GST 
  'gst-acts': 'gstacts',
  'gst-rules': 'gstrules',
  'gst-circulars': 'GstCirculars',
  'gst-notifications': 'GstNotifaction',
  'gst-forms': 'GstForms',
  'gst-sac-codes': 'GstSACCode',
  'gst-hsn-codes': 'GstHSNCodeWithRate'
};

const formatTitle = (slug) => {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const componentNameFromSlug = (slug) => {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

const pageMappings = {
  knowledgeBase: {},
  gst: {},
  calculator: {}
};

// Ensure directories exist
const kbDir = path.join(process.cwd(), 'src', 'pages', 'knowledge-base');
const gstDir = path.join(process.cwd(), 'src', 'pages', 'gst');
const calcDir = path.join(process.cwd(), 'src', 'pages', 'calculator');
[kbDir, gstDir, calcDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Generate KB and GST pages
for (const [slug, fileKey] of Object.entries(slugToFileKey)) {
  const isGst = slug.startsWith('gst-');
  const dir = isGst ? gstDir : kbDir;
  let data = legacyResources[fileKey] || legacyResources[slug] || [];
  
  const isTable = Array.isArray(data) && Array.isArray(data[0]);
  const type = isTable ? 'table' : 'links';
  const componentName = componentNameFromSlug(slug);
  
  const content = `import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = ${JSON.stringify(data, null, 2)};

export const ${componentName}: React.FC = () => {
  return (
    <ResourceLayout 
      title="${formatTitle(slug)}"
      description="View and search through ${formatTitle(slug)} documents."
      data={pageData}
      type="${type}"
    />
  );
};
`;
  
  fs.writeFileSync(path.join(dir, `${componentName}.tsx`), content);
  
  if (isGst) {
    pageMappings.gst[slug] = componentName;
  } else {
    pageMappings.knowledgeBase[slug] = componentName;
  }
}

// Generate Calculator pages
const calculatorsList = [
  { id: 'emi', title: 'Equated Monthly Installment (EMI)', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-EMI.html' },
  { id: 'home-loan', title: 'Home Loan Calculator', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-HomeLoan.html' },
  { id: 'auto-loan', title: 'Auto Loan Calculator', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-AutoLoan.html' },
  { id: 'income-tax', title: 'Income Tax Calculator', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-IncomeTaxCalculator.html' },
  { id: 'fbt', title: 'Fringe Benefit Tax (FBT)', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-FBT.html' },
  { id: 'hra', title: 'House Rent Allowance (HRA)', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-HRA.html' },
  { id: 'installments', title: 'Get Number Of Installments', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-GetNoOfInstalment.html' },
  { id: 'kisan-vikas-patra', title: 'Kisan Vikas Patra', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-KisanVikasPatras.html' },
  { id: 'nsc', title: 'National Saving Certificates (NSC)', iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-NSC.html' }
];

for (const calc of calculatorsList) {
  const componentName = componentNameFromSlug(calc.id) + 'Calculator';
  const content = `import React from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

const relatedCalcList = ${JSON.stringify(calculatorsList.filter(c => c.id !== calc.id).slice(0, 3), null, 2)};

export const ${componentName}: React.FC = () => {
  return (
    <div className="calculator-detail-page">
      <CalculatorLayout 
        title="${calc.title}" 
        iframeUrl="${calc.iframeUrl}" 
      />
      
      {/* Related Calculators */}
      <section className="related-calculators" style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center', color: '#0f172a' }}>
            Related Calculators
          </h2>
          <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {relatedCalcList.map(c => (
              <Link to={\`/calculator/\${c.id}\`} key={c.id} className="calc-card glass-card">
                <div className="calc-card-icon"><Calculator size={28} /></div>
                <h3>{c.title}</h3>
                <div className="calc-card-footer">
                  <span>Calculate Now</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
`;
  
  fs.writeFileSync(path.join(calcDir, `${componentName}.tsx`), content);
  pageMappings.calculator[calc.id] = componentName;
}

// Generate mapping file
let mappingContent = `// Auto-generated mapping file\nimport React from 'react';\n\n`;

for (const [slug, component] of Object.entries(pageMappings.knowledgeBase)) {
  mappingContent += `import { ${component} } from './pages/knowledge-base/${component}';\n`;
}
for (const [slug, component] of Object.entries(pageMappings.gst)) {
  mappingContent += `import { ${component} } from './pages/gst/${component}';\n`;
}
for (const [slug, component] of Object.entries(pageMappings.calculator)) {
  mappingContent += `import { ${component} } from './pages/calculator/${component}';\n`;
}

mappingContent += `\nexport const pageMappings: Record<string, Record<string, React.FC>> = {\n`;
mappingContent += `  knowledgeBase: {\n`;
for (const [slug, component] of Object.entries(pageMappings.knowledgeBase)) {
  mappingContent += `    '${slug}': ${component},\n`;
}
mappingContent += `  },\n  gst: {\n`;
for (const [slug, component] of Object.entries(pageMappings.gst)) {
  mappingContent += `    '${slug}': ${component},\n`;
}
mappingContent += `  },\n  calculator: {\n`;
for (const [slug, component] of Object.entries(pageMappings.calculator)) {
  mappingContent += `    '${slug}': ${component},\n`;
}
mappingContent += `  }\n};\n`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'pageMappings.ts'), mappingContent);

console.log('Successfully generated all components and mappings!');
