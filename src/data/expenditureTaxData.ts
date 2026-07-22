export const expenditureTaxChapters = [
  {
    id: "preliminary",
    title: "Preliminary",
    sections: [
      { id: "1", title: "Short title, extent and commencement." },
      { id: "2", title: "Definitions." },
      { id: "3", title: "Application of the Act." },
    ]
  },
  {
    id: "levy",
    title: "Levy & Chargeable Expenditure",
    sections: [
      { id: "4", title: "Charge of expenditure-tax." },
      { id: "5", title: "Meaning of chargeable expenditure." },
    ]
  },
  {
    id: "admin",
    title: "Administration & Collection",
    sections: [
      { id: "6", title: "Tax authorities." },
      { id: "7", title: "Collection and recovery of expenditure-tax." },
      { id: "8", title: "Person responsible for collecting tax to furnish prescribed return." },
    ]
  },
  {
    id: "assessment",
    title: "Assessment & Recovery",
    sections: [
      { id: "9", title: "Assessment." },
      { id: "10", title: "Best judgment assessment." },
      { id: "11", title: "Chargeable expenditure escaping assessment." },
      { id: "12", title: "Rectification of mistake." },
      { id: "13", title: "Time limit for completion of assessment and reassessment." },
      { id: "14", title: "Interest on delayed payment of expenditure-tax." },
    ]
  },
  {
    id: "penalties",
    title: "Penalties",
    sections: [
      { id: "15", title: "Penalty for failure to collect or pay expenditure-tax." },
      { id: "16", title: "Penalty for failure to furnish prescribed return." },
      { id: "17", title: "Penalty for concealment of chargeable expenditure." },
      { id: "18", title: "Penalty for failure to comply with notice." },
      { id: "19", title: "Penalty not to be imposed in certain cases." },
      { id: "20", title: "Notice of demand." },
    ]
  },
  {
    id: "appeals",
    title: "Appeals & Revisions",
    sections: [
      { id: "21", title: "Revision of orders by the Commissioner." },
      { id: "22", title: "Appeals to the Commissioner (Appeals)." },
      { id: "23", title: "Appeals to Appellate Tribunal." },
      { id: "24", title: "Application of provisions of Income-tax Act." },
    ]
  },
  {
    id: "offences",
    title: "Offences",
    sections: [
      { id: "25", title: "Wilful attempt to evade tax, etc." },
      { id: "26", title: "Failure to furnish prescribed returns." },
      { id: "27", title: "False statement in verification, etc." },
      { id: "28", title: "Abetment of false return, etc." },
      { id: "29", title: "Certain offences to be non-cognizable." },
      { id: "30", title: "Institution of proceedings and composition of offences." },
    ]
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    sections: [
      { id: "31", title: "Power to make rules." },
      { id: "32", title: "Power to remove difficulties." },
      { id: "33", title: "[Repealed.]" },
    ]
  }
];

export const expenditureTaxImportantSections = [
  {
    section: "Section 3",
    title: "Application of the Act",
    summary: "Defines the scope of applicability of the Act to hotels and restaurants.",
    content: "The Act applied to chargeable expenditure incurred in hotels where the room charges were above a specified threshold, and for a specific period, to certain restaurants. The Act ceased to apply to restaurants after 31 May 1992, and to hotels after 31 May 2003."
  },
  {
    section: "Section 4",
    title: "Charge of Expenditure-tax",
    summary: "Imposes the tax on chargeable expenditure.",
    content: "Levied a tax at prescribed rates (e.g., ten percent or fifteen percent) on the chargeable expenditure incurred in applicable hotels or restaurants, subject to various amendments and eventual discontinuation."
  },
  {
    section: "Section 5",
    title: "Meaning of Chargeable Expenditure",
    summary: "Outlines exactly what constitutes chargeable expenditure.",
    content: "Chargeable expenditure meant any expenditure incurred in, or payments made to, a hotel or restaurant in connection with accommodation, food, or drink. It specifically excluded expenditures made in foreign exchange (prior to 1992) or by persons enjoying diplomatic immunity."
  },
  {
    section: "Section 7",
    title: "Collection and Recovery",
    summary: "Obligations for collecting and depositing the expenditure tax.",
    content: "The person carrying on the business of the hotel or restaurant was required to collect the expenditure tax at the prescribed rate and pay it to the credit of the Central Government by the 10th of the following month."
  },
  {
    section: "Section 9",
    title: "Assessment",
    summary: "Procedures for assessing the chargeable expenditure.",
    content: "The Assessing Officer could serve a notice requiring the production of accounts or documents. After considering the evidence, the Assessing Officer would, by an order in writing, assess the chargeable expenditure and the amount of tax payable."
  },
  {
    section: "Section 11",
    title: "Escaping Assessment",
    summary: "Provisions for assessing chargeable expenditure that has escaped assessment.",
    content: "If the Assessing Officer had reason to believe that chargeable expenditure escaped assessment due to an omission or failure by the assessee to file a return or disclose facts, they could reopen the assessment within a period of four years."
  },
  {
    section: "Section 15",
    title: "Penalty for Failure to Collect or Pay Tax",
    summary: "Penalties imposed for failing to collect or deposit the tax.",
    content: "Any person responsible who failed to collect the tax, or having collected it failed to pay it to the Central Government, was liable to pay a penalty equal to the amount of tax they failed to collect, plus interest."
  },
  {
    section: "Section 22",
    title: "Appeals to Commissioner (Appeals)",
    summary: "Rights of the assessee to appeal against orders.",
    content: "Any person objecting to the amount of expenditure tax assessed, denying liability, or objecting to any penalty, could appeal to the Commissioner (Appeals) in the prescribed form within thirty days of the receipt of the notice of demand."
  }
];

export const expenditureTaxSearchIndex = expenditureTaxChapters.flatMap(chapter => 
  chapter.sections.map(section => ({
    section: section.id,
    title: section.title,
    chapter: chapter.title
  }))
);
