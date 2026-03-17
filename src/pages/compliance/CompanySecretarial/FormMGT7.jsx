import React from "react";
import { Users, Briefcase, Building2, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FormMGT7 = () => {

    const faqs = [
        {
            question: "What is Form MGT-7?",
            answer: "It is the annual return filed with MCA containing company details."
        },
        {
            question: "Who must file MGT-7?",
            answer: "All companies including private, public, OPC, and small companies."
        },
        {
            question: "What is the due date?",
            answer: "Within 60 days from AGM."
        },
        {
            question: "What happens if not filed?",
            answer: "Penalties and compliance issues may arise."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="File Form MGT-7"
                heroTitleSuffix="Without Stress"
                heroSubtitle="Stay MCA Compliant"
                heroDescription="Ensure accurate and timely annual return filing with expert assistance."
                whatsIncludedList={[
                    "Expert Filing",
                    "Accurate Documentation",
                    "Timely Submission"
                ]}
                stats={[
                    { count: "60 Days", label: "Deadline", icon: <Briefcase size={20} /> },
                    { count: "100%", label: "Compliance", icon: <FileText size={20} /> },
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
                    documents: "Information Required",
                    process: "Process",
                    advantages: "Benefits",
                    features: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is Form MGT-7?",
                    description: [
                        "Form MGT-7 is an annual return filed under Companies Act.",
                        "It contains company structure, shareholders, and compliance details.",
                        "It must be filed within 60 days of AGM."
                    ]
                }}

                eligibility={{
                    title: "Who Needs to File Form MGT-7?",
                    list: [
                        { title: "Private Companies", desc: "Mandatory filing" },
                        { title: "Public Companies", desc: "Detailed disclosures" },
                        { title: "OPCs", desc: "Simplified return" },
                        { title: "Small Companies", desc: "Annual compliance" }
                    ]
                }}

                documents={{
                    title: "Information Required",
                    list: [
                        "Company Details",
                        "Shareholding Data",
                        "Director Details",
                        "Meeting Records",
                        "Compliance Records"
                    ]
                }}

                process={{
                    title: "Filing Process",
                    steps: [
                        { step: "01", title: "Collect Data", desc: "Gather company info" },
                        { step: "02", title: "Verify Documents", desc: "Check accuracy" },
                        { step: "03", title: "Prepare Form", desc: "Draft return" },
                        { step: "04", title: "File with MCA", desc: "Submit online" }
                    ]
                }}

                advantages={{
                    title: "Benefits of Filing MGT-7",
                    list: [
                        { title: "Compliance", desc: "Meet legal requirements" },
                        { title: "Transparency", desc: "Maintain records" },
                        { title: "Credibility", desc: "Build trust" },
                        { title: "Avoid Penalties", desc: "Prevent fines" }
                    ]
                }}

                features={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Support", desc: "Professional handling" },
                        { title: "Accurate Filing", desc: "Error-free process" },
                        { title: "Timely Submission", desc: "Meet deadlines" },
                        { title: "End-to-End Service", desc: "Complete assistance" }
                    ]
                }}
            />

            <FAQLayout
                title="MGT-7 FAQs"
                subtitle="Common questions about annual return filing"
                faqs={faqs}
            />
        </div>
    );
};

export default FormMGT7;