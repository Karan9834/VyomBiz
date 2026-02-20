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

const RenewableEnergyOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Green Energy
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Renewable Energy – <span className="text-[#005a9c]">Strategic Growth</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Renewable energy is the fastest-growing sector in India's industrial landscape. Driven by climate goals and decreasing technology costs, solar and wind energy have become highly attractive for both private and institutional investors.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Starting a renewable energy business involves understanding complex grid dynamics, securing strategic land parcels, and navigating a multi-layered regulatory environment involving state and central nodal agencies.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Market Outlook:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With the government targeting net-zero by 2070, the policy environment remains extremely favorable for long-term investments in clean energy infrastructure.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
                            alt="Renewable Energy Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const RenewableEnergyBusinessAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Strategic Benefits
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why lead the clean energy charge?
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
                            alt="Renewable Energy Business Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Decades of Revenue", desc: "Long-term revenue security through 20-25 year PPAs." },
                        { title: "Government Incentives", desc: "Access to Accelerated Depreciation (AD) and GST concessions." },
                        { title: "Low Operational Costs", desc: "No fuel costs; maintenance is predictable and manageable." },
                        { title: "ESG Compliance", desc: "Ideal for corporations looking to offset their carbon footprint." },
                        { title: "Energy Independence", desc: "Reducing reliance on volatile global fossil fuel markets." },
                        { title: "Scalable Projects", desc: "Opportunities ranging from small domestic setups to massive industrial parks." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const RenewableEnergyBusinessEligibility = () => {
    const list = [
        { title: "Grid Connectivity", desc: "Interconnection approval from State or Central utility boards." },
        { title: "Land Clearing", desc: "Conversion of land for industrial use and forest clearances if needed." },
        { title: "MNRE Registration", desc: "Empanelment with the Ministry of New and Renewable Energy." },
        { title: "CEIG Approval", desc: "Mandatory safety clearance for electrical installations." },
        { title: "Environmental Clearance", desc: "Required for large-scale parks and specific wind projects." },
        { title: "Business Licensing", desc: "Standard incorporation and factory/operational licenses." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Renewable Energy Business Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Navigating the energy regulatory landscape.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const RenewableEnergyBusinessDocumentsSection = () => {
    const list = [
        "Detailed Project Report (DPR) with Yield Projections",
        "Land Possession Documents or Lease Maps",
        "Grid Connectivity Feasibility Certificate",
        "Technical Specifications of Modules/Turbines",
        "Environmental and Social Impact Assessment (ESIA)",
        "Business Incorporation Certificates",
        "Single Line Diagram (SLD) for Electrical Setup",
        "No-Objection Certificate from Local Authorities"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Renewable Energy Business Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Key paperwork for energy project development.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const RenewableEnergyBusinessProcessSection = () => {
    const steps = [
        { title: "Site Identification", desc: "Surveying land for solar irradiation or wind potential." },
        { title: "Feasibility Analysis", desc: "Evaluating financial ROI and technical grid connectivity." },
        { title: "Project Approval", desc: "Obtaining all statutory clearances and Nodal agency LOIs." },
        { title: "EPC & Installation", desc: "Procurement, construction, and electrical integration of the plant." },
        { title: "Grid Syncing", desc: "Charging the plant and starting commercial operations (COD)." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Set Up a Renewable Energy Business?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Our systematic approach to energy projects.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80" alt="Renewable Energy Business Setup Process" className="w-full rounded-lg shadow-sm" />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200" />
                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const RenewableEnergyBusinessFeaturesSection = () => {
    const features = [
        { title: "Project Lifecycle Support", desc: "From the first resource assessment to grid commissioning." },
        { title: "Policy Insight", desc: "Deep knowledge of state-specific solar and wind policies." },
        { title: "Liaison Excellence", desc: "Strong experience in dealing with STU, CTU, and MNRE." },
        { title: "Custom Financial Models", desc: "Assisting in building bankable project reports for funding." },
        { title: "End-to-End Compliance", desc: "Ensuring all safety and environmental norms are met seamlessly." },
        { title: "Dedicated Experts", desc: "A team of engineers and legal advisors focused on your success." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Leaders in green energy implementation.
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300" />
                </div>
            </div>
        </section>
    );
};

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
                overview={<RenewableEnergyOverview />}
                advantages={<RenewableEnergyBusinessAdvantages />}
                eligibility={<RenewableEnergyBusinessEligibility />}
                documents={<RenewableEnergyBusinessDocumentsSection />}
                process={<RenewableEnergyBusinessProcessSection />}
                features={<RenewableEnergyBusinessFeaturesSection />}
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
