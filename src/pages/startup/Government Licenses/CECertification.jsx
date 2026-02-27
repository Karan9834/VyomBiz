import React from 'react';
import { ShieldCheck, Globe, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const CEOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            EEA Market Access
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            CE Certification – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Are you a manufacturer, an importer, or a distributor dealing in consumer goods? If yes, you must secure CE certification to market your products in the EU. Standing for "conformité européenne" (European conformity), the CE marking acts as a passport for products in the European market.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The CE certification marking shows that a product meets European health, safety, and environmental standards, allowing it to be sold freely in the European Economic Area (EEA). While mandatory for EEA products, it is not a quality certification mark. The marking includes the CE logo and, if needed, a four-digit code for the notified body involved in the conformity assessment.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is CE Marking Certification?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            CE marking certification ensures that manufacturers comply with their respective products with European Union (EU) regulations and directives in connection with health, safety, and environmental protection. Meanwhile, products with CE marking have free access to the EEA market. EU member states cannot restrict the market placement of products affixed with such a mark without relevant evidence of non-compliance.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                            alt="CE Certification Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CEAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Global Advantages
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Obtaining CE Mark Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The CE marking guarantees that a product meets stringent EU safety directives, bringing several strategic growth advantages to global businesses.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="CE Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Compliance", desc: "It is mandatory for certain products to obtain CE mark certification before selling in the European market. Non-compliance can result in legal penalties." },
                        { title: "Market Access", desc: "CE Certification online facilitates circulation across the globe and enhances trade opportunities in the global market for both manufacturers and importers." },
                        { title: "Consumer Safety", desc: "CE certification ensures that products meet health, safety, and environmental standards, thus protecting consumers from potential hazards." },
                        { title: "Competitive Advantage", desc: "The CE mark certification can serve as a symbol of quality assurance, providing consumers with confidence in the product's safety and compliance." },
                        { title: "Global Recognition", desc: "CE certification online also facilitates global recognition, ensuring product compliance with rigorous EU regulations and standards." },
                        { title: "Legal Protection", desc: "It also protects both manufacturers and importers from potential legal liabilities by meeting regulatory compliances for CE certification." }
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

const CEEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    List of Products for CE Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The list of products eligible for CE certification Europe includes, but is not limited to, the following:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        General Products
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Electronics and IT equipment</li>
                        <li>Medical Devices and equipment</li>
                        <li>Toys and recreational products</li>
                        <li>Household refrigerators and freezers</li>
                        <li>Personal protective equipment (PPE)</li>
                        <li>Radio and telecommunications terminal equipment</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Industrial & Specialized Equipment
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Hot-water boilers</li>
                        <li>Lifts and elevators</li>
                        <li>Measuring instruments</li>
                        <li>Pressure equipment</li>
                        <li>Simple pressure vessels</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const CEDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Documents Required for CE Certification?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To successfully apply for CE mark certification, the technical dossier must include the following essential documents:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Product Details & Test Reports
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Complete description of the product and its intended use, accompanied by product test results from accredited testing laboratories verifying performance parameters.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Manufacturer Declaration & Proof of Conformity
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        A solemn declaration from the manufacturer affirming compliance, alongside detailed technical documentation and blueprints highlighting conformity.
                    </p>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Risk Assessment
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        A comprehensive copy of the risk assessment demonstrating safety controls and mitigation for consumer protection.
                    </p>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6">
                    Checklist to Obtain CE Marking Certification
                </h2>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#072b47] mb-4">
                        1- Comply with Requirements & Determine Assessment Type
                    </h3>
                    <ul className="space-y-2 text-[17px] text-slate-600">
                        <li>An applicant must ensure to meet or comply with all relevant EU-wide operational and design requirements.</li>
                        <li>Identify if you can assess the product yourself or if an authorized notified body has to be engaged.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#072b47] mb-4">
                        2- Technical Dossier & EU Declaration
                    </h3>
                    <ul className="space-y-2 text-[17px] text-slate-600">
                        <li>Prepare and compile a complete technical dossier for strict document compliance.</li>
                        <li>Draft and formally sign an EU declaration of conformity to finally affix the CE marking.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const CEProcessSection = () => {
    const steps = [
        {
            title: "Regulatory Standard",
            desc: "Firstly, identify the applicable EU directives and harmonized standards necessary for your product type."
        },
        {
            title: "Product Verification",
            desc: "Determine and verify the specific product requirements that need direct compliance."
        },
        {
            title: "Collection of Data",
            desc: "Collect applicable supply chain data and necessary technical documentation."
        },
        {
            title: "Assessment",
            desc: "Decide whether the product requires an independent conformity assessment by a notified body or if self-verification is permitted."
        },
        {
            title: "Testing",
            desc: "The product needs to undergo rigorous testing to check its conformity as per the established EU regulations."
        },
        {
            title: "Management & Documentation",
            desc: "Create and strictly maintain all the important technical documentation required for the CE certification process."
        },
        {
            title: "EU Declaration & CE Marking",
            desc: "Lastly, draw up an EU Declaration of Conformity and physically affix the CE marking to the product."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for CE Certification?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Follow the crucial step-by-step roadmap to assess exactly what needs to be done to obtain the CE Certificate for your specific product:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="CE Certification Process"
                            className="w-full rounded-lg shadow-sm sticky top-32"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>
                        <div className="mt-12 text-center">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start CE Marking Process
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CEFeaturesSection = () => {
    const features = [
        {
            title: "Visibility and Legibility",
            desc: "The CE marking must be visible, legible, and indelible on the product."
        },
        {
            title: "Marking Dimensions",
            desc: "The “CE” logo should have the same vertical dimension and be no smaller than 5mm unless otherwise specified in product requirements."
        },
        {
            title: "Proportionate Resizing",
            desc: "Resizing of a mark shall be proportionate to the two letters, and it can appear in different forms (e.g. colour, solid or hollow)."
        },
        {
            title: "Alternate Placement",
            desc: "If CE marking cannot be affixed directly to the product, it can be placed on the packaging or accompanying documents."
        },
        {
            title: "Validity Timeline",
            desc: "There is no CE certification expiry date, but the Declaration of Conformity (DoC) must always remain up to date."
        },
        {
            title: "Document Retention",
            desc: "Importers must securely keep a copy of the Declaration of Conformity (DoC) for 10 years after the product is placed on the market."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How Do You Affix the CE Certification and Validity?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        To maintain compliance, there are explicit operational guidelines surrounding how you stamp the CE mark and track the validity:
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {index + 1}.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>

                <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
                    <h4 className="text-[#072b47] font-semibold text-lg mb-1">Do You Need an Independent Assessment?</h4>
                    <p className="text-sm text-slate-700">Check if the product requires testing by a notified body according to the relevant legislation. If a notified body is required, the CE marking certification must include its identification number. If the product doesn't require testing by a notified body, the manufacturer must perform rigorous self-verification.</p>
                </div>
            </div>
        </section>
    );
};

const CECertification = () => {
    const faqs = [
        {
            question: "What is a declaration of conformity for CE Certification?",
            answer: "An EU Declaration of Conformity (DoC) is a mandatory document drawn up by the manufacturer or their authorized representative. It officially declares that the product satisfies the essential health and safety requirements of the applicable European Directives."
        },
        {
            question: "Does CE Certification have an expiry date?",
            answer: "No, a CE certification does not have a strict expiry date. However, the Declaration of Conformity must be perpetually up to date. You must update the certificate if there are subsequent changes in European legislation, product modifications, or changes to the manufacturer's contact details."
        },
        {
            question: "Is CE marking mandatory for all products entering the EU market?",
            answer: "CE marking is only mandatory for products that are covered by the scope of one or more of the specific European 'New Approach' Directives. Products outside the scope of these directives do not require and legally cannot be affixed with the CE mark."
        },
        {
            question: "Can I affix the CE mark without an independent assessment?",
            answer: "Yes, for many product categories, self-declaration is permitted. This means the manufacturer is solely responsible for declaring conformity. However, high-risk products (e.g., certain medical devices or pressure equipment) always mandate third-party conformity testing by a 'Notified Body'."
        },
        {
            question: "What happens if a product is found non-compliant with CE rules?",
            answer: "Products found non-compliant without relevant evidence of conformity can be legally restricted from market placement. The authorities possess the right to withdraw non-conforming products from customs and apply strict legal penalties to the manufacturer or importer."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="CE Certification"
                heroTitleSuffix="in India"
                heroSubtitle="Ensure European Market Compliance Easily"
                heroDescription="Get expert guidance to secure CE marking certification and expand your business in the vibrant, business-friendly climate of the European Economic Area (EEA)."
                whatsIncludedList={[
                    "Identify Applicable Directives",
                    "Compile Technical Dossier",
                    "Draft EU Declaration of Conformity",
                    "Dedicated Relationship Manager"
                ]}
                stats={[
                    { count: "EU", label: "Market Access", icon: <Globe size={20} /> },
                    { count: "100%", label: "Compliance", icon: <ShieldCheck size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <FileText size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CEOverview />}
                advantages={<CEAdvantages />}
                eligibility={<CEEligibility />}
                documents={<CEDocumentsSection />}
                process={<CEProcessSection />}
                features={<CEFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions on CE Mark Certification"
                subtitle="Address your primary queries to stay legally compliant."
                faqs={faqs}
            />
        </div>
    );
};

export default CECertification;
