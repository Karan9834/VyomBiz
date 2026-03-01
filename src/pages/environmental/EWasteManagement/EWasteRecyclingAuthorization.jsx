import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EWasteRecyclingAuthorization = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="E-Waste Recycling Authorization"
                    heroTitleSuffix="— CPCB Approved"
                    heroDescription="Obtain your CPCB e-waste recycling authorization with complete expert assistance. End-to-end support for dismantling, processing, and recycling authorization under E-Waste (Management) Rules, 2022."
                    stats={[
                        { count: "43298 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "E-Waste Recycling Authorization —",
                        highlightTitle: "An Overview",
                        description: [
                            "E-waste recycling authorization is a mandatory permit granted to a person or entity engaged in the recycling and reprocessing of waste electrical and electronic equipment/assemblies or their components.",
                            "The E-waste management authorization online ensures safer reuse and recycling of electronic wastes, demonstrating an organization's commitment towards a responsible and effective e-waste management.",
                            "The e-waste recycling authorization, also termed as e-waste disposal or management authorization, is granted by the regulatory authorities such as State Pollution Control Board (SPCB)/Central Pollution Control Board (CPCB) and mandates recycling facilities to operate in consonance with the legal standards as specified under the E-Waste (Management) Rules, 2016.",
                            "The global e-waste recycling market, currently valued at USD 48.41 billion with a CAGR of 6.5%, is projected to grow significantly, reaching USD 120 billion by 2033, driven by an impressive CAGR of 13.1%."
                        ],
                        whyIdealTitle: "Governing Regulations",
                        whyIdealList: [
                            { title: "The Environmental Protection Act, 1986", desc: "Primary environmental protection legislation in India." },
                            { title: "E-Waste (Management) Rules, 2022", desc: "Issued by the Ministry of Environment, Forest and Climate Change." },
                            { title: "Hazardous Waste Rules, 2016", desc: "Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016." },
                            { title: "CPCB Guidelines", desc: "Central Pollution Control Board Guidelines for e-waste management." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Obtaining E-Waste Recycling Authorization",
                        subtitle: "Key benefits for manufacturers, producers, bulk consumers and recyclers",
                        list: [
                            { title: "Environment Protection", desc: "The primary benefit is protection of the environment from toxic materials such as lead, mercury, and cadmium, which can contaminate soil, water, and air, potentially leading to severe health issues." },
                            { title: "Resource Conservation", desc: "Obtaining e-waste recycling authorization plays a vital role in the conservation of valuable raw materials, including metals, plastics, and glasses extracted from electronic waste, promoting a circular economy." },
                            { title: "Corporate Social Responsibility (CSR)", desc: "The businesses obtaining e-waste recycling authorization contributes towards sustainable business practices, improving their CSR initiatives and public image." },
                            { title: "Enhanced Credibility", desc: "The businesses obtaining an e-waste recycling authorization establishes an eco-friendly and socially responsible business environment, creating a competitive advantage." },
                            { title: "Economic Benefits", desc: "The e-waste recycling authorization offers economic benefits and generates revenue by creating job opportunities for skilled workers specialized in dismantling and processing electrical and electronic waste." },
                            { title: "Legal Compliance", desc: "The applicant seeking e-waste recycling authorization ensures legal compliance with e-waste management regulations governing the entire process for management of electrical and electronic equipment." },
                            { title: "Encourages Technological Advancements", desc: "The e-waste recycling authorization encourages the use of technology-driven innovations to support the sustainable development and management of electrical and electronic equipment." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria for Obtaining E-Waste Disposal Authorization",
                        subtitle: "Requirements for entities engaged in e-waste recycling",
                        list: [
                            { title: "Setup Waste Treatment Plants", desc: "An e-waste recycling facility must set up the waste treatment plants/tools for controlling the water and air pollution, depending upon the process in the recycling plant." },
                            { title: "Area for Recyclers", desc: "The applicants require a minimum area of 500 sq. m. for setting up the recycling plants having a capacity of 1 ton per day. Preference is given to plants having a total of 5 M.T./day and an area of about 2500 square meters." },
                            { title: "Space for Dismantling Equipment", desc: "Must setup a minimum 300 sq. m. space or facility, for installing and storing the dismantling equipment to carry out the process of manual dismantling." },
                            { title: "Install Noise Control Devices", desc: "The businesses must install noise control devices to prevent noise pollution and avoid sounds of crushers, shredders, and grinders." },
                            { title: "Safety of Workers", desc: "The businesses must take precautionary measures for the safety of the workers within the premises." },
                            { title: "Sign Agreement with TSDF", desc: "The applicant must negotiate an agreement with TSDF operator (Treatment, Storage, and Disposal Facility) for onsite collection and storage of residues, floor cleaning dust and other hazardous materials." },
                            { title: "Eligible Entity", desc: "Any individual, registered society, organization, designated agency, company, or association is eligible to register for the e-waste recycling authorization." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for E-Waste Recycling Authorization",
                        description: "Documents to be submitted to the State Pollution Control Board/Pollution Control Committee:",
                        list: [
                            "Aadhar Card of the recycler",
                            "PAN Card of the recycler",
                            "GST Registration Certificate",
                            "ISO Registration Certificate",
                            "Authorization under E-Waste Rules, 2016",
                            "CIN (Certificate of Incorporation)",
                            "MOA (Memorandum of Association)",
                            "Company's PAN Card",
                            "Rent agreement/Lease agreement/Proof of ownership of the site",
                            "Board Declaration for Authorized Signatory",
                            "Consent Certificate from State Pollution Control Board/Pollution Control Committee",
                            "Due diligence materials (additional documents/information requested by the investor)"
                        ]
                    }}

                    process={{
                        title: "Process for E-Waste Recycling Authorization",
                        subtitle: "As prescribed under the E-Waste Management Act, 2016",
                        steps: [
                            { step: "01", title: "Filing of Application", desc: "The recyclers must initially file Form 4 and complete all essential information at the official website of the State Pollution Control Board or Pollution Control Committee." },
                            { step: "02", title: "Submission of Documents", desc: "Once the application is completed, the applicants must submit required documents including essential information such as name of authorised personnel, details of CTO, etc." },
                            { step: "03", title: "Review of Application", desc: "Following the submission of all documents, the District Environmental Engineer (DEE) must review, verify, and authenticate all the necessary information mentioned in the application." },
                            { step: "04", title: "Rectification by Recyclers", desc: "In case of any mistake, the application duly submitted along with the documents must be sent back to the recyclers for rectification." },
                            { step: "05", title: "Grant of Authorization", desc: "Once the application and documents are verified, the Central Pollution Control Board must grant the e-waste recycling authorisation within 120 days of receipt of the complete application." },
                            { step: "06", title: "Verification of Recycling Facility", desc: "The CPCB shall further conduct a physical or video verification of the recycling facility within 3 months of the grant of e-waste recycling authorization." }
                        ]
                    }}

                    postCompliance={{
                        title: "Post-Compliance Needs for E-Waste Recycling Authorization",
                        subtitle: "Ongoing obligations after obtaining authorization",
                        list: [
                            { title: "Accident Reporting", desc: "Authorized recyclers must promptly report any accidents occurring at their facility to the concerned State Pollution Control Board." },
                            { title: "Copy of Destruction Certificate", desc: "The recyclers granted the e-waste recycling authorization are required to provide a copy of the destruction certificate for the purpose of carrying out the process of dismantling." },
                            { title: "Authorization to Dispose Hazardous Wastes", desc: "The recyclers are required to obtain an authorization for the due disposal of hazardous and other wastes under Hazardous and Other Wastes Rules, 2016." },
                            { title: "Submission of Annual Returns", desc: "The recyclers must make submission of annual returns in Form 3 to the respective State Pollution Control Board/Pollution Control Committee." },
                            { title: "Filing of Necessary Forms", desc: "The applicants must file Form-6 (concerning E-Waste Manifestation) and Form-2 (concerning handling, dismantling, and recycling the records of e-waste generated)." },
                            { title: "Fees & Timeline", desc: "Registration fee: ₹15,000. Renewal fee: ₹7,500 plus 0.625/MT for quantity. Authorization typically takes 30 to 35 business days. Validity: 5 years." }
                        ]
                    }}

                    features={{
                        title: "Why Trust Corpbiz for E-Waste Recycling Authorization?",
                        subtitle: "India's trusted e-waste recycling authorization partner",
                        list: [
                            { title: "99% Success Rate", desc: "99% Success Rate in Acquiring an E-waste Recycling Authorization Certificate." },
                            { title: "500+ Greenpreneurs Assisted", desc: "Assisted 500+ Greenpreneurs in Getting E-waste Disposal Authorization." },
                            { title: "10+ Years Experience", desc: "10+ Years of Experience in Environmental Consulting." },
                            { title: "Documentation Support", desc: "Documentation Support for E-waste Recycling Authorization." },
                            { title: "End-to-End Assistance", desc: "End-to-end Assistance in E-waste Recycling Authorization." },
                            { title: "24/7 Dedicated Support", desc: "24/7 Dedicated Support to Resolve your Queries in E-waste Recycling Authorization." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is e-waste recycling authorization in India?",
                    "answer": "E-waste recycling authorization is a mandatory permit issued by CPCB/SPCB to entities engaged in the collection, dismantling, processing, or recycling of waste electrical and electronic equipment. It ensures operations comply with the E-Waste (Management) Rules, 2022 and Hazardous Waste Rules, 2016."
          },
          {
                    "question": "Who is eligible to apply for e-waste recycling authorization?",
                    "answer": "Any individual, registered company, society, organization, or association that sets up adequate facilities for e-waste recycling or dismantling is eligible. The facility must meet minimum area, pollution control, and safety standards as specified by CPCB."
          },
          {
                    "question": "What pollution control measures are mandatory for e-waste recyclers?",
                    "answer": "Mandatory measures include air pollution control systems (for smelting/processing), effluent treatment plants for liquid waste, noise control devices for shredders and crushers, and agreements with TSDF operators for hazardous residue disposal."
          },
          {
                    "question": "What is Form-2 and when must it be filed?",
                    "answer": "Form-2 is a record of e-waste handled by authorized recyclers — quantity received, processed, and sent for further processing. These records must be maintained and made available for inspection. Annual Form-3 returns summarize this data."
          },
          {
                    "question": "Can an e-waste recycler operate without SPCB consent?",
                    "answer": "No. An e-waste recycling facility must obtain Consent to Establish (CTE) before starting construction, and Consent to Operate (CTO) before starting operations, both from the concerned SPCB. These are separate from the CPCB e-waste recycling authorization."
          },
          {
                    "question": "What is the process for CPCB physical verification of recycling facility?",
                    "answer": "After granting authorization, CPCB will conduct a physical or video verification of the recycling facility within 3 months. During verification, inspectors check facility area, installed equipment, pollution control measures, worker safety arrangements, and records."
          },
          {
                    "question": "How does Corpbiz help with e-waste recycling authorization?",
                    "answer": "Corpbiz provides end-to-end support: site assessment, application preparation, SPCB consent assistance, CTE/CTO applications, CPCB portal registration, Form-4 application, document submission, query resolution, and final authorization follow-up. Our 99% success rate speaks for itself."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EWasteRecyclingAuthorization;
