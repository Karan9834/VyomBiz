import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESDDInAgriculturalEquipmentManufacturingIndustry = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental and Social Due Diligence"
                    heroTitleSuffix="in Agricultural Equipment Manufacturing"
                    heroDescription="Comprehensive ESDD reporting helping agricultural equipment manufacturers identify, assess, and mitigate environmental and social risks."
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
                        title: "ESDD in Agricultural Equipment —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "The agricultural equipment manufacturing industry (tractors, harvesters, tillers, irrigation systems) is a cornerstone of India's agrarian economy. However, manufacturing these heavy machines involves energy-intensive metal forging, chemical-heavy painting processes, and significant industrial waste generation.",
                            "Environmental and Social Due Diligence (ESDD) in this sector systematically evaluates a facility's compliance with pollution control norms, specifically focusing on air emissions from paint shops, the treatment of highly toxic wastewater (effluents containing heavy metals), and the disposal of hazardous solid waste.",
                            "Beyond environmental factors, ESDD deeply examines social dimensions: evaluating occupational health and safety (OHS) on noisy, heavy-machinery factory floors, assessing labor rights strictly governed by the Factories Act, and monitoring the vast supply chains of component manufacturers."
                        ],
                        whyIdealTitle: "Why ESDD Matters",
                        whyIdealList: [
                            { title: "Toxic Paint Shop Emissions", desc: "Painting large tractors involves Volatile Organic Compounds (VOCs) and hazardous sludge. ESDD rigorously checks the efficiency of air pollution control devices (like incinerators) and proper disposal of paint sludge." },
                            { title: "Heavy Metal Effluents", desc: "Electroplating and surface treatment processes generate wastewater laden with heavy metals. ESDD scrutinizes the design and operational analytics of Effluent Treatment Plants (ETP) ensuring Zero Liquid Discharge wherever mandated." },
                            { title: "Occupational Safety Hazards", desc: "Working with massive hydraulic presses, welding stations, and heavy lifting equipment presents immense safety risks. Social due diligence heavily weighs accident histories, safety protocols, and PPE enforcement." },
                        ]
                    }}

                    advantages={{
                        title: "Key Roadblocks in Implementation",
                        subtitle: "Agri-Equipment ESDD challenges",
                        list: [
                            {
                                title: "Navigating Staggering Supply Chains",
                                desc: "Manufacturers rely on hundreds of smaller MSME vendors for casted parts, tires, and hydraulics. Ensuring these tier-2 and tier-3 suppliers adhere to ESG norms is a massive auditing challenge requiring extensive field teams."
                            },
                            {
                                title: "Managing Legacy Hazardous Waste",
                                desc: "Older manufacturing plants often struggle with accumulated hazardous waste (like used oil, spent solvents, and paint sludge) lacking proper documentation for its historical disposal, presenting severe audit red flags."
                            },
                            {
                                title: "Complex Product End-of-Life Regulations",
                                desc: "With increasing focus on circular economy, tracking the recyclability of massive machines at the end of their lifecycle and navigating emerging Extended Producer Responsibility (EPR) mandates is legally complex."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Major Benefits Derived",
                        subtitle: "Why ESDD is a strategic advantage",
                        list: [
                            {
                                title: "Attracting Global Institutional Capital",
                                desc: "As Indian manufacturers scale up to export globally, international investors heavily scrutinize ESG metrics. A clean ESDD report is often the mandatory key to unlocking premium foreign direct investment."
                            },
                            {
                                title: "Securing Export Market Competitiveness",
                                desc: "Exporting tractors to the EU or North America requires demonstrable adherence to strict environmental manufacturing standards. ESDD provides the independent verification these markets demand."
                            },
                            {
                                title: "Averting Devastating Regulatory Shutdowns",
                                desc: "Pre-emptively resolving issues with underperforming ETPs or missing Consent to Operate (CTO) renewals prevents sudden factory sealing by the Pollution Control Board, preventing massive production losses."
                            }
                        ]
                    }}

                    process={{
                        title: "Our Specialized Solutions",
                        subtitle: "ESDD for Agri-Equipment",
                        steps: [
                            {
                                step: "01",
                                title: "Air & Wastewater (ETP) Audit",
                                desc: "Our environmental engineers meticulously analyze your paint shop's VOC emission records and the chemical composition of your ETP discharge to ensure they meet stringent state pollution board norms."
                            },
                            {
                                step: "02",
                                title: "Hazardous Waste Trail Verification",
                                desc: "Detailed auditing of your hazardous waste manifests—tracking the generation, storage, and legal disposal of used oil, batteries, and paint sludge through authorized TSDF operators."
                            },
                            {
                                step: "03",
                                title: "Occupational Health & Safety (OHS)",
                                desc: "Rigorous factory floor inspections evaluating safety protocols around heavy forging presses, ergonomic assessments, noise level limits, and the effectiveness of fire and emergency response systems."
                            },
                            {
                                step: "04",
                                title: "Supply Chain & Regulatory Gap Closure",
                                desc: "Identifying compliance gaps across your critical component suppliers, drafting Environmental & Social Action Plans (ESAP), and executing pending regulatory filings to secure missing clearances."
                            }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz",
                        subtitle: "Unmatched Expertise in Heavy Manufacturing",
                        list: [
                            { title: "Industrial-Specific Engineers", desc: "Our teams understand the biochemical complexities of industrial effluents (heavy metals, oil & grease) unlike generic environmental auditors." },
                            { title: "Pan-India Supplier Reach", desc: "With our extensive network, we can rapidly audit your sprawling vendor network spread across industrial hubs simultaneously." },
                            { title: "Turnkey Regulatory Remediation", desc: "If you lack a valid CGWA groundwater permit or a PCB Consent, our legal team drafts and submits the applications immediately." },
                            { title: "Advanced Noise & Air Modeling", desc: "Specialized tools to assess and map ambient noise levels and chimney stack emissions against statutory factory limits." },
                            { title: "Labor Law Synergy", desc: "Integrating environmental audits with deep evaluations of the Factories Act, Contract Labour Act, and minimum wage compliance." },
                            { title: "Robust M&A Due Diligence", desc: "Providing acquiring companies with absolute transparency regarding the hidden environmental liabilities of target manufacturing assets." }
                        ]
                    }}

                    eligibility={{
                        title: "Why VyomBiz for Agri-Equipment ESDD?",
                        subtitle: "We make environmental compliance seamless for heavy industry.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Deep expertise navigating the intersection of heavy engineering, labor laws, and environmental regulations." },
                            { title: "400+ In-House Professionals", desc: "A combined force of industrial environmental scientists and corporate factory compliance lawyers." },
                            { title: "99% SLA Delivery", desc: "Fast-tracked, highly reliable ESDD reports crucial for M&A closures or securing urgent capacity expansion clearances." },
                            { title: "Complete Confidentiality", desc: "Strict protection of your proprietary manufacturing processes, plant layouts, and vendor supply chain data." }
                        ]
                    }}

                    postCompliance={{
                        title: "Key Frameworks to Consider",
                        subtitle: "The pillars of modern Manufacturing ESDD",
                        list: [
                            { title: "The Factories Act & Rules", desc: "Absolute compliance regarding worker health, safety equipment, working hours, and hazardous process handling." },
                            { title: "Hazardous Wastes Rules", desc: "Strict adherence to the collection, storage, packaging, transportation, and disposal of industrial toxins." },
                            { title: "Air (Prevention and Control of Pollution) Act", desc: "Monitoring emissions from paint booths, foundry units, and DG sets used extensively in heavy manufacturing." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about ESDD in Agricultural Equipment Manufacturing"
                    faqs={[
                        {
                            question: "Why does an Agricultural Equipment Manufacturing facility need Environmental Due Diligence?",
                            answer: "Manufacturing heavy equipment like tractors or harvesters involves highly polluting processes: forging metals, chemical surface treatments, and extensive painting. These generate toxic wastewater, hazardous solid waste, and harmful air emissions. ESDD ensures these byproducts are managed legally and safely, preventing massive fines or factory closures."
                        },
                        {
                            question: "What specific air emissions does an ESDD audit cover in this industry?",
                            answer: "The audit heavily focuses on Volatile Organic Compounds (VOCs) emitted from paint shops. It also measures Particulate Matter (PM), Sulfur Dioxide (SO2), and Nitrogen Oxides (NOx) from foundry furnaces, welding stations, and large Diesel Generator (DG) sets, ensuring they are below Pollution Control Board limits."
                        },
                        {
                            question: "How does ESDD address wastewater (effluent) in heavy manufacturing?",
                            answer: "Processes like electroplating and metal washing generate wastewater containing heavy metals, oils, and toxic chemicals. ESDD rigorously evaluates the design, capacity, and actual discharge quality of the Effluent Treatment Plant (ETP). It confirms compliance with the Water Act and verifies if Zero Liquid Discharge (ZLD) systems are functioning if mandated."
                        },
                        {
                            question: "What are the common social risks identified in an equipment manufacturing ESDD?",
                            answer: "Social due diligence evaluates Occupational Health and Safety (OHS) risks: exposure to extreme noise, heavy lifting injuries, and chemical burns. It checks safety training records, incident logs, and PPE enforcement. It also audits labor practices, ensuring compliance with the Factories Act regarding working hours, overtime wages, and contract labor conditions."
                        },
                        {
                            question: "Does the ESDD cover the disposal of hazardous waste like paint sludge?",
                            answer: "Yes, this is a major compliance area. Paint sludge, used lubricants, chemical residues, and contaminated cotton waste are highly hazardous. The audit completely traces their lifecycle—from generation and proper segregated storage to their final disposal through legally authorized Treatment, Storage, and Disposal Facilities (TSDF)."
                        },
                        {
                            question: "Is ESDD necessary before a merger or acquisition (M&A) of a manufacturing plant?",
                            answer: "It is absolutely critical. An acquiring company inherits all past environmental liabilities. An ESDD uncovers hidden 'red flags'—like illegal waste dumping, contaminated soil, unresolved labor disputes, or expired environmental clearances—allowing the buyer to negotiate the price or demand remediation before closing the deal."
                        },
                        {
                            question: "How does ESDD handle water consumption limits in manufacturing?",
                            answer: "Heavy manufacturing consumes large volumes of fresh water for cooling and chemical bathing. If the factory relies on borewells, the audit strictly verifies the possession of valid No Objection Certificates (NOC) from the Central Ground Water Authority (CGWA) and the functioning of mandated rainwater harvesting systems."
                        },
                        {
                            question: "What happens if a facility fails the ESDD audit?",
                            answer: "If critical non-compliances are discovered, Corpbiz drafts an Environmental and Social Action Plan (ESAP). This is a strategic, legally sound roadmap detailing the technological upgrades (e.g., retrofitting an ETP) or administrative filings needed to restore compliance, protecting the company from regulatory action."
                        }
                    ]}
                />

                <ReviewsSection
                    title="What Our Clients Say About Us"
                    subtitle="Trusted by leading tractor and agricultural machinery manufacturers."
                    reviews={[
                        {
                            name: "Rajiv Sharma",
                            role: "Plant Head",
                            company: "Kisan Tractors India",
                            rating: 5,
                            initials: "RS",
                            text: "We were facing severe scrutiny from the Pollution Control Board regarding VOC emissions from our new automated paint shop. Corpbiz audited our entire air pollution control framework and helped us design a compliant thermal oxidizer system. Outstanding technical depth."
                        },
                        {
                            name: "Anjali Desai",
                            role: "Director of M&A",
                            company: "AgriTech Heavies Ltd.",
                            rating: 5,
                            initials: "AD",
                            text: "During our pursuit of a bankrupt harvester manufacturing plant, Corpbiz's ESDD team uncovered millions in hidden liabilities regarding improperly dumped paint sludge and pending groundwater contamination notices safely guiding us away from a bad deal."
                        },
                        {
                            name: "Suresh Pillai",
                            role: "EHS Manager",
                            company: "Deccan Farm Implements",
                            rating: 4.8,
                            initials: "SP",
                            text: "Our international investors demanded a comprehensive ESG risk assessment covering everything from our foundry emissions to worker safety on the assembly line. Corpbiz delivered a deeply detailed report mapping our operations against strict IFC standards."
                        },
                        {
                            name: "Dr. Vikram Ahuja",
                            role: "Chief Sustainability Officer",
                            company: "Bharat Agro Machinery",
                            rating: 5,
                            initials: "VA",
                            text: "The sheer volume of compliance paperwork for our multiple scattered MSME component suppliers was overwhelming. Corpbiz deployed their vast field network to audit our entire tier-1 supply chain, bringing everyone up to compliance rapidly."
                        },
                        {
                            name: "Pooja Menon",
                            role: "Legal & Compliance Head",
                            company: "Sonalika Equipments (Fictional)",
                            rating: 5,
                            initials: "PM",
                            text: "Their understanding of the CGWA groundwater norms is exceptional. Not only did they highlight our missing permits during the desktop review, but their legal team stepped in and secured the NOCs for our rapidly expanding forging unit."
                        },
                        {
                            name: "Manish Tiwari",
                            role: "Head of Operations",
                            company: "Punjab Tiller Works",
                            rating: 5,
                            initials: "MT",
                            text: "Their approach to social due diligence regarding occupational health hazards on a noisy, heavy-machinery floor is exceptional. They helped us restructure our ergonomic and safety protocols, drastically reducing our incident rates."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ESDDInAgriculturalEquipmentManufacturingIndustry;

