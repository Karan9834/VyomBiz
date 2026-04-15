import React from "react";

import { Link } from "react-router-dom";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/ngo1/NGO Income Tax Advisory Services/benefits.png"
import overview from "../../../assets/ngo1/NGO Income Tax Advisory Services/overview.png"
import process from "../../../assets/ngo1/NGO Income Tax Advisory Services/process.png"


/**
 * NGOIncomeTaxAdvisory Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/ngo-income-tax-advisory
 */

const IncomeTaxOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Tax Compliance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO Income Tax Advisory – <span className="text-yellow-400">Expert Guidance</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Proper tax compliance is essential for the long-term sustainability of any NGO. Vyombiz provides expert advisory services to help NGOs understand and comply with the Income Tax regulations in India. Our customized solutions help NGOs obtain key registrations such as 12A and 80G while ensuring proper compliance.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Effective tax planning protects your NGO’s tax-exempt status and strengthens trust among donors and stakeholders through transparent financial practices. Our experts help improve compliance, reduce the risk of penalties, and maximize available tax exemptions.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="NGO Income Tax Advisory Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const NGOIncomeTaxAdvisoryAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Tax Compliance
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Our Advisory
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        How our advisory services support your NGO operations.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Tax Advisory Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Tax Efficiency", desc: "Maximize available exemptions and reduce tax liabilities through effective planning." },
                        { title: "Full Compliance", desc: "Ensure compliance with the latest tax provisions to avoid penalties or loss of exemption status." },
                        { title: "Admin Relief", desc: "Minimize the administrative effort required for tax filings and documentation." },
                        { title: "Time Saving", desc: "Save valuable time so your NGO can focus on its social mission." },
                        { title: "Risk Mitigation", desc: "Identify and manage potential compliance risks before they become issues." },
                        { title: "Expert Support", desc: "Access to a dedicated team of chartered accountants and tax experts." }
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

const IncomeTaxAdvisoryEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Key Registrations Required?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To optimize tax benefits, NGOs must obtain certain important registrations.
                    The key registrations required for tax exemption are listed below.
                </p>

                {/* Key Registrations */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Tax Exemption Registrations
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                12A Registration –
                            </span>{" "}
                            Allows NGOs to claim exemption from income tax on surplus income.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                80G Registration –
                            </span>{" "}
                            Enables donors to claim tax deductions on donations made to the NGO.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Form 10A / 10AB – </span>
                        Required for applying and renewing tax exemption registrations.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Tax Audit (Form 10B) – </span>
                        Required when the NGO’s income exceeds the prescribed limit.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Get Tax Advisory Support Now
                            </Link>
                </div>

            </div>
        </section>
    );
};

const IncomeTaxAdvisoryDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Service Scope
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Our advisory services cover all major aspects of NGO tax compliance.
                    Our services include:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Eligibility Assessment – </span>
                            Evaluating eligibility for tax exemptions under relevant sections.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Preparation & Filing of ITR-7 – </span>
                            Full assistance with NGO income tax return filing.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Form Filing – </span>
                            Assistance with Form 10A and 10BD for exemption registrations.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Representation – </span>
                            Assistance in responding to queries or notices from tax authorities.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">FCRA Guidance – </span>
                            Guidance on tax implications related to foreign contributions under FCRA.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Books of Accounts – </span>
                            Maintaining books of accounts in accordance with tax regulations.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Compliance Reviews – </span>
                            Periodic reviews to ensure continuous compliance with tax regulations.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Recent Amendments – </span>
                            Guidance on recent amendments in income tax laws affecting NGOs.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const IncomeTaxAdvisoryProcessSection = () => {
    const steps = [
        {
            title: "Assessment",
            desc: "Evaluate your NGO’s current tax status and compliance gaps."
        },
        {
            title: "Strategy",
            desc: "Create a customized tax planning and compliance strategy."
        },
        {
            title: "Execution",
            desc: "Support registrations, filings, and necessary documentation."
        },
        {
            title: "Monitoring",
            desc: "Monitor changes in tax regulations relevant to NGOs."
        },
        {
            title: "Reporting",
            desc: "Ensure timely filing of audit reports and tax returns."
        },
        {
            title: "Support",
            desc: "Provide support for notices or queries from tax authorities."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How We Assist with Tax Advisory?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Our approach to Tax Advisory involves comprehensive assessment, strategy development,
                        and ongoing support. The step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="Income Tax Advisory Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Steps */}
                    <div className="lg:col-span-2">

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200"
                            >
                                {/* Step Number */}
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>

                                {/* Content */}
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

                        {/* Bottom border */}
                        <div className="border-t border-slate-200"></div>

                        {/* CTA */}
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Tax Advisory Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const IncomeTaxAdvisoryFeaturesSection = () => {
    const features = [
        {
            title: "Tailored Solutions",
            desc: "Advisory services customized to the specific nature and size of your NGO."
        },
        {
            title: "Technological Edge",
            desc: "Use of modern tools for efficient tracking and compliance management."
        },
        {
            title: "Proven Expertise",
            desc: "Years of experience in handling complex NGO tax matters."
        },
        {
            title: "Transparent Pricing",
            desc: "Clear fee structure with no hidden charges."
        },
        {
            title: "Timely Updates",
            desc: "Keep you informed about the latest regulatory changes."
        },
        {
            title: "Dedicated Staff",
            desc: "Personalized attention from our team of tax experts."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of NGO Income Tax Advisory Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our tax advisory services help NGOs optimize tax liabilities, ensure compliance,
                        and maximize benefits from various tax exemptions.
                    </p>
                </div>

                {/* Features Rows */}
                <div>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300"
                        >
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
            </div>
        </section>
    );
};

const NGOIncomeTaxAdvisory = () => {

    const faqs = [
        {
            question: "What is the NGO's income tax regulation?",
            answer: "NGOs registered under Section 12A can claim exemption from income tax on eligible income. Without this registration, NGOs are required to pay income tax at standard rates."
        },
        {
            question: "How can an NGO file its income tax return?",
            answer: "NGOs must file income returns using Form No. ITR-7 electronically with a digital signature within the timeframe specified under Section 139(1)."
        },
        {
            question: "What is the maximum tax exemption for donors?",
            answer: "Donors contributing to eligible NGOs under Section 80G can claim a deduction of either 50% or 100% of the donation amount from their taxable income."
        },
        {
            question: "Can NGOs be subject to a tax audit?",
            answer: "Yes, if the total income of an NGO exceeds the basic exemption limit (before claiming exemptions under 11 and 12), it must undergo a tax audit and submit Form 10B."
        },
        {
            question: "What distinguishes Form 80G from Form 12A?",
            answer: "Section 12A exemption applies to the NGO's own income, making it tax-free. Section 80G provides tax benefits to the donors making contributions to the NGO."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO Income Tax Advisory"
                heroTitleSuffix="Services"
                heroSubtitle="Optimize Tax Liabilities & Ensure Compliance for NGOs"
                heroDescription="Optimize your NGO’s tax benefits with Vyombiz expert income tax advisory. Our team helps you understand tax regulations, obtain exemptions, and maintain full compliance with Government of India requirements."
                whatsIncludedList={[
                    "Strategic Tax Planning & Advisory",
                    "Assistance with 12A & 80G Registrations",
                    "Tax Return Filing (ITR-7) Support",
                    "Compliance Monitoring & Audit Support"
                ]}
                stats={[
                    { count: "10+", label: "Years of Experience", icon: <Briefcase size={20} /> },
                    { count: "400+", label: "Tax Professionals", icon: <Users size={20} /> },
                    { count: "99%", label: "Timely Service Delivery", icon: <CheckCircle size={20} /> }
                ]}
            />
            <TalkExpert expertise="Expertise in NGO Income Tax Advisory" />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<IncomeTaxOverview />}
                advantages={<NGOIncomeTaxAdvisoryAdvantages />}
                eligibility={<IncomeTaxAdvisoryEligibility />}
                documents={<IncomeTaxAdvisoryDocumentsSection />}
                process={<IncomeTaxAdvisoryProcessSection />}
                features={<IncomeTaxAdvisoryFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries on NGO Income Tax"
                faqs={faqs}
            />

        </div>
    );
};

export default NGOIncomeTaxAdvisory;

