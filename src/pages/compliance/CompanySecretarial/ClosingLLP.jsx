import React from "react";
import { ShieldCheck, Users, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ClosingLLP = () => {

    const faqs = [
        {
            question: "How long does it take to close an LLP?",
            answer: "The closure process usually takes 3 to 6 months, depending on approvals and verification."
        },
        {
            question: "Can an LLP with liabilities be closed?",
            answer: "No. All liabilities must be settled before applying for closure."
        },
        {
            question: "Is it mandatory to file pending returns before closure?",
            answer: "Yes. All MCA filings must be completed before applying."
        },
        {
            question: "What happens if LLP is inactive but not closed?",
            answer: "It may face penalties due to non-compliance."
        },
        {
            question: "Do all partners need to approve closure?",
            answer: "Yes. Consent from all partners is required."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Close Your LLP the Right Way"
                heroTitleSuffix="the Right Way"
                heroSubtitle="Without Legal Hassles"
                heroDescription="Avoid penalties and compliance risks by closing your LLP correctly with Vyombiz. We handle everything from documentation to MCA filing."
                whatsIncludedList={[
                    "Expert Compliance Assistance",
                    "MCA Filing & Documentation",
                    "End-to-End Legal Support"
                ]}
                stats={[
                    { count: "200+", label: "LLPs Closed", icon: <Building2 size={20} /> },
                    { count: "100%", label: "Compliance", icon: <ShieldCheck size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Users size={20} /> }
                ]}
            />
            <TalkExpert />

            {/* DETAILS */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    eligibility: "When to Close",
                    process: "Process",
                    advantages: "Benefits",
                    documents: "Documents",
                    features: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is LLP Closure?",
                    description: [
                        "Closing a Limited Liability Partnership (LLP) is the legal process of dissolving the LLP and removing its name from MCA records.",
                        "Once closed, the LLP ceases to exist legally.",
                        "Inactive LLPs can still face penalties, so proper closure is important."
                    ]
                }}

                eligibility={{
                    title: "When Should You Close an LLP?",
                    list: [
                        { title: "Inactive Business", desc: "LLP not conducting operations" },
                        { title: "Mutual Decision", desc: "Partners decide to discontinue" },
                        { title: "Purpose Completed", desc: "Project or objective achieved" },
                        { title: "Restructuring", desc: "Merged into another entity" },
                        { title: "High Compliance Cost", desc: "Costs outweigh benefits" }
                    ]
                }}

                process={{
                    title: "LLP Closure Process",
                    steps: [
                        { step: "01", title: "Compliance Check", desc: "Verify eligibility and filings" },
                        { step: "02", title: "Close Bank Accounts", desc: "All accounts must be closed" },
                        { step: "03", title: "Prepare Documents", desc: "Affidavits, bonds, consent" },
                        { step: "04", title: "MCA Filing", desc: "Submit closure application" },
                        { step: "05", title: "Strike Off", desc: "LLP removed from MCA register" }
                    ]
                }}

                documents={{
                    title: "Documents Required",
                    list: [
                        "PAN Card of LLP",
                        "LLP Agreement",
                        "Consent of Partners",
                        "Statement of Accounts",
                        "ITR (if applicable)",
                        "Bank Closure Certificate",
                        "Affidavit & Indemnity Bond"
                    ],
                    imageUrl: "Documents.jpg"
                }}

                advantages={{
                    title: "Benefits of Closing LLP",
                    list: [
                        { title: "Avoid Compliance", desc: "No annual filing needed" },
                        { title: "Prevent Penalties", desc: "Avoid fines for inactivity" },
                        { title: "Reduce Costs", desc: "No unnecessary expenses" },
                        { title: "Clean Exit", desc: "No future liabilities" }
                    ]
                }}

                features={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Team", desc: "Professional compliance experts" },
                        { title: "Accurate Filing", desc: "Error-free documentation" },
                        { title: "Fast Process", desc: "Quick turnaround time" },
                        { title: "Affordable", desc: "Transparent pricing" },
                        { title: "End-to-End Support", desc: "Complete assistance" }
                    ]
                }}
            />

            <FAQLayout
                title="LLP Closure FAQs"
                subtitle="Common questions about LLP closure"
                faqs={faqs}
            />
        </div>
    );
};

export default ClosingLLP;
