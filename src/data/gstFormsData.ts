export interface GSTForm {
  id: string;
  formNumber: string;
  title: string;
  category: string;
  categoryLabel?: string;
  purpose?: string;
  relevantSections?: string[];
  status?: 'Current' | 'Historical' | 'Legacy' | 'Unknown';
  source: string;
  sourceUrl: string;
}

export const gstFormsData: GSTForm[] = [
  {
    "id": "83090b83-8715-4965-9b67-8513b0a8a1cc",
    "formNumber": "GSTR-1",
    "title": "Details of outward supplies of goods or services",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "49b0a338-9594-45e7-bfd5-50ffb76062d6",
    "formNumber": "GST ENR-01",
    "title": "Application for Enrolment under section 35(2)",
    "category": "ENR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "e3fc9e9c-a498-4c9d-92d9-beaf013d9978",
    "formNumber": "GST ENR-02",
    "title": "Application for obtaining unique common enrolment number",
    "category": "ENR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "8e0288fe-791e-472a-be17-fe06bd83c43b",
    "formNumber": "GSTR-2A",
    "title": "Details of auto drafted supplies",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "4e900a02-b67b-49cd-8b2e-dcab5cce18fa",
    "formNumber": "GSTR-2B",
    "title": "Auto-drafted ITC Statement",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "c90b7d1e-d5e1-4f1f-9371-3995594ff969",
    "formNumber": "GST ITC-02A",
    "title": "Declaration for transfer of ITC pursuant to registration under sub-section (2) of section 25",
    "category": "ITC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7a6d34d1-cb53-47cc-9101-93cf46a9af37",
    "formNumber": "GSTR-3A",
    "title": "Form GSTR - 3A",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "9556a399-f926-4b64-b9d8-30823e1ad46a",
    "formNumber": "GSTR-3B",
    "title": "FORM GSTR-3B",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "c43c8041-8f75-4678-9c94-7f5c36dae783",
    "formNumber": "GSTR-4(Old)",
    "title": "Quarterly return for registered person opting for composition levy",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "e219c708-d778-4106-8799-df58ea360b09",
    "formNumber": "GSTR-4(New)",
    "title": "Return for financial year of registered person who has opted for composition levy or availing benefit of notification No. 02/2019- Central Tax (Rate)",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "377be6d9-ae94-46a3-b41c-75cbb1e23bef",
    "formNumber": "GSTR-4A",
    "title": "Auto-drafted details for registered person opting for composition",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "23927a0d-6757-4f52-927d-63dff58be413",
    "formNumber": "GSTR-5",
    "title": "Return for Non-resident taxable person",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "a2899f19-6f46-4353-ab31-1828624a7c25",
    "formNumber": "GSTR-5A",
    "title": "Details of supplies of online information and database access or retrieval services by a person located outside India made to non-taxable persons in India",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "64734ba8-9c47-4b13-bded-5604f78e0d70",
    "formNumber": "GSTR-6",
    "title": "Return for input service distributor",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6dc84f3f-1793-41e6-81f2-c679ba055513",
    "formNumber": "GSTR-6A",
    "title": "Details of supplies auto-drafted from",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "23518a44-abcd-4a42-8fe1-f59bdbf55699",
    "formNumber": "GSTR-7",
    "title": "Return for Tax Deducted at Source",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "1032dac4-058a-4d18-8436-74b00d57e08e",
    "formNumber": "GSTR-7A",
    "title": "Tax Deduction at Source Certificate",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "c6c04705-4b32-40eb-a159-e042476604f6",
    "formNumber": "GSTR-8",
    "title": "Statement for tax collection at source",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ef467abf-5626-4ff9-b187-c92caf7073e3",
    "formNumber": "GSTR-9",
    "title": "Annual Return",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "b21e9e92-9eec-48cd-91cd-ef03626f37bc",
    "formNumber": "GSTR-9A",
    "title": "Annual Return (For Composition Taxpayer)",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "27787522-3e40-4fe3-831f-b5f732707c42",
    "formNumber": "GSTR-9C",
    "title": "Reconciliation Statement",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "9aa4b954-1d8b-4406-a13e-cf4a2c8b0c13",
    "formNumber": "GSTR-10",
    "title": "Final Return",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "9d131c9f-c2a7-4548-8e5a-4b6c118b73f2",
    "formNumber": "GSTR-11",
    "title": "Statement of inward supplies by persons having Unique Identification Number (UIN)",
    "category": "GSTR",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6c0fd330-158b-4d60-9ef3-5db29a47c288",
    "formNumber": "EWB-01",
    "title": "E-Way Bill",
    "category": "EWB",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "09552722-2760-4c0e-9e4b-6991d21556f2",
    "formNumber": "EWB-02",
    "title": "Consolidated E-Way Bill",
    "category": "EWB",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "873e54d7-0118-485f-8ffd-5a9fe9fbee4c",
    "formNumber": "EWB-03",
    "title": "Verification Report",
    "category": "EWB",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "c1b0fe0f-97fa-480b-935b-e73206f8760d",
    "formNumber": "EWB-04",
    "title": "Report of detention",
    "category": "EWB",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "49f42ff0-4cbc-4abd-95a6-d3eb69871a33",
    "formNumber": "EWB-05",
    "title": "Application for unblocking of the facility for generation of E-Way Bill",
    "category": "EWB",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "988c5d3d-b0ff-4a2d-a226-e86f91c2a43d",
    "formNumber": "EWB-06",
    "title": "FORM GST EWB - 06",
    "category": "EWB",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d644cfa1-247f-4543-aaa9-1753cf997f11",
    "formNumber": "GST INV-1 (NEW)",
    "title": "Format/Schema for e-Invoice",
    "category": "INV",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "8a676433-2714-4cc3-881d-ea48b4a51fb5",
    "formNumber": "INS-01",
    "title": "AUTHORISATION FOR INSPECTION OR SEARCH",
    "category": "INS",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "0ed3a058-fefc-41cd-b283-057f2a89119d",
    "formNumber": "INS-02",
    "title": "ORDER OF SEIZURE",
    "category": "INS",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "23d55a44-7ad1-4747-85f8-ea039c567a74",
    "formNumber": "INS-03",
    "title": "ORDER OF PROHIBITION",
    "category": "INS",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6b7ed9dd-5778-4261-b5e4-25eaf8501fd3",
    "formNumber": "INS-04",
    "title": "BOND FOR RELEASE OF GOODS SEIZED",
    "category": "INS",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "918c2163-e5c3-4302-960a-788a4cc26e09",
    "formNumber": "INS-05",
    "title": "ORDER OF RELEASE OF GOODS/ THINGS OF PRISHABLE OR HAZARDOUS NATURE",
    "category": "INS",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "8791558f-7146-4c51-b2ce-96f7da57444e",
    "formNumber": "CMP-01",
    "title": "Intimation to pay tax under section 10 (composition levy) (Only for persons registered under the existing law migrating on the appointed day)",
    "category": "CMP",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "538503a1-94e4-4c70-bb2f-0f323f90637b",
    "formNumber": "CMP-02",
    "title": "Intimation to pay tax under section 10 (composition levy) (For persons registered under the Act)",
    "category": "CMP",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "623f2c2a-75d5-4a4a-bc83-34e3ac29094f",
    "formNumber": "CMP-03",
    "title": "Intimation of details of stock on date of opting for composition levy",
    "category": "CMP",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "2acad76d-6f6b-4ede-8d3f-e9db317c97b6",
    "formNumber": "CMP-04",
    "title": "Intimation/Application for Withdrawal from Composition Levy",
    "category": "CMP",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "5b11f8be-5664-4935-855d-0931fabd2e05",
    "formNumber": "CMP-05",
    "title": "FORM GST CMP-05",
    "category": "CMP",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "fbeed206-83ad-470f-b1d0-7b57628929ee",
    "formNumber": "CMP-06",
    "title": "Reply to the notice to show cause",
    "category": "CMP",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ec985da3-437d-4117-9ebc-d28342056146",
    "formNumber": "CMP-07",
    "title": "FORM GST CMP-07",
    "category": "CMP",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "38e8a675-b386-4a4d-8324-3f5b1f662e88",
    "formNumber": "CMP-08",
    "title": "Statement for payment of self-assessed tax",
    "category": "CMP",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7e554ae1-8372-4725-8ea9-91d212ed5ede",
    "formNumber": "REG-01",
    "title": "Application for Registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "836c665e-01c5-4eae-b9a6-0e8198042859",
    "formNumber": "REG-02",
    "title": "Acknowledgment",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "09b61f07-8cdc-4a02-bd7a-139b728e4e4e",
    "formNumber": "REG-03",
    "title": "Notice for Seeking Additional Information/Clarification/Documents relating to Application for Registration/Amendment/Cancellation",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "1e34538f-8695-48aa-b8a3-c91996fe170e",
    "formNumber": "REG-04",
    "title": "Clarification/additional information/document for Registration/Amendment/Cancellation",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "e83af75f-6d5c-4e3f-b878-c4ed8ad839b1",
    "formNumber": "REG-05",
    "title": "Order of Rejection of Application for Registration/Amendment/Cancellation",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "10ab7d70-2019-4cb2-bb0f-af6774c8a102",
    "formNumber": "REG-06",
    "title": "FORM GST REG-06",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "672e0ca0-6690-4920-9277-084c725eaef0",
    "formNumber": "REG-07",
    "title": "Application for Registration as Tax Deductor at source (u/s 51) or Tax Collector at source (u/s 52)",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d35fc096-1461-43c7-b681-a9bf9a6430e4",
    "formNumber": "REG-08",
    "title": "Order of Cancellation of Registration as Tax Deductor at source or Tax Collector at source",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ae240a69-07a4-402d-be4f-8380fdbbfc1e",
    "formNumber": "REG-09",
    "title": "Application for Registration of Non Resident Taxable Person",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7570362a-1003-476b-bbe1-b1a5e426d842",
    "formNumber": "REG-10",
    "title": "Application for registration of person supplying online information and database access or retrieval services from a place outside India to a person in India,other than a registered person",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6ff47529-d198-4ad1-a2d9-a9a6aa2d14d2",
    "formNumber": "REG-11",
    "title": "Application for extension of registration period by casual / non-resident taxable person",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7a9d1ef2-1a7d-4ae1-b394-42020dd9f1ec",
    "formNumber": "REG-12",
    "title": "Order of Grant of Temporary Registration/ Suo Moto Registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "46a3641a-473d-435f-851b-6b531a3e66f8",
    "formNumber": "REG-13",
    "title": "Application/Form for grant of Unique Identity Number (UIN) to UN Bodies/Embassies /others State /UT - District)",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "11f9aacc-1c52-454e-aca6-e4885c0af198",
    "formNumber": "REG-14",
    "title": "Application for Amendment in Registration Particulars (For all types of registered persons)",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "45fa97af-94e0-4fca-bc93-8daae6d5f3f1",
    "formNumber": "REG-15",
    "title": "Order of Amendment",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "963c9ceb-661b-44d6-8465-2531d32934d8",
    "formNumber": "REG-16",
    "title": "Application for Cancellation of Registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "a7ff4d64-82f0-4a0c-bc93-de1299693202",
    "formNumber": "REG-17",
    "title": "Show Cause Notice for Cancellation of Registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "df359032-a942-4c93-9502-bb378ac63c94",
    "formNumber": "REG-18",
    "title": "Reply to the Show Cause Notice issued for cancellation for registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "1956d1e5-3762-415e-b1cd-1fadeba4c2f0",
    "formNumber": "REG-19",
    "title": "Order for Cancellation of Registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "700c97d5-8731-471b-9977-16727e47c4c0",
    "formNumber": "REG-20",
    "title": "Order for dropping the proceedings for cancellation of registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "675da53b-e1ae-439b-8386-1f5f796a50aa",
    "formNumber": "REG-21",
    "title": "Application for Revocation of Cancellation of Registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "e20d8cfd-3962-4491-a1f2-f5794c0b354d",
    "formNumber": "REG-22",
    "title": "Order for revocation of cancellation of registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d031ebff-3aff-4d9d-b51b-5e2f3f0e0c0c",
    "formNumber": "REG-23",
    "title": "Show Cause Notice for rejection of application for revocation of cancellation of registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "9d0db1b1-bb72-421b-93ff-9d49120ac164",
    "formNumber": "REG-24",
    "title": "Reply to the notice for rejection of application for revocation of cancellation of registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ce6f5dd4-15aa-4121-ae5d-4cf744b57aa1",
    "formNumber": "REG-25",
    "title": "Certificate of Provisional Registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "be605223-8d09-4e70-9b4c-a4ddd587b443",
    "formNumber": "REG-26",
    "title": "Application for Enrolment of Existing Taxpayer",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "eff1216c-ee36-42db-a001-5b07b7aee41d",
    "formNumber": "REG-27",
    "title": "Show Cause Notice for cancellation of provisional registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "395a4f37-5a47-47c9-a4f3-cf3b8bd6d368",
    "formNumber": "REG-28",
    "title": "Order for cancellation of provisional registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "021df902-61cd-44ec-a053-e9dd46482d14",
    "formNumber": "REG-29",
    "title": "APPLICATION FOR CANCELATION OF REGISTRATION OF MIGRATED TAXPAYERS",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "982f4489-b13b-4ef0-a0ff-9cfea44eb7bb",
    "formNumber": "REG-30",
    "title": "Form for Field Visit Report",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "9db03d27-bf5e-4e5b-a158-518cc23dcb42",
    "formNumber": "REG-31",
    "title": "Intimation for Suspension and Notice for Cancellation of Registration",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "688b2828-8d42-4992-bf28-0263f61e0e33",
    "formNumber": "REG-32",
    "title": "Application for Withdrawal",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "2612173c-ad2c-43a0-9680-cb5743804a4a",
    "formNumber": "REG-33",
    "title": "Order of withdrawal from option availed under sub-rule(1) of rule14A",
    "category": "REG",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "2cace342-31ca-4bca-8729-6253b6d46bf8",
    "formNumber": "ITC-01",
    "title": "Declaration for claim of input tax credit under sub-section (1) of section 18",
    "category": "ITC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d58ca4fa-2061-4676-9e3e-17f7488a2759",
    "formNumber": "ITC-02",
    "title": "Declaration for transfer of ITC in case of sale, merger,demerger,amalgamation,lease or transfer of a business under sub-section (3) of section 18",
    "category": "ITC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "03762e19-24c9-4f0b-913e-2ec1afeafc0d",
    "formNumber": "ITC-02A",
    "title": "Declaration for transfer of ITC pursuant to registration under sub-section (2) of section 25",
    "category": "ITC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "dc47828a-d4ca-4c13-bdf9-ccf776511689",
    "formNumber": "ITC-03",
    "title": "Declaration for intimation of ITC reversal/payment of tax on inputs",
    "category": "ITC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "5ccc54aa-c098-4f51-a908-14686116c479",
    "formNumber": "ITC-04",
    "title": "Details of goods/capital goods sent to job worker and received back",
    "category": "ITC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "5d1e838e-a14e-4d89-b97f-945cd3480bbf",
    "formNumber": "PCT-01",
    "title": "Application for Enrolment as Goods and Services Tax Practitioner",
    "category": "PCT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6f7ba1d7-9494-4608-9c01-c2fc6ec3ece6",
    "formNumber": "PCT-02",
    "title": "Enrolment Certificate of Goods and Services Tax Practitioner",
    "category": "PCT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "a21d45bf-8efb-458d-96c8-061e9ae492b9",
    "formNumber": "PCT-03",
    "title": "Show Cause Notice for disqualification",
    "category": "PCT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "197d6d16-49af-4aac-9239-349d0bec5f29",
    "formNumber": "PCT-04",
    "title": "Order of rejection of enrolment as GST Practitioner",
    "category": "PCT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "0f2f98c0-8e30-4260-93be-3b4abeed7f12",
    "formNumber": "PCT-05",
    "title": "Authorisation / withdrawal of authorisation for Goods and Services Tax Practitioner",
    "category": "PCT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "816fd0bb-f612-4a05-92f6-37682139e269",
    "formNumber": "PCT-06",
    "title": "APPLICATION FOR CANCELLATION OF ENROLMENT AS GOODS AND SERVICES TAX PRACTITIONER",
    "category": "PCT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "692ae312-2797-4ca4-9a52-c815f5b10791",
    "formNumber": "PCT-07",
    "title": "ORDER OF CANCELLATION OF ENROLMENT AS GOODS AND SERVICES TAX PRACTITIONER",
    "category": "PCT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "254ac51d-1082-4407-a696-f3473879399d",
    "formNumber": "PMT-01",
    "title": "Electronic Liability Register of Registered Person",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "0af3aa2e-ce17-44ef-b7be-8d7ad7163cb4",
    "formNumber": "PMT-01",
    "title": "Electronic Liability Register of Taxable Person",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "2ae9a008-21f0-4abf-a686-712443997054",
    "formNumber": "PMT-02",
    "title": "Electronic Credit Ledger of Registered Person",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "3c3d2222-e5e9-4011-badc-824ab777f0bd",
    "formNumber": "PMT-03",
    "title": "Order for re-credit of the amount to cash or credit ledger on rejection of refund claim",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "fdf229c0-5462-462f-be10-255c1bcc1fed",
    "formNumber": "PMT-03A",
    "title": "Order for re-credit of the amount to electronic credit ledger",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "a767f821-8642-4705-86f0-18b6df884860",
    "formNumber": "PMT-04",
    "title": "Application for intimation of discrepancy in Electronic Credit Ledger/Cash Ledger/ Liability Register",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7fc7f1c3-e1db-4d36-b49f-92fdde1ac426",
    "formNumber": "PMT-05",
    "title": "Electronic Cash Ledger",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "0447642e-90ff-43d4-97cf-a91af62a8ed3",
    "formNumber": "PMT-06",
    "title": "Challan for deposit of goods and services tax",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "92ef473c-4874-4ecf-8e85-9e0795d1c482",
    "formNumber": "PMT-07",
    "title": "Application for intimating discrepancy relating to payment",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7b37ac36-79e7-4dc8-ba60-8677a021db4b",
    "formNumber": "PMT-09",
    "title": "Transfer of amount from one account head to another in electronic cash ledger",
    "category": "PMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "9f6c20b5-d65e-4018-9f48-f5661d9d4002",
    "formNumber": "RFD-01",
    "title": "Application for Refund",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "4cf91027-b76e-4b5f-8e48-c5589ccfe625",
    "formNumber": "RFD-01A",
    "title": "Application for Refund (Manual)",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "201297d5-aa0f-4d8b-aaf9-b5ad93510dbe",
    "formNumber": "RFD-01B",
    "title": "Refund Order details",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "2472882c-f924-46c5-8fb4-198efe88b10f",
    "formNumber": "RFD-02",
    "title": "Acknowledgment",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7490b5ac-8f2e-4f71-b896-92531d62962f",
    "formNumber": "RFD-03",
    "title": "Deficiency Memo",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "4cecafc5-bce9-4d09-b480-57a5f536eac7",
    "formNumber": "RFD-04",
    "title": "Provisional Refund Order",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "b688f343-f6ea-47fc-9aa4-c67e44299cc1",
    "formNumber": "RFD-05",
    "title": "Payment Order",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "488d43be-2f82-45a5-943a-a7fb1d998b55",
    "formNumber": "RFD-06",
    "title": "Refund Sanction/Rejection Order",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "56bbe102-5666-4697-9108-06c80d1f7dff",
    "formNumber": "RFD-07",
    "title": "Order for Complete adjustment of sanctioned Refund",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "2b62680e-09f0-42de-b62d-a69bca32cf08",
    "formNumber": "RFD-08",
    "title": "Notice for rejection of application for refund",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "a8b6faab-1f09-44f5-8cf6-6a277d5bbdcc",
    "formNumber": "RFD-09",
    "title": "Reply to show cause notice",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "c10bf6fa-07a9-4b11-acf1-b80ee9f92cb3",
    "formNumber": "RFD-10",
    "title": "Application for Refund by any specialized agency of UN or any Multilateral Financial Institution and Organization, Consulate or Embassy of foreign countries, etc.",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "36810d92-7cbc-4ae7-8e1a-e656b3ae91e3",
    "formNumber": "RFD-10B",
    "title": "Application for refund by Duty Free Shops/Duty Paid Shops (Retail outlets)",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "e442d7e4-1297-4dbb-af99-ca7cd3a47303",
    "formNumber": "RFD-11",
    "title": "Furnishing of bond or Letter of Undertaking for export of goods or services",
    "category": "RFD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "b471d263-bc03-4918-81ae-984cca4fdecb",
    "formNumber": "ASMT-01",
    "title": "Application for Provisional Assessment under section 60",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7e3af2c2-9462-479f-a8e5-d34a01eff777",
    "formNumber": "ASMT-02",
    "title": "FORM GST ASMT - 02",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "1ed4cd54-e5ce-4115-bbc3-c8df8180f358",
    "formNumber": "ASMT-03",
    "title": "Reply to the notice seeking additional information",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "171e7f24-5cdb-4c4a-a01d-c7897fe04cdd",
    "formNumber": "ASMT-04",
    "title": "FORM GST ASMT - 04",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "3d4ad365-ca27-4c37-abc0-7d15d99fc67c",
    "formNumber": "ASMT-05",
    "title": "Furnishing of Security",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "2e79e413-653b-4a13-85ee-94979b9eb7c2",
    "formNumber": "ASMT-06",
    "title": "Notice for seeking additional information / clarification / documents for final assessment",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "4facb0fc-518f-44dc-bea9-fb06f912007e",
    "formNumber": "ASMT-07",
    "title": "Final Assessment Order",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "b6619aa1-f60e-47ee-8087-4b9a2ff165e3",
    "formNumber": "ASMT-08",
    "title": "Application for Withdrawal of Security",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "52182d2f-8581-4c67-96ac-e7f155170a7a",
    "formNumber": "ASMT-09",
    "title": "Order for release of security or rejecting the application",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d7f7a240-3858-4ee4-b9f0-6de4e716c19d",
    "formNumber": "ASMT-10",
    "title": "Notice for intimating discrepancies in the return after scrutiny",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "bd6d21f0-417c-4c9b-ba4d-24d50673a6ea",
    "formNumber": "ASMT-11",
    "title": "Reply to the notice issued under section 61 intimating discrepancies in the return",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "11c74c6a-3458-4fb8-853b-8c9ac7e5a25a",
    "formNumber": "ASMT-12",
    "title": "Order of acceptance of reply against the notice issued under section 61",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "996a4104-226d-439c-ac10-b7fab94fd6dc",
    "formNumber": "ASMT-13",
    "title": "FORM GST ASMT-13",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "1c61ab70-3a56-432f-ac8a-c4a75ae98cf7",
    "formNumber": "ASMT-14",
    "title": "Show Cause Notice for assessment under section 63",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "cc572a3e-c028-4c00-8a80-988250132101",
    "formNumber": "ASMT-15",
    "title": "Assessment order under section 63",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d88aca2d-7654-4354-b1ff-7e7d6d4d92e9",
    "formNumber": "ASMT-16",
    "title": "Assessment order under section 64",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "8a8c2c1d-6fb3-42f6-a2b1-49b0634f9c71",
    "formNumber": "ASMT-17",
    "title": "Application for withdrawal of assessment order issued under section 64",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "f87ed04d-9ac0-411e-9ed9-6294cab3e70b",
    "formNumber": "ASMT-18",
    "title": "Acceptance or Rejection of application filed under section 64 (2)",
    "category": "ASMT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ba47f5a8-6ffc-42cb-b9d9-e2c534877706",
    "formNumber": "ADT-01",
    "title": "Notice for conducting audit",
    "category": "ADT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "927b3e3e-4a6a-45a9-b386-d9941950a031",
    "formNumber": "ADT-02",
    "title": "Audit Report under section 65(6)",
    "category": "ADT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "dd6c06b2-9cf8-439f-ac2e-7b7cd8e0528d",
    "formNumber": "ADT-03",
    "title": "Communicationto the registered person for conduct of special audit under section 66",
    "category": "ADT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "5462f166-ec14-4687-9201-4422971c6067",
    "formNumber": "ADT-04",
    "title": "Information of Findings upon Special Audit",
    "category": "ADT",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d6d252d7-c538-492a-a041-c0da15fa39b6",
    "formNumber": "ARA-01",
    "title": "Application Form for Advance Ruling",
    "category": "ARA",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7ea947c7-5fe1-4b84-bbc8-5d7e15e134db",
    "formNumber": "ARA-02",
    "title": "Appeal to the Appellate Authority for Advance Ruling",
    "category": "ARA",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "4a64698a-b617-447e-9b7e-9affc2cf7025",
    "formNumber": "ARA-03",
    "title": "Appeal to the Appellate Authority for Advance Ruling",
    "category": "ARA",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "be0b452b-0ead-436a-a078-2f0647d7a0ed",
    "formNumber": "APL-01",
    "title": "Appeal to Appellate Authority",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "48c31684-4d5a-44be-9395-895c4b87d300",
    "formNumber": "APL-02",
    "title": "Acknowledgment for submission of appeal",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6ed75ea7-be84-4074-bef0-7a785be633e3",
    "formNumber": "APL-02A",
    "title": "Provisional Acknowledgment for submission of Appeal/Application",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "c19513bb-07d6-4f95-8c80-901996ed792f",
    "formNumber": "APL-03",
    "title": "Application to the Appellate Authority under sub-section (2) of Section 107",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d0cfdf6e-9ffb-4809-9885-8f548da8e702",
    "formNumber": "APL-01/03 W",
    "title": "Application for Withdrawal of Appeal Application",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "287b16ce-47a0-48a0-9128-1e58374d1655",
    "formNumber": "APL-04",
    "title": "SUMMARY OF THE DEMAND AFTER ISSUE OF ORDER BY THE APPELLATE AUTHORITY, REVISIONAL AUTHORITY, TRIBUNAL OR COURT",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "14a58005-0782-4ce3-992c-e0f453750560",
    "formNumber": "APL-04 A",
    "title": "Summary of the order and demand after issue of order by the Goods and Services Tax Appellate Tribunal",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ec7269af-5157-42e2-a5c3-4de4ec3ad2e8",
    "formNumber": "APL-05",
    "title": "Appeal to the Appellate Tribunal",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d7bcbdee-8bba-4692-9245-aa2a5283fcdd",
    "formNumber": "APL-06",
    "title": "Cross-objections before the Appellate Tribunal",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "172de586-07dc-43ea-ba77-889acb7c7a33",
    "formNumber": "APL-07",
    "title": "Application to the Appellate Tribunal under sub section (3) of Section 112",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "1489da0e-223d-4e6a-b6d0-07a6c861fb5f",
    "formNumber": "APL-08",
    "title": "Appeal to the High Court under section 117",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6901095b-4e2b-4c04-92e2-ecf0067cf655",
    "formNumber": "RVN-01",
    "title": "Notice under section 108",
    "category": "APL",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "3fab4947-a5f0-456e-816b-e5a55475a36f",
    "formNumber": "TRAN-1",
    "title": "Transitional ITC / Stock Statement",
    "category": "TRAN",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "a943f6be-eec4-474c-b863-737992e90a7d",
    "formNumber": "TRAN-2",
    "title": "FORM GST TRAN - 2",
    "category": "TRAN",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d02dbb2f-0f1c-419e-90e1-678e1a8ca070",
    "formNumber": "DRC-01",
    "title": "Summary of Show Cause Notice",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "f6c0603c-1259-48e2-b909-a6b9253d4d4c",
    "formNumber": "DRC-01A",
    "title": "FORM GST DRC-01A",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6c4874f6-bca6-4927-a646-e30dbea68915",
    "formNumber": "DRC-01B",
    "title": "Intimation of difference in liability reported in statement of outward supplies and that reported in return",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d3fdf027-256c-409d-9d6a-f3aedfd122ae",
    "formNumber": "DRC-02",
    "title": "FORM GST DRC -02",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ecce1e9b-f73a-491b-86d9-d8f7ef1526a4",
    "formNumber": "DRC-03",
    "title": "Intimation of payment made voluntarily or made against the show cause notice (SCN) or statement",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "f3c171fb-4850-48ef-a8fb-5d4de55ca5fb",
    "formNumber": "DRC-04",
    "title": "Acknowledgement of acceptance of payment made voluntarily",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "08bde54d-80fe-4965-9cd5-3e24e488e83c",
    "formNumber": "DRC-05",
    "title": "Intimation of conclusion of proceedings",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "6763c2b9-c0ac-4ff8-ae76-40e0b81ef6ce",
    "formNumber": "DRC-06",
    "title": "Reply to the Show Cause Notice",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "12127fa7-e2e7-48fa-977a-ffe2157a3e5c",
    "formNumber": "DRC-07",
    "title": "Summary of the order",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d3d85291-7f31-4704-8da4-874db65262c0",
    "formNumber": "DRC-07A",
    "title": "Summary of the order creating demand under existing laws",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "a942e805-7670-4df2-8ca0-6d1178e0d2ad",
    "formNumber": "DRC-08",
    "title": "Summary of Rectification /Withdrawal Order",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ccabdad2-2860-4c06-aceb-8f140e94aae2",
    "formNumber": "DRC-08A",
    "title": "Amendment/Modification of summary of the order creating demand under existing laws",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "c32c3f2e-1d10-4abd-a96f-53d6abd4c225",
    "formNumber": "DRC-09",
    "title": "Order for recovery through specified officer under section 79",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "5a45d5e8-9bea-4d2f-a777-d282aa49981a",
    "formNumber": "DRC-10",
    "title": "Notice for Auction of Goods under section 79 (1) (b) of the Act",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "726f3251-6c8f-4351-a879-537abb88f87d",
    "formNumber": "DRC-11",
    "title": "Notice to successful bidder",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "89d6b865-735f-4dde-8a04-b52e61802e46",
    "formNumber": "DRC-12",
    "title": "FORM GST DRC - 12",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "b62163f4-0f40-4856-8b3f-db3b36fbd759",
    "formNumber": "DRC-13",
    "title": "Notice to a third person under section 79(1) (c)",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "fea5ed98-1aa9-4482-9c28-7a01dc023e33",
    "formNumber": "DRC-14",
    "title": "Certificate of Payment to a Third Person",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "fe248391-09dd-4d36-8992-356cf538f002",
    "formNumber": "DRC-15",
    "title": "APPLICATION BEFORE THE CIVIL COURT REQUESTING EXECUTION FOR A DECREE",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d417d1c5-f13d-4c9f-9fc1-e1515a997452",
    "formNumber": "DRC-16",
    "title": "Notice for attachment and sale of immovable/movable goods/shares under section 79",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "0aecc33d-bb85-41a3-b946-fc3610c7c32b",
    "formNumber": "DRC-17",
    "title": "Notice for Auction of Immovable/Movable Property under section 79(1) (d)",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ec070f73-0ff7-4640-83b0-e25500d76253",
    "formNumber": "DRC-18",
    "title": "Certificate action under clause (e) of sub-section (1) section 79",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "0ef93125-46bc-4d3d-ab2a-e1ea7fc8970b",
    "formNumber": "DRC-19",
    "title": "Application to the Magistrate for Recovery as Fine",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "ddea4c26-306f-44e3-8b83-b5b746183cb8",
    "formNumber": "DRC-20",
    "title": "Application for Deferred Payment/ Payment in Instalments",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "8ada1ea5-ad2f-4335-8d1f-ef81a7e2095d",
    "formNumber": "DRC-21",
    "title": "Order for acceptance/rejection of application for deferred payment / payment in instalments",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d9b0a5a4-743a-4751-995a-1fa2a43b58ab",
    "formNumber": "DRC-22",
    "title": "Provisional attachment of property under section 83",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "a8c6acb3-7b7c-48f2-99ba-fa6cc143f68c",
    "formNumber": "DRC-22A",
    "title": "Provisional attachment of property",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "df5a49c9-a061-41d6-a4e7-37ca3f21de95",
    "formNumber": "DRC-23",
    "title": "Restoration of provisionally attached property / bank account under section 83",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "d66474d1-cfa9-4066-88ac-79c8b8338593",
    "formNumber": "DRC-24",
    "title": "Intimation to Liquidator for recovery of amount",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "7a44bf3f-2589-46d9-8c31-cc52083b6254",
    "formNumber": "DRC-25",
    "title": "Continuation of Recovery Proceedings",
    "category": "DRC",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "36171f68-33a1-4fc8-aacb-4a544061cc29",
    "formNumber": "CPD-01",
    "title": "Application for Compounding of Offence",
    "category": "CPD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  },
  {
    "id": "badee5f6-fa79-48f7-a09f-aac2e077f763",
    "formNumber": "CPD-02",
    "title": "Order for rejection / allowance of compounding of offence",
    "category": "CPD",
    "source": "GST Forms Repository",
    "sourceUrl": "https://irkandassociates.com/GstForms.aspx"
  }
];
