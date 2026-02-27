import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefit1 from "../../../assets/ngo1/12AA Registration/benefits1.png"
import benefit2 from "../../../assets/ngo1/12AA Registration/benefits2.png"
import overview from "../../../assets/ngo1/12AA Registration/overview.png"

/**
 * 12AARegistration Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/12aa-registration
 */

const Registration12AAOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Tax Exemption
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            12AA Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Section 12AA of the Income Tax Act, 1961 details the procedure for registering a trust, society, or non-profit organization. 12AA Registration is mandatory for such organizations to be eligible for tax exemptions on surplus income. Non-profit organizations play a pivotal role in societal development, and 12AA registration ensures their operations are regulated and transparent.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why 12AA is important?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Without 12AA registration, an NGO's income is treated as normal business income and is fully taxable. Registration under this section ensures that the income applied for charitable or religious purposes is exempt from tax.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="12AA Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Registration12AAAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Tax Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Section 12AA Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Empowering NGOs with financial and operational benefits.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefit1}
                            alt="12AA Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Tax Exemptions", desc: "Exemption on income generated from charitable and religious activities, saving substantial funds." },
                        { title: "Encouraging Donations", desc: "Donors are more likely to contribute to registered NGOs as it often pairs with 80G tax benefits for them." },
                        { title: "Foreign Funds Eligibility", desc: "Prerequisite for FCRA registration to receive foreign contributions legally." },
                        { title: "Transparency & Credibility", desc: "Enhances credibility as the organization undergoes rigorous verification by the Income Tax Department." },
                        { title: "Qualified Staff", desc: "Tax savings allow NGOs to offer better salaries and hire qualified professionals." },
                        { title: "Government Grants", desc: "Registered NGOs are preferred for government funding, grants, and schemes." }
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

const Registration12AAEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for 12AA Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To apply for 12AA Registration in India, it's essential to understand the eligibility criteria first.
                    The eligibility criteria for 12AA registration are mentioned below-
                </p>

                {/* Charitable Nature */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Charitable Nature
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Purpose –
                            </span>{" "}
                            The organization must function for a charitable or religious purpose without profit motive.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Activities –
                            </span>{" "}
                            Activities must align with charitable objectives like education, healthcare, poverty alleviation, etc.
                        </li>
                    </ul>
                </div>

                {/* Legal Structure */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Legal Structure
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust – </span>
                            Must be registered as a Trust under the Indian Trusts Act, 1882.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Society – </span>
                            Must be registered as a Society under the Societies Registration Act, 1860.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Section 8 Company – </span>
                            Must be registered as a Section 8 Company under the Companies Act, 2013.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Proper Documentation – </span>
                        Must maintain proper books of accounts and audit reports.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Spending Requirement – </span>
                        Income must be applied for charitable purposes in India (at least 85%).
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">No Private Benefit – </span>
                        Funds or assets should not benefit the trustees or members personally.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const Registration12AADocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for 12AA Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for 12AA Registration, you need to submit the following documents along with Form 10A.
                    The complete checklist for 12AA Registration Application is mentioned below:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust Deed / Memorandum of Association (MoA) – </span>
                            Original or certified copy of the Trust Deed or MoA.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Articles of Association (AoA) – </span>
                            Required for Section 8 Company registration.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Registration Certificate – </span>
                            Copy of the NGO's registration certificate (Trust/Society/Section 8).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of the NGO/Trust/Society.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Address Proof – </span>
                            Utility Bill (Electricity/Water) or Rent Agreement with NOC from landlord.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Financial Statements – </span>
                            Income & Expenditure Statements and Balance Sheet for the last 3 years (if applicable).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Trustees/Members List – </span>
                            List of Trustees/Members with their ID proofs (PAN, Aadhaar).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Activity Report – </span>
                            Note on activities of the Trust/NGO describing its charitable work.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const Registration12AAProcessSection = () => {
    const steps = [
        {
            title: "Document Prep",
            desc: "Prepare Trust Deed, PAN, financial statements, and other KYC documents required for the application."
        },
        {
            title: "Form 10A Filing",
            desc: "Submit Form 10A online to the Commissioner of Income Tax through the income tax e-filing portal."
        },
        {
            title: "Verification",
            desc: "IT officers scrutinize the application and may ask for clarifications or additional documents."
        },
        {
            title: "Field Inspection",
            desc: "Officer may visit the NGO premises to verify existence and activities mentioned in the application."
        },
        {
            title: "Approval",
            desc: "Commissioner approves and issues the 12AA Registration Certificate upon satisfaction."
        },
        {
            title: "Compliance",
            desc: "Maintain accounts and file annual returns to retain the tax-exempt status."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for 12AA Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for 12AA registration in India involves structured documentation,
                        regulatory approvals, and compliance with statutory requirements. The
                        step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={benefit2}
                            alt="12AA Registration Process"
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
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your 12AA Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const Registration12AAFeaturesSection = () => {
    const features = [
        {
            title: "Documentation Support",
            desc: "We assist in preparing and organizing all required documents for seamless 12AA registration."
        },
        {
            title: "Expert Consultation",
            desc: "Professional advice on best practices and legal requirements from experienced CAs and tax experts."
        },
        {
            title: "Hassle-free Filing",
            desc: "We handle the end-to-end application process including Form 10A filing and follow-ups."
        },
        {
            title: "Post-Registration Support",
            desc: "Continuous guidance on compliance, renewals, and maintaining tax-exempt status."
        },
        {
            title: "Cost-effective Solutions",
            desc: "Pocket-friendly packages saving you money and effort while ensuring quality service."
        },
        {
            title: "Holistic Solutions",
            desc: "One-stop shop for 12A, 80G, FCRA, and CSR registrations with integrated support."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of 12AA Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        12AA registration provides tax exemptions, regulatory compliance framework,
                        and eligibility for various statutory benefits in India.
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

const Registration12AA = () => {

    const faqs = [
        {
            question: "How do I get a 12AA certificate?",
            answer: "To get a 12AA certificate, you need to prepare documents like Trust Deed and PAN card, submit Form 10A online, undergo verification and potential field inspection by the Income Tax officer, and upon approval, receive the registration certificate."
        },
        {
            question: "What are the records needed during Section 12AA registration?",
            answer: "Key records include Trust Deed/MoA, PAN Card, Financial Statements, Activity Reports, Board Member Details, Bank Account Statements, Donation records, and Annual Reports."
        },
        {
            question: "Is 12AA registration mandatory for NGOs?",
            answer: "Yes, obtaining 12AA registration is mandatory for NGOs, Trusts, and Societies to avail tax exemptions on their surplus income under the Income Tax Act."
        },
        {
            question: "Can I receive foreign funds with 12AA registration?",
            answer: "12AA registration is a prerequisite, but to receive foreign funds, you primarily need FCRA registration. However, 12AA is essential for tax exemption on those funds."
        },
        {
            question: "What happens if 12AA registration is cancelled?",
            answer: "If 12AA registration is cancelled, the NGO loses its tax-exempt status, and its income becomes taxable at maximum marginal rates."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="12AA Registration"
                heroTitleSuffix="Online in India"
                heroSubtitle="Secure Tax Exemptions for Your NGO"
                heroDescription="Get 12AA Registration online to secure tax exemptions and enhance your NGO’s credibility with Vyombiz expert support. We assist with documentation, application filing, and compliance for quick approval."
                whatsIncludedList={[
                    "Expert Assistance for Form 10A Filing",
                    "Guidance on Documentation & Compliance",
                    "End-to-End Support till Certificate Issuance",
                    "Post-Registration Compliance Advisory"
                ]}
                stats={[
                    { count: "10,000+", label: "NGOs Assisted", icon: <Users size={20} /> },
                    { count: "15+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "Rs 50Cr+", label: "Tax Saved", icon: <TrendingUp size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<Registration12AAOverview />}
                advantages={<Registration12AAAdvantages />}
                eligibility={<Registration12AAEligibility />}
                documents={<Registration12AADocumentsSection />}
                process={<Registration12AAProcessSection />}
                features={<Registration12AAFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about 12AA Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Registration12AA;
