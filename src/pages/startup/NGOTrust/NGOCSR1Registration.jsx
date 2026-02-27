import React from "react";
import {
    Users,
    Briefcase,
    Building2,
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import overview from '../../../assets/ngo1/CSR-1 Registration/overview.png'
import benefits from '../../../assets/ngo1/CSR-1 Registration/benefits.png'
import process from '../../../assets/ngo1/CSR-1 Registration/process.png'
/**
 * CSR1Registration Page
 * Refactored to match TrustRegistration design.
 */

const CSR1Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Corporate Funding
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            CSR-1 Filing & Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Form CSR-1 is a mandatory registration form for NGOs, Trusts, and Section 8 Companies that intend to undertake Corporate Social Responsibility (CSR) activities funded by corporations. This registry allows the Ministry of Corporate Affairs (MCA) to monitor CSR spending effectively.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            By registering with the Central Government through Form CSR-1, your NGO acquires a unique CSR Registration Number, making it eligible to receive funding and grants from corporate entities complying with Section 135 of the Companies Act, 2013.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="CSR-1 Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CSR1RegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Corporate Funding
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of CSR-1 Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering your NGO via Form CSR-1 opens doors to sustainable funding and partnerships.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="CSR-1 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Corporate Funding", desc: "Gain legal eligibility to receive CSR funds from profitable companies in India." },
                        { title: "Enhanced Credibility", desc: "Being registered with the MCA boosts the NGO's goodwill and public image." },
                        { title: "Organized Database", desc: "Part of a central repository of CSR-implementing agencies, increasing visibility." },
                        { title: "Hassle-free Operations", desc: "Smooth processing of donations and compliance with less legal hurdles." },
                        { title: "Government Recognition", desc: "Official recognition by the Central Government as a valid CSR entity." },
                        { title: "Partner Eligibility", desc: "Become a preferred partner for corporates looking to outsource CSR projects." }
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

const CSR1Eligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Can File Form CSR-1?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To file Form CSR-1, it's essential to understand the eligibility criteria first.
                    Entities eligible to register for CSR funding are mentioned below-
                </p>

                {/* Registered Entities */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered Entities
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Section 8 Company –
                            </span>{" "}
                            Companies registered under Section 8 of the Companies Act, 2013.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Public Trust –
                            </span>{" "}
                            Registered Public Trusts with 12A and 80G registrations.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Registered Society –
                            </span>{" "}
                            Registered Societies with 12A and 80G registrations.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">State/Parliament Entity – </span>
                        Entity established under an Act of Parliament or State Legislature.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Track Record – </span>
                        3 years of established track record (for some private entities).
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Compliance – </span>
                        Must have valid PAN, 12A, and 80G registrations.
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

const CSR1DocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for CSR-1 Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To file Form CSR-1, you need to submit the following documents.
                    Essential documents for filing Form CSR-1 are mentioned below:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Certificate of Registration – </span>
                            Certificate of Registration of the NGO.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of the NGO.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">12A & 80G Approval Orders – </span>
                            Copies of 12A & 80G Approval Orders.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Trust Deed / MoA & AoA – </span>
                            Copy of Trust Deed or Memorandum and Articles of Association.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Resolution – </span>
                            Resolution for Authorized Signatory.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Members Details – </span>
                            Details of Members (Name, Email, PAN).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Digital Signature Certificate (DSC) – </span>
                            DSC of Signatory for online filing.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Contact Details – </span>
                            Valid Email ID & Mobile Number (OTP linked).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Activity Report – </span>
                            Activity Report for the last 3 years.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Certification – </span>
                            Certification by Practicing CA/CS/CMA.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const CSR1ProcessSection = () => {
    const steps = [
        {
            title: "Preparation",
            desc: "Gather documents & obtain Digital Signature Certificate (DSC) for authorized signatory."
        },
        {
            title: "Filing",
            desc: "Fill Form CSR-1 on MCA portal with all required details and documents."
        },
        {
            title: "Certification",
            desc: "CA/CS/CMA verifies and certifies the form before submission."
        },
        {
            title: "Approval",
            desc: "Unique CSR Registration Number is generated via email upon successful submission."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for CSR-1 Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for CSR-1 registration involves structured documentation,
                        online filing, and certification. The step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="CSR-1 Registration Process"
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
                                Start Your CSR-1 Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const CSR1FeaturesSection = () => {
    const features = [
        {
            title: "Expert DSC Assistance",
            desc: "Assistance in obtaining Digital Signatures for authorized signatories."
        },
        {
            title: "Professional Certification",
            desc: "Form certification by experienced CA/CS/CMA ensuring accuracy."
        },
        {
            title: "Correct Filing",
            desc: "Error-free data entry and submission to avoid rejections."
        },
        {
            title: "Quick Turnaround",
            desc: "Fast processing to get your CSR Registration Number quickly."
        },
        {
            title: "12A & 80G Guidance",
            desc: "Support with prerequisite registrations before CSR-1 filing."
        },
        {
            title: "Post-Registration Compliance",
            desc: "Guidance on ongoing CSR compliance and reporting requirements."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of CSR-1 Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        CSR-1 registration enables NGOs to receive corporate funding, enhances credibility,
                        and ensures compliance with MCA regulations.
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

const CSR1Registration = () => {
    const faqs = [
        {
            question: "What is Form CSR-1?",
            answer: "Form CSR-1 is a registration form that NGOs must file with the Ministry of Corporate Affairs (MCA) to register themselves for undertaking CSR activities funded by corporations."
        },
        {
            question: "Is CSR-1 registration mandatory for all NGOs?",
            answer: "Yes, w.e.f. April 1, 2021, it is mandatory for every NGO (Trust, Society, or Section 8 Company) to register with the Central Government via Form CSR-1 to accept CSR donations."
        },
        {
            question: "What is the timeline for CSR-1 registration?",
            answer: "The registration is usually processed immediately. Upon successful submission of Form CSR-1, a unique CSR Registration Number is generated automatically."
        },
        {
            question: "Can an NGO get CSR funding without 12A/80G?",
            answer: "Generally, no. Registration under Section 12A and 80G is a primary prerequisite for filing Form CSR-1 and receiving CSR funds."
        },
        {
            question: "What documents are needed for filing?",
            answer: "Key documents include the NGO's PAN card, Registration Certificate, 12A & 80G Approval Orders, and the Digital Signature Certificate (DSC) of the authorized signatory."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="CSR-1"
                heroTitleSuffix="Registration"
                heroSubtitle="Unlock Corporate Funding"
                heroDescription="Mandatory registration for NGOs to receive Corporate Social Responsibility (CSR) funding. We help you file Form CSR-1 with the MCA to unlock corporate grants and boost your credibility."
                whatsIncludedList={[
                    "Get Unique CSR Registration Number",
                    "Become Eligible for Corporate Funding",
                    "Expert DSC Assistance",
                    "Professional Certification by CA/CS"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}
            <TrustedBrands />

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CSR1Overview />}
                advantages={<CSR1RegistrationAdvantages />}
                eligibility={<CSR1Eligibility />}
                documents={<CSR1DocumentsSection />}
                process={<CSR1ProcessSection />}
                features={<CSR1FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Form CSR-1 Filing"
                faqs={faqs}
            />

        </div>
    );
};

export default CSR1Registration;
