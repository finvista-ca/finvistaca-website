export interface PartnershipSection {
  sectionNumber: string;
  title: string;
  content: string;
}

export interface PartnershipChapter {
  chapterNumber: string;
  title: string;
  sectionRange: string;
  summary: string;
  sections: PartnershipSection[];
}

export interface PartnershipDefinition {
  term: string;
  meaning: string;
}

export const partnershipChapters: PartnershipChapter[] = [
  {
    chapterNumber: "I",
    title: "Preliminary",
    sectionRange: "Sections 1–3",
    summary: "Title, extent, commencement and key definitions of the Act.",
    sections: [
      { sectionNumber: "1", title: "Short title, extent and commencement", content: "This Act may be called the Indian Partnership Act, 1932. It extends to the whole of India. It shall come into force on the 1st day of October, 1932, except section 69, which shall come into force on the 1st day of October, 1933." },
      { sectionNumber: "2", title: "Definitions", content: "In this Act, unless there is anything repugnant in the subject or context,— (a) an 'act of a firm' means any act or omission by all the partners, or by any partner or agent of the firm which gives rise to a right enforceable by or against the firm; (b) 'business' includes every trade, occupation and profession; (c) 'prescribed' means prescribed by rules made under this Act; (d) 'third party', used in relation to a firm or to a partner therein, means any person who is not a partner in the firm; and (e) expressions used but not defined in this Act and defined in the Indian Contract Act, 1872, shall have the meanings assigned to them in that Act." },
      { sectionNumber: "3", title: "Application of provisions of Act 9 of 1872", content: "The unrepealed provisions of the Indian Contract Act, 1872, save in so far as they are inconsistent with the express provisions of this Act, shall continue to apply to firms." }
    ]
  },
  {
    chapterNumber: "II",
    title: "The Nature of Partnership",
    sectionRange: "Sections 4–8",
    summary: "Definition of partnership, its creation by contract not status, and types of partnerships.",
    sections: [
      { sectionNumber: "4", title: "Definition of “partnership”, “partner”, “firm” and “firm name”", content: "“Partnership” is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all. Persons who have entered into partnership with one another are called individually “partners” and collectively “a firm”, and the name under which their business is carried on is called the “firm name”." },
      { sectionNumber: "5", title: "Partnership not created by status", content: "The relation of partnership arises from contract and not from status; and, in particular, the members of a Hindu undivided family carrying on a family business as such, or a Burmese Buddhist husband and wife carrying on business as such are not partners in such business." },
      { sectionNumber: "6", title: "Mode of determining existence of partnership", content: "In determining whether a group of persons is or is not a firm, or whether a person is or is not a partner in a firm, regard shall be had to the real relation between the parties, as shown by all relevant facts taken together." },
      { sectionNumber: "7", title: "Partnership at will", content: "Where no provision is made by contract between the partners for the duration of their partnership, or for the determination of their partnership, the partnership is “partnership at will”." },
      { sectionNumber: "8", title: "Particular partnership", content: "A person may become a partner with another person in particular adventures or undertakings." }
    ]
  },
  {
    chapterNumber: "III",
    title: "Relations of Partners to One Another",
    sectionRange: "Sections 9–17",
    summary: "Duties, rights, and conduct of partners among themselves.",
    sections: [
      { sectionNumber: "9", title: "General duties of partners", content: "Partners are bound to carry on the business of the firm to the greatest common advantage, to be just and faithful to each other, and to render true accounts and full information of all things affecting the firm to any partner or his legal representative." },
      { sectionNumber: "10", title: "Duty to indemnify for loss caused by fraud", content: "Every partner shall indemnify the firm for any loss caused to it by his fraud in the conduct of the business of the firm." },
      { sectionNumber: "11", title: "Determination of rights and duties of partners by contract", content: "Subject to the provisions of this Act, the mutual rights and duties of the partners of a firm may be determined by contract between the partners, and such contract may be expressed or may be implied by a course of dealing." },
      { sectionNumber: "12", title: "The conduct of the business", content: "Subject to contract between the partners—(a) every partner has a right to take part in the conduct of the business; (b) every partner is bound to attend diligently to his duties in the conduct of the business; (c) any difference arising as to ordinary matters connected with the business may be decided by a majority of the partners...; and (d) every partner has a right to have access to and to inspect and copy any of the books of the firm." },
      { sectionNumber: "13", title: "Mutual rights and liabilities", content: "Subject to contract between the partners—(a) a partner is not entitled to receive remuneration...; (b) the partners are entitled to share equally in the profits earned, and shall contribute equally to the losses...; (c) interest on capital...; (d) interest on advances...; (e) indemnity...; (f) a partner shall indemnify the firm for any loss caused to it by his wilful neglect." }
    ]
  },
  {
    chapterNumber: "IV",
    title: "Relations of Partners to Third Parties",
    sectionRange: "Sections 18–30",
    summary: "Implied authority, liability to third parties, and position of minors.",
    sections: [
      { sectionNumber: "18", title: "Partner to be agent of the firm", content: "Subject to the provisions of this Act, a partner is the agent of the firm for the purposes of the business of the firm." },
      { sectionNumber: "19", title: "Implied authority of partner as agent of the firm", content: "Subject to the provisions of section 22, the act of a partner which is done to carry on, in the usual way, business of the kind carried on by the firm, binds the firm. The authority of a partner to bind the firm conferred by this section is called his “implied authority”." },
      { sectionNumber: "25", title: "Liability of a partner for acts of the firm", content: "Every partner is liable, jointly with all the other partners and also severally, for all acts of the firm done while he is a partner." },
      { sectionNumber: "28", title: "Holding out", content: "Anyone who by words spoken or written or by conduct represents himself, or knowingly permits himself to be represented, to be a partner in a firm, is liable as a partner in that firm to anyone who has on the faith of any such representation given credit to the firm..." },
      { sectionNumber: "30", title: "Minors admitted to the benefits of partnership", content: "A person who is a minor according to the law to which he is subject may not be a partner in a firm, but, with the consent of all the partners for the time being, he may be admitted to the benefits of partnership." }
    ]
  },
  {
    chapterNumber: "V",
    title: "Incoming and Outgoing Partners",
    sectionRange: "Sections 31–38",
    summary: "Admission, retirement, expulsion, insolvency and death of partners.",
    sections: [
      { sectionNumber: "31", title: "Introduction of a partner", content: "Subject to contract between the partners and to the provisions of section 30, no person shall be introduced as a partner into a firm without the consent of all the existing partners." },
      { sectionNumber: "32", title: "Retirement of a partner", content: "A partner may retire—(a) with the consent of all the other partners, (b) in accordance with an express agreement by the partners, or (c) where the partnership is at will, by giving notice in writing to all the other partners of his intention to retire." },
      { sectionNumber: "33", title: "Expulsion of a partner", content: "A partner may not be expelled from a firm by any majority of the partners, save in the exercise in good faith of powers conferred by contract between the partners." }
    ]
  },
  {
    chapterNumber: "VI",
    title: "Dissolution of a Firm",
    sectionRange: "Sections 39–55",
    summary: "Methods of dissolution and settlement of accounts.",
    sections: [
      { sectionNumber: "39", title: "Dissolution of a firm", content: "The dissolution of partnership between all the partners of a firm is called the 'dissolution of the firm'." },
      { sectionNumber: "40", title: "Dissolution by agreement", content: "A firm may be dissolved with the consent of all the partners or in accordance with a contract between the partners." },
      { sectionNumber: "41", title: "Compulsory dissolution", content: "A firm is dissolved—(a) by the adjudication of all the partners or of all the partners but one as insolvent, or (b) by the happening of any event which makes it unlawful for the business of the firm to be carried on or for the partners to carry it on in partnership." },
      { sectionNumber: "44", title: "Dissolution by the Court", content: "At the suit of a partner, the Court may dissolve a firm on any of the following grounds, namely:—(a) unsound mind...; (b) permanent incapacity...; (c) conduct prejudicially affecting business...; (d) persistent breach of agreement...; (e) transfer of interest...; (f) business cannot be carried on save at a loss; or (g) just and equitable ground." },
      { sectionNumber: "48", title: "Mode of settlement of accounts between partners", content: "In settling the accounts of a firm after dissolution, the following rules shall, subject to agreement by the partners, be observed:— (a) Losses, including deficiencies of capital, shall be paid first out of profits, next out of capital, and, lastly, if necessary, by the partners individually in the proportions in which they were entitled to share profits. (b) The assets of the firm..." }
    ]
  },
  {
    chapterNumber: "VII",
    title: "Registration of Firms",
    sectionRange: "Sections 56–71",
    summary: "Process of firm registration and effects of non-registration.",
    sections: [
      { sectionNumber: "58", title: "Application for registration", content: "The registration of a firm may be effected at any time by sending by post or delivering to the Registrar of the area in which any place of business of the firm is situated or proposed to be situated, a statement in the prescribed form and accompanied by the prescribed fee..." },
      { sectionNumber: "59", title: "Registration", content: "When the Registrar is satisfied that the provisions of section 58 have been duly complied with, he shall record an entry of the statement in a register called the Register of Firms, and shall file the statement." },
      { sectionNumber: "69", title: "Effect of non-registration", content: "No suit to enforce a right arising from a contract or conferred by this Act shall be instituted in any Court by or on behalf of any person suing as a partner in a firm against the firm or any person alleged to be or to have been a partner in the firm unless the firm is registered and the person suing is or has been shown in the Register of Firms as a partner in the firm." }
    ]
  },
  {
    chapterNumber: "VIII",
    title: "Supplemental",
    sectionRange: "Sections 72–74",
    summary: "Public notice procedures and savings clauses.",
    sections: [
      { sectionNumber: "72", title: "Mode of giving public notice", content: "A public notice under this Act is given—(a) where it relates to the retirement or expulsion of a partner from a registered firm, or to the dissolution of a registered firm... by notice to the Registrar of Firms under section 63, and by publication in the Official Gazette and in at least one vernacular newspaper..." },
      { sectionNumber: "74", title: "Savings", content: "Nothing in this Act or any repeal effected thereby shall affect or be deemed to affect—(a) any right, title, interest, obligation or liability already acquired, accrued or incurred before the commencement of this Act, or (b) any legal proceeding or remedy in respect of any such right, title, interest, obligation or liability..." }
    ]
  }
];

export const partnershipImportantSections = [
  { section: "4", title: "Definition of Partnership", explanation: "Defines 'partnership', 'partner', 'firm' and 'firm name'." },
  { section: "6", title: "Determining Existence", explanation: "Regard shall be had to the real relation between the parties, as shown by all relevant facts taken together." },
  { section: "7", title: "Partnership at Will", explanation: "Where no provision is made by contract between the partners for the duration of their partnership." },
  { section: "12", title: "Conduct of Business", explanation: "Every partner has a right to take part in the conduct of the business." },
  { section: "13", title: "Mutual Rights & Liabilities", explanation: "Subject to contract, partners are entitled to share equally in the profits earned." },
  { section: "18", title: "Partner as Agent", explanation: "A partner is the agent of the firm for the purposes of the business of the firm." },
  { section: "19", title: "Implied Authority", explanation: "The act of a partner which is done to carry on, in the usual way, business of the kind carried on by the firm, binds the firm." },
  { section: "25", title: "Liability of Partners", explanation: "Every partner is liable, jointly with all the other partners and also severally, for all acts of the firm done while he is a partner." },
  { section: "28", title: "Holding Out", explanation: "Anyone who by words spoken or written or by conduct represents himself to be a partner in a firm, is liable as a partner." },
  { section: "30", title: "Minor Admitted to Benefits", explanation: "A minor may not be a partner, but may be admitted to the benefits of partnership." },
  { section: "32", title: "Retirement of Partner", explanation: "A partner may retire with the consent of all other partners, or by express agreement, or by giving notice." },
  { section: "39", title: "Dissolution", explanation: "The dissolution of partnership between all the partners of a firm is called the 'dissolution of the firm'." },
  { section: "44", title: "Dissolution by Court", explanation: "The Court may dissolve a firm on various grounds such as partner's unsound mind, permanent incapacity, etc." },
  { section: "48", title: "Settlement of Accounts", explanation: "Rules for settling the accounts of a firm after dissolution." },
  { section: "58", title: "Registration of Firms", explanation: "Application for registration by sending a statement in the prescribed form to the Registrar." },
  { section: "69", title: "Effect of Non-registration", explanation: "No suit to enforce a right arising from a contract shall be instituted unless the firm is registered." }
];
export const partnershipDefinitions: PartnershipDefinition[] = [
  { term: "Partnership", meaning: "The relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all." },
  { term: "Partner", meaning: "Persons who have entered into partnership with one another are called individually 'partners'." },
  { term: "Firm", meaning: "Persons who have entered into partnership with one another are called collectively 'a firm'." },
  { term: "Firm Name", meaning: "The name under which the business of the partners is carried on." },
  { term: "Partnership at Will", meaning: "Where no provision is made by contract between the partners for the duration of their partnership or for the determination of their partnership." },
  { term: "Particular Partnership", meaning: "A person may become a partner with another person in particular adventures or undertakings." }
];
