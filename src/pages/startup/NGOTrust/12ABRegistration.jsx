import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * 12ABRegistration Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/12ab-registration
 */

const Registration12ABOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            New Provision
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            12AB Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Finance Act, 2020 introduced Section 12AB, replacing the earlier Section 12AA process. It mandates a new registration regime for all charitable and religious trusts to ensure better monitoring and compliance. Under this new scheme, all existing trusts registered under Section 12A or 12AA must re-register under Section 12AB.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Change
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Unlike the perpetual validity of the old 12AA registration, the 12AB registration is valid for a fixed period of 5 years and must be renewed subsequently. This ensures that the tax-exempt status is reviewed periodically.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1554224154-260327c00c4c?auto=format&fit=crop&q=80"
                            alt="12AB Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Registration12ABAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Compliance
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of 12AB Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why compliance with 12AB is crucial for your NGO.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                            alt="12AB Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Electronic Database", desc: "Creates a centralized digital record of all NGOs, removing issues of lost files or missing records." },
                        { title: "Tax Exemption Continuity", desc: "Ensures the NGO continues to enjoy tax exemptions on its surplus income." },
                        { title: "80G Approval", desc: "Mandatory for obtaining or renewing 80G approval, which encourages donor contributions." },
                        { title: "Legal Compliance", desc: "Adherence to the latest Finance Act amendments prevents penalties and loss of status." },
                        { title: "Transparency", desc: "Enhances trust with donors and government authorities through a transparent digital process." },
                        { title: "Systematic Verification", desc: "Streamlines the verification process for genuine charitable activities." }
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

const Registration12ABEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for 12AB Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To apply for 12AB Registration in India, it's essential to understand the eligibility criteria first.
                    Who must apply under Section 12AB is mentioned below-
                </p>

                {/* Existing Trusts */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Existing Trusts
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Migration Required –
                            </span>{" "}
                            Trusts/Societies already registered under Section 12A or 12AA must re-register under 12AB.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Validity Period –
                            </span>{" "}
                            Existing trusts re-registering get 5 years validity period.
                        </li>
                    </ul>
                </div>

                {/* New Applicants */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        New Applicants
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Newly Formed NGOs – </span>
                            Newly formed NGOs seeking tax exemption for the first time must apply under 12AB.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Provisional Registration – </span>
                            New applicants get provisional registration valid for 3 years, then convert to permanent.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Section 8 Companies – </span>
                            Non-profit companies registered under the Companies Act seeking tax benefits.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">80G Holders – </span>
                        Institutions holding 80G certificates must also align with 12AB provisions.
                    </p>
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

const Registration12ABDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for 12AB Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for 12AB Registration, you need to submit the following documents along with Form 10A.
                    The complete checklist for 12AB Registration is mentioned below:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust Deed / Memorandum of Association (MoA) – </span>
                            Original or certified copy of the Trust Deed or MoA.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Certificate of Incorporation / Registration Certificate – </span>
                            Copy of the NGO's registration certificate.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Copy of Old 12A/12AA Registration Certificate – </span>
                            Required for existing trusts migrating to 12AB.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of the NGO/Trust/Society.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN and Aadhaar of Trustees/Members – </span>
                            KYC documents of all trustees/members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Address Proof – </span>
                            Utility Bill (Electricity/Water) for Address Proof.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NOC from Landlord – </span>
                            Required if the office is rented.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Activity Report – </span>
                            Activity Report for the past 3 years or since inception.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Audited Accounts & ITR – </span>
                            Audited Accounts & ITR for the past 3 years.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const Registration12ABProcessSection = () => {
    const steps = [
        {
            title: "Login",
            desc: "Access the income tax e-filing portal with NGO credentials."
        },
        {
            title: "Form Selection",
            desc: "Select Form 10A for registration under Section 12AB."
        },
        {
            title: "Fill Details",
            desc: "Enter details of the trust, trustees, and past registration information."
        },
        {
            title: "Upload Docs",
            desc: "Upload self-attested copies of required documents."
        },
        {
            title: "Verification",
            desc: "Verify using Digital Signature Certificate (DSC) or EVC."
        },
        {
            title: "Approval",
            desc: "Receive the 12AB Order/Certificate after processing by the Income Tax Department."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for 12AB Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for 12AB registration in India involves structured documentation,
                        regulatory approvals, and compliance with statutory requirements. The
                        step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="12AB Registration Process"
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
                                Start Your 12AB Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const Registration12ABFeaturesSection = () => {
    const features = [
        {
            title: "Expert Guidance",
            desc: "Navigate new tax laws with ease using our professional support from experienced CAs and tax experts."
        },
        {
            title: "Timely Filing",
            desc: "Ensure your application is filed within the deadline to avoid lapse of tax-exempt status."
        },
        {
            title: "Documentation Help",
            desc: "We assist in collating and verifying all necessary documents for seamless registration."
        },
        {
            title: "Provisional to Permanent",
            desc: "Assistance in converting provisional registration to permanent registration after 3 years."
        },
        {
            title: "Comprehensive Support",
            desc: "Handling queries and clarifications from the IT department on your behalf."
        },
        {
            title: "Cost Effective",
            desc: "Affordable packages tailored for NGOs and charitable trusts with transparent pricing."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of 12AB Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        12AB registration provides tax exemptions, regulatory compliance framework,
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

const Registration12AB = () => {

    const faqs = [
        {
            question: "What is 12AB Registration?",
            answer: "Section 12AB is the new provision under the Income Tax Act, 1961, replacing Section 12AA. It mandates that all existing charitable trusts and institutions registered under 12A/12AA must re-register under 12AB to continue availing tax exemptions."
        },
        {
            question: "Who needs to apply for 12AB Registration?",
            answer: "All charitable and religious trusts, societies, and Section 8 companies that were previously registered under Section 12A or 12AA, as well as new applicants seeking tax exemption, must apply for 12AB registration."
        },
        {
            question: "What is the validity of 12AB Registration?",
            answer: "For existing trusts re-registering, the validity is 5 years. For new provisional registrations, it is 3 years, after which it must be converted to normal registration."
        },
        {
            question: "Is it mandatory to switch from 12AA to 12AB?",
            answer: "Yes, it is mandatory. The Finance Act 2020 requires all existing trusts to migrate to the new Section 12AB to retain their tax-exempt status."
        },
        {
            question: "What form is used for 12AB Registration?",
            answer: "Form 10A is used for applying for registration under Section 12AB online through the income tax e-filing portal."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="12AB Registration"
                heroTitleSuffix="for NGOs"
                heroSubtitle="Ensure Tax Exemption Compliance with New Provisions"
                heroDescription="Secure your NGO's future by re-registering under Section 12AB. Vyombiz provides expert assistance to help existing and new trusts navigate the new registration process smoothly and maintain tax-exempt status."
                whatsIncludedList={[
                    "Migration from 12A/12AA to 12AB",
                    "New Provisional Registration Support",
                    "Documentation & Form 10A Filing",
                    "Compliance Advisory for NGOs"
                ]}
                stats={[
                    { count: "5000+", label: "Trusts Migrated", icon: <Users size={20} /> },
                    { count: "100%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <Briefcase size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<Registration12ABOverview />}
                advantages={<Registration12ABAdvantages />}
                eligibility={<Registration12ABEligibility />}
                documents={<Registration12ABDocumentsSection />}
                process={<Registration12ABProcessSection />}
                features={<Registration12ABFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about 12AB Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Registration12AB;
