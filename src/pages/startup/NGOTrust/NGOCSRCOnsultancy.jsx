import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
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
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Social Impact
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO CSR Consultancy – <span className="text-[#005a9c]">Maximize Your Reach</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz provides specialized assistance in aligning the mission of non-governmental organizations with corporate social responsibility (CSR) goals of companies. We offer expert guidance to enhance the reach and impact of NGOs.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Section 135 of the Companies Act, 2013 mandates certain companies to contribute 2% of their average net profit towards CSR. This opens up significant funding opportunities for eligible NGOs to drive social change. Our consultancy helps you navigate legal and financial obligations, connecting you with professionals in the sector.
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Social Impact
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of CSR Consultancy
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        How our services empower your NGO.
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
                        { title: "Access to Funding", desc: "Connect with potential sources for financial support and guidance on fund utilization." },
                        { title: "Platform for Advocacy", desc: "Gain a larger platform to advocate for your cause and increase connections." },
                        { title: "Strategic Collaboration", desc: "Collaborate easily with social causes and amplify your impact on a larger scale." },
                        { title: "Enhanced Credibility", desc: "Increase credibility with stakeholders, attracting future potential donors." },
                        { title: "Networking Opportunities", desc: "Expand your network to establish new collaborations and funding avenues." },
                        { title: "Long-term Sustainability", desc: "Build capacity, manage resources, and ensure the long-term viability of your NGO." }
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
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Essential Registrations for CSR Funding?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To apply for CSR funding, it's essential to understand the prerequisites first.
                    Prerequisites for CSR Funding are mentioned below-
                </p>

                {/* 80G Registration */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        80G Registration
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Entitles donors to 50% tax exemption. Essential for attracting corporate funding.
                    </p>
                </div>

                {/* 12A Registration */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        12A Registration
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Exempts the NGO's income from taxation. A one-time registration for Trusts/NGOs.
                    </p>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">NGO Registration – </span>
                        Basic registration as a Trust, Society, or Section 8 Company.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">FCRA Registration – </span>
                        Mandatory for accepting foreign contributions and CSR funding from foreign companies.
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

const CSRConsultancyDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for CSR-1 Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register for CSR funding, you need to submit the following documents.
                    Essential documents for registering to receive CSR funds are mentioned below:
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
            desc: "Advisory on legal requirements, taxation, 12A, and 80G registration."
        },
        {
            title: "Compliance Guidance",
            desc: "Ensuring all compliance requirements are met as per authority standards."
        },
        {
            title: "Application Filing",
            desc: "Timely submission of application forms and required documents."
        },
        {
            title: "Documentation",
            desc: "Compiling and verifying documents to prevent delays and rejections."
        },
        {
            title: "Procedural Support",
            desc: "Guidance through 12A, 80G, FCRA, and other procedural formalities."
        },
        {
            title: "Monitoring",
            desc: "Regular monitoring and evaluation to ensure ongoing compliance."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your CSR Journey Now
                            </button>
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
            desc: "Access to a vast network of CAs, CS, and legal experts for comprehensive guidance."
        },
        {
            title: "Proven Track Record",
            desc: "Experience in successfully providing CSR consulting to numerous NGOs."
        },
        {
            title: "Transparent Process",
            desc: "Clear pricing and transparent processes with no hidden costs."
        },
        {
            title: "Technology Driven",
            desc: "Efficacy through technological approaches for smooth service delivery."
        },
        {
            title: "Client Satisfaction",
            desc: "High client satisfaction rate with dedicated support throughout."
        },
        {
            title: "Comprehensive Care",
            desc: "End-to-end support from registration to funding and compliance."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
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
            answer: "A public trust registered under Section 12A and 80G, or a Section 8 company engaged in equivalent operations for at least three years can apply for CSR funding."
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
                heroDescription="Vyombiz offers expert CSR consultancy to help non-profit organizations align with corporate missions, ensure compliance, and secure funding for sustainable growth."
                whatsIncludedList={[
                    "Strategic CSR Planning & Advocacy",
                    "CSR-1 Registration & Compliance",
                    "Funding & Grant Application Support",
                    "Impact Assessment & Reporting"
                ]}
                stats={[
                    { count: "100+", label: "NGOs Assisted", icon: <Users size={20} /> },
                    { count: "50Cr+", label: "CSR Funds Facilitated", icon: <TrendingUp size={20} /> },
                    { count: "99%", label: "Compliance Success", icon: <CheckCircle size={20} /> }
                ]}
            />
            <TrustedBrands />
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
