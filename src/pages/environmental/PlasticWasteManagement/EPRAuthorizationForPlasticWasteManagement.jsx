import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRAuthorizationForPlasticWasteManagement = () => {
    const faqs = [
        { question: "What is Plastic Waste EPR Registration?", answer: "EPR registration for plastic waste is a mandatory environmental compliance requirement for producers, importers, brand owners, and plastic waste processors seeking registration with the Central Pollution Control Board (CPCB). It ensures accountability for managing plastic packaging waste by requiring businesses to meet recycling, reuse, or end-of-life disposal targets, promoting a circular economy and reducing environmental pollution." },
        { question: "What is the applicability of EPR in plastic waste management?", answer: "EPR applies to all producers, importers, and brand owners (PIBOs) who place plastic packaging in the Indian market. This includes rigid plastic, flexible plastic, multi-layer plastic, and compostable plastic packaging across all categories (I to IV) as defined under the Plastic Waste Management Rules, 2016 (amended 2022)." },
        { question: "What are the categories of plastic packaging under EPR?", answer: "Category I covers rigid plastic packaging (PET bottles, containers). Category II covers single-layer flexible plastic. Category III covers multi-layered/composite plastic packaging with one or more non-plastic layers. Category IV covers compostable plastic packaging meeting standards for biological degradation." },
        { question: "What entities are required for CPCB EPR plastic waste management registration?", answer: "Producers, importers, brand owners, sellers and importers of raw materials, manufacturers of raw materials, MSMEs, plastic waste processors (recyclers, waste-to-energy, waste-to-oil, industrial composting firms), and online platforms/supermarket chains operating in more than two states." },
        { question: "How much must be paid in application fees for plastic waste EPR registration?", answer: "Registration fees on the CPCB EPR portal are based on the quantity of plastic packaging. The fees range from ₹2,000 to ₹25,000 depending on annual plastic usage volume. The CPCB portal specifies the fee slab applicable to each PIBO at the time of application." },
        { question: "Why is EPR registration required for plastic packaging?", answer: "EPR registration is legally mandatory under the Plastic Waste Management Rules, 2016. Non-compliance can attract penalties up to ₹50 lakh, product bans, and regulatory action. EPR also demonstrates environmental commitment, enhancing brand reputation and consumer trust among the 70%+ consumers who prefer compliant brands." },
        { question: "What is the difference between EPR for e-waste and EPR for plastic waste?", answer: "Plastic EPR covers producers/importers of plastic packaging under PWM Rules 2016. E-waste EPR covers producers/importers of electrical and electronic equipment under E-Waste Rules 2022. Both are managed through separate CPCB portals with different target types, reporting formats, and certificate-issuing mechanisms." }
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Plastic Waste EPR Registration"
                    heroTitleSuffix="— Start Filing in 2 Min"
                    heroDescription="Is your brand at risk due to plastic waste mismanagement? 70% consumers prefer compliant brands. Corpbiz ensures 100% documentation accuracy and simplifies plastic waste EPR registration for you. Avoid penalties up to ₹50 lakh and a product ban."
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
                        title: "Plastic Waste EPR Registration —",
                        highlightTitle: "An Overview",
                        description: [
                            "The EPR registration for plastic waste is mandatory to ensure the environmentally sound management of plastic waste under the Plastic Waste Management Rules, 2016. It requires producers, importers, and brand owners to ensure their plastic packaging waste is processed through recycling, reuse, or end-of-life disposal.",
                            "Plastic waste EPR registration, obtained through the Central Pollution Control Board (CPCB), enables businesses to report plastic packaging quantities, meet annual recycling targets, and submit compliance reports. With proper guidance from Corpbiz, businesses can streamline documentation, portal registration, recycler tie-ups, and annual return filing.",
                            "Trusted by 1091+ PIBOs and PWPs in India since 2018, Corpbiz provides end-to-end EPR registration, compliance planning, annual filing, and post-registration support to help you achieve 100% CPCB compliance with expert documentation and a verified recyclers network.",
                        ],
                        whyIdealTitle: "What's Included in Our Service",
                        whyIdealList: [
                            { title: "Documentation Support", desc: "Complete preparation of all required documents for CPCB portal submission." },
                            { title: "EPR Application Filing", desc: "Expert-led filing on the CPCB centralized EPR portal with accuracy and speed." },
                            { title: "Compliance Strategy Planning", desc: "Customized EPR action plan aligned with your product categories and volumes." },
                            { title: "Annual Return Filing", desc: "Timely preparation and submission of annual returns and quarterly progress reports." },
                            { title: "EPR Certificate Assistance", desc: "Guidance on procuring and transacting EPR certificates with registered PWPs." },
                            { title: "Free 30-Min Expert Advisory", desc: "Initial free consultation to assess your EPR applicability and compliance needs." },
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Obtaining EPR Plastic Waste Registration",
                        subtitle: "Why EPR registration is not just a legal obligation but a strategic business advantage",
                        list: [
                            { title: "Ensures Legal Compliance", desc: "EPR plastic waste registration helps producers, importers, and brand owners comply with Plastic Waste Management Rules, 2016 and subsequent amendments, avoiding penalties up to ₹50 lakh." },
                            { title: "Strengthens Brand Reputation", desc: "Demonstrates your company's commitment to responsible waste management and sustainability, enhancing brand value, building consumer trust, and improving corporate image." },
                            { title: "Promotes Environmental Sustainability", desc: "Ensures plastic packaging waste is collected, recycled, reused, or disposed of in an environmentally sound manner, reducing landfill burden and supporting circular economy practices." },
                            { title: "Improves Waste Management Planning", desc: "Helps track the quantity and type of plastic packaging entering the market and supports structured waste management and recycling mechanisms." },
                            { title: "Supports Recycling Ecosystem", desc: "Mandates tie-ups with authorised plastic waste processors and recyclers, promoting the growth of the formal recycling sector and responsible disposal systems." },
                            { title: "Reduces Regulatory & Operational Risks", desc: "Helps meet EPR targets and submit periodic returns, reducing exposure to regulatory actions, penalties, or business disruptions arising from non-compliance." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria for EPR Authorization for Plastic Waste Management",
                        subtitle: "Who must register and what are the mandatory requirements",
                        list: [
                            { title: "Mandatory CPCB Registration", desc: "Secure mandatory registration with the Central Pollution Control Board (CPCB) through the centralized EPR portal for plastic packaging." },
                            { title: "EPR Action Plan Submission", desc: "Submit an EPR plan detailing plastic waste collection, recycling, and disposal mechanisms and annual targets." },
                            { title: "Legally Registered Entity", desc: "Applicants must be a legally registered entity — company, LLP, sole proprietorship, or partnership firm registered in India." },
                            { title: "Plastic Packaging Disclosure", desc: "Must disclose the quantity and category of plastic packaging introduced into the market, category-wise." },
                            { title: "Online Sellers / Marketplaces", desc: "Online platforms and marketplaces (non-MSME) selling products in plastic packaging must also register under EPR." },
                            { title: "MSMEs", desc: "Producer MSMEs are also covered, with proportionate EPR targets based on their market volumes — smaller obligation, same compliance framework." }
                        ]
                    }}

                    documents={{
                        title: "Documents to Register for EPR for Plastic Waste Online",
                        description: "Complete list of mandatory documents for CPCB EPR portal registration:",
                        list: [
                            "PDF copy of the company's PAN, CIN & GST",
                            "PDF copy of the authorized person's PAN & Aadhaar",
                            "Details of products produced or marketed with plastic packaging",
                            "Representative picture of plastic packaging used",
                            "Registration certificate of District Industries Centre (DIC) — if applicable",
                            "Import-Export Code (IEC) — for importers",
                            "Scanned copy of signatures of the authorized person",
                            "Covering letter and process flow diagrams (for producers & PWPs only)",
                            "Geo-tagged pictures of raw material storage area",
                            "Document regarding any other relevant information of the unit"
                        ]
                    }}

                    process={{
                        title: "How to Apply for Plastic Waste EPR Registration",
                        subtitle: "Step-by-step process on the CPCB centralized portal",
                        steps: [
                            { step: "01", title: "Sign Up on the CPCB Portal", desc: "Create and register your company online at the CPCB centralized EPR portal for plastic packaging. Corpbiz handles the account creation and profile setup." },
                            { step: "02", title: "Upload Necessary Documents", desc: "Prepare and upload all required documents along with the duly completed application form on the CPCB portal." },
                            { step: "03", title: "Review of EPR Application", desc: "The EPR application and submitted documents are reviewed by CPCB. Clarifications or additional information may be sought within the specified timeframe." },
                            { step: "04", title: "Payment of Applicable Fees", desc: "After successful scrutiny, pay the prescribed registration fees online via the CPCB portal. Fee amount depends on annual plastic packaging volume." },
                            { step: "05", title: "Issuance of Plastic Waste EPR Certificate", desc: "Upon review of the application, CPCB grants approval and issues the EPR registration certificate. Rejection (if any) is communicated with reasons." },
                            { step: "06", title: "Post-Registration Compliance", desc: "Post-approval, ensure compliance with the waste management plan, set up PWP tie-ups, and submit half-yearly progress reports and annual returns." }
                        ]
                    }}

                    features={{
                        title: "Why Partner with Corpbiz for Plastic Waste EPR Registration?",
                        subtitle: "Trusted by 1000+ PIBOs and PWPs across India for hassle-free plastic waste compliance",
                        list: [
                            { title: "1000+ PIBOs and PWPs Assisted", desc: "We have helped more than 1000 producers, importers, brand owners, and plastic waste processors achieve CPCB EPR compliance." },
                            { title: "5000+ Compliance Projects Supported", desc: "Corpbiz assists 5000+ businesses in obtaining environmental registrations, regulatory approvals, and waste management compliance." },
                            { title: "10,000+ Environmental Professionals", desc: "Get access to a dedicated team of environmental consultants, legal experts, and compliance professionals experienced in CPCB EPR portal procedures." },
                            { title: "10+ Years of Industry Experience", desc: "With 10+ years in regulatory licensing and environmental compliance, Corpbiz provides reliable guidance for plastic waste EPR registration and ongoing compliance." },
                            { title: "Dedicated Compliance Manager", desc: "Single point of contact who coordinates documentation, responds to queries, and tracks application status throughout the registration process." },
                            { title: "Cost-Effective & Transparent Services", desc: "Practical, cost-effective solutions for businesses of all sizes and packaging volumes with full fee transparency and no hidden charges." }
                        ]
                    }}

                    postCompliance={{
                        title: "Post-Registration EPR Compliance for Plastic Waste",
                        subtitle: "Key ongoing obligations after obtaining EPR authorization",
                        list: [
                            { title: "Half-Yearly Report Submission", desc: "Submit half-yearly progress on plastic waste management for every state/UT in your EPR Action Plan to the concerned SPCB/PCC within 15 days after the end of each half-year." },
                            { title: "Annual Return Filing by June 30", desc: "File annual returns on the CPCB portal by June 30 of the next financial year disclosing category-wise plastic packaging quantities and recycling/processing data." },
                            { title: "Sales Details Submission", desc: "Submit sales details of plastic packaging category-wise to the concerned State Pollution Control Board or Pollution Control Committee." },
                            { title: "EPR Certificate Transactions", desc: "Purchase or transact EPR processing certificates from registered PWPs (plastic waste processors) through the CPCB centralized portal to meet annual targets." },
                            { title: "Recycler Tie-Up Documentation", desc: "Maintain documentary proof from respective processing facilities demonstrating that plastic waste has been treated per EPR targets." },
                            { title: "Use of Recycled Content (URV)", desc: "Meet progressive targets for use of recycled plastic content in packaging — 30% by 2025-26 — and purchase URV credits from CPCB-registered recyclers if needed." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Top questions regarding Plastic Waste EPR Registration"
                    faqs={faqs}
                />
                <ReviewsSection
                    title="What Our Clients Say"
                    subtitle="Trusted by 1000+ PIBOs and PWPs across India for plastic waste EPR compliance."
                />
            </div>
        </div>
    );
};

export default EPRAuthorizationForPlasticWasteManagement;
