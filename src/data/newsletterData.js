const pdfCards = [
  {
    date: "Published on 05 May, 2023",
    title:
      "Commission for Air Quality Management in National Capital Region and Adjoining Areas",
    desc:
      "On 28th April 2023, the Ministry of Environment, Forest and Climate Change (MoEFCC) issued the Commission for Air Quality Management in National Capital Region and Adjoining Areas...",
    image:
      "https://corpbiz.io/learning/wp-content/uploads/2023/05/MicrosoftTeams-image-43.jpg",
  },
  {
    date: "Published on 01 May, 2023",
    title:
      "DGFT Amended Details of an Authorised Agency Under Appendix 2E of FTP 2023",
    desc:
      "On 27th April 2023, the Director General of Foreign Trade (DGFT) issued an amendment in details of an authorised agency under Appendix 2E of FTP 2023...",
    image:
      "https://corpbiz.io/learning/wp-content/uploads/2023/05/DGFT-Amended.jpg",
  },
  {
    date: "Published on 01 May, 2023",
    title:
      "Ministry of Heavy Industries Announces the Release of SOPs Under the PLI Auto Scheme",
    desc:
      "On 27th April 2023, the Ministry of Heavy Industries announced the release of SOPs under the PLI Auto scheme to testing agencies...",
    image:
      "https://corpbiz.io/learning/wp-content/uploads/2023/05/PLI-Auto-Scheme.jpg",
  },
  {
    date: "Published on 01 May, 2023",
    title:
      "FSSAI Issues the Draft of Food Safety and Standards (Pr...",
    desc:
      "On 27th April 2023, the Food Safety and Standards Authority of India (FSSAI) published the Draft of Food Safety and Standards (Prohibition and Restrictions on Sales) Amendment Regulatio.... ",
    image:
      "",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "FSSAI Issues Directions in Regard to the Operationalisa...",
    desc:
      "On 27th April 2023, the Food Safety and Standards Authority of India (FSSAI) issued Directions regarding the operationalisation of MRL of Pesticides used in Tea. The following has been.... ",
    image:
      "",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "Ministry of MSME Launches the Revamped CGTMSE Scheme...",
    desc:
      "On 27th April 2023, the Ministry of Micro, Small & Medium Enterprises (MSME) launched the revamped CGTMSE Scheme, with an additional corpus support of 9,000 crores in the Union Budg....",
    image:
      "",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "The Ministry of Chemicals and Fertilizers Approves the...",
    desc:
      "On 26th April 2023, the Ministry of Chemicals and Fertiliser issued a Press Release in regard to the Union Cabinet approving the National Medical Devices Policy, 2023. The medical devic....",
    image:
      "",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "BIS Notifies the Date of Establishment and Withdrawal o...",
    desc:
      "On 21st April 2023, the Bureau of Indian Standards (BIS) notified the date of establishment and withdrawal of Acid Oils. The following Indian standards were established on 20th April 20.... ",
    image:
      "",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "CDSCO Declares an Alert for List of Drugs, Medical Devi...",
    desc:
      "On 24th April 2023, the Central Drugs Standard Control Organisation (CDSCO) issued a list of Drugs, Medical Devices, and Cosmetics, declaring them as Not of Standard Quality/Spurious/ A....",
    image:
      "",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "FSSAI Notifies in Regard to the Re- Operationalisation...",
    desc:
      "On 24th April 2023, the Food Safety Standards Authority of India (FSSAI) issued a notification in regard to the reoperationalisation of the Standards of Crude Corn (Maize) Oil- Directio.... ",
    image:
      "",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "BIS Issues the Date of Establishment and Withdrawal of...",
    desc:
      "On 21st April 2023, the Bureau of Indian Standards (BIS) issued the date of establishment and withdrawal of certain Indian Standards relating to Rubber or Plastics Coated Fabrics for Wa.... ",
    image:
      "",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "Ministry of Textiles Issued a Press Release in Regard t...",
    desc:
      "On 24th April 2023, the Ministry of Textiles issued a Press Release in regard to the E-Commerce Portal dedicated to Handloom and Handicrafts aimed at making Artisans and Weavers Self-Re.... ",
    image:
      "",
  },
  {
    date: "Published on 28 Apr, 2023",
    title:
      "DGFT Allocates an Additional Quantity of 2360 MT Raw Su...",
    desc:
      "On 21st April 2023, the Directorate General of Foreign Trade (DGFT) allocated an additional quantity of 2360 MT raw sugar for export under Tariff Rate Quota (TRQ) to the USA... ",
    image:
      "",
  },
  {
    date: "Published on 27 Apr, 2023",
    title:
      "BIS issued the Date of Establishment and Date of Withdr...",
    desc:
      "On 20th April 2023 the Bureau of Indian Standards, (BIS) notified the date of establishment and withdrawal of a few Indian standards particulars. The Indian standards will be establishe.... ",
    image:
      "",
  },
  {
    date: "Published on 26 Apr, 2023",
    title:
      "CBIC Amends an Older Notification Related to Export Dut...",
    desc:
      "On 20th April 2023, the Central Board of Indirect Taxes and Customs (CBIC) issued a notification to amend notification no. 55/2022-Customs, issued on 31st October 2022, related to expor....",
    image:
      "",
  },
  {
    date: "Published on 19 Apr, 2023",
    title:
      "FSSAI Notifies Clarification on the Format of Test Repo...",
    desc:
      "On 13th April 2023, the Food Safety and Standards Authority of India (FSSAI) issued a notification in regard to the Clarification on the Format of Test Reports, i.e.",
    image:
      "",
  },
  {
    date: "Published on 17 Apr, 2023",
    title:
      "NSE Issues Circular in Regard to the Introduction of Fu...",
    desc:
      "On 14h April 2023, the National Stock Exchange (NSE) issued a circular in regard to the introduction of futures contracts on underlying WTI crude oil and natural gas (Henry Hub)...",
    image:
      "",
  },
  {
    date: "Published on 15 Apr, 2023",
    title:
      "NPPA Revises Schedule I for the Fixation of Ceiling Pri...",
    desc:
      "On April 12 2023 the National Pharmaceutical Pricing Authority (NPPA), revised Schedule I for the fixation of Ceiling Prices for Scheduled formulations of DPCO 2013. All the concerned m.... ",
    image:
      "",
  },
  {
    date: "Published on 15 Apr, 2023",
    title:
      "FSSAI Notifies in Regard to the Extension of Permission...",
    desc:
      "FSSAI Notifies in Regard to the Extension of Permission to Use Old Pre-Printed Packaging Materials to Tea Manufacturing FBOs/Estates On 13th April 2023, the Food Safety Standards Author....",
    image:
      "",
  },
  {
    date: "Published on 15 Apr, 2023",
    title:
      "FSSAI Issues Instructions Pertaining to Temporary Downt...",
    desc:
      "On 13th April 2023, the Food Safety and Standards Authority of India (FSSAI), issued instructions pertaining to temporary downtime of the FoSCoS portal for 3 days. Due to the scheduled..... ",
    image:
      "",
  },
  {
    date: "Published on 15 Apr, 2023",
    title:
      "CDSCO Issues Circular in Regard to the Licensing Regime...",
    desc:
      "On 12th April 2023, the Central Drugs Standards Control Organisation (CDSCO) issued a circular in regard to Licencing Regime of Class C and Class D Non-Notified Medical Devices which ar...",
    image:
      "",
  },
  {
    date: "Published on 14 Apr, 2023",
    title:
      "Protective Textiles (Quality Control) Order, 2022",
    desc:
      "On 12th April 2023, the Ministry of Textiles issued a notification regarding the Protective Textiles (Quality Control) Order, 2022. This Order is deemed to come into force 180 days afte....",
    image:
      "",
  },
  {
    date: "Published on 14 Apr, 2023",
    title:
      "Ministry of Textiles Lays Thrust on BIS Mandatory Certi...",
    desc:
      "On 11th April 2023, the Ministry of Textiles issued a press release in regard to the ministry laying thrust on the BIS Mandatory Certification by introducing the Quality Control Orders....",
    image:
      "",
  },
  {
    date: "Published on 13 Apr, 2023",
    title:
      "DGFT Issues the Procedure for Obtaining a Registration...",
    desc:
      "On 11th April 2023, the Director General of Foreign Trade, (DGFT) laid down the procedure for issuance of a Registration Certificate (RC) for the import of Isopropyl Alcohol (IPA) under...",
    image:
      "",
  },
  
];
export default pdfCards;