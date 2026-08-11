import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  ChevronDown, 
  ChevronRight,
  ExternalLink,
  Check, 
  Minus,
  FileText,
  AlertCircle,
  Book
} from 'lucide-react';
import { InternalPageHero } from '../../components/layout/InternalPageHero';
import { KnowledgeBaseHeader } from '../../components/common/KnowledgeBaseHeader';
import { incomeTaxReturnFormsData, type ITRForm, relatedKnowledgeBase } from '../../data/incomeTaxReturnFormsData';
import './IncomeTaxReturnForms.css';

export const IncomeTaxReturnsForms: React.FC = () => {
  // Assessment Year State
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(incomeTaxReturnFormsData.map(f => f.assessmentYear)));
    return years.sort().reverse();
  }, []);
  
  const [selectedYear, setSelectedYear] = useState<string>(availableYears[0] || "AY 2024-25");

  // Form Finder State
  const [taxpayerType, setTaxpayerType] = useState<string>('');
  const [incomeTypes, setIncomeTypes] = useState<string[]>([]);
  const [specialConditions, setSpecialConditions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);

  // Form Finder Options
  const taxpayerOptions = [
    "Individual", "HUF", "Firm / LLP", "Company", "Trust / Institution", "Other"
  ];
  
  const incomeOptions = [
    "Salary / Pension",
    "One House Property",
    "Multiple House Properties",
    "Business / Profession",
    "Presumptive Business / Profession",
    "Capital Gains",
    "Other Sources (Interest, etc.)",
    "Foreign Income / Assets",
    "Agricultural Income"
  ];

  const specialOptions = [
    "Director in a company",
    "Hold unlisted equity shares",
    "Section 11 exemption (Trusts)"
  ];

  // Filter data by selected AY
  const currentYearData = useMemo(() => {
    return incomeTaxReturnFormsData.filter(f => f.assessmentYear === selectedYear);
  }, [selectedYear]);

  // Form Finder Logic
  const recommendedForms = useMemo(() => {
    if (!taxpayerType) return null;

    let possible = currentYearData.filter(form => {
      // Map "Firm / LLP" selection to data types
      if (taxpayerType === "Firm / LLP") {
        return form.taxpayerTypes.includes("Firm (other than LLP)") || form.taxpayerTypes.includes("Firm / LLP");
      }
      return form.taxpayerTypes.includes(taxpayerType) || form.taxpayerTypes.includes("Other");
    });

    // If Company, explicitly handle ITR-6 vs ITR-7 based on Section 11
    if (taxpayerType === "Company") {
      if (specialConditions.includes("Section 11 exemption (Trusts)")) {
        possible = possible.filter(f => f.formNumber === "ITR-7");
      } else {
        possible = possible.filter(f => f.formNumber === "ITR-6");
      }
    }

    // Filter by exclusions based on income types and special conditions
    if (incomeTypes.length > 0 || specialConditions.length > 0) {
      possible = possible.filter(form => {
        // Special condition exclusions
        if (specialConditions.includes("Director in a company") && form.exclusions.includes("Director in a company")) return false;
        if (specialConditions.includes("Hold unlisted equity shares") && form.exclusions.includes("Held unlisted equity shares at any time during the previous year")) return false;
        
        // Income type exclusions
        if (incomeTypes.includes("Business / Profession") && form.exclusions.includes("Any income from profits and gains of business or profession")) return false;
        if (incomeTypes.includes("Business / Profession") && form.exclusions.includes("Income from Business or Profession")) return false;
        if (incomeTypes.includes("Capital Gains") && form.exclusions.includes("Capital Gains")) return false;
        if (incomeTypes.includes("Foreign Income / Assets") && form.exclusions.includes("Income from any source outside India")) return false;
        if (incomeTypes.includes("Multiple House Properties") && form.exclusions.includes("Income from more than one house property")) return false;
        if (incomeTypes.includes("Multiple House Properties") && form.exclusions.includes("More than one house property")) return false;

        return true;
      });
    }

    // Attempt to prioritize based on eligibility
    if (possible.length > 1) {
      // e.g. ITR-1 vs ITR-2 vs ITR-3
      if (taxpayerType === "Individual" || taxpayerType === "HUF") {
         if (incomeTypes.includes("Business / Profession")) {
             possible = possible.filter(f => f.formNumber === "ITR-3" || f.formNumber === "ITR-4");
         } else if (incomeTypes.includes("Capital Gains") || incomeTypes.includes("Foreign Income / Assets") || incomeTypes.includes("Multiple House Properties") || specialConditions.includes("Director in a company")) {
             possible = possible.filter(f => f.formNumber === "ITR-2" || f.formNumber === "ITR-3");
         } else if (incomeTypes.length > 0) {
             possible = possible.filter(f => f.formNumber === "ITR-1" || f.formNumber === "ITR-2");
         }
      }
      
      // Firm / LLP distinction
      if (taxpayerType === "Firm / LLP") {
        if (incomeTypes.includes("Presumptive Business / Profession") && !incomeTypes.includes("Capital Gains") && !incomeTypes.includes("Foreign Income / Assets")) {
          possible = possible.filter(f => f.formNumber === "ITR-4" || f.formNumber === "ITR-5");
        } else {
          possible = possible.filter(f => f.formNumber === "ITR-5");
        }
      }
    }

    return possible;
  }, [taxpayerType, incomeTypes, specialConditions, currentYearData]);

  // Handle Income Selection
  const toggleIncome = (income: string) => {
    setIncomeTypes(prev => 
      prev.includes(income) ? prev.filter(i => i !== income) : [...prev, income]
    );
  };

  // Handle Special Condition Selection
  const toggleSpecial = (condition: string) => {
    setSpecialConditions(prev => 
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    );
  };

  // Directory Search
  const searchedDirectory = useMemo(() => {
    if (!searchQuery) return currentYearData;
    const lower = searchQuery.toLowerCase();
    return currentYearData.filter(f => 
      f.formNumber.toLowerCase().includes(lower) ||
      f.formName.toLowerCase().includes(lower) ||
      f.summary.toLowerCase().includes(lower) ||
      f.taxpayerTypes.some(t => t.toLowerCase().includes(lower)) ||
      f.incomeTypes.some(i => i.toLowerCase().includes(lower))
    );
  }, [searchQuery, currentYearData]);

  const selectedForm = currentYearData.find(f => f.id === selectedFormId);

  // Comparison Table Helpers
  const checkIncomeSupport = (form: ITRForm, incomeKey: string) => {
    // Exact match in incomeTypes
    if (form.incomeTypes.includes(incomeKey)) return <Check size={18} className="text-green-500" />;
    
    // Check exclusions
    const excludedWords = ["Capital Gains", "Business or Profession", "outside India", "more than one house property"];
    if (incomeKey === "Capital Gains" && form.exclusions.some(e => e.includes("Capital Gains"))) return <Minus size={18} />;
    if (incomeKey === "Business / Profession" && form.exclusions.some(e => e.includes("Business"))) return <Minus size={18} />;
    if (incomeKey === "Foreign Income / Assets" && form.exclusions.some(e => e.includes("outside India") || e.includes("Foreign"))) return <Minus size={18} />;
    if (incomeKey === "Multiple House Properties" && form.exclusions.some(e => e.includes("house property") && (e.includes("more than one") || e.includes("Multiple")))) return <Minus size={18} />;
    
    // Partial matches
    if (form.incomeTypes.some(i => i.includes(incomeKey) || i === "Any")) return <Check size={18} className="text-green-500" />;
    
    // If not excluded but not explicitly included (mostly ITR-1 limitations)
    if (form.formNumber === "ITR-1" && (incomeKey === "Capital Gains" || incomeKey === "Business / Profession")) return <Minus size={18} />;
    
    return <span className="conditional">Limited</span>;
  };

  return (
    <div className="itr-forms-page">
      <InternalPageHero 
        title="Income Tax Return Forms"
        description="Find the appropriate Income Tax Return form based on your taxpayer profile, income sources and applicable assessment year."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Knowledge Base', path: '/knowledge-base' },
          { label: 'Income Tax Return Forms' }
        ]}
      />

      <div className="container" style={{ marginTop: '0' }}>
        <KnowledgeBaseHeader
          infoTitle="Find the appropriate Income Tax Return form based on your taxpayer profile, income sources and applicable assessment year."
          infoIcon={<Book className="icon" size={24} />}
          infoGrid={[
            { label: 'Forms Indexed', value: currentYearData.length },
            { label: 'Category', value: 'Income Tax Return' },
            { label: 'Tax Framework', value: 'Income-tax Act, 1961' },
            { label: 'Official Authority', value: 'CBDT' }
          ]}
          statCards={[
            { value: currentYearData.length, label: 'Forms Indexed' },
            { value: 'ITR', label: 'Category' },
            { value: '1961 Act', label: 'Tax Framework' },
            { value: 'CBDT', label: 'Official Authority' }
          ]}
        />

      <div className="ay-selector-container">
        <span className="ay-selector-label">Select Assessment Year:</span>
        <select 
          className="ay-select" 
          value={selectedYear} 
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {availableYears.map(ay => (
            <option key={ay} value={ay}>{ay}</option>
          ))}
        </select>
      </div>

      {/* SECTION 1: FIND YOUR ITR FORM */}
      <div className="itr-form-finder">
        <h2 style={{ fontSize: '1.8rem', color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>Find Your ITR Form</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Answer a few questions to identify the ITR form that may apply to you for {selectedYear}.</p>
        
        <div className="finder-question">
          <h3>1. Who are you?</h3>
          <div className="finder-options-grid">
            {taxpayerOptions.map(opt => (
              <div 
                key={opt} 
                className={`finder-option ${taxpayerType === opt ? 'selected' : ''}`}
                onClick={() => setTaxpayerType(opt)}
              >
                <div className="finder-radio" />
                <span>{opt}</span>
              </div>
            ))}
          </div>
        </div>

        {taxpayerType && (
          <div className="finder-question">
            <h3>2. What types of income do you have? <span style={{fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal'}}>(Select all that apply)</span></h3>
            <div className="finder-options-grid">
              {incomeOptions.map(opt => (
                <div 
                  key={opt} 
                  className={`finder-option ${incomeTypes.includes(opt) ? 'selected' : ''}`}
                  onClick={() => toggleIncome(opt)}
                >
                  <div className="finder-checkbox">
                    {incomeTypes.includes(opt) && <Check size={14} />}
                  </div>
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {taxpayerType && (
          <div className="finder-question">
            <h3>3. Do you have any special circumstances? <span style={{fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal'}}>(Select all that apply)</span></h3>
            <div className="finder-options-grid">
              {specialOptions.map(opt => (
                <div 
                  key={opt} 
                  className={`finder-option ${specialConditions.includes(opt) ? 'selected' : ''}`}
                  onClick={() => toggleSpecial(opt)}
                >
                  <div className="finder-checkbox">
                    {specialConditions.includes(opt) && <Check size={14} />}
                  </div>
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESULTS */}
        {taxpayerType && recommendedForms && (
          <div className="finder-result">
            {recommendedForms.length === 0 ? (
              <div>
                <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>No direct match found</h3>
                <p style={{ color: 'var(--text-secondary)' }}>The combination of conditions selected does not map cleanly to a standard ITR form for {selectedYear}. Please consult a tax professional or review the detailed eligibility criteria.</p>
              </div>
            ) : recommendedForms.length === 1 ? (
              <div>
                <h3 style={{ color: 'var(--success-green)', marginBottom: '0.5rem' }}>Recommended ITR Form</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Based on your selections, this form appears to be the most relevant.</p>
                <div className="form-card" style={{ maxWidth: '600px', borderColor: 'var(--success-green)' }} onClick={() => setSelectedFormId(recommendedForms[0].id)}>
                  <div className="form-card-header">
                    <div className="form-number">{recommendedForms[0].formNumber} - {recommendedForms[0].formName}</div>
                  </div>
                  <div className="form-meta">
                    <p style={{ color: 'white', marginBottom: '1rem' }}>{recommendedForms[0].summary}</p>
                    <div className="form-meta-item">
                      <span className="form-meta-label">Applicable To:</span>
                      <span className="form-meta-value">{recommendedForms[0].taxpayerTypes.join(', ')}</span>
                    </div>
                  </div>
                  <div className="form-card-footer">
                    <span className="form-view-link">View Form Details <ChevronRight size={16} /></span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>Possible ITR Forms</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>More information is required to determine the single appropriate ITR form. The following forms may apply based on additional conditions:</p>
                <div className="forms-directory-grid">
                  {recommendedForms.map(form => (
                    <div key={`rec-${form.id}`} className="form-card" onClick={() => setSelectedFormId(form.id)}>
                      <div className="form-card-header">
                        <div className="form-number">{form.formNumber}</div>
                        <div className="form-name">{form.formName}</div>
                      </div>
                      <div className="form-meta">
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{form.summary}</p>
                      </div>
                      <div className="form-card-footer">
                        <span className="form-view-link">View Form Details <ChevronRight size={16} /></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="finder-disclaimer">
              This tool provides general guidance based on the information entered and the selected assessment year. ITR applicability can depend on additional facts and statutory conditions. Verify the applicable form and current instructions from the official Income Tax Department before filing.
            </div>
          </div>
        )}
      </div>

      {/* SECTION 2: ITR FORMS DIRECTORY */}
      <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>ITR Forms Directory ({selectedYear})</h2>
      
      <div style={{ position: 'relative', marginBottom: '2rem', maxWidth: '600px' }}>
        <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={20} />
        <input 
          type="text" 
          placeholder="Search ITR form, income type or eligibility..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'white' }}
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={18} />
          </button>
        )}
      </div>

      <div className="forms-directory-grid">
        {searchedDirectory.map(form => (
          <div key={`dir-${form.id}`} className="form-card" onClick={() => setSelectedFormId(form.id)}>
            <div className="form-card-header">
              <div className="form-number">{form.formNumber}</div>
              <div className="form-name">{form.formName}</div>
            </div>
            <div className="form-meta">
              <div className="form-meta-item">
                <span className="form-meta-label">Taxpayer Type</span>
                <span className="form-meta-value">{form.taxpayerTypes.join(', ')}</span>
              </div>
              <div className="form-meta-item">
                <span className="form-meta-label">Short Description</span>
                <span className="form-meta-value" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{form.summary}</span>
              </div>
            </div>
            <div className="form-card-footer">
              <span className="form-view-link">View Form Details <ChevronRight size={16} /></span>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 3: COMPARISON TABLE */}
      <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>ITR Forms at a Glance ({selectedYear})</h2>
      <div className="comparison-table-container">
        <table className="itr-comparison-table">
          <thead>
            <tr>
              <th>Form</th>
              <th>Taxpayer Type</th>
              <th>Salary / Pension</th>
              <th>House Property</th>
              <th>Business / Profession</th>
              <th>Capital Gains</th>
              <th>Foreign Assets/Income</th>
            </tr>
          </thead>
          <tbody>
            {currentYearData.map(form => (
              <tr key={`comp-${form.id}`}>
                <td style={{ fontWeight: 600, color: 'white' }}>{form.formNumber}</td>
                <td>{form.taxpayerTypes.join(', ')}</td>
                <td className="check">{checkIncomeSupport(form, "Salary / Pension")}</td>
                <td className="check">{checkIncomeSupport(form, "Multiple House Properties")}</td>
                <td className="check">{checkIncomeSupport(form, "Business / Profession")}</td>
                <td className="check">{checkIncomeSupport(form, "Capital Gains")}</td>
                <td className="check">{checkIncomeSupport(form, "Foreign Income / Assets")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SECTION 6: COMMON QUESTIONS */}
      <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem' }}>Common Questions ({selectedYear})</h2>
      <div className="faq-grid">
        <div className="faq-item">
          <div className="faq-q">Which ITR form is used for salary income?</div>
          <div className="faq-a">For {selectedYear}, resident individuals with total income up to ₹50 lakh and income from salary/pension, one house property, and other sources typically use ITR-1. If income exceeds ₹50 lakh or includes capital gains, ITR-2 or ITR-3 is used.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Which ITR form is applicable for business income?</div>
          <div className="faq-a">Individuals and HUFs with business or professional income use ITR-3. If they opt for presumptive taxation (Sec 44AD, 44ADA, 44AE) and meet the criteria, they can use ITR-4. Companies use ITR-6, while firms/LLPs use ITR-5.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Can the applicable ITR form change from one assessment year to another?</div>
          <div className="faq-a">Yes. ITR forms, their eligibility conditions, and required schedules can be amended by the CBDT every year. Always verify the applicability conditions for the specific assessment year before filing.</div>
        </div>
      </div>

      {/* OFFICIAL REFERENCE FOOTER */}
      <div className="official-reference-card" style={{ marginTop: '4rem', padding: '2rem', background: 'var(--glass-bg)', border: '1px solid rgba(201, 160, 80, 0.3)', borderRadius: '12px', borderLeft: '4px solid var(--brand-gold)' }}>
        <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Book size={24} color="var(--brand-gold)" /> Official Income Tax Return Forms
        </h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          ITR forms, applicability and filing requirements may change from one assessment year to another. Always verify the current form, instructions and applicable conditions from the official Income Tax Department.
        </p>
        <a 
          href="https://incometaxindia.gov.in/pages/downloads/income-tax-return.aspx" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', background: 'var(--brand-blue)', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 600, transition: 'all 0.2s' }}
        >
          View Official ITR Forms <ExternalLink size={16} />
        </a>
      </div>

      {/* RELATED KNOWLEDGE BASE */}
      <div className="related-kb-section" style={{ marginTop: '4rem', padding: '3rem 0', borderTop: '1px solid var(--glass-border)' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>Related Knowledge Base</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {relatedKnowledgeBase.map((item, idx) => (
            <Link key={idx} to={item.path} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '8px', textDecoration: 'none', color: 'white', textAlign: 'center', transition: 'all 0.2s' }}>
              <span style={{ fontWeight: 500 }}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedForm && (
        <div className="form-modal-overlay" onClick={() => setSelectedFormId(null)}>
          <div className="form-modal-content" onClick={e => e.stopPropagation()}>
            <div className="form-modal-header">
              <div>
                <h2>{selectedForm.formNumber}</h2>
                <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 600 }}>{selectedForm.formName}</div>
                <div style={{ color: 'var(--brand-gold)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{selectedForm.assessmentYear}</div>
              </div>
              <button className="form-modal-close" onClick={() => setSelectedFormId(null)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="form-modal-body">
              <div className="form-modal-section">
                <h3>Who should use it</h3>
                <ul className="form-modal-list">
                  {selectedForm.eligibility.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {selectedForm.exclusions.length > 0 && (
                <div className="form-modal-section">
                  <h3>Major Exclusions</h3>
                  <ul className="form-modal-list exclusions">
                    {selectedForm.exclusions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="form-modal-section">
                <h3>Income Covered</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedForm.incomeTypes.map((inc, idx) => (
                    <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {inc}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="form-modal-section">
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
                  {selectedForm.summary}
                </p>
              </div>
            </div>
            
            <div className="form-modal-footer">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Source: {selectedForm.officialSource}</span>
              <a 
                href={selectedForm.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-blue)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}
              >
                View Official ITR Form <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
