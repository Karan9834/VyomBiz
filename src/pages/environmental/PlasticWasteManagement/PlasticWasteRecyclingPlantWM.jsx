import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const PlasticWasteRecyclingPlantWM = () => {
    const faqs = [
        { question: "What is the cost of a plastic waste recycling plant setup in India?", answer: "The cost of setting up a plastic waste recycling plant in India varies based on the plant capacity and technology. A small-scale plant (1-2 MT/day) may require an investment of ₹25-50 lakh, while a medium-scale facility (5 MT/day) can cost ₹1-3 crore including machinery, land development, and pollution control equipment." },
        { question: "Is a plastic waste recycling plant setup profitable?", answer: "Yes, it is highly profitable. Licensed plastic waste recyclers can earn revenue from selling recycled pellets/granules to manufacturers, generating and selling EPR credits to PIBOs on the CPCB portal, and securing contracts with large brands and municipalities. The ROI is typically achieved within 2-3 years for a well-managed operation." },
        { question: "What licenses are required for plastic waste recycling plant setup?", answer: "Required licenses include: Company Incorporation Certificate, GST Registration, No Objection Authorization from SPCB/PCC (Consent to Establish and Consent to Operate), Factory License under the Factories Act 1948, and IEC Code (for importers). Some states may require additional local NOCs." },
        { question: "Are all plastics recyclable?", answer: "No. Recyclable plastics include PET, HDPE, PP, LDPE, PS, and PVC. Non-recyclable or difficult-to-recycle plastics include thermoset plastics, Styrofoam, multilayer laminated plastics, polyurethane foam (PUF), Bakelite, Melamine, Nylon, and bioplastics/composite materials." },
        { question: "What is the land area required for plastic waste recycling plant setup?", answer: "Generally, approximately 700-800 sq. ft. of land is required for a small-scale plastic waste recycling plant. Larger operations handling 5+ MT/day require 2,500-5,000 sq. ft. including processing, storage, workers' facilities, and pollution control areas." },
        { question: "Is there any government subsidy for plastic waste recycling plant setup?", answer: "Yes. The MSME Ministry offers subsidies for green technology adoption including plastic recycling. Under schemes like PMEGP, MSMEs can avail 15-35% capital subsidy. State governments and PCBs also offer additional incentives for certified plastic waste recycling units in India." },
        { question: "What is the process for plastic recycling machine factory setup?", answer: "The process involves: market research and business plan, site selection and zoning clearance, obtaining Consent to Establish (CTE) from SPCB, installing machinery and pollution control, trial run, obtaining Consent to Operate (CTO), factory license, PWP registration on CPCB EPR portal, and starting operations + generating EPR credits." }
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Plastic Waste Recycling Plant Setup"
                    heroTitleSuffix="— Start Your Green Business"
                    heroDescription="Looking for a plastic waste recycling plant setup in India? Corpbiz helps you transform plastic waste into an eco-friendly business opportunity. Assisted in 100+ plant setups with a 75% market share in regulatory support."
                    stats={[
                        { count: "43773 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Plastic Waste Recycling Plant Setup —",
                        highlightTitle: "An Overview",
                        description: [
                            "Are you dreaming of setting up a plastic waste recycling plant? You are at the right place. A plastic waste recycling plant is a facility designed to recycle plastic waste into valuable products. Setting up a plastic waste recycling business addresses the growing issue of accumulating plastic waste through its contribution to sustainable energy production.",
                            "The recycling facility setup represents a profitable business opportunity for industries like packaging, construction, and manufacturing. India generates approximately 3.5 million metric tonnes of plastic waste annually, making it one of the world's largest plastic waste generators — and creating massive demand for licensed recyclers.",
                            "With Corpbiz experts, secure a plastic waste recycling plant license and set up your business effortlessly. We cover everything from site selection and SPCB consent to CPCB EPR portal registration and EPR credit generation setup.",
                        ],
                        whyIdealTitle: "Equipment Required for Plastic Recycling Plant",
                        whyIdealList: [
                            { title: "Granulators & Extruders", desc: "Core machinery for size reduction and pelletizing of sorted plastic waste." },
                            { title: "Universal Shredders & Rotary Shears", desc: "For primary shredding of bulky plastic waste into manageable pieces." },
                            { title: "Separators & Centrifugal Dryers", desc: "For density-based separation and moisture removal after washing." },
                            { title: "Conveyor Belts & Agglomeration Plants", desc: "For material handling and agglomeration of flexible plastic waste." },
                        ]
                    }}

                    advantages={{
                        title: "Benefits of Plastic Waste Recycling Plant Setup Registration",
                        subtitle: "Why setting up a licensed plastic recycling plant is a smart business decision",
                        list: [
                            { title: "Plastic Waste Reduction", desc: "Reduces the amount of plastic waste entering landfills and the environment, directly addressing India's plastic pollution crisis." },
                            { title: "EPR Credit Revenue", desc: "Licensed recyclers generate EPR credits for every MT processed and sell them to PIBOs through the CPCB portal — a major additional revenue stream." },
                            { title: "Conservation of Natural Resources", desc: "Plastic recycling conserves petroleum resources and energy compared to manufacturing new plastic from raw materials." },
                            { title: "Economic Growth & Job Creation", desc: "A plastic recycling plant generates 12-30 jobs per facility, contributing to local employment and economic growth." },
                            { title: "Enhances CSR & Brand Image", desc: "Operating a certified recycling plant enhances corporate social responsibility (CSR) and brand image, attracting sustainable investors and B2B clients." },
                            { title: "Government Subsidies & Incentives", desc: "Licensed plastic waste recyclers are eligible for MSME subsidies, green technology grants, and state-level environmental incentives under various government schemes." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria for Plastic Waste Recycling Plant Setup",
                        subtitle: "Key requirements for establishing a compliant plastic recycling facility",
                        list: [
                            { title: "Land & Building Requirement", desc: "Minimum 700-800 sq. ft. for small-scale operations. Industrial or manufacturing zone location required as per SPCB/local authority zoning norms." },
                            { title: "Proper Utilities", desc: "Stable electric connection (adequate load for machinery), adequate water supply for washing operations, proper drainage and effluent treatment." },
                            { title: "Labour Requirement", desc: "At least 12-15 technical and unskilled workers for operations, quality control, sorting, and machinery maintenance." },
                            { title: "Raw Material Access", desc: "Established source of plastic waste feedstock — tie-ups with scrap dealers, pigment collectors, municipalities, or PIBOs and PROs under EPR framework." },
                            { title: "Eligible Entities", desc: "Any individual, company, LLP, partnership, society, or cooperative that is legally registered in India can apply for plastic waste recycling plant setup." },
                            { title: "Pollution Control Compliance", desc: "Must install air pollution control, effluent treatment, and solid waste disposal systems as required by SPCB under the Air and Water Prevention Acts." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for Plastic Waste Recycling Plant Setup",
                        description: "Complete list of documents to apply for plant authorization from SPCB and CPCB:",
                        list: [
                            "Covering requisition letter stating the status of industry and activities",
                            "Copy of sale/lease deed or rent agreement for plant premises",
                            "Copy of electricity or water/utility bill",
                            "Details of balance sheet and wastewater balance for the process",
                            "Land use clarification from the competent authority",
                            "Sewage treatment plant (STP) proposal or existing STP details",
                            "Copy of attested Memorandum of Articles (for public/private sectors)",
                            "Aadhaar card and PAN card of the authorized signatory",
                            "Layout plan showing the location of process equipment and hazardous waste storage",
                            "Schematic diagram showing distance from water bodies, roads, agricultural and residential areas"
                        ]
                    }}

                    process={{
                        title: "How to Apply for Plastic Waste Recycling Plant License",
                        subtitle: "Step-by-step guide to set up a compliant plastic recycling facility in India",
                        steps: [
                            { step: "01", title: "Market Research & Business Planning", desc: "Conduct thorough market research to understand demand for recycled plastic products and develop a comprehensive business plan with financial projections and strategies." },
                            { step: "02", title: "Site Selection & Legal Compliance", desc: "Choose an SPCB-approved industrial site and ensure compliance with environmental laws, waste management regulations, health and safety standards." },
                            { step: "03", title: "Consent to Establish (CTE) from SPCB", desc: "Apply to the State Pollution Control Board for CTE before starting construction. CTE approval validates the plant design, pollution control systems, and site suitability." },
                            { step: "04", title: "Install Machinery & Pollution Controls", desc: "Install all processing machinery (shredders, extruders, granulators, separators) and mandatory pollution control equipment (air, effluent, and solid waste systems)." },
                            { step: "05", title: "Consent to Operate (CTO) from SPCB", desc: "After construction and machinery installation, obtain the Consent to Operate from SPCB with trial run data confirming emissions are within permissible limits." },
                            { step: "06", title: "Factory License & PWP Registration", desc: "Obtain Factory License under the Factories Act 1948, and register as a Plastic Waste Processor (PWP) on the CPCB centralized EPR portal to start generating EPR credits." }
                        ]
                    }}

                    features={{
                        title: "How Corpbiz Simplifies Plastic Recycling Plant Setup",
                        subtitle: "India's most trusted partner for plastic waste recycling plant licensing and compliance",
                        list: [
                            { title: "100+ Plant Setups Completed", desc: "Successfully guided 100+ plastic waste recycling plant setups across India — from small-scale units to large industrial facilities." },
                            { title: "99% Success Rate", desc: "We have maintained a 99% success rate in plastic waste recycling plant setup registrations and SPCB/CPCB authorizations across all Indian states." },
                            { title: "Saved 5,00,000+ Hours of Greenpreneurs", desc: "Our streamlined processes and expert network have saved hundreds of thousands of hours for green entrepreneurs across India." },
                            { title: "End-to-End Assistance", desc: "From market research and site selection to CTE, CTO, Factory License, PWP registration, and EPR credit setup — Corpbiz handles everything." },
                            { title: "EPR Credit Setup & Revenue Maximization", desc: "Post-licensing, we help you register on the CPCB EPR portal to generate and sell credits, creating immediate revenue from Day 1 of operations." },
                            { title: "24/7 Dedicated Support", desc: "Round-the-clock support to resolve queries about plant registration, compliance, SPCB inspections, and EPR portal management." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Top questions about plastic waste recycling plant setup registration"
                    faqs={faqs}
                />
                <ReviewsSection
                    title="What Our Clients Say"
                    subtitle="Trusted by 100+ recycling plant operators across India for setup, licensing, and compliance."
                />
            </div>
        </div>
    );
};

export default PlasticWasteRecyclingPlantWM;
