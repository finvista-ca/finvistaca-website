import React, { useState } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Field, Results, Toggle, formatINR } from './CalcKit';

export const HraCalculator: React.FC = () => {
  const [basic, setBasic] = useState(50000);
  const [da, setDa] = useState(0);
  const [hra, setHra] = useState(20000);
  const [rent, setRent] = useState(18000);
  const [city, setCity] = useState('metro');

  const salary = basic + da; // monthly
  const e1 = hra;
  const e2 = Math.max(0, rent - 0.1 * salary);
  const e3 = (city === 'metro' ? 0.5 : 0.4) * salary;
  const exempt = Math.max(0, Math.min(e1, e2, e3));
  const taxable = Math.max(0, hra - exempt);

  return (
    <CalculatorLayout id="hra" title="House Rent Allowance (HRA)"
      description="Calculate the tax-exempt portion of your HRA. Enter monthly figures.">
      <div className="calc-app">
        <div className="calc-inputs">
          <Field label="Basic Salary (monthly)" value={basic} onChange={setBasic} min={0} max={1000000} step={1000} prefix="₹ " />
          <Field label="Dearness Allowance (monthly)" value={da} onChange={setDa} min={0} max={500000} step={1000} prefix="₹ " />
          <Field label="HRA Received (monthly)" value={hra} onChange={setHra} min={0} max={500000} step={1000} prefix="₹ " />
          <Field label="Rent Paid (monthly)" value={rent} onChange={setRent} min={0} max={500000} step={1000} prefix="₹ " />
          <Toggle label="City Type" value={city} onChange={setCity}
            options={[{ label: 'Metro', value: 'metro' }, { label: 'Non-Metro', value: 'nonmetro' }]} />
        </div>
        <div className="calc-outputs">
          <Results
            items={[
              { label: 'HRA Exempt (monthly)', value: formatINR(exempt), primary: true },
              { label: 'Taxable HRA (monthly)', value: formatINR(taxable) },
              { label: 'Actual HRA received', value: formatINR(e1) },
              { label: 'Rent − 10% of salary', value: formatINR(e2) },
              { label: `${city === 'metro' ? '50%' : '40%'} of salary`, value: formatINR(e3) },
            ]}
            note="The exempt HRA is the least of the three amounts above. Metro cities: Delhi, Mumbai, Kolkata, Chennai."
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};
