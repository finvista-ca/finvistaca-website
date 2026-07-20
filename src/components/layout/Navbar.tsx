import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { servicesData, auditServicesData } from '../../data/servicesData';
import { otherServicesData } from '../../data/otherServicesData';
import { knowledgeBaseData } from '../../data/knowledgeBaseData';
import { gstData } from '../../data/gstData';
import { calculatorsList } from '../../data/calculatorData';
import './Navbar.css';

const gstDropdownItems = [
  { name: 'GST Acts', slug: 'gst-acts' },
  { name: 'GST Rules', slug: 'gst-rules' },
  { name: 'GST Notifications', slug: 'gst-notifications' },
  { name: 'GST Circulars', slug: 'gst-circulars' },
  { name: 'GST Orders', slug: 'gst-instructions' },
  { name: 'GST Forms', slug: 'gst-forms' },
  { name: 'HSN Codes', slug: 'gst-hsn-codes' },
  { name: 'SAC Codes', slug: 'gst-sac-codes' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Others Services', path: '/others-services' },
  { name: 'Knowledge Base', path: '/knowledge-base' },
  { name: 'GST', path: '/gst' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'News Feed', path: '/news' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Career', path: '/career' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop Hover States
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // Mobile Accordion States
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  
  const hoverTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => setActiveMenu(menuName), 100);
  };
  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  const renderMegaMenu = (data: any[], basePath: string, menuName: string, bottomData?: any[]) => {
    const isOpen = activeMenu === menuName;
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div className="mega-menu-wrapper" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2, ease: "easeOut" }}>
            <div className="mega-menu">
              <div className="container mega-menu-grid">
                {data.map((col, colIdx) => (
                  <div key={colIdx} className="mega-menu-column">
                    {col.categories.map((cat: any, catIdx: number) => (
                      <div key={catIdx} className="mega-menu-category">
                        <h4 className="mega-menu-title">{cat.title}</h4>
                        <ul className="mega-menu-list">
                          {cat.items.map((item: any, itemIdx: number) => (
                            <li key={itemIdx}>
                              {item.externalUrl ? (
                                <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="mega-menu-link" onClick={() => setActiveMenu(null)}>{item.name}</a>
                              ) : (
                                <Link to={`${basePath}/${item.slug}`} className="mega-menu-link" onClick={() => setActiveMenu(null)}>{item.name}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {bottomData && bottomData.length > 0 && (
                <div className="container">
                  <div className="mega-menu-bottom-section" style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="mega-menu-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                      {bottomData.map((col, colIdx) => (
                        <div key={`bottom-col-${colIdx}`} className="mega-menu-column">
                          {col.categories.map((cat: any, catIdx: number) => (
                            <div key={`bottom-cat-${catIdx}`} className="mega-menu-category">
                              <h4 className="mega-menu-title">{cat.title}</h4>
                              <ul className="mega-menu-list">
                                {cat.items.map((item: any, itemIdx: number) => (
                                  <li key={`bottom-item-${itemIdx}`}>
                                    {item.externalUrl ? (
                                      <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="mega-menu-link" onClick={() => setActiveMenu(null)}>{item.name}</a>
                                    ) : (
                                      <Link to={`${basePath}/${item.slug}`} className="mega-menu-link" onClick={() => setActiveMenu(null)}>{item.name}</Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const renderSimpleDropdown = (items: any[], basePath: string, menuName: string) => {
    const isOpen = activeMenu === menuName;
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div className="simple-dropdown-wrapper" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2, ease: "easeOut" }}>
            <div className="simple-dropdown-menu">
              <ul className="simple-dropdown-list">
                {items.map((item: any, itemIdx: number) => (
                  <li key={itemIdx}>
                    <Link to={`${basePath}/${item.id || item.slug}`} className="simple-dropdown-link" onClick={() => setActiveMenu(null)}>{item.title || item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const renderMobileMegaMenu = (data: any[], basePath: string, menuName: string, bottomData?: any[]) => {
    const isOpen = mobileActiveMenu === menuName;
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div className="mobile-mega-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
            {data.map((col, colIdx) => (
              <div key={colIdx} className="mobile-mega-column">
                {col.categories.map((cat: any, catIdx: number) => {
                  const isExpanded = expandedMobileCategory === cat.title;
                  return (
                    <div key={catIdx} className="mobile-mega-category">
                      <div className="mobile-mega-category-header" onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.title)}>
                        <h4 className="mobile-mega-title">{cat.title}</h4>
                        <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} strokeWidth={1.5} />
                      </div>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.ul className="mobile-mega-list" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                            {cat.items.map((item: any, itemIdx: number) => (
                              <li key={itemIdx}>
                                {item.externalUrl ? (
                                  <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="mobile-mega-link" onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
                                ) : (
                                  <Link to={`${basePath}/${item.slug}`} className="mobile-mega-link" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                                )}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ))}
            {bottomData && bottomData.length > 0 &&
              bottomData.map((col, colIdx) => (
                <div key={`mobile-bottom-${colIdx}`} className="mobile-mega-column">
                  {col.categories.map((cat: any, catIdx: number) => {
                    const isExpanded = expandedMobileCategory === cat.title;
                    return (
                      <div key={`mobile-bottom-cat-${catIdx}`} className="mobile-mega-category">
                        <div className="mobile-mega-category-header" onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.title)}>
                          <h4 className="mobile-mega-title">{cat.title}</h4>
                          <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} strokeWidth={1.5} />
                        </div>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.ul className="mobile-mega-list" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                              {cat.items.map((item: any, itemIdx: number) => (
                                <li key={`mobile-bottom-item-${itemIdx}`}>
                                  {item.externalUrl ? (
                                    <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="mobile-mega-link" onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
                                  ) : (
                                    <Link to={`${basePath}/${item.slug}`} className="mobile-mega-link" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                                  )}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="navbar-container">
        <div className="logos">
          <Link to="/" className="logo-link" aria-label="Home">
            <img src="/finvista-logo.jpeg" alt="FinvistaCA" className="navbar-logo company-logo" fetchPriority="high" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const hasDropdown = ['Services', 'Others Services', 'Knowledge Base', 'GST', 'Calculator'].includes(link.name);
              if (hasDropdown) {
                return (
                  <li key={link.name} className={`nav-item-dropdown ${['Calculator', 'GST'].includes(link.name) ? 'nav-item-simple-dropdown' : ''}`} onMouseEnter={() => handleMouseEnter(link.name)} onMouseLeave={handleMouseLeave}>
                    <Link to={link.path} className={`nav-link nav-link-dropdown ${location.pathname.startsWith(link.path) ? 'active' : ''}`}>
                      {link.name} <ChevronDown size={14} className="dropdown-icon" strokeWidth={1.5} />
                    </Link>
                    {link.name === 'Services' && renderMegaMenu(servicesData, '/services', link.name, auditServicesData)}
                    {link.name === 'Others Services' && renderMegaMenu(otherServicesData, '/others-services', link.name)}
                    {link.name === 'Knowledge Base' && renderMegaMenu(knowledgeBaseData, '/knowledge-base', link.name)}
                    {link.name === 'GST' && renderSimpleDropdown(gstDropdownItems, '/gst', link.name)}
                    {link.name === 'Calculator' && renderSimpleDropdown(calculatorsList, '/calculator', link.name)}
                  </li>
                );
              }

              return (
                <li key={link.name}>
                  <Link to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="navbar-cta-wrapper" style={{ marginLeft: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <Link to="/contact" className="btn-primary-small">Schedule Consultation</Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="mobile-nav glass" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const hasDropdown = ['Services', 'Others Services', 'Knowledge Base', 'GST', 'Calculator'].includes(link.name);
                
                if (hasDropdown) {
                  return (
                    <li key={link.name} className="mobile-nav-item">
                      <div className={`mobile-nav-link mobile-dropdown-toggle ${location.pathname.startsWith(link.path) ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setMobileActiveMenu(mobileActiveMenu === link.name ? null : link.name); }} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {link.name} <ChevronDown size={16} style={{ transform: mobileActiveMenu === link.name ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} strokeWidth={1.5} />
                      </div>
                      {link.name === 'Services' && renderMobileMegaMenu(servicesData, '/services', link.name, auditServicesData)}
                      {link.name === 'Others Services' && renderMobileMegaMenu(otherServicesData, '/others-services', link.name)}
                      {link.name === 'Knowledge Base' && renderMobileMegaMenu(knowledgeBaseData, '/knowledge-base', link.name)}
                      
                      {link.name === 'GST' && (
                        <AnimatePresence>
                          {mobileActiveMenu === link.name && (
                            <motion.div className="mobile-mega-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                              <ul className="mobile-mega-list" style={{ padding: '0.5rem 0' }}>
                                {gstDropdownItems.map((item: any, itemIdx: number) => (
                                  <li key={itemIdx}><Link to={`/gst/${item.slug}`} className="mobile-mega-link" style={{ paddingLeft: '2.5rem' }} onClick={() => setMobileMenuOpen(false)}>{item.name}</Link></li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}

                      {link.name === 'Calculator' && (
                        <AnimatePresence>
                          {mobileActiveMenu === link.name && (
                            <motion.div className="mobile-mega-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                              <ul className="mobile-mega-list" style={{ padding: '0.5rem 0' }}>
                                {calculatorsList.map((item: any, itemIdx: number) => (
                                  <li key={itemIdx}><Link to={`/calculator/${item.id}`} className="mobile-mega-link" style={{ paddingLeft: '2.5rem' }} onClick={() => setMobileMenuOpen(false)}>{item.title}</Link></li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.name} className="mobile-nav-item">
                    <Link to={link.path} className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>
                  </li>
                );
              })}
              <li className="mobile-nav-item" style={{ padding: '1rem 1.5rem' }}>
                <Link to="/contact" className="btn-primary" style={{ width: '100%' }} onClick={() => setMobileMenuOpen(false)}>Schedule Consultation</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
