import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import './KnowledgeHub.css';

export const KnowledgeHub: React.FC = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const doSearch = () => {
    const q = term.trim();
    if (q) navigate(`/knowledge-base?q=${encodeURIComponent(q)}`);
    else navigate('/knowledge-base');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') doSearch();
  };

  return (
    <section className="section knowledge-hub-section bg-white">
      <div className="container">
        <div className="kh-header-wrapper">
          <div className="kh-header-top">
            <h2 className="kh-newspaper-title">The Finvista Ledger</h2>
            <div className="kh-date">Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
          </div>
          
          <div className="kh-search-bar">
            <input 
              type="text" 
              className="kh-input" 
              placeholder="Search Acts, Rules, Notifications & Circulars..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button type="button" onClick={doSearch} className="kh-btn">
              <Search size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="kh-newspaper-grid">
          {/* Main Article */}
          <div className="kh-col kh-col-main">
            <span className="kh-tag">Latest Regulation</span>
            <h3 className="kh-article-title large"><Link to="/knowledge-base">Income Tax Appellate Tribunal (ITAT) Rulings & Updates</Link></h3>
            <p className="kh-article-excerpt">
              Recent developments in corporate tax assessments highlight the need for stringent compliance and proactive documentation. Our analysis breaks down the most critical rulings of this quarter.
            </p>
            <Link to="/knowledge-base" className="kh-read-more">Read Analysis <ArrowRight size={14} /></Link>
          </div>

          {/* Secondary Articles */}
          <div className="kh-col kh-col-secondary">
            <div className="kh-article">
              <span className="kh-tag">GST Updates</span>
              <h3 className="kh-article-title"><Link to="/knowledge-base">New E-Invoicing Thresholds</Link></h3>
              <p className="kh-article-excerpt">Mandatory e-invoicing extended to businesses with turnover exceeding ₹5Cr.</p>
            </div>
            
            <div className="kh-divider"></div>
            
            <div className="kh-article">
              <span className="kh-tag">Corporate Law</span>
              <h3 className="kh-article-title"><Link to="/knowledge-base">MCA Extends AGM Deadlines</Link></h3>
              <p className="kh-article-excerpt">Key relief measures announced for private limited companies regarding Annual General Meetings.</p>
            </div>
          </div>

          {/* Quick Links / Database */}
          <div className="kh-col kh-col-sidebar">
            <h4 className="kh-sidebar-title">Research Database</h4>
            <ul className="kh-sidebar-list">
              <li><Link to="/knowledge-base#acts">Income Tax Act, 1961</Link></li>
              <li><Link to="/knowledge-base#rules">CGST Rules, 2017</Link></li>
              <li><Link to="/knowledge-base#circulars">RBI Master Circulars</Link></li>
              <li><Link to="/knowledge-base#forms">MCA RoC Forms</Link></li>
              <li><Link to="/calculator">Financial Calculators</Link></li>
              <li><Link to="/gst">GST Compliance Calendar</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
