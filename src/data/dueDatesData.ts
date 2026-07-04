// Real statutory compliance due dates (current snapshot, ported from the legacy
// compliance calendar). Update this list periodically. Dates are ISO (YYYY-MM-DD).
export interface DueDate {
  date: string;      // ISO date
  display: string;   // human-readable
  title: string;
  type: string;      // GST | TDS | Income Tax | PF/ESI | MCA | FEMA
}

export const dueDatesData: DueDate[] = [
  { date: '2026-07-07', display: '7 Jul 2026', title: 'Payment of TDS/TCS deducted in June', type: 'TDS' },
  { date: '2026-07-07', display: '7 Jul 2026', title: 'Return of External Commercial Borrowings (ECB) for June', type: 'FEMA' },
  { date: '2026-07-10', display: '10 Jul 2026', title: 'GSTR-7 – Monthly return by TDS deductors for June', type: 'GST' },
  { date: '2026-07-10', display: '10 Jul 2026', title: 'GSTR-8 – Monthly return by e-commerce operators for June', type: 'GST' },
  { date: '2026-07-11', display: '11 Jul 2026', title: 'GSTR-1 – Monthly return of outward supplies for June', type: 'GST' },
  { date: '2026-07-13', display: '13 Jul 2026', title: 'GSTR-1 (QRMP) – Quarterly outward supplies for Apr–Jun', type: 'GST' },
  { date: '2026-07-13', display: '13 Jul 2026', title: 'GSTR-6 – Input Service Distributor return for June', type: 'GST' },
  { date: '2026-07-15', display: '15 Jul 2026', title: 'E-payment of Provident Fund (PF) for June', type: 'PF/ESI' },
  { date: '2026-07-15', display: '15 Jul 2026', title: 'Payment of ESI for June', type: 'PF/ESI' },
  { date: '2026-07-15', display: '15 Jul 2026', title: 'FLA Annual Return (Foreign Liabilities & Assets) to RBI for FY 2025-26', type: 'FEMA' },
  { date: '2026-07-18', display: '18 Jul 2026', title: 'CMP-08 – Composition scheme tax payment for June quarter', type: 'GST' },
  { date: '2026-07-20', display: '20 Jul 2026', title: 'GSTR-3B – Summary return & tax payment for June (monthly filers)', type: 'GST' },
  { date: '2026-07-24', display: '24 Jul 2026', title: 'GSTR-3B – Quarterly summary return for Apr–Jun (QRMP filers)', type: 'GST' },
  { date: '2026-07-28', display: '28 Jul 2026', title: 'GSTR-11 – Return for persons with UIN (embassies etc.) for June', type: 'GST' },
  { date: '2026-07-31', display: '31 Jul 2026', title: 'QRMP scheme opt-in / opt-out for Jul–Sep quarter', type: 'GST' },
  { date: '2026-07-31', display: '31 Jul 2026', title: 'DPT-3 – Annual return of deposits by companies for FY 2025-26', type: 'MCA' },
];

// Returns whole days from today (local) to the given ISO date. Negative = past.
export function daysUntil(iso: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(iso + 'T00:00:00');
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

export function urgencyFor(daysLeft: number): 'high' | 'medium' | 'low' {
  if (daysLeft <= 5) return 'high';
  if (daysLeft <= 12) return 'medium';
  return 'low';
}
