import React from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { LoanCalculator } from './CalcKit';

export const HomeLoanCalculator: React.FC = () => (
  <CalculatorLayout id="home-loan" title="Home Loan Calculator"
    description="Estimate your home loan EMI, total interest and total repayment.">
    <LoanCalculator amountLabel="Home Loan Amount" defaultAmount={5000000} maxAmount={100000000} defaultRate={8.5} defaultYears={20} maxYears={30} />
  </CalculatorLayout>
);
