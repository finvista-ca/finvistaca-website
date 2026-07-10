import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dueDatesData, daysUntil, urgencyFor } from '../../data/dueDatesData';
import './DueDateReminder.css';

export const DueDateReminder: React.FC = () => {
  const upcoming = dueDatesData
    .map((d) => ({ ...d, daysLeft: daysUntil(d.date) }))
    .filter((d) => d.daysLeft >= 0)
    .sort((a, b) => a.daysLeft - b.daysLeft);
  const items = (upcoming.length ? upcoming : dueDatesData.map((d) => ({ ...d, daysLeft: daysUntil(d.date) }))).slice(0, 4);

  return (
    <section className="section due-date-section dark-section">
      <div className="container">
        <div className="due-date-layout">

          <div className="due-date-info">
            <div className="calendar-illustration">
              <Calendar size={48} className="calendar-icon" />
            </div>
            <div>
              <h2 className="section-title">Compliance Calendar</h2>
              <p className="section-subtitle">
                Never miss a deadline. Keep track of all upcoming statutory compliance dates accurately and efficiently.
              </p>
              <Link to="/due-dates" className="btn btn-outline-light btn-md calendar-btn">
                View Full Calendar <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="timeline-horizontal-container">
            {items.map((item, index) => {
              const urgency = urgencyFor(item.daysLeft);
              return (
                <div key={index} className="timeline-horizontal-item">
                  <div className="timeline-marker-horizontal">
                    <div className={`timeline-dot urgency-${urgency}`}></div>
                  </div>

                  <div className="timeline-content premium-glass">
                    <div className="timeline-header">
                      <span className="timeline-type">{item.type}</span>
                      <span className={`days-left text-${urgency} bg-${urgency}`}>
                        {item.daysLeft === 0 ? 'Due today' : `${item.daysLeft} days left`}
                        <span className="status-text">
                          ({urgency === 'high' ? 'Urgent' : urgency === 'medium' ? 'Approaching' : 'Upcoming'})
                        </span>
                      </span>
                    </div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-date">{item.display}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
