import { FileText, CheckCircle, Shield, Search, TrendingUp, AlertTriangle, FileCheck, Users, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * PatentDueDiligence Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/patent-due-diligence
 */

const PatentDueDiligence = () => {

    const faqs = [
        {
            question: "What does 'patent due diligence' entail?",
            answer: "Patent due diligence is the process of examining a patent or a portfolio of patents to evaluate their legal status, enforceability, and commercial value to support business goals like mergers, acquisitions, or licensing."
        },
        {
            question: "What is the main goal of conducting due diligence?",
            answer: "The primary goal is to gather sufficient information about the target patent assets to make informed decisions regarding purchase, investment, or licensing, minimizing risks and validating value."
        },
        {
            question: "Who performs the due diligence?",
            answer: "It is typically performed by legal experts, patent attorneys, and business advisors who have the expertise to analyze legal validity, scope of claims, and market potential."
        },
        {
            question: "What is an FTO (Freedom to Operate) Search?",
            answer: "An FTO search determines whether a proposed product or commercial activity can be launched without infringing on the valid intellectual property rights of others."
        },
        {
            question: "Why is checking patent ownership important?",
            answer: "Verifying the chain of title ensures that the seller has the legal right to transfer the patent. Errors in ownership or unpaid maintenance fees can invalidate the patent or lead to legal disputes."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Patent Due Diligence"
                heroTitleSuffix="Advisory"
                heroSubtitle="Assess Value & Mitigate Risks"
                heroDescription="In-depth analysis of patent portfolios to support mergers, acquisitions, and licensing. Validate enforceability, check for infringement risks, and ensure freedom to operate with our expert due diligence services."
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

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "IP Advisory",
                    title: "Patent Due Diligence –",
                    highlightTitle: "An Overview",
                    description: [
                        "Patent Due Diligence is the comprehensive assessment of the legal, functional, and economic health of a patent or patent portfolio. It is crucial for businesses involved in mergers, acquisitions, technology transfers, or investment rounds.",
                        "The process involves two main aspects: **Defensive Diligence**, which ensures you have the freedom to operate without infringing on others' rights, and **Offensive Diligence**, which assesses the strength of your patents against potential infringers.",
                        <strong>Why it Matters</strong>,
                        "Proper due diligence uncovers hidden risks such as invalidity claims, ownership disputes, or lapsed maintenance fees, ensuring that the IP assets you are acquiring or leveraging are legally sound and commercially valuable."
                    ],
                    whyIdealTitle: "Key Components of Analysis",
                    whyIdealList: [
                        { title: "Validity Check", desc: "Assessing if the patent is legally enforceable and not vulnerable to invalidation.", icon: <Shield size={20} /> },
                        { title: "Infringement Analysis", desc: "Determining if the patent covers the target products or if your products infringe others.", icon: <AlertTriangle size={20} /> },
                        { title: "Ownership Verification", desc: "Confirming clear chain of title and absence of encumbrances.", icon: <FileCheck size={20} /> },
                        { title: "FTO Search", desc: "Ensuring Freedom to Operate in specific markets.", icon: <Search size={20} /> },
                        { title: "Litigation History", desc: "Reviewing past or pending legal disputes involving the patent.", icon: <FileText size={20} /> },
                        { title: "Maintenance Status", desc: "Verifying payment of all renewal fees to keep the patent alive.", icon: <Clock size={20} /> }
                    ]
                }}
                advantages={{
                    title: "Purposes & Benefits",
                    subtitle: "Why conduct Patent Due Diligence?",
                    list: [
                        { title: "Risk Mitigation", desc: "Identifies potential legal threats and financial liabilities before closing a deal." },
                        { title: "Valuation Accuracy", desc: "Helps in determining the true monetary value of the patent portfolio." },
                        { title: "Strategic Decision Making", desc: "Informs whether to proceed with a merger, acquisition, or licensing agreement." },
                        { title: "Negotiation Leverage", desc: "Provides factual data to negotiate better terms or price adjustments." },
                        { title: "Avoid Infringement", desc: "Prevents costly lawsuits by ensuring your products don't violate existing patents." },
                        { title: "Secure Investment", desc: "Ensures that the IP assets backing an investment are valid and enforceable." }
                    ]
                }}
                documents={{
                    title: "Documents & Info Required",
                    description: "Data needed for a thorough due diligence process.",
                    list: [
                        "List of Patents & Applications (Portfolio)",
                        "Maintenance Fee Payment Records",
                        "Assignment Deeds & Transfer Documents",
                        "File Wrappers (Prosecution History)",
                        "Prior Art Search Reports",
                        "Details of Current/Past Litigation",
                        "License Agreements (if any)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Due Diligence Process",
                    subtitle: "Our systematic approach to evaluating patents.",
                    steps: [
                        { step: "01", title: "Preparation", desc: "Defining objectives, scope, and assembling the expert team." },
                        { step: "02", title: "Data Collection", desc: "Gathering patent data, ownership records, and litigation history." },
                        { step: "03", title: "In-Depth Inspection", desc: "Analyzing validity, claims scope, FTO, and encumbrances." },
                        { step: "04", title: "Risk Assessment", desc: "Identifying red flags like lapses or ownership gaps." },
                        { step: "05", title: "Reporting", desc: "Delivering a comprehensive report with SWOT analysis and recommendations." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expertise you can trust for critical IP decisions.",
                    list: [
                        { title: "Global Experts", desc: "Network of specialized patent attorneys and technical experts." },
                        { title: "Comprehensive Reporting", desc: "Detailed insights into legal and commercial risks." },
                        { title: "Fast Turnaround", desc: "Efficient processes to meet deal timelines." },
                        { title: "Confidentiality", desc: "Strict data privacy and NDA compliance." },
                        { title: "Cost-Effective", desc: "Competitive pricing for high-quality advisory services." },
                        { title: "Holistic Approach", desc: "Combining legal, technical, and business perspectives." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Patent Due Diligence"
                faqs={faqs}
            />

        </div>
    );
};

export default PatentDueDiligence;
