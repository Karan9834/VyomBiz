import React from "react";

import { Link } from "react-router-dom";
import { ShieldCheck, Anchor, TrendingUp, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import overview from "../../../assets/Government Registration/iec-registration/overview.jpg";
import benefits from "../../../assets/Government Registration/iec-registration/benefits.jpg";
import process from "../../../assets/Government Registration/iec-registration/process.jpeg";

const IECOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Trade
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is IEC Registration?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Import Export Code (IEC) is a mandatory 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT) for businesses involved in importing or exporting goods and services from India.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-3">
                            Without an IEC, a business cannot legally carry out international trade activities such as:
                        </p>
                        <ul className="space-y-2 mb-6 ml-4 list-disc text-[17px] text-slate-600 leading-relaxed font-medium">
                            <li>Importing products from foreign suppliers</li>
                            <li>Exporting goods to international markets</li>
                            <li>Receiving foreign currency payments for exported services</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Once issued, the IEC remains valid for a lifetime and does not require renewal. However, businesses must update details annually on the DGFT portal.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses choosing professional assistance from Vyombiz managed by Clink Consultancy Services Private Limited benefit from a smooth application process, accurate documentation, and faster approvals.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="IEC Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const IECAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Trade Expansion
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why IEC Registration is Important
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        IEC registration is the first step for entering global markets. It enables businesses to expand beyond domestic boundaries and tap into international trade opportunities.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="IEC Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Lifetime Validity", desc: "IEC registration is issued once and remains valid for the lifetime of the entity." },
                        { title: "No Compliance Burden", desc: "Unlike many registrations, IEC has minimal compliance requirements." },
                        { title: "Access Global Markets", desc: "Sell products and services internationally without regulatory hurdles." },
                        { title: "Export Incentives", desc: "Businesses can avail benefits under various export promotion schemes." },
                        { title: "Easy International Payments", desc: "Required for receiving payments in foreign currency through banks." },
                        { title: "Build Global Brand Presence", desc: "Establish credibility with overseas buyers and international marketplaces." }
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

const IECEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs an Import Export Code?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    IEC registration is required by any individual or business planning to engage in cross-border trade.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Entities Eligible for IEC Registration
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Proprietorship Businesses</li>
                        <li>Partnership Firms</li>
                        <li>Limited Liability Partnerships (LLP)</li>
                        <li>Private Limited Companies</li>
                        <li>One Person Companies (OPC)</li>
                        <li>Exporters and Importers</li>
                        <li>E-commerce sellers selling globally</li>
                        <li>Service exporters receiving foreign payments</li>
                    </ul>
                </div>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Even freelancers or consultants exporting services internationally may require IEC to receive foreign remittances.
                </p>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Import Export Journey Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

const IECDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for IEC Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The documentation required for IEC registration is minimal and depends on the type of business entity.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">For Individuals / Proprietorship</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>PAN Card of the applicant</li>
                            <li>Aadhaar Card or identity proof</li>
                            <li>Address proof</li>
                            <li>Bank account details</li>
                            <li>Cancelled cheque</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">For Companies / LLP / Partnerships</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>PAN Card of the business entity</li>
                            <li>Certificate of Incorporation / Partnership Deed</li>
                            <li>Address proof of business</li>
                            <li>Bank account proof</li>
                            <li>Digital Signature (if applicable)</li>
                        </ul>
                    </div>
                </div>

                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Our experts at Vyombiz managed by Clink Consultancy Services Private Limited ensure that all documentation is correctly prepared to avoid delays or rejection.
                </p>
            </div>
        </section>
    );
};

const IECProcessSection = () => {
    const steps = [
        { title: "Document Collection", desc: "Provide basic business details and required documents for verification." },
        { title: "Application Preparation", desc: "Experts prepare and review the IEC application." },
        { title: "Application Filing with DGFT", desc: "The application is submitted on the DGFT portal for approval." },
        { title: "IEC Certificate Issued", desc: "Once approved, the IEC certificate is generated and shared with the applicant." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        IEC Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The IEC registration process is fully online through the DGFT portal and typically completed within a few working days when documentation is accurate.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="IEC Registration Process"
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
                                Apply for IEC Registration Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const IECFeaturesSection = () => {
    const features = [
        { title: "Expert Consultation", desc: "Expert consultation from compliance specialists." },
        { title: "End-to-End Support", desc: "End-to-end documentation support throughout the registration journey." },
        { title: "Fast Processing", desc: "Fast application processing and submission." },
        { title: "Transparent Pricing", desc: "Transparent service process with no hidden fees." },
        { title: "Dedicated Support", desc: "Dedicated client support handling all your queries." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for IEC Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Getting IEC registration through experts ensures faster approvals and error-free filing. Businesses that choose Vyombiz managed by Clink Consultancy Services Private Limited benefit from professional guidance throughout the registration journey.
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
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4">IEC Registration Fees in India</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            IEC registration involves a government fee and professional service fee depending on the service provider. The total cost may vary based on documentation requirements and additional compliance assistance.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed">
                            Businesses working with Vyombiz managed by Clink Consultancy Services Private Limited receive transparent pricing and end-to-end support during the registration process.
                        </p>
                    </div>

                    <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4">IEC Registration Compliance</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            Although IEC has lifetime validity, businesses must comply with certain requirements:
                        </p>
                        <ul className="space-y-2 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-4">
                            <li>Annual IEC update on the DGFT portal</li>
                            <li>Updating changes in business details</li>
                            <li>Maintaining proper export/import records</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed">
                            Failure to update IEC details annually may lead to deactivation of the code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const IECRegistration = () => {
    const faqs = [
        {
            question: "Is IEC mandatory for importing personal goods?",
            answer: "No, if the import or export of goods is strictly for personal use and not meant for trade, manufacture, or agriculture, an IEC code is generally not required according to customs exemptions."
        },
        {
            question: "Do I need to renew my IEC every year?",
            answer: "No, an IEC code issued is valid for a lifetime. However, recent DGFT mandates suggest entities must electronically update their IEC details annually (often between April to June) even if there are no data changes."
        },
        {
            question: "Can an individual person apply for an IEC Code?",
            answer: "Yes, an individual acting as a Sole Proprietor can perfectly apply for an Import Export Code using their own individual PAN card."
        },
        {
            question: "Does an IEC apply to services exports like software?",
            answer: "Yes, IEC holds equal importance for individuals heavily executing cross-border software services or IT consultancy when dealing with substantial benefits structured under the Foreign Trade Policy."
        },
        {
            question: "How long does it take for the DGFT to issue the certificate?",
            answer: "Typically, if the submitted forms match exact PAN databases flawlessly accompanied by correctly verified addresses via DSC logic, DGFT generates the registration immediately. Manual verifications might take 10-15 working days."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Import Export Code"
                heroTitleSuffix="(IEC) Registration"
                heroSubtitle="Import Export Code (IEC) Registration Made Simple"
                heroDescription="Start your global trade journey with a hassle-free IEC Registration. Get your Import Export Code from DGFT quickly with expert assistance."
                whatsIncludedList={[
                    "100% Online Process",
                    "Expert Documentation Support",
                    "Quick IEC Certificate Delivery",
                    "Dedicated Consultation"
                ]}
                stats={[
                    { count: "100%", label: "Online", icon: <Anchor size={20} /> },
                    { count: "DGFT", label: "Approved", icon: <ShieldCheck size={20} /> },
                    { count: "10+ Yrs", label: "Expertise", icon: <TrendingUp size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<IECOverview />}
                advantages={<IECAdvantages />}
                eligibility={<IECEligibility />}
                documents={<IECDocumentsSection />}
                process={<IECProcessSection />}
                features={<IECFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions (FAQs)"
                subtitle="Clear up common doubts regarding the Import Export Code."
                faqs={faqs}
            />
        </div>
    );
};

export default IECRegistration;

