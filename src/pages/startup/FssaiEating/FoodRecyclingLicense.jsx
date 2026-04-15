import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Recycle,
    Leaf
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/FSSAI & Eating License/food-recycling-license/benefits.jpg";
import overview from "../../../assets/FSSAI & Eating License/food-recycling-license/overview.webp";
import process from "../../../assets/FSSAI & Eating License/food-recycling-license/process.png";

const FoodRecyclingOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Environmental Compliance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is a <span className="text-yellow-400">Food Recycling License?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Food Recycling License allows businesses to legally collect, process, and recycle food waste into useful resources such as compost, biofuel, or animal feed while complying with food safety and environmental regulations.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With increasing focus on sustainability and waste management, the Indian government has introduced stricter norms for businesses dealing with food waste recycling and disposal. Obtaining this license ensures that your recycling operations meet food safety, environmental protection, and waste management standards.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited assists businesses with complete documentation, application filing, and regulatory compliance, making the process smooth and efficient.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Food Recycling Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FoodRecyclingAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Food Recycling License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Obtaining a Food Recycling License offers multiple benefits for businesses working in the sustainability and waste management sector.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Food Recycling License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Compliance", desc: "Ensures your business follows government regulations related to food safety and waste recycling." },
                        { title: "Environmental Responsibility", desc: "Promotes sustainable practices by reducing food waste and converting it into useful resources." },
                        { title: "Business Credibility", desc: "A licensed recycling operation builds trust among partners, regulators, and customers." },
                        { title: "Access to Partnerships", desc: "Many corporate organizations prefer working with licensed recycling partners for waste management." },
                        { title: "Expansion Opportunities", desc: "Licensed operations can scale operations and participate in government and corporate sustainability initiatives." }
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
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited helps businesses obtain the required license with professional guidance and compliance expertise.
                    </p>
                </div>
            </div>
        </div>
    );
};

const FoodRecyclingEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs a Food Recycling License?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    A Food Recycling License is required for businesses involved in handling or processing food waste for recycling purposes. This includes:
                </p>
                <div className="mb-6">
                    <ul className="list-disc pl-6 space-y-3 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>Food waste recycling companies</li>
                        <li>Composting units processing food waste</li>
                        <li>Businesses converting food waste into animal feed</li>
                        <li>Bio-gas or biofuel plants using food waste</li>
                        <li>Food processing industries managing waste recycling</li>
                        <li>Restaurants or large kitchens with in-house recycling systems</li>
                    </ul>
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                    If your business collects, transports, processes, or converts food waste into usable products, obtaining the proper license is essential to operate legally.
                </p>
            </div>
        </section>
    );
};

const FoodRecyclingDocuments = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Food Recycling License
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for a Food Recycling License, businesses typically need to submit the following documents:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>Business registration certificate (Company/LLP/Partnership/Proprietorship)</li>
                        <li>PAN card of the business entity</li>
                        <li>Identity and address proof of directors or partners</li>
                        <li>Proof of business address</li>
                        <li>Waste management plan or operational details</li>
                        <li>Pollution control clearance (if applicable)</li>
                        <li>Details of recycling process or equipment</li>
                        <li>Layout or facility plan</li>
                        <li>Photographs of the business premises</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Additional documents may be required depending on the nature and scale of recycling operations.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FoodRecyclingProcess = () => {
    const steps = [
        { step: "01", title: "Business & Compliance Assessment", desc: "Experts evaluate your recycling operations and determine the applicable regulatory requirements." },
        { step: "02", title: "Documentation Preparation", desc: "All required documents and operational details are compiled for submission." },
        { step: "03", title: "Application Filing", desc: "The license application is submitted to the relevant authorities along with supporting documentation." },
        { step: "04", title: "Verification & Inspection", desc: "Authorities may conduct inspections to ensure compliance with food safety and environmental standards." },
        { step: "05", title: "License Approval", desc: "Once verified, the Food Recycling License is issued allowing the business to operate legally." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to Obtain Food Recycling License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The Food Recycling License process involves regulatory verification and documentation submission. Vyombiz managed by Clink Consultancy Services Private Limited ensures the entire process is smooth, compliant, and time-efficient.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="The Licensing Procedure"
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

const FoodRecyclingFeatures = () => {
    const features = [
        { title: "Expert Consultation", desc: "Regulatory consultation tailored to your specific recycling operations." },
        { title: "End-to-End Documentation", desc: "Complete support for all documentation and application filing requirements." },
        { title: "Quick Processing", desc: "Fast and compliant application filing to minimize approval timelines." },
        { title: "Affordable Pricing", desc: "Transparent and affordable pricing with no hidden costs." },
        { title: "Dedicated Specialists", desc: "Assigned specialists provide ongoing regulatory assistance." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Food Recycling License?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Obtaining regulatory approvals can be complex without expert guidance. Vyombiz managed by Clink Consultancy Services Private Limited simplifies the process with professional support and industry experience, allowing businesses to focus on innovation and sustainability.
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
            </div>
        </section>
    );
};

const FoodRecyclingCompliance = () => {
    const compliance = [
        "Safe handling and storage of food waste",
        "Proper waste segregation and disposal methods",
        "Maintaining hygienic recycling facilities",
        "Pollution control and environmental safeguards",
        "Regular documentation and operational reporting",
        "Compliance with local municipal regulations"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Compliance Requirements for Food Recycling Businesses
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Businesses dealing with food waste recycling must comply with several regulatory guidelines to ensure sustainable operations and avoid penalties.
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item}</h3>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>

                    <div className="mt-12">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-[#072b47] mb-6">
                            Penalties for Operating Without a Food Recycling License
                        </h2>
                        <p className="text-[16px] text-center text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
                            Operating a food recycling business without the necessary approvals can lead to serious consequences. Obtaining the proper license ensures your business operates legally, responsibly, and sustainably.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                            {[
                                "Monetary fines imposed by regulatory authorities",
                                "Suspension or closure of recycling operations",
                                "Legal action for non-compliance",
                                "Loss of business credibility"
                            ].map((issue, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-lg flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#005a9c]"></div>
                                    <span className="text-[16px] text-slate-700">{issue}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FoodRecyclingLicense = () => {
    const faqs = [
        {
            question: "Is a Food Recycling License mandatory in India?",
            answer: "Yes, businesses involved in collecting or processing food waste for recycling must obtain the appropriate approvals from relevant authorities."
        },
        {
            question: "Can restaurants apply for a Food Recycling License?",
            answer: "Restaurants that operate their own recycling or composting units may require this license depending on the scale of operations."
        },
        {
            question: "Is inspection required before approval?",
            answer: "Yes, in many cases regulatory authorities may conduct facility inspections to verify compliance."
        },
        {
            question: "How Long Does It Take to Get a Food Recycling License?",
            answer: "On average, the process may take 15 to 30 working days, depending on completeness of documentation, scale of recycling operations, and inspection requirements by authorities."
        },
        {
            question: "Can Vyombiz assist with the entire registration process?",
            answer: "Yes. Vyombiz managed by Clink Consultancy Services Private Limited provides complete support from documentation to license approval."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Food Recycling"
                heroTitleSuffix="License Registration"
                heroSubtitle="Turn food waste into a responsible resource — legally."
                heroDescription="Get expert assistance for Food Recycling License registration and stay compliant with food safety and environmental regulations in India. Start your Food Recycling License application today."
                whatsIncludedList={[
                    "End-to-End Documentation",
                    "Expert Compliance Support",
                    "Fast & Hassle-Free Process",
                    "Operation Standard Verification",
                    "Inspection Readiness",
                    "Affordable & Transparent Pricing"
                ]}
                stats={[
                    { count: "40%", label: "Food Wasted", icon: <Recycle size={20} /> },
                    { count: "19%", label: "Recycling Rate", icon: <Leaf size={20} /> },
                    { count: "SPCB", label: "Granting Authority", icon: <Building2 size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<FoodRecyclingOverview />}
                advantages={<FoodRecyclingAdvantages />}
                eligibility={<FoodRecyclingEligibility />}
                documents={<FoodRecyclingDocuments />}
                process={<FoodRecyclingProcess />}
                features={<FoodRecyclingFeatures />}
                postCompliance={<FoodRecyclingCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FoodRecyclingLicense;

