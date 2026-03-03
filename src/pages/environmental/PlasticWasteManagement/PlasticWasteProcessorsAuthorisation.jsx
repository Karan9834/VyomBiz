import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const PlasticWasteProcessorsAuthorisation = () => {
    const faqs = [
        { question: "What is Plastic Waste Processors Authorisation?", answer: "Plastic Waste Processors Authorisation (PWP Authorisation) is a mandatory certificate issued by the State Pollution Control Board (SPCB) or Pollution Control Committee (PCC) to entities that collect, segregate, recycle, process (waste-to-energy, waste-to-oil, co-processing), and dispose of plastic waste. It is required under the Plastic Waste Management Rules, 2016 and its amendments." },
        { question: "Who needs to obtain PWP Authorisation?", answer: "All entities involved in collection, segregate, transport, processing, recycling, or disposal of plastic waste must obtain PWP Authorisation. This includes recyclers, waste-to-energy and waste-to-oil units, industrial composting units, co-processing facilities, and end-of-life plastic disposal firms operating in India." },
        { question: "What is the validity of PWP Authorisation?", answer: "PWP Authorisation is typically valid for 5 years from the date of issue, subject to the conditions prescribed by the SPCB/PCC. Renewal must be applied for at least 60 days before the expiry of the existing authorisation." },
        { question: "What is the role of PWP Authorisation in the EPR framework?", answer: "PWP-authorised recyclers are the only entities allowed to generate EPR processing certificates on the CPCB centralized portal. These certificates are purchased by PIBOs (producers, importers, brand owners) to fulfil their annual EPR plastic recycling targets. Without PWP Authorisation, a recycler cannot participate in the EPR credit market." },
        { question: "What are the key compliances for an authorised PWP?", answer: "Key post-authorisation obligations include: maintaining records of plastic waste received and processed, filing annual returns on the CPCB centralized EPR portal by June 30 (or April 30 for some categories), generating and transacting EPR certificates for all plastic waste processed, and submitting half-yearly returns to SPCB as per the authorisation conditions." },
        { question: "Can an MSME get PWP Authorisation?", answer: "Yes. MSMEs engaged in plastic waste processing can obtain PWP Authorisation. The procedure is the same as for larger entities, though some state PCBs offer expedited processing for MSME applicants. Corpbiz has assisted hundreds of MSME recyclers in obtaining PWP Authorisation across India." },
        { question: "What is the difference between Consent to Operate (CTO) and PWP Authorisation?", answer: "Consent to Operate (CTO) is granted by the SPCB under the Air and Water (Prevention and Control of Pollution) Acts for operating a processing facility. PWP Authorisation is specifically granted under the Plastic Waste Management Rules, 2016 for processing plastic waste. Both are required for operating a compliant plastic waste processing facility." }
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Plastic Waste Processors Authorisation"
                    heroTitleSuffix="— Get SPCB Approved"
                    heroDescription="Aiming to become a plastic waste processor and minimise the environmental impact of plastic waste? Get Plastic Waste Processors Authorisation with VyomBiz. We provide end-to-end support from CTE/CTO to CPCB EPR portal registration and EPR credit setup."
                    stats={[
                        { count: "43857 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Plastic Waste Processors Authorisation —",
                        highlightTitle: "An Overview",
                        description: [
                            "Plastic Waste Processors Authorisation is a mandatory licence issued by the State Pollution Control Board (SPCB) or Pollution Control Committee (PCC) to all entities that collect, segregate, recycle, or dispose of plastic waste in India. It is required under the Plastic Waste Management Rules, 2016 and its 2022 amendments.",
                            "As an authorised Plastic Waste Processor (PWP), your facility can participate directly in the CPCB's EPR credit market — generating and selling EPR processing certificates to PIBOs (producers, importers, brand owners) who need to meet their annual recycling targets. This makes PWP Authorisation not just a compliance requirement but a significant revenue-generating opportunity.",
                            "VyomBiz has assisted 500+ plastic waste processors across India in obtaining authorisation, setting up CPCB EPR portal accounts, and generating EPR credits — providing end-to-end support from Consent to Establish (CTE) to annual return filing.",
                        ],
                        whyIdealTitle: "Types of Plastic Waste Processors Covered",
                        whyIdealList: [
                            { title: "Recyclers", desc: "Facilities that convert collected plastic waste into recycled pellets, granules, or secondary raw materials for re-use in manufacturing." },
                            { title: "Waste-to-Energy (WtE) Units", desc: "Facilities that convert plastic waste into energy through incineration or similar thermal processes with pollution control." },
                            { title: "Waste-to-Oil (WtO) Units", desc: "Facilities using pyrolysis or similar chemical processes to convert plastic waste into fuel oil or other liquid fuels." },
                            { title: "Industrial Composting Units", desc: "Facilities that compost compostable plastic packaging meeting BIS standards for biological degradation under controlled conditions." },
                            { title: "Co-processing Cement Kilns", desc: "Cement kilns pre-approved by CPCB to use plastic waste as alternative fuel and raw material in clinker production." },
                            { title: "Road Construction Units", desc: "Contractors authorised to use plastic waste in bituminous road construction under the Ministry of Road Transport guidelines." },
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Obtaining Plastic Waste Processors Authorisation",
                        subtitle: "Why PWP Authorisation is both a legal requirement and a business opportunity",
                        list: [
                            { title: "EPR Credit Revenue", desc: "Authorised PWPs generate EPR processing certificates on the CPCB portal and sell them to PIBOs — creating a direct revenue stream for every MT of plastic waste processed." },
                            { title: "Legal Compliance & Protection", desc: "PWP Authorisation protects your facility from penalties, closure orders, and legal action under the Plastic Waste Management Rules, 2016 and Environment Protection Act, 1986." },
                            { title: "Access to Formal EPR Market", desc: "Only CPCB-registered, SPCB-authorised PWPs can transact on the centralized EPR portal — giving you access to India's growing multi-thousand crore EPR credit market." },
                            { title: "Enhanced Business Credibility", desc: "PWP Authorisation enables tie-ups with large PIBOs (FMCG brands, e-commerce companies, importers) who legally require authorised recyclers for EPR compliance proof." },
                            { title: "Government Subsidies & Incentives", desc: "Authorised PWPs are eligible for MSME green technology subsidies, state-level environmental grants, and priority procurement under government plastic waste management tenders." },
                            { title: "Contributes to Circular Economy", desc: "PWP Authorisation positions your business as a certified contributor to India's circular economy mission under the National Framework for Extended Producer Responsibility." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria for Plastic Waste Processors Authorisation",
                        subtitle: "Key requirements to obtain PWP Authorisation from SPCB",
                        list: [
                            { title: "Legally Registered Entity", desc: "The applicant must be a legally incorporated entity — company, LLP, partnership firm, sole proprietorship, or cooperative — registered in India." },
                            { title: "SPCB Consent to Establish (CTE)", desc: "Prior CTE approval from the relevant SPCB is required before constructing or modifying a plastic waste processing facility." },
                            { title: "Consent to Operate (CTO)", desc: "CTO from the SPCB is mandatory after facility construction, confirming emission and effluent levels comply with prescribed environmental standards." },
                            { title: "Pollution Control Equipment", desc: "Must have installed pollution control systems — air emission control, effluent treatment plant (ETP), and solid waste management — as required by SPCB conditions." },
                            { title: "Plastic Waste Processing Capacity", desc: "Sufficient processing capacity (machinery, storage, manpower) to handle the plastic waste volumes declared in the authorisation application." },
                            { title: "CPCB EPR Portal Registration", desc: "Must complete Plastic Waste Processor registration on the CPCB centralized EPR portal to generate and transact EPR certificates after obtaining SPCB authorisation." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for Plastic Waste Processors Authorisation",
                        description: "Complete list of documents to be submitted to SPCB/PCC for PWP Authorisation:",
                        list: [
                            "Application form with details of the plastic waste processing unit",
                            "Copy of business registration certificate (CIN, partnership deed, or equivalent)",
                            "PAN card and GST registration of the entity",
                            "Aadhaar and PAN card of the authorized signatory",
                            "Site plan and layout/process flow diagram of the recycling facility",
                            "Copy of sale/lease deed or rent agreement for plant premises",
                            "Pollution control equipment details (ETP, air pollution control systems)",
                            "Existing Consent to Establish (CTE) and Consent to Operate (CTO) from SPCB",
                            "Details of plastic waste to be processed (type, quantity, source)",
                            "Factory licence under the Factories Act, 1948 (if applicable)"
                        ]
                    }}

                    process={{
                        title: "How to Apply for Plastic Waste Processors Authorisation",
                        subtitle: "Step-by-step process to obtain PWP Authorisation from SPCB and CPCB portal registration",
                        steps: [
                            { step: "01", title: "Eligibility Assessment & Documentation", desc: "Assess your facility's compliance status, identify any gaps, and prepare all mandatory documents for SPCB submission. VyomBiz conducts a pre-application compliance audit." },
                            { step: "02", title: "Obtain Consent to Establish (CTE)", desc: "Apply to the relevant SPCB for CTE before constructing or modifying your plastic waste processing facility. CTE validates plant design and siting." },
                            { step: "03", title: "Facility Setup & Pollution Controls", desc: "Set up processing machinery, install mandatory pollution control systems (ETP, air control), and complete trial operations as per SPCB specifications." },
                            { step: "04", title: "Obtain Consent to Operate (CTO)", desc: "Apply for CTO from SPCB after facility setup and trial run. Submit emission/effluent test reports confirming compliance with prescribed environmental standards." },
                            { step: "05", title: "Apply for PWP Authorisation", desc: "Submit the PWP Authorisation application to SPCB/PCC with all required documents, CTE/CTO copies, and facility details. VyomBiz manages the entire submission process." },
                            { step: "06", title: "CPCB EPR Portal Registration", desc: "After receiving SPCB authorisation, register as a Plastic Waste Processor on the CPCB centralized EPR portal to start generating and transacting EPR credits immediately." }
                        ]
                    }}

                    features={{
                        title: "Why Partner with VyomBiz for Plastic Waste Processors Authorisation?",
                        subtitle: "Trusted by 500+ plastic waste processors across India for authorisation and EPR credit setup",
                        list: [
                            { title: "500+ PWP Authorisations Completed", desc: "We have successfully obtained PWP Authorisation for 500+ plastic waste processing units — recyclers, WtE, WtO, and co-processing facilities — across all Indian states." },
                            { title: "End-to-End CTE to EPR Support", desc: "From Consent to Establish to CTO, PWP Authorisation, CPCB portal registration, and EPR credit generation — VyomBiz manages your entire compliance journey." },
                            { title: "EPR Credit Revenue Setup", desc: "Post-authorisation, we set up your CPCB EPR portal account and guide you on generating and transacting EPR credits with PIBOs for maximum revenue from Day 1." },
                            { title: "99% Approval Track Record", desc: "Our thorough pre-application audits, accurate documentation, and experienced liaison with SPCB officials ensure a 99% approval rate for PWP Authorisation applications." },
                            { title: "Pan-India Regulatory Coverage", desc: "With expertise in SPCB regulations across all 28 states and 8 UTs, VyomBiz provides uniform, reliable authorisation support regardless of your facility location." },
                            { title: "Dedicated Compliance Manager", desc: "A single point of contact tracks your applications, liaises with SPCB officials, and ensures timely renewal of your PWP Authorisation well before expiry." }
                        ]
                    }}

                    postCompliance={{
                        title: "Post-Authorisation Compliance for Plastic Waste Processors",
                        subtitle: "Ongoing obligations after obtaining PWP Authorisation",
                        list: [
                            { title: "Annual Returns on CPCB Portal", desc: "File annual returns by June 30 (or April 30 for certain categories) on the CPCB centralized EPR portal with category-wise plastic waste processing data." },
                            { title: "Half-Yearly SPCB Returns", desc: "Submit half-yearly returns to the SPCB/PCC with details of plastic waste received, processed, and EPR certificates generated during each half-year period." },
                            { title: "EPR Certificate Generation", desc: "Generate EPR processing certificates on the CPCB portal for all plastic waste processed and transact them with registered PIBOs to fulfil their EPR targets." },
                            { title: "Maintain Processing Records", desc: "Keep detailed records of plastic waste received (source, category, quantity), processed, and disposed of — along with invoices and weigh bridge data for SPCB inspections." },
                            { title: "PWP Authorisation Renewal", desc: "Apply for renewal of PWP Authorisation at least 60 days before expiry with updated facility details, compliance reports, and pollution control data." },
                            { title: "Pollution Control Monitoring", desc: "Periodically test and document air emissions and effluent quality from the processing facility and submit reports to SPCB as per authorisation conditions." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Top questions about Plastic Waste Processors Authorisation"
                    faqs={faqs}
                />
                <ReviewsSection
                    title="What Our Clients Say"
                    subtitle="Trusted by 500+ plastic waste processors across India for authorisation, compliance, and EPR credit setup."
                />
            </div>
        </div>
    );
};

export default PlasticWasteProcessorsAuthorisation;
