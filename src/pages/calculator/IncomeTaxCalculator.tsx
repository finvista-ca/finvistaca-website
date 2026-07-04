import React, { useState } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Field, Results, Toggle, formatINR } from './CalcKit';

// New tax regime slabs, FY 2025-26 (AY 2026-27).
function slabTax(t: number): number {
  const slabs: [number, number][] = [
    [400000, 0], [800000, 0.05], [1200000, 0.10],
    [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30],
  ];
  let tax = 0, prev = 0;
  for (const [limit, rate] of slabs) {
    if (t > prev) { tax += (Math.min(t, limit) - prev) * rate; prev = limit; }
    else break;
  }
  return tax;
}

export const IncomeTaxCalculator: React.FC = () => {
  const [income, setIncome] = useState(1200000);
  const [type, setType] = useState('salaried');

  const stdDeduction = type === 'salaried' ? 75000 : 0;
  const taxable = Math.max(0, income - stdDeduction);
  let tax = slabTax(taxable);
  // Section 87A rebate under the new regime: no tax up to ₹12,00,000 taxable income.
  if (taxable <= 1200000) tax = 0;
  const cess = tax * 0.04;
  const total = tax + cess;

  return (
    <CalculatorLayout id="income-tax" title="Income Tax Calculator"
      description="Estimate your income tax under the new tax regime for FY 2025-26.">
      <div className="calc-app">
        <div className="calc-inputs">
          <Field label="Annual Income" value={income} onChange={setIncome} min={0} max={20000000} step={10000} prefix="₹ " />
          <Toggle label="Income Type" value={type} onChange={setType}
            options={[{ label: 'Salaried', value: 'salaried' }, { label: 'Other', value: 'other' }]} />
        </div>
        <div className="calc-outputs">
          <Results
            items={[
              { label: 'Total Tax Payable', value: formatINR(total), primary: true },
              { label: 'Taxable Income', value: formatINR(taxable) },
              { label: 'Income Tax', value: formatINR(tax) },
              { label: 'Health & Education Cess (4%)', value: formatINR(cess) },
            ]}
            note="New tax regime, FY 2025-26 (AY 2026-27). Salaried income gets a ₹75,000 standard deduction. Rebate u/s 87A makes tax nil up to ₹12,00,000 taxable income. This is an estimate — consult us for exact planning."
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};
