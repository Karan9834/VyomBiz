import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationPoland Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-poland
 */

const CompanyRegistrationPoland = () => {

    const faqs = [
        {
            question: "What is the minimum share capital for a Limited Liability Company (Sp. z o.o.) in Poland?",
            answer: "The minimum share capital required for a Limited Liability Company in Poland is PLN 5,000."
        },
        {
            question: "How long does company registration take in Poland?",
            answer: "With online registration, the process can be completed in as little as 1-3 days."
        },
        {
            question: "Do I need a local resident director?",
            answer: "No, there is no requirement for a local resident director. You must have at least one director, who can be a foreign national."
        },
        {
            question: "What are the key tax incentives?",
            answer: "Poland offers attractive incentives for businesses in Special Economic Zones (SEZs) and those involved in Research & Development (R&D)."
        },
        {
            question: "Can I register a company remotely?",
            answer: "Yes, you can register a company online without visiting Poland, using a Power of Attorney or e-signatures."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Poland"
                heroSubtitle="Start Your Business in the EU Today"
                heroDescription="Expand your business to Poland, a strategic gateway to the European Union with access to over 447 million customers. We provide end-to-end support for quick and compliant registration."
                whatsIncludedList={[
                    "Drafting & Notarization of Deed",
                    "KRS & ZUS Registration",
                    "NIP & REGON Issuance",
                    "Business Visa Support",
                    "Accounting, Payroll & Tax Compliance"
                ]}
                stats={[
                    { count: "1400+", label: "Companies Registered", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "EU Expansion",
                    title: "Company Registration in Poland –",
                    highlightTitle: "An Overview",
                    description: [
                        "Poland, located in Central Europe, is a prime destination for investment due to its strategic location and strong economic fundamentals.",
                        "As an EU member, it offers businesses access to a unified market of 447 million consumers. The country boasts a competitive labor force and a thriving startup ecosystem.",
                        <strong>Why Poland?</strong>,
                        "Poland offers a business-friendly environment with attractive tax incentives, especially in Special Economic Zones (SEZs).",
                        "With world-class infrastructure and a high ranking in English proficiency, Poland is an ideal location for foreign entrepreneurs to establish and grow their presence in Europe."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Sole Proprietorship (JDG)", desc: "Simplest form for individuals. Owner has unlimited liability." },
                        { title: "Limited Liability Company (Sp. z o.o.)", desc: "Most common structure. Min capital PLN 5,000. Liability limited to contribution." },
                        { title: "Limited Liability Partnership (sp.k.)", desc: "Partnership offering limited liability protection to some partners." },
                        { title: "Joint Stock Company (S.A.)", desc: "For large businesses. Min capital PLN 100,000. Suitable for public trading." },
                        { title: "Subsidiary Company", desc: "Legal entity with independent identity, majority-owned by a foreign parent company." },
                        { title: "Branch Office", desc: "Extension of a foreign company. Not a separate legal entity." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Registration",
                    subtitle: "Why businesses choose Poland for expansion.",
                    list: [
                        { title: "Tax Incentives", desc: "Attractive tax breaks for R&D and operations in Special Economic Zones." },
                        { title: "Strategic Location", desc: "Central location providing easy access to both Western and Eastern European markets." },
                        { title: "Skilled Workforce", desc: "Access to a highly educated, cost-effective, and multilingual labor force." },
                        { title: "Startup Ecosystem", desc: "Thriving environment for tech, e-commerce, and innovation." },
                        { title: "EU Funding", desc: "Access to various EU grants and subsidies to boost business growth." },
                        { title: "Ease of Doing Business", desc: "Digitalized processes allow for fast and efficient online registration." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for incorporating in Poland.",
                    list: [
                        { title: "Share Capital", desc: "Minimum PLN 5,000 for LLC (Sp. z o.o.)." },
                        { title: "Directors", desc: "Minimum 1 director required. Can be a foreign national." },
                        { title: "Shareholders", desc: "Minimum 1 shareholder required (individual or corporate entity)." },
                        { title: "Registered Address", desc: "Must have a physical office address in Poland." },
                        { title: "Legal Capacity", desc: "Shareholders and directors must have full legal capacity." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for Poland Company Incorporation.",
                    list: [
                        "Articles of Association & Memorandum (M&AOA)",
                        "Proof of Share Capital Deposit",
                        "Passport/ID Copies of Directors & Shareholders",
                        "Power of Attorney (if applicable)",
                        "KRS Consent & Declaration",
                        "Registered Office Address Proof",
                        "Bank Statement"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1519197924294-cc3a4f785c99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Warsaw / Poland Generic
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to setting up your business.",
                    steps: [
                        { step: "01", title: "Choose Structure", desc: "Select the legal form (e.g., Sp. z o.o.) and check name availability." },
                        { step: "02", title: "Prepare Docs", desc: "Draft and notarize Articles of Association and other documents." },
                        { step: "03", title: "Appoint Board", desc: "Appoint the Management Board responsible for representation." },
                        { step: "04", title: "PESEL/NIP", desc: "Obtain PESEL (ID number) or NIP (Tax ID) if required." },
                        { step: "05", title: "KRS Registration", desc: "File application with the National Court Register (KRS)." },
                        { step: "06", title: "Bank Account", desc: "Open a corporate bank account and deposit share capital." },
                        { step: "07", title: "VAT & ZUS", desc: "Register for VAT and Social Security (ZUS) compliance." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for Polish business entry.",
                    list: [
                        { title: "95% Success Rate", desc: "Proven track record in successful company formations." },
                        { title: "End-to-End Support", desc: "From name reservation to VAT registration and licensing." },
                        { title: "Local Presence", desc: "Virtual office services in Warsaw, Kraków, and Gdańsk." },
                        { title: "Expert Consultants", desc: "Dedicated advisors for tax, legal, and compliance matters." },
                        { title: "Fast Turnaround", desc: "Efficient handling to ensure registration in 1-3 days." },
                        { title: "24/7 Support", desc: "Round-the-clock assistance for all your business needs." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Poland"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationPoland;
