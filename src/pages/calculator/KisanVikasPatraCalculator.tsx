import React, { useState } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Field, Results, formatINR } from './CalcKit';

export const KisanVikasPatraCalculator: React.FC = () => {
  const [amount, setAmount] = useState(100000);

  const rate = 7.5;       // % p.a. compounded annually (current KVP rate)
  const months = 115;     // matures in 9 years 7 months
  const maturity = amount * 2; // KVP doubles the investment on maturity
  const interest = maturity - amount;

  return (
    <CalculatorLayout id="kisan-vikas-patra" title="Kisan Vikas Patra (KVP)"
      description="Calculate the maturity value of your Kisan Vikas Patra investment.">
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
              { label: 'Maturity Period', value: `${months} months (9 yr 7 mo)` },
            ]}
            note="KVP doubles the invested amount on maturity at the current rate of 7.5% p.a. Small-savings rates are revised quarterly by the Ministry of Finance."
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};
