import React from 'react';
import { Home, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

interface ComingSoonProps {
  pageName: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ pageName }) => {
  return (
    <div className="coming-soon-container animate-fade-in">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          <Home size={16} />
          <span>Home</span>
        </Link>
        <ChevronRight size={16} className="breadcrumb-separator" />
        <span className="breadcrumb-current">{pageName}</span>
      </div>

      <div className="coming-soon-content glass">
        <div className="icon-wrapper">
          <Clock size={48} className="icon-clock" />
        </div>
        <h1>{pageName}</h1>
        <p>Content will be added soon.</p>
        <Link to="/" className="btn btn-primary btn-md" style={{ marginTop: '2rem' }}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};
