import React, { useEffect, useMemo } from 'react';
import { SmartSearch } from '../components/search/SmartSearch';
import { otherServicesData } from '../data/otherServicesData';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight, FileText, Settings } from 'lucide-react';
import './Services.css'; // Reuse existing styles

export const OtherServices: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  // Flatten all items for the SmartSearch component
  const allOtherServices = useMemo(() => {
    const items: any[] = [];
    otherServicesData.forEach(column => {
      column.categories.forEach(category => {
        items.push(...category.items);
      });
    });
    return items;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryParam]);

  const displayData = useMemo(() => {
    if (!categoryParam) return otherServicesData;
    
    let targetTitles: string[] = [];
    if (categoryParam === 'permits') {
      targetTitles = ['PERMITS AND LICENCES'];
    } else if (categoryParam === 'international-tax') {
      targetTitles = ['INTERNATIONAL TAXATION'];
    } else if (categoryParam === 'global-tax-accounting') {
      targetTitles = ['GLOBAL TAXATION & BOOK KEEPING'];
    }

    if (targetTitles.length === 0) return otherServicesData;

    return otherServicesData.map(column => {
      const filteredCategories = column.categories.filter(cat => 
        targetTitles.includes(cat.title)
      );
      return { categories: filteredCategories };
    }).filter(col => col.categories.length > 0);

  }, [categoryParam]);

  return (
    <div className="services-directory">
      <div className="services-hero">
        <div className="container">
          <div className="service-badge">
            <Settings size={16} />
            <span>Other Services Directory</span>
          </div>
          <h1 className="service-title">Our Other Professional Services</h1>
          <p className="service-subtitle">
            Explore our complete range of permits, international taxation, and accounting services.
          </p>
          
          <div className="search-section">
            <SmartSearch services={allOtherServices} />
          </div>
        </div>
        <div className="services-hero-pattern"></div>
      </div>

      <div className="services-categories-section">
        <div className="container">
          <div className="categories-grid">
            {displayData.map((column, colIdx) => (
              <React.Fragment key={colIdx}>
                {column.categories.map((category, catIdx) => (
                  <div key={`${colIdx}-${catIdx}`} className="category-block">
                    <h2 className="category-title">{category.title}</h2>
                    <div className="category-items-grid">
                      {category.items.map((item, itemIdx) => (
                        <Link to={`/services/${item.slug}`} key={itemIdx} className="category-item-card glass-card">
                          <div className="category-item-icon">
                            <FileText size={20} />
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
