import React from 'react';
import './KnowledgeBaseHeader.css';

export interface StatCardData {
  value: React.ReactNode;
  label: string;
}

export interface InfoCardGridItem {
  label: string;
  value: React.ReactNode;
}

export interface KnowledgeBaseHeaderProps {
  infoTitle: string;
  infoIcon?: React.ReactNode;
  infoGrid: InfoCardGridItem[];
  statCards: StatCardData[];
}

export const KnowledgeBaseHeader: React.FC<KnowledgeBaseHeaderProps> = ({
  infoTitle,
  infoIcon,
  infoGrid,
  statCards
}) => {
  return (
    <>
      <div className="info-card">
        {infoIcon}
        <div>
          <h3>{infoTitle}</h3>
          <div className="info-card-grid">
            {infoGrid.map((item, index) => (
              <span key={index}><strong>{item.label}:</strong> {item.value}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="overview-grid">
        {statCards.map((stat, index) => (
          <div key={index} className="stat-card">
            {typeof stat.value === 'string' || typeof stat.value === 'number' ? (
              <span className="stat-value">{stat.value}</span>
            ) : (
              stat.value
            )}
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};
