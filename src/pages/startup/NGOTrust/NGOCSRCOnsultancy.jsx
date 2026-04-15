import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import overview from "../../../assets/ngo1/NGO CSR Consultancy Services/overview.png"
import benefits from "../../../assets/ngo1/NGO CSR Consultancy Services/benefits.png"
import process from "../../../assets/ngo1/NGO CSR Consultancy Services/process.png"
/**
 * NGOCSRCOnsultancy Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/ngo-csr-consultancy
 */

const CSROverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Social Impact
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO CSR Consultancy – <span className="text-yellow-400">Expand Your Impact</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz offers specialized consultancy to help non-governmental organizations align their mission with the CSR objectives of companies. Our experts provide strategic guidance to increase the reach and effectiveness of NGO initiatives.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Under Section 135 of the Companies Act, 2013, eligible companies are required to spend 2% of their average net profit on CSR activities. This requirement creates valuable funding opportunities for qualified NGOs working toward social development. Our consultancy helps NGOs manage legal and financial requirements while connecting them with CSR funding opportunities.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="NGO CSR Consultancy Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const NGOCSRConsultancyAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Social Impact
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of CSR Consultancy
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        How our CSR consultancy services support NGO growth.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="CSR Consultancy Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Access to Funding", desc: "Access potential CSR funding sources and receive guidance on proper fund utilization." },
                        { title: "Platform for Advocacy", desc: "Expand your platform to promote social causes and build stronger partnerships." },
                        { title: "Strategic Collaboration", desc: "Partner with organizations and companies to create larger social impact initiatives." },
                        { title: "Enhanced Credibility", desc: "Strengthen credibility with stakeholders and attract more donors and partners." },
                        { title: "Networking Opportunities", desc: "Build professional networks that open doors for collaboration and funding opportunities." },
                        { title: "Long-term Sustainability", desc: "Improve resource management and strengthen the long-term sustainability of your organization." }
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

const CSRConsultancyEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Essential Registrations for CSR Funding?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before applying for CSR funding, it is important to understand the required registrations.
                    The key prerequisites for CSR funding are listed below.
                </p>

                {/* 80G Registration */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        80G Registration
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Provides tax benefits to donors and helps NGOs attract corporate contributions.
                    </p>
                </div>

                {/* 12A Registration */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        12A Registration
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Allows NGOs to receive income tax exemption on their charitable activities.
                    </p>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">NGO Registration – </span>
                        The organization must be registered as a Trust, Society, or Section 8 Company.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">FCRA Registration – </span>
                        Required for NGOs that wish to receive foreign donations or contributions.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Check Your Eligibility Now
                            </Link>
                </div>

            </div>
        </section>
    );
};

const CSRConsultancyDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for CSR-1 Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The following documents are required to apply for CSR registration.
                    Key documents required for CSR funding registration include:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">NGO's PAN Card – </span>
                            PAN Card of the NGO/Trust/Society.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Registration Certificate – </span>
                            Copy of Registration Certificate of the NGO.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">12A and 80G Certificates – </span>
                            12A and 80G Registration Certificates.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card of Authorized Person – </span>
                            PAN Card of the authorized signatory.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Digital Signature (DSC) – </span>
                            Digital Signature Certificate of Authorized Person.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Governing Body Details – </span>
                            Details of Governing Body Members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Contact Details – </span>
                            Contact Number and Email ID.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">CSR Policy – </span>
                            CSR Policy of the Company (if applicable).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">CSR Report – </span>
                            CSR Report (if applicable).
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const CSRConsultancyProcessSection = () => {
    const steps = [
        {
            title: "Legal & Financial",
            desc: "Expert advice on legal structure, taxation, and required registrations such as 12A and 80G."
        },
        {
            title: "Compliance Guidance",
            desc: "Ensuring that all regulatory and compliance requirements are properly fulfilled."
        },
        {
            title: "Application Filing",
            desc: "Submitting applications and documents to the appropriate authorities on time."
        },
        {
            title: "Documentation",
            desc: "Preparing and verifying documents carefully to avoid rejection or delays."
        },
        {
            title: "Procedural Support",
            desc: "Support with procedures related to 12A, 80G, FCRA, and other legal requirements."
        },
        {
            title: "Monitoring",
            desc: "Continuous monitoring to maintain compliance with CSR regulations."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Our CSR Consultancy Services
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Comprehensive CSR Consultancy Solutions for your NGO's growth and compliance.
                        The step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="CSR Consultancy Process"
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
                                Start Your CSR Journey Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const CSRConsultancyFeaturesSection = () => {
    const features = [
        {
            title: "Expert Team",
            desc: "Access to experienced CAs, CS professionals, and legal advisors for expert guidance."
        },
        {
            title: "Proven Track Record",
            desc: "Proven experience in assisting NGOs with CSR consultancy services."
        },
        {
            title: "Transparent Process",
            desc: "Transparent pricing structure with clear processes and no hidden charges."
        },
        {
            title: "Technology Driven",
            desc: "Technology-driven processes for efficient and smooth service delivery."
        },
        {
            title: "Client Satisfaction",
            desc: "High client satisfaction with dedicated support at every stage."
        },
        {
            title: "Comprehensive Care",
            desc: "Complete assistance from registration to CSR funding and compliance management."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of NGO CSR Consultancy Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our CSR consultancy services help NGOs align with corporate missions, ensure compliance,
                        and secure funding for sustainable growth.
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

const NGOCSRCOnsultancy = () => {

    const faqs = [
        {
            question: "Which Nonprofit Can Apply for CSR?",
            answer: "NGOs registered as Trusts, Societies, or Section 8 Companies with valid 12A and 80G registrations are generally eligible to apply for CSR funding."
        },
        {
            question: "Can a newly founded NGO submit a CSR application?",
            answer: "Yes, but they must first register with the Registrar of Companies (ROC) and then apply for CSR-1 registration with the Ministry of Corporate Affairs (MCA)."
        },
        {
            question: "What are the advantages of an NGO registering for CSR?",
            answer: "Registering for CSR allows NGOs to obtain financing and support from businesses for their social and development projects, as mandated by the Companies Act, 2013."
        },
        {
            question: "Is 80G required for CSR?",
            answer: "While not strictly mandatory for Form CSR-1, it is highly advised that NGOs have valid 80G and 12A registrations before applying to ensure eligibility for funding."
        },
        {
            question: "How to get CSR funding for NGO?",
            answer: "To get CSR funding, NGOs must research potential donors, prepare project-related documents and action plans, and ensure all compliances like 12A, 80G, and CSR-1 are in place."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO CSR Consultancy"
                heroTitleSuffix="Services"
                heroSubtitle="Unlock CSR Funding Opportunities for Your NGO"
                heroDescription="Vyombiz provides professional CSR consultancy to help NGOs align with corporate social responsibility goals, maintain compliance, and access funding opportunities for long-term growth."
                whatsIncludedList={[
                    "Strategic CSR Planning & Advocacy",
                    "CSR-1 Registration & Compliance",
                    "Funding & Grant Application Support",
                    "Impact Assessment & Reporting"
                ]}
                stats={[
                    { count: "100+", label: "NGOs Supported", icon: <Users size={20} /> },
                    { count: "₹50Cr+", label: "CSR Funds Enabled", icon: <TrendingUp size={20} /> },
                    { count: "99%", label: "Compliance Accuracy", icon: <CheckCircle size={20} /> }
                ]}
            />
            <TalkExpert expertise="Expertise in NGO CSR Consultancy" />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CSROverview />}
                advantages={<NGOCSRConsultancyAdvantages />}
                eligibility={<CSRConsultancyEligibility />}
                documents={<CSRConsultancyDocumentsSection />}
                process={<CSRConsultancyProcessSection />}
                features={<CSRConsultancyFeaturesSection />}
            />
            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about NGO CSR Consultancy"
                faqs={faqs}
            />

        </div>
    );
};

export default NGOCSRCOnsultancy;

