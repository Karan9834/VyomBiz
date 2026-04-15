import React from "react";
import { Users, Clock, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ChangeInNameClause = () => {

    const faqs = [
        {
            question: "How long does it take?",
            answer: "10–15 working days depending on approvals."
        },
        {
            question: "Does it affect company identity?",
            answer: "No, only the name changes."
        },
        {
            question: "Is shareholder approval required?",
            answer: "Yes, Special Resolution is required."
        },
        {
            question: "Do documents need updating?",
            answer: "Yes, all official records must be updated."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Update Your Company"
                heroTitleSuffix="Name Clause"
                heroSubtitle="Without Compliance Risks"
                heroDescription="Modify your company’s name legally and smoothly with expert compliance support."
                whatsIncludedList={[
                    "Fast Processing",
                    "Compliant Filing",
                    "Hassle-Free Documentation"
                ]}
                stats={[
                    { count: "10-15 Days", label: "Timeline", icon: <Clock size={20} /> },
                    { count: "100%", label: "Compliance", icon: <FileText size={20} /> },
                    { count: "Expert", label: "Support", icon: <Users size={20} /> }
                ]}
            />
            <TalkExpert />

            {/* DETAILS */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    eligibility: "When to Change",
                    process: "Process",
                    documents: "Documents",
                    advantages: "Benefits",
                    features: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is Change in Name Clause?",
                    description: [
                        "The Name Clause defines the legal name of a company.",
                        "It must be updated if the company rebrands or changes identity.",
                        "The process is governed under Companies Act, 2013."
                    ]
                }}

                eligibility={{
                    title: "When Do Companies Change Name Clause?",
                    list: [
                        { title: "Rebranding", desc: "New business identity" },
                        { title: "Expansion", desc: "New markets/services" },
                        { title: "Ownership Changes", desc: "Mergers/acquisitions" },
                        { title: "Trademark Issues", desc: "Legal conflicts" },
                        { title: "Market Positioning", desc: "Better recognition" }
                    ]
                }}

                process={{
                    title: "Step-by-Step Process",
                    steps: [
                        { step: "01", title: "Board Meeting", desc: "Approve change" },
                        { step: "02", title: "Name Reservation", desc: "Apply to MCA" },
                        { step: "03", title: "Shareholder Approval", desc: "Pass resolution" },
                        { step: "04", title: "ROC Filing", desc: "Submit forms" },
                        { step: "05", title: "New Certificate", desc: "Updated COI issued" }
                    ]
                }}

                documents={{
                    title: "Documents Required",
                    list: [
                        "Board Resolution",
                        "Special Resolution",
                        "MOA & AOA",
                        "Certificate of Incorporation",
                        "DSC of Directors",
                        "DIN",
                        "Name Approval"
                    ],
                    imageUrl: "Documents.jpg"
                }}

                advantages={{
                    title: "Benefits of Updating Name Clause",
                    list: [
                        { title: "Brand Identity", desc: "Stronger branding" },
                        { title: "Legal Compliance", desc: "Operate legally" },
                        { title: "Expansion", desc: "Support growth" },
                        { title: "Credibility", desc: "Build trust" }
                    ]
                }}

                features={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Support", desc: "Compliance professionals" },
                        { title: "Accurate Filing", desc: "Error-free process" },
                        { title: "Fast Approval", desc: "Reduced delays" },
                        { title: "End-to-End Service", desc: "Complete handling" },
                        { title: "Transparent Service", desc: "Clear guidance" }
                    ]
                }}
            />

            <FAQLayout
                title="Name Clause FAQs"
                subtitle="Common questions about name change"
                faqs={faqs}
            />
        </div>
    );
};

export default ChangeInNameClause;
