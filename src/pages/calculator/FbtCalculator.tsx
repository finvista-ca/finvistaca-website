import React, { useState } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Field, Results, formatINR } from './CalcKit';

export const FbtCalculator: React.FC = () => {
  const [expense, setExpense] = useState(100000);
  const [pct, setPct] = useState(20);

  const taxableValue = (expense * pct) / 100;
  const fbt = taxableValue * 0.30;
  const cess = fbt * 0.03;
  const total = fbt + cess;

  return (
    <CalculatorLayout id="fbt" title="Fringe Benefit Tax (FBT)"
      description="Estimate Fringe Benefit Tax on expenses treated as fringe benefits.">
      <div className="calc-app">
        <div className="calc-inputs">
          <Field label="Total Expenditure" value={expense} onChange={setExpense} min={0} max={100000000} step={5000} prefix="₹ " />
          <Field label="Fringe Benefit Valuation (%)" value={pct} onChange={setPct} min={0} max={100} step={5} suffix=" %" />
        </div>
        <div className="calc-outputs">
          <Results
            items={[
              { label: 'Total FBT Payable', value: formatINR(total), primary: true },
              { label: 'Taxable Value of Fringe Benefits', value: formatINR(taxableValue) },
              { label: 'FBT @ 30%', value: formatINR(fbt) },
              { label: 'Surcharge / Cess @ 3%', value: formatINR(cess) },
            ]}
            note="Fringe Benefit Tax was abolished in India from FY 2009-10. This tool is provided for reference and historical calculations only."
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};
