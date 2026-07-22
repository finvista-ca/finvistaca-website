export const interestTaxChapters = [
  {
    id: "preliminary",
    title: "Preliminary",
    sections: [
      { id: "1", title: "Short title and extent." },
      { id: "2", title: "Definitions." },
      { id: "3", title: "Tax authorities." },
    ]
  },
  {
    id: "levy",
    title: "Levy & Computation",
    sections: [
      { id: "4", title: "Charge of tax." },
      { id: "5", title: "Scope of chargeable interest." },
      { id: "6", title: "Computation of chargeable interest." },
    ]
  },
  {
    id: "assessment",
    title: "Assessment & Returns",
    sections: [
      { id: "7", title: "Return of chargeable interest." },
      { id: "8", title: "Assessment." },
      { id: "9", title: "Self-assessment." },
      { id: "10", title: "Interest escaping assessment." },
      { id: "10A", title: "Time limit for completion of assessments and re-assessments." },
      { id: "11", title: "Advance payment of interest-tax." },
      { id: "12", title: "Interest for default in furnishing return of chargeable interest." },
      { id: "12A", title: "Interest for default in payment of interest-tax in advance." },
      { id: "12B", title: "Interest for deferment of interest-tax payable in advance." },
      { id: "13", title: "Penalty for concealment of chargeable interest." },
      { id: "14", title: "Opportunity of being heard." },
    ]
  },
  {
    id: "appeals",
    title: "Appeals & Revisions",
    sections: [
      { id: "15", title: "Appeals to the Commissioner (Appeals)." },
      { id: "15A", title: "[Omitted.]" },
      { id: "16", title: "Appeals to Appellate Tribunal." },
      { id: "17", title: "Rectification of mistakes." },
      { id: "18", title: "Interest-tax deductible in computing total income under the Income-tax Act." },
      { id: "19", title: "Revision of order prejudicial to revenue." },
      { id: "20", title: "Revision of orders by Commissioner." },
    ]
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    sections: [
      { id: "21", title: "Application of provisions of Income-tax Act." },
      { id: "22", title: "Income-tax papers to be available for the purposes of this Act." },
      { id: "23", title: "Failure to comply with notices." },
      { id: "24", title: "False statements." },
      { id: "25", title: "Wilful attempt to evade tax, etc." },
      { id: "26", title: "Abetment of false returns, etc." },
      { id: "26A", title: "Offences by credit institutions." },
      { id: "26B", title: "Institution of proceedings and composition of offences." },
      { id: "26C", title: "Power of credit institutions to vary certain agreements." },
      { id: "27", title: "Power to make rules." },
      { id: "28", title: "Power to exempt." },
      { id: "29", title: "Power to remove difficulty." },
      { id: "30", title: "[Repealed.]" }
    ]
  }
];

export const interestTaxImportantSections = [
  {
    section: "Section 4",
    title: "Charge of Tax",
    summary: "Establishes the chargeability of interest-tax on every credit institution.",
    content: "There shall be charged on every scheduled bank (and later, every credit institution) for every assessment year interest-tax in respect of its chargeable interest of the previous year at the prescribed rates, subject to amendments and eventual discontinuation."
  },
  {
    section: "Section 5",
    title: "Scope of Chargeable Interest",
    summary: "Defines the scope and extent of chargeable interest.",
    content: "The chargeable interest of any previous year of a credit institution shall be the total amount of interest (other than interest on loans and advances made to other credit institutions) accruing or arising to the credit institution in that previous year."
  },
  {
    section: "Section 6",
    title: "Computation of Chargeable Interest",
    summary: "Outlines the method and deductions allowed in computing chargeable interest.",
    content: "Subject to certain provisions, in computing the chargeable interest of a previous year, there shall be allowed from the total amount of interest accruing or arising to the assessee in the previous year, a deduction in respect of the amount of interest which is established to have become a bad debt during the previous year."
  },
  {
    section: "Section 7",
    title: "Return of Chargeable Interest",
    summary: "Mandates the filing of return of chargeable interest by credit institutions.",
    content: "In the case of every credit institution, its principal officer (or in the case of a non-resident credit institution, an agent) shall furnish a return of the chargeable interest of the credit institution of the previous year in the prescribed form before the 31st day of December of the assessment year."
  },
  {
    section: "Section 8",
    title: "Assessment",
    summary: "Details the procedures for assessing chargeable interest by tax authorities.",
    content: "The Assessing Officer may serve a notice requiring the production of accounts, documents, or evidence. After considering such evidence and relevant material, the Assessing Officer shall, by an order in writing, assess the chargeable interest and the amount of the interest-tax payable on the basis of such assessment."
  },
  {
    section: "Section 10",
    title: "Interest Escaping Assessment",
    summary: "Provides mechanisms to assess or reassess chargeable interest that has escaped assessment.",
    content: "If the Assessing Officer has reason to believe that chargeable interest has escaped assessment, or has been under-assessed, or has been made the subject of excessive relief due to omission or failure to furnish a true and full return, they may serve a notice within the stipulated time limit and proceed to assess or reassess."
  },
  {
    section: "Section 15",
    title: "Appeals",
    summary: "Governs the right of the assessee to appeal to the Commissioner (Appeals).",
    content: "Any person objecting to the amount of interest-tax for which they are assessed, denying liability, or objecting to any penalty, fine, or order of rectification, may appeal to the Commissioner (Appeals) in the prescribed form and verified in the prescribed manner."
  },
  {
    section: "Section 21",
    title: "Application of Income-tax Act",
    summary: "Applies several procedural provisions of the Income-tax Act to the Interest-tax Act.",
    content: "Specific sections and Schedules of the Income-tax Act (such as provisions dealing with search and seizure, appeals to the Appellate Tribunal, collection and recovery of tax, etc.) apply with necessary modifications as if they referred to interest-tax instead of income-tax."
  }
];

export const interestTaxSearchIndex = interestTaxChapters.flatMap(chapter => 
  chapter.sections.map(section => ({
    section: section.id,
    title: section.title,
    chapter: chapter.title
  }))
);
