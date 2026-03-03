const pdfCards = [
  {
    date: "Published on 05 May, 2023",
    title:
      "Commission for Air Quality Management in National Capital Region and Adjoining Areas",
    desc:
      "On 28th April 2023, the Ministry of Environment, Forest and Climate Change (MoEFCC) issued the Commission for Air Quality Management in National Capital Region and Adjoining Areas...",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 01 May, 2023",
    title:
      "DGFT Amended Details of an Authorised Agency Under Appendix 2E of FTP 2023",
    desc:
      "On 27th April 2023, the Director General of Foreign Trade (DGFT) issued an amendment in details of an authorised agency under Appendix 2E of FTP 2023...",
    image:
      "https://images.unsplash.com/photo-1454165833772-d996d49513d2?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 01 May, 2023",
    title:
      "Ministry of Heavy Industries Announces the Release of SOPs Under the PLI Auto Scheme",
    desc:
      "On 27th April 2023, the Ministry of Heavy Industries announced the release of SOPs under the PLI Auto scheme to testing agencies...",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 01 May, 2023",
    title:
      "FSSAI Issues the Draft of Food Safety and Standards (Pr...",
    desc:
      "On 27th April 2023, the Food Safety and Standards Authority of India (FSSAI) published the Draft of Food Safety and Standards (Prohibition and Restrictions on Sales) Amendment Regulatio.... ",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "FSSAI Issues Directions in Regard to the Operationalisa...",
    desc:
      "On 27th April 2023, the Food Safety and Standards Authority of India (FSSAI) issued Directions regarding the operationalisation of MRL of Pesticides used in Tea. The following has been.... ",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "Ministry of MSME Launches the Revamped CGTMSE Scheme...",
    desc:
      "On 27th April 2023, the Ministry of Micro, Small & Medium Enterprises (MSME) launched the revamped CGTMSE Scheme, with an additional corpus support of 9,000 crores in the Union Budg....",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "The Ministry of Chemicals and Fertilizers Approves the...",
    desc:
      "On 26th April 2023, the Ministry of Chemicals and Fertiliser issued a Press Release in regard to the Union Cabinet approving the National Medical Devices Policy, 2023. The medical devic....",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "BIS Notifies the Date of Establishment and Withdrawal o...",
    desc:
      "On 21st April 2023, the Bureau of Indian Standards (BIS) notified the date of establishment and withdrawal of Acid Oils. The following Indian standards were established on 20th April 20.... ",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "CDSCO Declares an Alert for List of Drugs, Medical Devi...",
    desc:
      "On 24th April 2023, the Central Drugs Standard Control Organisation (CDSCO) issued a list of Drugs, Medical Devices, and Cosmetics, declaring them as Not of Standard Quality/Spurious/ A....",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "FSSAI Notifies in Regard to the Re- Operationalisation...",
    desc:
      "On 24th April 2023, the Food Safety Standards Authority of India (FSSAI) issued a notification in regard to the reoperationalisation of the Standards of Crude Corn (Maize) Oil- Directio.... ",
    image:
      "https://images.unsplash.com/photo-1507679799987-c7377ec48ab7?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "BIS Issues the Date of Establishment and Withdrawal of...",
    desc:
      "On 21st April 2023, the Bureau of Indian Standards (BIS) issued the date of establishment and withdrawal of certain Indian Standards relating to Rubber or Plastics Coated Fabrics for Wa.... ",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 29 Apr, 2023",
    title:
      "Ministry of Textiles Issued a Press Release in Regard t...",
    desc:
      "On 24th April 2023, the Ministry of Textiles issued a Press Release in regard to the E-Commerce Portal dedicated to Handloom and Handicrafts aimed at making Artisans and Weavers Self-Re.... ",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 28 Apr, 2023",
    title:
      "DGFT Allocates an Additional Quantity of 2360 MT Raw Su...",
    desc:
      "On 21st April 2023, the Directorate General of Foreign Trade (DGFT) allocated an additional quantity of 2360 MT raw sugar for export under Tariff Rate Quota (TRQ) to the USA... ",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 27 Apr, 2023",
    title:
      "BIS issued the Date of Establishment and Date of Withdr...",
    desc:
      "On 20th April 2023 the Bureau of Indian Standards, (BIS) notified the date of establishment and withdrawal of a few Indian standards particulars. The Indian standards will be establishe.... ",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 26 Apr, 2023",
    title:
      "CBIC Amends an Older Notification Related to Export Dut...",
    desc:
      "On 20th April 2023, the Central Board of Indirect Taxes and Customs (CBIC) issued a notification to amend notification no. 55/2022-Customs, issued on 31st October 2022, related to expor....",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 19 Apr, 2023",
    title:
      "FSSAI Notifies Clarification on the Format of Test Repo...",
    desc:
      "On 13th April 2023, the Food Safety and Standards Authority of India (FSSAI) issued a notification in regard to the Clarification on the Format of Test Reports, i.e.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 17 Apr, 2023",
    title:
      "NSE Issues Circular in Regard to the Introduction of Fu...",
    desc:
      "On 14h April 2023, the National Stock Exchange (NSE) issued a circular in regard to the introduction of futures contracts on underlying WTI crude oil and natural gas (Henry Hub)...",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 15 Apr, 2023",
    title:
      "NPPA Revises Schedule I for the Fixation of Ceiling Pri...",
    desc:
      "On April 12 2023 the National Pharmaceutical Pricing Authority (NPPA), revised Schedule I for the fixation of Ceiling Prices for Scheduled formulations of DPCO 2013. All the concerned m.... ",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 15 Apr, 2023",
    title:
      "FSSAI Notifies in Regard to the Extension of Permission...",
    desc:
      "FSSAI Notifies in Regard to the Extension of Permission to Use Old Pre-Printed Packaging Materials to Tea Manufacturing FBOs/Estates On 13th April 2023, the Food Safety Standards Author....",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 15 Apr, 2023",
    title:
      "FSSAI Issues Instructions Pertaining to Temporary Downt...",
    desc:
      "On 13th April 2023, the Food Safety and Standards Authority of India (FSSAI), issued instructions pertaining to temporary downtime of the FoSCoS portal for 3 days. Due to the scheduled..... ",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b736?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 15 Apr, 2023",
    title:
      "CDSCO Issues Circular in Regard to the Licensing Regime...",
    desc:
      "On 12th April 2023, the Central Drugs Standards Control Organisation (CDSCO) issued a circular in regard to Licencing Regime of Class C and Class D Non-Notified Medical Devices which ar...",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 14 Apr, 2023",
    title:
      "Protective Textiles (Quality Control) Order, 2022",
    desc:
      "On 12th April 2023, the Ministry of Textiles issued a notification regarding the Protective Textiles (Quality Control) Order, 2022. This Order is deemed to come into force 180 days afte....",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 14 Apr, 2023",
    title:
      "Ministry of Textiles Lays Thrust on BIS Mandatory Certi...",
    desc:
      "On 11th April 2023, the Ministry of Textiles issued a press release in regard to the ministry laying thrust on the BIS Mandatory Certification by introducing the Quality Control Orders....",
    image:
      "https://images.unsplash.com/photo-1556761175-5b46a572b736?auto=format&fit=crop&w=800",
  },
  {
    date: "Published on 13 Apr, 2023",
    title:
      "DGFT Issues the Procedure for Obtaining a Registration...",
    desc:
      "On 11th April 2023, the Director General of Foreign Trade, (DGFT) laid down the procedure for issuance of a Registration Certificate (RC) for the import of Isopropyl Alcohol (IPA) under...",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",
  },
];

export default pdfCards;