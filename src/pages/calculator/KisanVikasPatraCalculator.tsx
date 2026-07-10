import React, { useState, useMemo } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { Field, formatINR } from './CalcKit';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

// --- Configuration Engine ---
interface KVPRateConfig {
  effectiveFrom: string; // YYYY-MM-DD
  effectiveTo: string | null; // null means currently active
  interestRate: number;
  maturityMonths: number;
}

// Government notified historical KVP rates
const KVP_RATES: KVPRateConfig[] = [
  { effectiveFrom: '2023-10-01', effectiveTo: null, interestRate: 7.5, maturityMonths: 115 },
  { effectiveFrom: '2023-04-01', effectiveTo: '2023-09-30', interestRate: 7.5, maturityMonths: 115 },
  { effectiveFrom: '2023-01-01', effectiveTo: '2023-03-31', interestRate: 7.2, maturityMonths: 120 },
  { effectiveFrom: '2022-10-01', effectiveTo: '2022-12-31', interestRate: 7.0, maturityMonths: 123 },
  { effectiveFrom: '2020-04-01', effectiveTo: '2022-09-30', interestRate: 6.9, maturityMonths: 124 },
  { effectiveFrom: '2019-07-01', effectiveTo: '2020-03-31', interestRate: 7.6, maturityMonths: 113 }
];

const getApplicableRate = (dateString: string): KVPRateConfig | null => {
  const targetDate = new Date(dateString);
  for (const config of KVP_RATES) {
    const start = new Date(config.effectiveFrom);
    const end = config.effectiveTo ? new Date(config.effectiveTo) : new Date('2099-12-31');
    if (targetDate >= start && targetDate <= end) {
      return config;
    }
  }
  return null;
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

const calculateMaturityDate = (investmentDateStr: string, months: number): Date => {
  const date = new Date(investmentDateStr);
  date.setMonth(date.getMonth() + months);
  return date;
};

export const KisanVikasPatraCalculator: React.FC = () => {
  const [amount, setAmount] = useState(100000);
  const [investmentDate, setInvestmentDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [showDetails, setShowDetails] = useState(false);

  const activeConfig = useMemo(() => getApplicableRate(investmentDate), [investmentDate]);

  return (
    <CalculatorLayout id="kisan-vikas-patra" title="Kisan Vikas Patra (KVP)"
      description="Accurately calculate your KVP maturity value based on Government-notified interest rates for your specific investment date.">
      <div className="calc-app" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        
        {/* Left Column: Inputs */}
        <div className="calc-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'transparent' }}>
          
          <Field label="Investment Amount" value={amount} onChange={setAmount} min={1000} max={10000000} step={1000} prefix="₹ " />

          <div className="calc-field" style={{ marginTop: '0.5rem' }}>
            <div className="calc-field-head">
              <label>Investment Date</label>
            </div>
            <input 
              type="date" 
              value={investmentDate}
              onChange={(e) => setInvestmentDate(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                fontFamily: 'inherit',
                cursor: 'pointer'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', background: 'rgba(30, 94, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(30, 94, 255, 0.2)', marginTop: '1rem' }}>
            <AlertCircle size={20} color="#1E5EFF" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
              Interest rates are notified by the Government of India and are subject to periodic revisions.
            </p>
          </div>

        </div>

        {/* Right Column: Outputs */}
        <div className="calc-outputs" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {!activeConfig ? (
             <div style={{ background: 'rgba(209, 67, 67, 0.1)', border: '1px solid rgba(209, 67, 67, 0.2)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
               <AlertCircle size={32} color="#D14343" style={{ margin: '0 auto 1rem auto' }} />
               <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Data Unavailable</h4>
               <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>
                 Interest rate for the selected period is currently unavailable in our configuration. Please select a date after July 2019.
               </p>
             </div>
          ) : (
            <>
              {/* Detailed Result Panel */}
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', overflow: 'hidden', backdropFilter: 'blur(12px)' }}>
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>Maturity Summary</h3>
                </div>
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>Investment Amount</span> <span>{formatINR(amount)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>Investment Date</span> <span>{formatDate(new Date(investmentDate))}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>Applicable Interest Rate</span> <span>{activeConfig.interestRate}% p.a.</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>Compounding Frequency</span> <span>Yearly</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}>
                    <span>Maturity Period</span> 
                    <span>{activeConfig.maturityMonths} Months <span style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem'}}>({Math.floor(activeConfig.maturityMonths/12)} yr {activeConfig.maturityMonths%12} mo)</span></span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>Expected Maturity Date</span> <span>{formatDate(calculateMaturityDate(investmentDate, activeConfig.maturityMonths))}</span></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#4ADE80', padding: '0.75rem 0', margin: '0.25rem 0', borderTop: '1px dashed rgba(255,255,255,0.15)', borderBottom: '1px dashed rgba(255,255,255,0.15)' }}>
                    <span>(+) Interest Earned</span> <span>{formatINR(amount)}</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: '#C8A45D', fontSize: '1.35rem', paddingTop: '1.25rem', marginTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                    <span>Total Maturity Value</span> <span>{formatINR(amount * 2)}</span>
                  </div>
                </div>
              </div>

              {/* Calculation Details Toggle */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'transparent', color: '#C8A45D', fontWeight: 600, cursor: 'pointer' }}
                >
                  Calculation Details
                  {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                
                {showDetails && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <strong>Govt Rate Used:</strong> {activeConfig.interestRate}% for {activeConfig.maturityMonths} months
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <strong>Effective Notification Period:</strong> {formatDate(new Date(activeConfig.effectiveFrom))} to {activeConfig.effectiveTo ? formatDate(new Date(activeConfig.effectiveTo)) : 'Present'}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <strong>Compounding Formula:</strong> KVP essentially doubles the principal amount upon maturity over the exact term defined by the Government at the time of purchase.
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                      <strong>Step-by-step:</strong><br/>
                      1. Principal = {formatINR(amount)}<br/>
                      2. KVP Maturity Value = Principal × 2<br/>
                      3. {formatINR(amount)} × 2 = {formatINR(amount * 2)}
                    </div>
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <div style={{ display: 'flex', gap: '0.85rem', background: 'rgba(200, 164, 93, 0.05)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(200, 164, 93, 0.2)' }}>
                <AlertCircle size={20} color="#C8A45D" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Disclaimer: This calculator provides an estimated maturity value based on Government-notified Kisan Vikas Patra interest rates applicable on the selected investment date. Please consult FinVista Chartered Accountants or India Post for official calculations.
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </CalculatorLayout>
  );
};
