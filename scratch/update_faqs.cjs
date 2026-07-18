const fs = require('fs');
const path = require('path');

const faqsData = {
  'HomeLoanAssistance.tsx': [
    { q: 'How is home loan eligibility calculated?', a: 'Eligibility depends on factors such as monthly income, existing financial obligations, credit score, employment stability, age, and repayment capacity.' },
    { q: 'Can I apply jointly with my spouse or family member?', a: 'Yes. Most lenders allow joint applications, which may improve your loan eligibility.' },
    { q: 'What is the maximum repayment tenure?', a: 'Depending on the lender, repayment tenures can extend up to 30 years.' },
    { q: 'Can I transfer my existing home loan?', a: 'Yes. We assist with balance transfer options if another lender offers better interest rates or improved loan terms.' },
    { q: 'Are prepayments allowed?', a: 'Most lenders permit partial or full prepayments, though some may have conditions or charges.' },
    { q: 'What costs should I expect besides the loan amount?', a: 'Apart from the loan, you may incur processing fees, legal verification charges, technical valuation fees, insurance, and registration expenses.' },
    { q: 'How can Finvista help?', a: 'We help evaluate eligibility, compare lenders, prepare documentation, coordinate with banks, and support you throughout the approval process.' }
  ],
  'PersonalLoanAssistance.tsx': [
    { q: 'What is the typical repayment period?', a: 'Repayment periods generally range from 12 months to 7 years depending on the lender.' },
    { q: 'Can I get a personal loan without collateral?', a: 'Yes. Personal loans are generally unsecured and do not require collateral.' },
    { q: 'Does my credit score matter?', a: 'Yes. A higher credit score usually improves approval chances and may help secure better interest rates.' },
    { q: 'Can self-employed individuals apply?', a: 'Absolutely. Self-employed professionals and business owners can apply by providing the necessary income documentation.' },
    { q: 'Can I repay the loan early?', a: 'Many lenders allow foreclosure or prepayment, though applicable charges vary.' },
    { q: 'What affects my approval chances?', a: 'Income stability, repayment history, credit score, employment status, and debt-to-income ratio are key factors.' },
    { q: 'Does Finvista directly provide loans?', a: 'No. Finvista is a financial advisory firm that assists clients in obtaining suitable loans from banks and financial institutions.' }
  ],
  'BusinessLoanAssistance.tsx': [
    { q: 'What can a business loan be used for?', a: 'Business loans may be used for expansion, working capital, inventory, equipment purchases, technology upgrades, marketing, or infrastructure.' },
    { q: 'Is collateral always required?', a: 'Not always. Some lenders offer unsecured business loans depending on eligibility and financial profile.' },
    { q: 'Can newly established businesses apply?', a: 'Yes. Eligibility depends on lender policies, business model, projected cash flow, and documentation.' },
    { q: 'How long does the approval process take?', a: 'Approval timelines vary by lender and the completeness of documentation.' },
    { q: 'Can startups also apply?', a: 'Yes. We also provide dedicated Startup Funding Assistance for eligible ventures.' },
    { q: 'What financial statements are usually required?', a: 'Typically, lenders require Income Tax Returns, Profit & Loss Statements, Balance Sheets, GST Returns, and Bank Statements.' },
    { q: 'Why choose Finvista?', a: 'Our experts simplify documentation, compare multiple financing options, and help improve the likelihood of successful loan approval.' }
  ],
  'MSMELoanAssistance.tsx': [
    { q: 'What qualifies as an MSME?', a: 'Micro, Small, and Medium Enterprises registered under the applicable government criteria are eligible for MSME benefits.' },
    { q: 'Is Udyam Registration mandatory?', a: 'Many government-backed MSME loan schemes require Udyam Registration, and we can assist with the registration process.' },
    { q: 'Can MSMEs receive collateral-free loans?', a: 'Certain schemes and lenders offer collateral-free loans subject to eligibility.' },
    { q: 'Are government subsidy schemes available?', a: 'Yes. Depending on your business type and eligibility, various government-supported financing schemes may be available.' },
    { q: 'Can service businesses also apply?', a: 'Yes. Both manufacturing and service-based MSMEs are eligible.' },
    { q: 'What industries are supported?', a: 'Manufacturing, retail, trading, healthcare, hospitality, education, technology, logistics, and many more.' },
    { q: 'Does Finvista help with compliance documentation?', a: 'Yes. We assist in preparing financial statements, GST records, and other required documentation.' }
  ],
  'StartupFundingAssistance.tsx': [
    { q: 'What funding options are available for startups?', a: 'Funding may include bank loans, government schemes, incubator programs, venture capital, angel investment, and startup grants.' },
    { q: 'Do I need an incorporated company?', a: 'Not necessarily. However, many funding programs require a registered business entity.' },
    { q: 'Can Finvista prepare financial projections?', a: 'Yes. We assist with financial planning, cash flow projections, and investor-ready documentation.' },
    { q: 'Will you help prepare investor presentations?', a: 'Yes. We support startups in preparing business plans and pitch materials.' },
    { q: 'Can first-time entrepreneurs apply?', a: 'Absolutely. We work with both first-time founders and experienced entrepreneurs.' },
    { q: 'Do you assist with Startup India registration?', a: 'Yes. We guide eligible businesses through Startup India registration and related compliance.' },
    { q: 'Does Finvista arrange investments?', a: 'We provide advisory and funding assistance but do not directly invest or guarantee funding.' }
  ],
  'WorkingCapitalLoans.tsx': [
    { q: 'What is working capital financing?', a: 'It is short-term financing that helps businesses manage day-to-day operational expenses.' },
    { q: 'What expenses can working capital loans cover?', a: 'Inventory purchases, employee salaries, rent, utility bills, supplier payments, and other operational costs.' },
    { q: 'Is collateral required?', a: 'Requirements vary depending on the lender and loan product.' },
    { q: 'Can seasonal businesses apply?', a: 'Yes. Seasonal businesses often use working capital financing to manage fluctuating cash flow.' },
    { q: 'How is the loan amount determined?', a: 'It depends on turnover, financial statements, business performance, and lender policies.' },
    { q: 'Can existing businesses refinance their working capital facilities?', a: 'Yes. We can assist in evaluating refinancing or restructuring opportunities where appropriate.' },
    { q: 'How does Finvista help?', a: 'We assist in documentation, lender comparison, financial assessment, and application support.' }
  ],
  'TermLoans.tsx': [
    { q: 'What is a term loan?', a: 'A term loan provides funding that is repaid over a fixed period through scheduled installments.' },
    { q: 'What can a term loan be used for?', a: 'Business expansion, machinery purchases, infrastructure development, technology upgrades, or long-term investments.' },
    { q: 'Is collateral required?', a: 'Depending on the loan amount and lender, collateral may or may not be required.' },
    { q: 'How is repayment structured?', a: 'Repayment is generally made through monthly or quarterly installments over an agreed tenure.' },
    { q: 'Can I repay the loan before maturity?', a: 'Many lenders allow prepayment, subject to applicable terms and charges.' },
    { q: 'Do I need a project report?', a: 'For larger financing requirements, lenders may request a detailed project report and financial projections.' },
    { q: 'Why should I choose Finvista?', a: 'We provide strategic guidance, documentation support, lender comparisons, and end-to-end assistance throughout the financing process.' }
  ]
};

const outputDir = path.join(__dirname, '../src/pages/services');

for (const [filename, newFaqs] of Object.entries(faqsData)) {
  const filePath = path.join(outputDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the faqs array block and replace it
  const faqsRegex = /faqs:\s*\[[\s\S]*?\]\n\s*\};/;
  
  if (!faqsRegex.test(content)) {
    console.error(`faqs array not found in: ${filePath}`);
    continue;
  }
  
  // existing faqs match
  const match = content.match(/faqs:\s*\[([\s\S]*?)\]\n\s*\};/);
  
  // We want to append to the existing FAQs (the first 3 small ones).
  // I will just parse the existing ones, append, and stringify them back?
  // Easier to just replace the whole faqs array with the new ones since the user provided comprehensive ones.
  // Wait, let's keep the existing ones or just replace? The user said "Below are additional FAQs".
  // So I'll append them. I'll construct a new JSON string array.
  
  // To be safe and clean, I will just extract the old ones using a quick regex or JSON parse trick if possible.
  // Actually, let's just do a string replacement. I will stringify the new faqs and insert them.
  
  // But wait, the original faqs might be useful. I'll just append them.
  const newFaqsStr = newFaqs.map(f => `          {\n                "q": "${f.q.replace(/"/g, '\\"')}",\n                "a": "${f.a.replace(/"/g, '\\"')}"\n          }`).join(',\n');
  
  content = content.replace(/faqs:\s*\[([\s\S]*?)\]\n\s*\};/, (match, innerFaqs) => {
    // If the innerFaqs doesn't end with a comma and has content, add one
    let trimmedInner = innerFaqs.trimEnd();
    if (trimmedInner && !trimmedInner.endsWith(',')) {
      trimmedInner += ',';
    }
    return `faqs: [\n${trimmedInner}\n${newFaqsStr}\n    ]\n  };`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated FAQs in ${filename}`);
}

console.log('All FAQs updated successfully!');
