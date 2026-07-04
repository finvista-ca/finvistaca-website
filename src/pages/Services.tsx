import React, { useEffect, useMemo } from 'react';
import { SmartSearch } from '../components/search/SmartSearch';
import { getAllServices, servicesData } from '../data/servicesData';
import { otherServicesData } from '../data/otherServicesData';
import { knowledgeBaseData } from '../data/knowledgeBaseData';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight, FileText, Settings } from 'lucide-react';
import './Services.css';

const combinedData = [...servicesData, ...otherServicesData, ...knowledgeBaseData];

export const Services: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const allServices = getAllServices();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryParam]);

  const displayData = useMemo(() => {
    // If no category is selected, show only primary services Data (or combined if preferred)
    if (!categoryParam) return servicesData;
    
    let targetTitles: string[] = [];
    if (categoryParam === 'direct-tax') {
      targetTitles = ['DIRECT TAXATION'];
    } else if (categoryParam === 'gst') {
      targetTitles = ['GOODS & SERVICE TAX'];
    } else if (categoryParam === 'accounting') {
      targetTitles = ['GLOBAL TAXATION & BOOK KEEPING'];
    } else if (categoryParam === 'registration') {
      targetTitles = ['BUSINESS REGISTRATION', 'ROC COMPLIANCES'];
    } else if (categoryParam === 'audit') {
      targetTitles = ['AUDIT & ASSURANCE', 'OTHER AUDITS'];
    } else if (categoryParam === 'advisory') {
      targetTitles = ['INTERNATIONAL TAXATION', 'DIRECT TAXATION']; // Advisory items are mixed
    }

    if (targetTitles.length === 0) return servicesData;

    return combinedData.map(column => {
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
            <span>Service Directory</span>
          </div>
          <h1 className="service-title">Our Professional Services</h1>
          <p className="service-subtitle">
            Explore our complete range of taxation, compliance, audit, registration, and advisory services.
          </p>
          
          <div className="search-section">
            <SmartSearch services={allServices} />
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
