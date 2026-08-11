import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import './InternalPageHero.css';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface CTAButton {
  label: string;
  path: string;
  primary?: boolean;
}

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface InternalPageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description: string;
  ctaButtons?: CTAButton[];
  stats?: StatItem[];
}

export const InternalPageHero: React.FC<InternalPageHeroProps> = ({
  breadcrumbs,
  title,
  description,
  ctaButtons = [],
  stats = []
}) => {
  const renderIcon = (iconName: string) => {
    // Dynamically render icon from lucide-react if it exists, otherwise fallback to CheckCircle
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.CheckCircle;
    return <Icon size={24} />;
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        const headerOffset = 100; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="internal-page-hero">
      <div className="container">
        
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.div 
            className="hero-breadcrumbs"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LucideIcons.Home size={14} />
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="breadcrumb-separator"><LucideIcons.ChevronRight size={14} /></span>}
                {crumb.path ? (
                  <Link to={crumb.path} className="breadcrumb-link">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="hero-title">{title}</h1>
          {description && <p className="hero-description">{description}</p>}
          
          {ctaButtons.length > 0 && (
            <div className="hero-actions">
              {ctaButtons.map((btn, index) => (
                <Link 
                  key={index} 
                  to={btn.path} 
                  className={`hero-btn ${btn.primary ? 'primary' : 'secondary'}`}
                  onClick={(e) => handleScroll(e, btn.path)}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}
          
          {stats.length > 0 && (
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat-item">
                  <div className="stat-icon">{renderIcon(stat.icon)}</div>
                  <div className="stat-details">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};
