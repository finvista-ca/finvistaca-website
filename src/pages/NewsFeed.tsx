import React, { useState } from 'react';
import { Search, ExternalLink, Calendar, TrendingUp, Filter } from 'lucide-react';
import './NewsFeed.css';

// Sample extracted data from legacy site
const newsData = [
  {
    id: 1,
    title: "GST at 9: India Inc seeks GST 2.0 with faster ITC refunds, AI-led compliance and lower litigation",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/celebrating-nine-years-of-gst-a-call-for-reform-and-innovation-in-indias-tax-landscape/132105350",
    date: "Jul 1, 2026",
    category: "GST",
    featured: true
  },
  {
    id: 2,
    title: "India's top 10 States by GST collections in FY26 — and who lagged behind",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/indias-gst-revenue-breakdown-for-fy26-top-performers-and-laggards-revealed/132093571",
    date: "Jun 30, 2026",
    category: "GST",
    featured: false
  },
  {
    id: 3,
    title: "Govt Extends Customs Duty Exemption on Critical Petrochemical Imports Till July 15, 2026",
    source: "CA Club India",
    url: "https://www.caclubindia.com/news/govt-extends-customs-duty-exemption-on-critical-petrochemical-imports-till-july-15-2026-26628.asp",
    date: "Jun 29, 2026",
    category: "Taxation",
    featured: true
  },
  {
    id: 4,
    title: "Sebi bars 10 entities over alleged fraud at Darjeeling Industries",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/governance-risk-compliance/sebi-bars-10-entities-over-alleged-fraud-at-darjeeling-industries/132105054",
    date: "Jun 28, 2026",
    category: "Compliance",
    featured: false
  },
  {
    id: 5,
    title: "Exclusive: MCA set to notify SA 600, 40 revised audit standards by August",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/tax-legal-accounting/mca-to-revise-40-audit-standards-including-sa-600-by-august-2024/132087362",
    date: "Jun 27, 2026",
    category: "Audit",
    featured: false
  },
  {
    id: 6,
    title: "ICAI Strengthens AI Push with Sarvam AI Partnership and New AI Certification Course",
    source: "CA Club India",
    url: "https://www.caclubindia.com/news/icai-strengthens-ai-push-with-sarvam-ai-partnership-and-new-ai-certification-course-26625.asp",
    date: "Jun 26, 2026",
    category: "Technology",
    featured: false
  },
  {
    id: 7,
    title: "AI driving credit risk, may threaten jobs and tax revenues in developed economies: Fitch",
    source: "Economic Times",
    url: "https://cfo.economictimes.indiatimes.com/news/cfo-tech/ai-driving-credit-risk-may-threaten-jobs-and-tax-revenues-in-developed-economies-fitch/132105030",
    date: "Jun 25, 2026",
    category: "Technology",
    featured: false
  },
  {
    id: 8,
    title: "GSTAT Appeal Filing Deadline Extended Till 31st July 2026",
    source: "CA Club India",
    url: "https://www.caclubindia.com/news/gstat-appeal-filing-deadline-extended-till-31st-july-2026-26626.asp",
    date: "Jun 24, 2026",
    category: "GST",
    featured: false
  },
  {
    id: 9,
    title: "Why Gen Z are planning for life without a state pension",
    source: "BBC News",
    url: "https://www.bbc.co.uk/news/articles/c8e2yp1gg37o",
    date: "Jun 23, 2026",
    category: "Economy",
    featured: false
  }
];

const categories = ["All", "GST", "Taxation", "Audit", "Compliance", "Technology", "Economy"];

export const NewsFeed: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || news.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter(news => news.featured);
  const latestNews = filteredNews.filter(news => !news.featured);

  return (
    <div className="newsfeed-page">
      {/* Hero Section */}
      <section className="newsfeed-hero">
        <div className="container">
          <h1 className="page-title">News & Updates</h1>
          <p className="page-subtitle">
            Stay informed with the latest updates on taxation, compliance, audit, and global economics from trusted sources.
          </p>
          
          <div className="news-search-wrapper">
            <div className="search-bar glass-card">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search news, topics, or keywords..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className="newsfeed-main">
        <div className="container">
          
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
                <p>No news articles found matching your search criteria.</p>
                <button className="btn btn-secondary" onClick={() => {setSearchTerm(''); setActiveCategory('All');}}>Clear Filters</button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
