import { FileText, CheckCircle, Shield, Search, TrendingUp, AlertTriangle, FileCheck, Users, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * PatentDueDiligence Page
 */

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
                            Patent Due Diligence – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Patent Due Diligence is the comprehensive assessment of the legal, functional, and economic health of a patent or patent portfolio.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It includes Defensive Diligence (freedom to operate) and Offensive Diligence (strength evaluation).
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why it Matters
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Ensures IP assets are legally sound and commercially valuable before transactions.
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

const PatentDueDiligence = () => {

    const faqs = [
        {
            question: "What does 'patent due diligence' entail?",
            answer: "Evaluation of legal status, enforceability, and commercial value."
        },
        {
            question: "What is the main goal?",
            answer: "Minimize risks and validate IP value."
        },
        {
            question: "Who performs it?",
            answer: "Patent attorneys and business advisors."
        },
        {
            question: "What is an FTO Search?",
            answer: "Determines freedom to operate without infringement."
        },
        {
            question: "Why verify ownership?",
            answer: "Ensures legal right to transfer patents."
        }
    ];

    /* ================= STICKY ADVANTAGES SECTION ================= */

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Strategic Evaluation
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Purposes & Benefits
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Evaluate patent strength, reduce legal exposure, and maximize commercial returns.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1554224154-260327c00c4c?auto=format&fit=crop&q=80"
                            alt="Patent Due Diligence Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">
                    {[
                        { title: "Risk Mitigation", desc: "Identifies legal and financial threats before deal closure." },
                        { title: "Valuation Accuracy", desc: "Determines true patent portfolio value." },
                        { title: "Strategic Decision Making", desc: "Supports mergers, acquisitions, licensing decisions." },
                        { title: "Negotiation Leverage", desc: "Strengthens bargaining position." },
                        { title: "Avoid Infringement", desc: "Ensures freedom to operate." },
                        { title: "Secure Investment", desc: "Confirms enforceability of IP assets." }
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
                eligibility={{
                    title: "Who Requires Patent Due Diligence?",
                    subtitle: "Situations where due diligence is essential.",
                    list: [
                        { title: "Mergers & Acquisitions", desc: "Companies acquiring IP-heavy businesses." },
                        { title: "Investors", desc: "VCs and private equity validating IP assets." },
                        { title: "Technology Buyers", desc: "Businesses purchasing patented technology." },
                        { title: "Startups", desc: "Validating portfolio before fundraising." },
                        { title: "Licensors & Licensees", desc: "Ensuring enforceability before agreements." },
                        { title: "Corporate Strategy Teams", desc: "Evaluating competitor patent portfolios." }
                    ]
                }}
                documents={{
                    title: "Documents & Info Required",
                    description: "Data needed for a thorough due diligence process.",
                    list: [
                        "Patent Portfolio List",
                        "Maintenance Fee Records",
                        "Assignment Deeds",
                        "Prosecution History",
                        "Prior Art Reports",
                        "Litigation Details",
                        "License Agreements"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Due Diligence Process",
                    subtitle: "Our systematic approach.",
                    steps: [
                        { step: "01", title: "Preparation", desc: "Define scope and team." },
                        { step: "02", title: "Data Collection", desc: "Gather records." },
                        { step: "03", title: "Inspection", desc: "Analyze validity & FTO." },
                        { step: "04", title: "Risk Assessment", desc: "Identify red flags." },
                        { step: "05", title: "Reporting", desc: "Comprehensive advisory report." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert IP advisory.",
                    list: [
                        { title: "Global Experts", desc: "Specialized patent attorneys." },
                        { title: "Comprehensive Reporting", desc: "Detailed risk insights." },
                        { title: "Fast Turnaround", desc: "Meet deal timelines." },
                        { title: "Confidentiality", desc: "Strict NDA compliance." },
                        { title: "Cost-Effective", desc: "Competitive pricing." },
                        { title: "Holistic Approach", desc: "Legal + technical + business." }
                    ]
                }}
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
