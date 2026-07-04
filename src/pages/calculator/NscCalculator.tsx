import React, { useState } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Field, Results, formatINR } from './CalcKit';

export const NscCalculator: React.FC = () => {
  const [amount, setAmount] = useState(100000);

  const rate = 7.7; // % p.a. compounded annually
  const years = 5;
  const maturity = amount * Math.pow(1 + rate / 100, years);
  const interest = maturity - amount;

  return (
    <CalculatorLayout id="nsc" title="National Saving Certificates (NSC)"
      description="Estimate the maturity value of your NSC (VIII Issue) investment.">
      <div className="calc-app">
        <div className="calc-inputs">
          <Field label="Investment Amount" value={amount} onChange={setAmount} min={1000} max={10000000} step={1000} prefix="₹ " />
        </div>
        <div className="calc-outputs">
          <Results
            items={[
              { label: 'Maturity Amount', value: formatINR(maturity), primary: true },
              { label: 'Amount Invested', value: formatINR(amount) },
              { label: 'Total Interest Earned', value: formatINR(interest) },
              { label: 'Interest Rate', value: `${rate}% p.a. (compounded yearly)` },
              { label: 'Maturity Period', value: `${years} years` },
            ]}
            note="NSC (VIII Issue) earns 7.7% p.a. compounded annually, payable at maturity after 5 years. Small-savings rates are revised quarterly."
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};
