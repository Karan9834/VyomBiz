import React from "react";
import {
    Zap,
    Briefcase,
    Building2,
    Wind,
    Sun,
    Droplets
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const GreenHydrogenPlant = () => {
    const faqs = [
        {
            question: "What exactly is Green Hydrogen?",
            answer: "Green hydrogen is produced through electrolysis splitting water into hydrogen and oxygen using renewable energy sources like solar or wind. Unlike grey or blue hydrogen, it is completely emission-free."
        },
        {
            question: "What are the key government incentives for setup in India?",
            answer: "The government offers waivers on interstate transmission charges for 25 years (for projects before June 2025), priority grid connectivity, land in renewable energy parks, and streamlined clearances through a dedicated portal."
        },
        {
            question: "What is the typical setup cost for a green hydrogen plant?",
            answer: "The starting self-investment range for a small to mid-scale plant is approximately Rs. 10 to 15 crore. Large-scale industrial plants can require much higher investments depending on capacity."
        },
        {
            question: "How long does it take to establish a plant?",
            answer: "A large-scale green hydrogen plant setup can take around 3 to 4 years, factoring in technology procurement, installation, and rigorous regulatory approvals."
        },
        {
            question: "Which licenses are mandatory for legal operation?",
            answer: "Essential licenses include Environmental Clearance (Pollution NOC), Factory License, PESO Approval (explosives safety), and Fire Department NOC."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Green Hydrogen"
                heroTitleSuffix="Plant Setup"
                heroSubtitle="Fueling a Clean Energy Future"
                heroDescription="Be a pioneer in India's green revolution. We provide strategic consulting for Green Hydrogen plant setup, ensuring you leverage government incentives while meeting global environmental standards."
                whatsIncludedList={[
                    "Incentive & Policy Advisory",
                    "Renewable Energy Sourcing Support",
                    "Electrolyser Technology Consulting",
                    "Environmental & PESO Licensing",
                    "Grid Connectivity Liaison",
                    "Financial Viability Analysis"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Zap size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}
            <TrustedBrands />

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Renewable Energy",
                    title: "Green Hydrogen Plant –",
                    highlightTitle: "Strategic Overview",
                    description: [
                        "Green hydrogen is the cornerstone of India's transition to a sustainable energy future. Produced by splitting water using electricity from renewable sources like solar and wind, it is the only zero-emission hydrogen variant.",
                        "With the India green hydrogen market valued at billions and supported by the National Green Hydrogen Mission, this sector offers unparalleled growth opportunities for investors focused on a low-carbon economy.",
                        <strong>Industry Goal:</strong>,
                        "To replace traditional Grey Hydrogen (fossil fuel-based) with Green Hydrogen, significantly reducing India's carbon footprint and dependence on energy imports."
                    ],
                    whyIdealTitle: "Why Invest Now?",
                    whyIdealList: [
                        { title: "Zero Emissions", desc: "Clean production with no harmful by-products like CO2." },
                        { title: "Energy Storage", desc: "An effective solution for storing intermittent renewable energy." },
                        { title: "Versatile Use", desc: "Applications in transportation, heavy industry, and heating." },
                        { title: "Economic Driver", desc: "Massive potential for job creation and infrastructure innovation." }
                    ]
                }}
                advantages={{
                    title: "Strategic Benefits",
                    subtitle: "Leverage India's aggressive clean energy policies.",
                    list: [
                        { title: "Waiver of Charges", desc: "25-year waiver on interstate transmission charges for early projects." },
                        { title: "Priority Grid Access", desc: "Guaranteed connectivity to ensure energy supply and output stability." },
                        { title: "Land Allocation", desc: "Priority access to land within dedicated solar and renewable energy parks." },
                        { title: "RPO Credits", desc: "Production counts towards the manufacturer's Renewable Purchase Obligations." },
                        { title: "Logistical Support", desc: "Bunkers near ports facilitated by authorities for storage and export." },
                        { title: "Tax Incentives", desc: "Beneficiary policies designed to reduce the cost of clean energy equipment." }
                    ]
                }}
                eligibility={{
                    title: "Core Compliances",
                    subtitle: "Regulatory framework for green energy setup.",
                    list: [
                        { title: "Environmental NOC", desc: "CTE and CTO from the State/Central Pollution Control Board." },
                        { title: "PESO Approval", desc: "Mandatory safety license from the Petroleum & Explosive Safety Organization." },
                        { title: "Factory License", desc: "Registration under the Factories Act for operational safety." },
                        { title: "Pollution Permits", desc: "Environmental Impact Assessment (EIA) for large-scale setups." },
                        { title: "Building Safety", desc: "NOC from the Fire Department and local municipal authorities." },
                        { title: "Labor Compliance", desc: "Adherence to hazardous waste management and health & safety standards." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documentation for green hydrogen project licensing.",
                    list: [
                        "Certificate of Incorporation and Company PAN",
                        "Plant Layout and Site Map",
                        "Environmental Clearance Permits (SPCB/CPCB)",
                        "Electricity Board Approval and Grid Permission",
                        "Industrial & Factory Licenses",
                        "PESO Safety Certification Documents",
                        "Hazardous Waste Management Plan",
                        "Detailed Project Report (DPR) and Feasibility Analysis"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Implementation Roadmap",
                    subtitle: "From project entity formation to production.",
                    steps: [
                        { step: "01", title: "Project Design", desc: "Site identification and procurement of electrolyser technology." },
                        { step: "02", title: "Financing", desc: "Raising capital and ensuring funding for the 3-4 year setup phase." },
                        { step: "03", title: "Licensing", desc: "Securing environmental, industrial, and PESO safety permits." },
                        { step: "04", title: "Energy Sourcing", desc: "Procuring renewable power (Solar/Wind) and water sources." },
                        { step: "05", title: "Installation", desc: "Setting up storage systems and distribution infrastructure." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Your partner in the green revolution.",
                    list: [
                        { title: "Green Energy Experts", desc: "Successfully assisted in over 500 green energy and industrial projects." },
                        { title: "Industry-Leading Success", desc: "99.2% success rate in securing complex licensing approvals." },
                        { title: "Regulatory Liaison", desc: "Direct experience working with 50+ government authorities and bodies." },
                        { title: "Capital Optimization", desc: "Saving significant licensing and compliance costs for greenpreneurs." },
                        { title: "Network of Specialists", desc: "Dedicated consultants specializing in energy and environmental laws." },
                        { title: "24/7 Assistance", desc: "Comprehensive support to simplify the complex journey of plant setup." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Green Hydrogen Plant Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default GreenHydrogenPlant;
