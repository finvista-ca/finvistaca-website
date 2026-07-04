import React, { useState } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Field, Results, formatINR } from './CalcKit';

export const InstallmentsCalculator: React.FC = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [emi, setEmi] = useState(12000);

  const r = rate / 12 / 100;
  const minEmi = amount * r; // interest-only payment
  const feasible = emi > minEmi;
  const n = feasible ? -Math.log(1 - (amount * r) / emi) / Math.log(1 + r) : NaN;
  const months = feasible ? Math.ceil(n) : NaN;
  const years = feasible ? Math.floor(months / 12) : 0;
  const remMonths = feasible ? months % 12 : 0;
  const totalPay = feasible ? emi * months : NaN;
  const interest = feasible ? totalPay - amount : NaN;

  return (
    <CalculatorLayout id="installments" title="Get Number Of Installments"
      description="Find out how many monthly installments it will take to fully repay your loan.">
      <div className="calc-app">
        <div className="calc-inputs">
          <Field label="Loan Amount" value={amount} onChange={setAmount} min={10000} max={20000000} step={10000} prefix="₹ " />
          <Field label="Interest Rate (% per annum)" value={rate} onChange={setRate} min={1} max={20} step={0.1} suffix=" %" />
          <Field label="Monthly Installment (EMI)" value={emi} onChange={setEmi} min={1000} max={2000000} step={500} prefix="₹ " />
        </div>
        <div className="calc-outputs">
          <Results
            items={feasible ? [
              { label: 'Number of Installments', value: `${months} months`, primary: true },
              { label: 'Duration', value: `${years} yr ${remMonths} mo` },
              { label: 'Total Interest', value: formatINR(interest) },
              { label: 'Total Amount Payable', value: formatINR(totalPay) },
            ] : [
              { label: 'Number of Installments', value: 'Not possible', primary: true },
            ]}
            note={feasible
              ? undefined
              : `Your EMI must be greater than the monthly interest (${formatINR(minEmi)}) or the loan will never be repaid.`}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};
