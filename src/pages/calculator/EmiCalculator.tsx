import React from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { LoanCalculator } from './CalcKit';

export const EmiCalculator: React.FC = () => (
  <CalculatorLayout id="emi" title="Equated Monthly Installment (EMI)"
    description="Calculate your monthly EMI, total interest and total amount payable for any loan.">
    <LoanCalculator amountLabel="Loan Amount" defaultAmount={1000000} maxAmount={20000000} defaultRate={9} defaultYears={5} maxYears={30} />
  </CalculatorLayout>
);
