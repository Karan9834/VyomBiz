import React from "react";
import {
    Zap,
    Briefcase,
    Building2,
    Sun,
    Wind,
    ShieldCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const RenewableEnergyBusiness = () => {
    const faqs = [
        {
            question: "Why invest in Renewable Energy in India?",
            answer: "India has one of the world's most ambitious renewable energy targets (500GW by 2030). The government offers massive incentives, including tax holidays, subsidies, and favorable power purchase agreements (PPAs)."
        },
        {
            question: "What are the common business models?",
            answer: "Key models include Utility-Scale Power Plants (Selling to the grid), Rooftop Solar Installations, O&M (Operation & Maintenance) services, and Manufacturing of components like PV cells or Wind turbines."
        },
        {
            question: "What are the key regulatory requirements?",
            answer: "Critical steps include securing grid connectivity approval (from STU/CTU), land acquisition, Environmental Impact Assessment (for large projects), and CEIG (Chief Electrical Inspector to Government) approval."
        },
        {
            question: "Is there support for small-scale entrepreneurs?",
            answer: "Yes, schemes like KUSUM for solar pumps and various state-level rooftop solar policies provide significant subsidies and easy financing for small and medium-scale ventures."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Renewable Energy"
                heroTitleSuffix="Business Setup"
                heroSubtitle="Powering the Future Sustainably"
                heroDescription="Join the global energy transition. We offer end-to-end consulting for setting up Solar, Wind, and Hybrid energy projects, from site assessment to grid connectivity and PPA negotiations."
                whatsIncludedList={[
                    "Site Feasibility & Irradiation Analysis",
                    "Grid Connectivity & STU/CTU Liaison",
                    "Government Subsidy & Incentive Support",
                    "PPA Negotiation & Contract Advisory",
                    "Land Acquisition & Regulatory Clearances",
                    "Project Financing Assistance"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Zap size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Green Energy",
                    title: "Renewable Energy –",
                    highlightTitle: "Strategic Growth",
                    description: [
                        "Renewable energy is the fastest-growing sector in India's industrial landscape. Driven by climate goals and decreasing technology costs, solar and wind energy have become highly attractive for both private and institutional investors.",
                        "Starting a renewable energy business involves understanding complex grid dynamics, securing strategic land parcels, and navigating a multi-layered regulatory environment involving state and central nodal agencies.",
                        <strong>Market Outlook:</strong>,
                        "With the government targeting net-zero by 2070, the policy environment remains extremely favorable for long-term investments in clean energy infrastructure."
                    ],
                    whyIdealTitle: "High-Potential Areas",
                    whyIdealList: [
                        { title: "Solar Power", desc: "Utility-scale parks, rooftop solar, and solar manufacturing units." },
                        { title: "Wind Energy", desc: "Setting up onshore and offshore wind turbines in high-potential corridors." },
                        { title: "Energy Storage", desc: "Investment in battery storage systems (BESS) and pumped hydro." },
                        { title: "Hybrid Systems", desc: "Combining solar and wind for consistent, reliable power output." }
                    ]
                }}
                advantages={{
                    title: "Strategic Benefits",
                    subtitle: "Why lead the clean energy charge?",
                    list: [
                        { title: "Decades of Revenue", desc: "Long-term revenue security through 20-25 year PPAs." },
                        { title: "Government Incentives", desc: "Access to Accelerated Depreciation (AD) and GST concessions." },
                        { title: "Low Operational Costs", desc: "No fuel costs; maintenance is predictable and manageable." },
                        { title: "ESG Compliance", desc: "Ideal for corporations looking to offset their carbon footprint." },
                        { title: "Energy Independence", desc: "Reducing reliance on volatile global fossil fuel markets." },
                        { title: "Scalable Projects", desc: "Opportunities ranging from small domestic setups to massive industrial parks." }
                    ]
                }}
                eligibility={{
                    title: "Core Authorizations",
                    subtitle: "Navigating the energy regulatory landscape.",
                    list: [
                        { title: "Grid Connectivity", desc: "Interconnection approval from State or Central utility boards." },
                        { title: "Land Clearing", desc: "Conversion of land for industrial use and forest clearances if needed." },
                        { title: "MNRE Registration", desc: "Empanelment with the Ministry of New and Renewable Energy." },
                        { title: "CEIG Approval", desc: "Mandatory safety clearance for electrical installations." },
                        { title: "Environmental Clearance", desc: "Required for large-scale parks and specific wind projects." },
                        { title: "Business Licensing", desc: "Standard incorporation and factory/operational licenses." }
                    ]
                }}
                documents={{
                    title: "Essential Documentation",
                    description: "Key paperwork for energy project development.",
                    list: [
                        "Detailed Project Report (DPR) with Yield Projections",
                        "Land Possession Documents or Lease Maps",
                        "Grid Connectivity Feasibility Certificate",
                        "Technical Specifications of Modules/Turbines",
                        "Environmental and Social Impact Assessment (ESIA)",
                        "Business Incorporation Certificates",
                        "Single Line Diagram (SLD) for Electrical Setup",
                        "No-Objection Certificate from Local Authorities"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1509391366360-feaffa648ba8?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Setup Roadmap",
                    subtitle: "Our systematic approach to energy projects.",
                    steps: [
                        { step: "01", title: "Site Identification", desc: "Surveying land for solar irradiation or wind potential." },
                        { step: "02", title: "Feasibility Analysis", desc: "Evaluating financial ROI and technical grid connectivity." },
                        { step: "03", title: "Project Approval", desc: "Obtaining all statutory clearances and Nodal agency LOIs." },
                        { step: "04", title: "EPC & Installation", desc: "Procurement, construction, and electrical integration of the plant." },
                        { step: "05", title: "Grid Syncing", desc: "Charging the plant and starting commercial operations (COD)." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Leaders in green energy implementation.",
                    list: [
                        { title: "Project Lifecycle Support", desc: "From the first resource assessment to grid commissioning." },
                        { title: "Policy Insight", desc: "Deep knowledge of state-specific solar and wind policies." },
                        { title: "Liaison Excellence", desc: "Strong experience in dealing with STU, CTU, and MNRE." },
                        { title: "Custom Financial Models", desc: "Assisting in building bankable project reports for funding." },
                        { title: "End-to-End Compliance", desc: "Ensuring all safety and environmental norms are met seamlessly." },
                        { title: "Dedicated Experts", desc: "A team of engineers and legal advisors focused on your success." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Renewable Energy Business"
                faqs={faqs}
            />
        </div>
    );
};

export default RenewableEnergyBusiness;
