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
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const PaperPackagingOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Sustainable Industry
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Paper Packaging Industry – <span className="text-[#005a9c]">Business Growth</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The paper and paperboard packaging industry is at the forefront of the global movement towards sustainability. With the e-commerce and retail sectors rapidly growing, the demand for high-quality, recyclable packaging is higher than ever.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Starting a unit in this industry involves specialized machinery for pulping, molding, and finishing, along with strict adherence to environmental regulations regarding water management and sustainable fiber sourcing.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Industry Scope:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            India is witnessing a massive shift towards paper packaging, driven by both consumer preference and strict government bans on single-use plastics.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Strategic Benefits
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why invest in paper packaging manufacturing?
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80"
                            alt="Paper Packaging Industry Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Eco-Friendly Branding", desc: "Align with the global push for environmental sustainability." },
                        { title: "High Scalability", desc: "Can start from small corrugated units to large-scale board mills." },
                        { title: "Govt. Support", desc: "Access to various green industry incentives and MSME schemes." },
                        { title: "Consistent Demand", desc: "Packaging is an essential component across all consumer segments." },
                        { title: "Fiber Flexibility", desc: "Use of recycled fibers or sustainably sourced virgin pulp." },
                        { title: "Market Versatility", desc: "Cater to food, pharmaceuticals, and consumer electronics sectors." }
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
        { title: "Business Incorporation", desc: "Registering as a Pvt Ltd Company or an LLP." },
        { title: "Pollution Clearance", desc: "CTE/CTO for water and air management standards." },
        { title: "Factory License", desc: "Certification for workshop and worker safety." },
        { title: "Fire Safety", desc: "Mandatory NOC from the local Fire Department." },
        { title: "Quality Standards", desc: "BIS or ISO certifications for packaging durability." },
        { title: "Labor Registration", desc: "Compliance with health and safety norms for industrial staff." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Paper Packaging Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Ensuring legal and environmental compliance.
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
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const PaperPackagingIndustryDocumentsSection = () => {
    const list = [
        "Detailed Project Report (DPR)",
        "Plant Layout and Machinery Details",
        "Water Source and Effluent Treatment Plan",
        "Raw Material Sourcing Agreements",
        "Business Registration Certificates (MOA/AOA)",
        "Land Possession Documents",
        "Pollution Control Application Data",
        "Fire Safety and Safety Management Plan"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Paper Packaging Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documentation required for industrial plant approval.
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

const PaperPackagingIndustryProcessSection = () => {
    const steps = [
        { title: "Market Analysis", desc: "Determining target sectors and product range (Boxes, Bags, etc.)." },
        { title: "Site & Sourcing", desc: "Finalizing location and raw material (waste paper/pulp) supply." },
        { title: "Regulatory Filing", desc: "Applying for Pollution and Factory licenses online." },
        { title: "Installation", desc: "Setting up pulpers, corrugators, and printing machinery." },
        { title: "Certification", desc: "Obtaining quality and eco-label certifications for the market." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Set Up a Paper Packaging Unit?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Guiding you through your packaging venture.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80" alt="Paper Packaging Setup Process" className="w-full rounded-lg shadow-sm" />
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PaperPackagingIndustryFeaturesSection = () => {
    const features = [
        { title: "Packaging Specialists", desc: "Deep knowledge of the paper and pulp industry dynamics." },
        { title: "Compliance Experts", desc: "Fast-tracking your Pollution and Industrial licenses." },
        { title: "Resource Network", desc: "Connecting you with reliable machinery and raw material suppliers." },
        { title: "End-to-End Guidance", desc: "Support from the first feasibility study to the final launch." },
        { title: "MSME Scheme Support", desc: "Helping you leverage specialized government funding for packaging." },
        { title: "Dedicated Support Team", desc: "Constant assistance for renewals and regulatory audits." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your partner in sustainable manufacturing.
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
                heroSubtitle="Sustainable Packaging for a Greener Future"
                heroDescription="Tap into the booming eco-friendly packaging market. We provide complete setup solutions for paper and paperboard manufacturing units, from machinery sourcing to environmental clearances."
                whatsIncludedList={[
                    "Plant Capacity & Design Analysis",
                    "SPCB Pollution NOC Services",
                    "Regulatory & Factory Licensing",
                    "Machinery & Raw Material Sourcing",
                    "Eco-Certification Advisory",
                    "Customized Project Reporting"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <FileText size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
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
