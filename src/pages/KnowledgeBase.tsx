import React, { useEffect, useMemo } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SmartSearch } from '../components/search/SmartSearch';
import { knowledgeBaseData } from '../data/knowledgeBaseData';
import { Book, ChevronRight, FileText, FileSignature, Briefcase, Star, Settings } from 'lucide-react';
import './Services.css'; // Reuse premium services layout styling

const iconMap: Record<string, React.ReactNode> = {
  'ACTS': <Book size={20} />,
  'RULES': <FileText size={20} />,
  'CIRCULARS': <FileText size={20} />,
  'NOTIFICATION': <FileText size={20} />,
  'FORMS': <FileSignature size={20} />,
  'TOOLS': <Briefcase size={20} />,
  'IMPORTANT LINKS': <Settings size={20} />
};

const popularResources = [
  { name: 'Income Tax Act', slug: 'income-tax-act', category: 'ACTS' },
  { name: 'Companies Act', slug: 'companies-act', category: 'ACTS' },
  { name: 'Rates of TDS', slug: 'rates-of-tds', category: 'TOOLS' },
  { name: 'ROC Forms', slug: 'roc-forms', category: 'FORMS' },
  { name: 'Income Tax Rules', slug: 'income-tax-rules', category: 'RULES' },
  { name: 'Income Tax Returns Forms', slug: 'income-tax-returns-forms', category: 'FORMS' }
];

const quickLinks = [
  { name: 'Acts', hash: '#acts' },
  { name: 'Rules', hash: '#rules' },
  { name: 'Circulars', hash: '#circulars' },
  { name: 'Notifications', hash: '#notification' },
  { name: 'Forms', hash: '#forms' },
  { name: 'Tools', hash: '#tools' }
];

export const KnowledgeBase: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const queryParam = searchParams.get('q') || '';
  const location = useLocation();

  // Flatten all items for the SmartSearch component
  const allKBServices = useMemo(() => {
    const items: any[] = [];
    knowledgeBaseData.forEach(column => {
      column.categories.forEach(category => {
        items.push(...category.items.map(item => ({...item, category: category.title})));
      });
    });
    return items;
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
        return () => clearTimeout(t);
      }
    }
    window.scrollTo(0, 0);
  }, [categoryParam, location.hash, location.pathname]);

  const displayData = useMemo(() => {
    if (!categoryParam) return knowledgeBaseData;
    return knowledgeBaseData;
  }, [categoryParam]);

  return (
    <div className="services-directory">
      {/* Hero Section */}
      <div className="services-hero kb-hero">
        <div className="container">
          <div className="service-badge">
            <Book size={16} />
            <span>Knowledge Base</span>
          </div>
          <h1 className="service-title">Professional Resource Center</h1>
          <p className="service-subtitle">
            Explore our comprehensive library of Acts, Rules, Circulars, Notifications, Forms, and Tools.
          </p>
          
          <div className="search-section">
            <SmartSearch 
              services={allKBServices} 
              basePath="/knowledge-base"
              placeholder="Search knowledge base..."
              initialQuery={queryParam}
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
                  <Link to={`/knowledge-base/${item.slug}`} key={idx} className="category-item-card glass-card">
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
                  <div key={`${colIdx}-${catIdx}`} className="category-block" id={category.title.toLowerCase()} style={{ scrollMarginTop: '110px' }}>
                    <h2 className="category-title">{category.title}</h2>
                    <div className="category-items-grid">
                      {category.items.map((item, itemIdx) => (
                        item.externalUrl ? (
                        <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" key={itemIdx} className="category-item-card glass-card">
                          <div className="category-item-icon">
                            {iconMap[category.title] || <FileText size={20} />}
                          </div>
                          <div className="category-item-content">
                            <h4>{item.name}</h4>
                            <span className="category-item-link">Visit <ChevronRight size={14} /></span>
                          </div>
                        </a>
                        ) : (
                        <Link to={`/knowledge-base/${item.slug}`} key={itemIdx} className="category-item-card glass-card">
                          <div className="category-item-icon">
                            {iconMap[category.title] || <FileText size={20} />}
                          </div>
                          <div className="category-item-content">
                            <h4>{item.name}</h4>
                            <span className="category-item-link">Explore <ChevronRight size={14} /></span>
                          </div>
                        </Link>
                        )
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
