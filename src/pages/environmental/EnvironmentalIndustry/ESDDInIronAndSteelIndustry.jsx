import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESDDInIronAndSteelIndustry = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental and Social Due Diligence"
                    heroTitleSuffix="in the Iron & Steel Industry"
                    heroDescription="Hire our team of experts at Corpbiz to conduct Environmental and Social Due Diligence in the Iron & Steel sector, ensuring ESG compliance and risk mitigation."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "ESDD in Iron & Steel —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "The iron and steel industry is one of the foundational pillars of the Indian economy, driving infrastructure and manufacturing. However, it is also one of the most resource-intensive and highest-polluting sectors globally, consuming massive amounts of raw materials, water, and energy.",
                            "Environmental and Social Due Diligence (ESDD) in the iron and steel sector is a rigorous assessment of how a facility manages its massive carbon footprint, toxic air emissions, colossal solid waste generation (slag), and the occupational health and safety of thousands of workers.",
                            "With mounting pressure from global investors regarding decarbonization and strict mandates from the Ministry of Environment, Forest and Climate Change (MoEFCC), establishing robust ESDD protocols is critical. It determines a steel plant's operational viability and its ability to secure capital in an increasingly ESG-conscious financial landscape."
                        ],
                        whyIdealTitle: "Why ESDD Matters in Steel",
                        whyIdealList: [
                            { title: "Massive Carbon Emissions", desc: "Steel production via blast furnaces is highly carbon-intensive. ESDD tracks Scope 1, 2, and 3 emissions, assessing the facility's decarbonization roadmap against national net-zero targets." },
                            { title: "Heavy Air and Water Pollution", desc: "Plants generate severe particulate matter, sulfur oxides, and toxic effluents (like phenols and cyanides from coke ovens). ESDD rigorously checks the efficiency of pollution control equipment." },
                            { title: "Occupational Hazards", desc: "Working with molten metal and heavy machinery presents immense safety risks. Social due diligence scrutinizes occupational health standards, accident rates, and factory floor labor conditions." },
                        ]
                    }}

                    advantages={{
                        title: "Key Roadblocks in Implementation",
                        subtitle: "Iron & Steel ESDD challenges",
                        list: [
                            {
                                title: "Navigating Staggering Solid Waste",
                                desc: "Steel plants generate mountains of solid waste (Blast Furnace Slag, BOF slag). Documenting the compliant disposal and circular recycling (e.g., selling slag to cement industries) is a massive auditing challenge."
                            },
                            {
                                title: "Complex Decarbonization Audits",
                                desc: "Evaluating a legacy steel plant's transition plan to low-carbon technologies (like DRI-EAF or green hydrogen) requires highly specialized metallurgical and environmental engineering expertise."
                            },
                            {
                                title: "Community and Land Issues",
                                desc: "Mega steel projects require vast land acquisition, often causing displacement. Assessing historical resettlement grievances and ongoing community relations is socially complex and legally sensitive."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Major Benefits Derived",
                        subtitle: "Why ESDD is a strategic advantage",
                        list: [
                            {
                                title: "Access to Sustainable Finance",
                                desc: "Steel plants with verified ESDD reports and clear decarbonization targets gain access to Transition Bonds, Green Loans, and investments from climate-focused institutional funds."
                            },
                            {
                                title: "Averting Regulatory Shutdowns",
                                desc: "Ensuring all primary emissions (stacks) and secondary fugitive emissions are within CPCB norms prevents sudden factory seals, multi-crore penalties, and loss of production."
                            },
                            {
                                title: "Enhanced Operational Efficiency",
                                desc: "Thorough environmental audits often uncover massive inefficiencies in water usage, raw material handling, and energy consumption, leading to significant cost-saving process optimizations."
                            }
                        ]
                    }}

                    process={{
                        title: "Our Specialized Solutions",
                        subtitle: "ESDD for Steel Projects",
                        steps: [
                            {
                                step: "01",
                                title: "Emission & ETP Verification",
                                desc: "Meticulous physical checks of Air Pollution Control Devices (ESPs, bag filters) and Effluent Treatment Plants to ensure discharged toxins remain strictly beneath permissible statutory limits."
                            },
                            {
                                step: "02",
                                title: "Resource Efficiency Audit",
                                desc: "Detailed analysis of the plant's specific energy consumption, freshwater footprint per ton of steel produced, and the percentage of water recycled (aiming for Zero Liquid Discharge)."
                            },
                            {
                                step: "03",
                                title: "Occupational Health & Safety (OHS)",
                                desc: "Rigorous factory floor inspections evaluating safety protocols around blast furnaces, proper usage of PPE, accident history logs, and the effectiveness of the disaster management plan."
                            },
                            {
                                step: "04",
                                title: "Regulatory Compliance Check",
                                desc: "Comprehensive review of all Environmental Clearances (EC), CTOs, CTEs, and hazardous waste disposal authorizations, identifying gaps and drafting immediate remediation plans."
                            }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz",
                        subtitle: "Unmatched Expertise in Heavy Industry",
                        list: [
                            { title: "Metallurgical Environmental Experts", desc: "Our audit teams include engineers who specifically understand the complex chemistry of coke making, sintering, and smelting operations." },
                            { title: "Advanced Emission Analytics", desc: "Utilizing deep data analytics to interpret Continuous Emission Monitoring Systems (CEMS) data to flag potential compliance breaches." },
                            { title: "Turnkey Regulatory Assistance", desc: "If your plant's EC is stalled or CTO is expired, our legal advocates actively interface with the MoEFCC and SPCBs to resolve bottlenecks rapidly." },
                            { title: "Decarbonization Roadmap Design", desc: "We don't just audit current emissions; we help formulate actionable Net-Zero transition strategies required by modern investors." },
                            { title: "Social Impact Expertise", desc: "Specialized frameworks for establishing robust community grievance redressal mechanisms and evaluating historical land acquisition impact." },
                            { title: "Iron-Clad M&A Due Diligence", desc: "Providing acquiring companies with absolute transparency regarding the hidden environmental liabilities of target steel assets." }
                        ]
                    }}

                    eligibility={{
                        title: "Why VyomBiz for Iron & Steel ESDD?",
                        subtitle: "We make compliance seamless for the most complex industrial sector.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Deep expertise navigating the intersection of heavy manufacturing and environmental law." },
                            { title: "400+ In-House Professionals", desc: "A combined force of industrial environmental scientists and corporate lawyers." },
                            { title: "99% SLA Delivery", desc: "Fast-tracked ESDD reports crucial for mega-acquisitions or securing urgent capacity expansion clearances." },
                            { title: "Complete Confidentiality", desc: "Strict protection of your proprietary metallurgical processes and supply chain data." }
                        ]
                    }}

                    postCompliance={{
                        title: "Key Frameworks to Consider",
                        subtitle: "The pillars of modern Steel ESDD",
                        list: [
                            { title: "MoEFCC Corporate Environment Responsibility (CER)", desc: "Mandatory allocation of funds and execution of social development projects based on the scale of capital investment." },
                            { title: "Charter on Corporate Responsibility for Environmental Protection (CREP)", desc: "Specific task force guidelines forcing the steel sector to implement targeted pollution reduction technologies." },
                            { title: "Hazardous & Other Wastes Rules", desc: "Strict monitoring of the handling, storage, and cross-border movement of toxic industrial by-products." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about Iron & Steel Industry ESDD"
                    faqs={[
                        {
                            question: "Why is the Iron & Steel industry subject to such intense Environmental Due Diligence?",
                            answer: "The steel sector is one of the highest industrial contributors to national carbon emissions. It consumes massive volumes of raw materials (iron ore, coal) and water, while generating immense quantities of toxic air emissions, contaminated wastewater (containing cyanides and heavy metals), and solid slag. This immense ecological footprint requires constant, intense regulatory scrutiny."
                        },
                        {
                            question: "What specific air emissions does an ESDD cover in a steel plant?",
                            answer: "The audit rigorously evaluates both primary emissions from stacks (chimneys) and secondary 'fugitive' emissions from raw material handling. Key parameters include Particulate Matter (PM), Sulfur Dioxide (SO2), Nitrogen Oxides (NOx), Carbon Monoxide (CO), and highly toxic Polycyclic Aromatic Hydrocarbons (PAHs) originating primarily from coke oven batteries."
                        },
                        {
                            question: "How does ESDD address the massive solid waste generated by steel production?",
                            answer: "A major focus is ensuring the plant operates on circular economy principles. The audit verifies if Blast Furnace Slag and Basic Oxygen Furnace (BOF) slag are being properly managed, granulated, and sold to cement manufacturers rather than being illegally dumped. We also audit the disposal of hazardous wastes like ETP sludge and tar."
                        },
                        {
                            question: "What are the key social risks evaluated during a Steel ESDD?",
                            answer: "Social due diligence evaluates Occupational Health and Safety (OHS) given the extreme temperatures and hazardous nature of the work. It checks safety records, usage of PPE, and worker training. It also looks outward, assessing the plant's impact on neighboring communities (noise, dust, water depletion) and the execution of mandatory Corporate Social Responsibility (CSR) projects."
                        },
                        {
                            question: "How does an ESDD audit handle water consumption in a steel plant?",
                            answer: "Steel production is incredibly water-intensive (used for cooling and cleaning). ESDD audits the specific water consumption per ton of steel produced, verifies compliance with Central Ground Water Authority (CGWA) extraction limits, and assesses the facility's progress toward achieving Zero Liquid Discharge (ZLD) through robust wastewater recycling capabilities."
                        },
                        {
                            question: "Is ESDD required before acquiring an existing steel plant (M&A)?",
                            answer: "Absolutely. When acquiring a legacy steel plant, the buyer inherits all past sins. An ESDD uncovers hidden liabilities like contaminated groundwater plumes, unlined hazardous waste dumps, pending litigations from local villagers, or expired environmental clearances that could cost the acquirer millions in retroactive fines."
                        },
                        {
                            question: "What happens if a steel plant fails the ESDD audit?",
                            answer: "Corpbiz categorizes findings into risk tiers. High-risk non-compliances (like failing ETPs or lack of valid CTOs) are red-flagged. We immediately draft an Environmental and Social Action Plan (ESAP), working with plant management and our legal teams to swiftly implement technological upgrades or file necessary regulatory paperwork to restore compliance."
                        },
                        {
                            question: "Can an ESDD report help a steel manufacturer secure green funding?",
                            answer: "Yes. Global financial institutions are increasingly unwilling to fund heavily polluting 'brown' assets without proof of a transition plan. A verified ESDD report that outlines a clear, actionable decarbonization strategy (like transitioning from blast furnaces to Electric Arc Furnaces powered by renewables) is essential to unlock Transition Finance and Green Loans."
                        }
                    ]}
                />

                <ReviewsSection
                    title="What Our Clients Say About Us"
                    subtitle="Trusted by leading metallurgical manufacturers and integrated steel plants."
                    reviews={[
                        {
                            name: "Ranjan Das",
                            role: "Plant Head",
                            company: "Eastern Integrated Steel",
                            rating: 5,
                            initials: "RD",
                            text: "We were facing continuous notices from the Pollution Control Board regarding fugitive emissions from our raw material handling yard. Corpbiz audited our entire air pollution control framework and helped us design a compliant suppression system. Excellent technical knowledge."
                        },
                        {
                            name: "Vikram Chatterjee",
                            role: "Director of M&A",
                            company: "Apex Metals Group",
                            rating: 5,
                            initials: "VC",
                            text: "During our pursuit of a bankrupt sponge iron plant, Corpbiz's ESDD team uncovered millions in hidden liabilities regarding improperly dumped hazardous waste and pending groundwater contamination lawsuits. They saved us from a disastrous acquisition."
                        },
                        {
                            name: "Sanjay Kumar",
                            role: "Chief Sustainability Officer",
                            company: "Bharath Forgings & Steel",
                            rating: 4.8,
                            initials: "SK",
                            text: "Our international investors demanded a comprehensive ESG risk assessment covering everything from our coke ovens to worker safety. Corpbiz delivered a massive, deeply detailed report mapping our operations against IFC Performance Standards beautifully."
                        },
                        {
                            name: "Pooja Singh",
                            role: "EHS Manager",
                            company: "Deccan Steelworks",
                            rating: 5,
                            initials: "PS",
                            text: "The sheer volume of compliance paperwork—from ECs to CTOs to hazardous waste authorizations—was overwhelming us. Corpbiz not only audited our gaps but took over the entire regulatory liaison process with the MoEFCC. Highly recommended."
                        },
                        {
                            name: "Dr. Anirban Roy",
                            role: "Head of R&D",
                            company: "NeoAlloys India",
                            rating: 5,
                            initials: "AR",
                            text: "We needed expert guidance to create a decarbonization roadmap to secure a green transition loan. The metallurgical engineers at Corpbiz understood exactly how to structure our ESDD report to highlight our shift toward DRI technology, securing the funds."
                        },
                        {
                            name: "Meera Menon",
                            role: "VP Corporate Affairs",
                            company: "Southern Iron & Power",
                            rating: 5,
                            initials: "MM",
                            text: "Their approach to social due diligence regarding community impact is exceptional. They helped us restructure our fragmented CSR initiatives into a cohesive strategy that vastly improved our relationship with the surrounding villages."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ESDDInIronAndSteelIndustry;

