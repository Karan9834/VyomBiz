import React from "react";
import { Users, Award, Briefcase } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ChangeInObjectClause = () => {

    const faqs = [
        {
            question: "Is it mandatory to change the Object Clause?",
            answer: "Yes, if the company wants to operate outside its existing objectives."
        },
        {
            question: "Does it require shareholder approval?",
            answer: "Yes, through a Special Resolution."
        },
        {
            question: "How long does the process take?",
            answer: "Usually a few weeks depending on ROC processing."
        },
        {
            question: "Can multiple objectives be added?",
            answer: "Yes, multiple activities can be included."
        },
        {
            question: "Is ROC approval required?",
            answer: "Yes, the change is valid only after ROC approval."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Modify Your Company’s"
                heroTitleSuffix="Business Objectives"
                heroSubtitle="With Legal Precision"
                heroDescription="Update your Object Clause in MOA to expand or restructure your business legally and stay compliant."
                stats={[
                    { count: "100%", label: "Compliance", icon: <Award size={20} /> },
                    { count: "Fast", label: "Processing", icon: <Briefcase size={20} /> },
                    { count: "Expert", label: "Support", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* DETAILS */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    eligibility: "Why Change",
                    advantages: "Benefits",
                    documents: "Documents",
                    process: "Process",
                    postCompliance: "Post Compliance",
                    features: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is an Object Clause?",
                    description: [
                        "The Object Clause defines the scope of activities a company can legally perform.",
                        "It ensures the company operates within permitted business activities.",
                        "To expand or diversify, the clause must be updated legally."
                    ]
                }}

                eligibility={{
                    title: "Why Do Companies Change Object Clause?",
                    list: [
                        { title: "Business Expansion", desc: "Enter new industries" },
                        { title: "Diversification", desc: "Add new services/products" },
                        { title: "Restructuring", desc: "Change business strategy" },
                        { title: "Compliance", desc: "Avoid legal issues" },
                        { title: "Investor Needs", desc: "Clarity for funding" }
                    ]
                }}

                advantages={{
                    title: "Benefits of Changing Object Clause",
                    list: [
                        { title: "Legal Authorization", desc: "Operate new activities legally" },
                        { title: "Flexibility", desc: "Explore new opportunities" },
                        { title: "Investor Confidence", desc: "Clear objectives" },
                        { title: "Compliance", desc: "Meet legal standards" },
                        { title: "Business Growth", desc: "Support expansion" }
                    ]
                }}

                documents={{
                    title: "Documents Required",
                    list: [
                        "MOA",
                        "Board Meeting Notice",
                        "Board Resolution",
                        "Special Resolution",
                        "General Meeting Notice",
                        "Updated Object Clause",
                        "ROC Filing Forms"
                    ]
                }}

                process={{
                    title: "Step-by-Step Process",
                    steps: [
                        { step: "01", title: "Board Meeting", desc: "Approve proposed change" },
                        { step: "02", title: "Special Resolution", desc: "Shareholder approval" },
                        { step: "03", title: "ROC Filing", desc: "Submit forms" },
                        { step: "04", title: "MOA Update", desc: "Amend clause" },
                        { step: "05", title: "Approval", desc: "ROC validates change" }
                    ]
                }}

                postCompliance={{
                    title: "Post Compliance Requirements",
                    list: [
                        { title: "Update Records", desc: "MOA and registers" },
                        { title: "Inform Stakeholders", desc: "Communicate updates" },
                        { title: "Align Operations", desc: "Work as per new objectives" },
                        { title: "Update Filings", desc: "Modify regulatory data" }
                    ]
                }}

                features={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Support", desc: "Legal professionals" },
                        { title: "End-to-End Service", desc: "Complete handling" },
                        { title: "Fast Processing", desc: "Quick approvals" },
                        { title: "Compliance Assurance", desc: "100% accuracy" },
                        { title: "Transparent Service", desc: "Clear communication" }
                    ]
                }}
            />

            <FAQLayout
                title="Object Clause FAQs"
                subtitle="Common questions about Object Clause changes"
                faqs={faqs}
            />
        </div>
    );
};

export default ChangeInObjectClause;