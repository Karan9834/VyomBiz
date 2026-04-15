import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Calendar,
    AlertTriangle
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/FSSAI & Eating License/fssai-annual-return/benefits.png";
import impt from "../../../assets/FSSAI & Eating License/fssai-annual-return/imp.png";
import process from "../../../assets/FSSAI & Eating License/fssai-annual-return/process.jpg";

const FssaiAnnualReturnOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Mandatory Compliance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is an <span className="text-yellow-400">FSSAI Annual Return?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The FSSAI Annual Return is a mandatory compliance requirement for food businesses holding an FSSAI license. It is a yearly report submitted to the Food Safety and Standards Authority of India (FSSAI) that provides details about the food products manufactured, handled, imported, or sold during the financial year.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            This return helps regulatory authorities track the movement, production, and distribution of food products to ensure food safety standards are maintained across the country.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses that fail to submit their annual return within the prescribed timeline may face penalties and compliance issues. This is why many businesses prefer expert assistance from platforms like Vyombiz managed by Clink Consultancy Services Private Limited to ensure timely and accurate filing.
                        </p>

                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4 mt-8">Types of FSSAI Returns</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-4">
                            Food businesses may need to file different types of returns depending on their operations.
                        </p>
                        <ul className="space-y-4 text-[17px] text-slate-600 leading-relaxed mb-6">
                            <li>
                                <strong className="text-[#072b47]">Form D1 – Annual Return:</strong> This return must be filed annually by food manufacturers and importers before 31st May. It includes quantity of food products manufactured, category-wise product details, import information, and sales data.
                            </li>
                            <li>
                                <strong className="text-[#072b47]">Form D2 – Half-Yearly Return:</strong> This return applies specifically to manufacturers and importers of milk and milk products. It must be submitted every six months.
                            </li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Understanding the correct return format is essential to avoid filing errors. Businesses often rely on Vyombiz managed by Clink Consultancy Services Private Limited for accurate compliance handling.
                        </p>

                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={impt}
                            alt="FSSAI Annual Return Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturnAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Timely Filing
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Timely filing ensures that your business remains compliant with FSSAI regulations and avoids unnecessary penalties.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="FSSAI Annual Return Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Avoid Late Penalties", desc: "Filing before the 31st May deadline helps you avoid the ₹100 per day penalty." },
                        { title: "Legal Safety", desc: "Consistent filing prevents regulatory scrutiny and potential license suspension during inspections." },
                        { title: "Smooth Operations", desc: "Remaining compliant means your food manufacturing and distribution operations run without disruption." },
                        { title: "Brand Credibility", desc: "A flawless compliance record builds trust with consumers and business partners." },
                        { title: "Easier Renewals", desc: "A strong filing history ensures a simple and smooth FSSAI license renewal process." }
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

const FssaiAnnualReturnEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs to File an FSSAI Annual Return?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    FSSAI annual return filing is mandatory for certain categories of food businesses operating under an FSSAI license. These typically include:
                </p>
                <div className="mb-6">
                    <ul className="list-disc pl-6 space-y-3 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>Food manufacturers</li>
                        <li>Food importers and exporters</li>
                        <li>Food processors</li>
                        <li>Food packaging units</li>
                        <li>Food re-labelers</li>
                        <li>Storage units handling food products</li>
                    </ul>
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    However, certain businesses such as restaurants, retailers, distributors, and transporters are generally not required to file annual returns unless they are also involved in manufacturing or importing food products.
                </p>
                <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                    If your business is involved in food production or import activities, filing the annual return becomes a compulsory compliance requirement.
                </p>
            </div>
        </section>
    );
};

const FssaiAnnualReturnDocuments = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Information Required for Filing FSSAI Annual Return
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To file the return accurately, businesses must gather essential operational details from the previous financial year. These include:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>FSSAI license number</li>
                        <li>Details of food products manufactured or handled</li>
                        <li>Quantity of products produced or imported</li>
                        <li>Purchase and sales data</li>
                        <li>Details of exported products (if applicable)</li>
                        <li>Business operational information</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Preparing this data in advance ensures smooth and accurate filing.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturnProcess = () => {
    const steps = [
        { step: "01", title: "Data Collection", desc: "Gather all production, import, and sales details for the financial year." },
        { step: "02", title: "Return Preparation", desc: "Prepare the required return form (Form D1 or D2) based on your business category." },
        { step: "03", title: "Verification & Documentation", desc: "Verify all details to ensure accuracy and regulatory compliance." },
        { step: "04", title: "Submission to Authority", desc: "Submit the completed return to the designated FSSAI authority before the deadline." },
        { step: "05", title: "Compliance Confirmation", desc: "Once submitted, maintain records of the filing for future compliance and audits." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to File FSSAI Annual Return
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Filing an FSSAI return involves several procedural steps that must be completed accurately. Many businesses prefer expert support from Vyombiz managed by Clink Consultancy Services Private Limited to avoid errors and ensure seamless compliance.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="Filing Procedure"
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

const FssaiAnnualReturnFeatures = () => {
    const features = [
        { title: "Expert Support", desc: "Professional assistance ensures returns are prepared accurately and filed on time." },
        { title: "Regulatory Compliance", desc: "Compliance with the latest FSSAI regulations to avoid penalties." },
        { title: "Risk Reduction", desc: "Reduced risk of errors and late fees through timely filing." },
        { title: "Time-Saving", desc: "Efficient processes that save you time so you can focus on business growth." },
        { title: "Expert Guidance", desc: "Continuous guidance on food business compliance and regulations." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Professional Help for FSSAI Return Filing?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        FSSAI compliance can be complex, especially for businesses managing large volumes of production or imports. Vyombiz managed by Clink Consultancy Services Private Limited offers expert support to simplify compliance procedures.
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

const FssaiAnnualReturnCompliance = () => {
    const compliance = [
        "₹100 per day late filing fee until submission",
        "License suspension or cancellation for continuous non-compliance",
        "Increased regulatory scrutiny during future inspections",
        "Loss of brand credibility and trust among partners",
        "Potential legal actions and operational disruptions"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Penalty for Late Filing of FSSAI Annual Return
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Failure to submit the FSSAI annual return within the prescribed deadline can lead to financial penalties and legal risks. Maintaining timely compliance protects your food business from operational disruptions.
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
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturn = () => {
    const faqs = [
        {
            question: "Is filing an FSSAI annual return mandatory?",
            answer: "Yes. Food manufacturers and importers holding an FSSAI license must file an annual return to remain compliant with regulatory requirements."
        },
        {
            question: "What is the due date for filing the FSSAI annual return?",
            answer: "The return must be filed before 31st May for the previous financial year."
        },
        {
            question: "What happens if the return is filed late?",
            answer: "A penalty of ₹100 per day is charged until the return is submitted."
        },
        {
            question: "Do restaurants need to file an FSSAI annual return?",
            answer: "Generally, restaurants and retailers are not required to file annual returns unless they are involved in food manufacturing or importing."
        },
        {
            question: "Can professionals file the FSSAI return on behalf of my business?",
            answer: "Yes. Many businesses choose compliance service providers like Vyombiz managed by Clink Consultancy Services Private Limited to handle return filing accurately and on time."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI Annual"
                heroTitleSuffix="Return Filing"
                heroSubtitle="Stay compliant with food safety regulations and avoid penalties"
                heroDescription="If your food business holds an FSSAI license, filing your annual return is mandatory. Let experts handle the paperwork while you focus on running your business. Accurate Filing. Timely Compliance. Zero Hassle."
                whatsIncludedList={[
                    "Form D-1 & D-2 Preparation",
                    "Complete Document Support",
                    "Due Date Tracking",
                    "FSSAI Portal Submission",
                    "Expert Compliance Assistance",
                    "Penalty Avoidance"
                ]}
                stats={[
                    { count: "May 31st", label: "Due Date", icon: <Calendar size={20} /> },
                    { count: "₹100/day", label: "Late Penalty", icon: <AlertTriangle size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <ShieldCheck size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiAnnualReturnOverview />}
                advantages={<FssaiAnnualReturnAdvantages />}
                eligibility={<FssaiAnnualReturnEligibility />}
                documents={<FssaiAnnualReturnDocuments />}
                process={<FssaiAnnualReturnProcess />}
                features={<FssaiAnnualReturnFeatures />}
                postCompliance={<FssaiAnnualReturnCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiAnnualReturn;

