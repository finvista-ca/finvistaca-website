import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "Notification No. 70/2026 [F. No. 500/Misc./S10(23FE)/FT&TR-II] / SO 2768(E)",
    "01/06/2026"
  ],
  [
    "Notification No. 69/2026-CBDT[F. No. 203/18/2025/ITA-II] / SO 2752(E)",
    "30/05/2026"
  ],
  [
    "Notification No. 66/2026-CBDT[F. No. 203/15/2025/ITA-II] / SO 2749(E)",
    "30/05/2026"
  ],
  [
    "Notification No. 67/2026-CBDT[F. No. 203/16/2025/ITA-II] / SO 2750(E)",
    "30/05/2026"
  ],
  [
    "Notification No. 68/2026-CBDT[F. No. 203/17/2025/ITA-II] / SO 2751(E)",
    "30/05/2026"
  ],
  [
    "Notification No. 6/2026:",
    "12/05/2026"
  ],
  [
    "Notification No. 64/2026 [F. No. 370142/41/2025-TPL] / GSR 286(E)",
    "16/04/2026"
  ],
  [
    "Notification No. 63/2026 [F. No. 370142/13/2026-TPL]/ GSR 268(E)",
    "10/04/2026"
  ],
  [
    "Notification No. 60/2026 [F. No. 370142/8/2026-TPL]/ GSR 265(E)",
    "10/04/2026"
  ],
  [
    "Notification No. 61/2026 [F. No. 370142/9/2026-TPL] / GSR 266(E)",
    "10/04/2026"
  ],
  [
    "Notification No. 62/2026 [F. No. 370142/10/2026-TPL]/ GSR 267(E)",
    "10/04/2026"
  ],
  [
    "Notification No. 58/2026 [F. No. 370142/6/2026-TPL] / GSR 263(E)",
    "10/04/2026"
  ],
  [
    "Notification No. 59/2026 [F. No. 370142/7/2026-TPL] / GSR 264(E)",
    "10/04/2026"
  ],
  [
    "Notification No. 57/2026 [F. No. 370142/5/2026-TPL] / GSR 262(E)",
    "10/04/2026"
  ],
  [
    "Notification No. 56/2026 [F. No. 500/22/2022-FT&TR-V] / S.O. 1715(E)",
    "02/04/2026"
  ],
  [
    "Notification No. 54/2026 [F. No. 370142/15/2026-TPL] / G.S.R. 240(E)",
    "31/03/2026"
  ],
  [
    "Notification No. 55/2026 [F. No. 370142/15/2026-TPL] / G.S.R. 241(E)",
    "31/03/2026"
  ],
  [
    "Notification No. 48/2026 [F. No. 370142/8/2026-TPL] / G.S.R. 229(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 49/2026 [F. No. 370142/9/2026-TPL] / G.S.R. 230(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 50/2026 [F. No. 370142/10/2026-TPL] / G.S.R. 231(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 51/2026 [F. No.370142/12 /2026-TPL] / G.S.R. 232(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 52/2026 [F.No. 370142/13/2026-TPL] / G.S.R. 233(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 53/2026 [F.No.300195/48/2025-ITA-I] / SO 1664(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 39/2026 [F. No. CBDT/1/2022-FT&TR-V Section-CBDT(Part-1)] / SO 1647(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 40/2026 [F. No. 203/07/2025/ITA-II] / SO 1657(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 41/2026 [F. No. 300195/54/2024-ITA-I] / SO 1653(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 42/2026 [F. No 203/09/2025/ITA-II] / SO 1658(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 43/2026 [F. No. 203/11/2025/ITA-II] / SO 1659(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 44/2026 [F.No.300196/92/2024-ITA-I] / SO 1656(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 45/2026 [F. No. 370142/5/2026-TPL] / G.S.R. 226(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 46/2026 [F. No. 370142/6/2026-TPL] / G.S.R. 227(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 47/2026 [F. No. 370142/7/2026-TPL] / G.S.R. 228(E)",
    "30/03/2026"
  ],
  [
    "Notification No. 01/CPC(TDS)/2026",
    "28/03/2026"
  ],
  [
    "Notification No. 37/2026 [F. No. 300196/2/2026-ITA-I] / SO 1626(E)",
    "27/03/2026"
  ],
  [
    "Notification No. 38/2026 [F.No.300196/4/2025-ITA-I] / SO 1627(E)",
    "27/03/2026"
  ],
  [
    "Notification No. 33/2026 [F.No. 300195/48/2024-ITA-I] / SO 1622(E)",
    "27/03/2026"
  ],
  [
    "Notification No. 34/2026 [F.No. 300195/38/2024-ITA-I] / SO 1623(E)",
    "27/03/2026"
  ],
  [
    "Notification No. 35/2026 [F.No.300196/52/2024-ITA-I] / SO 1625(E)",
    "27/03/2026"
  ],
  [
    "Notification No. 36/2026 [F. No. 300195/37/2025-ITA-I] / SO 1624(E)",
    "27/03/2026"
  ],
  [
    "Notification No. 29/2026 [F.No.300195/19/2024-ITA-I] / SO 1576(E)",
    "25/03/2026"
  ],
  [
    "Notification No. 30/2026 [F.No. 300195/21/2024-ITA-I] / SO 1577(E)",
    "25/03/2026"
  ],
  [
    "Notification No. 31/2026 [F.No. 300195/45/2024-ITA-I] / SO 1578(E)",
    "25/03/2026"
  ],
  [
    "Notification No. 32/2026 [F.No. 300196/67/2024-ITA-I] / SO 1579(E)",
    "25/03/2026"
  ],
  [
    "Notification No. 28/2026 [F. No. 300196/7/2026-ITA-I] / SO 1535(E)",
    "24/03/2026"
  ],
  [
    "Notification No. 26/2026 [F. No. 300195/36/2025-ITA-I] / SO 1533(E)",
    "24/03/2026"
  ],
  [
    "Notification No. 27/2026 [F. No. 300196/61/2025-ITA-I] / SO 1534(E)",
    "24/03/2026"
  ],
  [
    "Notification No. 25/2026 [F. No. 300195/29/2025-ITA-I] / SO 1532(E)",
    "24/03/2026"
  ],
  [
    "Notification No. 5/2026",
    "23/03/2026"
  ],
  [
    "Notification No. 23/2026 [F. No. 203/08/2025/ITA-II] / SO 1490(E)",
    "20/03/2026"
  ],
  [
    "Income-tax Rules, 2026 : Notification No. 22/2026",
    "20/03/2026"
  ]
];

export const IncomeTaxNotifications: React.FC = () => {
  return (
    <ResourceLayout 
      title="Income Tax Notifications"
      description="View and search through Income Tax Notifications documents."
      data={pageData}
      type="table"
    />
  );
};
