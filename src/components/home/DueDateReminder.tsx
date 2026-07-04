import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import './DueDateReminder.css';

const dueDates = [
  {
    id: 1,
    title: 'GSTR-3B Filing',
    date: '20th Oct 2023',
    daysLeft: 2,
    type: 'GST',
    urgency: 'high'
  },
  {
    id: 2,
    title: 'Income Tax Return (Audit Cases)',
    date: '31st Oct 2023',
    daysLeft: 13,
    type: 'Income Tax',
    urgency: 'medium'
  },
  {
    id: 3,
    title: 'TDS/TCS Payment',
    date: '7th Nov 2023',
    daysLeft: 20,
    type: 'TDS',
    urgency: 'low'
  }
];

export const DueDateReminder: React.FC = () => {
  return (
    <section className="section due-date-section bg-light">
      <div className="container">
        <div className="due-date-layout">
          
          <div className="due-date-info">
            <div className="calendar-illustration">
              <Calendar size={48} className="calendar-icon" />
            </div>
            <div>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Compliance Calendar</h2>
              <p className="section-subtitle">
                Never miss a deadline. Keep track of all upcoming statutory compliance dates accurately and efficiently.
              </p>
            </div>
          </div>

          <div className="timeline-container">
            {dueDates.map((item, index) => (
              <div key={item.id} className="timeline-grid-item">
                
                <div className="timeline-marker">
                  <div className={`timeline-dot urgency-${item.urgency}`}></div>
                  {index < dueDates.length - 1 && <div className="timeline-connector"></div>}
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-header">
                    <span className="timeline-type">{item.type}</span>
                    <span className={`days-left text-${item.urgency} status-badge bg-${item.urgency}`}>
                      <Clock size={14} /> 
                      {item.daysLeft} days left 
                      <span className="status-text">
                        ({item.urgency === 'high' ? 'Urgent' : item.urgency === 'medium' ? 'Approaching' : 'Upcoming'})
                      </span>
                    </span>
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-date">{item.date}</div>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
