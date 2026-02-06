import React from "react";
import {
    Activity,
    Briefcase,
    Building2,
    ShieldCheck,
    Truck,
    Settings
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const SyntheticRubberBusiness = () => {
    const faqs = [
        {
            question: "What is Synthetic Rubber?",
            answer: "Synthetic rubber is an artificial elastomer, usually synthesized from petroleum byproducts. It is designed to mimic or improve upon the properties of natural rubber, particularly in terms of heat resistance, chemical durability, and elasticity."
        },
        {
            question: "Is synthetic rubber manufacturing considered a 'Red Category' industry?",
            answer: "Yes, similar to other chemical-heavy manufacturing processes, synthetic rubber production requires strict pollution control (CTE/CTO) and hazardous waste management authorizations from the SPCB/CPCB."
        },
        {
            question: "What are the common applications of synthetic rubber?",
            answer: "It is widely used in automotive tires, shoe soles, adhesives, sealants, gaskets, and various industrial hoses where high durability and chemical resistance are required."
        },
        {
            question: "What are the key licenses required for setup?",
            answer: "Key licenses include Business Incorporation, Factory License, Pollution NOC (CTE/CTO), Fire Department NOC, and Hazardous Waste Management Authorization."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Synthetic Rubber"
                heroTitleSuffix="Business Setup"
                heroSubtitle="Innovating the Elastomer Industry"
                heroDescription="Enter the high-growth synthetic rubber market with our expert setup services. We manage everything from technology selection to complex environmental licensing for your manufacturing unit."
                whatsIncludedList={[
                    "Technology Licensing & Setup",
                    "Environmental Clearance (Pollution NOC)",
                    "Hazardous Waste Authorization",
                    "Factory Act Compliance",
                    "Supply Chain Integration",
                    "BIS/ISO Certification Support"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Activity size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Industrial Growth",
                    title: "Synthetic Rubber Plant –",
                    highlightTitle: "Strategic Setup",
                    description: [
                        "Synthetic rubber is a critical material for the modern automotive, aerospace, and industrial sectors. With advancements in polymer science, the demand for specialty synthetic rubber variants is growing rapidly in India.",
                        "Setting up a manufacturing plant involves navigating complex chemical processes and ensuring strict adherence to environmental safety protocols and industrial standards.",
                        <strong>Strategic Goal:</strong>,
                        "To establish high-yield, sustainable production lines that meet the diverse needs of tire manufacturers and industrial goods producers."
                    ],
                    whyIdealTitle: "Key Advantages",
                    whyIdealList: [
                        { title: "Diverse Market", desc: "Applications across tires, footwear, and construction." },
                        { title: "High Durability", desc: "Superior resistance to heat and chemicals compared to natural rubber." },
                        { title: "Customizable Grades", desc: "Ability to produce specific grades like SBR, PBR, and NBR." },
                        { title: "Economic Resilience", desc: "Strong industrial demand ensures long-term business stability." }
                    ]
                }}
                advantages={{
                    title: "Business Benefits",
                    subtitle: "Why invest in synthetic rubber manufacturing?",
                    list: [
                        { title: "Growing Automotive Sector", desc: "Increased vehicle production directly drives tire and gasket demand." },
                        { title: "Export Expansion", desc: "India is emerging as a global hub for chemical and polymer exports." },
                        { title: "Technological Edge", desc: "Opportunity to implement advanced, efficient polymerization techniques." },
                        { title: "Diverse Grade Sourcing", desc: "Flexibility to cater to specialized niche industrial markets." },
                        { title: "Sustainable Practices", desc: "Adopting recycling and eco-friendly byproduct management." },
                        { title: "Long-term ROI", desc: "Strong margins in the specialty elastomer segments." }
                    ]
                }}
                eligibility={{
                    title: "Core Compliances",
                    subtitle: "Regulatory framework for chemical manufacturing.",
                    list: [
                        { title: "Pollution NOC", desc: "Mandatory CTE/CTO from the State Pollution Control Board." },
                        { title: "Factory License", desc: "Certification under the Factories Act for operational safety." },
                        { title: "Safety Audits", desc: "Regular industrial safety and chemical hazard assessments." },
                        { title: "Waste Management", desc: "Authorization for handling and disposal of chemical waste." },
                        { title: "DPIIT License", desc: "Industrial licensing based on the scale of production." },
                        { title: "Fire Safety", desc: "Comprehensive NOC from the Fire Department." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documentation for project approval.",
                    list: [
                        "Detailed Project Report (DPR)",
                        "Manufacturing Process Flowchart",
                        "List of Raw Materials and Feedstock",
                        "Plant Layout and Site Map",
                        "Pollution Control Equipment Specifications",
                        "Business Incorporation Documents",
                        "Land Ownership / Lease Agreement",
                        "Safety and Hazard Management Plan"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Setup Roadmap",
                    subtitle: "Our systematic approach to plant establishment.",
                    steps: [
                        { step: "01", title: "Feasibility", desc: "Assessing feedstock availability and local market demand." },
                        { step: "02", title: "Engineering", desc: "Finalizing plant design and machinery procurement." },
                        { step: "03", title: "Licensing", desc: "Securing environmental and industrial authorizations." },
                        { step: "04", title: "Commissioning", desc: "Installation of polymerization reactors and testing lines." },
                        { step: "05", title: "Production", desc: "Launching commercial production with quality control." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Experts in chemical and industrial consulting.",
                    list: [
                        { title: "Deep Industry Insight", desc: "Specialists in polymer and chemical business setups." },
                        { title: "Compliance Mastery", desc: "Handling complex environmental NOCs with a high success rate." },
                        { title: "Technology Partners", desc: "Connecting you with the best equipment providers." },
                        { title: "End-to-End Support", desc: "From project report to post-launch compliance assistance." },
                        { title: "Cost-Effective Solutions", desc: "Optimizing setup costs without compromising on quality." },
                        { title: "Dedicated Advisor", desc: "A single point of contact for all regulatory and technical queries." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Synthetic Rubber Business"
                faqs={faqs}
            />
        </div>
    );
};

export default SyntheticRubberBusiness;
