import React from 'react';
import { Search, BookOpen, FileText, Scale, Bell, Copy, FilePlus, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './KnowledgeHub.css';

const categories = [
  { name: 'Acts', path: '/acts', icon: Scale },
  { name: 'Sections', path: '/sections', icon: BookOpen },
  { name: 'Rules', path: '/rules', icon: FileText },
  { name: 'Notifications', path: '/notifications', icon: Bell },
  { name: 'Circulars', path: '/circulars', icon: Copy },
  { name: 'Forms', path: '/forms', icon: FilePlus },
  { name: 'Due Dates', path: '/calculator', icon: Calendar },
  { name: 'GST Resources', path: '/gst', icon: Search }
];

export const KnowledgeHub: React.FC = () => {
  return (
    <section className="section knowledge-hub-section">
      <div className="container">
        <div className="kh-layout">
          <div className="kh-content">
            <h2 className="kh-title">Legal Research Portal</h2>
            <p className="kh-subtitle">
              Access India's most comprehensive and updated database of tax laws, acts, rules, and circulars.
            </p>
            
            <div className="search-container glass-card">
              <div className="search-wrapper">
                <Search className="search-icon" size={24} />
                <input 
                  type="text" 
                  className="kh-search-input" 
                  placeholder="Search Acts, Sections, Rules, Notifications, Circulars and Forms"
                />
                <button className="btn btn-primary search-btn">Search</button>
              </div>
              <div className="search-suggestions">
                <span>Popular:</span>
                <span className="tag">Income Tax Act 1961</span>
                <span className="tag">CGST Act</span>
                <span className="tag">Form 16</span>
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
