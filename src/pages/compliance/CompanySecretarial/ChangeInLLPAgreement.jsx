import React from "react";
import { Users, Clock, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ChangeInLLPAgreement = () => {

    const faqs = [
        {
            question: "What is a Supplementary LLP Agreement?",
            answer: "It is a document used to update the original LLP Agreement."
        },
        {
            question: "How long does it take?",
            answer: "Usually 15–30 working days."
        },
        {
            question: "Is stamp duty required?",
            answer: "Yes, based on state laws."
        },
        {
            question: "Is MCA filing mandatory?",
            answer: "Yes, Form 3 must be filed within 30 days."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Update Your LLP"
                heroTitleSuffix="Agreement Easily"
                heroSubtitle="Without Legal Hassle"
                heroDescription="Modify your LLP agreement with expert assistance and ensure MCA compliance."
                whatsIncludedList={[
                    "Expert Documentation",
                    "MCA Filing Support",
                    "Quick Turnaround"
                ]}
                stats={[
                    { count: "30 Days", label: "Filing Deadline", icon: <Clock size={20} /> },
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
                    eligibility: "When to Change",
                    advantages: "Importance",
                    process: "Process",
                    documents: "Documents",
                    features: "Benefits",
                    whyChooseUs: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is Change in LLP Agreement?",
                    description: [
                        "An LLP Agreement defines rights, duties, and structure of partners.",
                        "Changes are required when business structure evolves.",
                        "All modifications must be filed with MCA for legal validity."
                    ]
                }}

                eligibility={{
                    title: "When Do You Need to Modify LLP Agreement?",
                    list: [
                        { title: "Partner Changes", desc: "Addition or removal" },
                        { title: "Profit Sharing", desc: "Change in ratios" },
                        { title: "Roles Update", desc: "Change in responsibilities" },
                        { title: "Business Expansion", desc: "New activities" },
                        { title: "Capital Change", desc: "Investment updates" }
                    ]
                }}

                advantages={{
                    title: "Importance of Updating LLP Agreement",
                    list: [
                        { title: "Legal Compliance", desc: "Follow LLP Act rules" },
                        { title: "Clear Roles", desc: "Defined responsibilities" },
                        { title: "Avoid Disputes", desc: "Prevent conflicts" },
                        { title: "Business Accuracy", desc: "Reflect current structure" }
                    ]
                }}

                process={{
                    title: "Process for Changing LLP Agreement",
                    steps: [
                        { step: "01", title: "Review Agreement", desc: "Identify changes" },
                        { step: "02", title: "Draft Supplementary", desc: "Prepare amendment" },
                        { step: "03", title: "Partner Approval", desc: "Get consent" },
                        { step: "04", title: "Execution", desc: "Sign on stamp paper" },
                        { step: "05", title: "MCA Filing", desc: "Submit Form 3" }
                    ]
                }}

                documents={{
                    title: "Documents Required",
                    list: [
                        "Existing LLP Agreement",
                        "Proposed Changes",
                        "Partner Consent",
                        "ID & Address Proof",
                        "Capital Contribution Details"
                    ],
                    imageUrl: "Documents.jpg"
                }}

                features={{
                    title: "Benefits of Professional Assistance",
                    list: [
                        { title: "Accurate Drafting", desc: "Legally sound documents" },
                        { title: "Error-Free Filing", desc: "Avoid rejection" },
                        { title: "Timely Compliance", desc: "Meet deadlines" },
                        { title: "Reduced Burden", desc: "Focus on business" }
                    ]
                }}

                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Drafting", desc: "Precise agreements" },
                        { title: "Compliance Support", desc: "LLP Act adherence" },
                        { title: "Fast Processing", desc: "Quick turnaround" },
                        { title: "End-to-End Service", desc: "Complete handling" }
                    ]
                }}
            />

            <FAQLayout
                title="LLP Agreement FAQs"
                subtitle="Common questions about LLP agreement changes"
                faqs={faqs}
            />
        </div>
    );
};

export default ChangeInLLPAgreement;