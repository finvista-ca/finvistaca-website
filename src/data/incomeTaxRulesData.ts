export interface IncomeTaxRule {
  ruleNumber: string;
  title: string;
  status: 'active' | 'omitted' | 'repealed' | 'substituted';
  chapter?: string;
  text: string;
  keywords: string[];
  sourceReference: string;
}

export const incomeTaxRulesData: IncomeTaxRule[] = [
  {
    ruleNumber: "1",
    title: "Short title and commencement.",
    status: "active",
    text: `(1) These rules may be called the Income-tax Rules, 2026.
(2) They shall come into force on the 1st April, 2026.`,
    keywords: ["title", "commencement"],
    sourceReference: "Rule 1, Income-tax Rules"
  },
  {
    ruleNumber: "2",
    title: "Definitions.",
    status: "active",
    text: `(1) In these rules, unless the context otherwise requires,—
(a) "Act" means the Income-tax Act, 2025 (30 of 2025);
(b) "authorised bank" means any bank as may be appointed by the Reserve Bank of India as its agent under the provisions of sub-section (1) of section 45 of the Reserve Bank of India Act, 1934 (2 of 1934);
(c) "Form" means a Form in Appendix III appended to these rules;
(d) "section" means a section of the Act.
(2) Words and expressions used herein and not defined but defined in the Act shall have the meanings respectively assigned to them in the Act.`,
    keywords: ["definitions", "act", "authorised bank", "form", "section"],
    sourceReference: "Rule 2, Income-tax Rules"
  },
  {
    ruleNumber: "3",
    title: "Arrangements for declaration and payment of dividends within India.",
    status: "active",
    text: `The arrangements referred to in section 2(42) to be made by a company for the declaration and payment of dividends (including dividends on preference shares) within India shall be as follows:
(a) the share-register of the company for all shareholders shall be regularly maintained at its principal place of business within India, in respect of any tax year from a date not later than the 1st April of such year;
(b) the general meeting for passing the accounts of the tax year and for declaring any dividends in respect thereof shall be held only at a place within India; and
(c) the dividends declared, if any, shall be payable only within India to all shareholders.`,
    keywords: ["dividends", "declaration", "payment", "company", "share-register"],
    sourceReference: "Rule 3, Income-tax Rules"
  },
  {
    ruleNumber: "4",
    title: "Conditions that a stock exchange is required to fulfil to be notified as a recognised stock exchange under section 2(92).",
    status: "active",
    text: `For the purposes of section 2(92), a stock exchange shall fulfil the following conditions in respect of trading in derivatives:—
(a) the stock exchange shall have the approval of the Securities and Exchange Board of India established under the Securities and Exchange Board of India Act, 1992 (15 of 1992) in respect of trading in derivatives and shall function in accordance with the guidelines or conditions laid down in this behalf by the Securities and Exchange Board of India;
(b) the stock exchange shall ensure that the particulars of the client (including unique client identity number and Permanent Account Number) are duly recorded and stored in its databases;
(c) the stock exchange shall maintain a complete audit trail of all transactions (in respect of cash and derivative market) for a period of seven tax years on its system;
(d) the stock exchange shall ensure that transactions (in respect of cash and derivative market) once registered in the system are not erased;
(e) the stock exchange shall ensure that the transactions (in respect of cash and derivative market) once registered in the system, are modified only in cases of genuine error; and
(f) the stock exchange shall maintain data regarding all transactions (in respect of cash and derivative market) registered in the system which have been modified and submit a monthly statement in Form No. 1 to the Director General of Income-tax (Systems), within fifteen days from the last day of each month to which such statement relates.`,
    keywords: ["stock exchange", "recognised stock exchange", "derivatives", "audit trail"],
    sourceReference: "Rule 4, Income-tax Rules"
  },
  {
    ruleNumber: "5",
    title: "Procedure for notification of a recognised stock exchange for the purposes of section 2(92).",
    status: "active",
    text: `(1) An application for notification of a stock exchange as a recognised stock exchange for the purposes of section 2(92) may be made to the Member (Income Tax), Central Board of Direct Taxes, New Delhi.
(2) The application referred to in sub-rule (1) shall be accompanied with the following documents:—
(a) approval granted by the Securities and Exchange Board of India for trading in derivatives;
(b) up-to-date rules, bye-laws and trading regulations of the stock exchange;
(c) confirmation regarding fulfilling the conditions referred to in clauses (b) to (f) of rule 4; and
(d) such other information as the stock exchange may like to place before the Central Government.
(3) The Central Government may call for such other information from the applicant as it deems necessary for taking a decision on the application.
(4) The Central Government, after examining the information furnished by the stock exchange under sub-rule (2) or sub-rule (3), shall notify the stock exchange as a recognised stock exchange for the purposes of section 2(92) or issue an order rejecting the application before the expiry of six months from the end of the month in which the application is received.
(5) The notification referred to in sub-rule (4) shall be effective until the approval granted by the Securities and Exchange Board of India is withdrawn or expires, or the said notification is rescinded by the Central Government.`,
    keywords: ["procedure", "notification", "recognised stock exchange", "application"],
    sourceReference: "Rule 5, Income-tax Rules"
  },
  {
    ruleNumber: "6",
    title: "Method of determination of period of holding of capital assets in certain cases.",
    status: "active",
    text: `(1) For the purposes of section 2(101)(c)(D), the period for which such capital asset is held by an assessee, shall be determined in accordance with the provisions of this rule.
(2) For the capital asset mentioned in column B of the Table below, the period for which the capital asset is held by the assessee shall be determined in accordance with column C thereof:

TABLE
Sl. No. | Nature of Assets | Period of holding
1. | Shares or debentures of a company, which becomes the property of the assessee under the circumstances mentioned in section 70(1)(z). | The period of holding shall include the period for which the bond, debenture, debenture-stock or deposit certificate, as the case may be, was held by the assessee prior to the conversion.
2. | Capital asset declared under the Income Declaration Scheme, 2016 made under the Finance Act, 2016 (28 of 2016). | (i) In the case of an immovable property, the period for which such property is held is to be reckoned from the date on which such property is acquired, if the date of acquisition is evidenced by a deed registered with any authority of a State Government; and (ii) in any other case, the period for which such asset is held shall be reckoned from the 1st June, 2016.
3. | Capital asset which became the property of the Indian subsidiary company in consequence to conversion of a branch of a foreign company referred to in section 219(1). | The period of holding shall include the following: (i) the period for which the asset was held by the said branch of the foreign company; or (ii) the period for which the asset was held by the previous owner, if any, who has acquired the capital asset by a mode of acquisition referred to in section 73(1) [Sl. No. 1. C.A] or section 219(1).

(3) In case of the amount which is chargeable to income-tax as income of a specified entity under section 67(10) under the head "Capital gains",—
(a) the amount or a part of it shall be considered to be from transfer of short-term capital asset, if it is attributed to,—
(i) the capital asset which is short-term capital asset at the time of taxation of amount under section 67(10); or
(ii) capital asset forming part of block of asset; or
(iii) capital asset being self-generated asset and self-generated goodwill as defined in section 67(11); and
(b) the amount or a part of it shall be considered to be from transfer of long-term capital asset or assets, if it is attributed to capital asset which is not covered by sub-clause (i) of clause (a) and is long-term capital asset at the time of taxation of amount section 67(10).`,
    keywords: ["period of holding", "capital assets", "determination", "holding period"],
    sourceReference: "Rule 6, Income-tax Rules"
  },
  {
    ruleNumber: "6A",
    title: "Relevant provisions concerning allowances / payments as provided in the source",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: [],
    sourceReference: "Rule 6A, Income-tax Rules"
  },
  {
    ruleNumber: "7",
    title: "Procedure for notification of zero coupon bond.",
    status: "active",
    text: `(1) An application by an entity, being an infrastructure capital company or infrastructure capital fund or infrastructure debt fund or a public sector company under section 2(112), for notification of any zero coupon bond proposed to be issued by it shall be made in Form No. 2 at least three months before the date of issue of such bond.
(2) An application made under sub-rule (1) shall not be made for notification of a bond which is to be issued beyond a period of two financial years following the financial year in which such application is made.
(3) An application made under sub-rule (1) shall be disposed of within a period of six months from the end of the month in which such application was received.
(4) Every application, under sub-rule (1), shall be accompanied by the following documents:—
(a) where the application is made by any infrastructure capital company or infrastructure debt fund or a public sector company, being a Government company defined under section 2(45) of the Companies Act, 2013 (18 of 2013), a copy of certificate of incorporation under the said Act;
(b) where the application is made by any infrastructure capital fund, a copy of the trust deed registered under the provisions of the Registration Act, 1908 (16 of 1908); and
(c) where the application is made by a public sector company, being any corporation, established by or under any Central Act or State Act or Provincial Act, a copy of the relevant Act.
(5) The Central Government, while specifying a zero coupon bond, by notification, shall satisfy itself that the following conditions are fulfilled:—
... [Refer to Official Document for complete provisions]`,
    keywords: ["zero coupon bond", "notification", "infrastructure"],
    sourceReference: "Rule 7, Income-tax Rules"
  },
  {
    ruleNumber: "8",
    title: "Computation of period of stay in India for an Indian citizen, being a member of the crew of a foreign bound ship.",
    status: "active",
    text: `(1) For the purposes of section 6(6), in case of an individual, being a citizen of India and a member of the crew of a foreign bound ship, the period or periods of stay in India in respect of an eligible voyage, shall not include the period computed under sub-rule (2).
(2) The period referred to in sub-rule (1) shall be the period beginning on the date entered into the Continuous Discharge Certificate in respect of joining the ship by the said individual for the eligible voyage and ending on the date entered into the Continuous Discharge Certificate in respect of signing off by that individual from the ship in respect of such voyage.
(3) For the purposes of this rule,—
(a) "Continuous Discharge Certificate" shall have the same meaning as assigned to it in the Merchant Shipping (Continuous Discharge Certificate-cum-Seafarer's Identity Document) Rules, 2001 made under the Merchant Shipping Act, 1958 (44 of 1958);
(b) "eligible voyage" shall mean a voyage undertaken by a ship engaged in the carriage of passengers or freight in international traffic, where —
(i) for the voyage having originated from any port in India, has as its destination any port outside India; and
(ii) for the voyage having originated from any port outside India, has as its destination any port in India.`,
    keywords: ["period of stay", "indian citizen", "crew", "ship", "voyage"],
    sourceReference: "Rule 8, Income-tax Rules"
  },
  {
    ruleNumber: "9",
    title: "Determination of income in case of non-residents.",
    status: "active",
    text: `In any case in which the Assessing Officer is of opinion that the actual amount of the income accruing or arising to any non-resident person, whether directly or indirectly, through or from —
(a) any asset or source of income in India; or
(b) any property in India; or
(c) any business connection in India,
cannot be definitely ascertained, the amount of such income for the purposes of assessment to income-tax may be calculated —
(i) at such percentage of the turnover so accruing or arising as the Assessing Officer may consider to be reasonable; or
(ii) on any amount which bears the same proportion to the total profits and gains of the business of such person (such profits and gains being computed in accordance with the provisions of the Act), as the receipts so accruing or arising bear to the total receipts of the business; or
(iii) in such other manner as the Assessing Officer may deem suitable.`,
    keywords: ["determination", "income", "non-residents"],
    sourceReference: "Rule 9, Income-tax Rules"
  },
  {
    ruleNumber: "10",
    title: "Definition of terms for rules 11 and 12.",
    status: "active",
    text: `For the purposes of rules 11 and 12, —
(a) "accountant" —
(i) means an accountant referred to in section 515(3)(b), who fulfils the following conditions: —
(A) if he is pursuing the profession of accountancy individually or is a valuer then —
(I) he has professional experience of not less than ten years; and
(II) his annual receipt in the year preceding the year in which valuation is undertaken, from the exercise of profession, exceeds fifty lakh rupees;
... [Refer to Official Document for complete provisions]`,
    keywords: ["definitions", "accountant", "balance sheet", "rules 11 and 12"],
    sourceReference: "Rule 10, Income-tax Rules"
  },
  {
    ruleNumber: "6B",
    title: "Advertisement expenditure",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: [],
    sourceReference: "Rule 6B, Income-tax Rules"
  },
  {
    ruleNumber: "6D",
    title: "Travel expenditure",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: [],
    sourceReference: "Rule 6D, Income-tax Rules"
  },
  {
    ruleNumber: "11",
    title: "Fair market value of assets in certain cases.",
    status: "active",
    text: `(1) The fair market value of asset, tangible or intangible, as on the specified date, held directly or indirectly by a foreign company or entity, for the purposes of section 9(10) shall be computed as per this rule with reference to the specified date.
(2) Where the asset is a share of an Indian company listed on a recognised stock exchange on the specified date, the fair market value of the share shall be the observable price of such share on the stock exchange so, however, that —
(a) if the share is held as part of the shareholding which confers, directly or indirectly, any right of management or control in the said company, the fair market value of the share shall be determined using the following formula: —
Fair market value = (A+B)/C
Where,—
A = the market capitalisation of the company on the basis of observable price of its shares quoted on the recognised stock exchange;
B = the book value of liabilities of the company; and
C = the total number of outstanding shares; or
(b) if, on the specified date, the share is listed on more than one recognised stock exchange, the observable price of the share shall be computed with reference to the recognised stock exchange which records the highest volume of trading in the share during the tax year.
(3) Where the asset is a share of an Indian company not listed on a recognised stock exchange on the specified date, the fair market value of the share shall be —
(a) the fair market value as determined by a merchant banker or an accountant as per any internationally accepted valuation methodology for valuation of shares on arm's length basis; and
(b) increased by the liability, if any, considered in such determination as per clause (a).
(4) Where the asset is an interest in a partnership firm or an association of persons, its fair market value shall be determined in the following manner:—
(a) the value of such firm or association of persons, shall be determined by a merchant banker or an accountant as per any internationally accepted valuation methodology as increased by the liability, if any, considered in such determination;
(b) the value so computed in clause (a), as is equal to the amount of its capital, shall be allocated among its partners or members in the same proportion in which the capital has been contributed by them;
(c) the residue of the value shall be allocated among the partners or members as per the agreement of partnership firm or association of persons for distribution of assets in the event of dissolution of the firm or association;
(d) in the absence of agreement, as specified in clause (c), the residual value shall be allocated in proportion in which the partners or members are entitled to share profits; and
(e) the sum total of the amount so allocated as per clauses (a) to (d) to a partner or member shall be treated as the fair market value of the interest of that partner or member in the firm or the association of persons, as the case may be.
(5) The fair market value of the asset other than those referred to in sub-rules (2), (3) and (4) shall be the price it would fetch, if sold in the open market as determined by a merchant banker or an accountant and increased by the liability, if any, considered in such determination.
(6) The fair market value of all the assets of a foreign company or an entity on the specified date, if conditions specified in column B of the following Table are fulfilled, shall be determined as per column C thereof... [Refer to Official Document for complete Table]
(7) Where fair market value has been determined on the basis of any interim balance sheet referred to in rule 10(b)(ii), then the fair market value shall be appropriately modified after finalisation of the relevant financial statement as per the applicable laws and all the provisions of this rule and rules 12 and 235 shall apply accordingly.
(8) For determining the fair market value of any asset located in India, being a share of an Indian company or interest in a partnership firm or association of persons, all the assets and business operations of the said company or partnership firm or association of persons shall be taken into account whether such assets or business operation are located in India or outside.
(9) The rate of exchange for calculation in foreign currency, of the value of assets located in India and expressed in rupees shall be the telegraphic transfer buying rate of such currency as on the specified date.`,
    keywords: ["fair market value", "fmv", "assets", "foreign company", "observable price", "valuation"],
    sourceReference: "Rule 11, Income-tax Rules"
  },
  {
    ruleNumber: "15",
    title: "Valuation of perquisites.",
    status: "active",
    text: `(1) For the purpose of computing the income chargeable under the head "Salaries", the value of perquisites provided by the employer, either directly or indirectly, to the assessee (herein referred to as the employee) or to any member of his household by reason of his employment, shall be determined in accordance with the provisions of this rule.
(2)(a) The value of residential accommodation provided by the employer, for the purpose of section 17(1)(a) and (b), during the tax year, in the circumstances referred in column B of the following Table I, shall be determined in accordance with the column C or column D thereof, as the case may be:
... [Refer to Official Document for complete detailed Tables I, II, III, IV and full provisions]`,
    keywords: ["valuation", "perquisites", "salaries", "accommodation", "motor car", "loans", "benefits"],
    sourceReference: "Rule 15, Income-tax Rules"
  },
  {
    ruleNumber: "17",
    title: "Salary income for purposes of section 17(1)(c)(ii).",
    status: "active",
    text: `For the purposes of section 17(1)(c)(ii), the prescribed income under the head "Salaries" shall be Rs. 400000.`,
    keywords: ["salary income", "section 17", "salaries", "400000"],
    sourceReference: "Rule 17, Income-tax Rules"
  },
  {
    ruleNumber: "18",
    title: "Exemption of medical benefits from perquisite value in respect of medical treatment of prescribed diseases or ailments in hospitals approved by the Chief Commissioner.",
    status: "active",
    text: `(1) In granting approval to any hospital other than a hospital for Indian system of medicine and homeopathic treatment for the purposes of section 17(2)(b)(ii), the Principal Chief Commissioner or Chief Commissioner shall satisfy himself that the hospital is registered with the local authority and fulfils the following requirements:—
(a) the building used for the hospital complies with the municipal bye-laws in force;
(b) the rooms are well ventilated, lighted and are kept in clean and hygienic conditions;
(c) at least ten iron spring beds are provided for patients;
(d) at least one properly equipped operation theatre is provided, with minimum floor space of one hundred and eighty square feet and with a separate sterilisation room;
... [Refer to Official Document for complete provisions]`,
    keywords: ["medical benefits", "exemption", "hospital", "diseases"],
    sourceReference: "Rule 18, Income-tax Rules"
  },
  {
    ruleNumber: "19",
    title: "Gross total income for purposes of section 17(3)(b).",
    status: "active",
    text: `For the purposes of section 17(3)(b), the prescribed gross total income shall be Rs. 800000.`,
    keywords: ["gross total income", "section 17", "800000"],
    sourceReference: "Rule 19, Income-tax Rules"
  },
  {
    ruleNumber: "17A",
    title: "Charitable / religious institution registration",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: [],
    sourceReference: "Rule 17A, Income-tax Rules"
  },
  {
    ruleNumber: "18AB",
    title: "Deduction-related particulars",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: [],
    sourceReference: "Rule 18AB, Income-tax Rules"
  },
  {
    ruleNumber: "20",
    title: "Procedure for purposes of section 19 [Table: Sl. No. 12] relating to voluntary retirement or voluntary separation.",
    status: "active",
    text: `(1) Subject to the conditions specified in sub-rules (2) and (3), the amount received at the time of voluntary retirement or voluntary separation can be claimed as deduction for the purposes of section 19 [Table: Sl. No. 12] by an employee of—
(i) a public sector company; or
(ii) any other company; or
(iii) an authority established under a Central Act or State Act or Provincial Act; or
(iv) a local authority; or
(v) a co-operative society; or
(vi) a University established or incorporated by or under a Central Act or State Act or Provincial Act, and an institution declared to be a University under section 3 of the University Grants Commission Act, 1956 (3 of 1956); or
(vii) an Indian Institute of Technology within the meaning of clause (g) of section 3 of the Institutes of Technology Act, 1961 (59 of 1961); or
(viii) an institution, having importance throughout India or in any State or States, as the Central Government may, by notification in the Official Gazette, specify in this behalf; or
(ix) such other institute of management as the Central Government may, by notification, specify in this behalf.
(2) The deduction under sub-rule (1) is allowable only if the scheme of voluntary retirement framed by the aforesaid company or authority or co-operative society or University or institute, as the case may be, or if the scheme of voluntary separation framed by a public sector company, (herein referred to as 'the scheme') is in accordance with the following requirements:—
(i) the scheme applies to an employee who has completed ten years of service or completed forty years of age;
(ii) the scheme applies to all employees (by whatever name called) including workers and executives of a company or of an authority or of a co-operative society, as the case may be, excepting directors of a company or of a co-operative society;
(iii) the scheme has been drawn to result in overall reduction in the existing strength of the employees;
(iv) the vacancy caused by the voluntary retirement or voluntary separation is not to be filled up;
(v) the retiring employee of a company shall not be employed in another company or concern belonging to the same management; and
(vi) the amount receivable on account of voluntary retirement or voluntary separation of the employee does not exceed either A or B, where,—
A = 3 × N × S;
B = M × S; and
N = Number of completed years of service;
M = balance months of service left before the date of his retirement on superannuation;
S = salary at the time of retirement.
(3) In case an amount is received by an employee of a public sector company under the scheme of voluntary separation framed by such public sector company, the requirement of sub-rule (2)(i) shall not be applicable.
(4) In this rule, the expression "salary" includes dearness allowance, if the terms of employment so provide, but excludes all other allowances and perquisites.`,
    keywords: ["voluntary retirement", "vrs", "voluntary separation", "deduction", "section 19"],
    sourceReference: "Rule 20, Income-tax Rules"
  },
  {
    ruleNumber: "26",
    title: "Cases and circumstances in which a payment or aggregate of payments exceeding ten thousand rupees may be made to a person in a day, otherwise than by specified banking and online mode or through such other electronic mode as provided in rule 48",
    status: "active",
    text: `(1) No disallowance under section 36(4) shall be made and no payment shall be deemed to be the profits and gains of business or profession under section 36(5) where a payment or aggregate of payments made to a person in a day, otherwise than by a specified banking or online mode or through such other electronic mode as provided in rule 48, exceeds ten thousand rupees, in the following cases and circumstances:—
(a) where the payment is made to—
(i) the Reserve Bank of India or any banking company as defined in clause (c) of section 5 of the Banking Regulation Act, 1949 (10 of 1949); or
(ii) the State Bank of India or any subsidiary bank as defined in section 2 of the State Bank of India (Subsidiary Banks) Act, 1959 (38 of 1959); or
(iii) any co-operative bank or land mortgage bank; or
(iv) any primary agricultural credit society or any primary credit society as defined under section 56 of the Banking Regulation Act, 1949 (10 of 1949); or
(v) the Life Insurance Corporation of India established under section 3 of the Life Insurance Corporation Act, 1956 (31 of 1956);
(b) where the payment is made to the Government and, under the rules framed by it, such payment is required to be made in legal tender;
(c) where the payment is made by—
(i) any letter of credit arrangements through a bank; or
(ii) a mail or telegraphic transfer through a bank; or
(iii) a book adjustment from any account in a bank to any other account in that or any other bank; or
(iv) a bill of exchange made payable only to a bank;
(d) where the payment is made by way of adjustment against the amount of any liability incurred by the payee for any goods supplied or services rendered by the assessee to such payee;
(e) where the payment is made for the purchase of—
(i) agricultural or forest produce; or
(ii) the produce of animal husbandry (including livestock, meat, hides and skins) or dairy or poultry farming; or
(iii) fish or fish products; or
(iv) the products of horticulture or apiculture,
to the cultivator, grower or producer of such articles, produce or products;
(f) where the payment is made for the purchase of the products manufactured or processed without the aid of power in a cottage industry, to the producer of such products;
(g) where the payment is made in a village or town, which on the date of such payment is not served by any bank, to any person who ordinarily resides, or is carrying on any business, profession or vocation, in any such village or town;
(h) where any payment is made to an employee of the assessee or the heir of any such employee, on or in connection with the retirement, retrenchment, resignation, discharge or death of such employee, on account of gratuity, retrenchment compensation or similar terminal benefit and the aggregate of such sums payable to the employee or his heir does not exceed fifty thousand rupees;
(i) where the payment is made by an assessee by way of salary to his employee after deducting the income-tax from salary in accordance with the provisions of section 392, and when such employee—
(i) is temporarily posted for a continuous period of fifteen days or more in a place other than his normal place of duty or on a ship; and
(ii) does not maintain any account in any bank at such place or ship;
(j) where the payment is made by any person to his agent who is required to make payment in cash for goods or services on behalf of such person;
(k) where the payment is made by an authorised dealer or a money changer against purchase of foreign currency or travellers cheques in the normal course of his business.
(2) For the purposes of this rule,—
(a) the term "bank", in clause (c) and clause (g), means any bank, banking company or society referred to in sub-clauses (i) to (iv) of clause (a) and includes any bank not being a banking company as defined in clause (c) of section 5 of the Banking Regulation Act, 1949 (10 of 1949), whether incorporated or not, which is established outside India; and
(b) "authorised dealer" or "money changer", in clause (k), means a person authorised as an authorised dealer or a money changer to deal in foreign currency or foreign exchange under any law in force.`,
    keywords: ["payment", "ten thousand rupees", "cash payment", "section 36", "exceptions"],
    sourceReference: "Rule 26, Income-tax Rules"
  },
  {
    ruleNumber: "37BB",
    title: "Foreign remittances",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: [],
    sourceReference: "Rule 37BB, Income-tax Rules"
  },
  {
    ruleNumber: "37CA",
    title: "TDS-related provisions",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: [],
    sourceReference: "Rule 37CA, Income-tax Rules"
  },
  {
    ruleNumber: "114",
    title: "Permanent Account Number (PAN)",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: ["pan"],
    sourceReference: "Rule 114, Income-tax Rules"
  },
  {
    ruleNumber: "114B",
    title: "Transactions requiring quotation of PAN",
    status: "active",
    text: "Detailed text unavailable in the online reference.",
    keywords: ["pan"],
    sourceReference: "Rule 114B, Income-tax Rules"
  }
];
