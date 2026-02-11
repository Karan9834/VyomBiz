import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationAustralia Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-australia
 */

const CompanyRegistrationAustralia = () => {

    const faqs = [
        {
            question: "Do I need a resident director for an Australian company?",
            answer: "Yes, you must appoint at least one director who currently resides in Australia."
        },
        {
            question: "What are the key requirements for registration?",
            answer: "Key requirements include at least one shareholder, one resident director, a local registered office address, and a unique business name."
        },
        {
            question: "What taxes do I need to register for?",
            answer: "You typically need to register for Goods and Services Tax (GST) if your turnover exceeds AUD 75,000, along with obtaining a Tax File Number (TFN) and registering for Pay As You Go (PAYG) withholding if you have employees."
        },
        {
            question: "Can a foreign company operate in Australia without a full subsidiary?",
            answer: "Yes, a foreign company can establish an Australian Branch Office. It is not a separate legal entity, and the parent company remains liable for its debts."
        },
        {
            question: "How long does the registration process take?",
            answer: "Once all documents are prepared and the application is submitted to ASIC, the certificate of incorporation is often issued quickly, sometimes within minutes to a few days."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Australia"
                heroSubtitle="Fast Approval with VyomBiz®"
                heroDescription="Start your business in Australia's stable and growing economy. We handle ABN registration, compliance, and setup so you can focus on growth."
                whatsIncludedList={[
                    "ABN Registration Support",
                    "Virtual Office Address (3 Months)",
                    "GST Registration Assistance",
                    "Director Identification Number (DIN)",
                    "Nominee Director Services"
                ]}
                stats={[
                    { count: "500+", label: "Registered", icon: <Users size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Expansion",
                    title: "Company Registration in Australia –",
                    highlightTitle: "An Overview",
                    description: [
                        "Australia offers a long-standing stable economy and a transparent regulatory framework, making it an ideal destination for business expansion.",
                        "Foreign entrepreneurs can expand by registering a new company or establishing a branch office, provided they meet specific conditions like appointing a resident director.",
                        <strong>Why Australia?</strong>,
                        "It serves as a strategic gateway to the Asia-Pacific region with access to a highly skilled workforce and strong government support.",
                        "The Australian Securities and Investments Commission (ASIC) oversees company registration, ensuring a smooth and efficient process."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Proprietary Limited (Pty Ltd)", desc: "Ideal for SMEs. Separate legal entity limiting shareholder liability. Requires at least one resident director." },
                        { title: "Australian Public Company", desc: "Suitable for raising capital from the public. Requires at least 3 directors (2 residents) and can list on ASX." },
                        { title: "Australian Branch Office", desc: "Extension of a foreign parent company. Not a separate legal entity; parent company bears full liability." },
                        { title: "Sole Trader", desc: "Simplest structure. Individual and business are one entity. Unlimited personal liability." },
                        { title: "Partnership", desc: "Two or more people sharing profits and liabilities. Partners have unlimited personal liability." },
                        { title: "Australian Trust", desc: "Common for family businesses.Trustee holds assets for beneficiaries. Often has tax advantages." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Company Formation",
                    subtitle: "Why Australia is a top choice for global business.",
                    list: [
                        { title: "Stable Economy", desc: "Consistent economic growth and a robust banking sector provide a strong foundation." },
                        { title: "Strategic Location", desc: "Gateway to Asia-Pacific markets with lower tariffs through Free Trade Agreements." },
                        { title: "Ease of Doing Business", desc: "Consistently ranks high globally for its straightforward regulatory framework." },
                        { title: "Government Support", desc: "Incentives like R&D tax offsets and grants for innovation and growth." },
                        { title: "Skilled Talent", desc: "Access to a highly educated workforce and specialized talent from overseas." },
                        { title: "Quality of Life", desc: "High standard of living and work-life balance attract top talent and businesses." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for incorporating in Australia.",
                    list: [
                        { title: "Shareholder", desc: "Minimum of one shareholder required (can be foreign)." },
                        { title: "Resident Director", desc: "Must appoint at least one director who resides in Australia." },
                        { title: "Local Address", desc: "Must have a registered physical office address in Australia." },
                        { title: "Local Secretary", desc: "Public companies must appoint a company secretary residing in Australia." },
                        { title: "Unique Name", desc: "Business name must be unique and not resemble existing registered names." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for Australian Company Registration.",
                    list: [
                        "Completed Application Form",
                        "Passport Copies (Directors & Shareholders)",
                        "Proof of Registered Address",
                        "Shareholder Details",
                        "Director Identification Number (DIN)",
                        "Consent to Act as Director/Shareholder",
                        "Constitution (if applicable)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1523482580672-01e6f2837377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Sydney Opera House / Australia Generic
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to setting up your business.",
                    steps: [
                        { step: "01", title: "Pre-Registration", desc: "Prepare a business plan and appoint a resident director." },
                        { step: "02", title: "Secure Name", desc: "Check availability and reserve your unique business name with ASIC." },
                        { step: "03", title: "Obtain Identifiers", desc: "Apply for Australian Company Number (ACN) and Australian Business Number (ABN)." },
                        { step: "04", title: "Tax Registration", desc: "Register for GST (if turnover >$75k), PAYG, and TFN." },
                        { step: "05", title: "Submit Application", desc: "File Form 201 with ASIC including all required documents and fees." },
                        { step: "06", title: "Incorporation", desc: "Receive Certificate of Incorporation and ACN via email." },
                        { step: "07", title: "Post-Compliance", desc: "Maintain records, file annual reviews, and meet financial reporting obligations." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for Australian market entry.",
                    list: [
                        { title: "10+ Years Experience", desc: "Decade of expertise in assisting foreign and local entrepreneurs." },
                        { title: "Expert Consulting", desc: "Seamless guidance on structure, compliance, and legal requirements." },
                        { title: "Documentation Support", desc: "Reliable assistance in preparing and filing all necessary documents." },
                        { title: "Post-Reg Compliance", desc: "Ongoing support for tax filing, annual reviews, and corporate obligations." },
                        { title: "Expedited Process", desc: "Timely completion of applications for fast and seamless registration." },
                        { title: "Regulatory Ties", desc: "Close coordination with ASIC for a streamlined experience." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Australian Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationAustralia;
