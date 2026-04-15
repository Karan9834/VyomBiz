import React from "react";
import { Users, Briefcase, Building2, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AGILEPROS = () => {

    const faqs = [
        {
            question: "What is secretarial compliance?",
            answer: "It includes statutory filings, records, and governance requirements."
        },
        {
            question: "Why is it important?",
            answer: "It ensures legal compliance and avoids penalties."
        },
        {
            question: "Who needs it?",
            answer: "All companies, especially startups and private limited companies."
        },
        {
            question: "How does AGILEPRO S help?",
            answer: "It manages compliance, documentation, and filings."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Smart Secretarial"
                heroTitleSuffix="Compliance"
                heroSubtitle="AGILEPRO S Solution"
                heroDescription="Stay compliant, organized, and audit-ready with structured compliance management."
                whatsIncludedList={[
                    "Compliance Tracking",
                    "Documentation Support",
                    "Regulatory Management"
                ]}
                stats={[
                    { count: "100%", label: "Compliance", icon: <FileText size={20} /> },
                    { count: "Zero", label: "Missed Deadlines", icon: <Briefcase size={20} /> },
                    { count: "Expert", label: "Support", icon: <Users size={20} /> }
                ]}
            />
            <TalkExpert />

            {/* DETAILS */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Importance",
                    features: "Features",
                    eligibility: "Who Needs It",
                    process: "Process",
                    benefits: "Benefits",
                    whyChooseUs: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is AGILEPRO S?",
                    description: [
                        "AGILEPRO S is a structured compliance management solution.",
                        "It helps manage filings, documentation, and governance.",
                        "It ensures regulatory discipline and reduces risks."
                    ]
                }}

                advantages={{
                    title: "Why Compliance is Important",
                    list: [
                        { title: "Avoid Penalties", desc: "Stay compliant" },
                        { title: "Transparency", desc: "Maintain records" },
                        { title: "Governance", desc: "Strong corporate practices" },
                        { title: "Continuity", desc: "Smooth operations" }
                    ]
                }}

                features={{
                    title: "Key Features",
                    list: [
                        { title: "Compliance Tracking", desc: "Monitor deadlines" },
                        { title: "Documentation", desc: "Maintain records" },
                        { title: "Filing Support", desc: "Timely submissions" },
                        { title: "Governance", desc: "Structured processes" }
                    ]
                }}

                eligibility={{
                    title: "Who Should Use AGILEPRO S?",
                    list: [
                        { title: "Private Companies", desc: "Regular compliance" },
                        { title: "Startups", desc: "Funding readiness" },
                        { title: "Growing Businesses", desc: "Scaling operations" },
                        { title: "Organizations", desc: "Governance support" }
                    ]
                }}

                process={{
                    title: "How It Works",
                    steps: [
                        { step: "01", title: "Assessment", desc: "Check compliance status" },
                        { step: "02", title: "Planning", desc: "Create roadmap" },
                        { step: "03", title: "Execution", desc: "Handle filings" },
                        { step: "04", title: "Monitoring", desc: "Track compliance" }
                    ]
                }}

                benefits={{
                    title: "Benefits of AGILEPRO S",
                    list: [
                        { title: "Reduced Risk", desc: "Avoid penalties" },
                        { title: "Better Focus", desc: "Business growth" },
                        { title: "Organized Records", desc: "Audit ready" },
                        { title: "Investor Confidence", desc: "Trust building" }
                    ]
                }}

                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Team", desc: "Professional support" },
                        { title: "Structured System", desc: "Organized workflow" },
                        { title: "Reliable Service", desc: "Consistent compliance" },
                        { title: "End-to-End Support", desc: "Complete solution" }
                    ]
                }}
            />

            <FAQLayout
                title="AGILEPRO S FAQs"
                subtitle="Common compliance questions"
                faqs={faqs}
            />
        </div>
    );
};

export default AGILEPROS;
