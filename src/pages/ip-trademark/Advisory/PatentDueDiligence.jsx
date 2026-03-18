import React from "react";
import { FileText, CheckCircle, Shield, Search, TrendingUp, AlertTriangle, FileCheck, Users, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import due from "../../../assets/IP & Trademark/Advisory/patent-due-diligence/due.jpeg";
import overview from "../../../assets/IP & Trademark/Advisory/patent-due-diligence/overview.jpeg";
import process from "../../../assets/IP & Trademark/Advisory/patent-due-diligence/process.jpg";

const PatentDueDiligenceOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Intellectual Property Advisory
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of <span className="text-[#005a9c]">Patent Due Diligence</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Patent due diligence refers to the systematic examination of one or more patents to evaluate their value, risks, and legal status in relation to business objectives. The scope and depth of the due diligence process can vary depending on the purpose of the evaluation.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Offensive due diligence focuses on identifying whether other companies are infringing your patents and whether the patents can generate revenue through licensing, commercialization, or transfer. This involves reviewing competitor products and analyzing potential infringement risks.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Defensive due diligence helps determine whether your business has the freedom to operate without infringing on existing patents. It also helps identify potential risks before launching new products or technologies.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Patent Due Diligence Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const PatentDueDiligenceEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Why is Patent Due Diligence Important?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Depending on the goal of the evaluation, due diligence may be performed at any moment during the patient's lifetime. The uses of patent due diligence are as follows:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Responding to Legal Notices
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        When a company receives a cease-and-desist notice or infringement claim, due diligence helps evaluate the validity of the claim and plan an appropriate response.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Before Filing a Patent Application
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Due diligence reviews are often conducted before filing a patent application to identify prior art and evaluate the novelty of the invention.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Business Transactions
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Patent due diligence is essential during licensing deals, acquisitions, pledging, mergers, or preparing for an IPO.
                    </p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mt-16 mb-6">
                    Challenges in Patent Due Diligence
                </h2>
                <div className="space-y-4">
                    {[
                        { title: "Undiscovered Risks", desc: "There may be unknown patents or prior art that could affect the enforceability of a patent." },
                        { title: "Initial Portfolio Assessment", desc: "Evaluating the scope, strength, and technological relevance of a patent portfolio requires a quick yet accurate analysis." },
                        { title: "Identifying Key Risks", desc: "Critical patents and potential problems such as shared ownership or maintenance issues must be carefully reviewed." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#e11d48] mt-2 shrink-0"></div>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                <span className="font-bold text-[#072b47]">{item.title}:</span> {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PatentDueDiligenceDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Key Elements of Patent Due Diligence
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Depending on your needs, the scope and depth of the patent due diligence analysis can change significantly. These are some of the elements needed:
                </p>
                <div className="space-y-4">
                    {[
                        { title: "Patent Validity Analysis", desc: "Evaluation of patent claims, prior art references, and patentable subject matter to determine enforceability." },
                        { title: "Product Infringement Assessment", desc: "Comparison of product specifications with patent claims to evaluate infringement risks." },
                        { title: "Ownership and Maintenance Verification", desc: "Reviewing title chains, assignments, and fee payments to ensure patent validity." },
                        { title: "Agreement Review", desc: "Review confidentiality agreements, employee assignments, and licensing agreements." }
                    ].map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                <span className="font-bold text-[#072b47]">{doc.title}:</span> {doc.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PatentDueDiligenceProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Patent Due Diligence Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The due diligence review procedure has four distinct stages. The steps in the patent due diligence process are as follows:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {[
                            { title: "Planning", desc: "Define the scope, objectives, timeline, and resources required for the due diligence review." },
                            { title: "Data Collection", desc: "Gather relevant information such as patent ownership details, litigation records, and licensing agreements." },
                            { title: "Patent Evaluation", desc: "Analyze patent claims, legal validity, technology scope, and perform freedom-to-operate (FTO) searches." },
                            { title: "Due Diligence Report", desc: "Prepare a comprehensive report summarizing risks, strengths, and strategic recommendations." }
                        ].map((step, idx) => (
                            <div key={idx} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    Step {idx + 1}.
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
                    </div>
                </div>
            </div>
        </section>
    );
};

const PatentDueDiligenceFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz for Patent Due Diligence?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert due diligence support.
                    </p>
                </div>
                <div>
                    {[
                        { title: "10,000+ Legal & Compliance Experts", desc: "A strong network of professionals ensures accurate evaluation and reliable advice." },
                        { title: "Free Initial Consultation", desc: "Get expert insights into your intellectual property position through a quick consultation." },
                        { title: "Simplified Compliance Support", desc: "We help manage intellectual property compliance and documentation smoothly." },
                        { title: "Trusted by Businesses Worldwide", desc: "Our due diligence services support startups, enterprises, and investors across industries." }
                    ].map((feature, idx) => (
                        <div key={idx} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {idx + 1}.
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

const PatentDueDiligence = () => {

    const faqs = [
        {
            question: "What is patent due diligence?",
            answer: "Patent due diligence is the process of analyzing patents to evaluate their legal status, value, ownership, and potential risks before business decisions such as acquisitions, licensing, or product launches."
        },
        {
            question: "What is the main goal of conducting due diligence?",
            answer: "The main goal of due diligence is for the buyer to investigate and gather sufficient information about the target asset, organisation, or business in order to make an opinion on such topics prior to making a purchase."
        },
        {
            question: "Who performs the due diligence?",
            answer: "Always conduct due diligence with the assistance of your lawyer, business advisor, or accountant."
        },
        {
            question: "What does a due diligence checklist consist of?",
            answer: "An organised manner to show the examiner a company you are acquiring through a merger, sale, or other method is through a due diligence checklist."
        },
        {
            question: "Describe FTO Search?",
            answer: "Freedom to Operate (FTO) searches give the patentee or its licensee the assurance that they can commercialise the patented invention."
        }
    ];

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Strategic Evaluation
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Key Information Required for Patent Due Diligence
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Evaluating patent strength naturally requires intensive scrutiny of documentation. Here are areas analyzed during information gathering.
                    </p>

                    <div className="mt-10">
                        <img
                            src={due}
                            alt="Data Analysis"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Patent Ownership Details", desc: "It is essential to verify patent ownership since some patents may be jointly owned, which can create complications during transfers or licensing." },
                        { title: "Litigation History", desc: "Any previous patent disputes or litigation must be reviewed to identify possible legal risks." },
                        { title: "Patent Protection Status", desc: "This analysis determines the legal coverage, geographic scope, and remaining validity of the patent." },
                        { title: "Inventor Assignment Records", desc: "Documentation confirming that inventors have legally transferred their rights to the organization." },
                        { title: "Confidentiality Agreements", desc: "Legal agreements that ensure the invention and proprietary information remain protected." },
                        { title: "Licensing Agreements", desc: "Existing licensing arrangements must be reviewed to understand restrictions, royalties, and ownership rights." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                        >
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

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            <HeroLayout
                heroTitleMain="Patent Due Diligence"
                heroTitleSuffix="Advisory Services"
                heroSubtitle="Assess Value & Mitigate Risks"
                heroDescription="Comprehensive analysis of patent portfolios to support business decisions such as mergers, acquisitions, and licensing."
                whatsIncludedList={[
                    "Validity & Enforceability Analysis",
                    "Freedom to Operate (FTO) Search",
                    "Ownership & Title Verification",
                    "Infringement Risk Assessment"
                ]}
                stats={[
                    { count: "10,000+", label: "Industry Experts", icon: <Users size={20} /> },
                    { count: "99%", label: "Evaluation Accuracy", icon: <CheckCircle size={20} /> },
                    { count: "International", label: "IP Coverage", icon: <TrendingUp size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<PatentDueDiligenceOverview />}
                advantages={advantagesContent}
                eligibility={<PatentDueDiligenceEligibility />}
                documents={<PatentDueDiligenceDocumentsSection />}
                process={<PatentDueDiligenceProcessSection />}
                features={<PatentDueDiligenceFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Patent Due Diligence"
                faqs={faqs}
            />

        </div>
    );
};

export default PatentDueDiligence;
