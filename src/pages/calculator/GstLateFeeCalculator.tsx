import React, { useState, useMemo } from 'react';
import { CalculatorLayout } from '../../components/layout/CalculatorLayout';
import { formatINR } from './CalcKit';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

// --- Configuration Engine ---
interface GSTLateFeeRule {
  financialYear: string;
  returnType: string;
  taxpayerType: string;
  feePerDay: number; // Combined CGST + SGST
  maxCap: number; // Combined CGST + SGST Max Cap
}

const GST_LATE_FEE_RULES: GSTLateFeeRule[] = [
  // FY 2024-25 & FY 2025-26 rules (Standardized post-rationalization)
  { financialYear: 'FY 2025-26', returnType: 'GSTR-3B/1', taxpayerType: 'NIL Return', feePerDay: 20, maxCap: 500 },
  { financialYear: 'FY 2025-26', returnType: 'GSTR-3B/1', taxpayerType: 'Regular Return', feePerDay: 50, maxCap: 5000 },
  { financialYear: 'FY 2025-26', returnType: 'GSTR-9', taxpayerType: 'NIL Return', feePerDay: 200, maxCap: 20000 },
  { financialYear: 'FY 2025-26', returnType: 'GSTR-9', taxpayerType: 'Regular Return', feePerDay: 200, maxCap: 20000 },
  
  { financialYear: 'FY 2024-25', returnType: 'GSTR-3B/1', taxpayerType: 'NIL Return', feePerDay: 20, maxCap: 500 },
  { financialYear: 'FY 2024-25', returnType: 'GSTR-3B/1', taxpayerType: 'Regular Return', feePerDay: 50, maxCap: 5000 },
  { financialYear: 'FY 2024-25', returnType: 'GSTR-9', taxpayerType: 'NIL Return', feePerDay: 200, maxCap: 20000 },
  { financialYear: 'FY 2024-25', returnType: 'GSTR-9', taxpayerType: 'Regular Return', feePerDay: 200, maxCap: 20000 },

  { financialYear: 'FY 2026-27', returnType: 'GSTR-3B/1', taxpayerType: 'NIL Return', feePerDay: 20, maxCap: 500 },
  { financialYear: 'FY 2026-27', returnType: 'GSTR-3B/1', taxpayerType: 'Regular Return', feePerDay: 50, maxCap: 5000 },
  { financialYear: 'FY 2026-27', returnType: 'GSTR-9', taxpayerType: 'NIL Return', feePerDay: 200, maxCap: 20000 },
  { financialYear: 'FY 2026-27', returnType: 'GSTR-9', taxpayerType: 'Regular Return', feePerDay: 200, maxCap: 20000 },
];

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

export const GstLateFeeCalculator: React.FC = () => {
  const [fy, setFy] = useState('FY 2024-25');
  const [returnType, setReturnType] = useState('GSTR-3B/1');
  const [taxpayerType, setTaxpayerType] = useState('Regular Return');
  
  const today = new Date().toISOString().split('T')[0];
  const [dueDate, setDueDate] = useState(today);
  const [actualDate, setActualDate] = useState(today);
  
  const [showDetails, setShowDetails] = useState(false);

  const activeRule = useMemo(() => {
    return GST_LATE_FEE_RULES.find(r => 
      r.financialYear === fy && 
      r.returnType === returnType && 
      r.taxpayerType === taxpayerType
    );
  }, [fy, returnType, taxpayerType]);

  const delayDays = useMemo(() => {
    const start = new Date(dueDate);
    const end = new Date(actualDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }, [dueDate, actualDate]);

  const isInvalidDate = useMemo(() => {
    const start = new Date(dueDate);
    const end = new Date(actualDate);
    return end < start;
  }, [dueDate, actualDate]);

  const calculatedFee = delayDays * (activeRule?.feePerDay || 0);
  const maxCap = activeRule?.maxCap || 0;
  const finalFee = Math.min(calculatedFee, maxCap);
  
  // Half for CGST, Half for SGST
  const cgst = finalFee / 2;
  const sgst = finalFee / 2;

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
    <CalculatorLayout id="gst-late-fee" title="GST Late Fee Calculator"
      description="Calculate the GST late fee payable for delayed filing of GST returns based on the applicable government rules.">
      
      <div className="calc-app" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        
        {/* Left Column: Inputs */}
        <div className="calc-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'transparent' }}>
          
          <SelectField 
            label="Financial Year" 
            value={fy} 
            onChange={setFy} 
            options={[
              { value: 'FY 2026-27', label: 'FY 2026-27' },
              { value: 'FY 2025-26', label: 'FY 2025-26' },
              { value: 'FY 2024-25', label: 'FY 2024-25' }
            ]} 
          />

          <SelectField 
            label="GST Return Type" 
            value={returnType} 
            onChange={setReturnType} 
            options={[
              { value: 'GSTR-3B/1', label: 'GSTR-3B / GSTR-1' },
              { value: 'GSTR-9', label: 'GSTR-9 (Annual Return)' }
            ]} 
          />

          <SelectField 
            label="Taxpayer Type" 
            value={taxpayerType} 
            onChange={setTaxpayerType} 
            options={[
              { value: 'Regular Return', label: 'Regular Return' },
              { value: 'NIL Return', label: 'NIL Return' }
            ]} 
          />

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div className="calc-field" style={{ flex: 1, minWidth: '140px' }}>
              <div className="calc-field-head">
                <label>Due Date</label>
              </div>
              <input 
                type="date" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', cursor: 'pointer', colorScheme: 'dark' }}
              />
            </div>
            <div className="calc-field" style={{ flex: 1, minWidth: '140px' }}>
              <div className="calc-field-head">
                <label>Actual Filing Date</label>
              </div>
              <input 
                type="date" 
                value={actualDate}
                onChange={(e) => setActualDate(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', cursor: 'pointer', colorScheme: 'dark' }}
              />
            </div>
          </div>

        </div>

        {/* Right Column: Outputs */}
        <div className="calc-outputs" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {!activeRule ? (
             <div style={{ background: 'rgba(209, 67, 67, 0.1)', border: '1px solid rgba(209, 67, 67, 0.2)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
               <AlertCircle size={32} color="#D14343" style={{ margin: '0 auto 1rem auto' }} />
               <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Rule Unavailable</h4>
               <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>
                 No late fee rule found for the selected combination.
               </p>
             </div>
          ) : isInvalidDate ? (
            <div style={{ background: 'rgba(209, 67, 67, 0.1)', border: '1px solid rgba(209, 67, 67, 0.2)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
              <AlertCircle size={32} color="#D14343" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Invalid Date</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>
                Actual filing date cannot be earlier than the due date.
              </p>
            </div>
          ) : delayDays === 0 ? (
            <div style={{ background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.2)', borderRadius: '12px', padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <div style={{ background: 'rgba(74, 222, 128, 0.2)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                <AlertCircle size={40} color="#4ADE80" />
              </div>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Filing On Time</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', margin: 0 }}>
                No GST Late Fee is payable.
              </p>
            </div>
          ) : (
            <>
              {/* Detailed Result Panel */}
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', overflow: 'hidden', backdropFilter: 'blur(12px)' }}>
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>GST Late Fee Summary</h3>
                </div>
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>Delay in Days</span> <span>{delayDays} Days</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0' }}><span>Applicable Late Fee per Day</span> <span>{formatINR(activeRule.feePerDay)}</span></div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0', padding: '0.75rem 0', margin: '0.25rem 0', borderTop: '1px dashed rgba(255,255,255,0.15)', borderBottom: '1px dashed rgba(255,255,255,0.15)' }}>
                    <span>Calculated Total Late Fee</span> <span>{formatINR(calculatedFee)}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}><span>CGST Late Fee Component</span> <span>{formatINR(cgst)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}><span>SGST Late Fee Component</span> <span>{formatINR(sgst)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(209, 67, 67, 0.9)', fontSize: '0.9rem' }}><span>Maximum Late Fee Cap</span> <span>{formatINR(maxCap)}</span></div>

                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: '#C8A45D', fontSize: '1.35rem', paddingTop: '1.25rem', marginTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                    <span>Final Late Fee Payable</span> <span>{formatINR(finalFee)}</span>
                  </div>
                </div>
              </div>

              {/* Calculation Details Toggle */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'transparent', color: '#C8A45D', fontWeight: 600, cursor: 'pointer', outline: 'none', border: 'none' }}
                >
                  Calculation Details
                  {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                
                {showDetails && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <strong>Rule Used:</strong> {activeRule.financialYear} | {activeRule.returnType} | {activeRule.taxpayerType}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <strong>Daily Late Fee Rate:</strong> {formatINR(activeRule.feePerDay)} per day
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <strong>Maximum Cap Rule:</strong> {formatINR(maxCap)}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
                      <strong>Delay calculation:</strong> {formatDate(new Date(dueDate))} to {formatDate(new Date(actualDate))} = {delayDays} Days
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                      <strong>Step-by-step:</strong><br/>
                      1. Uncapped Fee = {delayDays} Days × {formatINR(activeRule.feePerDay)} = {formatINR(calculatedFee)}<br/>
                      2. Final Fee = Min(Uncapped Fee, Max Cap)<br/>
                      3. Min({formatINR(calculatedFee)}, {formatINR(maxCap)}) = {formatINR(finalFee)}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Disclaimer */}
          <div style={{ display: 'flex', gap: '0.85rem', background: 'rgba(200, 164, 93, 0.05)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(200, 164, 93, 0.2)' }}>
            <AlertCircle size={20} color="#C8A45D" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              This calculator provides an estimated GST late fee based on the latest applicable GST provisions. Actual liability may vary depending on government notifications and specific taxpayer circumstances. Please consult FinVista Chartered Accountants for professional guidance.
            </div>
          </div>

        </div>
      </div>
    </CalculatorLayout>
  );
};
