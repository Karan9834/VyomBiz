import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const NBFCCompliance = () => {

    const faqs = [
        {
            question: "What is RBI role?",
            answer: "RBI regulates NBFC operations and compliance."
        },
        {
            question: "Is compliance mandatory?",
            answer: "Yes, annual and periodic filings are required."
        },
        {
            question: "What happens if non-compliant?",
            answer: "Penalties or license cancellation may occur."
        },
        {
            question: "Can compliance be outsourced?",
            answer: "Yes, professionals can manage compliance."
        }
    ];

    return (
        <div className="w-full bg-white text-[#1a1a1a]">

            {/* HERO */}
            <HeroLayout
                heroTitleMain="Stay Compliant"
                heroTitleSuffix="Grow Your NBFC"
                heroSubtitle="With Confidence"
                heroDescription="Ensure your NBFC meets RBI regulations with expert compliance support."
                whatsIncludedList={[
                    "RBI Return Filing",
                    "Audit Support",
                    "Regulatory Advisory"
                ]}
                stats={[
                    { count: "500+", label: "Clients", icon: <Users size={20} /> },
                    { count: "99%", label: "Success", icon: <Briefcase size={20} /> },
                    { count: "24/7", label: "Support", icon: <Building2 size={20} /> }
                ]}
            />
            <TalkExpert />

            {/* DETAILS */}
            <DetailsLayout
                navLabels={{
                    overview: "Overview",
                    advantages: "Importance",
                    eligibility: "Requirements",
                    process: "Process",
                    features: "Services",
                    postCompliance: "Challenges",
                    whyChooseUs: "Why Choose Us",
                    faq: "FAQ"
                }}

                overview={{
                    title: "What is NBFC Compliance?",
                    description: [
                        "NBFC compliance refers to regulatory obligations under RBI.",
                        "It ensures transparency and financial stability.",
                        "NBFCs must follow strict reporting and governance rules."
                    ]
                }}

                advantages={{
                    title: "Why NBFC Compliance is Important",
                    list: [
                        { title: "Maintain License", desc: "Keep RBI approval active" },
                        { title: "Avoid Penalties", desc: "Prevent legal issues" },
                        { title: "Build Trust", desc: "Investor confidence" },
                        { title: "Transparency", desc: "Clear operations" }
                    ]
                }}

                eligibility={{
                    title: "Key Compliance Requirements",
                    list: [
                        { title: "Annual Filing", desc: "Returns and audits" },
                        { title: "RBI Returns", desc: "NBS forms" },
                        { title: "Event Compliance", desc: "Changes in structure" }
                    ]
                }}

                process={{
                    title: "Our Compliance Process",
                    steps: [
                        { step: "01", title: "Assessment", desc: "Review compliance status" },
                        { step: "02", title: "Documentation", desc: "Collect data" },
                        { step: "03", title: "Filing", desc: "Submit returns" },
                        { step: "04", title: "Monitoring", desc: "Ongoing tracking" }
                    ]
                }}

                features={{
                    title: "Our NBFC Services",
                    list: [
                        { title: "RBI Filing", desc: "Return submission" },
                        { title: "Audit Support", desc: "Statutory audits" },
                        { title: "Advisory", desc: "Regulatory guidance" },
                        { title: "Documentation", desc: "Record management" }
                    ]
                }}

                postCompliance={{
                    title: "Common Challenges",
                    list: [
                        { title: "Deadlines", desc: "Missing due dates" },
                        { title: "Errors", desc: "Incorrect filings" },
                        { title: "Complex Rules", desc: "RBI regulations" }
                    ]
                }}

                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    list: [
                        { title: "Expert Team", desc: "RBI specialists" },
                        { title: "Accurate Filing", desc: "Error-free process" },
                        { title: "Fast Processing", desc: "Quick compliance" },
                        { title: "End-to-End Support", desc: "Complete service" }
                    ]
                }}
            />

            <FAQLayout
                title="NBFC Compliance FAQs"
                subtitle="Common NBFC compliance questions"
                faqs={faqs}
            />
        </div>
    );
};

export default NBFCCompliance;
