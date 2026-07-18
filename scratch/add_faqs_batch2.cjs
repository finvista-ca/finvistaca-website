const fs = require('fs');
const path = require('path');

const filesToUpdate = {
  'VehicleLoanAssistance.tsx': [
    { q: 'Who can apply for a vehicle loan?', a: 'Both salaried and self-employed individuals, as well as businesses, can apply subject to lender eligibility criteria.' },
    { q: 'Can I finance both new and used vehicles?', a: 'Yes. Financing options are available for both new and pre-owned vehicles, depending on the lender.' },
    { q: 'Is the vehicle used as collateral?', a: 'Yes. The financed vehicle generally serves as security until the loan is fully repaid.' },
    { q: 'What documents are required?', a: 'Common documents include identity proof, address proof, income proof, bank statements, and vehicle quotation.' },
    { q: 'Can I repay the loan early?', a: 'Most lenders allow foreclosure or prepayment, subject to applicable terms and charges.' },
    { q: 'How long does loan approval take?', a: 'Approval timelines depend on documentation and lender processing, but many loans are processed quickly.' },
    { q: 'How does Finvista assist?', a: 'We compare lenders, guide you through documentation, negotiate competitive loan options, and support you until disbursement.' }
  ],
  'EducationLoanAssistance.tsx': [
    { q: 'Who is eligible for an education loan?', a: 'Students pursuing higher education in India or abroad may be eligible, subject to lender requirements.' },
    { q: 'Are parents required as co-applicants?', a: 'In most cases, a parent or guardian acts as the co-applicant.' },
    { q: 'Does the loan cover living expenses?', a: 'Many education loans cover tuition fees, accommodation, books, travel, and other approved educational expenses.' },
    { q: 'Is collateral mandatory?', a: 'Collateral requirements depend on the loan amount and lender policies.' },
    { q: 'What is the repayment period?', a: 'Repayment generally begins after the moratorium period and may extend over several years.' },
    { q: 'Can I apply before receiving admission confirmation?', a: 'Some lenders offer provisional approvals, though final sanction usually requires admission confirmation.' },
    { q: 'How does Finvista help?', a: 'We help compare lenders, prepare documentation, and guide students throughout the loan approval process.' }
  ],
  'LoanAgainstProperty.tsx': [
    { q: 'What properties can be pledged?', a: 'Residential, commercial, and certain industrial properties are generally accepted, subject to lender evaluation.' },
    { q: 'Do I continue owning the property?', a: 'Yes. Ownership remains with you while the property serves as collateral.' },
    { q: 'Can the loan be used for business purposes?', a: 'Yes. LAP funds may be used for business expansion, education, medical expenses, or other legitimate financial needs.' },
    { q: 'How is the loan amount determined?', a: "The sanctioned amount depends on the property's market value and lender policies." },
    { q: 'Is property valuation compulsory?', a: 'Yes. Lenders conduct technical and legal evaluations before approving the loan.' },
    { q: 'Can existing LAP loans be transferred?', a: 'Yes. Balance transfer options may be available with better interest rates.' },
    { q: 'Why choose Finvista?', a: 'We assist with property documentation, lender comparison, valuation coordination, and end-to-end loan processing.' }
  ],
  'GoldLoanAdvisory.tsx': [
    { q: 'What purity of gold is accepted?', a: 'Most lenders accept gold ornaments ranging from 18 to 24 karats.' },
    { q: 'Is the gold safely stored?', a: 'Yes. Gold pledged with the lender is securely stored until loan repayment.' },
    { q: 'How is the loan amount calculated?', a: 'The amount depends on the purity and market value of the pledged gold, within regulatory limits.' },
    { q: 'Can I reclaim my gold after repayment?', a: 'Yes. Your gold is returned once the loan and applicable charges are fully repaid.' },
    { q: 'Are interest rates fixed?', a: 'Interest rates vary depending on the lender and loan scheme selected.' },
    { q: 'Is income proof always required?', a: 'For many gold loan products, documentation requirements are relatively minimal.' },
    { q: 'How does Finvista help?', a: 'We help clients compare lenders, understand repayment options, and complete documentation smoothly.' }
  ],
  'MachineryEquipmentLoan.tsx': [
    { q: 'What types of equipment can be financed?', a: 'Industrial machinery, manufacturing equipment, medical devices, agricultural equipment, and commercial machinery.' },
    { q: 'Can new businesses apply?', a: 'Yes. Eligibility depends on the business plan, financial profile, and lender requirements.' },
    { q: 'Is the equipment itself used as security?', a: 'In many cases, the financed equipment serves as collateral.' },
    { q: 'Can imported machinery also be financed?', a: 'Yes. Many lenders finance imported machinery subject to documentation.' },
    { q: 'How is repayment structured?', a: 'Repayment is generally made through fixed monthly installments over an agreed tenure.' },
    { q: 'Are subsidies available?', a: 'Certain industries and government schemes may provide financial assistance or subsidies.' },
    { q: 'How can Finvista assist?', a: 'We help identify suitable lenders, prepare project reports, and manage the documentation process.' }
  ],
  'CommercialVehicleLoan.tsx': [
    { q: 'Who can apply for commercial vehicle loans?', a: 'Transport operators, logistics companies, contractors, fleet owners, and eligible businesses.' },
    { q: 'Which vehicles are covered?', a: 'Trucks, buses, tippers, trailers, tankers, pickup vehicles, and commercial vans.' },
    { q: 'Can multiple vehicles be financed?', a: 'Yes. Eligible businesses can finance multiple commercial vehicles.' },
    { q: 'Are used commercial vehicles eligible?', a: 'Many lenders provide financing for pre-owned commercial vehicles subject to valuation.' },
    { q: 'What documents are required?', a: 'Business proof, financial statements, KYC documents, vehicle quotation, and bank statements.' },
    { q: 'What determines loan eligibility?', a: 'Business income, repayment history, vehicle value, and credit profile.' },
    { q: 'Why choose Finvista?', a: 'We simplify lender selection, documentation, and financing negotiations for commercial fleet purchases.' }
  ],
  'AgricultureLoanAssistance.tsx': [
    { q: 'Who can apply for agricultural loans?', a: 'Farmers, agricultural entrepreneurs, dairy owners, horticulture businesses, and allied agricultural enterprises.' },
    { q: 'What can agricultural loans be used for?', a: 'Crop cultivation, irrigation, farm equipment, livestock, storage facilities, and agricultural infrastructure.' },
    { q: 'Are government subsidy schemes available?', a: 'Yes. Several government-supported agricultural finance schemes are available based on eligibility.' },
    { q: 'Can I finance agricultural machinery?', a: 'Yes. Tractors, harvesters, irrigation systems, and other farm equipment can often be financed.' },
    { q: 'Is collateral always required?', a: 'Not always. Some agricultural loan schemes offer collateral-free financing within prescribed limits.' },
    { q: 'What documents are commonly required?', a: 'Land records, identity proof, bank statements, cultivation details, and other lender-specific documents.' },
    { q: 'How does Finvista help?', a: 'We help identify the most suitable agricultural finance schemes, prepare documentation, and coordinate with financial institutions.' }
  ]
};

const outputDir = path.join(__dirname, '../src/pages/services');

Object.keys(filesToUpdate).forEach(fileName => {
  const filePath = path.join(outputDir, fileName);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const faqs = filesToUpdate[fileName];
    
    // Create the FAQ array string
    const faqsString = faqs.map(f => `      { question: "${f.q}", answer: "${f.a}" }`).join(',\n');
    
    // Replace the empty faqs array with the populated one
    content = content.replace(/faqs:\s*\[\s*\]/, `faqs: [\n${faqsString}\n    ]`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated FAQs for ${fileName}`);
  }
});
