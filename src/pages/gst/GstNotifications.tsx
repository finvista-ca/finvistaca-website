import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "2026",
    "01/2026-Central Tax (Rate)",
    "Seeks to amend Notification No 9/2025 - Central tax (Rate) to align them with changes made vide Finance Act, 2026",
    "",
    ""
  ],
  [
    "2026",
    "01/2026-Central Tax",
    "Seeks to extends the due date for furnishing the return in FORM GSTR-3B for the month of March, 2026 till the twenty-first day of April, 2026",
    "",
    ""
  ],
  [
    "2025",
    "03/2025-Compensation Cess (Rate)",
    "Seeks to amend Notification 01/2025- Compensation Cess Tax (Rate), to prescribe GST rates on tobacco products.",
    "",
    ""
  ],
  [
    "2025",
    "02/2025-Compensation Cess (Rate)",
    "Seeks to amend Notification No. 1/2017- Compensation Cess (Rate) dated 28.06.2017.",
    "",
    ""
  ],
  [
    "2025",
    "01/2025-Compensation Cess (Rate)",
    "Seeks to prescribe Compensation cess rate of 0.1% on supply of taxable goods by a registered supplier to a registered recipient for export subject to specified conditions.",
    "",
    ""
  ],
  [
    "2024",
    "01/2024-Compensation Cess (Rate)",
    "Seeks to provide exemption from Compensation Cess on supplies under heading 2202 by URCs to authorised customers.",
    "",
    ""
  ],
  [
    "2025",
    "19/2025-Union Territory Tax (Rate)",
    "Seeks to amend Notification 09/2025- Integrated Tax (Rate), to prescribe GST rates on tobacco products",
    "",
    ""
  ],
  [
    "2025",
    "18/2025-Union Territory Tax (Rate)",
    "Seeks to amend notification No. 26/2018-Union Territory Tax(Rate) dated 31.12.2018",
    "",
    ""
  ],
  [
    "2025",
    "17/2025-Union Territory Tax (Rate)",
    "Seeks to amend Notification No 17/2017 - Union Territory (Rate), dated 28th June, 2017 to implement the recommendations of the 56th GST Council.",
    "",
    ""
  ],
  [
    "2025",
    "16/2025-Union Territory Tax (Rate)",
    "Seeks to amend Notification 12/2017- Union Territory Tax (Rate), dated 28th June, 2017 to implement the recommendations of the 56th GST Council.",
    "",
    ""
  ],
  [
    "2025",
    "15/2025-Union Territory Tax (Rate)",
    "Seeks to amend Notification No 11/2017- Union Territory Tax (Rate)dated 28th June, 2017 to implement the recommendations of the 56th GST Council.",
    "",
    ""
  ],
  [
    "2025",
    "14/2025-Union Territory Tax (Rate)",
    "Seeks to notify GST rate for bricks.",
    "",
    ""
  ],
  [
    "2025",
    "13/2025-Union Territory Tax (Rate)",
    "Seeks to amend Notification No. 21/2018- Union Territory Tax (Rate) dated 26.07.2018.",
    "",
    ""
  ],
  [
    "2025",
    "12/2025-Union Territory Tax (Rate)",
    "Seeks to amend Notification No. 8/2018- Union Territory Tax (Rate) dated 25.01.2018.",
    "",
    ""
  ],
  [
    "2025",
    "11/2025-Union Territory Tax (Rate)",
    "Seeks to amend Notification No. 3/2017- Union Territory Tax (Rate) dated 28.06.2017.",
    "",
    ""
  ],
  [
    "2025",
    "10/2025-Union Territory Tax (Rate)",
    "Seeks to supersede Notification No. 2/2017- Union Territory Tax (Rate) dated 28.06.2017.",
    "",
    ""
  ],
  [
    "2025",
    "Corrigendum",
    "Corrigendum to Notification No. 10/2025 – Union Territory Tax (Rate) dated 17.09.2025",
    "",
    ""
  ],
  [
    "2025",
    "09/2025-Union Territory Tax (Rate)",
    "Seeks to supersede Notification No. 1/2017- Union Territory Tax (Rate) dated 28.06.2017.",
    "",
    ""
  ],
  [
    "2025",
    "Corrigendum",
    "Corrigendum to Notification No. 9/2025 – Union Territory Tax (Rate) dated 17.09.2025",
    "",
    ""
  ],
  [
    "2025",
    "19/2025-Integrated Tax (Rate)",
    "Seeks to amend Notification 09/2025- Integrated Tax (Rate), to prescribe GST rates on tobacco products.",
    "",
    ""
  ]
];

export const GstNotifications: React.FC = () => {
  return (
    <ResourceLayout 
      title="Gst Notifications"
      description="View and search through Gst Notifications documents."
      data={pageData}
      type="table"
    />
  );
};
