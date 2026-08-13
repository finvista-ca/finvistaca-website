import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ExternalLink, Calendar, TrendingUp, Filter, AlertCircle } from 'lucide-react';
import { newsData } from '../data/newsData';
import './NewsFeed.css';
import { InternalPageHero } from '../components/layout/InternalPageHero';

const categories = ["All", "Income Tax", "GST", "Corporate Law", "Compliance", "Finance", "Business"];

export const NewsFeed: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Sort news by date (newest first)
  const sortedNews = useMemo(() => {
    return [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  // Filter news
  const filteredNews = useMemo(() => {
    return sortedNews.filter(news => {
      const matchesCategory = activeCategory === "All" || news.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = !query || 
        news.title.toLowerCase().includes(query) || 
        news.summary.toLowerCase().includes(query) || 
        news.category.toLowerCase().includes(query) ||
        news.source.toLowerCase().includes(query);
      
      return matchesCategory && matchesSearch;
    });
  }, [sortedNews, activeCategory, searchQuery]);

  const featuredArticle = filteredNews.length > 0 ? filteredNews[0] : null;
  const gridNews = filteredNews.length > 1 ? filteredNews.slice(1) : [];

  const lastUpdated = sortedNews.length > 0 ? sortedNews[0].date : '';

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="newsfeed-page">
      <InternalPageHero 
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'News Feed' }
        ]}
        title=""
        description=""
      />
      <div className="container" style={{ marginTop: '2rem' }}>

        {/* Search and Filters */}
        <div className="news-controls">
          <div className="search-container compact-search">
            <div className="search-box-custom">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search financial and regulatory updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="pill-container filter-bar">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 ? (
          <div className="no-results">
            <AlertCircle size={48} color="var(--text-secondary)" />
            <h3>No updates found</h3>
            <p>We couldn't find any news matching your criteria. Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="news-content">
            {/* Featured Article */}
            {featuredArticle && (
              <div className="featured-update">
                <a href={featuredArticle.sourceUrl} target="_blank" rel="noopener noreferrer" className="featured-card">
                  <div className="card-badges">
                    <span className="category-badge">{featuredArticle.category}</span>
                    <span className="featured-badge"><TrendingUp size={14} /> Featured</span>
                  </div>
                  <h2>{featuredArticle.title}</h2>
                  <p className="featured-summary">{featuredArticle.summary}</p>
                  
                  <div className="card-footer">
                    <div className="meta-info">
                      <span className="date"><Calendar size={14} /> {formatDate(featuredArticle.date)}</span>
                      <span className="source">{featuredArticle.source}</span>
                    </div>
                    <div className="read-more-btn">
                      Read More <ExternalLink size={16} />
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* News Grid */}
            {gridNews.length > 0 && (
              <div className="news-grid">
                {gridNews.map(news => (
                  <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer" className="news-card" key={news.id}>
                    <div className="card-badges">
                      <span className="category-badge">{news.category}</span>
                    </div>
                    <h3 className="news-card-title">{news.title}</h3>
                    <p className="news-card-summary">{news.summary}</p>
                    
                    <div className="card-footer mt-auto">
                      <div className="meta-info-col">
                        <span className="date"><Calendar size={12} /> {formatDate(news.date)}</span>
                        <span className="source text-sm">{news.source}</span>
                      </div>
                      <div className="read-more-icon">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
