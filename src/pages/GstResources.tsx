import React, { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SmartSearch } from '../components/search/SmartSearch';
import { gstData } from '../data/gstData';
import { Book, ChevronRight, FileText, Star, Settings } from 'lucide-react';
import './Services.css';

const popularResources = [
  { name: 'GST Acts', slug: 'gst-acts', category: 'ACTS & RULES' },
  { name: 'GST Rules', slug: 'gst-rules', category: 'ACTS & RULES' },
  { name: 'SAC Codes', slug: 'gst-sac-codes', category: 'RESOURCES' },
  { name: 'HSN Codes', slug: 'gst-hsn-codes', category: 'RESOURCES' },
];

const quickLinks = [
  { name: 'Acts & Rules', hash: '#acts--rules' },
  { name: 'Updates', hash: '#updates' },
  { name: 'Resources', hash: '#resources' }
];

const iconMap: Record<string, React.ReactNode> = {
  'ACTS & RULES': <Book size={20} />,
  'UPDATES': <FileText size={20} />,
  'RESOURCES': <Settings size={20} />
};

export const GstResources: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const allGstServices = useMemo(() => {
    const items: any[] = [];
    gstData.forEach(column => {
      column.categories.forEach(category => {
        items.push(...category.items.map(item => ({...item, category: category.title})));
      });
    });
    return items;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryParam]);

  const displayData = useMemo(() => {
    if (!categoryParam) return gstData;
    return gstData;
  }, [categoryParam]);

  return (
    <div className="services-directory">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="container">
          <div className="service-badge">
            <Book size={16} />
            <span>GST Resources</span>
          </div>
          <h1 className="service-title">Centralized GST Hub</h1>
          <p className="service-subtitle">
            Your comprehensive resource for GST Acts, Rules, Notifications, Circulars, Forms, and Codes.
          </p>
          
          <div className="search-section">
            <SmartSearch 
              services={allGstServices} 
              basePath="/gst"
              placeholder="Search GST resources (e.g. SAC Codes, Rules)..."
            />
          </div>
        </div>
        <div className="services-hero-pattern"></div>
      </div>

      <div className="services-categories-section">
        <div className="container">
          {/* Quick Navigation */}
          <div className="quick-navigation" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {quickLinks.map(link => (
              <a 
                href={link.hash} 
                key={link.name} 
                className="category-item-card glass-card" 
                style={{ padding: '0.8rem 1.5rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--brand-primary)', border: '1px solid rgba(18, 52, 133, 0.1)' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="categories-grid">
            
            {/* Popular Resources Section */}
            <div className="category-block">
              <h2 className="category-title">POPULAR RESOURCES</h2>
              <div className="category-items-grid">
                {popularResources.map((item, idx) => (
                  <Link to={`/gst/${item.slug}`} key={idx} className="category-item-card glass-card">
                    <div className="category-item-icon">
                      <Star size={20} />
                    </div>
                    <div className="category-item-content">
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem', display: 'block' }}>{item.category}</span>
                      <h4>{item.name}</h4>
                      <span className="category-item-link">Read More <ChevronRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Categories */}
            {displayData.map((column, colIdx) => (
              <React.Fragment key={colIdx}>
                {column.categories.map((category, catIdx) => (
                  <div key={`${colIdx}-${catIdx}`} className="category-block" id={category.title.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}>
                    <h2 className="category-title">{category.title}</h2>
                    <div className="category-items-grid">
                      {category.items.map((item, itemIdx) => (
                        <Link to={`/gst/${item.slug}`} key={itemIdx} className="category-item-card glass-card">
                          <div className="category-item-icon">
                            {iconMap[category.title] || <FileText size={20} />}
                          </div>
                          <div className="category-item-content">
                            <h4>{item.name}</h4>
                            <span className="category-item-link">Explore <ChevronRight size={14} /></span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
