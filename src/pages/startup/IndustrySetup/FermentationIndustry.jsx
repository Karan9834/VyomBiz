import { Link } from "react-router-dom";
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
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/Industry Setup/fermentation-industry-setup/benefits.jpg";
import overview from "../../../assets/Industry Setup/fermentation-industry-setup/overview.jpg";
import process from "../../../assets/Industry Setup/fermentation-industry-setup/process.jpg";

const FermentationIndustryOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Biotechnology
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is the Fermentation Industry?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The fermentation industry involves the controlled use of microorganisms such as bacteria, yeast, and fungi to produce valuable products. These processes are widely used in multiple sectors, including food production, pharmaceuticals, biofuels, and specialty chemicals.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Fermentation technology enables industries to produce high-value biological products at scale, making it a critical component of modern biotechnology and sustainable manufacturing.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses in this sector often require strict regulatory approvals, environmental permissions, and specialized production infrastructure before operations can begin.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Growth Drivers
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why the Fermentation Industry is Growing in India
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        India is emerging as a strong hub for fermentation-based manufacturing due to its expanding biotechnology ecosystem and rising demand for bio-based products.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Fermentation Industry Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Rising Demand for Probiotics", desc: "Increasing demand for probiotics and fermented food products in the domestic and global market." },
                        { title: "Biopharmaceutical Expansion", desc: "Expanding biopharmaceutical manufacturing sector to produce life-saving medicines." },
                        { title: "Government Support", desc: "Government support for biotechnology and bio-economy initiatives through various schemes." },
                        { title: "Sustainable Production", desc: "Increased focus on sustainable industrial production utilizing biological processes." },
                        { title: "Industrial Growth", desc: "Significant growth in enzyme, biofuel, and organic chemical manufacturing sectors." }
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
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        With the right legal structure and compliance framework, entrepreneurs can tap into this rapidly expanding sector.
                    </p>
                </div>
            </div>
        </div>
    );
};

const FermentationIndustryEligibility = () => {
    const list = [
        "Company Registration or LLP Registration",
        "MSME (Udyam) Registration",
        "Factory License",
        "FSSAI License (for food-based fermentation products)",
        "Drug Manufacturing License (for pharmaceutical fermentation)",
        "Pollution Control Board Clearance",
        "Environmental Clearance",
        "GST Registration",
        "Import Export Code (IEC) (for international trade)",
        "Boiler and Industrial Safety Approvals"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Licenses Required to Start a Fermentation Industry in India
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Setting up a fermentation unit requires multiple licenses depending on the type of product being manufactured. Common registrations and approvals include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed mb-8">
                    {list.map((item, i) => (
                        <div key={i} className="flex items-start">
                            <div className="mr-3 mt-1 text-yellow-400"><ShieldCheck size={18} /></div>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The exact licensing structure depends on the scale of operations and product category.
                </p>
                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Legal Setup
                            </Link>
                </div>
            </div>
        </section>
    );
};

const FermentationIndustryDocumentsSection = () => {
    const list = [
        "Identity and address proof of promoters",
        "Business registration documents",
        "PAN and Aadhaar of directors/partners",
        "Land or lease agreement for manufacturing facility",
        "Factory layout and infrastructure plan",
        "Environmental compliance documents",
        "Pollution control consent applications",
        "Product details and manufacturing process information"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Fermentation Industry Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The documentation required for setting up a fermentation manufacturing unit typically includes:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i} className="flex">
                            <span className="text-yellow-400 mr-2">•</span> {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                    Preparing these documents correctly helps avoid delays during approval processes.
                </p>
            </div>
        </section>
    );
};

const FermentationIndustryProcessSection = () => {
    const steps = [
        { title: "Business Structure Registration", desc: "The first step is registering the legal entity—such as a Private Limited Company, LLP, or Partnership Firm—to operate the business." },
        { title: "Location & Infrastructure Planning", desc: "Fermentation units require specialized facilities such as fermentation tanks, sterilization equipment, and controlled environments." },
        { title: "Regulatory Approvals", desc: "Approvals from authorities such as pollution control boards, food safety regulators, and drug authorities may be required depending on the product category." },
        { title: "License Applications", desc: "All industry-specific registrations and operational licenses must be obtained before production begins." },
        { title: "Compliance & Documentation", desc: "Proper documentation related to safety standards, environmental compliance, and manufacturing processes must be maintained." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to Set Up a Fermentation Industry
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Setting up a fermentation business involves several structured stages.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Fermentation Industry Setup Process" className="w-full rounded-lg shadow-sm" />
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited assists businesses throughout the entire process—from documentation to final approval.
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

const FermentationIndustryFeaturesSection = () => {
    const typesOfBusinesses = [
        { title: "Food & Beverage Fermentation", desc: "Includes production of yogurt, cheese, kombucha, vinegar, fermented beverages, and probiotics." },
        { title: "Pharmaceutical Fermentation", desc: "Used in the manufacturing of antibiotics, vaccines, insulin, and other biopharmaceutical products." },
        { title: "Industrial Fermentation", desc: "Produces enzymes, organic acids, amino acids, and specialty chemicals used in multiple industries." },
        { title: "Biofuel Fermentation", desc: "Used for producing ethanol and other biofuels from agricultural feedstocks." },
        { title: "Agricultural Fermentation", desc: "Used to create biofertilizers, biopesticides, and microbial agricultural products." }
    ];

    const compliances = [
        "Periodic pollution control reporting",
        "Factory safety compliance",
        "Food safety or pharmaceutical regulatory audits",
        "GST filings and financial compliance",
        "Labor law compliance",
        "Product quality and safety standards"
    ];

    const features = [
        { title: "Expert consultation for fermentation industry setup", desc: "Guided advisory for optimal setup structure." },
        { title: "Assistance with all licenses and registrations", desc: "End-to-end support for business operational licensing." },
        { title: "End-to-end documentation support", desc: "Complete handling of all necessary setup paperwork." },
        { title: "Regulatory compliance management", desc: "Ensuring all legal and environmental requirements are met." },
        { title: "Faster processing and approval guidance", desc: "Expedited application handling." },
        { title: "Dedicated business setup experts", desc: "A robust team to guide you through the process." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Types of Fermentation Businesses
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                            The fermentation industry covers a wide range of business models and product categories.
                        </p>
                        <div className="space-y-4">
                            {typesOfBusinesses.map((item, index) => (
                                <div key={index}>
                                    <h4 className="font-semibold text-[#072b47] text-[17px]">{item.title}</h4>
                                    <p className="text-[16px] text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                            Each type of fermentation setup has specific regulatory and compliance requirements, making professional assistance crucial during the setup phase.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Compliance Requirements
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                            Once the business is operational, maintaining compliance is essential to avoid regulatory issues. Key compliance requirements include:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {compliances.map((item, index) => (
                                <li key={index} className="flex">
                                    <span className="text-yellow-400 mr-3 mt-1"><ShieldCheck size={18} /></span>
                                    <span className="text-[17px] text-slate-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            <strong>Challenges in Setting Up:</strong> Businesses may face challenges like complex regulatory approvals, environmental clearance requirements, technical infrastructure planning, and high capital investment. With expert guidance, these challenges can be navigated efficiently.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Fermentation Industry Setup?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Starting a fermentation business involves multiple regulatory steps that require expertise and proper documentation. Vyombiz managed by Clink Consultancy Services Private Limited provides end-to-end support to simplify the process.
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]"><Dna size={20} className="text-yellow-400" /></div>
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
            <HeroLayout
                heroTitleMain="Fermentation Industry"
                heroTitleSuffix="Setup"
                heroSubtitle="Build a compliant, scalable fermentation-based manufacturing business with expert guidance."
                heroDescription="India’s fermentation industry is rapidly expanding across food processing, biotechnology, pharmaceuticals, enzymes, and sustainable chemicals. Setting up a fermentation unit requires careful planning, regulatory approvals, environmental compliance, and industry-specific licenses. Vyombiz managed by Clink Consultancy Services Private Limited helps entrepreneurs, manufacturers, and biotech innovators establish fermentation-based businesses smoothly."
                whatsIncludedList={[
                    "Company Registration",
                    "Regulatory Approvals",
                    "Environmental Compliance",
                    "Industry Licensing",
                    "Operational Setup Support"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <FlaskConical size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />
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

