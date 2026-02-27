import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * NGOProjectReport Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/ngo-project-report
 */

const ProjectReportOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Professional Drafting
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NGO Project Report – <span className="text-[#005a9c]">Showcase Your Impact</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An NGO Project Report is more than just a document; it's a testament to your organization's commitment to social change. It outlines your motives, plans, and the tangible impact of your initiatives. Clear and accurate reporting builds long-term trust with stakeholders and demonstrates that funds are being utilized effectively for the intended beneficiaries.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz specializes in creating detailed, data-driven reports that align with the specific requirements of donors and government bodies. We ensure transparency and compliance, helping you secure the funding needed to drive your mission forward.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="NGO Project Report Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const NGOProjectReportAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Professional Drafting
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Types of Reports We Draft
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Comprehensive reporting solutions for every stage.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                            alt="Project Report Types"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Monthly/Quarterly Reports", desc: "Regular updates on project status, fund utilization, and immediate outcomes." },
                        { title: "Annual Reports (AR)", desc: "A holistic overview of yearly activities, financial health, and future roadmap." },
                        { title: "Project Completion Report", desc: "Consolidated document covering the entire lifecycle from initiation to closure." },
                        { title: "Impact Evaluation Report", desc: "Assessment of the long-term social impact and effectiveness of the intervention." },
                        { title: "Budget Comparison Report", desc: "Analysis of actual expenditure against the approved budget to ensure financial discipline." },
                        { title: "CSR Pitch Decks", desc: "Strategic presentations designed to attract corporate partnerships and funding." }
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

const ProjectReportEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What is the Checklist for Drafting?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To draft a professional NGO Project Report, it's essential to have the required documents.
                    Documents required to get started are mentioned below-
                </p>

                {/* Documents Required */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Required Documents
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Legal Documents –
                            </span>{" "}
                            MoA, Trust Deed, Registration Certificate, 12A & 80G Certificates.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Financial Records –
                            </span>{" "}
                            Audited Balance Sheets and Annual Reports for the last 3 years.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Project Data – </span>
                        Details of activities, target beneficiaries, location, and timeline.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Banking Details – </span>
                        NGO's Bank Account information and PAN Card copy.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Project Report Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const ProjectReportDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Report Structure
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Our standard report format includes comprehensive sections covering all aspects of your project.
                    Our standard report format includes:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Executive Summary & Organizational Profile – </span>
                            Overview of the organization and project highlights.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Needs Assessment & Problem Statement – </span>
                            Detailed analysis of the problem and needs addressed.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Project Objectives & Methodology – </span>
                            Clear objectives and methodology for project implementation.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Target Beneficiaries Analysis – </span>
                            Comprehensive analysis of target beneficiaries.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Implementation Plan & Timeline – </span>
                            Detailed implementation plan with timeline.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Monitoring & Evaluation Mechanisms – </span>
                            Systems for monitoring and evaluating project progress.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Detailed Budget Estimates – </span>
                            Comprehensive budget breakdown for the project.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Sustainability Plan – </span>
                            Plan for long-term sustainability of the project.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Annexures – </span>
                            Photos, Case Studies, and supporting documents.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const ProjectReportProcessSection = () => {
    const steps = [
        {
            title: "Understanding",
            desc: "We define your project's core objectives, target audience, and expected impact."
        },
        {
            title: "Data Collection",
            desc: "Gathering financial data, success stories, and operational metrics."
        },
        {
            title: "Structuring",
            desc: "Organizing content into a logical flow with clear headings and professional tone."
        },
        {
            title: "Drafting",
            desc: "Writing concise, engaging content that highlights key achievements."
        },
        {
            title: "Review",
            desc: "Rigorous proofreading and verification of facts and figures."
        },
        {
            title: "Finalization",
            desc: "Enhancing the report with visuals, charts, and graphs for better presentation."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Our Drafting Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        From concept to final report, we follow a structured approach to create
                        professional project reports. The step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="Project Report Drafting Process"
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
                                Start Your Project Report Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectReportFeaturesSection = () => {
    const features = [
        {
            title: "Expert Consultants",
            desc: "Team with deep knowledge of funding norms and government schemes."
        },
        {
            title: "Customized Solutions",
            desc: "Reports tailored to your specific project needs and donor requirements."
        },
        {
            title: "Compliance Ready",
            desc: "Reports comply with FCRA, CSR, and government grant guidelines."
        },
        {
            title: "Impact Focused",
            desc: "Emphasis on measurable impact and outcomes for better funding success."
        },
        {
            title: "Quick Turnaround",
            desc: "Fast delivery within 3-5 days without compromising quality."
        },
        {
            title: "Professional Presentation",
            desc: "Visually appealing reports with charts, graphs, and case studies."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of NGO Project Report Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Our project report services help NGOs create professional, compliant reports
                        that enhance credibility and increase funding success rates.
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

const NGOProjectReport = () => {

    const faqs = [
        {
            question: "What is an NGO Project Report?",
            answer: "An NGO Project Report is a detailed document outlining an organization's objectives, activities, impact, and financial status for a specific project. It serves as a tool for monitoring progress and ensuring transparency with donors."
        },
        {
            question: "Why is an NGO Project Report important for funding?",
            answer: "It showcases professional planning, clear objectives, and measurable impact, which builds trust and credibility with potential donors, CSR partners, and government agencies."
        },
        {
            question: "What are the different types of project reports?",
            answer: "Common types include Monthly Progress Reports (MPR), Quarterly Reports (QR), Annual Reports (AR), Project Completion Reports (PCR), and Budget Comparison Reports."
        },
        {
            question: "What documents are needed for drafting a report?",
            answer: "Key documents include the Registration Certificate, MoA/Trust Deed, Audited Financials, Activity Records, Beneficiary Data, and 12A/80G certificates."
        },
        {
            question: "How does Vyombiz assist in report drafting?",
            answer: "Vyombiz provides end-to-end drafting services, complying with donor guidelines and government regulations (FCRA/CSR), ensuring your report is bank-ready and impact-focused."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO Project Report"
                heroTitleSuffix="Drafting Services"
                heroSubtitle="Professional Project Reports for Funding & Compliance"
                heroDescription="Get expert assistance in drafting comprehensive NGO Project Reports. Whether for CSR funding, government grants, or donor updates, Vyombiz ensures your reports are impactful, compliant, and bank-ready."
                whatsIncludedList={[
                    "Customized Project Proposals",
                    "Impact Assessment Reports",
                    "Budget & Financial Planning",
                    "CSR & Grant Application Support"
                ]}
                stats={[
                    { count: "800+", label: "Reports Drafted", icon: <FileText size={20} /> },
                    { count: "95%", label: "Funding Success", icon: <TrendingUp size={20} /> },
                    { count: "3-5", label: "Days Delivery", icon: <CheckCircle size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ProjectReportOverview />}
                advantages={<NGOProjectReportAdvantages />}
                eligibility={<ProjectReportEligibility />}
                documents={<ProjectReportDocumentsSection />}
                process={<ProjectReportProcessSection />}
                features={<ProjectReportFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Project Reports"
                faqs={faqs}
            />

        </div>
    );
};

export default NGOProjectReport;
