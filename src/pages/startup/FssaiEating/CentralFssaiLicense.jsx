import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Globe,
    Zap
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/FSSAI & Eating License/central-fssai-license/benefits.jpeg";
import overview from "../../../assets/FSSAI & Eating License/central-fssai-license/overview.jpg";
import process from "../../../assets/FSSAI & Eating License/central-fssai-license/process.jpg";

const CentralFssaiOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            National Level
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is a <span className="text-yellow-400">Central FSSAI License?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Central FSSAI License is the highest level of food business license issued by the Food Safety and Standards Authority of India (FSSAI) for large-scale food operators.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses that operate across multiple states, export or import food products, supply to government agencies, or generate high annual turnover are required to obtain this license.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The license ensures that the food business follows strict hygiene standards, quality regulations, and food safety guidelines set by the government. Businesses that fail to obtain the required FSSAI license may face heavy penalties, suspension of operations, or legal action.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses can streamline the application process and ensure compliance with all required regulations.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Central FSSAI License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Key Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Central FSSAI License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Obtaining a Central FSSAI License offers several advantages for food businesses operating at scale.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Central FSSAI Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Nationwide Business Operations", desc: "A Central License allows businesses to operate and distribute food products across multiple states without compliance issues." },
                        { title: "Legal Protection", desc: "Operating with a valid license ensures your business is legally compliant with Indian food safety regulations." },
                        { title: "Builds Consumer Trust", desc: "Displaying the FSSAI license number on products and packaging assures customers that the food meets government safety standards." },
                        { title: "Expansion Opportunities", desc: "Businesses with a Central License can expand distribution networks, partner with large retailers, and export food products globally." },
                        { title: "Avoid Penalties and Legal Issues", desc: "Operating without an FSSAI license can result in heavy fines, product recalls, and business suspension." }
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
                    <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Businesses working with Vyombiz managed by Clink Consultancy Services Private Limited receive professional assistance that ensures their licensing process is smooth and fully compliant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CentralFssaiEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs a Central FSSAI License?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    A Central FSSAI License is mandatory for specific types of large-scale food businesses. Businesses that require Central License include:
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li>Food businesses with annual turnover exceeding ₹20 crore</li>
                        <li>Importers and exporters of food products</li>
                        <li>Food businesses operating in multiple states</li>
                        <li>Large manufacturers and food processing units</li>
                        <li>Operators of large warehouses and cold storage units</li>
                        <li>E-commerce food platforms and aggregators</li>
                        <li>Food businesses supplying to government agencies</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Large food chains and brands often require a Central FSSAI License to legally expand their operations nationwide. With proper support from Vyombiz managed by Clink Consultancy Services Private Limited, businesses can determine whether they require a Central, State, or Basic FSSAI License and apply accordingly.
                    </p>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiDocuments = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Central FSSAI License
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for a Central FSSAI License, businesses must submit specific documentation to verify their operations. Key documents include:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>PAN card of the business entity</li>
                        <li>Certificate of Incorporation / Partnership Deed / LLP Agreement</li>
                        <li>Identity and address proof of business owners or directors</li>
                        <li>Business address proof</li>
                        <li>List of food products handled or manufactured</li>
                        <li>Layout plan of the processing unit</li>
                        <li>Food safety management system plan</li>
                        <li>NOC from local authorities (if applicable)</li>
                        <li>Import Export Code (for food import/export businesses)</li>
                        <li>Water test report from approved laboratory</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Documentation requirements may vary depending on the type and scale of the food business. Experts at Vyombiz managed by Clink Consultancy Services Private Limited help businesses prepare and verify all documents to avoid delays or rejection.
                    </p>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiProcess = () => {
    const steps = [
        { step: "01", title: "Business Assessment", desc: "Experts review your food business operations to determine whether a Central License is required." },
        { step: "02", title: "Document Preparation", desc: "All necessary documents are collected and verified to ensure compliance with FSSAI guidelines." },
        { step: "03", title: "Online Application Submission", desc: "The license application is filed through the official FSSAI Food Safety Compliance System (FoSCoS) portal." },
        { step: "04", title: "Authority Review and Inspection", desc: "FSSAI authorities review the application and may conduct an inspection of the business premises." },
        { step: "05", title: "License Approval", desc: "Once approved, the Central FSSAI License is issued, allowing the business to legally operate under FSSAI regulations." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Central FSSAI License Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Obtaining a Central FSSAI License involves several steps that must be completed carefully. With the support of Vyombiz managed by Clink Consultancy Services Private Limited, businesses can complete this process efficiently while avoiding compliance errors.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="The Central Process"
                            className="w-full rounded-lg shadow-sm"
                        />
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
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiFeatures = () => {
    const features = [
        { title: "Eligibility Assessment", desc: "Eligibility assessment for the correct FSSAI license type for your operations." },
        { title: "Complete Documentation", desc: "Complete documentation assistance ensuring requirements are met." },
        { title: "Filing and Support", desc: "Application filing and ongoing compliance support." },
        { title: "Expert Consultation", desc: "Expert consultation on complex food safety regulations." },
        { title: "Quick Processing", desc: "Quick and hassle-free processing to get you up and running." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Central FSSAI License?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Applying for an FSSAI license requires accurate documentation, compliance understanding, and proper application submission. Errors in the process can delay approvals. Vyombiz managed by Clink Consultancy Services Private Limited provides end-to-end support to simplify the licensing process for food businesses.
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
                    <div className="border-t border-slate-300"></div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        Our experts ensure that your food business meets all legal requirements so you can focus on growing your brand and expanding operations.
                    </p>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiCompliance = () => {
    const compliance = [
        { title: "Validity Timeline", desc: "The Central FSSAI License can be obtained for 1 to 5 years, depending on the applicant's preference during registration." },
        { title: "Timely Renewal", desc: "Businesses must ensure that the license is renewed before expiry to avoid penalties or disruption of operations." },
        { title: "Consequences of Delay", desc: "Failure to renew the license on time may lead to late fees or cancellation of the license." },
        { title: "Expert Support", desc: "Professional support from Vyombiz managed by Clink Consultancy Services Private Limited ensures that businesses receive reminders and assistance for timely renewal." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Central FSSAI License Validity
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Stay compliant with FSSAI regulations avoiding any business disruptions.
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiLicense = () => {
    const faqs = [
        {
            question: "Who needs a Central FSSAI License?",
            answer: "A Central FSSAI License is mandatory for Food Business Operators (FBOs) with an annual turnover exceeding ₹20 Crores. It is also required for importers, exporters, e-commerce food platforms, and businesses operating in central government agencies like airports or railways."
        },
        {
            question: "What is the validity of a Central FSSAI License?",
            answer: "The license comes with a flexible validity duration ranging from 1 to 5 years. The cost varies depending on the number of years selected."
        },
        {
            question: "When should I renew my Central FSSAI License?",
            answer: "The Central FSSAI License must be renewed at least 30 days before the expiration date to avoid late fees and ensure continuous legal operation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Central FSSAI"
                heroTitleSuffix="License"
                heroSubtitle="Operate Food Businesses Across India with a Central FSSAI License"
                heroDescription="If your food business operates on a large scale, across multiple states, or handles high turnover, a Central FSSAI License is mandatory. This license ensures that your business complies with Food Safety and Standards Authority of India (FSSAI) regulations and maintains high food safety standards. With expert assistance from Vyombiz managed by Clink Consultancy Services Private Limited, you can obtain your Central FSSAI License quickly, avoid compliance issues, and run your food business with complete legal confidence."
                whatsIncludedList={[
                    "Central Authority Liaisoning",
                    "Import/Export Compliance (IEC)",
                    "FoSCoS Central Application Filing",
                    "Audited FSMS Plan Support",
                    "Multi-State Operation Guidance",
                    "Global Safety Standard Assessment"
                ]}
                stats={[
                    { count: "5000+", label: "Central Licenses", icon: <Globe size={20} /> },
                    { count: "₹20Cr+", label: "Turnover Entry", icon: <Zap size={20} /> },
                    { count: "3 Days", label: "Docs Ready", icon: <FileText size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<CentralFssaiOverview />}
                advantages={<CentralFssaiAdvantages />}
                eligibility={<CentralFssaiEligibility />}
                documents={<CentralFssaiDocuments />}
                process={<CentralFssaiProcess />}
                features={<CentralFssaiFeatures />}
                postCompliance={<CentralFssaiCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default CentralFssaiLicense;

