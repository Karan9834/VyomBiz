import React from "react";
import { Users, Clock, Shield } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AnnualFilingLLP = () => {

    const faqs = [
        {
            question: "Is annual filing mandatory?",
            answer: "Yes, it is mandatory even if LLP has no business activity."
        },
        {
            question: "What happens if filing is delayed?",
            answer: "Late fees are charged daily and can become significant."
        },
        {
            question: "Can filing be done online?",
            answer: "Yes, through MCA portal using DSC."
        },
        {
            question: "Is audit mandatory?",
            answer: "Yes, if turnover exceeds ₹40L or contribution exceeds ₹25L."
        },
        {
            question: "Can professionals handle filing?",
            answer: "Yes, authorized professionals can file on your behalf."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Stay Compliant"
                heroTitleSuffix="Avoid Penalties"
                heroSubtitle="File LLP Returns on Time"
                heroDescription="Ensure timely LLP annual filing with expert support. Avoid penalties and stay compliant with MCA regulations."
                stats={[
                    { count: "100%", label: "Compliance", icon: <Shield size={20} /> },
                    { count: "Zero", label: "Penalties", icon: <Clock size={20} /> },
                    { count: "97%", label: "Success Rate", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* DETAILS */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    eligibility: "Compliance",
                    process: "Process",
                    advantages: "Benefits",
                    documents: "Documents",
                    features: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is Annual Filing for LLP?",
                    description: [
                        "Every LLP must file annual compliance documents with MCA.",
                        "Even inactive LLPs must complete filings.",
                        "These filings maintain legal status and transparency."
                    ]
                }}

                eligibility={{
                    title: "Mandatory Compliance",
                    list: [
                        { title: "Form 8", desc: "Statement of Accounts & Solvency" },
                        { title: "Form 11", desc: "Annual Return" },
                        { title: "ITR Filing", desc: "Income Tax Return" }
                    ]
                }}

                process={{
                    title: "Our Filing Process",
                    steps: [
                        { step: "01", title: "Consultation", desc: "Review LLP details" },
                        { step: "02", title: "Document Collection", desc: "Gather required docs" },
                        { step: "03", title: "Form Preparation", desc: "Prepare Form 8 & 11" },
                        { step: "04", title: "Filing", desc: "Submit via MCA portal" },
                        { step: "05", title: "Confirmation", desc: "Share compliance proof" }
                    ]
                }}

                documents={{
                    title: "Documents Required",
                    list: [
                        "LLP Incorporation Certificate",
                        "LLP Agreement",
                        "PAN of LLP",
                        "Partner Details",
                        "Financial Statements",
                        "P&L and Balance Sheet",
                        "DSC of Partners"
                    ]
                }}

                advantages={{
                    title: "Benefits of Filing",
                    list: [
                        { title: "Avoid Penalties", desc: "No late fees" },
                        { title: "Maintain Status", desc: "LLP remains active" },
                        { title: "Accuracy", desc: "Error-free documentation" },
                        { title: "Save Time", desc: "Focus on business growth" }
                    ]
                }}

                features={{
                    title: "Why Choose Us?",
                    list: [
                        { title: "Experienced Team", desc: "Compliance experts" },
                        { title: "Structured Process", desc: "Step-by-step handling" },
                        { title: "Timely Reminders", desc: "Never miss deadlines" },
                        { title: "Accurate Filing", desc: "Zero-error submissions" },
                        { title: "Reliable Support", desc: "For growing businesses" }
                    ]
                }}
            />

            <FAQLayout
                title="LLP Annual Filing FAQs"
                subtitle="Common questions about LLP compliance"
                faqs={faqs}
            />
        </div>
    );
};

export default AnnualFilingLLP;