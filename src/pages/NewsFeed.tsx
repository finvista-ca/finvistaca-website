import React, { useState } from 'react';
import { Search, ExternalLink, Calendar, TrendingUp, Filter } from 'lucide-react';
import { newsData } from '../data/newsData';
import { InternalPageHero } from '../components/layout/InternalPageHero';
import './NewsFeed.css';

const categories = ["All", "GST", "Taxation", "Audit", "Compliance", "Technology", "Economy"];

export const NewsFeed: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews = newsData.filter(news => {
    const matchesCategory = activeCategory === "All" || news.category === activeCategory;
    return matchesCategory;
  });

  const featuredNews = filteredNews.filter(news => news.featured);
  const latestNews = filteredNews.filter(news => !news.featured);

  return (
    <div className="newsfeed-page">
      {/* Hero Section */}
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'News' }
        ]}
        title="News & Updates"
        description="Stay informed with the latest updates on taxation, compliance, audit, and global economics from trusted sources."
      />
      
      <section className="newsfeed-main" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
            <h1 className="section-title" style={{ marginBottom: '16px' }}>News & Updates</h1>
            <p className="section-desc" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>Stay informed with the latest updates on taxation, compliance, audit, and global economics from trusted sources.</p>
          </div>
          
          {/* Categories Filter */}
          <div className="categories-wrapper">
            <div className="categories-header">
              <Filter size={18} />
              <span>Filter by Category:</span>
            </div>
            <div className="categories-list">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured News (Only show if no search term or if search matches featured) */}
          {featuredNews.length > 0 && (
            <div className="featured-section">
              <div className="section-header">
                <h2><TrendingUp size={24} /> Featured Stories</h2>
              </div>
              <div className="featured-grid">
                {featuredNews.map(news => (
                  <a href={news.url} target="_blank" rel="noopener noreferrer" className="featured-card glass-card" key={news.id}>
                    <div className="card-badges">
                      <span className="category-badge">{news.category}</span>
                      <span className="source-badge">{news.source}</span>
                    </div>
                    <h3>{news.title}</h3>
                    <div className="card-footer">
                      <div className="date"><Calendar size={14} /> {news.date}</div>
                      <div className="read-more">Read Article <ExternalLink size={14} /></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Latest News */}
          <div className="latest-section">
            <div className="section-header">
              <h2>Latest Updates</h2>
            </div>
            {latestNews.length > 0 ? (
              <div className="latest-grid">
                {latestNews.map(news => (
                  <a href={news.url} target="_blank" rel="noopener noreferrer" className="news-card glass-card" key={news.id}>
                    <div className="card-badges">
                      <span className="category-badge">{news.category}</span>
                    </div>
                    <h4>{news.title}</h4>
                    <div className="card-footer">
                      <div className="source-info">
                        <span className="source-badge minimal">{news.source}</span>
                        <span className="date"><Calendar size={12} /> {news.date}</span>
                      </div>
                      <ExternalLink size={16} className="ext-icon" />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="no-results glass-card">
                <p>No news articles found for this category.</p>
                <button className="btn btn-secondary" onClick={() => setActiveCategory('All')}>Clear Filters</button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
