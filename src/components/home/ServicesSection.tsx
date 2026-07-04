import React from 'react';
import { FileSearch, FileCheck, Coins, UserCog, ShieldCheck, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const coreServices = [
  {
    id: 'direct-tax',
    title: 'Direct Taxation Services',
    description: 'Income Tax Return (ITR) Filing for Individuals, Firms, Companies, Trusts & HUFs',
    icon: FileSearch,
    path: '/services?category=direct-tax'
  },
  {
    id: 'gst',
    title: 'Indirect Taxation Services (GST)',
    description: 'GST Audit & Annual Return Filing (GSTR-9/9C)',
    icon: FileCheck,
    path: '/services?category=gst'
  },
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    description: 'Preparation of Final Accounts (P&L Statement, Balance Sheet)',
    icon: Coins,
    path: '/services?category=accounting'
  },
  {
    id: 'registration',
    title: 'Business Registration & Compliance',
    description: 'Company, LLP, Partnership & Proprietorship Registration',
    icon: UserCog,
    path: '/services?category=registration'
  },
  {
    id: 'audit',
    title: 'Audit & Assurance Services',
    description: 'Statutory Audits for Companies, Trusts & NGOs',
    icon: ShieldCheck,
    path: '/services?category=audit'
  },
  {
    id: 'advisory',
    title: 'Financial & Investment Advisory',
    description: 'Personal & Business Tax Planning, Investment & Retirement Planning',
    icon: Calculator,
    path: '/services?category=advisory'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="section services-section bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Professional financial, taxation, and compliance solutions tailored for individuals, startups, and businesses.
          </p>
        </div>

        <div className="services-grid">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link to={service.path} key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <Icon size={20} strokeWidth={1.4} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
