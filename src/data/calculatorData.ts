export interface CalculatorData {
  id: string;
  title: string;
  description: string;
  iframeUrl: string;
  keywords: string[];
}

const taxKeywords = ['tax', 'income tax'];
const loanKeywords = ['loan', 'emi', 'installment'];

export const calculatorsList: CalculatorData[] = [
  {
    id: 'emi',
    title: 'Equated Monthly Installment (EMI)',
    description: 'Calculate your monthly EMI for various loans easily and plan your finances better.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-EMI.html',
    keywords: ['emi', 'equated monthly installment', ...loanKeywords]
  },
  {
    id: 'home-loan',
    title: 'Home Loan Calculator',
    description: 'Estimate your home loan EMIs, total interest, and payment schedule.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-HomeLoan.html',
    keywords: ['home', 'housing', 'mortgage', ...loanKeywords]
  },
  {
    id: 'auto-loan',
    title: 'Auto Loan Calculator',
    description: 'Calculate EMIs for your dream car or vehicle loan.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-AutoLoan.html',
    keywords: ['auto', 'car', 'vehicle', 'motor', ...loanKeywords]
  },
  {
    id: 'income-tax',
    title: 'Income Tax Calculator',
    description: 'Calculate your exact tax liability based on the latest tax slabs.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-IncomeTaxCalculator.html',
    keywords: [...taxKeywords, 'slab', 'liability', 'return']
  },
  {
    id: 'fbt',
    title: 'Fringe Benefit Tax (FBT)',
    description: 'Calculate Fringe Benefit Tax on expenses incurred by the employer.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-FBT.html',
    keywords: ['fringe benefit tax', 'fbt', 'employer', 'expense', ...taxKeywords]
  },
  {
    id: 'hra',
    title: 'House Rent Allowance (HRA)',
    description: 'Calculate the exempt portion of HRA from your salary income.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-HRA.html',
    keywords: ['hra', 'house rent allowance', 'rent', 'salary', 'exemption', ...taxKeywords]
  },
  {
    id: 'installments',
    title: 'Get Number Of Installments',
    description: 'Find out how many installments it will take to pay off your loan.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-GetNoOfInstalment.html',
    keywords: ['installment', 'count', 'number', ...loanKeywords]
  },
  {
    id: 'kisan-vikas-patra',
    title: 'Kisan Vikas Patra',
    description: 'Calculate the maturity amount for your Kisan Vikas Patra investment.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-KisanVikasPatras.html',
    keywords: ['kisan vikas patra', 'kvp', 'investment', 'maturity', 'post office']
  },
  {
    id: 'nsc',
    title: 'National Saving Certificates (NSC)',
    description: 'Estimate returns on your National Saving Certificates.',
    iframeUrl: 'https://catheme.saginfotech.com/calc/Calculators-NSC.html',
    keywords: ['national saving certificate', 'nsc', 'investment', 'return', 'post office']
  },
  {
    id: 'gst-late-fee',
    title: 'GST Late Fee Calculator',
    description: 'Calculate the GST late fee payable for delayed filing of GST returns based on the applicable government rules.',
    iframeUrl: '',
    keywords: ['gst', 'late fee', 'return', 'penalty', 'gstr-3b', 'gstr-1', 'gstr-9']
  }
];
