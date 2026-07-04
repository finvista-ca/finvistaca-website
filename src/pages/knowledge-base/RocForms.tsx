import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "ROC Froms",
    "Intimation of Director Identification Number by the company to the Registrar DIN services",
    "Form DIR-3C [zip] (702 KB)",
    "Form DIR-3C [zip] (373 KB)"
  ],
  [
    "2",
    "ROC Froms",
    "Information to the Registrar by company regarding the number of layers of subsidiaries.",
    "Form CRL-1 [zip] (605 KB)",
    "Form CRL-1 [zip] (115 KB)"
  ],
  [
    "3",
    "Approval Services (Headquarters)",
    "Form of intimation of appointment of cost auditor by the company to Central Government.",
    "Form CRA-2 [zip] (701 KB)",
    "Form CRA-2 [zip] (215 KB)"
  ],
  [
    "4",
    "Approval Services (Headquarters)",
    "Form for filing application or documents with Central Government",
    "Form CG-1 [zip] (546 KB)",
    "Form CG-1 [zip] (138 KB)"
  ],
  [
    "5",
    "Approval Services (Regional Director)",
    "Application for removal of auditor(s) from his/their office before expiry of term",
    "Form ADT-2 [zip] (577 KB)",
    "Form ADT-2 [zip] (160 KB)"
  ],
  [
    "6",
    "Approval Services (Regional Director)",
    "Application to Regional director for conversion of section 8 company into company of any other kind",
    "Form INC-18 [zip] (622 KB)",
    "Form INC-18 [zip] (196 KB)"
  ],
  [
    "7",
    "Approval Services (Regional Director)",
    "Application to Regional Director for approval to shift the Registered Office from one state to another state or from jurisdiction of one Registrar to another Registrar within the same State",
    "Form INC-23 [zip] (707 KB)",
    "Form INC-23 [zip] (207 KB)"
  ],
  [
    "8",
    "Approval Services (Regional Director)",
    "Memorandum of Appeal",
    "Form ADJ [zip] (643 KB)",
    "Form ADJ [zip] (175 KB)"
  ],
  [
    "9",
    "Approval Services (Regional Director)",
    "Applications made to Regional Director",
    "Form RD-1 [zip] (634 KB)",
    "Form RD-1 [zip] (153 KB)"
  ],
  [
    "10",
    "Approval Services (Regional Director)",
    "Form for filing Addendum for Rectification of Defects or Incompleteness",
    "Form RD GNL-5 [zip] (614 KB)",
    "Form RD GNL-5 [zip] (125 KB)"
  ],
  [
    "11",
    "Approval Services (Regional Director)",
    "Application to Central Government for extension of time for filing particulars of registration of creation / modification / satisfaction of charge OR for rectification of omission or misstatement of any particular in respect of creation/ modification/ sat",
    "Form CHG-8 [zip] (723 KB)",
    "Form CHG-8 [zip] (197 KB)"
  ],
  [
    "12",
    "Approval Services (Regional Director)",
    "Application for extension of time",
    "Form NDH-2[zip] (777 KB)",
    "Form NDH-2[zip] (464 KB)"
  ],
  [
    "13",
    "Approval Services (Registrar of Companies)",
    "Application by company to ROC for removing its name from register of Companies",
    "Form STK-2 [zip] (635 KB)",
    "Form STK-2 [zip] (208 KB)"
  ],
  [
    "14",
    "ROC Froms",
    "One Person Company- Application for Conversion",
    "Form INC-6 [zip] (835 KB)",
    "Form INC-6 [zip] (343 KB)"
  ],
  [
    "15",
    "ROC Froms",
    "Application for approval of Central Government for change of name",
    "Form INC-24 [zip] (754 KB)",
    "Form INC-24 [zip] (156 KB)"
  ],
  [
    "16",
    "ROC Froms",
    "Application to Registrar for obtaining the status of dormant company",
    "Form MSC-1 [zip] (803 KB)",
    "Form MSC-1 [zip] (210 KB)"
  ],
  [
    "17",
    "ROC Froms",
    "Application for seeking status of active company",
    "Form MSC-4 [zip] (604 KB)",
    "Form MSC-4 [zip] (158 KB)"
  ],
  [
    "18",
    "ROC Froms",
    "Applications made to Registrar of Companies",
    "Form GNL-1 [zip] (866 KB)",
    "Form GNL-1 [zip] (252 KB)"
  ],
  [
    "19",
    "ROC Froms",
    "Application for grant of License under section 8",
    "Form INC-12 [zip] (772 KB)",
    "Form INC-12 [zip] (270 KB)"
  ],
  [
    "20",
    "ROC Froms",
    "Application for striking off the name of company under the Fast Track Exit(FTE) Mode",
    "Form FTE [zip] (446 KB)",
    "Form FTE [zip] (161 KB)"
  ],
  [
    "21",
    "Change Services",
    "One Person Company- Nominee consent form",
    "Form INC-3 [zip] (765 KB)",
    "Form INC-3 [zip] (180 KB)"
  ],
  [
    "22",
    "Change Services",
    "One Person Company- Change in Member/Nominee",
    "Form INC-4 [zip] (770 KB)",
    "Form INC-4 [zip] (262 KB)"
  ],
  [
    "23",
    "Change Services",
    "Notice of situation or change of situation of registered office",
    "Form INC-22 [zip] (0.98 KB)",
    "Form INC-22 [zip] (254 KB)"
  ],
  [
    "24",
    "Change Services",
    "Conversion of public company into private company or private company into public company",
    "Form INC-27 [zip] (603 KB)",
    "Form INC-27 [zip] (170 KB)"
  ],
  [
    "25",
    "Change Services",
    "Notice to Registrar of any alteration of share capital",
    "Form SH-7 [zip] (1.09 MB)",
    "Form SH-7 [zip] (304 KB)"
  ],
  [
    "26",
    "Change Services",
    "Particulars of appointment of Directors and the key managerial personnel and the changes among them",
    "Form DIR-12 [zip] (1095 KB)",
    "Form DIR-12 [zip] (324 KB)"
  ],
  [
    "27",
    "Change Services",
    "Return of alteration in the documents filed for registration by foreign company",
    "Form FC-2 [zip] (738 KB)",
    "Form FC-2 [zip] (260 KB)"
  ],
  [
    "28",
    "Change Services",
    "Annual accounts along with the list of all principal places of business in India established by foreign company",
    "Form FC-3 [zip] (562 KB)",
    "Form FC-3 [zip] (147 KB)"
  ],
  [
    "29",
    "Charge Management",
    "Application for registration of creation, modification of charge (other than those related to debentures)",
    "Form CHG-1 [zip] (906 KB)",
    "Form CHG-1 [zip] (307 KB)"
  ],
  [
    "30",
    "Charge Management",
    "Particulars for satisfaction of charge thereof",
    "Form CHG-4 [zip] (604 KB)",
    "Form CHG-4 [zip] (209 KB)"
  ],
  [
    "31",
    "Charge Management",
    "Notice of appointment or cessation of receiver or manager",
    "Form CHG-6 [zip] (605 KB)",
    "Form CHG-6 [zip] (193 KB)"
  ],
  [
    "32",
    "Charge Management",
    "Application for registration of creation or modification of charge for debentures or rectification of particulars filed in respect of creation or modification of charge for debentures",
    "Form CHG-9 [zip] (927 KB)",
    "Form CHG-9 [zip] (304 KB)"
  ],
  [
    "33",
    "Charge Management",
    "Details of persons/directors/charged/specified",
    "Form GNL-3 [zip] (813 KB)",
    "Form GNL-3 [zip] (293 KB)"
  ],
  [
    "34",
    "DIN Forms",
    "Application for allotment of Director Identification Number before appointment in an existing company",
    "Form DIR-3 [zip] (852 KB)",
    "Form DIR-3 [zip] (227 KB)"
  ],
  [
    "35",
    "DIN Forms",
    "Application for surrender of Director Identification Number",
    "Form DIR-5 [zip] (618 KB)",
    "Form DIR-5 [zip] (193 KB)"
  ],
  [
    "36",
    "DIN Forms",
    "Intimation of change in particulars of Director to be given to the Central Government",
    "Form DIR-6 [zip] (884 KB)",
    "Form DIR-6 [zip] (265 KB)"
  ],
  [
    "37",
    "DIN Forms",
    "Application for KYC of Directors",
    "Form DIR-3 KYC [zip] (814 KB)",
    "Form DIR-3 KYC [zip] (241 KB)"
  ],
  [
    "38",
    "Incorporation services",
    "Active Company Tagging Identities and Verification (ACTIVE)",
    "Form INC-22A [zip] (837 KB)",
    "Form INC-22A [zip] (219 KB)"
  ],
  [
    "39",
    "Incorporation services",
    "Simplified Proforma for Incorporating Company Electronically (SPICe) - with mandatory PAN & TAN application included.",
    "SPICe  [zip] (1.72 MB)",
    "SPICe  [zip] (667 KB)"
  ],
  [
    "40",
    "Incorporation services",
    "eMemorandum of Association (SPICe MoA)",
    "SPICe MoA [zip] (1.24 MB)",
    "SPICe MoA [zip] (487 KB)"
  ],
  [
    "41",
    "Incorporation services",
    "eArticles of Association (SPICe AoA)",
    "SPICe AoA [zip] (740 KB)",
    "SPICe AoA [zip] (401 KB)"
  ],
  [
    "42",
    "Incorporation services",
    "Application for Goods and services tax Identification number, employees state Insurance corporation registration pLus Employees provident fund organisation registration (AGILE)",
    "AGILE [zip] (302 KB)",
    "AGILE [zip] (623 KB)"
  ],
  [
    "43",
    "Incorporation services",
    "One Person Company- Nominee consent form",
    "Form INC-3 [zip] (863 KB)",
    "Form INC-3 [zip] (181 KB)"
  ],
  [
    "44",
    "Incorporation services",
    "Application by a company for registration under section 366",
    "Form URC-1 [zip] (600 KB)",
    "Form URC-1 [zip] (170 KB)"
  ],
  [
    "45",
    "Incorporation services",
    "Information to be filed by foreign company",
    "Form FC-1 [zip] (899 KB)",
    "Form FC-1 [zip] (373 KB)"
  ],
  [
    "46",
    "Compliance Related Filing",
    "Application for declaration as Nidhi Company and for updation of status by Nidhis",
    "Form NDH-4 [zip] (869 KB)",
    "Form NDH-4 [zip] (170 KB)"
  ],
  [
    "47",
    "Compliance Related Filing",
    "Return to the Registrar in respect of declaration under section 90",
    "Form BEN-2 [zip] (804 KB)",
    "Form BEN-2 [zip] (232 KB)"
  ],
  [
    "48",
    "Compliance Related Filing",
    "Form for furnishing half yearly return with the registrar in respect of outstanding payments to Micro or Small Enterprise.",
    "Form MSME [zip] (741 KB)",
    "Form MSME [zip] (252 KB)"
  ],
  [
    "49",
    "Compliance Related Filing",
    "Form for filing Cost Audit Report with the Central Government.",
    "Form CRA-4 [zip] (741 KB)",
    "Form CRA-4 [zip] (252 KB)"
  ],
  [
    "50",
    "Compliance Related Filing",
    "Return of deposits",
    "Form DPT-3 [zip] (616 KB)",
    "Form DPT-3 [zip] (179 KB)"
  ]
];

export const RocForms: React.FC = () => {
  return (
    <ResourceLayout 
      title="Roc Forms"
      description="View and search through Roc Forms documents."
      data={pageData}
      type="table"
    />
  );
};
