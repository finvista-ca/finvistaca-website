import React, { useState, useMemo } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Field, Toggle, formatINR } from './CalcKit';
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle2 } from 'lucide-react';

// --- 1. Engine Configuration ---
type RegimeType = 'new' | 'old';
type AgeCategory = 'regular' | 'senior' | 'super_senior';
type EmploymentType = 'salaried' | 'business' | 'professional' | 'pensioner';

interface Slab { limit: number; rate: number; }
interface TaxConfig {
  newRegime: {
    slabs: Slab[];
    rebateLimit: number;
    standardDeduction: number;
    surchargeRates: Slab[];
  };
  oldRegime: {
    slabs: Record<AgeCategory, Slab[]>;
    rebateLimit: number;
    standardDeduction: number;
    surchargeRates: Slab[];
  };
  cessRate: number;
}

const TAX_RULES: Record<string, TaxConfig> = {
  '2025-26': {
    newRegime: {
      slabs: [
        { limit: 400000, rate: 0 },
        { limit: 800000, rate: 0.05 },
        { limit: 1200000, rate: 0.10 },
        { limit: 1600000, rate: 0.15 },
        { limit: 2000000, rate: 0.20 },
        { limit: 2400000, rate: 0.25 },
        { limit: Infinity, rate: 0.30 },
      ],
      rebateLimit: 1200000,
      standardDeduction: 75000,
      surchargeRates: [
        { limit: 5000000, rate: 0 },
        { limit: 10000000, rate: 0.10 },
        { limit: 20000000, rate: 0.15 },
        { limit: Infinity, rate: 0.25 },
      ]
    },
    oldRegime: {
      slabs: {
        regular: [
          { limit: 250000, rate: 0 },
          { limit: 500000, rate: 0.05 },
          { limit: 1000000, rate: 0.20 },
          { limit: Infinity, rate: 0.30 },
        ],
        senior: [
          { limit: 300000, rate: 0 },
          { limit: 500000, rate: 0.05 },
          { limit: 1000000, rate: 0.20 },
          { limit: Infinity, rate: 0.30 },
        ],
        super_senior: [
          { limit: 500000, rate: 0 },
          { limit: 1000000, rate: 0.20 },
          { limit: Infinity, rate: 0.30 },
        ]
      },
      rebateLimit: 500000,
      standardDeduction: 50000,
      surchargeRates: [
        { limit: 5000000, rate: 0 },
        { limit: 10000000, rate: 0.10 },
        { limit: 20000000, rate: 0.15 },
        { limit: 50000000, rate: 0.25 },
        { limit: Infinity, rate: 0.37 },
      ]
    },
    cessRate: 0.04
  },
  '2024-25': {
    newRegime: {
      slabs: [
        { limit: 300000, rate: 0 },
        { limit: 600000, rate: 0.05 },
        { limit: 900000, rate: 0.10 },
        { limit: 1200000, rate: 0.15 },
        { limit: 1500000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 },
      ],
      rebateLimit: 700000,
      standardDeduction: 50000,
      surchargeRates: [
        { limit: 5000000, rate: 0 },
        { limit: 10000000, rate: 0.10 },
        { limit: 20000000, rate: 0.15 },
        { limit: Infinity, rate: 0.25 },
      ]
    },
    oldRegime: {
      slabs: {
        regular: [
          { limit: 250000, rate: 0 },
          { limit: 500000, rate: 0.05 },
          { limit: 1000000, rate: 0.20 },
          { limit: Infinity, rate: 0.30 },
        ],
        senior: [
          { limit: 300000, rate: 0 },
          { limit: 500000, rate: 0.05 },
          { limit: 1000000, rate: 0.20 },
          { limit: Infinity, rate: 0.30 },
        ],
        super_senior: [
          { limit: 500000, rate: 0 },
          { limit: 1000000, rate: 0.20 },
          { limit: Infinity, rate: 0.30 },
        ]
      },
      rebateLimit: 500000,
      standardDeduction: 50000,
      surchargeRates: [
        { limit: 5000000, rate: 0 },
        { limit: 10000000, rate: 0.10 },
        { limit: 20000000, rate: 0.15 },
        { limit: 50000000, rate: 0.25 },
        { limit: Infinity, rate: 0.37 },
      ]
    },
    cessRate: 0.04
  }
};

// Engine logic
function calculateTaxBreakdown(
  taxableIncome: number,
  slabs: Slab[]
) {
  let tax = 0;
  let prevLimit = 0;
  const breakdown: { range: string; rate: string; amount: number }[] = [];

  for (const slab of slabs) {
    if (taxableIncome > prevLimit) {
      const taxableAtThisRate = Math.min(taxableIncome, slab.limit) - prevLimit;
      const taxAtThisRate = taxableAtThisRate * slab.rate;
      
      tax += taxAtThisRate;
      
      breakdown.push({
        range: `₹${formatINR(prevLimit).replace('₹', '')} - ${slab.limit === Infinity ? 'Above' : '₹' + formatINR(slab.limit).replace('₹', '')}`,
        rate: `${(slab.rate * 100).toFixed(0)}%`,
        amount: taxAtThisRate
      });
      prevLimit = slab.limit;
    } else {
      break;
    }
  }

  return { tax, breakdown };
}

export const IncomeTaxCalculator: React.FC = () => {
  // State
  const [fy, setFy] = useState('2025-26');
  const [regime, setRegime] = useState<RegimeType>('new');
  const [age, setAge] = useState<AgeCategory>('regular');
  const [empType, setEmpType] = useState<EmploymentType>('salaried');

  const [income, setIncome] = useState({
    salary: 1200000,
    property: 0,
    business: 0,
    capitalGains: 0,
    other: 0
  });

  const [deductions, setDeductions] = useState({
    sec80c: 0,
    sec80ccd1b: 0,
    sec80d: 0,
    hra: 0,
    homeLoanInt: 0,
    sec24: 0,
    sec80e: 0,
    sec80g: 0,
    other: 0,
    employerNps: 0 // Applies to both (Section 80CCD(2))
  });

  const [showIncomeDetails, setShowIncomeDetails] = useState(false);
  const [showDeductions, setShowDeductions] = useState(false);

  // Derived Values
  const grossIncome = useMemo(() => {
    return Object.values(income).reduce((acc, val) => acc + val, 0);
  }, [income]);

  const updateIncomeField = (field: keyof typeof income, value: number) => {
    setIncome(prev => ({ ...prev, [field]: value }));
  };

  const updateDeductionField = (field: keyof typeof deductions, value: number) => {
    setDeductions(prev => ({ ...prev, [field]: value }));
  };

  const totalOtherDeductions = useMemo(() => {
    // Excluding employerNps as it's added separately below based on regime rules
    return deductions.sec80c + deductions.sec80ccd1b + deductions.sec80d + deductions.hra + 
           deductions.homeLoanInt + deductions.sec24 + deductions.sec80e + deductions.sec80g + deductions.other;
  }, [deductions]);

  // Main Calculator Function
  const computeEngine = (activeRegime: RegimeType) => {
    const rules = TAX_RULES[fy];
    const isSalariedOrPensioner = empType === 'salaried' || empType === 'pensioner';
    
    let standardDeduction = 0;
    if (isSalariedOrPensioner) {
      standardDeduction = activeRegime === 'new' 
        ? rules.newRegime.standardDeduction 
        : rules.oldRegime.standardDeduction;
      // Cannot exceed salary/pension income
      const eligibleIncomeForStdDed = income.salary + income.other; // assuming pension might be in other or salary
      standardDeduction = Math.min(standardDeduction, income.salary > 0 ? income.salary : income.other);
    }

    let applicableDeductions = 0;
    if (activeRegime === 'old') {
      applicableDeductions = totalOtherDeductions + deductions.employerNps;
    } else {
      // In New Regime, only 80CCD(2) [Employer NPS] and standard deduction are allowed among common ones
      applicableDeductions = deductions.employerNps;
    }

    const taxableIncome = Math.max(0, grossIncome - standardDeduction - applicableDeductions);
    
    const slabs = activeRegime === 'new' 
      ? rules.newRegime.slabs 
      : rules.oldRegime.slabs[age];

    const { tax: baseTax, breakdown } = calculateTaxBreakdown(taxableIncome, slabs);

    const rebateLimit = activeRegime === 'new' ? rules.newRegime.rebateLimit : rules.oldRegime.rebateLimit;
    
    let taxAfterRebate = baseTax;
    let rebateApplied = 0;
    
    // Exact rebate logic: rebate up to the tax amount if income <= rebateLimit
    if (taxableIncome <= rebateLimit) {
      rebateApplied = baseTax;
      taxAfterRebate = 0;
    } else if (activeRegime === 'new' && fy === '2025-26') {
       // Marginal relief for 87A added in recent budgets if slightly above limit
       // Standard generic calculator just calculates full tax if above limit.
    } else if (activeRegime === 'new' && fy === '2024-25') {
       // Marginal relief for 87A (tax > income - 700000)
       const incomeAboveLimit = taxableIncome - 700000;
       if (incomeAboveLimit > 0 && baseTax > incomeAboveLimit) {
         taxAfterRebate = incomeAboveLimit;
         rebateApplied = baseTax - taxAfterRebate;
       }
    }

    const surchargeRates = activeRegime === 'new' ? rules.newRegime.surchargeRates : rules.oldRegime.surchargeRates;
    
    let surchargeRate = 0;
    for (const s of surchargeRates) {
      if (taxableIncome > s.limit) {
        // continue
      } else {
        surchargeRate = s.rate;
        break;
      }
    }
    if (taxableIncome > surchargeRates[surchargeRates.length - 1].limit) {
      surchargeRate = surchargeRates[surchargeRates.length - 1].rate;
    }

    const surchargeAmount = taxAfterRebate * surchargeRate;
    const taxWithSurcharge = taxAfterRebate + surchargeAmount;
    
    const cessAmount = taxWithSurcharge * rules.cessRate;
    const totalTaxLiability = taxWithSurcharge + cessAmount;

    return {
      grossIncome,
      standardDeduction,
      applicableDeductions,
      taxableIncome,
      baseTax,
      rebateApplied,
      surchargeAmount,
      cessAmount,
      totalTaxLiability,
      breakdown
    };
  };

  const results = computeEngine(regime);
  const comparisonResults = {
    new: computeEngine('new'),
    old: computeEngine('old')
  };

  const recommendedRegime = comparisonResults.new.totalTaxLiability <= comparisonResults.old.totalTaxLiability ? 'new' : 'old';
  const savings = Math.abs(comparisonResults.new.totalTaxLiability - comparisonResults.old.totalTaxLiability);

  // Reusable Select Component matching CalcKit UI
  const SelectField = ({ label, value, onChange, options }: any) => (
    <div className="calc-field">
      <div className="calc-field-head"><label>{label}</label></div>
      <div style={{ position: 'relative' }}>
        <select 
          value={value} 
          onChange={e => onChange(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none',
            cursor: 'pointer',
            appearance: 'none',
          }}
        >
          {options.map((opt: any) => (
            <option key={opt.value} value={opt.value} style={{ background: '#09131F' }}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown size={18} color="rgba(255,255,255,0.5)" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
      </div>
    </div>
  );

  return (
    <CalculatorLayout id="income-tax" title="Income Tax Calculator"
      description="Accurately estimate your tax liability under the Old and New tax regimes based on official IT rules.">
      
      <div className="calc-app" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        
        {/* Left Column: Inputs */}
        <div className="calc-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'transparent' }}>
          
          <SelectField 
            label="Financial Year" 
            value={fy} 
            onChange={setFy} 
            options={[
              { value: '2025-26', label: 'FY 2025-26 (AY 2026-27)' },
              { value: '2024-25', label: 'FY 2024-25 (AY 2025-26)' }
            ]} 
          />

          <Toggle 
            label="Tax Regime" 
            value={regime} 
            onChange={(v) => setRegime(v as RegimeType)}
            options={[
              { label: 'New Tax Regime', value: 'new' }, 
              { label: 'Old Tax Regime', value: 'old' }
            ]} 
          />

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <SelectField 
                label="Taxpayer Category" 
                value={age} 
                onChange={(v: any) => setAge(v)} 
                options={[
                  { value: 'regular', label: 'Individual (<60 yrs)' },
                  { value: 'senior', label: 'Senior (60-79 yrs)' },
                  { value: 'super_senior', label: 'Super Senior (80+ yrs)' }
                ]} 
              />
            </div>
            <div style={{ flex: 1 }}>
              <SelectField 
                label="Employment Type" 
                value={empType} 
                onChange={(v: any) => setEmpType(v)} 
                options={[
                  { value: 'salaried', label: 'Salaried' },
                  { value: 'business', label: 'Business Income' },
                  { value: 'professional', label: 'Professional' },
                  { value: 'pensioner', label: 'Pensioner' }
                ]} 
              />
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
            <Field label="Annual Gross Income" value={grossIncome} onChange={(v) => {
              // If edited directly via slider, assign it all to salary (or other if not salaried)
              if (empType === 'business' || empType === 'professional') {
                 setIncome({ salary: 0, property: 0, business: v, capitalGains: 0, other: 0 });
              } else {
                 setIncome({ salary: v, property: 0, business: 0, capitalGains: 0, other: 0 });
              }
            }} min={0} max={20000000} step={10000} prefix="₹ " />
            
            <button 
              onClick={() => setShowIncomeDetails(!showIncomeDetails)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C8A45D', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 500 }}
            >
              {showIncomeDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {showIncomeDetails ? 'Hide Income Breakdown' : 'Show Detailed Income Breakdown'}
            </button>
            
            {showIncomeDetails && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', padding: '1.25rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <Field label="Salary Income" value={income.salary} onChange={(v) => updateIncomeField('salary', v)} slider={false} prefix="₹ " />
                <Field label="Income from House Property" value={income.property} onChange={(v) => updateIncomeField('property', v)} slider={false} prefix="₹ " />
                <Field label="Business / Professional Income" value={income.business} onChange={(v) => updateIncomeField('business', v)} slider={false} prefix="₹ " />
                <Field label="Capital Gains" value={income.capitalGains} onChange={(v) => updateIncomeField('capitalGains', v)} slider={false} prefix="₹ " />
                <Field label="Other Sources" value={income.other} onChange={(v) => updateIncomeField('other', v)} slider={false} prefix="₹ " />
              </div>
            )}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0, fontWeight: 500 }}>Deductions</h3>
              {regime === 'new' && (
                <span style={{ fontSize: '0.75rem', color: '#a0aec0', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>Most N/A in New Regime</span>
              )}
            </div>

            <button 
              onClick={() => setShowDeductions(!showDeductions)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C8A45D', fontSize: '0.9rem', marginTop: '1rem', fontWeight: 500 }}
            >
              {showDeductions ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {showDeductions ? 'Hide Deductions' : 'Manage Deductions'}
            </button>
            
            {showDeductions && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', padding: '1.25rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', opacity: regime === 'new' ? 0.7 : 1 }}>
                
                <Field label="Employer NPS Contribution (80CCD(2))" value={deductions.employerNps} onChange={(v) => updateDeductionField('employerNps', v)} slider={false} prefix="₹ " />
                
                {regime === 'old' && (
                  <>
                    <Field label="Section 80C (LIC, PPF, EPF)" value={deductions.sec80c} onChange={(v) => updateDeductionField('sec80c', v)} slider={false} prefix="₹ " max={150000} />
                    <Field label="Section 80CCD(1B) (NPS)" value={deductions.sec80ccd1b} onChange={(v) => updateDeductionField('sec80ccd1b', v)} slider={false} prefix="₹ " max={50000} />
                    <Field label="Section 80D (Health Insurance)" value={deductions.sec80d} onChange={(v) => updateDeductionField('sec80d', v)} slider={false} prefix="₹ " />
                    <Field label="House Rent Allowance (HRA)" value={deductions.hra} onChange={(v) => updateDeductionField('hra', v)} slider={false} prefix="₹ " />
                    <Field label="Home Loan Interest (Sec 24)" value={deductions.sec24} onChange={(v) => updateDeductionField('sec24', v)} slider={false} prefix="₹ " />
                    <Field label="Other Deductions (80G, 80E, etc)" value={deductions.other} onChange={(v) => updateDeductionField('other', v)} slider={false} prefix="₹ " />
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Outputs */}
        <div className="calc-outputs" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'transparent' }}>
          
          {/* Comparison Card */}
          <div style={{ background: 'rgba(30, 94, 255, 0.05)', border: '1px solid rgba(30, 94, 255, 0.2)', padding: '1.5rem', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <CheckCircle2 size={18} color="#C8A45D" /> Regime Comparison
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>New Regime Tax</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: recommendedRegime === 'new' ? '#4ADE80' : '#fff' }}>{formatINR(comparisonResults.new.totalTaxLiability)}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Old Regime Tax</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: recommendedRegime === 'old' ? '#4ADE80' : '#fff' }}>{formatINR(comparisonResults.old.totalTaxLiability)}</div>
              </div>
            </div>
            {savings > 0 && (
              <div style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ADE80', padding: '0.85rem', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center', fontWeight: 500, border: '1px solid rgba(74, 222, 128, 0.2)' }}>
                Opt for {recommendedRegime === 'new' ? 'New' : 'Old'} Regime & save {formatINR(savings)}
              </div>
            )}
            {savings === 0 && (
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff', padding: '0.85rem', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                Tax liability is identical in both regimes.
              </div>
            )}
          </div>

          {/* Detailed Summary Panel */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', overflow: 'hidden', backdropFilter: 'blur(12px)' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>Tax Summary ({regime === 'new' ? 'New' : 'Old'} Regime)</h3>
            </div>
            
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>Gross Income</span> <span>{formatINR(results.grossIncome)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>(-) Standard Deduction</span> <span>{formatINR(results.standardDeduction)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>(-) Other Deductions</span> <span>{formatINR(results.applicableDeductions)}</span></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#fff', padding: '0.75rem 0', margin: '0.25rem 0', borderTop: '1px dashed rgba(255,255,255,0.15)', borderBottom: '1px dashed rgba(255,255,255,0.15)' }}>
                <span>Taxable Income</span> <span>{formatINR(results.taxableIncome)}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0', marginTop: '0.25rem' }}><span>Income Tax</span> <span>{formatINR(results.baseTax)}</span></div>
              {results.rebateApplied > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ADE80' }}><span>(-) Rebate u/s 87A</span> <span>{formatINR(results.rebateApplied)}</span></div>}
              {results.surchargeAmount > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>(+) Surcharge</span> <span>{formatINR(results.surchargeAmount)}</span></div>}
              {results.cessAmount > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>(+) Health & Education Cess (4%)</span> <span>{formatINR(results.cessAmount)}</span></div>}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: '#C8A45D', fontSize: '1.35rem', paddingTop: '1.25rem', marginTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <span>Total Tax Liability</span> <span>{formatINR(results.totalTaxLiability)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
                <span>Effective Rate: {results.grossIncome > 0 ? ((results.totalTaxLiability / results.grossIncome) * 100).toFixed(2) : '0'}%</span>
                <span>Monthly Eqv: {formatINR(results.totalTaxLiability / 12)}/mo</span>
              </div>
            </div>
          </div>

          {/* Slab Breakdown */}
          {results.breakdown.length > 0 && (
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem 1.5rem', borderRadius: '16px' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#fff', fontSize: '1rem', fontWeight: 600 }}>Slab Breakdown</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {results.breakdown.map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', paddingBottom: '0.6rem', borderBottom: i !== results.breakdown.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>{row.range} <span style={{ color: '#C8A45D', fontSize: '0.8rem', marginLeft: '4px' }}>@{row.rate}</span></span>
                    <span style={{ color: '#fff', fontWeight: 500 }}>{formatINR(row.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          <div style={{ display: 'flex', gap: '0.85rem', background: 'rgba(200, 164, 93, 0.05)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(200, 164, 93, 0.2)' }}>
            <AlertCircle size={20} color="#C8A45D" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: '#fff' }}>Selected:</strong> FY {fy} | {regime === 'new' ? 'New' : 'Old'} Regime | {age === 'regular' ? 'Individual' : age === 'senior' ? 'Senior' : 'Super Senior'} | {empType.charAt(0).toUpperCase() + empType.slice(1)}
              </div>
              Disclaimer: This calculator provides an estimate only and should not be considered professional tax advice. Consult FinVista Chartered Accountants for personalised tax planning.
            </div>
          </div>

        </div>
      </div>
    </CalculatorLayout>
  );
};
