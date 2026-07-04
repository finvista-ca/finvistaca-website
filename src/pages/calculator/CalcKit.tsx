import React, { useState } from 'react';

export const formatINR = (n: number): string =>
  isFinite(n) ? '₹' + Math.round(n).toLocaleString('en-IN') : '—';

interface FieldProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  slider?: boolean;
}

export const Field: React.FC<FieldProps> = ({
  label, value, onChange, min = 0, max = 100, step = 1, prefix = '', suffix = '', slider = true,
}) => (
  <div className="calc-field">
    <div className="calc-field-head">
      <label>{label}</label>
      <span className="calc-field-value">{prefix}{value.toLocaleString('en-IN')}{suffix}</span>
    </div>
    <input
      className="calc-number"
      type="number"
      value={value}
      min={min}
      max={max}
      step={step}
      onFocus={(e) => e.target.select()}
      onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
    />
    {slider && (
      <input
        className="calc-slider"
        type="range"
        value={Math.min(Math.max(value, min), max)}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    )}
  </div>
);

interface ResultItem { label: string; value: string; primary?: boolean }

export const Results: React.FC<{ items: ResultItem[]; note?: string }> = ({ items, note }) => (
  <div className="calc-results">
    {items.map((r, i) => (
      <div key={i} className={`calc-result ${r.primary ? 'primary' : ''}`}>
        <span className="calc-result-label">{r.label}</span>
        <span className="calc-result-value">{r.value}</span>
      </div>
    ))}
    {note && <p className="calc-note">{note}</p>}
  </div>
);

export const Toggle: React.FC<{
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}> = ({ label, options, value, onChange }) => (
  <div className="calc-field">
    <div className="calc-field-head"><label>{label}</label></div>
    <div className="calc-toggle">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={`calc-toggle-btn ${value === o.value ? 'active' : ''}`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  </div>
);

// Reusable loan/EMI engine used by EMI, Home Loan and Auto Loan.
export const LoanCalculator: React.FC<{
  amountLabel?: string;
  defaultAmount?: number;
  maxAmount?: number;
  defaultRate?: number;
  defaultYears?: number;
  maxYears?: number;
}> = ({
  amountLabel = 'Loan Amount', defaultAmount = 1000000, maxAmount = 20000000,
  defaultRate = 9, defaultYears = 5, maxYears = 30,
}) => {
  const [amount, setAmount] = useState(defaultAmount);
  const [rate, setRate] = useState(defaultRate);
  const [years, setYears] = useState(defaultYears);

  const n = years * 12;
  const r = rate / 12 / 100;
  const emi = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = emi * n;
  const interest = total - amount;

  return (
    <div className="calc-app">
      <div className="calc-inputs">
        <Field label={amountLabel} value={amount} onChange={setAmount} min={10000} max={maxAmount} step={10000} prefix="₹ " />
        <Field label="Interest Rate (% per annum)" value={rate} onChange={setRate} min={1} max={20} step={0.1} suffix=" %" />
        <Field label="Loan Tenure (Years)" value={years} onChange={setYears} min={1} max={maxYears} step={1} suffix=" yr" />
      </div>
      <div className="calc-outputs">
        <Results items={[
          { label: 'Monthly EMI', value: formatINR(emi), primary: true },
          { label: 'Principal Amount', value: formatINR(amount) },
          { label: 'Total Interest', value: formatINR(interest) },
          { label: 'Total Amount Payable', value: formatINR(total) },
        ]} />
      </div>
    </div>
  );
};
