import React, { useState } from 'react';
import { Search, Filter, BookOpen, Download, ExternalLink } from 'lucide-react';
import './ResourceLayout.css';

interface ResourceLayoutProps {
  title: string;
  description: string;
  data: string[][] | { href: string; text: string }[];
  type: 'table' | 'links';
}

export const ResourceLayout: React.FC<ResourceLayoutProps> = ({ title, description, data, type }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle table data
  const tableData = type === 'table' ? (data as string[][]) : [];
  const filteredTableData = tableData.filter(row => 
    row.some(cell => cell.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Handle links data
  const linksData = type === 'links' ? (data as { href: string; text: string }[]) : [];
  const filteredLinksData = linksData.filter(link => 
    link.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="resource-layout">
      {/* Hero Section */}
      <section className="resource-hero">
        <div className="container">
          <div className="hero-icon"><BookOpen size={40} /></div>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">{description}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="resource-main">
        <div className="container">
          
          {/* Controls Bar */}
          <div className="resource-controls glass-card">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder={`Search in ${title}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="action-buttons">
              <button className="btn btn-secondary">
                <Filter size={16} /> Filter
              </button>
              <button className="btn btn-secondary">
                <Download size={16} /> Export
              </button>
            </div>
          </div>

          {/* Data Presentation */}
          <div className="resource-content">
            {type === 'table' && (
              <div className="table-responsive glass-card">
                <table className="modern-table">
                  <thead>
                    <tr>
                      {tableData.length > 0 && tableData[0].map((_, i) => (
                        <th key={i}>Column {i + 1}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTableData.length > 0 ? (
                      filteredTableData.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={tableData[0]?.length || 1} className="text-center no-data">
                          No matching records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {type === 'links' && (
              <div className="links-grid">
                {filteredLinksData.length > 0 ? (
                  filteredLinksData.map((link, i) => (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="resource-link-card glass-card" key={i}>
                      <h4>{link.text}</h4>
                      <ExternalLink size={16} className="ext-icon" />
                    </a>
                  ))
                ) : (
                  <div className="no-data glass-card text-center">
                    No matching resources found.
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
