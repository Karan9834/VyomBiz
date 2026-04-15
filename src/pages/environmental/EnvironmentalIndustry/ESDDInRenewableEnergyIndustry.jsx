import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESDDInRenewableEnergyIndustry = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental and Social Due Diligence"
                    heroTitleSuffix="in the Renewable Energy Industry"
                    heroDescription="Ensuring sustainable transitions. We help renewable energy projects identify, assess, and manage environmental and social risks for global compliance."
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
                        title: "ESDD in Renewable Energy —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "While renewable energy projects like solar, wind, and hydro are green alternatives to fossil fuels, their large-scale development involves significant land acquisition, resource utilization, and potential ecological disruption. Environmental and Social Due Diligence (ESDD) ensures these projects are genuinely sustainable across their entire lifecycle.",
                            "India is targeting 500 GW of non-fossil fuel energy capacity by 2030. As international financial institutions (like IFC and World Bank) pour billions into Indian renewables, strict adherence to international Environmental and Social (E&S) standards has become a mandatory pre-condition for funding.",
                            "ESDD serves as the definitive tool used by project developers, acquirers, and lenders to identify potential ecological 'red flags'—such as wildlife corridor disruption or improper community resettlement—before committing capital or beginning construction."
                        ],
                        whyIdealTitle: "Why ESDD Matters in Renewable Energy",
                        whyIdealList: [
                            { title: "Land Rights & Resettlement", desc: "Large solar parks and wind farms require vast tracts of land. Assessing the socioeconomic impact on local communities and ensuring fair compensation is critical to prevent project stalls." },
                            { title: "Biodiversity Impact", desc: "Wind turbines can affect avian migration routes, while large solar installations might disrupt local habitats. ESDD evaluates and mitigates these specific ecological risks." },
                            { title: "Securing Global Finance", desc: "Foreign Direct Investment (FDI) and Multilateral funding strictly mandate adherence to 'Equator Principles' and IFC Performance Standards via comprehensive ESDD reports." },
                        ]
                    }}

                    advantages={{
                        title: "Key Roadblocks in Implementation",
                        subtitle: "Renewable Energy ESDD challenges",
                        list: [
                            {
                                title: "Complex Land Acquisition Laws",
                                desc: "Navigating state-specific land acquisition regulations, understanding tribal land rights, and handling community grievances require deep local legal expertise which many foreign investors lack."
                            },
                            {
                                title: "Extensive Ecological Baseline Studies",
                                desc: "Conducting accurate biodiversity assessments requires months of data collection (covering different seasons) to properly evaluate the impact on flora and fauna, causing project delays."
                            },
                            {
                                title: "Evolving Regulatory Mandates",
                                desc: "With rapid growth, the regulatory framework governing waste management for renewables (like solar panel disposal protocols or wind blade decommissioning) is constantly changing."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Major Benefits Derived",
                        subtitle: "Why ESDD is a strategic advantage",
                        list: [
                            {
                                title: "Unlocking Premium Capital",
                                desc: "Projects with impeccable ESDD reports qualify for 'Green Bonds' and sustainability-linked loans which offer significantly lower interest rates than traditional financing."
                            },
                            {
                                title: "Preventing Stalled Operations",
                                desc: "By preemptively resolving community grievances and securing the right environmental clearances, projects avoid public protests and legal injunctions that pause construction."
                            },
                            {
                                title: "Enhanced Valuation in M&A",
                                desc: "During the acquisition of renewable assets, portfolios that demonstrate clean environmental compliance and zero social liabilities command premium market valuations."
                            }
                        ]
                    }}

                    process={{
                        title: "Our Specialized Solutions",
                        subtitle: "ESDD for Renewable Projects",
                        steps: [
                            {
                                step: "01",
                                title: "Initial Desktop Screening",
                                desc: "We utilize GIS mapping and historical data to perform an initial screening of the proposed project site against ecologically sensitive zones, forests, and protected wildlife areas."
                            },
                            {
                                step: "02",
                                title: "Field Surveys and Audits",
                                desc: "Our environmental scientists and sociologists conduct exhaustive on-ground surveys—testing soil/water, assessing biodiversity, and conducting structured interviews with local communities."
                            },
                            {
                                step: "03",
                                title: "Gap Analysis & Mitigation Planning",
                                desc: "We compare current project practices against IFC Performance Standards/Equator Principles and draft an Environmental and Social Action Plan (ESAP) to bridge any gaps."
                            },
                            {
                                step: "04",
                                title: "Execution of Clearances",
                                desc: "Our legal team actively steps in to file applications and secure necessary NOCs from State Pollution Control Boards, Forest Departments, and local Panchayats."
                            }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz",
                        subtitle: "Unmatched Expertise in Green Energy",
                        list: [
                            { title: "IFC Performance Standards Experts", desc: "Our teams are highly trained in auditing against the World Bank and IFC frameworks mandated by global investors." },
                            { title: "Multi-Disciplinary Teams", desc: "Deploying environmental engineers, social scientists, ornithologists, and legal advocates simultaneously." },
                            { title: "Turnkey Regulatory Assistance", desc: "We don't just audit—we actively fix non-compliances by securing the required permits on your behalf." },
                            { title: "Expedited Deal Timelines", desc: "Recognizing the fast-paced nature of renewable M&A, we utilize AI accelerators to condense ESDD reporting timelines safely." },
                            { title: "Community Grievance Management", desc: "Specialized frameworks to establish transparent communication channels between project developers and local villagers." },
                            { title: "End-of-Life Planning", desc: "Formulating compliant decommissioning and e-waste recycling strategies for old solar panels and wind infrastructure." }
                        ]
                    }}

                    eligibility={{
                        title: "Why VyomBiz for Renewable ESDD?",
                        subtitle: "We make compliance effortless for mega-infrastructure projects.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Deep expertise in navigating environmental regulations specific to energy infrastructure." },
                            { title: "400+ In-House Professionals", desc: "A combined team of environmental scientists and corporate lawyers." },
                            { title: "99% SLA Delivery", desc: "Timely delivery of critical deal-breaker reports during project finance stages." },
                            { title: "Pan-India Reach", desc: "Ability to audit remote solar parks in Rajasthan or wind farms in Tamil Nadu seamlessly." }
                        ]
                    }}

                    postCompliance={{
                        title: "Key Frameworks to Consider",
                        subtitle: "The pillars of modern Renewable ESDD",
                        list: [
                            { title: "Equator Principles (EP4)", desc: "The baseline risk management framework for determining, assessing and managing E&S risk in project finance." },
                            { title: "IFC Performance Standards", desc: "Eight standards covering everything from Resource Efficiency (PS3) to Land Acquisition and Involuntary Resettlement (PS5)." },
                            { title: "MoEFCC Guidelines", desc: "Strict adherence to the Indian Ministry of Environment, Forest and Climate Change clearances, CRZ rules, and Forest Conservation Acts." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about Renewable Energy ESDD"
                    faqs={[
                        {
                            question: "Why does a 'Green' project like solar or wind need Environmental Due Diligence?",
                            answer: "While the energy generated is clean, the infrastructure process isn't entirely harmless. Large solar/wind farms require massive land acquisition, water for cleaning panels, and involve waste generation (like broken panels or blades). ESDD ensures the negative impacts of construction and operation are minimized and managed."
                        },
                        {
                            question: "What are the IFC Performance Standards often mentioned in Renewable ESDD?",
                            answer: "The International Finance Corporation (IFC) Performance Standards are eight comprehensive benchmarks detailing how projects should manage environmental and social risks. Most international banks mandate compliance with these standards (covering aspects like labor rights, pollution prevention, and biodiversity conservation) before approving loans."
                        },
                        {
                            question: "How does ESDD address land acquisition issues for renewable projects?",
                            answer: "Social due diligence thoroughly audits how land was acquired. It checks if local communities were fairly compensated, if any indigenous groups were displaced against legal protocols, and if a proper grievance redressal mechanism exists. It prevents legal disputes that could paralyze the project."
                        },
                        {
                            question: "What specific environmental risks are evaluated for Wind Energy projects?",
                            answer: "For wind farms, key ESDD parameters include the impact of blade rotation on local bird/bat populations (avian mortality), the 'shadow flicker' effect on nearby residences, low-frequency noise pollution, and the ecological impact of building access roads through undisturbed terrain."
                        },
                        {
                            question: "What specific environmental risks are evaluated for Solar Energy projects?",
                            answer: "For solar parks, ESDD focuses heavily on land use conflicts, massive water consumption required for panel washing (especially in arid regions), changes to local ground-water recharge patterns, and the management of hazardous waste (broken photovoltaic cells)."
                        },
                        {
                            question: "Does Corpbiz help formulate the Environmental and Social Action Plan (ESAP)?",
                            answer: "Yes. Following the audit, if we identify non-compliances, we draft a comprehensive ESAP. This is a legally and technically sound roadmap outlining exactly what the project developer must do, the timeline, and the estimated cost to achieve full regulatory compliance."
                        },
                        {
                            question: "How long does a Renewable Energy ESDD typically take?",
                            answer: "A standard ESDD for a mid-sized solar or wind project takes 4 to 8 weeks. However, if the project is located near a sensitive ecological zone requiring primary biodiversity baseline studies, the timeline can extend significantly to capture seasonal variations."
                        },
                        {
                            question: "Do ESDD reports assist in securing Green Bonds?",
                            answer: "Absolutely. Issuing Green Bonds requires independent assurance that the asset is truly sustainable and compliant with ESG norms. A rigorous ESDD report serves as this foundational proof, boosting investor confidence and ensuring successful bond subscriptions."
                        }
                    ]}
                />

                <ReviewsSection
                    title="What Our Clients Say About Us"
                    subtitle="Trusted by leading renewable developers and institutional investors."
                    reviews={[
                        {
                            name: "Sanjay Reddy",
                            role: "Director of Projects",
                            company: "SunStream Energy Pvt Ltd",
                            rating: 5,
                            initials: "SR",
                            text: "We were seeking funding from an Asian multilateral bank for our 200MW solar park. Corpbiz's exhaustive ESDD report covering IFC standards was exactly what the lenders demanded. They secured our funding approval round seamlessly."
                        },
                        {
                            name: "Anjali Menon",
                            role: "Head of M&A",
                            company: "GreenVest Capital",
                            rating: 5,
                            initials: "AM",
                            text: "During our acquisition of a wind portfolio in Gujarat, Corpbiz uncovered a massive pending litigation regarding tribal land rights that was entirely missing from the data room. Their rigorous social due diligence saved us millions."
                        },
                        {
                            name: "Rakesh Sharma",
                            role: "Operations Manager",
                            company: "Vayu Wind Farms",
                            rating: 4.8,
                            initials: "RS",
                            text: "Corpbiz helped us structure a proper grievance redressal mechanism for the villages surrounding our turbines. Since implementation, community protests have dropped to zero, and local relations have vastly improved."
                        },
                        {
                            name: "Priya Das",
                            role: "ESG Controller",
                            company: "EcoGrid Solutions",
                            rating: 5,
                            initials: "PD",
                            text: "The team’s understanding of end-of-life e-waste regulations for solar panels is unmatched. They drafted a comprehensive Environmental Management Plan (EMP) that future-proofed our disposal liabilities for the next 20 years."
                        },
                        {
                            name: "Dr. Vikram Singh",
                            role: "Chief Hydrologist",
                            company: "Neer Hydro Power",
                            rating: 5,
                            initials: "VS",
                            text: "For our run-of-the-river hydro project, Corpbiz conducted incredibly detailed aquatic biodiversity impact studies. Their mitigation plan for maintaining ecological flow successfully satisfied the Ministry of Environment."
                        },
                        {
                            name: "Neha Gupta",
                            role: "VP Sustainability",
                            company: "Solaris Infrastructure",
                            rating: 5,
                            initials: "NG",
                            text: "A highly professional group. They managed to expedite the ESDD field surveys across three different states simultaneously using their massive pan-India network of auditors, ensuring we met our strict deal closure deadline."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ESDDInRenewableEnergyIndustry;

