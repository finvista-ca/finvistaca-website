import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "Form No.:2B",
    "Return of income for block assessment"
  ],
  [
    "2",
    "Form No.:2C",
    "Return of income for persons"
  ],
  [
    "3",
    "Form No.:2E",
    "NAYA SARAL - Income-tax return form for resident individual/Hindu undivided family not having income from business or profession or capital gains or agricultural income"
  ],
  [
    "4",
    "Form No.:3AA",
    "Report under section 32(1)(iia) of the Income -tax Act, 1961"
  ],
  [
    "5",
    "Form No.:3AAA",
    "Audit Report under section 32AB(5)"
  ],
  [
    "6",
    "Form No.:3AC",
    "dit report under section 33AB(2)"
  ],
  [
    "7",
    "Form No.:3AD",
    "Audit Report under section 33ABA(2)"
  ],
  [
    "8",
    "Form No.:3AE",
    "Audit report under section 35D(4)/35E(6) of the Income- tax Act, 1961"
  ],
  [
    "9",
    "Form No.:3BA",
    "Report under section 36(1)(xi) of the Income-tax Act, 1961"
  ],
  [
    "10",
    "Form No.:3BB",
    "Monthly statement to be furnished by a stock exchange in respect of transactions in which client codes been modified after registering in the system for the month of ……"
  ],
  [
    "11",
    "Form No.:3BC",
    "Monthly statement to be furnished by a recognised association in respect of transactions in which client codes have been modified after registering in the system for the month of ....."
  ],
  [
    "12",
    "Form No.:3C",
    "Form of daily case register"
  ],
  [
    "13",
    "Form No. : 3CA",
    "Audit report under section 44AB of the Income-tax Act, 1961 in a case where the accounts of the business or profession of a person have been audited under any other law"
  ],
  [
    "14",
    "Form No. : 3CB",
    "Audit report under section 44AB of the Income-tax Act, 1961, in the case of a person referred to in clause (b) of sub-rule (1) of rule 6G"
  ],
  [
    "15",
    "Form No. : 3CD",
    "Statement of particulars required to be furnished under section 44AB of the Income-tax Act, 1961"
  ],
  [
    "16",
    "Form No.:3CE",
    "Audit Report under sub-section (2) of section 44DA of the Income-tax Act, 1961"
  ],
  [
    "17",
    "Form No.:3CEA",
    "Report from an accountant to be furnished under section 92E relating to international transaction(s)"
  ],
  [
    "18",
    "Form No.:3CEAA",
    "Report to be furnished under sub-section (4) of section 92D of the Income-tax Act, 1961"
  ],
  [
    "19",
    "Form No.:3CEAB",
    "Intimation by a designated constituent entity, resident in India, of an international group, for the purposes of sub-section (4) of section 92D of the Income-tax Act, 1961"
  ],
  [
    "20",
    "Form No.:3CEAC",
    "Intimation by a constituent entity, resident in India, of an international group, the parent entity of which is not resident in India, for the purposes of sub-section (1) of section 286 of the Income-tax Act, 1961"
  ],
  [
    "21",
    "Form No.:3CEAD",
    "Report by a parent entity or an alternate reporting entity or any other constituent entity, resident in India, for the purposes of sub-section (2) or sub-section (4) of section 286 of the Income-tax Act, 1961"
  ],
  [
    "22",
    "Form No.:3CEAE",
    "Intimation on behalf of the international group for the purposes of the proviso to sub-section (4) of section 286 of the Income-tax Act, 1961"
  ],
  [
    "23",
    "Form No.:3CEB",
    "Report from an accountant to be furnished under section 92E relating to international transaction(s) and specified domestic transaction(s)"
  ],
  [
    "24",
    "Form No.:3CEC",
    "Application for a pre-filing meeting"
  ],
  [
    "25",
    "Form No.:3CED",
    "Application for an Advance Pricing Agreement"
  ],
  [
    "26",
    "Form No.:3CEDA",
    "Application for rollback of an Advance Pricing Agreement"
  ],
  [
    "27",
    "Form No.:3CEE",
    "Application for withdrawal of APA request"
  ],
  [
    "28",
    "Form No.:3CEF",
    "Annual Compliance Report on Advance Pricing Agreement"
  ],
  [
    "29",
    "Form No.:3CEFA",
    "Application for Opting for Safe Harbour"
  ],
  [
    "30",
    "Form No.:3CEG",
    "Form for making the reference to the Commissioner by the Assessing Officer under section 144BA(1)"
  ],
  [
    "31",
    "Form No.:3CEFB",
    "Application for Opting for Safe Harbour in respect of Specified Domestic Transactions"
  ],
  [
    "32",
    "Form No.:3CEH",
    "Form for returning the reference made under section 144BA"
  ],
  [
    "33",
    "Form No.:3CEI",
    "Form for recording the satisfaction by the Commissioner before making a reference to the Approving Panel under sub-section (4) of section 144BA"
  ],
  [
    "34",
    "Form No.:3CEJ",
    "Report from an accountant to be furnished for purposes of section 9A relating to arm’s length price in respect of the remuneration paid by an eligible investment fund to the fund manager"
  ],
  [
    "35",
    "Form No.:3CEJA",
    "Report from an accountant to be furnished for purpose of section 9A regarding fulfilment of certain conditions by an eligible investment fund"
  ],
  [
    "36",
    "Form No.:3CEIA",
    "Form for making reference to the Approving Panel under sub-section (4) of section 144BA of the Income-tax Act, 1961"
  ],
  [
    "37",
    "Form No.:3CEK",
    "Statement to be furnished by an eligible investment fund to the Assessing Officer"
  ],
  [
    "38",
    "Form No.:3CF-I",
    "Application Form for approval under clause (ii) of sub-section (1) of section 35 of the Income-tax Act, 1961 in the case of a Scientific Research Association"
  ],
  [
    "39",
    "Form No.:3CF-II",
    "Application Form for approval under clause (ii) or clause (iii) of sub-section (1) of section 35 of the Income-tax Act, 1961 in the case of a University, College or other Institution"
  ],
  [
    "40",
    "Form No.:3CFIII",
    "Application form for approval under clause (iia) of sub-section (1) of section 35 of the Income-tax Act, 1961 in the case of company"
  ],
  [
    "41",
    "Form No.:3CFA",
    "Form for opting for taxation of income by way of royalty in respect of Patent"
  ],
  [
    "42",
    "Form No.:3CG",
    "Application for approval of scientific research programme under section 35(2AA) of the Income-tax Act, 1961"
  ],
  [
    "43",
    "Form No.:3CH",
    "Order of approval of Scientific Research Programme under section 35(2AA) of the Income-tax Act, 1961"
  ],
  [
    "44",
    "Form No.:3CI",
    "Receipt of payment for carrying out scientific research under section 35(2AA) of the Income-tax Act, 1961"
  ],
  [
    "45",
    "Form No.:3CJ",
    "Report to be submitted by the prescribed authority to the Director General (Income-tax Exemptions) after approval of scientific research programme under section 35(2AA) of the Income-tax Act, 1961"
  ],
  [
    "46",
    "Form No.:3CK",
    "Application form for entering into an agreement with the Department of Scientific and Industrial Research for co-operation in in-house Research and Development facility and for audit of the accounts maintained for that facility"
  ],
  [
    "47",
    "Form No.:3CL",
    "Report to be submitted by the prescribed authority to the Director General (Income-tax Exemptions) under section 35(2AB) of the Income-tax Act, 1961"
  ],
  [
    "48",
    "Form No.:3CLA",
    "Report from an accountant to be furnished under sub-section (2AB) of section 35 of the Act relating to in-house scientific research and development facility"
  ],
  [
    "49",
    "Form No.:3CM",
    "Order of approval of in-house research and development facility under section 35(2AB) of the Income-tax Act, 1961"
  ],
  [
    "50",
    "Form No.:3CN",
    "Application for notification of affordable housing project as specified business under section 35AD"
  ]
];

export const IncomeTaxForms: React.FC = () => {
  return (
    <ResourceLayout 
      title="Income Tax Forms"
      description="View and search through Income Tax Forms documents."
      data={pageData}
      type="table"
    />
  );
};
