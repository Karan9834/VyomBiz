import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const NidhiCompanyCompliance = () => {

    const faqs = [
        {
            question: "What is the penalty for non-compliance?",
            answer: "Non-compliance may result in penalties or legal action."
        },
        {
            question: "How often are filings required?",
            answer: "Annual, half-yearly, and event-based filings are required."
        },
        {
            question: "Can compliance be outsourced?",
            answer: "Yes, professionals can manage compliance."
        },
        {
            question: "Is income tax filing mandatory?",
            answer: "Yes, it is mandatory every year."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Stay Compliant"
                heroTitleSuffix="Grow Your Nidhi Company"
                heroSubtitle="With Confidence"
                heroDescription="Ensure complete compliance with MCA regulations and avoid penalties with expert support."
                whatsIncludedList={[
                    "Expert Compliance Support",
                    "Accurate MCA Filings",
                    "End-to-End Assistance"
                ]}
                stats={[
                    { count: "100%", label: "Compliance", icon: <Users size={20} /> },
                    { count: "Zero", label: "Errors", icon: <Briefcase size={20} /> },
                    { count: "24/7", label: "Support", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* DETAILS */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Importance",
                    eligibility: "Requirements",
                    documents: "Checklist",
                    process: "Challenges",
                    features: "Benefits",
                    whyChooseUs: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is Nidhi Company Compliance?",
                    description: [
                        "Nidhi Companies are NBFCs that operate for mutual benefit of members.",
                        "They must follow Nidhi Rules 2014 and MCA regulations.",
                        "Compliance includes filings, financial records, and transparency."
                    ]
                }}

                advantages={{
                    title: "Why Compliance is Important",
                    list: [
                        { title: "Avoid Penalties", desc: "Prevent fines and legal action" },
                        { title: "Transparency", desc: "Maintain financial clarity" },
                        { title: "Member Trust", desc: "Build credibility" },
                        { title: "Continuity", desc: "Ensure smooth operations" }
                    ]
                }}

                eligibility={{
                    title: "Key Compliance Requirements",
                    list: [
                        { title: "Annual Filing", desc: "AOC-4, MGT-7" },
                        { title: "Half-Yearly Filing", desc: "NDH-3 Return" },
                        { title: "Event-Based", desc: "Director changes, office change" },
                        { title: "Statutory Records", desc: "Maintain registers and minutes" }
                    ]
                }}

                documents={{
                    title: "Compliance Checklist",
                    list: [
                        "NDH-1 Filing",
                        "NDH-3 Filing",
                        "AOC-4 Filing",
                        "MGT-7 Filing",
                        "Income Tax Return"
                    ]
                }}

                process={{
                    title: "Common Compliance Challenges",
                    steps: [
                        { step: "01", title: "Complex Regulations", desc: "Frequent rule changes" },
                        { step: "02", title: "Deadline Issues", desc: "Missing due dates" },
                        { step: "03", title: "Errors", desc: "Incorrect documentation" },
                        { step: "04", title: "Workload", desc: "Operational burden" }
                    ]
                }}

                features={{
                    title: "Benefits of Professional Compliance",
                    list: [
                        { title: "Reduce Risk", desc: "Avoid penalties" },
                        { title: "Accurate Filing", desc: "Error-free submissions" },
                        { title: "Save Time", desc: "Focus on business" },
                        { title: "Better Credibility", desc: "Improve trust" }
                    ]
                }}

                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Monitoring", desc: "Track deadlines" },
                        { title: "Documentation Support", desc: "Prepare filings" },
                        { title: "Advisory", desc: "Compliance guidance" },
                        { title: "End-to-End Service", desc: "Complete support" }
                    ]
                }}
            />

            <FAQLayout
                title="Nidhi Compliance FAQs"
                subtitle="Common compliance questions"
                faqs={faqs}
            />
        </div>
    );
};

export default NidhiCompanyCompliance;