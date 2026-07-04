import React from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { LoanCalculator } from './CalcKit';

export const AutoLoanCalculator: React.FC = () => (
  <CalculatorLayout id="auto-loan" title="Auto Loan Calculator"
    description="Calculate the EMI for your car or vehicle loan.">
    <LoanCalculator amountLabel="Vehicle Loan Amount" defaultAmount={800000} maxAmount={5000000} defaultRate={9.5} defaultYears={5} maxYears={8} />
  </CalculatorLayout>
);
