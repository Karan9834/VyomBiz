import React from "react";

import { Link } from "react-router-dom";
import { Building2, ShieldCheck, CheckCircle2, Handshake } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Government Registration/rera-registration/benefits.jpg";
import overview from "../../../assets/Government Registration/rera-registration/overview.jpeg";
import process from "../../../assets/Government Registration/rera-registration/process.jpg";

const RERAOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Real Estate Regulation
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is RERA Registration?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Real Estate (Regulation and Development) Act, 2016 (RERA) was introduced by the Government of India to regulate the real estate sector and protect the interests of homebuyers. It ensures transparency, accountability, and efficiency in real estate transactions.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Under this law, real estate developers and agents must register their projects with the respective state RERA authority before advertising or selling properties.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            RERA registration ensures that property buyers receive accurate project information, timely possession, and legal protection against fraudulent practices.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses seeking expert support for compliance can rely on Vyombiz managed by Clink Consultancy Services Private Limited to simplify the entire registration process and ensure adherence to regulatory requirements.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="RERA Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const RERAAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Trust & Transparency
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why RERA Registration is Important
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering under RERA offers multiple advantages for both developers and buyers.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="RERA Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Compliance", desc: "Developers must register projects under RERA before marketing or selling property units." },
                        { title: "Buyer Confidence", desc: "RERA registration increases transparency, improving buyer trust and credibility." },
                        { title: "Transparency in Project Details", desc: "Developers must disclose project timelines, approvals, land details, and financial information." },
                        { title: "Reduced Disputes", desc: "RERA creates a clear regulatory framework for dispute resolution between buyers and developers." },
                        { title: "Better Market Reputation", desc: "Registered developers gain stronger credibility in the real estate market." }
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

const RERAEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs RERA Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    RERA registration is mandatory for several entities involved in real estate activities.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Real Estate Developers</h3>
                        <p className="text-[16px] text-slate-600">Builders launching residential or commercial projects exceeding the specified land or unit limits.</p>
                    </div>
                    <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Real Estate Agents</h3>
                        <p className="text-[16px] text-slate-600">Individuals or businesses facilitating property transactions between buyers and sellers.</p>
                    </div>
                    <div className="bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Promoters</h3>
                        <p className="text-[16px] text-slate-600">Entities responsible for project planning, marketing, and construction.</p>
                    </div>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Projects That Require RERA Registration
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                        Real estate projects must be registered if they meet the following criteria:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>The project area exceeds 500 square meters</li>
                        <li>The project involves more than 8 residential units</li>
                        <li>The project is under construction and has not received completion certification</li>
                        <li>Any new residential or commercial real estate development</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-4 italic">
                        Projects that do not fall under these categories may be exempt depending on state regulations.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Registration Process
                    </Link>
                </div>
            </div>
        </section>
    );
};

const RERADocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for RERA Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To successfully register a project under RERA, developers must submit various legal and project-related documents.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Promoter Details</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>PAN card and address proof</li>
                            <li>Company registration details</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Project Details</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Approved building plans</li>
                            <li>Layout plans and project specifications</li>
                            <li>Land ownership documents</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Financial Details</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Estimated project cost</li>
                            <li>Funding sources</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Legal Documents</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Encumbrance certificate</li>
                            <li>Development agreements (if applicable)</li>
                        </ul>
                    </div>
                </div>
                
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Submitting accurate documentation helps ensure faster approval from the RERA authority.
                </p>
            </div>
        </section>
    );
};

const RERAProcessSection = () => {
    const steps = [
        { title: "Document Preparation", desc: "Collect all project approvals, legal documents, and promoter details." },
        { title: "Online Application", desc: "Submit the RERA registration application through the respective state RERA portal." },
        { title: "Document Verification", desc: "The authority reviews project details, land documents, and financial disclosures." },
        { title: "Payment of Registration Fee", desc: "Applicable registration fees must be paid as per project type and size." },
        { title: "RERA Certificate Issuance", desc: "Once approved, the authority issues a RERA Registration Number, allowing the project to be marketed and sold legally." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step RERA Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The RERA registration process involves several important steps. Businesses can simplify this process with the professional assistance of Vyombiz managed by Clink Consultancy Services Private Limited, ensuring proper documentation and timely submission.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="RERA Registration Process"
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

                        <div className="mt-12 text-center">
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

const RERAFeaturesSection = () => {
    const features = [
        { title: "Expert Legal Guidance", desc: "Industry professionals help ensure all regulatory requirements are met." },
        { title: "End-to-End Support", desc: "From document preparation to application filing and follow-ups." },
        { title: "Accurate Documentation", desc: "Properly structured filings reduce rejection risks." },
        { title: "Faster Approval Process", desc: "Efficient handling of paperwork ensures quicker registration." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for RERA Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Choosing the right compliance partner can make the registration process faster and smoother. Businesses across India rely on Vyombiz managed by Clink Consultancy Services Private Limited for professional support in navigating regulatory registrations with ease.
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
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4">RERA Registration Fees</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            The registration fees depend on the type of project and the total project area. Since fee structures vary by state, consulting experts ensures accurate filing and cost estimation.
                        </p>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-4">
                            <li><span className="font-semibold text-[#072b47]">Residential Projects:</span> Fees are calculated per square meter of project area.</li>
                            <li><span className="font-semibold text-[#072b47]">Commercial Projects:</span> Usually charged at a higher rate than residential projects.</li>
                            <li><span className="font-semibold text-[#072b47]">Mixed-Use Projects:</span> Charges may vary based on residential and commercial components.</li>
                        </ul>
                    </div>

                    <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4">Penalties for Non-Compliance</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            Failure to comply with RERA regulations can result in significant penalties. Ensuring proper compliance helps developers avoid regulatory issues and financial risks.
                        </p>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-4">
                            <li>Financial penalties up to 10% of project cost</li>
                            <li>Possible imprisonment for repeated violations</li>
                            <li>Restrictions on project marketing and sales</li>
                            <li>Legal disputes with buyers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const RERARaegistration = () => {
    const faqs = [
        {
            question: "Is RERA registration mandatory for all real estate projects?",
            answer: "No. Projects below certain size limits or those already completed may not require registration. However, most new real estate developments must comply with RERA regulations."
        },
        {
            question: "How long does RERA registration take?",
            answer: "The approval timeline depends on the state authority and document verification process but typically ranges between 15 to 30 days."
        },
        {
            question: "Can real estate agents operate without RERA registration?",
            answer: "No. Real estate agents must obtain RERA registration to legally facilitate property transactions."
        },
        {
            question: "What happens if a project is not registered under RERA?",
            answer: "Unregistered projects cannot be legally marketed or sold and may face penalties under the act."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="RERA Registration Made Simple"
                heroTitleSuffix="for Real Estate Projects"
                heroSubtitle="Stay compliant, build buyer trust, and launch your real estate project legally with seamless RERA Registration support."
                heroDescription="Get expert assistance with documentation, filing, and approval so you can focus on building and selling your property."
                whatsIncludedList={[
                    "End-to-end RERA compliance",
                    "Expert documentation support",
                    "Fast & reliable filing process"
                ]}
                stats={[
                    { count: "Compliance", label: "A-Z", icon: <CheckCircle2 size={20} /> },
                    { count: "Expert", label: "Support", icon: <Building2 size={20} /> },
                    { count: "Fast", label: "Filing", icon: <Handshake size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<RERAOverview />}
                advantages={<RERAAdvantages />}
                eligibility={<RERAEligibility />}
                documents={<RERADocumentsSection />}
                process={<RERAProcessSection />}
                features={<RERAFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions (FAQs)"
                subtitle="Clear your doubts regarding RERA registration and compliance."
                faqs={faqs}
            />
        </div>
    );
};

export default RERARaegistration;

