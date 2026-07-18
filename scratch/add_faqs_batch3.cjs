const fs = require('fs');
const path = require('path');

const filesToUpdate = {
  'ProjectFinance.tsx': [
    { q: 'What is project finance?', a: 'Project finance is a funding solution designed for large-scale projects such as manufacturing units, infrastructure, commercial developments, and business expansions.' },
    { q: 'Who can apply for project finance?', a: 'Businesses, MSMEs, startups, developers, infrastructure companies, and manufacturing units can apply, subject to lender eligibility.' },
    { q: 'What types of projects can be financed?', a: 'Manufacturing plants, commercial buildings, renewable energy projects, infrastructure, industrial expansion, and large business investments.' },
    { q: 'Is a Detailed Project Report (DPR) mandatory?', a: 'Yes. Most lenders require a professionally prepared Detailed Project Report to assess project feasibility.' },
    { q: 'How much funding can I obtain?', a: 'The loan amount depends on project cost, promoter contribution, repayment capacity, and lender policies.' },
    { q: 'Is collateral required?', a: 'Collateral requirements vary depending on the lender, project size, and financing structure.' },
    { q: 'How long does the approval process take?', a: 'Approval timelines vary depending on documentation completeness and lender evaluation.' },
    { q: 'Can startups apply for project finance?', a: 'Yes, provided they have a viable business model, project feasibility, and meet lender criteria.' },
    { q: 'Does Finvista prepare project reports?', a: 'Yes. We assist in preparing financial projections and project documentation.' },
    { q: 'Can multiple lenders finance one project?', a: 'Yes. Large projects may involve consortium or multiple lender financing.' },
    { q: 'How does Finvista help?', a: 'We provide complete advisory, documentation, lender coordination, and end-to-end financing support.' },
    { q: 'Does Finvista provide loans directly?', a: 'No. We assist clients in obtaining suitable financing from banks and financial institutions.' }
  ],
  'MortgageLoanAssistance.tsx': [
    { q: 'What is a mortgage loan?', a: 'A mortgage loan is a secured loan where property is pledged as collateral to obtain financing.' },
    { q: 'Can I continue using my property?', a: 'Yes. You continue to own and use the property while it serves as security.' },
    { q: 'Which properties are eligible?', a: 'Residential, commercial, and certain industrial properties are generally accepted.' },
    { q: 'How is the loan amount determined?', a: "It depends on the property's market value, income profile, and lender policies." },
    { q: 'What can the loan be used for?', a: 'Business expansion, education, medical expenses, home renovation, or other financial needs.' },
    { q: 'Is property valuation compulsory?', a: 'Yes. Technical and legal valuation is conducted before approval.' },
    { q: 'Can self-employed professionals apply?', a: 'Yes.' },
    { q: 'Is insurance mandatory?', a: 'Some lenders may require property or loan insurance.' },
    { q: 'Can I transfer my existing mortgage loan?', a: 'Yes. Balance transfer options are available through many lenders.' },
    { q: 'What repayment tenures are available?', a: 'Tenures vary by lender and loan type.' },
    { q: 'How does Finvista assist?', a: 'We coordinate documentation, lender selection, and complete application support.' },
    { q: 'Does Finvista finance properties directly?', a: 'No. We provide advisory services only.' }
  ],
  'OverdraftCashCredit.tsx': [
    { q: 'What is an overdraft facility?', a: 'An overdraft allows businesses to withdraw funds beyond their available account balance up to an approved limit.' },
    { q: 'What is a cash credit facility?', a: 'Cash credit provides revolving working capital against inventory, receivables, or other approved security.' },
    { q: 'Which businesses can apply?', a: 'MSMEs, manufacturers, traders, service providers, and established businesses.' },
    { q: 'Is collateral required?', a: 'Depending on the lender and sanctioned limit.' },
    { q: 'Can startups obtain overdraft facilities?', a: 'Some lenders offer overdraft products for eligible startups.' },
    { q: 'How is the credit limit decided?', a: 'Based on turnover, financial statements, working capital needs, and repayment capacity.' },
    { q: 'Can I use the funds for any business purpose?', a: 'Generally yes, for legitimate operational expenses.' },
    { q: 'Is interest charged on the entire sanctioned amount?', a: 'No. Interest is usually charged only on the amount utilized.' },
    { q: 'Can the limit be increased later?', a: 'Yes, subject to financial performance and lender approval.' },
    { q: 'What documents are required?', a: 'Business registration, GST, financial statements, bank statements, and KYC.' },
    { q: 'How does Finvista help?', a: 'We evaluate your financial requirements and help identify suitable facilities.' },
    { q: 'Does Finvista sanction overdraft limits?', a: 'No. We provide advisory and application assistance.' }
  ],
  'TradeFinanceAssistance.tsx': [
    { q: 'What is trade finance?', a: 'Trade finance facilitates domestic and international business transactions by improving cash flow and reducing payment risks.' },
    { q: 'Who can use trade finance?', a: 'Importers, exporters, manufacturers, wholesalers, and trading companies.' },
    { q: 'What products are included?', a: "Letters of Credit, Bank Guarantees, Invoice Financing, Bills Discounting, and Supply Chain Finance." },
    { q: 'Is trade finance only for international trade?', a: 'No. It can also support domestic trade transactions.' },
    { q: 'Do I need an Import Export Code (IEC)?', a: 'For international trade, an IEC is generally required.' },
    { q: 'Can MSMEs use trade finance?', a: 'Yes.' },
    { q: 'Does trade finance improve cash flow?', a: 'Yes. It enables businesses to receive working capital before customer payments are received.' },
    { q: 'What documents are commonly required?', a: 'Purchase orders, invoices, shipping documents, IEC, GST registration, and financial statements.' },
    { q: 'How long does approval take?', a: 'Depends on lender requirements and documentation.' },
    { q: 'Can existing businesses switch lenders?', a: 'Yes.' },
    { q: 'How does Finvista assist?', a: 'We help businesses choose suitable trade finance products and coordinate documentation.' },
    { q: 'Does Finvista issue Letters of Credit?', a: 'No. These are issued by banks.' }
  ],
  'ExportImportFinance.tsx': [
    { q: 'What is export finance?', a: 'Export finance provides working capital before or after shipment to support export activities.' },
    { q: 'What is import finance?', a: 'Import finance helps businesses purchase goods from overseas suppliers while managing payment obligations.' },
    { q: 'Is IEC registration compulsory?', a: 'Yes, for most import and export activities.' },
    { q: 'Which businesses are eligible?', a: 'Exporters, importers, manufacturers, trading companies, and MSMEs.' },
    { q: 'What financing options are available?', a: "Packing Credit, Post Shipment Finance, Import Bills Financing, Buyer's Credit, Supplier's Credit, and more." },
    { q: 'Can small exporters apply?', a: 'Yes.' },
    { q: 'Do banks require collateral?', a: 'Requirements vary by lender and loan product.' },
    { q: 'Can export incentives be combined with financing?', a: 'Yes, depending on eligibility and government policies.' },
    { q: 'What documents are needed?', a: 'IEC, GST registration, invoices, shipping documents, financial statements, and KYC.' },
    { q: 'Does Finvista assist with documentation?', a: 'Yes.' },
    { q: 'Does Finvista provide export loans directly?', a: 'No.' },
    { q: 'How does Finvista help?', a: 'We simplify financing, documentation, and lender coordination.' }
  ],
  'BalanceTransferRestructuring.tsx': [
    { q: 'What is a balance transfer?', a: 'A balance transfer moves an existing loan to another lender offering better interest rates or repayment terms.' },
    { q: 'When should I consider a balance transfer?', a: 'When another lender offers lower interest rates, reduced EMIs, or improved loan features.' },
    { q: 'Which loans can be transferred?', a: 'Home loans, business loans, LAP, mortgage loans, and selected personal loans.' },
    { q: 'What is loan restructuring?', a: 'Loan restructuring modifies repayment terms to make repayment more manageable.' },
    { q: 'Does restructuring affect my credit score?', a: 'It may, depending on lender reporting and repayment history.' },
    { q: 'Can I reduce my EMI through restructuring?', a: 'In many cases, yes.' },
    { q: 'Are there processing charges?', a: 'Some lenders may charge processing or foreclosure fees.' },
    { q: 'How is eligibility assessed?', a: 'Based on repayment history, income, outstanding balance, and credit profile.' },
    { q: 'Will new documentation be required?', a: 'Yes.' },
    { q: 'Can self-employed borrowers apply?', a: 'Yes.' },
    { q: 'How does Finvista help?', a: 'We compare lenders and recommend suitable restructuring options.' },
    { q: 'Does Finvista guarantee lower interest rates?', a: 'No. Final approval rests with the lending institution.' }
  ],
  'GovernmentSubsidyLoans.tsx': [
    { q: 'What are subsidy-linked loans?', a: 'These are loans offered under government-supported schemes that provide financial assistance or interest subsidies to eligible applicants.' },
    { q: 'Who can apply?', a: 'MSMEs, startups, farmers, women entrepreneurs, SC/ST entrepreneurs, and eligible businesses.' },
    { q: 'Which government schemes are available?', a: 'Eligibility depends on current Central and State Government schemes.' },
    { q: 'Is subsidy guaranteed?', a: 'No. Subsidies are subject to eligibility and government approval.' },
    { q: 'Can existing businesses apply?', a: 'Yes.' },
    { q: 'Is Udyam Registration required?', a: 'For many MSME schemes, yes.' },
    { q: 'Can startups benefit from these schemes?', a: 'Yes, if they satisfy scheme requirements.' },
    { q: 'What documents are generally required?', a: 'KYC, business registration, financial statements, project report, and scheme-specific documents.' },
    { q: 'Does Finvista help identify suitable schemes?', a: 'Yes. We evaluate eligibility and recommend relevant schemes.' },
    { q: 'Does Finvista assist with documentation?', a: 'Yes.' },
    { q: 'Does Finvista provide government grants?', a: 'No. We only provide advisory and application support.' },
    { q: 'How does Finvista help?', a: 'We guide clients through scheme selection, documentation, compliance, and coordination with banks and government agencies to maximize their chances of successful approval.' }
  ]
};

const outputDir = path.join(__dirname, '../src/pages/services');

Object.keys(filesToUpdate).forEach(fileName => {
  const filePath = path.join(outputDir, fileName);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const faqs = filesToUpdate[fileName];
    
    const faqsString = faqs.map(f => `      { question: "${f.q}", answer: "${f.a}" }`).join(',\n');
    
    content = content.replace(/faqs:\s*\[\s*\]/, `faqs: [\n${faqsString}\n    ]`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated FAQs for ${fileName}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
