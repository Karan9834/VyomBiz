import React from "react";
import { FileText, CheckCircle, Shield, Search, TrendingUp, AlertTriangle, FileCheck, Users, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const PatentDueDiligenceOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            IP Advisory
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview on <span className="text-[#005a9c]">Patent Due Diligence</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Examining a patent or group of patents to support your business or company goals is the process of conducting patent due diligence. Depending on the circumstances that lead to the need for diligence, there are numerous ways in which due diligence for patents can be performed.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Finding out whether your patents are being violated by others or whether they can be made profitable through licensing or divestiture might be offensive. As a first step to enforcing your patents, offensive diligence may entail investigating the products of other businesses to see if any of them infringe.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The defensive aspect of patent due diligence includes determining if you have the freedom to operate in your upcoming business venture and determining whether you are infringing on others' patents.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
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
                    What purposes does patent due diligence serve?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Depending on the goal of the evaluation, due diligence may be performed at any moment during the patient's lifetime. The uses of patent due diligence are as follows:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Getting a letter of notice or a cease-and-desist letter
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The first thing you must do after receiving this letter on infringement is to gather information. You and your attorney would need to conduct their due diligence in order to determine the validity of the claim and to develop strategies.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Prior to submitting a patent application
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Prior to submitting an application for patent registration at this stage, Due Diligence Reviews are performed to review and seek prior art references, sometimes even before the invention's initial creation.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Transactions
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Due diligence is required for any transactions involving patents, whether they are for monetisation or otherwise (licensing, Acquisition, pledging, etc.). Merger and acquisition due diligence involves hiring experts from several fields, spending more time and money, and preparing for an IPO.
                    </p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mt-16 mb-6">
                    What is the difficulty in conducting due diligence?
                </h2>
                <div className="space-y-4">
                    {[
                        "Hidden Issues: It's possible that there are relevant Patents or Prior Art that was not really discovered or provided and that could have underlying concerns or problems.",
                        "A Short and Simple Evaluation of the Situation: The scope, the full strength of the portfolio, connected technologies, etc., must initially be swiftly understood.",
                        "Main Points: You must rapidly identify the essential point by analysing the important Patents and looking into any potential issues, such as Patents with shared ownership."
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#e11d48] mt-2 shrink-0"></div>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">{item}</p>
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
                    What is necessary for the patent due diligence process?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Depending on your needs, the scope and depth of the patent due diligence analysis can change significantly. These are some of the elements needed:
                </p>
                <div className="space-y-4">
                    {[
                        "Find out if the patent is enforceable or valid: Assesses aspects of validity including claims distinction from Prior Art and patentable subject matter.",
                        "Determine whether a proposed product is covered by patent claims: Looking at specifications, claims, and applying wording to a target product to determine infringement risks.",
                        "Check to see whether there are issues with capable ownership, chain title, or maintenance fees: Evaluating ownership, assignments, title chains, and tracking paid maintenance fees.",
                        "Review of any Confidentiality agreements, licensing agreements, and employee assignments."
                    ].map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">{doc}</p>
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
                        Due Diligence Evaluation Procedure for Patents
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The due diligence review procedure has four distinct stages. The steps in the patent due diligence process are as follows:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1554224154-260327c00c4c?auto=format&fit=crop&q=80"
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {[
                            { title: "Get ready", desc: "Before beginning, ascertain crucial factors including cost, scope, purpose, objectives, and professional group assigned." },
                            { title: "Data Collection", desc: "Analyze patent ownership, history of litigation, protection status of subjects, confidentiality and licensing agreements." },
                            { title: "Inspection", desc: "Analyse the Patents for standing, legality, range of claims. Perform FTO Searches, Draft Action Items for missing fees or revisions." },
                            { title: "Report Writing", desc: "The last part includes a compiled outline involving data, graphs, Goals/Background, and a SWOT analysis." }
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
                        Why Choose VyomBiz for Your Advisory?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert due diligence support.
                    </p>
                </div>
                <div>
                    {[
                        { title: "10,000+ Regulatory & Compliance Experts", desc: "An extensive global network ensuring high precision and legal integrity throughout your evaluation." },
                        { title: "Free 30-Min Advisory", desc: "Get a fast and robust initial understanding of your specific Intellectual Property conditions directly from certified consultants." },
                        { title: "Seamless Certifications", desc: "We make technical compliance certifications effortless and convenient." },
                        { title: "100,000+ Clients Worldwide", desc: "Our proven methodology scales anywhere from small startups looking for initial FTO analysis directly up to major firm Acquisitions." }
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
            question: "What does 'patent due diligence' entail?",
            answer: "Examining a patent or group of patents to support your business or company goals is the process of conducting patent due diligence."
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
                        Data Needed for Diligence
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Evaluating patent strength naturally requires intensive scrutiny of documentation. Here are areas analyzed during information gathering.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1554224154-260327c00c4c?auto=format&fit=crop&q=80"
                            alt="Data Analysis"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Patent Ownership", desc: "Essential since some patents may be jointly owned and cause issues if managed improperly during transfer." },
                        { title: "History of Litigation", desc: "Any history of Patent Litigation needs to be dug out and examined in order to uncover unreported litigation issues." },
                        { title: "Protection Status", desc: "Following targeting, you must determine the full legal extent of protection." },
                        { title: "Employee Assignments", desc: "Documentation ensuring the original inventors properly yielded rights to the corporate entity." },
                        { title: "Confidentiality Agreements", desc: "Important paperwork ensuring there are no breaches of private knowledge regarding the patents." },
                        { title: "Licensing Agreements", desc: "Understanding how existing licenses impact the current valuation and freedom to operate." }
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
                heroTitleSuffix="Advisory"
                heroSubtitle="Assess Value & Mitigate Risks"
                heroDescription="In-depth analysis of patent portfolios to support mergers, acquisitions, and licensing."
                whatsIncludedList={[
                    "Validity & Enforceability Analysis",
                    "Freedom to Operate (FTO) Search",
                    "Ownership & Title Verification",
                    "Infringement Risk Assessment"
                ]}
                stats={[
                    { count: "10k+", label: "Experts", icon: <Users size={20} /> },
                    { count: "99%", label: "Accuracy", icon: <CheckCircle size={20} /> },
                    { count: "Global", label: "Reach", icon: <TrendingUp size={20} /> }
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
