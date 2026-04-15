import React from "react";

import { Link } from "react-router-dom";
import { Building2, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Government Registration/nsic-registration/benefits.jpg";
import overview from "../../../assets/Government Registration/nsic-registration/overview.jpg";
import process from "../../../assets/Government Registration/nsic-registration/process.jpg";

const NSICOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            MSME Growth
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is NSIC Registration?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            NSIC Registration is a certification provided by the National Small Industries Corporation (NSIC) that enables Micro and Small Enterprises (MSEs) to participate in government procurement programs with special benefits.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The registration is issued under the Single Point Registration Scheme (SPRS) which allows MSMEs to supply goods and services to government departments and public sector undertakings without going through complex tender procedures.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With NSIC registration, businesses gain greater credibility, easier access to government tenders, and financial advantages that support business expansion.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited assists MSMEs in obtaining NSIC certification efficiently while ensuring compliance with all regulatory requirements.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="NSIC Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const NSICAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Single Point Registration
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of NSIC Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        NSIC registration offers multiple advantages that help MSMEs compete effectively in the government procurement ecosystem.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="NSIC Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Access to Government Tenders", desc: "Registered MSMEs can participate in government tenders without paying tender document fees in many cases." },
                        { title: "Earnest Money Deposit (EMD) Exemption", desc: "NSIC registered businesses often receive exemption from EMD requirements during tender participation." },
                        { title: "Preference in Government Procurement", desc: "Many government tenders prioritize MSMEs with NSIC certification." },
                        { title: "Marketing and Business Support", desc: "NSIC provides marketing assistance, exhibitions, and vendor development programs for registered businesses." },
                        { title: "Financial Assistance", desc: "Businesses may gain access to credit facilitation and financial support programs." },
                        { title: "Improved Business Credibility", desc: "NSIC certification strengthens the reputation of MSMEs when dealing with government agencies and large organizations." }
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

const NSICEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility for NSIC Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    To apply for NSIC registration, a business must meet certain criteria:
                </p>

                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>The enterprise must be classified as a Micro or Small Enterprise under MSME</li>
                        <li>The business must have valid Udyam Registration</li>
                        <li>The company must be actively involved in manufacturing or service activities</li>
                        <li>The enterprise should have proper infrastructure and production capability</li>
                        <li>The business must maintain proper financial records and operational history</li>
                    </ul>
                </div>

                <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 mt-10">
                    <h3 className="text-2xl font-semibold text-[#072b47] mb-4">Who Should Apply for NSIC Registration?</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                        NSIC registration is beneficial for various types of MSMEs including:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Manufacturing units supplying products to government departments</li>
                        <li>Service providers working with government organizations</li>
                        <li>Small businesses seeking access to public sector procurement</li>
                        <li>MSMEs looking to expand through government contracts</li>
                        <li>Startups entering government vendor ecosystems</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Verify Your Eligibility
                    </Link>
                </div>
            </div>
        </section>
    );
};

const NSICDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for NSIC Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The following documents are generally required during the NSIC registration process:
                </p>

                <div className="mb-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                        <li>Udyam Registration Certificate</li>
                        <li>PAN Card of the business entity</li>
                        <li>GST Registration Certificate</li>
                        <li>Business Address Proof</li>
                        <li>Bank Account Details and Cancelled Cheque</li>
                        <li>Financial Statements or Balance Sheets</li>
                        <li>List of Machinery or Equipment</li>
                        <li>Details of Products or Services offered</li>
                        <li>Quality Certification (if applicable)</li>
                    </ul>
                </div>
                
                <p className="text-[17px] text-slate-600 leading-relaxed">
                    Proper documentation ensures faster verification and approval. Vyombiz managed by Clink Consultancy Services Private Limited helps businesses organize and verify all documents before submission to avoid delays.
                </p>
            </div>
        </section>
    );
};

const NSICProcessSection = () => {
    const steps = [
        { title: "Application Preparation", desc: "Business details and documents are collected and verified before submission." },
        { title: "Online Application Submission", desc: "The application is submitted through the official NSIC portal." },
        { title: "Document Verification", desc: "NSIC authorities review the documents and eligibility criteria." },
        { title: "Technical Inspection", desc: "In some cases, NSIC may conduct an inspection of the business premises to verify operational capability." },
        { title: "Certification Issuance", desc: "After successful verification, the NSIC Registration Certificate is issued." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        NSIC Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The NSIC registration process involves several verification and approval stages. With professional assistance, the process becomes smooth and efficient.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="NSIC Registration Process"
                            className="w-full rounded-lg shadow-sm sticky top-32"
                        />
                    </div>

                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    Step {index + 1}
                                </div>
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
                        <div className="border-t border-slate-200"></div>

                        <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                            Experts from Vyombiz managed by Clink Consultancy Services Private Limited guide businesses throughout every step of the registration journey.
                        </p>

                        <div className="mt-8 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const NSICFeaturesSection = () => {
    const features = [
        { title: "Expert Legal Guidance", desc: "Professional experts ensure your application meets all regulatory requirements." },
        { title: "Fast and Hassle-Free Process", desc: "Streamlined workflows help reduce delays in approval." },
        { title: "Complete Documentation Support", desc: "All paperwork is reviewed and prepared accurately." },
        { title: "Transparent Pricing", desc: "Clear service structure with no hidden costs." },
        { title: "End-to-End Assistance", desc: "From application preparation to certification approval, every stage is managed efficiently." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for NSIC Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Registering with NSIC requires careful documentation, compliance checks, and coordination with authorities. Professional support ensures faster approvals and avoids common mistakes. Vyombiz managed by Clink Consultancy Services Private Limited provides structured assistance for businesses looking to obtain NSIC certification.
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                <ShieldCheck size={20} className="text-yellow-400" />
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

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4">NSIC vs MSME Registration</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            Many businesses confuse MSME registration with NSIC registration, but they serve different purposes:
                        </p>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-4">
                            <li><strong>MSME (Udyam) Registration</strong> identifies a business as a micro, small, or medium enterprise.</li>
                            <li><strong>NSIC Registration</strong> allows these businesses to participate in government procurement programs with special benefits.</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed">
                            Both registrations together provide a strong foundation for MSMEs to grow in the public sector market.
                        </p>
                    </div>

                    <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4">How Long Does NSIC Registration Take?</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            The time required for NSIC registration depends on the completeness of documents and verification procedures.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            Typically, the process may take <strong>15 to 30 working days</strong>, including application review and inspection if required.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed">
                            Working with professionals ensures faster documentation preparation and smoother approvals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const NSICRegistration = () => {
    const faqs = [
        {
            question: "Is NSIC registration and MSME registration the same?",
            answer: "No, MSME (Udyam) Registration primarily recognizes entities under the central act functionally setting baseline scale, whereas NSIC registration is a subsequent explicit commercial scheme (SPRS) targeting structural government tenders inherently omitting earnest deposits."
        },
        {
            question: "What is the exact validity of the NSIC Certificate?",
            answer: "The authorized permanent NSIC certificate explicitly maintains operating validity for exactly 2 years securely, obligating firms to process timely renewals tracking new financials systematically validating plant operations."
        },
        {
            question: "Do startup entities qualify without 1 year of financial records?",
            answer: "Yes, micro and small industries incapable of deploying 1 year of formal revenue audits can firmly apply to successfully obtain a structural Provisional NSIC registration certificate accessing schemes dynamically."
        },
        {
            question: "What are the common government fees for NSIC?",
            answer: "Registration fees natively match turnover rates scaling from Rs 3,000 to Rs 5,000 per crore. Additionally, physical inspection mandates strictly add Rs 2,000-3,000 depending primarily on the factory tier capacities comprehensively mapped."
        },
        {
            question: "How long is the entire NSIC registration process timeline?",
            answer: "Upon filing rigorous financial profiles securely backed with plant declarations, verifications track through massive scrutiny systems intrinsically delivering issued certificates across 30 applying to 45 days efficiently."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NSIC Registration"
                heroTitleSuffix=""
                heroSubtitle="Unlock Government Opportunities for Your MSME"
                heroDescription="Register with NSIC and gain access to government tenders, financial support, and business growth opportunities designed exclusively for MSMEs. Get your NSIC Registration quickly and compliantly with expert assistance from Vyombiz managed by Clink Consultancy Services Private Limited."
                whatsIncludedList={[
                    "Access Government Tenders",
                    "Earnest Money (EMD) Exemption",
                    "Complete Documentation Support",
                    "End-to-End Assistance"
                ]}
                stats={[
                    { count: "10+", label: "Years Exp", icon: <TrendingUp size={20} /> },
                    { count: "5000+", label: "Clients", icon: <CheckCircle2 size={20} /> },
                    { count: "358+", label: "Reserved Tenders", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<NSICOverview />}
                advantages={<NSICAdvantages />}
                eligibility={<NSICEligibility />}
                documents={<NSICDocumentsSection />}
                process={<NSICProcessSection />}
                features={<NSICFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on NSIC Registration"
                subtitle="Dismantling crucial operational boundaries effectively separating MSME domains."
                faqs={faqs}
            />
        </div>
    );
};

export default NSICRegistration;

