import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData';
import { otherServicesData } from '../../data/otherServicesData';
import { knowledgeBaseData } from '../../data/knowledgeBaseData';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Others Services', path: '/other-services' },
  { name: 'Knowledge Base', path: '/knowledge-base' },
  { name: 'GST', path: '/gst' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'News Feed', path: '/news' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Career', path: '/career' },
];

const gstItems = [
  { name: 'Acts', path: '/gst/gst-acts' },
  { name: 'Rules', path: '/gst/gst-rules' },
  { name: 'Circulars', path: '/gst/gst-circulars' },
  { name: 'Notifications', path: '/gst/gst-notifications' },
  { name: 'Forms', path: '/gst/gst-forms' },
  { name: 'Orders', path: '/gst/gst-orders' },
  { name: 'Instructions', path: '/gst/gst-instructions' },
  { name: 'HSN Code With Rate', path: '/gst/gst-hsn-codes' },
  { name: 'SAC Code', path: '/gst/gst-sac-codes' },
];

const calculatorItems = [
  { name: 'Kisan Vikas Patra', path: '/calculator/kisan-vikas-patra' },
  { name: 'Get Number Of Installment', path: '/calculator/installments' },
  { name: 'Equated Monthly Installment (EMI)', path: '/calculator/emi' },
  { name: 'House Rent Allowance (HRA)', path: '/calculator/hra' },
  { name: 'Fringe Benefit Tax (FBT)', path: '/calculator/fbt' },
  { name: 'Income Tax Calculator', path: '/calculator/income-tax' },
  { name: 'Home Loan Calculator', path: '/calculator/home-loan' },
  { name: 'Auto Loan Calculator', path: '/calculator/auto-loan' },
  { name: 'National Saving Certificates (NSC)', path: '/calculator/nsc' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [otherMegaMenuOpen, setOtherMegaMenuOpen] = useState(false);
  const [kbMegaMenuOpen, setKbMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOtherServicesOpen, setMobileOtherServicesOpen] = useState(false);
  const [mobileKbOpen, setMobileKbOpen] = useState(false);
  const [gstMenuOpen, setGstMenuOpen] = useState(false);
  const [mobileGstOpen, setMobileGstOpen] = useState(false);
  const [calcMenuOpen, setCalcMenuOpen] = useState(false);
  const [mobileCalcOpen, setMobileCalcOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  
  const hoverTimeoutRef = useRef<number | null>(null);
  const otherHoverTimeoutRef = useRef<number | null>(null);
  const kbHoverTimeoutRef = useRef<number | null>(null);
  const gstHoverTimeoutRef = useRef<number | null>(null);
  const calcHoverTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = window.setTimeout(() => {
      setMegaMenuOpen(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = window.setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const handleOtherMouseEnter = () => {
    if (otherHoverTimeoutRef.current) {
      window.clearTimeout(otherHoverTimeoutRef.current);
    }
    otherHoverTimeoutRef.current = window.setTimeout(() => {
      setOtherMegaMenuOpen(true);
    }, 100);
  };

  const handleOtherMouseLeave = () => {
    if (otherHoverTimeoutRef.current) {
      window.clearTimeout(otherHoverTimeoutRef.current);
    }
    otherHoverTimeoutRef.current = window.setTimeout(() => {
      setOtherMegaMenuOpen(false);
    }, 150);
  };

  const handleKbMouseEnter = () => {
    if (kbHoverTimeoutRef.current) {
      window.clearTimeout(kbHoverTimeoutRef.current);
    }
    kbHoverTimeoutRef.current = window.setTimeout(() => {
      setKbMegaMenuOpen(true);
    }, 100);
  };

  const handleKbMouseLeave = () => {
    if (kbHoverTimeoutRef.current) {
      window.clearTimeout(kbHoverTimeoutRef.current);
    }
    kbHoverTimeoutRef.current = window.setTimeout(() => {
      setKbMegaMenuOpen(false);
    }, 150);
  };

  const handleGstMouseEnter = () => {
    if (gstHoverTimeoutRef.current) {
      window.clearTimeout(gstHoverTimeoutRef.current);
    }
    gstHoverTimeoutRef.current = window.setTimeout(() => {
      setGstMenuOpen(true);
    }, 100);
  };

  const handleGstMouseLeave = () => {
    if (gstHoverTimeoutRef.current) {
      window.clearTimeout(gstHoverTimeoutRef.current);
    }
    gstHoverTimeoutRef.current = window.setTimeout(() => {
      setGstMenuOpen(false);
    }, 150);
  };

  const handleCalcMouseEnter = () => {
    if (calcHoverTimeoutRef.current) {
      window.clearTimeout(calcHoverTimeoutRef.current);
    }
    calcHoverTimeoutRef.current = window.setTimeout(() => {
      setCalcMenuOpen(true);
    }, 100);
  };

  const handleCalcMouseLeave = () => {
    if (calcHoverTimeoutRef.current) {
      window.clearTimeout(calcHoverTimeoutRef.current);
    }
    calcHoverTimeoutRef.current = window.setTimeout(() => {
      setCalcMenuOpen(false);
    }, 150);
  };

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setOtherMegaMenuOpen(false);
    setKbMegaMenuOpen(false);
    setGstMenuOpen(false);
    setCalcMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      {/* Top contact bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-contact">
            <a href="tel:+918143505094"><Phone size={13} /> +91 8143505094</a>
            <a href="tel:+917993856920"><Phone size={13} /> +91 7993856920</a>
            <a href="mailto:caramakishore@gmail.com" className="topbar-email"><Mail size={13} /> caramakishore@gmail.com</a>
          </div>
          <div className="topbar-social">
            <a href="https://www.linkedin.com/in/ramakishore-itla-609511308/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={14} /></a>
            <a href="https://x.com/ramakishoreitla" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaTwitter size={14} /></a>
            <a href="https://www.facebook.com/ramakishore.itla" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={14} /></a>
            <a href="https://www.instagram.com/irk_associates" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={14} /></a>
            <a href="https://wa.me/919866121656" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp size={14} /></a>
          </div>
        </div>
      </div>

      <div className="navbar-container">
        <div className="logos">
          <Link to="/" className="logo-link" aria-label="Home">
            <img 
              src="/finvista_temp.png" 
              alt="Finvista" 
              className="navbar-logo company-logo" 
              fetchPriority="high" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <li 
                    key={link.name} 
                    className="nav-item-dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      to={link.path} 
                      className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                    >
                      {link.name} <ChevronDown size={14} className="dropdown-icon" />
                    </Link>
                    
                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div 
                          className="mega-menu-wrapper"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="mega-menu">
                            <div className="container mega-menu-grid">
                              {servicesData.map((col, colIdx) => (
                                <div key={colIdx} className="mega-menu-column">
                                  {col.categories.map((cat, catIdx) => (
                                    <div key={catIdx} className="mega-menu-category">
                                      <h4 className="mega-menu-title">{cat.title}</h4>
                                      <ul className="mega-menu-list">
                                        {cat.items.map((item, itemIdx) => (
                                          <li key={itemIdx}>
                                            <Link 
                                              to={`/services/${item.slug}`} 
                                              className="mega-menu-link"
                                              onClick={() => setMegaMenuOpen(false)}
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              if (link.name === 'Others Services') {
                return (
                  <li 
                    key={link.name} 
                    className="nav-item-dropdown"
                    onMouseEnter={handleOtherMouseEnter}
                    onMouseLeave={handleOtherMouseLeave}
                  >
                    <Link 
                      to={link.path} 
                      className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/other-services') ? 'active' : ''}`}
                    >
                      {link.name} <ChevronDown size={14} className="dropdown-icon" />
                    </Link>
                    
                    {/* Other Services Mega Menu Dropdown */}
                    <AnimatePresence>
                      {otherMegaMenuOpen && (
                        <motion.div 
                          className="mega-menu-wrapper"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="mega-menu">
                            <div className="container mega-menu-grid-3">
                              {otherServicesData.map((col, colIdx) => (
                                <div key={colIdx} className="mega-menu-column">
                                  {col.categories.map((cat, catIdx) => (
                                    <div key={catIdx} className="mega-menu-category">
                                      <h4 className="mega-menu-title">{cat.title}</h4>
                                      <ul className="mega-menu-list">
                                        {cat.items.map((item, itemIdx) => (
                                          <li key={itemIdx}>
                                            <Link 
                                              to={`/services/${item.slug}`} 
                                              className="mega-menu-link"
                                              onClick={() => setOtherMegaMenuOpen(false)}
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              if (link.name === 'Knowledge Base') {
                return (
                  <li 
                    key={link.name} 
                    className="nav-item-dropdown"
                    onMouseEnter={handleKbMouseEnter}
                    onMouseLeave={handleKbMouseLeave}
                  >
                    <Link 
                      to={link.path} 
                      className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/knowledge-base') ? 'active' : ''}`}
                    >
                      {link.name} <ChevronDown size={14} className="dropdown-icon" />
                    </Link>
                    
                    {/* Knowledge Base Mega Menu Dropdown */}
                    <AnimatePresence>
                      {kbMegaMenuOpen && (
                        <motion.div 
                          className="mega-menu-wrapper"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="mega-menu">
                            <div className="container mega-menu-grid">
                              {knowledgeBaseData.map((col, colIdx) => (
                                <div key={colIdx} className="mega-menu-column">
                                  {col.categories.map((cat, catIdx) => (
                                    <div key={catIdx} className="mega-menu-category">
                                      <h4 className="mega-menu-title">{cat.title}</h4>
                                      <ul className="mega-menu-list">
                                        {cat.items.map((item, itemIdx) => (
                                          <li key={itemIdx}>
                                            {item.externalUrl ? (
                                              <a
                                                href={item.externalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mega-menu-link"
                                                onClick={() => setKbMegaMenuOpen(false)}
                                              >
                                                {item.name}
                                              </a>
                                            ) : (
                                              <Link 
                                                to={`/knowledge-base/${item.slug}`} 
                                                className="mega-menu-link"
                                                onClick={() => setKbMegaMenuOpen(false)}
                                              >
                                                {item.name}
                                              </Link>
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              if (link.name === 'GST') {
                return (
                  <li 
                    key={link.name} 
                    className="nav-item-dropdown nav-item-simple-dropdown"
                    onMouseEnter={handleGstMouseEnter}
                    onMouseLeave={handleGstMouseLeave}
                  >
                    <Link 
                      to={link.path} 
                      className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/gst') ? 'active' : ''}`}
                    >
                      {link.name} <ChevronDown size={14} className="dropdown-icon" />
                    </Link>
                    
                    <AnimatePresence>
                      {gstMenuOpen && (
                        <motion.div 
                          className="simple-dropdown-wrapper"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="simple-dropdown-menu">
                            <ul className="simple-dropdown-list">
                              {gstItems.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    to={item.path} 
                                    className="simple-dropdown-link"
                                    onClick={() => setGstMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              if (link.name === 'Calculator') {
                return (
                  <li 
                    key={link.name} 
                    className="nav-item-dropdown nav-item-simple-dropdown"
                    onMouseEnter={handleCalcMouseEnter}
                    onMouseLeave={handleCalcMouseLeave}
                  >
                    <Link 
                      to={link.path} 
                      className={`nav-link nav-link-dropdown ${location.pathname.startsWith('/calculator') ? 'active' : ''}`}
                    >
                      {link.name} <ChevronDown size={14} className="dropdown-icon" />
                    </Link>
                    
                    <AnimatePresence>
                      {calcMenuOpen && (
                        <motion.div 
                          className="simple-dropdown-wrapper"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="simple-dropdown-menu">
                            <ul className="simple-dropdown-list">
                              {calculatorItems.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    to={item.path} 
                                    className="simple-dropdown-link"
                                    onClick={() => setCalcMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav glass"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                if (link.name === 'Services') {
                  return (
                    <li key={link.name} className="mobile-nav-item">
                      <div 
                        className={`mobile-nav-link mobile-dropdown-toggle ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileServicesOpen(!mobileServicesOpen);
                        }}
                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        {link.name} 
                        <ChevronDown 
                          size={16} 
                          style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} 
                        />
                      </div>
                      
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div 
                            className="mobile-mega-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            {servicesData.map((col, colIdx) => (
                              <div key={colIdx} className="mobile-mega-column">
                                {col.categories.map((cat, catIdx) => {
                                  const isExpanded = expandedMobileCategory === cat.title;
                                  return (
                                    <div key={catIdx} className="mobile-mega-category">
                                      <div 
                                        className="mobile-mega-category-header"
                                        onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.title)}
                                      >
                                        <h4 className="mobile-mega-title">{cat.title}</h4>
                                        <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                                      </div>
                                      
                                      <AnimatePresence>
                                        {isExpanded && (
                                          <motion.ul 
                                            className="mobile-mega-list"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                          >
                                            {cat.items.map((item, itemIdx) => (
                                              <li key={itemIdx}>
                                                <Link 
                                                  to={`/services/${item.slug}`} 
                                                  className="mobile-mega-link"
                                                >
                                                  {item.name}
                                                </Link>
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
                    </li>
                  );
                }

                if (link.name === 'Others Services') {
                  return (
                    <li key={link.name} className="mobile-nav-item">
                      <div 
                        className={`mobile-nav-link mobile-dropdown-toggle ${location.pathname.startsWith('/other-services') ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileOtherServicesOpen(!mobileOtherServicesOpen);
                        }}
                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        {link.name} 
                        <ChevronDown 
                          size={16} 
                          style={{ transform: mobileOtherServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} 
                        />
                      </div>
                      
                      <AnimatePresence>
                        {mobileOtherServicesOpen && (
                          <motion.div 
                            className="mobile-mega-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            {otherServicesData.map((col, colIdx) => (
                              <div key={colIdx} className="mobile-mega-column">
                                {col.categories.map((cat, catIdx) => {
                                  const isExpanded = expandedMobileCategory === cat.title;
                                  return (
                                    <div key={catIdx} className="mobile-mega-category">
                                      <div 
                                        className="mobile-mega-category-header"
                                        onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.title)}
                                      >
                                        <h4 className="mobile-mega-title">{cat.title}</h4>
                                        <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                                      </div>
                                      
                                      <AnimatePresence>
                                        {isExpanded && (
                                          <motion.ul 
                                            className="mobile-mega-list"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                          >
                                            {cat.items.map((item, itemIdx) => (
                                              <li key={itemIdx}>
                                                <Link 
                                                  to={`/services/${item.slug}`} 
                                                  className="mobile-mega-link"
                                                >
                                                  {item.name}
                                                </Link>
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
                    </li>
                  );
                }

                if (link.name === 'Knowledge Base') {
                  return (
                    <li key={link.name} className="mobile-nav-item">
                      <div 
                        className={`mobile-nav-link mobile-dropdown-toggle ${location.pathname.startsWith('/knowledge-base') ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileKbOpen(!mobileKbOpen);
                        }}
                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        {link.name} 
                        <ChevronDown 
                          size={16} 
                          style={{ transform: mobileKbOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} 
                        />
                      </div>
                      
                      <AnimatePresence>
                        {mobileKbOpen && (
                          <motion.div 
                            className="mobile-mega-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            {knowledgeBaseData.map((col, colIdx) => (
                              <div key={colIdx} className="mobile-mega-column">
                                {col.categories.map((cat, catIdx) => {
                                  const isExpanded = expandedMobileCategory === cat.title;
                                  return (
                                    <div key={catIdx} className="mobile-mega-category">
                                      <div 
                                        className="mobile-mega-category-header"
                                        onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.title)}
                                      >
                                        <h4 className="mobile-mega-title">{cat.title}</h4>
                                        <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                                      </div>
                                      
                                      <AnimatePresence>
                                        {isExpanded && (
                                          <motion.ul 
                                            className="mobile-mega-list"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                          >
                                            {cat.items.map((item, itemIdx) => (
                                              <li key={itemIdx}>
                                                {item.externalUrl ? (
                                                  <a
                                                    href={item.externalUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mobile-mega-link"
                                                  >
                                                    {item.name}
                                                  </a>
                                                ) : (
                                                  <Link 
                                                    to={`/knowledge-base/${item.slug}`} 
                                                    className="mobile-mega-link"
                                                  >
                                                    {item.name}
                                                  </Link>
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
                    </li>
                  );
                }

                if (link.name === 'GST') {
                  return (
                    <li key={link.name} className="mobile-nav-item">
                      <div 
                        className={`mobile-nav-link mobile-dropdown-toggle ${location.pathname.startsWith('/gst') ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileGstOpen(!mobileGstOpen);
                        }}
                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        {link.name} 
                        <ChevronDown 
                          size={16} 
                          style={{ transform: mobileGstOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} 
                        />
                      </div>
                      
                      <AnimatePresence>
                        {mobileGstOpen && (
                          <motion.div 
                            className="mobile-mega-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <ul className="mobile-mega-list" style={{ padding: '0.5rem 0' }}>
                              {gstItems.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    to={item.path} 
                                    className="mobile-mega-link"
                                    style={{ paddingLeft: '2.5rem' }}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                if (link.name === 'Calculator') {
                  return (
                    <li key={link.name} className="mobile-nav-item">
                      <div 
                        className={`mobile-nav-link mobile-dropdown-toggle ${location.pathname.startsWith('/calculator') ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileCalcOpen(!mobileCalcOpen);
                        }}
                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        {link.name} 
                        <ChevronDown 
                          size={16} 
                          style={{ transform: mobileCalcOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} 
                        />
                      </div>
                      
                      <AnimatePresence>
                        {mobileCalcOpen && (
                          <motion.div 
                            className="mobile-mega-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <ul className="mobile-mega-list" style={{ padding: '0.5rem 0' }}>
                              {calculatorItems.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link 
                                    to={item.path} 
                                    className="mobile-mega-link"
                                    style={{ paddingLeft: '2.5rem' }}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={link.name} className="mobile-nav-item">
                    <Link 
                      to={link.path} 
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
