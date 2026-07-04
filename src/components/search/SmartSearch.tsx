import React, { useState, useMemo, useEffect } from 'react';
import { Search, ChevronRight, FileText, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { ServiceItem } from '../../data/servicesData';
import './SmartSearch.css';

interface SmartSearchProps {
  services: ServiceItem[];
  basePath?: string;
  placeholder?: string;
  initialQuery?: string;
}

export const SmartSearch: React.FC<SmartSearchProps> = ({ 
  services, 
  basePath = '/services',
  placeholder = "Search GST Registration, Tax Audit, Company Registration, LLP, ROC Compliance...",
  initialQuery = ''
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (initialQuery && initialQuery.trim()) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const filteredServices = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().split(' ').filter(t => t.length > 0);

    return services.filter(service => {
      const nameMatch = searchTerms.every(term => service.name.toLowerCase().includes(term));
      const keywordMatch = service.keywords?.some(keyword => 
        searchTerms.some(term => keyword.toLowerCase().includes(term))
      );
      
      return nameMatch || keywordMatch;
    });
  }, [query, services]);

  const suggestions = ["GST Registration", "Tax Audit", "Company Registration", "LLP", "ROC Compliance"];

  return (
    <div className="smart-search-container">
      <div className="search-input-wrapper glass-card">
        <Search className="search-icon" size={24} />
        <input 
          type="text" 
          className="smart-search-input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="clear-search" onClick={() => setQuery('')} aria-label="Clear search">
            <X size={20} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {query.trim() && (
          <motion.div 
            className="search-results-wrapper"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="search-results-header">
              <h3>Search Results</h3>
              <span className="results-count">{filteredServices.length} {filteredServices.length === 1 ? 'result' : 'results'} found</span>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredServices.length > 0 ? (
                <motion.div className="search-results-grid" layout>
                  {filteredServices.map(service => (
                    <motion.div 
                      key={service.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.externalUrl ? (
                      <a href={service.externalUrl} target="_blank" rel="noopener noreferrer" className="search-result-card glass-card">
                        <div className="result-icon">
                          <FileText size={24} />
                        </div>
                        <div className="result-content">
                          <h4>{service.name}</h4>
                          <span className="explore-link">Visit <ChevronRight size={14} /></span>
                        </div>
                      </a>
                      ) : (
                      <Link to={`${basePath.replace(/\/$/, '')}/${service.slug}`} className="search-result-card glass-card">
                        <div className="result-icon">
                          <FileText size={24} />
                        </div>
                        <div className="result-content">
                          <h4>{service.name}</h4>
                          <span className="explore-link">Explore <ChevronRight size={14} /></span>
                        </div>
                      </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="empty-state glass-card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="empty-message">No results found matching "{query}".</p>
                  <div className="suggestions">
                    <p>Try searching for:</p>
                    <div className="suggestion-chips">
                      {suggestions.map(s => (
                        <button key={s} onClick={() => setQuery(s)} className="suggestion-chip">
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
