import { Link } from "react-router-dom";
import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    TreeDeciduous,
    ShieldCheck,
    Package
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import process from "../../../assets/Industry Setup/paper/process.jpg";
import benefits from "../../../assets/Industry Setup/paper/benefits.jpeg";
import overview from "../../../assets/Industry Setup/paper/overview.jpg";

const PaperPackagingOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Sustainable Industry
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of the Paper & Paperboard Packaging Industry
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The paper and paperboard packaging sector is one of the fastest-growing segments in India’s packaging industry. Increasing environmental awareness, government restrictions on plastic, and the rise of online retail have significantly boosted demand for sustainable packaging solutions.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-4">
                            Businesses operating in this industry manufacture products such as:
                        </p>
                        <ul className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6 space-y-2">
                            <li className="flex"><span className="text-yellow-400 mr-2">•</span> Corrugated boxes</li>
                            <li className="flex"><span className="text-yellow-400 mr-2">•</span> Folding cartons</li>
                            <li className="flex"><span className="text-yellow-400 mr-2">•</span> Paper bags and pouches</li>
                            <li className="flex"><span className="text-yellow-400 mr-2">•</span> Kraft paper packaging</li>
                            <li className="flex"><span className="text-yellow-400 mr-2">•</span> Paperboard containers</li>
                            <li className="flex"><span className="text-yellow-400 mr-2">•</span> Custom retail packaging</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The sector offers strong growth opportunities for manufacturers, exporters, and packaging solution providers. However, before starting operations, businesses must comply with several legal, environmental, and operational requirements. Vyombiz managed by Clink Consultancy Services Private Limited supports businesses through every stage of setting up a paper and paperboard packaging unit — from business registration to regulatory approvals and operational compliance.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Paper Packaging Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const PaperPackagingIndustryAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Start a Paper & Paperboard Packaging Business?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The market shifts are providing enormous opportunities for sustainable practices.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Paper Packaging Industry Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Growing Demand for Sustainable Packaging", desc: "Governments and consumers are actively shifting towards eco-friendly packaging solutions, increasing demand for paper-based packaging products." },
                        { title: "Rapid Growth of E-commerce", desc: "Online retail requires large volumes of corrugated boxes and protective packaging materials." },
                        { title: "Diverse Industry Applications", desc: "Paper packaging is used across multiple sectors including FMCG, food delivery, pharmaceuticals, electronics, cosmetics, and logistics." },
                        { title: "Export Opportunities", desc: "Indian paper packaging manufacturers have increasing demand from international markets due to cost efficiency and sustainability standards." }
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

const PaperPackagingIndustryEligibility = () => {
    const list = [
        { title: "Business Registration", desc: "Before starting manufacturing activities, businesses must register a legal entity such as Private Limited Company, LLP (Limited Liability Partnership), Partnership Firm, or Sole Proprietorship. A proper business structure ensures legal recognition, financial credibility, and operational flexibility." },
        { title: "Factory License", desc: "Manufacturing units operating with machinery and labor must obtain a Factory License under the Factories Act to ensure workplace safety and compliance." },
        { title: "Pollution Control Board Clearance", desc: "Paper manufacturing and packaging units must obtain consent from the State Pollution Control Board. This includes Consent to Establish (CTE) and Consent to Operate (CTO)." },
        { title: "GST Registration", desc: "Businesses engaged in manufacturing and selling packaging products must obtain GST registration to legally supply goods and claim input tax credits." },
        { title: "MSME (Udyam) Registration", desc: "Registering the unit as an MSME provides access to government subsidies, lower interest rates, and priority lending." },
        { title: "Trade License", desc: "A trade license from the local municipal authority may be required to operate the manufacturing facility within the specified jurisdiction." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Legal Requirements for Starting a Paper Packaging Business
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Starting a paper and paperboard packaging unit requires several registrations and approvals depending on the scale of operations.
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
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Let's Get Your Business Registered
                            </Link>
                </div>
            </div>
        </section>
    );
};

const PaperPackagingIndustryDocumentsSection = () => {
    const list = [
        "Identity and address proof of promoters",
        "PAN card of the business entity",
        "Business address proof",
        "Rental agreement or property documents",
        "NOC from property owner (if rented)",
        "Electricity bill or utility proof",
        "Detailed project report (in some cases)",
        "Machinery and manufacturing details"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Industry Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To establish a paper packaging unit, the following documents are typically required:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i} className="flex">
                            <span className="text-yellow-400 mr-2">•</span> {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                    The exact documentation requirements may vary depending on the scale of the business and state regulations.
                </p>
            </div>
        </section>
    );
};

const PaperPackagingIndustryProcessSection = () => {
    const steps = [
        { title: "Business Structure Registration", desc: "The first step is registering the appropriate legal structure based on business goals, capital requirements, and scalability plans." },
        { title: "Location and Factory Setup", desc: "A suitable industrial location must be selected with access to logistics, raw materials, and utilities such as electricity and water." },
        { title: "Environmental Compliance", desc: "Applications for pollution control approvals must be submitted to the respective state authority." },
        { title: "Licensing and Registrations", desc: "Relevant registrations such as GST, MSME, and trade licenses must be obtained before commencing operations." },
        { title: "Machinery Installation", desc: "Machinery for corrugation, die-cutting, printing, and packaging must be installed and tested for manufacturing operations." },
        { title: "Operational Compliance", desc: "Businesses must maintain compliance with labor laws, environmental regulations, and safety standards." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to Start a Paper & Paperboard Packaging Business
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A structured approach to establishing your unit successfully.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Paper Packaging Setup Process" className="w-full rounded-lg shadow-sm" />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">Step {index + 1}</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200" />
                        <p className="text-[17px] text-slate-600 mt-6 leading-relaxed">
                            Vyombiz managed by Clink Consultancy Services Private Limited streamlines this entire process so entrepreneurs can focus on building their business rather than navigating complex regulations.
                        </p>
                        <div className="mt-8 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PaperPackagingIndustryFeaturesSection = () => {
    const machinery = [
        "Corrugation machine",
        "Sheet cutting machine",
        "Die cutting machine",
        "Printing machine",
        "Pasting and folding machine",
        "Lamination machine"
    ];

    const benefitsAssistance = [
        "Avoid regulatory errors",
        "Complete registrations faster",
        "Ensure environmental compliance",
        "Structure the business for long-term growth",
        "Focus on operations and market expansion"
    ];

    const features = [
        { title: "Complete business registration support", desc: "Setting up a proper legal entity for your operations." },
        { title: "Factory and environmental licensing assistance", desc: "Handling complex manufacturing permits." },
        { title: "Regulatory compliance guidance", desc: "Ensure your plant meets all government rules." },
        { title: "Documentation and filing support", desc: "Thorough assistance in preparing required paperwork." },
        { title: "Expert consultation for industry setup", desc: "Focus on your operations while we handle compliance." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Key Machinery Used
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                            A paper and paperboard packaging unit generally uses several types of machinery, including:
                        </p>
                        <ul className="space-y-3 mb-6">
                            {machinery.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <ShieldCheck size={18} className="text-yellow-400 mr-2" />
                                    <span className="text-[17px] text-slate-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Benefits of Professional Assistance
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                            Setting up a manufacturing business requires navigating multiple legal, regulatory, and operational procedures. Professional guidance helps reduce delays and compliance risks.
                        </p>
                        <ul className="space-y-3">
                            {benefitsAssistance.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="min-w-[8px] h-[8px] rounded-full bg-[#f59e0b] mt-2 mr-3" />
                                    <span className="text-[17px] text-slate-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Industry Setup?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Starting a manufacturing unit requires more than just registration — it requires proper planning, compliance, and operational readiness. Vyombiz managed by Clink Consultancy Services Private Limited offers:
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]"><Package size={20} className="text-yellow-400" /></div>
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

const PaperPackagingIndustry = () => {
    const faqs = [
        {
            question: "Is the Paper Packaging Industry eco-friendly?",
            answer: "Yes, paper-based packaging is biodegradable and highly recyclable, making it the preferred choice for eco-conscious brands moving away from single-use plastics."
        },
        {
            question: "What licenses are mandatory for setting up a paper packaging plant?",
            answer: "Key licenses include Business Registration, Factory License, Pollution NOC (CTE/CTO), and Fire Department NOC. Specific quality certifications like FSC may also be required for better market reach."
        },
        {
            question: "What are the common products in this industry?",
            answer: "Products include corrugated boxes, paper bags, folding cartons, liquid packaging cartons, and sustainable food wraps."
        },
        {
            question: "What is the scope of the paper packaging market in India?",
            answer: "The market is growing rapidly due to the e-commerce boom and strict government bans on plastic packaging, creating massive demand for sustainable paper alternatives."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Paper & Paperboard"
                heroTitleSuffix="Packaging Setup"
                heroSubtitle="Build Your Paper & Paperboard Packaging Business the Right Way"
                heroDescription="The demand for sustainable and eco-friendly packaging is growing rapidly across industries. From e-commerce and FMCG to food and pharmaceuticals, paper-based packaging is becoming the preferred alternative to plastic. Setting up a paper and paperboard packaging business involves regulatory approvals, company registration, factory compliance, pollution clearances, and industry licenses. With the right guidance, the process becomes faster and hassle-free."
                whatsIncludedList={[
                    "Business Registration",
                    "Factory License Assistance",
                    "Pollution Control Clearance",
                    "GST Registration",
                    "MSME (Udyam) Registration",
                    "Trade License Approvals"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <FileText size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<PaperPackagingOverview />}
                advantages={<PaperPackagingIndustryAdvantages />}
                eligibility={<PaperPackagingIndustryEligibility />}
                documents={<PaperPackagingIndustryDocumentsSection />}
                process={<PaperPackagingIndustryProcessSection />}
                features={<PaperPackagingIndustryFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Paper Packaging Industry"
                faqs={faqs}
            />
        </div>
    );
};

export default PaperPackagingIndustry;

