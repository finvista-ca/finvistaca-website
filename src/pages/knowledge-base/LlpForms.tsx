import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "Limited liability partnership (LLP) forms",
    "Form for Incorporation of Limited Liability Partnership",
    "Form FiLLiP[zip] (1.68 MB)",
    "Form FiLLiP [zip] (1.03 MB)"
  ],
  [
    "2",
    "Limited liability partnership (LLP) forms",
    "Details in respect of designated partners and partners of Limited Liability Partnership",
    "Form Addendum to FiLLiP [zip] (893 KB)",
    "Form Addendum to FiLLiP [zip] (600 KB)"
  ],
  [
    "3",
    "Limited liability partnership (LLP) forms",
    "Information with regard to limited liability partnership agreement and changes, if any, made therein",
    "Form 3 [zip] (458 KB)",
    "Form 3 [zip] (201 KB)"
  ],
  [
    "4",
    "Limited liability partnership (LLP) forms",
    "Notice of appointment, cessation, change in name/ address/designation of a designated partner or partner. and consent to become a partner/designated partner",
    "Form 4 [zip] (723 KB)",
    "Form 4 [zip] (671 KB)"
  ],
  [
    "5",
    "Limited liability partnership (LLP) forms",
    "Notice of appointment, cessation, change in particulars of a partners",
    "Form 4A [zip] (906 KB)",
    "Form 4A [zip] (657 KB)"
  ],
  [
    "6",
    "Limited liability partnership (LLP) forms",
    "Notice for change of name",
    "Form 5 [zip] (497 KB)",
    "Form 5 [zip] (157KB)"
  ],
  [
    "7",
    "Limited liability partnership (LLP) forms",
    "Statement of Account & Solvency",
    "Form 8 [zip] (635 KB)",
    "Form 8 [zip] (408 KB)"
  ],
  [
    "8",
    "Limited liability partnership (LLP) forms",
    "Annual Return of Limited Liability Partnership (LLP)",
    "Form 11 [zip] (255 KB)",
    "Form 11 [zip] (234 KB)"
  ],
  [
    "9",
    "Limited liability partnership (LLP) forms",
    "Form for intimating other address for service of documents",
    "Form 12 [zip] (214 KB)",
    "Form 12 [zip] (193 KB)"
  ],
  [
    "10",
    "Limited liability partnership (LLP) forms",
    "Notice for change of place of registered office",
    "Form 15 [zip] (277 KB)",
    "Form 15 [zip] (257 KB)"
  ],
  [
    "11",
    "Limited liability partnership (LLP) forms",
    "Application and statement for conversion of a firm into Limited Liability Partnership (LLP)",
    "Form 17 [zip] (724 KB)",
    "Form 17 [zip] (258 KB)"
  ],
  [
    "12",
    "Limited liability partnership (LLP) forms",
    "Application and Statement for conversion of a private company/ unlisted public company into limited liability partnership (LLP)",
    "Form 18 [zip] (602KB)",
    "Form 18 [zip] (193 KB)"
  ],
  [
    "13",
    "Limited liability partnership (LLP) forms",
    "Notice of intimation of Order of Court/ Tribunal/CLB/ Central Government to the Registrar",
    "Form 22 [zip] (187 KB)",
    "Form 22 [zip] (159 KB)"
  ],
  [
    "14",
    "Limited liability partnership (LLP) forms",
    "Application for direction to Limited Liability Partnership (LLP) to change its name to the Registrar",
    "Form 23 [zip] (244 KB)",
    "Form 23 [zip] (223 KB)"
  ],
  [
    "15",
    "Limited liability partnership (LLP) forms",
    "Application to the Registrar for striking off name",
    "Form 24 [zip] (161 KB)",
    "Form 24 [zip] (140 KB)"
  ],
  [
    "16",
    "Limited liability partnership (LLP) forms",
    "Application for reservation/ renewal of name by a Foreign Limited Liability Partnership (FLLP) or Foreign Company",
    "Form 25 [zip] (205 KB)",
    "Form 25 [zip] (185 KB)"
  ],
  [
    "17",
    "Limited liability partnership (LLP) forms",
    "Form for registration of particulars by Foreign Limited Liability Partnership (FLLP)",
    "Form 27 [zip] (313 KB)",
    "Form 27 [zip] (281 KB)"
  ],
  [
    "18",
    "Limited liability partnership (LLP) forms",
    "Return of alteration in the incorporation document or other instrument constituting or defining the constitution; or the registered or principal office; or the partner or designated partner of limited liability partnership incorporated or registered outsi",
    "Form 28 [zip] (133 KB)",
    "Form 28 [zip] (113 KB)"
  ],
  [
    "19",
    "Limited liability partnership (LLP) forms",
    "Notice of (A) alteration in the certificate of incorporation or registration; (B) alteration in names and addresses of any of the persons authorised to accept service on behalf of a foreign limited liability partnership (FLLP) (C) alteration in the princi",
    "Form 29 [zip] (291 KB)",
    "Form 29 [zip] (269 KB)"
  ],
  [
    "20",
    "Limited liability partnership (LLP) forms",
    "Application for compounding of an offence under the Act",
    "Form 31 [zip] (248 KB)",
    "Form 31 [zip] (224 KB)"
  ],
  [
    "21",
    "Limited liability partnership (LLP) forms",
    "Form for filing addendum for rectification of defects or incompleteness",
    "Form 32 [zip] (197 KB)",
    "Form 32 [zip] (173 KB)"
  ],
  [
    "22",
    "Firm Conversion Form",
    "Form for intimating to Registrar of Firms about conversion of the firm into limited liability partnership (LLP).",
    "Form 14 [zip] (61 KB)",
    ""
  ],
  [
    "23",
    "DIN Forms",
    "Application for allotment of Director Identification Number",
    "Form DIR-3 [zip] (664 KB)",
    "Form DIR-3 [zip] (230 KB)"
  ],
  [
    "24",
    "DIN Forms",
    "Intimation of change in particulars of Director to be given to the Central Government",
    "Form DIR-6 [zip] (782 KB)",
    "Form DIR-6 [zip] (265 KB)"
  ]
];

export const LlpForms: React.FC = () => {
  return (
    <ResourceLayout 
      title="Llp Forms"
      description="View and search through Llp Forms documents."
      data={pageData}
      type="table"
    />
  );
};
