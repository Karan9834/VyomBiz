import React from "react";
import {
    Droplet,
    Briefcase,
    Building2,
    ShieldCheck,
    Globe,
    Zap
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const GreenAmmoniaPlant = () => {
    const faqs = [
        {
            question: "What makes Ammonia 'Green'?",
            answer: "Ammonia is considered 'Green' when it is produced using renewable energy through water electrolysis, utilizing green hydrogen as the primary ingredient. This replaces the traditional process that relies on natural gas."
        },
        {
            question: "Is India well-positioned for green ammonia production?",
            answer: "Yes, India aims to capture 10% of the global market. The government offers incentives like 25-year transmission charge waivers and priority grid connections to attract investors and manufacturers."
        },
        {
            question: "What are the common storage methods for green ammonia?",
            answer: "Green ammonia can be stored by maintaining container pressure between 10–15 bar or by lowering the temperature to -33°C. It is highly compatible with existing storage and transport infrastructure."
        },
        {
            question: "What is the typical cost for setting up a plant?",
            answer: "Production costs generally range between $720-$1,400 per ton. Large-scale projects in India have seen investments ranging from Rs 12,000 crore to Rs 40,000 crore depending on capacity and location."
        },
        {
            question: "What are the biggest challenges in this sector?",
            answer: "Major challenges include high initial capital, regulatory non-uniformity for cross-border trade, and ensuring a steady supply of firm renewable power and water resources."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Green Ammonia"
                heroTitleSuffix="Plant Setup"
                heroSubtitle="Transitioning to Sustainable Industrial Fuels"
                heroDescription="Lead the shift towards carbon-free energy. We offer specialized consulting for Green Ammonia plant setup, helping you navigate complex environmental clearances and leverage national green energy missions."
                whatsIncludedList={[
                    "Green Hydrogen Integration Advisory",
                    "Modular Plant Design Consulting",
                    "National Green Hydrogen Mission Support",
                    "Hazardous Chemical Licensing",
                    "Export & Bunker Strategy",
                    "Pollution Control (NOC) Liaison"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Droplet size={20} /> },
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
                    badge: "Eco-Industrial Fuel",
                    title: "Green Ammonia Setup –",
                    highlightTitle: "Sustainable Innovation",
                    description: [
                        "Green ammonia is an eco-friendly alternative to conventional ammonia. While traditional ammonia is produced from natural gas and emits significant CO2, green ammonia is produced using renewable energy and water, making it a critical tool for global decarbonization.",
                        "In India, the demand is surging as industries strive to meet net-zero carbon targets. With a projected CAGR of over 117%, green ammonia is not just a fuel—it's one of the most stable mediums for hydrogen storage and transport.",
                        <strong>Key Advantage:</strong>,
                        "Green ammonia can be easily 'cracked' and purified back into hydrogen gas, solving the logistical and storage challenges typically associated with pure hydrogen."
                    ],
                    whyIdealTitle: "Unique Business Benefits",
                    whyIdealList: [
                        { title: "Cost-Effective Design", desc: "Modular, pre-fabricated systems reduce infrastructure costs." },
                        { title: "Accelerated Deployment", desc: "Production can often begin within 8-12 months of setup." },
                        { title: "Space Optimization", desc: "Compact setups require minimal land (approx. 30 sq. meters per unit)." },
                        { title: "Existing Infrastructure", desc: "Compatible with current ammonia storage and transport networks." }
                    ]
                }}
                advantages={{
                    title: "Strategic Market Advantages",
                    subtitle: "Why green ammonia is the future of industrial energy.",
                    list: [
                        { title: "Energy Independence", desc: "Reduces reliance on imported natural gas and fossil fuels." },
                        { title: "Hydrogen Carrier", desc: "Acts as an efficient, stable medium for global hydrogen shipping." },
                        { title: "Reduced Emissions", desc: "Generates electricity with only water and nitrogen as byproducts." },
                        { title: "Export Powerhouse", desc: "India aims to capture 10% of the massive global green ammonia market." },
                        { title: "Subsidized Operations", desc: "Access to government incentives under the National Green Hydrogen Mission." },
                        { title: "Versatile Applications", desc: "Ideal for fertilizers, maritime shipping fuel, and industrial power." }
                    ]
                }}
                eligibility={{
                    title: "Licensing & Permits",
                    subtitle: "Essential approvals for sustainable manufacturing.",
                    list: [
                        { title: "Environmental Clearance", desc: "Approvals from the Ministry of Environment (MoEFCC) and CPCB." },
                        { title: "Industrial License", desc: "Mandatory for handling hazardous chemicals from DPIIT." },
                        { title: "Pollution NOC", desc: "CTE and CTO from state boards for air and water emissions." },
                        { title: "Safety Certificates", desc: "Structural and fire safety certificates from municipal bodies." },
                        { title: "Land Proof", desc: "Proof of ownership or registered long-term lease for the site." },
                        { title: "Electricity Permits", desc: "Connections from state boards to access renewable energy benefits." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Documentation for industrial and regulatory clearances.",
                    list: [
                        "Certificate of Incorporation and GST/PAN Details",
                        "Pollution NOC (CTE/CTO) and Waste Management Permits",
                        "Detailed Project Report (DPR) and Feasibility Studies",
                        "Groundwater Usage and Environmental Impact Assessments",
                        "Structural and Fire Safety Certificates",
                        "Technical Specifications from Technology Providers",
                        "Land Ownership / Occupancy Proof",
                        "Industrial Licensing Application Forms"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1574966739982-2b672314dca9?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Filing & Setup Procedure",
                    subtitle: "Guiding you through the green energy transition.",
                    steps: [
                        { step: "01", title: "Feasibility Study", desc: "Assessing land, power, and water availability for the project." },
                        { step: "02", title: "Technology Partnering", desc: "Collaborating with equipment manufacturers for modular designs." },
                        { step: "03", title: "Regulatory Filing", desc: "Obtaining statutory clearances through the government portals." },
                        { step: "04", title: "Plant Commissioning", desc: "Speedy installation of pre-fabricated equipment within months." },
                        { step: "05", title: "Production & Export", desc: "Setting up bunkers and supply chains for local and global sale." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "The leader in green energy consulting.",
                    list: [
                        { title: "Decade of Experience", desc: "A pioneer in assisting greenpreneurs with industrial setups." },
                        { title: "Expert Consultant Network", desc: "Access to 200+ specialized environmental and energy consultants." },
                        { title: "Vast Investment Insights", desc: "Enabled over ₹5000 crore in green energy investments." },
                        { title: "Compliance Specialists", desc: "Deep knowledge of the National Green Hydrogen Mission policies." },
                        { title: "Feasibility Experts", desc: "Conducting robust viability studies to ensure your project's ROI." },
                        { title: "End-to-End Assistance", desc: "Handling everything from licensing to technology provider liaison." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Green Ammonia Plant Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default GreenAmmoniaPlant;
