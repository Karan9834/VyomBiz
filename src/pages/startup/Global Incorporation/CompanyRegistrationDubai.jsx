import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const CompanyRegistrationDubai = () => {

    const faqs = [
        {
            question: "Can I own 100% of my company in Dubai?",
            answer: "Yes, Dubai now allows 100% foreign ownership for many business activities on both the mainland and in free zones."
        },
        {
            question: "Is there Corporate Tax in Dubai?",
            answer: "As of June 2023, the UAE has introduced a 9% corporate tax on taxable income exceeding AED 375,000. However, Free Zone companies may benefit from exemptions if they meet qualifying criteria."
        },
        {
            question: "What is the difference between Mainland and Free Zone companies?",
            answer: "Mainland companies can trade directly within the local UAE market and taking government contracts. Free Zone companies are generally restricted to trading within the zone or internationally."
        },
        {
            question: "Do I need a local sponsor?",
            answer: "For most commercial and industrial activities, a local sponsor is no longer mandatory for 100% foreign ownership. However, some specific professional activities may still require a Local Service Agent (LSA)."
        },
        {
            question: "How long does the registration process take?",
            answer: "The process is fast-tracked and can often be completed within 1 week, provided all documents and approvals are in order."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration in"
                heroTitleSuffix="Dubai"
                heroSubtitle="Gateway to Global Business"
                heroDescription="Are you seeking company registration in Dubai? Join the club of thousands of foreign entrepreneurs who’ve successfully built a strong business presence in Dubai with our expert guidance."
                whatsIncludedList={[
                    "100% Foreign Ownership",
                    "Trade License for 1 Year",
                    "Virtual Address & Ejari",
                    "Emirates ID & Visa Assistance",
                    "Corporate Bank Account Opening"
                ]}
                stats={[
                    { count: "42863+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Hub",
                    title: "Company Registration in Dubai –",
                    highlightTitle: "An Overview",
                    description: [
                        "Dubai, with its strategic location at the crossroads of Asia, Africa, and Europe, is your gateway to the international market. It offers a vibrant ecosystem for businesses to thrive, backed by world-class infrastructure and pro-business government policies.",
                        "Foreign investors can now enjoy 100% ownership of their businesses in Dubai, making it one of the most attractive investment destinations globally.",
                        <strong>Why Setup in Dubai?</strong>,
                        "Apart from its strategic advantage, Dubai offers preferential tax rates, 100% repatriation of capital and profits, and a high standard of living.",
                        "Whether you choose a Mainland, Free Zone, or Offshore structure, Dubai provides a secure and stable environment for business growth."
                    ],
                    whyIdealTitle: "Types of Business Structures",
                    whyIdealList: [
                        { title: "Limited Liability Company (LLC)", desc: "Most common for mainland setup, allowing trade within UAE and internationally." },
                        { title: "Free Zone Company (FZC)", desc: "Ideal for 100% foreign ownership, tax exemptions, and duty-free imports." },
                        { title: "Branch Office", desc: "Allows foreign companies to establish a presence without a separate legal identity." },
                        { title: "Sole Proprietorship", desc: "Suitable for individual professionals and small business owners." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Dubai Registration",
                    subtitle: "Unlock unparalleled opportunities with a business setup in Dubai.",
                    list: [
                        { title: "100% Foreign Ownership", desc: "Complete control over your business on both Mainland and Free Zones." },
                        { title: "Strategic Location", desc: "Perfect gateway connecting East and West markets." },
                        { title: "Tax Benefits", desc: "Competitive corporate tax regime and extensive Double Tax Avoidance Agreements." },
                        { title: "Profit Repatriation", desc: "Freedom to repatriate 100% of capital and profits." },
                        { title: "World-Class Infrastructure", desc: "Access to state-of-the-art logistics, ports, and transport facilities." },
                        { title: "Duty-Free Imports", desc: "Benefits from free trade agreements and zones." }
                    ]
                }}
                eligibility={{
                    title: "Requirements for Setup",
                    subtitle: "Key checklist for registering your company in Dubai.",
                    list: [
                        { title: "Trade Name", desc: "Must be unique and approved by the Department of Economy and Tourism (DET)." },
                        { title: "Business Activity", desc: "Select the correct activity code matching your business nature." },
                        { title: "Structure Selection", desc: "Choose between Mainland, Free Zone, or Offshore." },
                        { title: "Office Space", desc: "Physical or virtual office address (Ejari) is mandatory." },
                        { title: "Initial Approval", desc: "Obtain initial approval to start the incorporation process." },
                        { title: "External Approvals", desc: "Some activities may require approvals from other government bodies." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents required for company formation.",
                    list: [
                        "Passport Copies (All partners & manaagers)",
                        "Visa/Entry Stamp Pages",
                        "Passport Size Photographs",
                        "Emirates ID (if resident)",
                        "No Objection Certificate (NOC) if employed",
                        "Memorandum of Association (MOA)",
                        "Ejari (Tenancy Contract)",
                        "Business Plan (for certain Free Zones)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea904f18f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process in 6 Steps",
                    subtitle: "Simplified journey to your Dubai Company Incorporation.",
                    steps: [
                        { step: "01", title: "Select Activity & Name", desc: "Choose business activity and reserve a trade name." },
                        { step: "02", title: "Initial Approval", desc: "Apply for initial approval from DET or Free Zone Authority." },
                        { step: "03", title: "Draft MOA/LSA", desc: "Draft and sign Memorandum of Association or Local Service Agent agreement." },
                        { step: "04", title: "Office Location", desc: "Rent an office and obtain Ejari (Tenancy Contract)." },
                        { step: "05", title: "Get Approvals", desc: "Submit documents and get additional approvals if needed." },
                        { step: "06", title: "License Issuance", desc: "Pay fees and receive your Trade License to commence business." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for hassle-free business setup in Dubai.",
                    list: [
                        { title: "Market Expertise", desc: "Deep knowledge of UAE laws, Free Zones, and Mainland regulations." },
                        { title: "End-to-End Support", desc: "From licensing to visa processing and bank account opening." },
                        { title: "Pro Services", desc: "Efficient handling of government liaisons and document clearances." },
                        { title: "Cost-Effective", desc: "Transparent pricing with no hidden costs." },
                        { title: "Strategic Advice", desc: "Guidance on the best jurisdiction and structure for your business." },
                        { title: "100% Digital", desc: "Streamlined processes with digital documentation support." },
                        { title: "Post-Setup Care", desc: "Assistance with VAT, Corporate Tax, and annual renewals." },
                        { title: "Network Access", desc: "Connect with our network of banking and legal partners." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Dubai"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationDubai;
