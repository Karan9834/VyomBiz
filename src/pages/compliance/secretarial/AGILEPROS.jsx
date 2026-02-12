import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    Briefcase,
    Building,
    CreditCard
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AGILEPROS = () => {
    const faqs = [
        {
            question: "What is AGILE PRO S?",
            answer: "AGILE-PRO-S (INC-35) is an integrated e-form used during company incorporation to apply for GSTIN, EPFO, ESIC, Profession Tax, Bank Account, and Shop & Establishment registration."
        },
        {
            question: "Is it mandatory to file AGILE PRO S?",
            answer: "Yes, it is mandatory to file AGILE PRO S along with the SPICe+ (INC-32) form during the incorporation of a new company."
        },
        {
            question: "Can I choose my bank for account opening?",
            answer: "Yes, the form allows you to select a preferred bank from a list of integrated banks for opening the company's current account."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="AGILE"
                heroTitleSuffix="PRO S"
                heroSubtitle="Integrated Incorporation Filing"
                heroDescription="Simplify your business setup. AGILE PRO S allows you to register for GST, EPFO, ESIC, Profession Tax, and open a bank account in a single go during incorporation."
                whatsIncludedList={[
                    "GST Registration",
                    "EPFO Registration",
                    "ESIC Registration",
                    "Profession Tax Registration",
                    "Bank Account Opening",
                    "Shops & Est. Registration"
                ]}
                stats={[
                    { count: "6-in-1", label: "Services", icon: <CheckCircle size={20} /> },
                    { count: "Fast", label: "Setup", icon: <Award size={20} /> },
                    { count: "Digital", label: "Process", icon: <Globe size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "AGILE PRO S - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "AGILE PRO S (Application for Goods and services tax Identification number, employees state Insurance corporation registration plus Employees provident fund organization registration, Profession tax registration, Opening of bank account and Shops and Establishment Registration) is a linked e-form filed with SPICe+.",
                        "It is an initiative by the Ministry of Corporate Affairs (MCA) to improve the Ease of Doing Business in India.",
                        "By filing this single form, a new company can simultaneously apply for multiple vital registrations, significantly reducing the post-incorporation compliance burden."
                    ]
                }}
                advantages={{
                    title: "Benefits",
                    subtitle: "One Form, Multiple Registrations",
                    list: [
                        { title: "GSTIN", desc: "Obtain Goods and Services Tax Identification Number immediately." },
                        { title: "Social Security", desc: "Register for EPFO and ESIC for employee benefits." },
                        { title: "Banking", desc: "Automatic initiation of Current Bank Account opening." },
                        { title: "State Compliance", desc: "Profession Tax and Shop Act registration (in participating states)." },
                        { title: "Efficiency", desc: "Saves time and eliminates the need for separate applications." }
                    ]
                }}
                eligibility={{
                    title: "Requirements",
                    subtitle: "Pre-requisites for filing",
                    list: [
                        { title: "SPICe+ Integration", desc: "Must be filed as a linked form with SPICe+ Part B." },
                        { title: "Director Details", desc: "DIN and DSC of detailed directors." },
                        { title: "Business Activity", desc: "Main division of industrial activity code." },
                        { title: "Specimen Signature", desc: "Specimen signature card for bank account opening." }
                    ]
                }}
                process={{
                    title: "Filing Workflow",
                    subtitle: "How it works",
                    steps: [
                        { step: "01", title: "SPICe+ Part A", desc: "Reserve the Company Name." },
                        { step: "02", title: "SPICe+ Part B", desc: "Fill incorporation details." },
                        { step: "03", title: "AGILE PRO S", desc: "Fill details for GST, EPFO, ESIC, etc. in the linked form." },
                        { step: "04", title: "Attachments", desc: "Attach required documents and DSC." },
                        { step: "05", title: "Submission", desc: "Submit all linked forms together on MCA portal." },
                        { step: "06", title: "Approvals", desc: "Receive COI along with GSTIN and other registration numbers." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Incorporation Specialists",
                    list: [
                        { title: "One-Stop Solution", desc: "We handle the entire incorporation stack." },
                        { title: "Error Checking", desc: "Prevent rejection due to data mismatch." },
                        { title: "Bank Coordination", desc: "Assistance with banking partners for account activation." },
                        { title: "Post-Setup", desc: "Guidance on first compliance steps after registration." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default AGILEPROS;
