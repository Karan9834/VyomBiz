import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
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
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Tax Compliance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO Income Tax Advisory – <span className="text-[#005a9c]">Navigate with Experts</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Managing tax compliance is critical for the sustainability of any NGO. Vyombiz offers expert advisory services to help non-governmental organizations navigate the intricate terrain of Income Tax laws in India. Our bespoke solutions focus on your NGO's unique needs, ensuring you obtain necessary registrations like 12A and 80G efficiently.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Proper tax planning not only safeguards the NGO's tax-exempt status but also builds credibility with donors and stakeholders, ensuring transparency in financial reporting. We assist in enhancing tax compliance, preventing penalties, and optimizing available exemptions.
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Tax Compliance
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Our Advisory
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        How we add value to your NGO operations.
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
                        { title: "Tax Efficiency", desc: "Maximize exemptions and reduce tax liabilities through strategic planning." },
                        { title: "Full Compliance", desc: "Ensure adherence to all latest provisions to avoid fines and loss of status." },
                        { title: "Admin Relief", desc: "Reduce the administrative burden of tax filings and documentation." },
                        { title: "Time Saving", desc: "Free up valuable time to focus on your core social mission." },
                        { title: "Risk Mitigation", desc: "Proactively identify and address potential compliance risks." },
                        { title: "Expert Support", desc: "Access to a dedicated team of CAs and tax professionals." }
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
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Key Registrations Required?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To optimize tax liabilities for NGOs, it's essential to understand the key registrations.
                    Essential registrations for Tax Exemptions are mentioned below-
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
                            Exempts the NGO's surplus income from income tax. Fundamental for any NGO.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                80G Registration –
                            </span>{" "}
                            Allows donors to claim tax deductions, encouraging philanthropic contributions.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Form 10A/10AB – </span>
                        Required for registration and renewal of the above exemptions.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Tax Audit (Form 10B) – </span>
                        Mandatory if total income exceeds the exemption limit.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Get Tax Advisory Support Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const IncomeTaxAdvisoryDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Service Scope
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Our comprehensive tax advisory services cover all aspects of NGO tax compliance.
                    Our comprehensive advisory covers:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Eligibility Assessment – </span>
                            Eligibility Assessment for Exemptions under various sections.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Preparation & Filing of ITR-7 – </span>
                            Complete assistance with Income Tax Return filing.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Form 10A/10BD Filing – </span>
                            Assistance with Form 10A/10BD Filing for registrations.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Representation – </span>
                            Representation before Tax Authorities for queries and notices.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">FCRA Guidance – </span>
                            Guidance on Foreign Contributions (FCRA) tax implications.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Books of Accounts – </span>
                            Maintenance of Books of Accounts as per tax requirements.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Compliance Reviews – </span>
                            Periodic Compliance Reviews to ensure ongoing compliance.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Recent Amendments – </span>
                            Advisory on Recent Amendments (e.g., Finance Act 2020).
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
            desc: "Analyze your NGO's current status and compliance gaps."
        },
        {
            title: "Strategy",
            desc: "Develop a tailored tax planning and compliance strategy."
        },
        {
            title: "Execution",
            desc: "Assist with registrations, filings, and documentation."
        },
        {
            title: "Monitoring",
            desc: "Continuous monitoring of changes in tax laws affecting NGOs."
        },
        {
            title: "Reporting",
            desc: "Ensure timely submission of audit reports and returns."
        },
        {
            title: "Support",
            desc: "Ongoing support for notices or queries from the tax department."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Tax Advisory Now
                            </button>
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
        <section className="w-full py-14 bg-white">
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
            answer: "NGOs registered under Section 12A are eligible for a complete exemption from income tax. Without this registration, they are liable to pay tax at normal rates."
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
                heroDescription="Maximize your NGO's benefits with Vyombiz's expert income tax advisory. We help you navigate complex tax structures, secure exemptions, and maintain compliance with Government of India regulations."
                whatsIncludedList={[
                    "Strategic Tax Planning & Advisory",
                    "Assistance with 12A & 80G Registrations",
                    "Tax Return Filing (ITR-7) Support",
                    "Compliance Monitoring & Audit Support"
                ]}
                stats={[
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "400+", label: "Tax Experts", icon: <Users size={20} /> },
                    { count: "99%", label: "SLA Delivery", icon: <CheckCircle size={20} /> }
                ]}
            />
            <TrustedBrands />
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
