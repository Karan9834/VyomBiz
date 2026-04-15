import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESDDInDairyIndustry = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental and Social Due Diligence"
                    heroTitleSuffix="in the Dairy Industry"
                    heroDescription="Comprehensive ESDD reporting helping dairy companies identify, assess, and mitigate environmental and social risks while meeting state pollution norms."
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
                        title: "ESDD in Dairy Industry —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "India is the world's largest milk producer, with the dairy sector playing a vital role in our rural economy. However, large-scale commercial dairy farming, processing units, and chilling centers consume vast quantities of fresh water and generate high volumes of organic effluent (wastewater).",
                            "Environmental and Social Due Diligence (ESDD) in the dairy industry focuses intensely on these ecological footprints. It assesses a facility's compliance with the Water Act, Air Act, and the complex rules surrounding organic waste disposal, which if left untreated, severely depletes oxygen levels in local water bodies.",
                            "Beyond environmental factors, ESDD deeply examines social dimensions: evaluating the massive supply chain of rural farmers, checking fair procurement prices, assessing labor conditions within expansive chilling plants, and ensuring animal welfare standards are met."
                        ],
                        whyIdealTitle: "Why ESDD Matters in Dairy",
                        whyIdealList: [
                            { title: "High Water Footprint", desc: "Dairy processing is exceptionally water-intensive. Evaluating the source, usage efficiency (cleaning/pasteurization), and the quality of discharged wastewater is a primary ESDD focus." },
                            { title: "Methane & Boiler Emissions", desc: "Aside from livestock methane, processing plants rely on boilers (often coal/husk fired) generating particulate matter that requires strict Air Consent monitoring." },
                            { title: "Farmer Supply Chain", desc: "Social due diligence heavily impacts the dairy industry, ensuring the millions of unorganized farmers supplying milk receive fair compensation and work under ethical conditions." },
                        ]
                    }}

                    advantages={{
                        title: "Key Roadblocks in Implementation",
                        subtitle: "Dairy Industry ESDD challenges",
                        list: [
                            {
                                title: "Navigating Decentralized Supply Chains",
                                desc: "Dairy operations often involve thousands of micro-suppliers spread across remote villages. Conducting social audits and ensuring uniform ESG standards across such a fragmented network is incredibly difficult."
                            },
                            {
                                title: "Managing High BOD/COD Effluent",
                                desc: "Dairy wastewater contains high levels of fats, oils, grease (FOG), Biological Oxygen Demand (BOD), and Chemical Oxygen Demand (COD). Treating this requires complex ETP setups that frequently fail audits."
                            },
                            {
                                title: "Energy Intensity Tracking",
                                desc: "Pasteurization, chilling, and cold-chain logistics consume massive amounts of energy. Verifying the carbon footprint across this entire cold chain for ESG reporting is a massive data challenge."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Major Benefits Derived",
                        subtitle: "Why ESDD is a strategic advantage",
                        list: [
                            {
                                title: "Attracting Institutional Capital",
                                desc: "Global agri-investors strictly mandate ESDD. A clean compliance report on wastewater and farmer welfare unlocks premium funding via Private Equity and Impact Funds."
                            },
                            {
                                title: "Securing Export Market Access",
                                desc: "Entering lucrative markets (like the EU or Middle East) requires demonstrable adherence to strict environmental and animal welfare standards, proven through ESDD."
                            },
                            {
                                title: "Preventing Plant Closures",
                                desc: "Ensuring functional ETPs and valid Pollution Control Board CTE/CTO prevents sudden, devastating regulatory shutdown notices which can spoil thousands of liters of perishable milk."
                            }
                        ]
                    }}

                    process={{
                        title: "Our Specialized Solutions",
                        subtitle: "ESDD for Dairy Projects",
                        steps: [
                            {
                                step: "01",
                                title: "Wastewater (ETP/STP) Audit",
                                desc: "Our environmental engineers meticulously analyze your Effluent Treatment Plant design, capacity, and current discharge samples to ensure they meet stringent state pollution board norms."
                            },
                            {
                                step: "02",
                                title: "Supply Chain & Social Assessment",
                                desc: "We conduct field surveys across your milk collection centers to evaluate farmer compensation structures, labor conditions, and community grievances."
                            },
                            {
                                step: "03",
                                title: "Energy & Carbon Baseline",
                                desc: "Analyzing the power consumption of boilers, chilling units, and transport fleets to establish an accurate carbon footprint and suggest energy efficiency measures."
                            },
                            {
                                step: "04",
                                title: "Regulatory Gap Closure",
                                desc: "Identifying missing/expired Consents to Operate (CTO), boiler certifications, or groundwater extraction NOCs and executing the filings to secure them."
                            }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz",
                        subtitle: "Unmatched Expertise in Agro-Industry",
                        list: [
                            { title: "Dairy-Specific Engineers", desc: "Our teams understand the biochemical complexities of dairy effluent—BOD, COD, and FOG—unlike generic environmental auditors." },
                            { title: "Pan-India Rural Reach", desc: "With our extensive network, we can audit remote village milk collection centers alongside massive urban processing plants simultaneously." },
                            { title: "End-to-End Remediation", desc: "If you lack a valid CGWA groundwater permit or a PCB Consent, our legal team drafts and submits the applications immediately following the audit." },
                            { title: "Cold-Chain Carbon Tracking", desc: "Specialized tools to assess greenhouse gas emissions specifically tailored for refrigerated logistics." },
                            { title: "Animal Welfare Compliance", desc: "Auditing farm-level animal husbandry practices against national guidelines and international buyer requirements." },
                            { title: "Food Safety Synergy", desc: "Integrating environmental audits with FSSAI hygiene standards to provide a holistic operational risk report." }
                        ]
                    }}

                    eligibility={{
                        title: "Why VyomBiz for Dairy ESDD?",
                        subtitle: "We make environmental compliance seamless for perishable goods.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Deep expertise navigating the intersection of food safety and environmental laws." },
                            { title: "400+ In-House Professionals", desc: "Environmental scientists, food technologists, and corporate lawyers working together." },
                            { title: "99% SLA Delivery", desc: "Fast-tracked ESDD reports crucial for M&A closures or securing urgent expansion capital." },
                            { title: "Complete Confidentiality", desc: "Protecting your supply chain data, vendor lists, and proprietary processing techniques." }
                        ]
                    }}

                    postCompliance={{
                        title: "Key Frameworks to Consider",
                        subtitle: "The pillars of modern Dairy ESDD",
                        list: [
                            { title: "Water (Prevention and Control of Pollution) Act", desc: "Absolute compliance regarding the discharge of dairy effluent into public sewers or inland surface waters." },
                            { title: "CGWA Guidelines", desc: "Strict adherence to Central Ground Water Authority norms for extracting the massive volumes of water needed for plant cleaning." },
                            { title: "Air Act & Boiler Norms", desc: "Monitoring emissions from coal/wood-fired boilers used extensively for pasteurization and drying." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about Dairy Industry ESDD"
                    faqs={[
                        {
                            question: "Why is wastewater a major focus in Dairy ESDD?",
                            answer: "Dairy processing generates huge amounts of wastewater containing milk solids, detergents, and sanitizers. This effluent has extremely high Biological Oxygen Demand (BOD) and fats. If discharged untreated, it destroys aquatic ecosystems. ESDD rigorously checks the capacity and effectiveness of the existing Effluent Treatment Plants (ETPs)."
                        },
                        {
                            question: "What social risks are evaluated in the dairy supply chain?",
                            answer: "The dairy supply chain heavily relies on thousands of unorganized rural farmers. Social ESDD checks if procurement pricing is fair and transparent, if child labor is utilized at farm levels or collection centers, and if workers inside chilling plants receive adequate wages and protective gear against cold environments and cleaning chemicals."
                        },
                        {
                            question: "Does ESDD check for groundwater extraction compliance?",
                            answer: "Yes, this is a critical component. Dairy plants consume massive amounts of fresh water for cleaning and cooling. We verify if the facility possesses a valid No Objection Certificate (NOC) from the Central Ground Water Authority (CGWA) and if they are maintaining mandatory rainwater harvesting structures."
                        },
                        {
                            question: "How does Boiler operation factor into the environmental audit?",
                            answer: "Boilers are essential for pasteurization and creating milk powder, but they are major polluters. The audit checks what fuels are used (coal, husk, gas), the height of the chimney stacks (as per Air Act norms), and whether required air pollution control devices (like scrubbers or bag filters) are installed and functioning."
                        },
                        {
                            question: "What happens if a dairy plant fails the ESDD audit?",
                            answer: "If major non-compliances are found (e.g., discharging untreated waste, expired CTOs), it generates 'red flags'. While this can stall pending investments or M&A deals, Corpbiz immediately formulates an Environmental & Social Action Plan (ESAP) detailing exactly how to fix these issues to regain compliance."
                        },
                        {
                            question: "Is ESDD required for setting up a new dairy processing plant?",
                            answer: "Absolutely. Before construction, an ESDD (often termed Environmental Impact Assessment depending on the scale) is required to secure the 'Consent to Establish' (CTE) from the State Pollution Control Board. It plots out how the new facility will manage its water footprint, waste, and community impact."
                        },
                        {
                            question: "How does ESDD address solid waste in dairy?",
                            answer: "The audit evaluates the disposal of solid waste including ETP sludge (which can be used as manure if treated properly), boiler ash, and the massive amounts of plastic packaging waste (pouches/bottles). We check compliance with Extended Producer Responsibility (EPR) norms for plastic waste."
                        },
                        {
                            question: "Can ESDD help a dairy company access foreign investments?",
                            answer: "Yes, significantly. Foreign institutional investors and Impact Funds strictly require alignment with global ESG standards (like IFC Performance Standards). A clean, independent ESDD report proves your operations are sustainable, opening doors to premium global capital."
                        }
                    ]}
                />

                <ReviewsSection
                    title="What Our Clients Say About Us"
                    subtitle="Trusted by leading dairy cooperatives and private processors."
                    reviews={[
                        {
                            name: "Ravi Shankar",
                            role: "Head of Operations",
                            company: "Nandini Milk Producers",
                            rating: 5,
                            initials: "RS",
                            text: "We were facing severe scrutiny from the Pollution Control Board regarding our ETP discharge. Corpbiz conducted a thorough audit, identified the design flaw in our aeration tank, and helped us upgrade it. We are now 100% compliant."
                        },
                        {
                            name: "Priya Varghese",
                            role: "Sustainability Director",
                            company: "MilkyWay Farms",
                            rating: 5,
                            initials: "PV",
                            text: "For our private equity funding round, the investors demanded an IFC standard ESDD report covering our 500+ village collection centers. Corpbiz mobilized their field team instantly and delivered a brilliant social impact assessment."
                        },
                        {
                            name: "Dr. Anil Kumar",
                            role: "Quality Assurance Chief",
                            company: "Heritage Dairy",
                            rating: 4.8,
                            initials: "AK",
                            text: "Their understanding of the CGWA groundwater norms is exceptional. Not only did they highlight our missing permits during the desktop review, but their legal team also stepped in and secured the NOCs for our three chilling plants."
                        },
                        {
                            name: "Meenakshi S",
                            role: "Plant Manager",
                            company: "Gomathi Agro",
                            rating: 5,
                            initials: "MS",
                            text: "We needed our carbon footprint assessed across our entire cold-chain logistics for an ESG report. Corpbiz’s analytical approach broke down exactly where we were bleeding energy and how to fix it."
                        },
                        {
                            name: "Vikram Chauhan",
                            role: "CEO",
                            company: "Pristine Organic Milks",
                            rating: 5,
                            initials: "VC",
                            text: "As an organic brand, our reputation is everything. Corpbiz ensures our animal welfare standards and farmer compensation models hold up against the strictest international audits, allowing us to export to premium EU markets."
                        },
                        {
                            name: "Sonia Das",
                            role: "Legal & Compliance Manager",
                            company: "Amrut Milk Products",
                            rating: 5,
                            initials: "SD",
                            text: "A truly turnkey service. During an M&A acquisition, they discovered the target plant had an expired Consent to Operate. They drafted the ESAP and successfully negotiated the penalty settlement with the authorities."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ESDDInDairyIndustry;

