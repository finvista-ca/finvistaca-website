import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './LatestUpdates.css';

const updates = [
  {
    id: 1,
    tag: 'Income Tax',
    date: 'Oct 24, 2023',
    title: 'New Guidelines for Section 80G Deductions',
    description: 'CBDT issues comprehensive guidelines regarding the process of claiming deductions under Section 80G.',
  },
  {
    id: 2,
    tag: 'GST',
    date: 'Oct 18, 2023',
    title: 'Changes in e-Invoicing Applicability',
    description: 'Mandatory e-invoicing limit reduced to ₹5 Crore from the upcoming financial quarter.',
  },
  {
    id: 3,
    tag: 'Corporate Law',
    date: 'Oct 12, 2023',
    title: 'MCA Amends CSR Reporting Requirements',
    description: 'Detailed analysis of the new forms introduced by the Ministry of Corporate Affairs for CSR.',
  }
];

export const LatestUpdates: React.FC = () => {
  return (
    <section className="section updates-section">
      <div className="container">
        <div className="updates-header">
          <div>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Latest Updates</h2>
            <p className="section-subtitle" style={{ margin: 0 }}>Stay informed with the latest tax and regulatory changes.</p>
          </div>
          <Link to="/news" className="btn btn-outline btn-md view-all-btn">
            View All News <ArrowRight size={16} />
          </Link>
        </div>

        <div className="updates-grid">
          {updates.map((update) => (
            <div key={update.id} className="update-card">
              <div className="update-meta">
                <span className="update-tag" data-category={update.tag}>
                  <Tag size={12} /> {update.tag}
                </span>
                <span className="update-date">{update.date}</span>
              </div>
              <h3 className="update-title">{update.title}</h3>
              <p className="update-desc">{update.description}</p>
              <Link to={`/news/${update.id}`} className="read-more">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
