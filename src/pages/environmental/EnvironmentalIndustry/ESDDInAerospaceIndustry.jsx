import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESDDInAerospaceIndustry = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental and Social Due Diligence"
                    heroTitleSuffix="in the Aerospace Industry"
                    heroDescription="Get Environmental and Social Due Diligence in the Aerospace Industry done seamlessly with Corpbiz as your trusted partner."
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
                        title: "ESDD in Aerospace —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "ESDD plays an extremely crucial role in the corporate life cycles of entities functioning in the aerospace industry. ESDD enables companies functioning within this industry to thoroughly look into processes connected with mergers, acquisitions, and restructuring to discover hidden faults, veiled liabilities, and related expenditures.",
                            "Over a very short period of time, India has been able to establish itself as a prominent hub for aerospace manufacturing. The significant presence of international original equipment manufacturers indicates the growth prospects of the country's aviation industry. Thus, ESDD operates as a method of assessing environmental and social risk in the industry.",
                            "With rising social and environmental activism worldwide, the aerospace sector is under tremendous pressure to align operations with ESG considerations. Compliance with ESDD is no longer a choice but a compelling necessity for long-term survival."
                        ],
                        whyIdealTitle: "Why ESDD Matters in Aerospace",
                        whyIdealList: [
                            { title: "Greenhouse Emissions", desc: "The aerospace industry is a significant contributor to planetary greenhouse emissions. A standard flight can emit massive amounts of CO2, necessitating strict monitoring through ESDD." },
                            { title: "Supply Chain Complexities", desc: "Sourcing specialized tier-one components involves complex global supply chains with varying labor standards and environmental practices that need strict audits." },
                            { title: "Waste Management", desc: "Manufacturing structural parts involves highly toxic chemicals, sealants, composites, and metal alloys that require specialized hazardous waste management protocols." },
                        ]
                    }}

                    advantages={{
                        title: "Key Roadblocks Identified",
                        subtitle: "Aerospace Industry ESDD",
                        list: [
                            {
                                title: "Navigating Evolving Regulations",
                                desc: "The standards of ESDD in the aerospace industry are evolving rapidly worldwide. It is quite difficult for companies to keep abreast of such changes across different geographies and jurisdictions without continuous expert legal guidance."
                            },
                            {
                                title: "Complex Global Supply Chains",
                                desc: "The aerospace industry possesses complex global supply chains. Formulating procedures for ESDD tracking across a vast network of suppliers, sub-suppliers, and distributors is incredibly tough."
                            },
                            {
                                title: "Data Collection Limitations",
                                desc: "Procuring reliable data specifically relating to environmental and social parameters from tier 2 and tier 3 suppliers requires specialized tracking software and audit powers."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Major Benefits Derived",
                        subtitle: "Aerospace Industry ESDD",
                        list: [
                            {
                                title: "Early Risk Detection",
                                desc: "If you detect risks at earlier stages rather than later, companies can address and mitigate liabilities proactively rather than reactively, saving tremendous potential penalties."
                            },
                            {
                                title: "Competitive Edge",
                                desc: "Global defense contractors and commercial airlines now mandate ESG and ESDD compliance in their RFPs. Thus, ESDD is a prerequisite for bidding on major international contracts."
                            },
                            {
                                title: "Protection of Brand Integrity",
                                desc: "A minor slip in supply chain labor practices or improper chemical disposal can severely tarnish an aerospace brand globally. ESDD ensures standard compliance, averting PR disasters."
                            }
                        ]
                    }}

                    process={{
                        title: "Our Consulting Approach",
                        subtitle: "ESDD in Aerospace Industry",
                        steps: [
                            {
                                step: "01",
                                title: "Preliminary Scope Definition",
                                desc: "We coordinate with key stakeholders to outline the scope of the ESDD engagement — determining the geographical reach, timeline, and exact parameters of social and environmental auditing."
                            },
                            {
                                step: "02",
                                title: "Intensive Data Collection",
                                desc: "Our field experts utilize specialized checklists and software to gather raw data across manufacturing sites, emission records, labor contracts, and chemical disposal logs."
                            },
                            {
                                step: "03",
                                title: "Independent Vetting & Analysis",
                                desc: "We evaluate the raw data against national legal standards, international treaties (like the Chicago Convention annexes), and ILO labor conventions."
                            },
                            {
                                step: "04",
                                title: "Comprehensive Reporting",
                                desc: "A final ESDD report is delivered outlining green flags, yellow flags, and red flags, accompanied by an actionable remediation framework to fix compliance gaps."
                            }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz",
                        subtitle: "For Aerospace ESDD Requirements",
                        list: [
                            { title: "Specialized Aerospace Experts", desc: "Our team includes environmental engineers who have previously worked within the aerospace supply chain." },
                            { title: "Pan-India Audit Capability", desc: "Network of 5,000+ professionals enabling on-ground physical audits at any manufacturing facility in India." },
                            { title: "Alignment with Global Standards", desc: "We align local operations with international standards like AS9100, ISO 14001, and global ESG directives." },
                            { title: "AI-Powered Compliance Maps", desc: "Using advanced AI to map millions of data points across complex aerospace supply tiers." },
                            { title: "Turnkey Remediation", desc: "We don't just point out the problems; our legal experts help you fix them and secure pending permits." },
                            { title: "Complete Confidentiality", desc: "Given the sensitive nature of aerospace manufacturing, we adhere to military-grade NDA protocols." }
                        ]
                    }}

                    eligibility={{
                        title: "Why VyomBiz for Aerospace ESDD?",
                        subtitle: "We make compliance for highly technical industries effortless.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Deep expertise in navigating environmental regulations specific to heavy manufacturing." },
                            { title: "400+ In-House Professionals", desc: "A combined team of environmental engineers and legal compliance experts." },
                            { title: "99% SLA Delivery", desc: "Timely delivery of ESDD reports ensuring your M&A deals or supplier contracts are not delayed." },
                            { title: "Strict Confidentiality", desc: "Zero data leakage and military-grade IT infrastructure protecting your critical business logic." }
                        ]
                    }}

                    postCompliance={{
                        title: "The Shift to Sustainable Aviation",
                        subtitle: "Why integrating ESDD into aerospace operations is non-negotiable",
                        list: [
                            { title: "Rise of SAFs", desc: "Sustainable Aviation Fuels are becoming mandatory. Ensuring your supply chain aligns with these low-carbon transition demands requires strict ESDD." },
                            { title: "Net-Zero 2050 Goals", desc: "The global aviation industry has committed to Net-Zero carbon emissions by 2050. Every component manufacturer must prove their trajectory through ESDD." },
                            { title: "Supplier Code of Conduct Enforcement", desc: "Tier 1 OEMs like Airbus and Boeing enforce rigid ESG standards on their global suppliers. Failure an ESDD audit results in immediate contract blacklisting." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about ESDD in Aerospace Industry"
                    faqs={[
                        {
                            question: "What is Environmental and Social Due Diligence in the Aerospace Industry?",
                            answer: "It is the process of evaluating an aerospace enterprise's operations, supply chains, and manufacturing processes to identify environmental risks (like chemical emissions and hazardous waste) and social risks (like labor conditions and community safety) ensuring compliance with national and international standards."
                        },
                        {
                            question: "Why is ESDD critical during mergers and acquisitions in aerospace?",
                            answer: "During M&A, the acquiring company inherits all regulatory liabilities of the target entity. If the target has hidden environmental fines, illegal chemical dumping issues, or labor violations, it can cost the acquirer millions in penalties. ESDD uncovers these hidden liabilities before the deal closes."
                        },
                        {
                            question: "What environmental parameters are specifically assessed for aerospace manufacturing?",
                            answer: "Parameters include the management of toxic chemicals (solvents, sealants), industrial wastewater discharge, air emissions from metal plating processes, disposal of composite materials, noise pollution levels around the facility, and energy consumption metrics."
                        },
                        {
                            question: "How does Corpbiz handle supply chain ESDD for aerospace contractors?",
                            answer: "Corpbiz utilizes a tier-based audit system. We map out tier 1, tier 2, and tier 3 suppliers, dispatching field auditors to physically verify manufacturing sites, check labor logs, and ensure environmental permits are valid across the entire procurement network."
                        },
                        {
                            question: "What are the common social risks identified in aerospace ESDD?",
                            answer: "Common social risks involve occupational health and safety hazards (due to working with heavy machinery and toxic materials), irregular working hours to meet tight OEM deadlines, absence of grievance redressal mechanisms, and sometimes inadequate protective equipment for factory floor workers."
                        },
                        {
                            question: "Does ESDD cover compliance with international aviation environmental standards?",
                            answer: "Yes, our ESDD framework incorporates assessments against international standards mandated by ICAO, specific OEM supplier codes of conduct, and ISO 14001, ensuring that the Indian facility meets global export requirements."
                        },
                        {
                            question: "How long does a thorough ESDD audit take for an aerospace facility?",
                            answer: "Depending on the scale of the facility and the depth of the supply chain, a comprehensive ESDD audit typically takes between 4 to 8 weeks, encompassing initial data requests, physical site inspections, stakeholder interviews, and final report generation."
                        },
                        {
                            question: "Can Corpbiz assist in fixing the non-compliances identified during ESDD?",
                            answer: "Absolutely. Our service extends beyond auditing. We provide turnkey remediation — meaning if we find a missing NOC from the Pollution Control Board or a flaw in the HR policy, our legal and compliance teams will immediately step in to rectify it."
                        }
                    ]}
                />

                <ReviewsSection
                    title="What Our Clients Say About Us"
                    subtitle="Trusted by leading aerospace component manufacturers."
                    reviews={[
                        {
                            name: "Rajesh Soman",
                            role: "COO",
                            company: "Hindustan Aero Components",
                            rating: 5,
                            initials: "RS",
                            text: "We needed ESDD to qualify as a tier-2 supplier for a European OEM. Corpbiz conducted a rigorous audit, identified gaps in our hazardous waste handling, and helped us fix them within a month. We secured the contract!"
                        },
                        {
                            name: "Meenakshi Iyer",
                            role: "Compliance Head",
                            company: "SkyTech Composites",
                            rating: 5,
                            initials: "MI",
                            text: "During our acquisition of a smaller machining unit, Corpbiz's ESDD team uncovered severe groundwater contamination liabilities that were hidden from us. Their report saved our company from a disastrous million-dollar mistake."
                        },
                        {
                            name: "Arun Pratap",
                            role: "Factory Manager",
                            company: "Deccan Aviation Tools",
                            rating: 4.8,
                            initials: "AP",
                            text: "The sheer volume of chemical regulations in aerospace is overwhelming. Corpbiz not only conducted our social and environmental evaluation but also streamlined our entire EHS framework to match ISO 14001 standards."
                        },
                        {
                            name: "Dr. Sandeep K",
                            role: "VP Supply Chain",
                            company: "Global AeroDynamics India",
                            rating: 5,
                            initials: "SK",
                            text: "Their ability to conduct simultaneous physical audits across our 15 sub-suppliers located in different states was incredibly impressive. The final supply-chain ESDD report was comprehensive and impeccably detailed."
                        },
                        {
                            name: "Pooja Varma",
                            role: "Lead ESG Auditor",
                            company: "Vanguard Defense Systems",
                            rating: 5,
                            initials: "PV",
                            text: "The level of expertise Corpbiz demonstrated regarding AS9100 intersection with local pollution control norms was outstanding. They are our go-to partners for all continuous regulatory compliance tracking."
                        },
                        {
                            name: "Vikram Sethi",
                            role: "Director Operations",
                            company: "AeroPrecision Machining",
                            rating: 5,
                            initials: "VS",
                            text: "A highly professional team that respects confidentiality. They guided us through a complex social impact assessment involving labor disputes, implementing an effective HR grievance mechanism that resolved the underlying issues."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ESDDInAerospaceIndustry;

