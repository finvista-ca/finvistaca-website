import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "FORM GST DRC-01B",
    "Intimation of difference in liability reported in statement of outward supplies and that reported in return",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST APL-01/03 W",
    "Application for Withdrawal of Appeal Application",
    "Appeal",
    ""
  ],
  [
    "FORM GST PMT-03A",
    "Order For re-credit of the amount to electronic credit ledger",
    "Payment",
    ""
  ],
  [
    "FORM GST DRC - 22A",
    "Application for filing objection against provisional attachment of property",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST CPD - 02",
    "Order for rejection / allowance of compounding of offence",
    "Compounding of Offence",
    ""
  ],
  [
    "FORM GST CPD - 01",
    "Application for Compounding of Offence",
    "Compounding of Offence",
    ""
  ],
  [
    "FORM GST DRC - 25",
    "Continuation of Recovery Proceedings",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 24",
    "Intimation to Liquidator for recovery of amount",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 23",
    "Restoration of provisionally attached property / bank account under section83",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 22",
    "Provisional attachment of property under section83",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 21",
    "Order for acceptance/rejection of application for deferred payment / payment in instalments",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 20",
    "Application for Deferred Payment/ Payment in Instalments",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 19",
    "Application to the Magistrate for Recovery as Fine",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 18",
    "Certificate action under clause (e) of sub-section (1) section 79",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 17",
    "Notice for Auction of Immovable/Movable Property under section 79(1) (d)",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 16",
    "Notice for attachment and sale of immovable/movable goods/shares under section 79",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 15",
    "APPLICATION BEFORE THE CIVIL COURT REQUESTING EXECUTION FOR A DECREE",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 14",
    "Certificate of Payment to a Third Person",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 13",
    "Notice to a third person under section 79(1) (c)",
    "Demand and Recovery Forms",
    ""
  ],
  [
    "FORM GST DRC - 12",
    "Sale Certificate",
    "Demand and Recovery Forms",
    ""
  ]
];

export const GstForms: React.FC = () => {
  return (
    <ResourceLayout 
      title="Gst Forms"
      description="View and search through Gst Forms documents."
      data={pageData}
      type="table"
    />
  );
};
