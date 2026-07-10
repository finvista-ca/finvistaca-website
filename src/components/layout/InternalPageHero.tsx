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

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1>{title}</h1>
          <p className="hero-description">{description}</p>
        </motion.div>

        {/* CTA Buttons */}
        {ctaButtons.length > 0 && (
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {ctaButtons.map((btn, idx) => {
              if (btn.path.startsWith('#')) {
                return (
                  <a
                    key={idx}
                    href={btn.path}
                    className={`btn ${btn.primary ? 'btn-primary' : 'btn-outline'}`}
                    onClick={(e) => handleScroll(e, btn.path)}
                  >
                    {btn.label} <LucideIcons.ArrowRight size={18} />
                  </a>
                );
              }
              return (
                <Link 
                  key={idx} 
                  to={btn.path} 
                  className={`btn ${btn.primary ? 'btn-primary' : 'btn-outline'}`}
                >
                  {btn.label} <LucideIcons.ArrowRight size={18} />
                </Link>
              );
            })}
          </motion.div>
        )}

        {/* Stats */}
        {stats.length > 0 && (
          <motion.div 
            className="hero-stats-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="hero-glass-stat">
                <div className="stat-icon-wrapper">
                  {renderIcon(stat.icon)}
                </div>
                <div className="stat-text">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
