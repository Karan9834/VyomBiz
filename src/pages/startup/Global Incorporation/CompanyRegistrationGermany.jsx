import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Germany/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in Germany/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in Germany/process.png";

/**
 * CompanyRegistrationGermany Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-Germany
 */

const CompanyRegistrationGermanyOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Start a Business in Germany?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Germany has Europe’s largest economy and is a major hub for international trade, manufacturing, and technology. A business presence in Germany provides access to top-tier infrastructure, a highly skilled workforce, and the expansive European Union market.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Key reasons entrepreneurs choose Germany for expansion:
                        </p>
                        <ul className="space-y-4 mb-6 text-[17px] text-slate-600 leading-relaxed font-medium list-disc list-inside">
                            <li>Strong and stable economic environment</li>
                            <li>Direct access to the European single market</li>
                            <li>High demand for innovation, engineering, and digital services</li>
                            <li>Strong legal protections and transparent regulations</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Registering a company in Germany involves specific legal, administrative, and financial steps. Vyombiz managed by Clink Consultancy Services Private Limited provides expert support to ensure that the incorporation process is handled efficiently and exactly according to German law.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Germany Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationGermanyAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Company Registration in Germany
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Setting up a company in Germany provides significant strategic advantages for businesses aiming for long-term international success.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Germany Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-8">
                        Partnering with Vyombiz managed by Clink Consultancy Services Private Limited allows businesses to leverage these advantages by ensuring a compliant and structured market entry.
                    </p>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Gateway to Europe", desc: "Located in the center of Europe, Germany offers excellent connectivity to neighboring countries and global markets." },
                        { title: "Economic Stability", desc: "As the largest economy in Europe, Germany offers a highly secure and predictable environment for business growth." },
                        { title: "Global Credibility", desc: "A German-registered company is highly respected worldwide, boosting trust with clients, investors, and suppliers." },
                        { title: "Support for Innovation", desc: "The government provides numerous grants, incentives, and funding programs for research, development, and tech-driven startups." },
                        { title: "Highly Developed Infrastructure", desc: "World-class logistics, transportation networks, and digital infrastructure make business operations highly efficient." }
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

const GermanyIncorporationEligibility = () => {
    const list = [
        { title: "GmbH (Gesellschaft mit beschränkter Haftung)", desc: "The most common company type, known as a Limited Liability Company. It requires a minimum share capital of €25,000 and is favored for its strong credibility and limited liability protection." },
        { title: "UG (Unternehmergesellschaft)", desc: "Also known as a 'Mini-GmbH', this structure is designed for startups and entrepreneurs with a lower initial capital requirement (starting from €1). The company must save part of its profits until it reaches the €25,000 threshold to become a full GmbH." },
        { title: "AG (Aktiengesellschaft)", desc: "A Joint Stock Company suitable for large enterprises planning to issue shares to the public. The minimum share capital is €50,000." },
        { title: "Branch Office", desc: "Foreign companies can register a branch office in Germany to conduct business activities under the parent company’s legal entity." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Companies You Can Register in Germany
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Choosing the correct business structure is a critical first step. Germany offers several business entities, but the most common for international expansion are:
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Vyombiz managed by Clink Consultancy Services Private Limited helps businesses evaluate their goals and select the most appropriate structure for operations in Germany.
                </p>
                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Choose Your Company Structure
                            </Link>
                </div>
            </div>
        </section>
    );
};

const GermanyIncorporationDocumentsSection = () => {
    const list = [
        "Passport copies of directors and shareholders",
        "Utility bill or proof of residential address",
        "Proposed company name",
        "Business plan outlining operations and objectives",
        "Notarized Articles of Association",
        "Proof of share capital deposit"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Company Registration in Germany
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    German company registration has strict documentation and notarization requirements. The essential documents include:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Vyombiz managed by Clink Consultancy Services Private Limited ensures that all legal paperwork is processed correctly, notarized efficiently, and filed according to German requirements.
                </p>
            </div>
        </section>
    );
};

const GermanyIncorporationProcessSection = () => {
    const steps = [
        { title: "Select Company Structure & Name", desc: "Choose the appropriate structure (e.g., GmbH or UG) and select a suitable company name." },
        { title: "Drafting the Articles of Association", desc: "Prepare and finalize the legal documents required for incorporation." },
        { title: "Notarization of Documents", desc: "The founding documents must be signed and notarized by a German notary public." },
        { title: "Opening a Corporate Bank Account", desc: "A German corporate bank account must be opened, and the required share capital must be deposited." },
        { title: "Commercial Register Filing", desc: "Once capital is deposited, the notary submits the application to the German Commercial Register (Handelsregister)." },
        { title: "Trade Office and Tax Registration", desc: "The company must be registered with the local trade office (Gewerbeamt) and obtain a tax number (Steuernummer) and VAT ID." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in Germany
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Incorporate your business in Germany efficiently.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Germany Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                            Vyombiz managed by Clink Consultancy Services Private Limited manages this process from end-to-end, ensuring legal accuracy, overcoming language barriers, and accelerating approvals.
                        </p>
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GermanyIncorporationFeaturesSection = () => {
    const whyChooseUs = [
        "End-to-end guidance from business structure selection to final registration",
        "Assistance with document notarization and bank account setup",
        "Post-incorporation support for taxes, VAT, and compliance operations",
        "Dedicated advisory services for international entrepreneurs"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Why Choose Vyombiz for Germany Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Registering a business in Germany requires strict adherence to legal compliances and administrative accuracy.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides a seamless incorporation experience by handling:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {whyChooseUs.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        With professional expertise, businesses can enter the German market confidently and start operations without delays.
                    </p>
                </div>

                <div className="bg-[#e6f0fa] rounded-2xl p-8 lg:p-12 text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Start Your Company in Germany Today
                    </h2>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
                        Expand your reach into Europe’s strongest economy with expert incorporation services. Establish a company that provides unparalleled credibility, global reach, and stability.
                    </p>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">
                        Connect with Vyombiz managed by Clink Consultancy Services Private Limited to launch your business in Germany with ease and compliance.
                    </p>
                </div>

            </div>
        </section>
    );
};

const CompanyRegistrationGermany = () => {

    const faqs = [
        {
            question: "Can an international entrepreneur register a company in Germany?",
            answer: "Yes, non-residents and foreign nationals can fully own and register a company in Germany."
        },
        {
            question: "Do I need to visit Germany for registration?",
            answer: "It is often necessary to visit Germany for bank account opening and notary procedures, but parts of the process can be managed through power of attorney."
        },
        {
            question: "What is the capital requirement for a UG company?",
            answer: "A UG (Mini-GmbH) can be started with as little as €1, making it a popular option for startups."
        },
        {
            question: "Is it mandatory to have a local director?",
            answer: "No, the managing director of a German company does not need to be a German resident, but they must be able to travel to Germany if required."
        },
        {
            question: "How long does company registration take?",
            answer: "The process usually takes 3 to 6 weeks, depending on document processing and the commercial registry’s schedule."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Expand to Europe’s Largest"
                heroTitleSuffix="Market"
                heroSubtitle="A Business Presence in Germany."
                heroDescription="Register your company in Germany, the economic powerhouse of Europe. Secure a robust, dynamic, and highly credible environment for your international expansion with the assistance of global incorporation experts."
                whatsIncludedList={[
                    "A dynamic and robust business climate",
                    "Strong credibility in global markets",
                    "A trusted and efficient incorporation process"
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationGermanyOverview />}
                advantages={<CompanyRegistrationGermanyAdvantages />}
                eligibility={<GermanyIncorporationEligibility />}
                documents={<GermanyIncorporationDocumentsSection />}
                process={<GermanyIncorporationProcessSection />}
                features={<GermanyIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Germany"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationGermany;

