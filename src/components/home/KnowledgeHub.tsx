import React, { useState } from 'react';
import { Search, FileText, Scale, Bell, Copy, FilePlus, Calculator } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './KnowledgeHub.css';

const categories = [
  { name: 'Acts', path: '/knowledge-base#acts', icon: Scale },
  { name: 'Rules', path: '/knowledge-base#rules', icon: FileText },
  { name: 'Notifications', path: '/knowledge-base#notification', icon: Bell },
  { name: 'Circulars', path: '/knowledge-base#circulars', icon: Copy },
  { name: 'Forms', path: '/knowledge-base#forms', icon: FilePlus },
  { name: 'GST Resources', path: '/gst', icon: Search },
  { name: 'Calculators', path: '/calculator', icon: Calculator }
];

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
    <section className="section knowledge-hub-section">
      <div className="container">
        <div className="kh-layout">
          <div className="kh-content">
            <h2 className="kh-title">Legal Research Portal</h2>
            <p className="kh-subtitle">
              Access India's most comprehensive and updated database of tax laws, acts, rules, and circulars.
            </p>
            
            <div className="search-container">
              <div className="search-wrapper">
                <Search className="search-icon" size={24} />
                <input 
                  type="text" 
                  className="kh-search-input" 
                  placeholder="Search Acts, Sections, Rules, Notifications, Circulars and Forms"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  onKeyDown={onKeyDown}
                />
                <button type="button" onClick={doSearch} className="btn btn-primary search-btn">Search</button>
              </div>
              <div className="search-suggestions">
                <span>Popular:</span>
                {['Income Tax Act', 'TDS Rates', 'ROC Forms'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="tag"
                    onClick={() => navigate(`/knowledge-base?q=${encodeURIComponent(t)}`)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="kh-categories">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link to={category.path} key={category.name} className="category-card">
                  <div className="category-icon">
                    <Icon size={24} />
                  </div>
                  <span className="category-name">{category.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
