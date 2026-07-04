import React from 'react';
import { ResourceLayout } from '../../components/layout/ResourceLayout';

const pageData = [
  [
    "1",
    "Chapter 99",
    "All Services",
    "",
    "",
    " ",
    "",
    ""
  ],
  [
    "2",
    "Section 5",
    "Construction Services",
    "",
    "",
    " ",
    "",
    ""
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(i) Construction of affordable residential apartments by a promoter in a Residential Real Estate Project (herein after referred to as RREP) which commences on or after 1 st April, 2019 or in an ongoing RREP in respect of which the promoter has not exercised option to pay integrated tax on construction of apartments at the rates as specified for item (ie) or (if) below, as the case may be, in the manner prescribed therein, intended for sale to a buyer, wholly or partly, except where the entire consideration has been received after issuance of completion certificate, where required, by the competent authority or after its first occupation, whichever is earlier. (Provisions of paragraph 2 of this notification shall apply for valuation of this service)",
    "0.75",
    "0.75",
    " ",
    "1.5",
    "Provided that the integrated tax at the rate specified in column (4) shall be paid in cash, that is, by debiting the electronic cash ledger only; Provided also that credit of input tax charged on goods and services used in supplying the service has not been taken except to the extent as prescribed in Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that the registered person shall pay, by debit in the electronic credit ledger or electronic cash ledger, an amount equivalent to the input tax credit attributable to construction in a project, time of supply of which is on or after 1 st April, 2019, which shall be calculated in the manner as prescribed in the Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that where a registered person (landowner- promoter) who transfers development right or FSI (including additional FSI) to a promoter (developer- promoter) against consideration, wholly or partly, in the form of construction of apartments, - (i) the developer- promoter shall pay tax on supply of construction of apartments to the landowner promoter, and (ii) such landowner– promoter shall be eligible for credit of taxes charged from him by the developer promoter towards the supply of construction of apartments by developer- promoter to him, provided the landowner- promoter further supplies such apartments to his buyers before issuance of completion certificate or first occupation, whichever is earlier, and pays tax on the same which is not less than the amount of tax charged from him on construction of such apartments by the developer promoter. Explanation. – (i) “developer- promoter” is a promoter who constructs or converts a building into apartments or develops a plot for sale, (ii) “landowner- promoter” is a promoter who transfers the land or development rights or FSI to a developer- promoter for construction of apartments and receives constructed apartments against such transferred rights and sells such apartments to his buyers independently. (iii) the landowner- promoter shall be eligible to utilise the credit of tax charged to him by the developer- promoter for payment of tax on apartments supplied by the landowner- promoter in such project. Provided also that eighty percent of value of input and input services, [other than services by way of grant of development rights, long term lease of land (against upfront payment in the form of premium, salami, development charges etc.) or FSI (including additional FSI), electricity, high speed diesel, motor spirit, natural gas], used in supplying the service shall be received from registered supplier only; Provided also that inputs and input services on which tax is paid on reverse charge basis shall be deemed to have been purchased from registered person; Provided also that where value of input and input services received from registered suppliers during the financial year (or part of the financial year till the date of issuance of completion certificate or first occupation of the project, whichever is earlier) falls short of the said threshold of 80 per cent., tax shall be paid by the promoter on value of input and input services comprising such shortfall at the rate of eighteen percent on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017) shall apply to him as if he is the person liable for paying the tax in relation to the supply of such goods or services or both; Provided also that notwithstanding anything contained herein above, where cement is received from an unregisteredperson, the promoter shall pay tax on supply of such cement at the applicable rates on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017), shall apply to him as if he is the person liable for paying the tax in relation to such supply of cement; (Please refer to the illustrations in annexure III) Explanation. - 1. The promoter shall maintain project wise account of inward supplies from registered and unregistered supplier and calculate tax payments on the shortfall at the end of the financial year and shall submit the same in the prescribed form electronically on the common portal by end of the quarter following the financial year. The tax liability on the shortfall of inward supplies from unregistered person so determined shall be added to his output tax liability in the month not later than the month of June following the end of the financial year.                    2.Notwithstanding anything contained in Explanation 1 above, tax on cement received from unregistered person shall be paid in the month in which cement is received. 3. Input Tax Credit not availed shall be reported every month by reporting the same as ineligible credit in GSTR-3B [Row No. 4 (D)(2)]."
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(ia) Construction of residential apartments other than affordable residential apartments by a promoter in an RREP which commences on or after 1 st April, 2019 or in an ongoing RREP in respect of which the promoter has not exercised option to pay integrated tax on construction of apartments at the rates as specified for item (ie) or (if) below, as the case may be, in the manner prescribed therein, intended for sale to a buyer, wholly or partly, except where the entire consideration has been received after issuance of completion certificate, where required, by the competent authority or after its first occupation, whichever is earlier. (Provisions of paragraph 2 of this notification shall apply for valuation of this service)",
    "3.75",
    "3.75",
    " ",
    "7.5",
    "Provided that the integrated tax at the rate specified in column (4) shall be paid in cash, that is, by debiting the electronic cash ledger only; Provided also that credit of input tax charged on goods and services used in supplying the service has not been taken except to the extent as prescribed in Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that the registered person shall pay, by debit in the electronic credit ledger or electronic cash ledger, an amount equivalent to the input tax credit attributable to construction in a project, time of supply of which is on or after 1 st April, 2019, which shall be calculated in the manner as prescribed in the Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that where a registered person (landowner- promoter) who transfers development right or FSI (including additional FSI) to a promoter (developer- promoter) against consideration, wholly or partly, in the form of construction of apartments, - (i) the developer- promoter shall pay tax on supply of construction of apartments to the landowner promoter, and (ii) such landowner– promoter shall be eligible for credit of taxes charged from him by the developer promoter towards the supply of construction of apartments by developer- promoter to him, provided the landowner- promoter further supplies such apartments to his buyers before issuance of completion certificate or first occupation, whichever is earlier, and pays tax on the same which is not less than the amount of tax charged from him on construction of such apartments by the developer promoter. Explanation. – (i) “developer- promoter” is a promoter who constructs or converts a building into apartments or develops a plot for sale, (ii) “landowner- promoter” is a promoter who transfers the land or development rights or FSI to a developer- promoter for construction of apartments and receives constructed apartments against such transferred rights and sells such apartments to his buyers independently. (iii) the landowner- promoter shall be eligible to utilise the credit of tax charged to him by the developer- promoter for payment of tax on apartments supplied by the landowner- promoter in such project. Provided also that eighty percent of value of input and input services, [other than services by way of grant of development rights, long term lease of land (against upfront payment in the form of premium, salami, development charges etc.) or FSI (including additional FSI), electricity, high speed diesel, motor spirit, natural gas], used in supplying the service shall be received from registered supplier only; Provided also that inputs and input services on which tax is paid on reverse charge basis shall be deemed to have been purchased from registered person; Provided also that where value of input and input services received from registered suppliers during the financial year (or part of the financial year till the date of issuance of completion certificate or first occupation of the project, whichever is earlier) falls short of the said threshold of 80 per cent., tax shall be paid by the promoter on value of input and input services comprising such shortfall at the rate of eighteen percent on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017) shall apply to him as if he is the person liable for paying the tax in relation to the supply of such goods or services or both; Provided also that notwithstanding anything contained herein above, where cement is received from an unregisteredperson, the promoter shall pay tax on supply of such cement at the applicable rates on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017), shall apply to him as if he is the person liable for paying the tax in relation to such supply of cement; (Please refer to the illustrations in annexure III) Explanation. - 1. The promoter shall maintain project wise account of inward supplies from registered and unregistered supplier and calculate tax payments on the shortfall at the end of the financial year and shall submit the same in the prescribed form electronically on the common portal by end of the quarter following the financial year. The tax liability on the shortfall of inward supplies from unregistered person so determined shall be added to his output tax liability in the month not later than the month of June following the end of the financial year.                    2.Notwithstanding anything contained in Explanation 1 above, tax on cement received from unregistered person shall be paid in the month in which cement is received. 3. Input Tax Credit not availed shall be reported every month by reporting the same as ineligible credit in GSTR-3B [Row No. 4 (D)(2)]."
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(ib) Construction of commercial apartments (shops, offices, godowns etc.) by a promoter in an RREP which commences on or after 1 st April, 2019 or in an ongoing RREP in respect of which the promoter has not exercised option to pay integrated tax on construction of apartments at the rates as specified for item (ie) or (if) below, as the case may be, in the manner prescribed therein, intended for sale to a buyer, wholly or partly, except where the entire consideration has been received after issuance of completion certificate, where required, by the competent authority or after its first occupation, whichever is earlier. (Provisions of paragraph 2 of this notification shall apply for valuation of this service)",
    "3.75",
    "3.75",
    " ",
    "7.5",
    "Provided that the integrated tax at the rate specified in column (4) shall be paid in cash, that is, by debiting the electronic cash ledger only; Provided also that credit of input tax charged on goods and services used in supplying the service has not been taken except to the extent as prescribed in Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that the registered person shall pay, by debit in the electronic credit ledger or electronic cash ledger, an amount equivalent to the input tax credit attributable to construction in a project, time of supply of which is on or after 1 st April, 2019, which shall be calculated in the manner as prescribed in the Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that where a registered person (landowner- promoter) who transfers development right or FSI (including additional FSI) to a promoter (developer- promoter) against consideration, wholly or partly, in the form of construction of apartments, - (i) the developer- promoter shall pay tax on supply of construction of apartments to the landowner promoter, and (ii) such landowner– promoter shall be eligible for credit of taxes charged from him by the developer promoter towards the supply of construction of apartments by developer- promoter to him, provided the landowner- promoter further supplies such apartments to his buyers before issuance of completion certificate or first occupation, whichever is earlier, and pays tax on the same which is not less than the amount of tax charged from him on construction of such apartments by the developer promoter. Explanation. – (i) “developer- promoter” is a promoter who constructs or converts a building into apartments or develops a plot for sale, (ii) “landowner- promoter” is a promoter who transfers the land or development rights or FSI to a developer- promoter for construction of apartments and receives constructed apartments against such transferred rights and sells such apartments to his buyers independently. (iii) the landowner- promoter shall be eligible to utilise the credit of tax charged to him by the developer- promoter for payment of tax on apartments supplied by the landowner- promoter in such project. Provided also that eighty percent of value of input and input services, [other than services by way of grant of development rights, long term lease of land (against upfront payment in the form of premium, salami, development charges etc.) or FSI (including additional FSI), electricity, high speed diesel, motor spirit, natural gas], used in supplying the service shall be received from registered supplier only; Provided also that inputs and input services on which tax is paid on reverse charge basis shall be deemed to have been purchased from registered person; Provided also that where value of input and input services received from registered suppliers during the financial year (or part of the financial year till the date of issuance of completion certificate or first occupation of the project, whichever is earlier) falls short of the said threshold of 80 per cent., tax shall be paid by the promoter on value of input and input services comprising such shortfall at the rate of eighteen percent on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017) shall apply to him as if he is the person liable for paying the tax in relation to the supply of such goods or services or both; Provided also that notwithstanding anything contained herein above, where cement is received from an unregisteredperson, the promoter shall pay tax on supply of such cement at the applicable rates on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017), shall apply to him as if he is the person liable for paying the tax in relation to such supply of cement; (Please refer to the illustrations in annexure III) Explanation. - 1. The promoter shall maintain project wise account of inward supplies from registered and unregistered supplier and calculate tax payments on the shortfall at the end of the financial year and shall submit the same in the prescribed form electronically on the common portal by end of the quarter following the financial year. The tax liability on the shortfall of inward supplies from unregistered person so determined shall be added to his output tax liability in the month not later than the month of June following the end of the financial year.                    2.Notwithstanding anything contained in Explanation 1 above, tax on cement received from unregistered person shall be paid in the month in which cement is received. 3. Input Tax Credit not availed shall be reported every month by reporting the same as ineligible credit in GSTR-3B [Row No. 4 (D)(2)]."
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(ic) Construction of affordable residential apartments by a promoter in a Real Estate Project (herein after referred to as REP) other than RREP, which commences on or after 1 st April, 2019 or in an ongoing REP other than RREP in respect of which the promoter has not exercised option to pay integrated tax on construction of apartments at the rates as specified for item (ie) or (if) below, as the case may be, in the manner prescribed therein, intended for sale to a buyer, wholly or partly, except where the entire consideration has been received after issuance of completion certificate, where required, by the competent authority or after its first occupation, whichever is earlier. (Provisions of paragraph 2 of this notification shall apply for valuation of this service)",
    "0.75",
    "0.75",
    " ",
    "1.5",
    "Provided that the integrated tax at the rate specified in column (4) shall be paid in cash, that is, by debiting the electronic cash ledger only; Provided also that credit of input tax charged on goods and services used in supplying the service has not been taken except to the extent as prescribed in Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that the registered person shall pay, by debit in the electronic credit ledger or electronic cash ledger, an amount equivalent to the input tax credit attributable to construction in a project, time of supply of which is on or after 1 st April, 2019, which shall be calculated in the manner as prescribed in the Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that where a registered person (landowner- promoter) who transfers development right or FSI (including additional FSI) to a promoter (developer- promoter) against consideration, wholly or partly, in the form of construction of apartments, - (i) the developer- promoter shall pay tax on supply of construction of apartments to the landowner promoter, and (ii) such landowner– promoter shall be eligible for credit of taxes charged from him by the developer promoter towards the supply of construction of apartments by developer- promoter to him, provided the landowner- promoter further supplies such apartments to his buyers before issuance of completion certificate or first occupation, whichever is earlier, and pays tax on the same which is not less than the amount of tax charged from him on construction of such apartments by the developer promoter. Explanation. – (i) “developer- promoter” is a promoter who constructs or converts a building into apartments or develops a plot for sale, (ii) “landowner- promoter” is a promoter who transfers the land or development rights or FSI to a developer- promoter for construction of apartments and receives constructed apartments against such transferred rights and sells such apartments to his buyers independently. (iii) the landowner- promoter shall be eligible to utilise the credit of tax charged to him by the developer- promoter for payment of tax on apartments supplied by the landowner- promoter in such project. Provided also that eighty percent of value of input and input services, [other than services by way of grant of development rights, long term lease of land (against upfront payment in the form of premium, salami, development charges etc.) or FSI (including additional FSI), electricity, high speed diesel, motor spirit, natural gas], used in supplying the service shall be received from registered supplier only; Provided also that inputs and input services on which tax is paid on reverse charge basis shall be deemed to have been purchased from registered person; Provided also that where value of input and input services received from registered suppliers during the financial year (or part of the financial year till the date of issuance of completion certificate or first occupation of the project, whichever is earlier) falls short of the said threshold of 80 per cent., tax shall be paid by the promoter on value of input and input services comprising such shortfall at the rate of eighteen percent on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017) shall apply to him as if he is the person liable for paying the tax in relation to the supply of such goods or services or both; Provided also that notwithstanding anything contained herein above, where cement is received from an unregisteredperson, the promoter shall pay tax on supply of such cement at the applicable rates on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017), shall apply to him as if he is the person liable for paying the tax in relation to such supply of cement; (Please refer to the illustrations in annexure III) Explanation. - 1. The promoter shall maintain project wise account of inward supplies from registered and unregistered supplier and calculate tax payments on the shortfall at the end of the financial year and shall submit the same in the prescribed form electronically on the common portal by end of the quarter following the financial year. The tax liability on the shortfall of inward supplies from unregistered person so determined shall be added to his output tax liability in the month not later than the month of June following the end of the financial year.                    2.Notwithstanding anything contained in Explanation 1 above, tax on cement received from unregistered person shall be paid in the month in which cement is received. 3. Input Tax Credit not availed shall be reported every month by reporting the same as ineligible credit in GSTR-3B [Row No. 4 (D)(2)]."
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(id) Construction of residential apartments other than affordable residential apartments by a promoter in a REP other than a RREP which commences on or after 1 st April, 2019 or in an ongoing REP other than RREP in respect of which the promoter has not exercised option to pay integrated tax on construction of apartments at the rates as specified for item (ie) or (if) below, as the case may be, in the manner prescribed therein, intended for sale to a buyer, wholly or partly, except where the entire consideration has been received after issuance of completion certificate, where required, by the competent authority or after its first occupation, whichever is earlier. (Provisions of paragraph 2 of this notification shall apply for valuation of this service)",
    "3.75",
    "3.75",
    " ",
    "7.5",
    "Provided that the integrated tax at the rate specified in column (4) shall be paid in cash, that is, by debiting the electronic cash ledger only; Provided also that credit of input tax charged on goods and services used in supplying the service has not been taken except to the extent as prescribed in Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that the registered person shall pay, by debit in the electronic credit ledger or electronic cash ledger, an amount equivalent to the input tax credit attributable to construction in a project, time of supply of which is on or after 1 st April, 2019, which shall be calculated in the manner as prescribed in the Annexure I in the case of REP other than RREP and in Annexure II in the case of RREP; Provided also that where a registered person (landowner- promoter) who transfers development right or FSI (including additional FSI) to a promoter (developer- promoter) against consideration, wholly or partly, in the form of construction of apartments, - (i) the developer- promoter shall pay tax on supply of construction of apartments to the landowner promoter, and (ii) such landowner– promoter shall be eligible for credit of taxes charged from him by the developer promoter towards the supply of construction of apartments by developer- promoter to him, provided the landowner- promoter further supplies such apartments to his buyers before issuance of completion certificate or first occupation, whichever is earlier, and pays tax on the same which is not less than the amount of tax charged from him on construction of such apartments by the developer promoter. Explanation. – (i) “developer- promoter” is a promoter who constructs or converts a building into apartments or develops a plot for sale, (ii) “landowner- promoter” is a promoter who transfers the land or development rights or FSI to a developer- promoter for construction of apartments and receives constructed apartments against such transferred rights and sells such apartments to his buyers independently. (iii) the landowner- promoter shall be eligible to utilise the credit of tax charged to him by the developer- promoter for payment of tax on apartments supplied by the landowner- promoter in such project. Provided also that eighty percent of value of input and input services, [other than services by way of grant of development rights, long term lease of land (against upfront payment in the form of premium, salami, development charges etc.) or FSI (including additional FSI), electricity, high speed diesel, motor spirit, natural gas], used in supplying the service shall be received from registered supplier only; Provided also that inputs and input services on which tax is paid on reverse charge basis shall be deemed to have been purchased from registered person; Provided also that where value of input and input services received from registered suppliers during the financial year (or part of the financial year till the date of issuance of completion certificate or first occupation of the project, whichever is earlier) falls short of the said threshold of 80 per cent., tax shall be paid by the promoter on value of input and input services comprising such shortfall at the rate of eighteen percent on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017) shall apply to him as if he is the person liable for paying the tax in relation to the supply of such goods or services or both; Provided also that notwithstanding anything contained herein above, where cement is received from an unregisteredperson, the promoter shall pay tax on supply of such cement at the applicable rates on reverse charge basis and all the provisions of the Integrated Goods and Services Tax Act, 2017 (13 of 2017), shall apply to him as if he is the person liable for paying the tax in relation to such supply of cement; (Please refer to the illustrations in annexure III) Explanation. - 1. The promoter shall maintain project wise account of inward supplies from registered and unregistered supplier and calculate tax payments on the shortfall at the end of the financial year and shall submit the same in the prescribed form electronically on the common portal by end of the quarter following the financial year. The tax liability on the shortfall of inward supplies from unregistered person so determined shall be added to his output tax liability in the month not later than the month of June following the end of the financial year.                    2.Notwithstanding anything contained in Explanation 1 above, tax on cement received from unregistered person shall be paid in the month in which cement is received. 3. Input Tax Credit not availed shall be reported every month by reporting the same as ineligible credit in GSTR-3B [Row No. 4 (D)(2)]."
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(ie) Construction of an apartment in an ongoing project under any of the schemes specified in sub-item (b), sub-item (c), subitem (d), sub-item (da) and sub-item (db) of item (iv); sub-item (b), sub-item (c), sub- item (d) and sub-item (da) of item (v); and sub-item (c) of item (vi), against serial number 3 of the Table, in respect of which the promoter has exercised option to pay integrated tax on construction of apartments at the rates as specified for this item. (Provisions of paragraph 2 of this notification shall apply for valuation of this service)",
    "6",
    "6",
    " ",
    "12",
    "Provided that in case of ongoing project, the registered person shall exercise one time option in the Form at Annexure IV to pay integrated tax on construction of apartments in a project at the rates as specified for item (ie) or (if), as the case may be, by the [20th] 6 of May, 2019; Provided also that where the option is not exercised in Form at annexure IV by the [20th]of May, 2019, option to pay tax at the rates as applicable to item (i) or (ia) or (ib) or (ic) or (id) above, as the case may be, shall be deemed to have been exercised; Provided also that invoices for supply of the service can be issued during the period from 1st April 2019 to[20th]8 May 2019 before exercising the option, but such invoices shall be in accordance with the option to be exercised"
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(if) Construction of a complex, building, civil structure or a part thereof, including,- (i) commercial apartments (shops, offices,godowns etc.) by a promoter in a REP other than RREP, (ii) residential apartments in an ongoing project, other than affordable residential apartments, in respect of which the promoter has exercised option to pay integrated tax on construction of apartments at the rates as specified for this item in the manner prescribed herein, but excluding supply by way of services specified at items (i), (ia), (ib), (ic), (id) and (ie) above intended for sale to a buyer, wholly or partly, except where the entire consideration has been received after issuance of completion certificate, where required, by the competent authority or after its first occupation, whichever is earlier. Explanation. -For the removal of doubt, it is hereby clarified that, supply by way of services specified at items (i), (ia), (ib), (ic), (id) and (ie) in column (3) shall attract integrated tax prescribed against them in column (4) subject to conditions specified against them in column (5) and shall not be levied at the rate as specified under this entry. (Provisions of paragraph 2 of this notification shall apply for valuation of this service",
    "9",
    "9",
    " ",
    "18",
    "Provided that in case of ongoing project, the registered person shall exercise one time option in the Form at Annexure IV to pay integrated tax on construction of apartments in a project at the rates as specified for item (ie) or (if), as the case may be, by the [20th] 6 of May, 2019; Provided also that where the option is not exercised in Form at annexure IV by the [20th]of May, 2019, option to pay tax at the rates as applicable to item (i) or (ia) or (ib) or (ic) or (id) above, as the case may be, shall be deemed to have been exercised; Provided also that invoices for supply of the service can be issued during the period from 1st April 2019 to[20th]8 May 2019 before exercising the option, but such invoices shall be in accordance with the option to be exercised"
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(vii) Composite supply of works contract as defined in clause (119) of section 2 of the Central Goods and Services Tax Act, 2017, involving predominantly earth work (that is, constituting more than 75 per cent. of the value of the works contract) provided to the\nCentral Government, State Government, [Union territory or a local authority]37.",
    "6",
    "6",
    " ",
    "12",
    ""
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(viii) Composite supply of works contract as defined in clause (119) of section 2 of the Central Goods and Services Tax Act, 2017 and associated services, in respect of offshore works contract relating to oil and gas exploration and production (E&P) in the offshore area beyond 12 nautical miles from the nearest point of the appropriate base line.",
    "6",
    "6",
    " ",
    "12",
    ""
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(x) Composite supply of works contract as defined in clause (119) of section 2 of the Central Goods and Services Tax Act, 2017 provided by a sub-contractor to the main contractor providing services specified in item (vii) above to the Central Government, State Government, Union territory or a local authority",
    "6",
    "6",
    " ",
    "12",
    ""
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(xi) Services by way of house-keeping, such as plumbing, carpentering, etc. where the person supplying such service through electronic commerce operator is not liable for registration under sub-section (1) of section 22 of the Central Goods and Services Tax Act, 2017.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods and services has not been taken\n[Please refer to Explanation no. (iv)]"
  ],
  [
    "3",
    "Heading 9954\n(Construction services)",
    "(xii) Construction services other than (i), (ia), (ib), (ic), (id), (ie), (if), (vii), (viii), (x) and (xi) above.\nExplanation. - For the removal of doubt, it is hereby clarified that, supply by way of services specified at items (i), (ia), (ib), (ic), (id), (ie) and (if) in column (3) shall attract integrated tax prescribed against them in column (4) subject to conditions specified against them in column (5) and shall not be levied at the rate as specified under this entry.",
    "9",
    "9",
    " ",
    "18",
    ""
  ],
  [
    "4",
    "Section 6",
    "Distributive Trade Services; Accommodation, Food and Beverage Service; Transport Services; Gas and Electricity Distribution Services",
    "",
    "",
    " ",
    "",
    ""
  ],
  [
    "5",
    "Heading 9961",
    "Services in wholesale trade.\nExplanation-This service does not include sale or purchase of goods but includes:\n– Services of commission agents, commodity brokers, and auctioneers and all other traders who negotiate whole sale commercial transactions between buyers and sellers, for a fee or commission’\n– Services of electronic whole sale agents and brokers,\n– Services of whole sale auctioning houses.",
    "9",
    "9",
    " ",
    "18",
    "-"
  ],
  [
    "6",
    "Heading 9962",
    "Services in retail trade.\nExplanation- This service does not include sale or purchase of goods",
    "9",
    "9",
    " ",
    "18",
    "-"
  ],
  [
    "7",
    "Heading 9963\n(Accommodation, food and beverage services)",
    "(i) Supply of “hotel accommodation” having value of supply of a unit of accommodation less than or equal to seven thousand five hundred rupees per unit per day or equivalent.",
    "6",
    "6",
    " ",
    "12",
    "-"
  ],
  [
    "7",
    "Heading 9963\n(Accommodation, food and beverage services)",
    "(ii) Supply of ‘restaurant service’ other than at ‘specified premises’",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods and services used in supplying the service has not been taken [Please refer to Explanation no. (iv)]"
  ],
  [
    "7",
    "Heading 9963\n(Accommodation, food and beverage services)",
    "(iii) Supply of goods, being food or any other article for human consumption or any drink, by the Indian Railways or Indian Railways Catering and Tourism Corporation Ltd. or their licensees, whether in trains or at platforms.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods and services used in supplying 2 the service has not been taken [Please refer to Explanation no. (iv)]"
  ],
  [
    "7",
    "Heading 9963\n(Accommodation, food and beverage services)",
    "(iv) Supply of ‘outdoor catering’, at premises other than ‘specified premises’ provided by any person other than-\n(a) suppliers providing ‘hotel accommodation’ at ‘specified premises’, or\n(b) suppliers located in ‘specified premises’.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods and services used in supplying the service has not been taken [Please refer to Explanation (iv)]"
  ],
  [
    "7",
    "Heading 9963\n(Accommodation, food and beverage services)",
    "(v) Composite supply of “outdoor catering‟ together with renting of premises (including hotel, convention center, club, pandal, shamiana or any other place, specially arranged for organising a function) at premises other than “specified premises” provided by any person other than-\n(a) suppliers providing “hotel accommodation” at “specified premises”, or\n(b) suppliers located in „specified premises‟.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods and services used in supplying the service has not been taken [Please refer to Explanation (iv)]"
  ],
  [
    "7",
    "Heading 9963\n(Accommodation, food and beverage services)",
    "(vi) Accommodation, food and beverage services other than (i) to (v) above\nExplanation:\n(a) For the removal of doubt, it is hereby clarified that, supplies covered by items (ii), (iii), (iv) and (v) in column (3) shall attract central tax prescribed against them in column (4) subject to conditions specified against them in column (5), which is a mandatory rate and shall not be levied at the rate as specified under this entry.\n(b) This entry covers supply of ‘restaurant service’ at ‘specified premises’\n(c) This entry covers supply of ‘hotel accommodation’ having value of supply of a unit of accommodation above seven thousand five hundred rupees per unit per day or equivalent.\n(d) This entry covers supply of ‘outdoor catering’, provided by suppliers providing ‘hotel accommodation’ at ‘specified premises’, or suppliers located in ‘specified premises’.\n(e) This entry covers composite supply of ‘outdoor catering’ together with renting of premises (including hotel, convention center, club, pandal, shamiana or any other place, specially arranged for organising a function) provided by suppliers providing ‘hotel accommodation’ at ‘specified premises’, or suppliers located in ‘specified premises’.",
    "9",
    "9",
    " ",
    "18",
    ""
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "(i) Transport of passengers, with or without accompanied belongings, by rail in first class or air conditioned coach.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged in respect of goods used in supplying the service is not utilised for paying integrated tax, central tax, state tax or union territory tax on the supply of the service"
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "(ii) Transport of passengers, with or without accompanied belongings by-\n(a) air conditioned contract carriage other than motorcab;\n(b) air conditioned stage carriage;\n(c) radio taxi.\nExplanation.-\n(a) “contract carriage” has the meaning assigned to it in clause (7) of section 2 of the Motor Vehicles Act, 1988 (59 of 1988);\n(b) “stage carriage” has the meaning assigned o it in clause (40) of section 2 of the Motor Vehicles Act, 1988 (59 of 1988) ;\n(c) “radio taxi” means a taxi including a radio cab, by whatever name called, which is in two-way radio communication with a central control office and is enabled for tracking using Global Positioning System (GPS) or General Packet Radio Service (GPRS).",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods [and]53 services used in supplying the service has not been taken\n[Please refer to Explanation no.(iv)]"
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "(iii) Transport of passengers, with or without accompanied belongings, by air in economy class.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods used in supplying the service has not been taken\n[Please refer to Explanation no.(iv)]"
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "(iv) Transport of passengers, with or without accompanied belongings, by air, embarking from or terminating in a Regional Connectivity Scheme Airport, as notified by the Ministry of Civil Aviation.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods used in supplying the service has not been taken\n[Please refer to Explanation no.(iv)]"
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "(iva) Transportation of passengers, with or without accompanied baggage, by air, by non-scheduled air transport service or charter operations, engaged by specified organisations in respect of religious pilgrimage facilitated by the Government of India, under bilateral arrangement.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods used in supplying the service has not been taken\n[Please refer to clause (iv) of paragraph 4 relating to Explanation"
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "(v) Transport of passengers by air, with or without accompanied belongings, in other than economy class.",
    "6",
    "6",
    " ",
    "12",
    "-"
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "(vi) Transport of passengers by any motor vehicle designed to carry passengers where the cost of fuel is included in the consideration charged from the service recipient.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods and services used in supplying the service, other than the input tax credit of input service in the same line of business (i.e.\nservice procured from another service provider of transporting passengers in a motor vehicle or renting of a motor vehicle), has not been taken. [Please refer to Explanation no. (iv)]"
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "“(via) Transport of passengers, with or without accompanied belongings, by ropeways.",
    "2.5",
    "2.5",
    " ",
    "5",
    "The credit of input tax charged on goods used in supplying the service has not been taken.\n[Please refer to Explanation no. (iv)]”;"
  ],
  [
    "8",
    "Heading 9964\n(Passenger transport services)",
    "(vii) Passenger transport services other than (i), (ii), (iii), (iv), (iva), (v), (vi) and (via) above.",
    "9",
    "9",
    " ",
    "18",
    "-"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(i) Transport of goods by rail (other than services specified at item no. (iv)).",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged in respect of goods in supplying the service is not utilised for paying integrated tax, central tax, state tax or union territory tax on the supply of the service"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(ii) Transport of goods in a vessel including services provided or agreed to be provided by a person located in non-taxable territory to a person located in non-taxable territory by way of transportation of goods by a vessel from a place outside India up to the customs station of clearance in India.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods (other than on ships, vessels including bulk carriers and tankers) used in supplying the service has not been taken\nExplanation: This condition will not apply where the supplier of service is located in non- taxable territory. Please refer to Explanation no. (iv)]"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(iii) Services of Goods Transport Agency (GTA) in relation to transportation of goods (including used house hold goods for personal use) supplied by a GTA where,-",
    "",
    "",
    " ",
    "",
    ""
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(a) GTA does not exercise the option to itself pay GST on the services supplied by it;",
    "2.5",
    "2.5",
    " ",
    "5",
    "The credit of input tax charged on goods and services used in supplying the service has not been taken.\n[Please refer to Explanation no. (iv)]"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(b) GTA exercises the option to itself pay GST on services supplied by it.",
    "2.5 or 6",
    "2.5 or 6",
    " ",
    "5 or 12",
    "(1) In respect of supplies on which GTA pays tax at the rate of 2.5%, GTA shall not take credit of input tax charged on goods and services used in supplying the service. [Please refer to Explanation no. (iv)]\n(2) The option by GTA to itself pay GST on the services supplied by it during a Financial Year shall be exercised by making a declaration in Annexure V on or before the 15th March of the preceding Financial Year:\nProvided that the option for the Financial Year 2022-2023 shall be exercised on or before the 16th August, 2022:\nProvided further that invoice for supply of the service charging Central tax at the rates as applicable to clause (b) may be issued during the period from the 18th July,2022 to 16th August, 2022 before exercising the option for the financial year 2022-2023 but in such a case the supplier shall exercise the option to pay GST on its supplies on or before the 16th August,2022.”"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "",
    "",
    "6",
    " ",
    "12",
    "-"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(v) Transportation of [natural gas, petroleum crude, motor spirit (commonly known as petrol), high speed diesel or aviation turbine fuel]59 through pipeline",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods and services used in supplying the service has not been taken [Please refer to Explanation no. (iv)]"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(vi) Multimodal transportation of goods.\nExplanation 1.-\n(a) “multimodal transportation” means carriage of goods, by at least two different modes of transport from the place of acceptance of goods to the place of delivery of goods by a multimodal transporter;\n(b) “mode of transport” means carriage of goods by road, air, rail, inland waterways or sea;\n(c) “multimodal transporter” means a person who,-\n(A) enters into a contract under which he undertakes to perform multimodal transportation against freight; and\n(B) acts as principal, and not as an agent either of the consignor, or consignee or of the carrier participating in the multimodal transportation and who assumes responsibility for the performance of the said contract.\nExplanation 2.-\nNothing contained in this item shall apply to supply of a service other than by way of transport of goods from a place in India to another place in India.",
    "6",
    "6",
    " ",
    "12",
    "-"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(via) Transport of goods by ropeways.",
    "2.5",
    "2.5",
    " ",
    "5",
    "The credit of input tax charged on goods used in supplying the service has not been taken.\n[Please refer to Explanation no. (iv)]”;"
  ],
  [
    "9",
    "Heading 9965\n(Goods transport services)",
    "(vii) Goods transport services other than (i), (ii), (iii), (iv), (v), (vi) and (via) above.",
    "9",
    "9",
    " ",
    "18",
    "-"
  ],
  [
    "10",
    "Heading 9966\nRental services of transport vehicles [with operators]",
    "(i) Renting of any motor vehicle designed to carry passengers where the cost of fuel is included in the consideration charged from the service recipient.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods and services used in supplying the service, other than the input tax credit of input service in the same line of business (i.e.service procured from another service provider of transporting passengers in a motor vehicle or renting of a motor vehicle) has not been taken., [Please refer to Explanation no. (iv)]"
  ],
  [
    "10",
    "Heading 9966\nRental services of transport vehicles [with operators]",
    "(ia) Renting of goods carriage where the cost of fuel is included in the consideration charged from the service recipient.",
    "6",
    "6",
    " ",
    "12",
    ""
  ],
  [
    "10",
    "Heading 9966\nRental services of transport vehicles [with operators]",
    "[(ii) Time charter of vessels for transport of goods.",
    "2.5",
    "2.5",
    " ",
    "5",
    "Provided that credit of input tax charged on goods (other than on ships, vessels including bulk carriers and tankers) has not been taken\n[Please refer to Explanation no. (iv)]"
  ],
  [
    "10",
    "Heading 9966\nRental services of transport vehicles [with operators]",
    "(iii) Rental services of transport vehicles with operators, other than (i), (ia) and (ii) above.",
    "9",
    "9",
    " ",
    "18",
    "-"
  ],
  [
    "11",
    "Heading 9967\n(Supporting services in transport)",
    "Supporting services in transport.\nExplanation: This entry does not include goods transport service involving Goods Transport Agency (GTA) service, which falls under Heading 9965.",
    "9",
    "9",
    " ",
    "18",
    "-"
  ],
  [
    "12",
    "Heading 9968",
    "Postal and courier services.",
    "9",
    "9",
    " ",
    "18",
    "-"
  ],
  [
    "13",
    "Heading 9969",
    "Electricity, gas, water and other distribution services.",
    "9",
    "9",
    " ",
    "18",
    "-"
  ],
  [
    "14",
    "Section 7",
    "Financial and related services; real estate services; and rental and leasing services.",
    "",
    "",
    " ",
    "",
    ""
  ]
];

export const GstSacCodes: React.FC = () => {
  return (
    <ResourceLayout 
      title="Gst Sac Codes"
      description="View and search through Gst Sac Codes documents."
      data={pageData}
      type="table"
    />
  );
};
