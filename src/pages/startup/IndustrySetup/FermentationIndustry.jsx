import React from "react";
import {
    FlaskConical,
    Briefcase,
    Building2,
    ShieldCheck,
    Dna,
    Settings
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FermentationIndustryOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Biotechnology
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Fermentation Industry – <span className="text-[#005a9c]">Technological Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Fermentation is one of the most versatile industrial processes, forming the backbone of the biotechnology and pharmaceutical sectors. It involves precisely controlled biological synthesis to create everything from life-saving medicines to organic food additives.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Successful industry setup requires high-precision bioreactors (fermenters), specialized cooling systems, and rigorous downstream processing lines to ensure purity and high yield.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Industry Significance:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The fermentation sector is crucial for India's self-reliance in 'Active Pharmaceutical Ingredients' (APIs) and high-value biotechnology products.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
                            alt="Fermentation Industry Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FermentationIndustryAdvantages = () => {
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
                        Why invest in bio-fermentation?
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
                            alt="Fermentation Industry Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "High Value Addition", desc: "Transforming low-cost raw materials into high-value bioactive products." },
                        { title: "Sector Resilience", desc: "Critical role in healthcare and essential food industries." },
                        { title: "Govt. Incentives", desc: "Access to 'PLI' schemes and specialized biotech parks." },
                        { title: "Export Competitiveness", desc: "Major global demand for bio-pharmaceuticals from India." },
                        { title: "Sustainable Tech", desc: "Using biological processes instead of harsh chemical synthesis." },
                        { title: "Scalable Operations", desc: "Capability to start from pilot scales to massive industrial vats." }
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

const FermentationIndustryEligibility = () => {
    const list = [
        { title: "GMP Certification", desc: "Good Manufacturing Practices mandatory for pharma and food units." },
        { title: "Pollution NOC", desc: "Special emphasis on organic waste and water management." },
        { title: "Drug / Food License", desc: "Permission from CDSCO or FSSAI based on the product type." },
        { title: "Factory Registration", desc: "Ensuring workspace safety for technical and lab staff." },
        { title: "Safety Approvals", desc: "Fire department NOC and industrial chemical safety certifications." },
        { title: "R&D Approvals", desc: "Registration with the DSIR for potential tax benefits." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Fermentation Industry Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Adhering to strict medical and industrial norms.
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

const FermentationIndustryDocumentsSection = () => {
    const list = [
        "Detailed Bioprocess Flowchart and Project Report",
        "Fermenter and Equipment Technical Specifications",
        "Blueprint and Plant Layout (Certified)",
        "Pollution Monitoring and Control Plan",
        "Business Incorporation and MOA/AOA",
        "Land Possession Documents",
        "GMP / Quality Manual Drafts",
        "Staff Qualification Certificates (for technical roles)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Fermentation Industry Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documentation for biotech and pharma plant setup.
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

const FermentationIndustryProcessSection = () => {
    const steps = [
        { title: "Strain Selection", desc: "Finalizing the microbial host and raw material (substrate) strategy." },
        { title: "Design", desc: "Engineering the fermentation hall and downstream processing suites." },
        { title: "Compliance", desc: "Filing for Drug, Food, and Environmental licenses simultaneously." },
        { title: "Installation", desc: "Setting up fermenters, centrifuges, and filtration systems." },
        { title: "Scale-up", desc: "Pilot runs followed by full commercial scale production." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Set Up a Fermentation Industry Unit?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Our systematic approach to bio-manufacturing.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80" alt="Fermentation Industry Setup Process" className="w-full rounded-lg shadow-sm" />
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

const FermentationIndustryFeaturesSection = () => {
    const features = [
        { title: "Biotech Specialists", desc: "Deep understanding of bioprocessing and medical manufacturing." },
        { title: "Liaison with Authorities", desc: "Expertise in CDSCO, FSSAI, and SPCB regulatory processes." },
        { title: "Project Design Support", desc: "Assisting in building compliant, high-yield plant structures." },
        { title: "End-to-End Guidance", desc: "Support from lab-scale concept to industrial commissioning." },
        { title: "Quality Guarantee", desc: "Focusing on standards that ensure you meet GMP benchmarks." },
        { title: "Global Perspective", desc: "Preparing your unit for both local compliance and international exports." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Experts in biotech and regulatory complexity.
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

const FermentationIndustry = () => {
    const faqs = [
        {
            question: "What is the Fermentation Industry?",
            answer: "The fermentation industry uses microorganisms like bacteria, yeast, or fungi to convert raw materials into valuable products such as antibiotics, enzymes, bio-fuels, amino acids, and specialized food products."
        },
        {
            question: "What are the common sectors within this industry?",
            answer: "It spans several high-impact sectors, including Pharmaceuticals (antibiotics/vaccines), Food & Beverages (alcohol/vinegar), and Biotechnology (enzymes/bio-chemicals)."
        },
        {
            question: "What are the key environmental challenges?",
            answer: "Manageable but critical challenges include handling organic effluents and maintaining sterile conditions to prevent contamination, requiring specialized treatment plants and cleanroom setups."
        },
        {
            question: "What licenses are mandatory for setting up a fermentation plant?",
            answer: "Necessary licenses include FSSAI (for food items), Drug License (for pharma), Pollution NOC, Factory License, and potentially AYUSH or GMP certifications depending on the end product."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Fermentation"
                heroTitleSuffix="Industry Setup"
                heroSubtitle="Harnessing Biotechnology for Progress"
                heroDescription="Pioneer the future of bio-manufacturing. We provide comprehensive setup and regulatory consulting for fermentation-based units in pharmaceuticals, food, and high-tech biotechnology."
                whatsIncludedList={[
                    "Bioprocess & Plant Design Advisory",
                    "Drug & Food Licensing (FSSAI/Drug License)",
                    "GMP & Quality Certification Support",
                    "Environmental Compliance (Pollution NOC)",
                    "Microbial Sourcing & Strain Strategy",
                    "Project Feasibility Reports"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <FlaskConical size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<FermentationIndustryOverview />}
                advantages={<FermentationIndustryAdvantages />}
                eligibility={<FermentationIndustryEligibility />}
                documents={<FermentationIndustryDocumentsSection />}
                process={<FermentationIndustryProcessSection />}
                features={<FermentationIndustryFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Fermentation Industry"
                faqs={faqs}
            />
        </div>
    );
};

export default FermentationIndustry;
