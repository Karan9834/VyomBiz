import React from "react";
import { Users, Briefcase, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AGRReturnFiling = () => {

    const faqs = [
        {
            question: "What is AGR?",
            answer: "Adjusted Gross Revenue used for telecom license fees."
        },
        {
            question: "Is AGR filing mandatory?",
            answer: "Yes for all telecom license holders."
        },
        {
            question: "What happens if not filed?",
            answer: "Penalties and legal issues may arise."
        },
        {
            question: "Can professionals help?",
            answer: "Yes, experts handle compliance."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Stay Compliant with"
                heroTitleSuffix="AGR Filing"
                heroSubtitle="Avoid Penalties & Risks"
                heroDescription="Ensure accurate AGR return filing with expert telecom compliance support."
                whatsIncludedList={[
                    "Revenue Calculation",
                    "Return Filing",
                    "Compliance Support"
                ]}
                stats={[
                    { count: "100%", label: "Accuracy", icon: <FileText size={20} /> },
                    { count: "Zero", label: "Penalties", icon: <Briefcase size={20} /> },
                    { count: "Expert", label: "Support", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* DETAILS */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    eligibility: "Who Needs It",
                    advantages: "Importance",
                    documents: "Documents",
                    process: "Process",
                    features: "Benefits",
                    whyChooseUs: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is AGR Return Filing?",
                    description: [
                        "AGR represents telecom revenue for license fee calculation.",
                        "It must be reported to DoT regularly.",
                        "Accurate filing ensures regulatory compliance."
                    ]
                }}

                eligibility={{
                    title: "Who Needs to File AGR?",
                    list: [
                        { title: "Telecom Providers", desc: "TSPs" },
                        { title: "ISPs", desc: "Internet providers" },
                        { title: "Unified License", desc: "UL holders" },
                        { title: "Infrastructure Providers", desc: "DoT regulated" }
                    ]
                }}

                advantages={{
                    title: "Why AGR Compliance is Important",
                    list: [
                        { title: "Compliance", desc: "Follow DoT rules" },
                        { title: "Avoid Penalties", desc: "Prevent fines" },
                        { title: "Transparency", desc: "Accurate reporting" },
                        { title: "Continuity", desc: "Smooth operations" }
                    ]
                }}

                documents={{
                    title: "Documents Required",
                    list: [
                        "DoT License",
                        "Revenue Statements",
                        "Financial Reports",
                        "License Fee Calculations",
                        "Previous AGR Records"
                    ]
                }}

                process={{
                    title: "AGR Filing Process",
                    steps: [
                        { step: "01", title: "Data Collection", desc: "Gather revenue data" },
                        { step: "02", title: "Computation", desc: "Calculate AGR" },
                        { step: "03", title: "Prepare Statements", desc: "Draft returns" },
                        { step: "04", title: "Submit Filing", desc: "File with DoT" },
                        { step: "05", title: "Review", desc: "Verify compliance" }
                    ]
                }}

                features={{
                    title: "Benefits of Professional Support",
                    list: [
                        { title: "Accuracy", desc: "Correct calculations" },
                        { title: "Timely Filing", desc: "Meet deadlines" },
                        { title: "Reduced Risk", desc: "Avoid penalties" },
                        { title: "Expert Advice", desc: "Regulatory guidance" }
                    ]
                }}

                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Knowledge", desc: "Telecom compliance" },
                        { title: "Structured Process", desc: "Smooth workflow" },
                        { title: "Error-Free Filing", desc: "Accurate returns" },
                        { title: "End-to-End Support", desc: "Complete service" }
                    ]
                }}
            />

            <FAQLayout
                title="AGR Filing FAQs"
                subtitle="Common questions about AGR compliance"
                faqs={faqs}
            />
        </div>
    );
};

export default AGRReturnFiling;