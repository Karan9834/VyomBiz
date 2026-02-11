import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationRussia Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-russia
 */

const CompanyRegistrationRussia = () => {

    const faqs = [
        {
            question: "How much does it cost to register a company in Russia?",
            answer: "The approximate costs include a Minimum Share Capital of 10,000 RUB (~105 Euros), State Registration Fees of 4,000 RUB (~42 Euros), Company Seal costs between 30-40 Euros, and Notary Services around 300 Euros."
        },
        {
            question: "What is the minimum share capital required?",
            answer: "The minimum share capital required is 10,000 RUB, out of which at least 50% must be paid up at the time of incorporation."
        },
        {
            question: "Do I need a local director or partner?",
            answer: "There is no strict regulatory requirement for a local nominee director, but you must appoint at least one director (who can be foreign) and a legal representative."
        },
        {
            question: "What are the common business structures?",
            answer: "The most common structures are Limited Liability Company (OOO), Joint Stock Company (AO), Individual Entrepreneur (IP), and Branch/Representative Office."
        },
        {
            question: "How long does the registration process take?",
            answer: "The process involves several steps like name reservation, document submission, and obtaining the certificate, which typically takes a few weeks depending on document readiness."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Russia"
                heroSubtitle="Start Business Easily with VyomBiz"
                heroDescription="Establish your business in Russia, a strategic bridge between Europe and Asia. We simplify legal compliance, documentation, and setup for a smooth entry."
                whatsIncludedList={[
                    "Drafting & Notarization of Charter",
                    "Business Registration Assistance",
                    "Taxpayer Identification Number (INN)",
                    "Business Visa & Work Permit Services",
                    "Accounting & Payroll Compliance"
                ]}
                stats={[
                    { count: "1000+", label: "Founders Assisted", icon: <Users size={20} /> },
                    { count: "200+", label: "Reliable Professionals", icon: <Briefcase size={20} /> },
                    { count: "99.9%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Strategic Expansion",
                    title: "Company Registration in Russia –",
                    highlightTitle: "An Overview",
                    description: [
                        "Russia, the 11th largest economy, offers a strategic location bridging Asia and Europe, making it a key logistical hub.",
                        "Foreign investors can access a large domestic market and skilled workforce. The government supports growth through tax incentives, especially in Special Economic Zones.",
                        <strong>Why Russia?</strong>,
                        "Membership in the Eurasian Economic Union (EAEU) grants access to a market of over 183 million consumers.",
                        "With a favorable tax system and diverse business structures like OOO and AO, Russia provides a robust environment for international business."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Limited Liability Company (OOO)", desc: "Most common structure. Partners have limited liability up to their contribution." },
                        { title: "Joint Stock Company (AO)", desc: "Suitable for larger businesses raising public capital through shares." },
                        { title: "Individual Entrepreneur (IP)", desc: "Best for sole proprietors. Full liability for profits and losses." },
                        { title: "Partnership", desc: "Owned by two or more individuals with unlimited share in profits and losses." },
                        { title: "Representative Office", desc: "Extension of a foreign parent company for market research and liaison." },
                        { title: "Branch Office", desc: "Separate unit of a foreign company allowed to conduct revenue-generating activities." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Company Formation",
                    subtitle: "Why investors choose Russia for business expansion.",
                    list: [
                        { title: "Appealing Tax System", desc: "Favorable tax environment with concessions in Special Economic Zones." },
                        { title: "Skilled Workforce", desc: "Access to experts in technology, engineering, and science." },
                        { title: "Large Domestic Market", desc: "Substantial consumer base with increasing purchasing power." },
                        { title: "Strategic Location", desc: "Critical transit hub between Europe and Asia." },
                        { title: "Government Incentives", desc: "Subsidies and tax breaks targeted at foreign investors." },
                        { title: "EAEU Access", desc: "Integrated market access to Eurasian Economic Union member countries." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for starting a business in Russia.",
                    list: [
                        { title: "Shareholders", desc: "Minimum 1 and maximum 50 shareholders allowed." },
                        { title: "Share Capital", desc: "Minimum 10,000 RUB, with 50% paid up at incorporation." },
                        { title: "Local Address", desc: "Must secure a locally registered office address." },
                        { title: "Directors", desc: "Minimum 1 director required. No strict requirement for a local nominee." },
                        { title: "Legal Representative", desc: "Mandatory appointment of a legal representative." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for Russia Business Registration.",
                    list: [
                        "Proposed Company Name (English & Russian)",
                        "Notarized Foundation Documents",
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)",
                        "Passport Copies of Directors & Shareholders",
                        "Lease/Rental Documents for Registered Address",
                        "Bank Statement (Share Capital Deposit)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1513326738677-0961ed2f3a05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Moscow / St Basil's Cathedral
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to incorporating in Russia.",
                    steps: [
                        { step: "01", title: "Choose Structure", desc: "Select the appropriate legal entity (e.g., OOO, AO)." },
                        { step: "02", title: "Reserve Name", desc: "Check availability and reserve name with Federal Tax Service (FTS)." },
                        { step: "03", title: "Submit Documents", desc: "File application, notarized docs, and passports with FTS." },
                        { step: "04", title: "Incorporation", desc: "Receive Certificate of Incorporation from FTS." },
                        { step: "05", title: "Tax ID (INN)", desc: "Apply for Tax Identification Number (INN) post-registration." },
                        { step: "06", title: "Bank Account", desc: "Open a corporate bank account for financial transactions." },
                        { step: "07", title: "Licenses", desc: "Apply for mandatory industry-specific licenses and permits." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for Russian market entry.",
                    list: [
                        { title: "1000+ Businesses Assisted", desc: "Proven track record with international clients." },
                        { title: "End-to-End Support", desc: "From name reservation to licensing and tax compliance." },
                        { title: "Reliable Professionals", desc: "Access to 200+ legal and business consultants." },
                        { title: "Client-Centric", desc: "Personalized solutions for every business need." },
                        { title: "99.9% Success Rate", desc: "Ensuring successful registration across jurisdictions." },
                        { title: "Dedicated Support", desc: "24/7 customer support and robust data security." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Russia"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationRussia;
