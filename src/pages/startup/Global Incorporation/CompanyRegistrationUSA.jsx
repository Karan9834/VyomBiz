import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * USAIncorporation Page matching TrustRegistration layout
 * Content sourced from: https://Vyombiz.io/company-registration-in-usa
 */

const USAIncorporation = () => {

    const faqs = [
        {
            question: "What are the documentation prerequisites for USA company formation?",
            answer: "The requirements include a unique business name, details of directors/shareholders (Passport/ID), and a registered office address in the chosen US state."
        },
        {
            question: "Is it possible to change my LLC to a C-Corp or S-Corp?",
            answer: "Yes, an LLC can elect to be taxed as a C-Corp or S-Corp by filing the appropriate forms (like Form 8832 or Form 2553) with the IRS."
        },
        {
            question: "What are the types of business structures in USA?",
            answer: "Common structures include Limited Liability Company (LLC), C-Corporation, S-Corporation, Limited Partnership (LP), and Sole Proprietorship."
        },
        {
            question: "Do I need to be a US resident to incorporate a company?",
            answer: "No, foreign nationals can incorporate an LLC or C-Corp in the USA without being a resident or having a physical presence, though a Registered Agent is required."
        },
        {
            question: "What is an EIN?",
            answer: "EIN (Employer Identification Number) is a unique nine-digit number assigned by the IRS to business entities for tax identification purposes."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in USA"
                heroSubtitle="Expand Your Business Globally"
                heroDescription="Incorporate your company in the USA with 100% foreign ownership and remote processing. We provide expert assistance for LLCs, C-Corps, and more."
                whatsIncludedList={[
                    "100% Remote Process",
                    "Assistance with Bank Account Opening",
                    "Registered Agent Services",
                    "EIN & Tax Filing Support"
                ]}
                stats={[
                    { count: "4000+", label: "Businesses Assisted", icon: <Users size={20} /> },
                    { count: "200+", label: "Local Consultants", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "States Covered", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Expansion",
                    title: "Company Registration in USA –",
                    highlightTitle: "An Overview",
                    description: [
                        "The USA is the world's largest economy, offering a robust infrastructure, diverse consumer base, and a business-friendly environment for startups and established enterprises.",
                        "Registering a company in the USA provides credibility, access to global capital markets, and the ability to conduct business in USD. Non-residents can easily form an LLC or C-Corporation.",
                        <strong>Why USA?</strong>,
                        "The US offers strong intellectual property protection, limited liability for owners, and a flexible legal framework. It serves as a gateway to international trade and innovation.",
                        "With 100% foreign ownership allowed, entrepreneurs can establish their presence without needing a local partner."
                    ],
                    whyIdealTitle: "Types of Business Structures",
                    whyIdealList: [
                        { title: "Limited Liability Company (LLC)", desc: "Hybrid structure offering liability protection of a corporation with the tax benefits of a partnership." },
                        { title: "C-Corporation", desc: "Separate legal entity owned by shareholders. Ideal for raising venture capital." },
                        { title: "S-Corporation", desc: "Pass-through entity avoiding double taxation, but with restrictions on ownership (mostly for US residents)." },
                        { title: "Limited Partnership (LP)", desc: "Partnership with at least one general partner with unlimited liability and one limited partner." },
                        { title: "Sole Proprietorship", desc: "Simplest form, owned and operated by one individual with no distinction between owner and business." }
                    ]
                }}
                advantages={{
                    title: "Benefits of USA Company Registration",
                    subtitle: "Unlock global opportunities and secure your business future.",
                    list: [
                        { title: "100% Foreign Ownership", desc: "Non-US residents can own 100% of the company." },
                        { title: "Limited Liability", desc: "Personal assets are protected from business debts and lawsuits." },
                        { title: "Global Credibility", desc: "A US-registered company commands respect and trust internationally." },
                        { title: "Access to Capital", desc: "Easier access to venture capital, angel investors, and public markets." },
                        { title: "Tax Benefits", desc: "Favorable tax treaties and potential deductions for business expenses." },
                        { title: "Intellectual Property", desc: "Strong legal framework for protecting trademarks, patents, and copyrights." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for incorporating a company in the USA.",
                    list: [
                        { title: "Unique Name", desc: "The company name must be distinguishable from existing entities." },
                        { title: "Registered Agent", desc: "Must have a registered agent with a physical address in the state of incorporation." },
                        { title: "Directors/Members", desc: "Minimum one director or member required. Can be a non-resident." },
                        { title: "EIN Number", desc: "Must obtain an Employer Identification Number from the IRS for tax purposes." },
                        { title: "Filing Articles", desc: "Must file Articles of Incorporation (Corp) or Organization (LLC)." },
                        { title: "Annual Compliance", desc: "Must adhere to annual report filings and franchise tax requirements." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents required for USA Company Incorporation.",
                    list: [
                        "Passport Copy (Directors & Shareholders)",
                        "Proof of Address (Utility Bill/Bank Statement)",
                        "Email & Contact Number",
                        "Proposed Company Names (3 preferences)",
                        "Director Identification Number (if applicable)",
                        "Social Security Number (if US Resident)",
                        "Articles of Incorporation/Organization",
                        "Operating Agreement or Bylaws"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to incorporating your US business.",
                    steps: [
                        { step: "01", title: "Business Planning", desc: "Choose business structure and state of incorporation." },
                        { step: "02", title: "Name Availability", desc: "Search and reserve your unique business name." },
                        { step: "03", title: "Appoint Registered Agent", desc: "Designate a legal representative in the state." },
                        { step: "04", title: "File Documents", desc: "Submit Articles of Organization/Incorporation to the State." },
                        { step: "05", title: "Get EIN", desc: "Apply for Employer Identification Number from IRS." },
                        { step: "06", title: "Operating Agreement", desc: "Draft internal operating rules and bylaws." },
                        { step: "07", title: "Bank Account", desc: "Open a US business bank account." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for global business expansion.",
                    list: [
                        { title: "Expert Guidance", desc: "Comprehensive advice on structure and compliance." },
                        { title: "End-to-End Support", desc: "From name reservation to post-incorporation compliance." },
                        { title: "Cost-Effective", desc: "Competitive pricing with no hidden charges." },
                        { title: "Quick Turnaround", desc: "Expedited filing services to get you started fast." },
                        { title: "Bank Support", desc: "Assistance with opening US corporate bank accounts." },
                        { title: "Tax Advisory", desc: "Guidance on US tax laws and filing requirements." },
                        { title: "Dedicated Support", desc: "Relationship manager for personalized assistance." },
                        { title: "Global Reach", desc: "Experience in handling incorporations across multiple jurisdictions." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about USA Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default USAIncorporation;
