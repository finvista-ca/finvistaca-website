import React, { useState } from 'react';
import { CalendarClock } from 'lucide-react';
import { dueDatesData, daysUntil, urgencyFor } from '../data/dueDatesData';
import { InternalPageHero } from '../components/layout/InternalPageHero';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const DueDates: React.FC = () => {
  const availableMonths = Array.from(new Set(dueDatesData.map((d) => new Date(d.date + 'T00:00:00').getMonth()))).sort((a, b) => a - b);
  const [month, setMonth] = useState<number | 'all'>(availableMonths[0] ?? 'all');

  const rows = dueDatesData
    .filter((d) => month === 'all' || new Date(d.date + 'T00:00:00').getMonth() === month)
    .map((d) => ({ ...d, daysLeft: daysUntil(d.date) }));

  return (
    <div className="resource-layout" style={{ paddingTop: '90px' }}>
      <InternalPageHero
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Due Dates' }
        ]}
        title="Compliance Due Date Calendar"
        description="Upcoming statutory due dates for GST, TDS, PF/ESI, MCA and more."
      />

      <section className="resource-main">
        <div className="container">
          <div className="categories-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <button className={`category-chip ${month === 'all' ? 'active' : ''}`} onClick={() => setMonth('all')}>All</button>
            {MONTHS.map((m, i) => (
              availableMonths.includes(i) ? (
                <button key={m} className={`category-chip ${month === i ? 'active' : ''}`} onClick={() => setMonth(i)}>{m}</button>
              ) : null
            ))}
          </div>

          <div className="table-responsive glass-card">
            <table className="modern-table">
              <thead>
                <tr><th>Date</th><th>Category</th><th>Compliance</th><th>Status</th></tr>
              </thead>
              <tbody>
                {rows.length ? rows.map((r, i) => {
                  const urgency = urgencyFor(r.daysLeft);
                  return (
                    <tr key={i}>
                      <td style={{ whiteSpace: 'nowrap' }}>{r.display}</td>
                      <td>{r.type}</td>
                      <td>{r.title}</td>
                      <td style={{ whiteSpace: 'nowrap' }} className={`text-${urgency}`}>
                        {r.daysLeft < 0 ? 'Past' : r.daysLeft === 0 ? 'Due today' : `${r.daysLeft} days left`}
                      </td>
                    </tr>
                  );
                }) : (
                  <tr><td colSpan={4} className="text-center no-data">No due dates for this month.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
