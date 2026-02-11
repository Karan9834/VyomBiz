import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationGermany Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-Germany
 */

const CompanyRegistrationGermany = () => {

    const faqs = [
        {
            question: "What is the minimum share capital for a GmbH in Germany?",
            answer: "The minimum share capital required for a Limited Liability Company (GmbH) in Germany is €25,000."
        },
        {
            question: "Can a foreigner be a director of a German company?",
            answer: "Yes, there are no restrictions on the nationality of directors. A foreigner can be appointed as a director."
        },
        {
            question: "What is a UG (Unternehmergesellschaft) company?",
            answer: "A UG, often called a 'Mini-GmbH', is an entrepreneurial company suitable for startups with lower capital requirements (starting from €1)."
        },
        {
            question: "Is a supervisory board mandatory?",
            answer: "A supervisory board is generally mandatory for Joint Stock Companies (AG) and larger GmbHs with over 500 employees."
        },
        {
            question: "How long does it take to register a company in Germany?",
            answer: "The process typically takes a few weeks, depending on the complexity and speed of the Commercial Register (Handelsregister)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Germany"
                heroSubtitle="Fast Business Setup in Europe's Powerhouse"
                heroDescription="Establish your presence in Germany, the largest economy in Europe. We provide expert guidance for a compliant and hassle-free registration process."
                whatsIncludedList={[
                    "Drafting of MOA & AOA",
                    "Virtual Registered Address",
                    "Share Capital Assistance",
                    "Tax Advisory Services",
                    "1:1 Expert Consultation"
                ]}
                stats={[
                    { count: "15,000+", label: "Companies Registered", icon: <Users size={20} /> },
                    { count: "12+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "European Hub",
                    title: "Company Registration in Germany –",
                    highlightTitle: "An Overview",
                    description: [
                        "Germany is a global powerhouse of technology and innovation, offering access to 454 million customers in the EU.",
                        "As the world's 2nd largest exporter, it provides a stable economy, robust infrastructure, and a highly skilled workforce.",
                        <strong>Why Germany?</strong>,
                        "Germany offers a strategic location in the heart of Europe with a business-friendly environment supported by government incentives.",
                        "With over 90 double taxation treaties, it is an attractive destination for international investors seeking to expand their global footprint."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Limited Liability Company (GmbH)", desc: "Most common structure. Minimum capital €25,000. Liability limited to assets." },
                        { title: "Entrepreneurial Company (UG)", desc: "'Mini-GmbH' for startups. Lower capital requirement. Must build reserves." },
                        { title: "Joint Stock Company (AG)", desc: "For large companies. Minimum capital €50,000. Shares can be traded publicly." },
                        { title: "Sole Proprietorship (Einzelunternehmen)", desc: "Simple structure for individual owners. Unlimited personal liability." },
                        { title: "Limited Liability Partnership (KG)", desc: "Partnership with at least one general partner (unlimited liability) and one limited partner." },
                        { title: "Branch Office", desc: "Extension of a foreign parent company. Parent company is liable for obligations." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Registration",
                    subtitle: "Why businesses choose Germany for expansion.",
                    list: [
                        { title: "Strong Economy", desc: "Access to one of the most stable and largest economies in Europe." },
                        { title: "Strategic Location", desc: "Central location providing easy access to all European markets." },
                        { title: "Skilled Workforce", desc: "Access to a highly educated and technically skilled labor pool." },
                        { title: "Infrastructure", desc: "World-class logistics, transportation, and communication networks." },
                        { title: "Tax Advantages", desc: "Benefit from extensive double taxation treaties to minimize tax liabilities." },
                        { title: "Legal Protection", desc: "Strong legal framework protecting intellectual property and innovation." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for incorporating in Germany.",
                    list: [
                        { title: "Share Capital", desc: "€25,000 for GmbH, €50,000 for AG. Lower for UG." },
                        { title: "Shareholders", desc: "Minimum 1 shareholder (individual or corporate entity)." },
                        { title: "Directors", desc: "At least 1 director required. Can be of any nationality." },
                        { title: "Registered Address", desc: "Must have a local registered office address in Germany." },
                        { title: "Bank Account", desc: "Must open a corporate bank account to deposit share capital." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for Germany Company Incorporation.",
                    list: [
                        "Memorandum & Articles of Association (MOA & AOA)",
                        "Passports/IDs of Directors & Shareholders",
                        "Proof of Registered Address",
                        "Bank Certificate of Capital Deposit",
                        "Management Board Structure Details",
                        "Specimen Signatures",
                        "Power of Attorney (if applicable)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Germany / Berlin Generic
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to setting up your business.",
                    steps: [
                        { step: "01", title: "Choose Structure", desc: "Select the legal form (e.g., GmbH, UG) suitable for your business." },
                        { step: "02", title: "Name Reservation", desc: "Check availability and reserve your business name." },
                        { step: "03", title: "Business Plan", desc: "Draft a comprehensive business plan including financial projections." },
                        { step: "04", title: "Notarization", desc: "Notarize the Articles of Association and other documents." },
                        { step: "05", title: "Bank Account", desc: "Open a bank account and deposit the required share capital." },
                        { step: "06", title: "Registration", desc: "Apply to the Commercial Register (Handelsregister)." },
                        { step: "07", title: "Tax & VAT", desc: "Register for taxes and VAT with local authorities." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for German market entry.",
                    list: [
                        { title: "99% Success Rate", desc: "Proven track record with over 15,000 companies registered." },
                        { title: "End-to-End Support", desc: "From name check to tax registration and compliance." },
                        { title: "Virtual Offices", desc: "Addresses in Berlin, Frankfurt, Hamburg, and Munich." },
                        { title: "Expert Team", desc: "12+ years of experience in cross-border compliance." },
                        { title: "Customized Packages", desc: "Tailored solutions to meet your specific business needs." },
                        { title: "24/7 Support", desc: "Round-the-clock assistance for all your queries." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Germany"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationGermany;
