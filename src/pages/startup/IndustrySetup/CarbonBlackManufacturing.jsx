import React from "react";
import {
    Factory,
    Briefcase,
    Building2,
    Settings,
    ShieldCheck,
    Truck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const CarbonBlackManufacturing = () => {
    const faqs = [
        {
            question: "Is carbon black manufacturing categorized under 'Red Industry'?",
            answer: "Yes, carbon black production is classified as a 'Red Industry' by the CPCB due to its potential environmental impact, requiring strict pollution control (CTE/CTO) and hazardous waste clearances."
        },
        {
            question: "What is the primary technology used in manufacturing carbon black?",
            answer: "The 'Furnace Black Process' is the most common method today due to its high yield and the ability to control particle size and shape. Other methods include the Lampblack and Acetylene Black processes."
        },
        {
            question: "Which industries drive the demand for carbon black in India?",
            answer: "The automotive (tyre manufacturing) sector is the primary driver. It is also heavily used in plastics, printing inks, rubber products, and battery manufacturing."
        },
        {
            question: "What are the key licenses required for setup?",
            answer: "Key licenses include Business Registration, Industrial License, Pollution NOC (CTE/CTO), Hazardous Waste Management Authorization, Factory License, and Fire Safety approvals."
        },
        {
            question: "Who can set up a carbon black manufacturing plant?",
            answer: "Any individual, partnership firm, or corporate entity can set up a plant, provided they meet the regulatory standards, land ownership requirements, and environmental compliance norms."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Carbon Black"
                heroTitleSuffix="Manufacturing Setup"
                heroSubtitle="Driving Industrial & Automotive Innovation"
                heroDescription="Tap into India's multi-billion dollar carbon black market. We offer end-to-end consulting for setting up high-yield manufacturing plants with full environmental and industrial compliance."
                whatsIncludedList={[
                    "Technology Selection Advisory",
                    "Pollution Control (CTE/CTO) Liaison",
                    "Hazardous Waste Authorization",
                    "Reactor & Equipment Installation Support",
                    "Business Integration & Licensing",
                    "Project Report Preparation"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Factory size={20} /> },
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
                    badge: "Industrial Setup",
                    title: "Carbon Black Plant Setup –",
                    highlightTitle: "Business Overview",
                    description: [
                        "Carbon black is a vital industrial component used globally in cell phones, PCs, and automotive products. With advancements in transportation and construction, the demand in India is surging, making it a highly rewarding sector for new manufacturing units.",
                        "Produced from hydrocarbons like natural gas or oil through partial combustion, carbon black comes in types like Furnace Black (most common), Acetylene Black (conductive), and Lampblack (specialty inks).",
                        <strong>Market Potential:</strong>,
                        "India's carbon black market is valued at over $84 billion in 2024, driven by the massive automotive sector and infrastructure growth."
                    ],
                    whyIdealTitle: "Key Industrial Applications",
                    whyIdealList: [
                        { title: "Tyre Industry", desc: "Used as a reinforcing filler to enhance strength and durability." },
                        { title: "Specialty Plastics", desc: "Added to achieve rich, fade-resistant black coloration." },
                        { title: "Conductive Agents", desc: "Essential in battery manufacturing and ESD applications." },
                        { title: "Printing Inks", desc: "Serves as a pigment for high-performance toners and coatings." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Setup",
                    subtitle: "Why invest in the carbon black manufacturing business?",
                    list: [
                        { title: "Consistent High Demand", desc: "Steady needs across automotive, electronics, and packaging industries." },
                        { title: "Customizable Production", desc: "Flexible processes tailored to specific specialty market requirements." },
                        { title: "High-Profit Margins", desc: "Strong industrial demand ensures attractive returns on investment." },
                        { title: "Scalable Infrastructure", desc: "Feasible for medium-scale operations with eco-friendly expansion potential." },
                        { title: "Export Opportunities", desc: "India's cost-effective production is well-positioned for global markets." },
                        { title: "Growth in Rubber Goods", desc: "Rising demand for conveyor belts, seals, and gaskets." }
                    ]
                }}
                eligibility={{
                    title: "Regulatory Licensing",
                    subtitle: "Mandatory authorizations for legal operation.",
                    list: [
                        { title: "Red Industry NOC", desc: "Compulsory Pollution NOC (CTE/CTO) from CPCB/SPCB." },
                        { title: "Business Registration", desc: "Incorporation as a Company or Partnership firm." },
                        { title: "Hazardous Waste License", desc: "Authorization for handling and storing hazardous materials." },
                        { title: "Industrial Licensing", desc: "Clearance from relevant authorities based on plant capacity." },
                        { title: "Safety Compliances", desc: "Building permits and mandatory fire safety approvals." },
                        { title: "Labor Compliance", desc: "Adherence to labor laws and employee health & safety regulations." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Documentation needed for environmental and industrial clearances.",
                    list: [
                        "Business Layout Plan & Project Report",
                        "Detailed Manufacturing Process Flowchart",
                        "List of Machinery and Capital Investment Details",
                        "Land Ownership / Lease Proof",
                        "Water Source and Quantity Requirements",
                        "Waste Management and Pollution Control Plans",
                        "Certified Balance Sheet and CA Certificates",
                        "Consent Fees and Application Forms"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Setup Roadmap",
                    subtitle: "Step-by-step guidance for plant establishment.",
                    steps: [
                        { step: "01", title: "Technology Choice", desc: "Selecting the right process (Furnace, Acetylene, etc.) based on feedstock." },
                        { step: "02", title: "Licensing", desc: "Obtaining mandatory environmental and industrial authorizations." },
                        { step: "03", title: "Supply Chain", desc: "Establishing reliable sources for feedstock oils and natural gas." },
                        { step: "04", title: "Installation", desc: "Setting up reactors, heaters, dryers, and pin mixers." },
                        { step: "05", title: "Testing", desc: "Implementing a robust quality control lab for product standards." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Expertise in high-impact industrial projects.",
                    list: [
                        { title: "Sector Expertise", desc: "Deep understanding of the carbon black industry with 10+ years experience." },
                        { title: "Environmental Gurus", desc: "Specialists in handling Red Category industry pollution clearances." },
                        { title: "End-to-End Support", desc: "From technology selection to post-incorporation compliance." },
                        { title: "High Success Rate", desc: "97% success in securing regulatory approvals for industrial plants." },
                        { title: "Resource Savings", desc: "Optimizing setup costs to save significant capital for entrepreneurs." },
                        { title: "Documentation Help", desc: "Hassle-free preparation of project reports and lab data." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Carbon Black Business Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default CarbonBlackManufacturing;
