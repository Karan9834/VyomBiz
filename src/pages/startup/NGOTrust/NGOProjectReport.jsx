import React from "react";
import { Users, Briefcase, Building2, FileText, CheckCircle, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * NGOProjectReport Page matching Vyombiz layout styles
 * URL: https://corpbiz.io/ngo-project-report
 */

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
                overview={{
                    badge: "Professional Drafting",
                    title: "NGO Project Report –",
                    highlightTitle: "Showcase Your Impact",
                    description: [
                        "An NGO Project Report is more than just a document; it's a testament to your organization's commitment to social change. It outlines your motives, plans, and the tangible impact of your initiatives.",
                        "Vyombiz specializes in creating detailed, data-driven reports that align with the specific requirements of donors and government bodies. We ensure transparency and compliance, helping you secure the funding needed to drive your mission forward.",
                        <strong>Why Transparency Matters?</strong>,
                        "Clear and accurate reporting builds long-term trust with stakeholders. It demonstrates that funds are being utilized effectively for the intended beneficiaries, which is crucial for sustained support."
                    ],
                    whyIdealTitle: "Benefits of Professional Reports",
                    whyIdealList: [
                        { title: "Builds Credibility", desc: "A well-structured report signals professionalism and accountability to donors." },
                        { title: "Ensures Compliance", desc: "Meets strict guidelines of FCRA, Income Tax Act, and CSR mandates." },
                        { title: "Tracks Progress", desc: "Helps in monitoring project milestones and identifying areas for improvement." },
                        { title: "Boosts Fundraising", desc: "Increases chances of approval from banks, CSR committees, and grant agencies." }
                    ]
                }}
                advantages={{
                    title: "Types of Reports We Draft",
                    subtitle: "Comprehensive reporting solutions for every stage.",
                    list: [
                        { title: "Monthly/Quarterly Reports", desc: "Regular updates on project status, fund utilization, and immediate outcomes." },
                        { title: "Annual Reports (AR)", desc: "A holistic overview of yearly activities, financial health, and future roadmap." },
                        { title: "Project Completion Report", desc: "Consolidated document covering the entire lifecycle from initiation to closure." },
                        { title: "Impact Evaluation Report", desc: "Assessment of the long-term social impact and effectiveness of the intervention." },
                        { title: "Budget Comparison Report", desc: "Analysis of actual expenditure against the approved budget to ensure financial discipline." },
                        { title: "CSR Pitch Decks", desc: "Strategic presentations designed to attract corporate partnerships and funding." }
                    ]
                }}
                eligibility={{
                    title: "Checklist for Drafting",
                    subtitle: "Documents required to get started.",
                    list: [
                        { title: "Legal Documents", desc: "MoA, Trust Deed, Registration Certificate, 12A & 80G Certificates." },
                        { title: "Financial Records", desc: "Audited Balance Sheets and Annual Reports for the last 3 years." },
                        { title: "Project Data", desc: "Details of activities, target beneficiaries, location, and timeline." },
                        { title: "Banking Details", desc: "NGO’s Bank Account information and PAN Card copy." }
                    ]
                }}
                documents={{
                    title: "Report Structure",
                    description: "Our standard report format includes:",
                    list: [
                        "Executive Summary & Organizational Profile",
                        "Needs Assessment & Problem Statement",
                        "Project Objectives & Methodology",
                        "Target Beneficiaries Analysis",
                        "Implementation Plan & Timeline",
                        "Monitoring & Evaluation Mechanisms",
                        "Detailed Budget Estimates",
                        "Sustainability Plan",
                        "Annexures (Photos, Case Studies)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Drafting Process",
                    subtitle: "From concept to final report.",
                    steps: [
                        { step: "01", title: "Understanding", desc: "We define your project's core objectives, target audience, and expected impact." },
                        { step: "02", title: "Data Collection", desc: "Gathering financial data, success stories, and operational metrics." },
                        { step: "03", title: "Structuring", desc: "Organizing content into a logical flow with clear headings and professional tone." },
                        { step: "04", title: "Drafting", desc: "Writing concise, engaging content that highlights key achievements." },
                        { step: "05", title: "Review", desc: " rigorous proofreading and verification of facts and figures." },
                        { step: "06", title: "Finalization", desc: "Enhancing the report with visuals, charts, and graphs for better presentation." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Your partner in effective storytelling.",
                    list: [
                        { title: "Expert Consultants", desc: "Team with deep knowledge of funding norms and government schemes." },
                        { title: "Customized Solutions", desc: "Reports tailored to your specific project needs and donor requirements." },
                        { title: "Fast Turnaround", desc: "Bank-ready reports delivered within 3 to 5 working days." },
                        { title: "End-to-End Support", desc: "Assistance with documentation, submission, and post-submission queries." },
                        { title: "Affordable Pricing", desc: "Transparent fee structure suitable for NGOs of all sizes." },
                        { title: "Proven Track Record", desc: "Successfully drafted reports for hundreds of NGOs across India." }
                    ]
                }}
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
