import React from 'react';
import { ArrowRight, Tag, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/newsData';
import './LatestUpdates.css';

// Show the three most recent items from the shared news snapshot.
const updates = newsData.slice(0, 3);

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
                <span className="update-tag" data-category={update.category}>
                  <Tag size={12} /> {update.category}
                </span>
                <span className="update-date">{update.date}</span>
              </div>
              <h3 className="update-title">{update.title}</h3>
              <p className="update-desc">Source: {update.source}</p>
              <a href={update.url} target="_blank" rel="noopener noreferrer" className="read-more">
                Read Article <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
