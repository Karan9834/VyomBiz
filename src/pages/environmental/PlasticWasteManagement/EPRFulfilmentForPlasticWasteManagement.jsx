import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRFulfilmentForPlasticWasteManagement = () => {
    const faqs = [
        { question: "What is EPR fulfilment in plastic waste management?", answer: "EPR fulfilment refers to the process by which producers, importers, and brand owners (PIBOs) meet their annual plastic packaging collection, recycling, and use-of-recycled-content (URV) targets as mandated by the Plastic Waste Management Rules, 2016. Fulfilment can be achieved through physical waste collection + PWP tie-ups, or by purchasing EPR credits from registered plastic waste processors on the CPCB portal." },
        { question: "Why is EPR fulfilment important for plastic waste?", answer: "Non-fulfilment of EPR targets attracts Environmental Compensation (EC) at ₹32.13/kg for recycling shortfall (FY 2023-24). CPCB publishes a list of non-compliant PIBOs annually, damaging brand reputation. Persistent non-fulfilment can lead to product bans, operations suspension, and public interest litigation by the environment ministry." },
        { question: "How do PIBOs fulfil their plastic EPR targets?", answer: "PIBOs can fulfil EPR targets through: (1) Setting up their own plastic waste collection networks; (2) Engaging authorized PWPs for processing; (3) Partnering with local bodies, gram panchayats, or third-party waste managers; (4) Purchasing EPR certificates/credits from registered PWPs on the CPCB centralized portal." },
        { question: "What is the annual return deadline for plastic waste EPR?", answer: "PIBOs must file annual returns by June 30 of the next financial year on the CPCB portal. PWPs must file annual returns by June 30 as well (some categories by April 30), providing category-wise and state-wise plastic waste processing data. Late filing attracts Environmental Compensation." },
        { question: "What are the 7 categories of plastic under plastic waste management?", answer: "The PWM Rules 2016 define 7 categories: (1) PET - Polyethylene Terephthalate, (2) HDPE - High Density Polyethylene, (3) PVC - Polyvinyl Chloride, (4) LDPE - Low Density Polyethylene, (5) PP - Polypropylene, (6) PS - Polystyrene resins, (7) Multi-materials (ABS, poly-phenylene oxide, polycarbonate, PBT)." },
        { question: "What penalties apply for non-fulfilment of EPR obligations?", answer: "Penalties include: Environmental Compensation at ₹32.13/kg recycling shortfall; product ban orders; publication of non-compliant PIBOs on CPCB website; suspension of EPR registration; and potential criminal action under the Environment Protection Act 1986 for willful non-compliance." },
        { question: "Can Corpbiz manage EPR target fulfilment for our company?", answer: "Yes. Corpbiz offers a full-service EPR target fulfilment retainer that covers: EPR target calculation, PWP tie-ups or credit procurement, CPCB portal management, annual return filing, EC deposit (if needed), and year-round compliance monitoring — so you never face penalties or missing deadlines." }
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Fulfilment For Plastic Waste Management"
                    heroTitleSuffix="— Hit 100% Compliance"
                    heroDescription="Get your EPR Fulfilment in Plastic Waste Management done with the help of Corpbiz. End-to-end EPR target calculation, PWP tie-ups, credit procurement, and annual return filing — ensuring zero penalties for your business."
                    stats={[
                        { count: "43633 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "EPR Fulfilment in Plastic Waste Management —",
                        highlightTitle: "An Overview",
                        description: [
                            "Producers, importers, and brand owners bear Extended Producer Responsibility (EPR) for the collection and recycling of plastic packaging waste under the Plastic Waste Management Rules, 2016. EPR applies to both pre- and post-consumer plastic packaging waste across all four packaging categories.",
                            "EPR fulfilment requires PIBOs to meet annual recycling, waste-to-energy, or co-processing targets proportional to the quantity of plastic packaging they place in the market. Fulfilment can be achieved through physical waste collection networks or by purchasing EPR certificates from CPCB-registered plastic waste processors (PWPs) on the centralized portal.",
                            "Corpbiz provides turnkey EPR target fulfilment services — handling EPR target calculation, PWP identification, credit procurement, portal management, and annual return filing for 500+ PIBOs across India.",
                        ],
                        whyIdealTitle: "Obligated Entities Under EPR Fulfilment",
                        whyIdealList: [
                            { title: "Producers (P)", desc: "Manufacturers placing plastic packaging in the Indian market — responsible for post-consumer plastic waste collection and recycling targets." },
                            { title: "Importers (I)", desc: "Importers of all imported plastic packaging and/or plastic packaging of imported products — full EPR targets apply on import quantities." },
                            { title: "Brand Owners (BO)", desc: "Marketplaces, online platforms, and supermarket chains placing branded products in plastic packaging — including non-MSME entities." },
                            { title: "Plastic Waste Processors (PWPs)", desc: "Except cement kilns and road construction units, all registered PWPs must generate category-wise EPR certificates for plastic waste processed." },
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Fulfilment in Plastic Waste Management",
                        subtitle: "Why proactive EPR fulfilment pays off for businesses of all sizes",
                        list: [
                            { title: "Avoid Environmental Compensation Penalties", desc: "EC is levied at ₹32.13/kg for recycling shortfall. Proactive EPR fulfilment through Corpbiz eliminates this penalty entirely." },
                            { title: "Promotion of Recycling & Circular Economy", desc: "EPR fulfilment encourages investment in recycling infrastructure and increases plastics being recycled, reducing demand for virgin plastic production." },
                            { title: "Job Creation in Waste Management", desc: "EPR programs create employment in waste collection, sorting, processing, and related sectors — with every 1,000 MT of EPR credit generating ~15 jobs in the recycling sector." },
                            { title: "Reduction in Plastic Pollution", desc: "EPR ensures proper collection, recycling, and disposal of plastic products, reducing plastic pollution in natural habitats such as oceans, rivers, and forests." },
                            { title: "Brand Protection & ESG Compliance", desc: "Annual EPR returns serve as proof of compliance for ESG disclosures, BRSR filings, and B2B supplier qualification — protecting brand reputation." },
                            { title: "Supply Chain Continuity", desc: "Uninterrupted EPR compliance ensures your products are not banned from marketplaces that require EPR registration verification from their sellers." }
                        ]
                    }}

                    eligibility={{
                        title: "EPR Plastic Packaging Target Structure",
                        subtitle: "How plastic EPR targets are calculated and what you need to fulfil",
                        list: [
                            { title: "Target Based on Sales/Import Volume", desc: "EPR recycling targets are determined as a percentage of the total plastic packaging placed in the market in the previous financial year — category-wise." },
                            { title: "Category I & II Targets (2024-25)", desc: "Category I (rigid plastic): 70% recycling target. Category II (flexible single-layer): 30% recycling, 30% WtE/WtO/co-processing target." },
                            { title: "Use of Recycled Content (URV) Target", desc: "Separate from recycling targets — PIBOs must use 30% recycled content in packaging by 2025-26, increasing to higher percentages by 2028-29." },
                            { title: "Multi-State Operations", desc: "PIBOs operating in more than two states register directly with CPCB (instead of SPCB). Targets are calculated at the national level across all states." },
                            { title: "Credit Purchase as Fulfilment", desc: "If physical collection is not feasible, PIBOs can purchase EPR processing certificates from CPCB-registered PWPs through the portal to fulfil up to 100% of recycling targets." },
                            { title: "End-of-Life Disposal Obligation", desc: "Any plastic packaging that cannot be recycled must be directed to designated end-of-life disposal methods — energy recovery or co-processing — with certificates from the receiving facility." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required under EPR Fulfilment in Plastic Waste Management",
                        description: "Key information and documents needed for CPCB EPR portal registration and annual returns:",
                        list: [
                            "Legal Name and Trade Name (as per GST registration)",
                            "Type of Business (Private/Public/Proprietorship/Co-operative etc.)",
                            "Type of Company (Micro/Small/Medium/Large) and supporting document",
                            "Registered Address of the entity",
                            "Company PAN Card Number (validated on CPCB portal)",
                            "Company CIN Number (for companies registered under Companies Act)",
                            "Name and Designation of Authorized Person",
                            "Mobile Number, PAN, and Aadhaar details of Authorized Person",
                            "Category-wise plastic packaging quantity data for the reporting period",
                            "EPR processing certificates from registered PWPs or URV credit certificates"
                        ]
                    }}

                    process={{
                        title: "Steps to Complete EPR Fulfilment in Plastic Waste Management",
                        subtitle: "How Corpbiz manages end-to-end EPR target fulfilment for PIBOs",
                        steps: [
                            { step: "01", title: "CPCB Portal Registration", desc: "Register as a PIBO on the CPCB centralized EPR portal with complete business and product information. Corpbiz handles account setup and profile configuration." },
                            { step: "02", title: "EPR Target Determination", desc: "Calculate category-wise EPR targets for the current financial year based on sales/import data. Identify the recycling, WtE/WtO, and URV targets applicable to your business." },
                            { step: "03", title: "PWP Tie-Up / Credit Procurement", desc: "Identify and engage CPCB-registered PWPs for physical waste collection, or purchase EPR processing certificates directly from the CPCB portal — whichever is more cost-effective." },
                            { step: "04", title: "Plastic Packaging Collection & Processing", desc: "Set up collection points, engage local bodies or third-party aggregators, and ensure collected plastic is channeled to registered PWPs for processing within the financial year." },
                            { step: "05", title: "Annual Return Filing by June 30", desc: "File the annual return on the CPCB EPR portal with complete reconciliation of plastic packaging placed in market vs. recycling/processing certificates and URV credits." },
                            { step: "06", title: "EC Deposit (If Applicable)", desc: "If targets are not fully met, calculate and deposit the applicable Environmental Compensation (at ₹32.13/kg or applicable rate) before the annual return deadline to close the compliance year." }
                        ]
                    }}

                    features={{
                        title: "How Corpbiz Assists with EPR Fulfilment in Plastic Waste Management",
                        subtitle: "India's trusted turnkey EPR fulfilment partner for PIBOs across all industries",
                        list: [
                            { title: "Expert EPR Portal Management", desc: "Our team manages your CPCB EPR portal login, annual return filing, credit transactions, and all regulatory communications on your behalf." },
                            { title: "Best-Price EPR Credit Procurement", desc: "Access to 300+ CPCB-registered PWPs ensures the most competitive EPR credit pricing for PIBOs needing last-minute fulfilment before year-end." },
                            { title: "Complete Documentation Handling", desc: "We collect all required documents, prepare certificates, coordinate with PWPs, and ensure every piece of evidence is ready for seamless annual return filing." },
                            { title: "One-Stop Compliance Platform", desc: "From EPR eligibility assessment to target calculation, fulfilment, CPCB portal management, and report filing — a single Corpbiz retainer covers it all." },
                            { title: "Real-Time Compliance Dashboard", desc: "Monthly EPR target vs. achievement tracking dashboard keeping you informed about your current compliance status — with alerts for upcoming deadlines." },
                            { title: "Zero-Penalty Track Record", desc: "99%+ of Corpbiz-managed PIBOs file annual returns on time with complete target fulfilment and zero Environmental Compensation across all compliance years." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about EPR Fulfilment for Plastic Waste Management"
                    faqs={faqs}
                />
                <ReviewsSection
                    title="What Our Clients Say"
                    subtitle="Trusted by 500+ PIBOs for seamless plastic waste EPR target fulfilment across India."
                />
            </div>
        </div>
    );
};

export default EPRFulfilmentForPlasticWasteManagement;
