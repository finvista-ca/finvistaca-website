export interface Section {
  id: string;
  title: string;
}

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
}

export interface ImportantSection {
  section: string;
  title: string;
  summary: string;
  content: string;
}

export interface SearchIndexItem {
  section: string;
  title: string;
  chapter: string;
}

export const giftTaxChapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Chapter I – Preliminary',
    sections: [
      { id: '1', title: 'Short title, extent and commencement.' },
      { id: '2', title: 'Definitions.' }
    ]
  },
  {
    id: 'chapter-2',
    title: 'Chapter II – Charge of Gift-tax and Gifts Subject to Such Charge',
    sections: [
      { id: '3', title: 'Charge of gift-tax.' },
      { id: '4', title: 'Gifts to include certain transfers.' },
      { id: '5', title: 'Exemption in respect of certain gifts.' },
      { id: '6', title: 'Value of gifts, how determined.' },
      { id: '6A', title: '[Omitted.].' }
    ]
  },
  {
    id: 'chapter-3',
    title: 'Chapter III – Gift-tax Authorities',
    sections: [
      { id: '7', title: 'Gift-tax authorities and their jurisdiction.' },
      { id: '7A', title: '[Omitted.].' },
      { id: '7AA', title: '[Omitted.].' },
      { id: '7B', title: '[Omitted.].' },
      { id: '8', title: 'Control of gift-tax authorities.' },
      { id: '8A', title: '[Omitted.].' },
      { id: '9', title: 'Instructions to subordinate authorities.' },
      { id: '9A', title: '[Omitted.].' },
      { id: '10', title: 'Jurisdiction of Assessing Officers and power to transfer cases.' },
      { id: '11', title: '[Omitted.].' },
      { id: '11A', title: '[Omitted.].' },
      { id: '11AA', title: '[Omitted.].' },
      { id: '11B', title: '[Omitted.].' },
      { id: '12', title: '[Omitted.].' },
      { id: '12A', title: 'Power of Chief Commissioner or Commissioner and of Joint Commissioner to make enquiries under this Act.' }
    ]
  },
  {
    id: 'chapter-4',
    title: 'Chapter IV – Assessment',
    sections: [
      { id: '13', title: 'Return of gifts.' },
      { id: '14', title: 'Return after due date and amendment of return.' },
      { id: '14A', title: 'Return by whom to be signed.' },
      { id: '14B', title: 'Self-assessment.' },
      { id: '15', title: 'Assessment.' },
      { id: '16', title: 'Gift escaping assessment.' },
      { id: '16A', title: 'Time limit for completion of assessment and re-assessment.' },
      { id: '16B', title: 'Interest for defaults in furnishing return of gifts.' },
      { id: '17', title: 'Penalty for failure to furnish returns, to comply with notices and concealment of gifts, etc.' },
      { id: '17A', title: 'Penalty for failure to answer questions, sign statements, furnish information, allow inspections, etc.' },
      { id: '18', title: 'Rebate on advance payments.' },
      { id: '18A', title: 'Credit for stamp duty paid on instrument of gift.' }
    ]
  },
  {
    id: 'chapter-5',
    title: 'Chapter V – Liability to Assessment in Special Cases',
    sections: [
      { id: '19', title: 'Tax of deceased person payable by legal representative.' },
      { id: '19A', title: 'Assessment of persons leaving India.' },
      { id: '20', title: 'Assessment after partition of a Hindu undivided family.' },
      { id: '21', title: 'Liability in case of discontinued firm or association of persons.' },
      { id: '21A', title: 'Assessment of donee when the donor cannot be found.' }
    ]
  },
  {
    id: 'chapter-6',
    title: 'Chapter VI – Appeals, Revisions and References',
    sections: [
      { id: '22', title: 'Appeal to the Deputy Commissioner (Appeals) from orders of Assessing Officer.' },
      { id: '22A', title: '[Omitted.].' },
      { id: '23', title: 'Appeal to the Appellate Tribunal.' },
      { id: '24', title: 'Powers of Commissioner to revise orders of subordinate authorities.' },
      { id: '25', title: 'Appeal to the Appellate Tribunal from orders of enhancement by Chief Commissioner or Commissioner.' },
      { id: '26', title: 'Reference to High Court.' },
      { id: '27', title: 'Hearing by High Court.' },
      { id: '28', title: 'Appeal to Supreme Court.' },
      { id: '28A', title: 'Tax to be paid notwithstanding reference, etc.' },
      { id: '28B', title: 'Definition of High Court.' }
    ]
  },
  {
    id: 'chapter-7',
    title: 'Chapter VII – Payment and Recovery of Gift-tax',
    sections: [
      { id: '29', title: 'Gift-tax by whom payable.' },
      { id: '30', title: 'Gift-tax to be charged on property gifted.' },
      { id: '31', title: 'Notice of demand.' },
      { id: '32', title: 'Recovery of tax and penalties.' },
      { id: '33', title: 'Mode of recovery.' }
    ]
  },
  {
    id: 'chapter-7a',
    title: 'Chapter VIIA – Refunds',
    sections: [
      { id: '33A', title: 'Refunds.' }
    ]
  },
  {
    id: 'chapter-8',
    title: 'Chapter VIII – Miscellaneous',
    sections: [
      { id: '34', title: 'Rectification of mistakes.' },
      { id: '35', title: 'Prosecution.' },
      { id: '35A', title: 'Offences by companies.' },
      { id: '35B', title: 'Offences by Hindu undivided families.' },
      { id: '35C', title: 'Section 360 of the Code of Criminal Procedure, 1973, and the Probation of Offenders Act, 1958, not to apply.' },
      { id: '35D', title: 'Presumption as to culpable mental state.' },
      { id: '35E', title: 'Proof of entries in records or documents.' },
      { id: '36', title: 'Power regarding discovery, production of evidence, etc.' },
      { id: '37', title: 'Power to call for information.' },
      { id: '38', title: 'Effect of transfer of authorities on pending proceedings.' },
      { id: '39', title: 'Computation of period of limitation.' },
      { id: '40', title: 'Service of notice.' },
      { id: '41', title: '[Omitted.].' },
      { id: '41A', title: 'Publication of information respecting assessees.' },
      { id: '41B', title: 'Disclosure of information respecting assessees.' },
      { id: '41C', title: 'Return of gifts, etc., not to be invalid on certain grounds.' },
      { id: '42', title: 'Bar of suits in civil court.' },
      { id: '43', title: 'Appearance before gift-tax authorities by authorised representatives.' },
      { id: '43A', title: 'Appearance by registered valuer in certain matters.' },
      { id: '44', title: 'Agreement for avoidance or relief of double taxation with respect to gift-tax.' },
      { id: '44A', title: 'Rounding off of taxable gifts.' },
      { id: '44B', title: 'Rounding off of tax, etc.' },
      { id: '45', title: 'Act not to apply in certain cases.' },
      { id: '46', title: 'Power to make rules.' },
      { id: '46A', title: 'Power to make exemption, etc., in relation to certain Union territories.' },
      { id: '47', title: 'Power to remove difficulties.' }
    ]
  },
  {
    id: 'schedule-1',
    title: 'Schedule I',
    sections: [
      { id: 'Sch-I', title: 'Rates of Gift-Tax' }
    ]
  },
  {
    id: 'schedule-2',
    title: 'Schedule II',
    sections: [
      { id: 'Sch-II', title: 'Rules for Determining the Value of Property Gifted' }
    ]
  }
];

export const giftTaxImportantSections: ImportantSection[] = [
  {
    section: 'Section 3',
    title: 'Charge of gift-tax',
    summary: 'Subject to the other provisions contained in this Act, there shall be charged a tax in respect of the gifts made by a person during the previous year. This section was the core charging provision of the Act.',
    content: 'Subject to the other provisions contained in this Act, there shall be charged for every assessment year commencing on and from the 1st day of April, 1958, but before the 1st day of April, 1987, a tax (hereinafter referred to as gift-tax) in respect of the gifts, if any, made by a person during the previous year... Notwithstanding anything contained in sub-section (2), the provisions of this Act shall cease to apply and shall have no effect whatsoever in respect of any gift made on or after the 1st day of October, 1998.'
  },
  {
    section: 'Section 4',
    title: 'Gifts to include certain transfers',
    summary: 'Defines what constitutes a gift under the Act, including transfers for inadequate consideration, release of debts, and surrender of interests without adequate consideration.',
    content: 'Where property is transferred otherwise than for adequate consideration, the amount by which the value of the property as on the date of the transfer... exceeds the value of the consideration shall be deemed to be a gift made by the transferor.'
  },
  {
    section: 'Section 5',
    title: 'Exemption in respect of certain gifts',
    summary: 'Lists numerous exemptions where gift-tax shall not be charged, such as gifts of immovable property situated outside India, gifts to the Government or local authorities, and gifts for charitable purposes.',
    content: 'Gift-tax shall not be charged under this Act in respect of gifts made by any person— (i) of immovable property situate outside the territories to which this Act extends; (ii) of movable property situate outside the said territories unless the person being an individual, is a citizen of India and is ordinarily resident in the said territories...'
  },
  {
    section: 'Section 6',
    title: 'Value of gifts, how determined',
    summary: 'Provides the mechanism for determining the value of the gifted property. The value of any property, other than cash, is generally taken as its value on the date on which the gift was made.',
    content: 'Subject to the provisions of sub-section (2), the value of any property, other than cash, transferred by way of gift shall, for the purpose of this Act, be its value as on the date on which the gift was made and shall be determined in the manner laid down in Schedule II.'
  }
];

export const giftTaxSearchIndex: SearchIndexItem[] = giftTaxChapters.flatMap(chapter => 
  chapter.sections.map(section => ({
    section: section.id,
    title: section.title,
    chapter: chapter.title.split(' – ')[0]
  }))
);
