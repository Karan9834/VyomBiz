import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Company RegistrationNewZeland Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-new-zealand
 */

const CompanyRegistrationNewZeland = () => {

    const faqs = [
        {
            question: "How to register a company in New Zealand from India?",
            answer: "The process involves reserving a business name, choosing a structure, gathering documents (passport/utility bill), applying online via the NZ Companies Office, verification, and obtaining the Certificate of Incorporation."
        },
        {
            question: "What are the benefits of company registration in New Zealand?",
            answer: "Benefits include access to 13 free trade agreements, a corruption-free economy, strategic global location, enhanced brand credibility, and a skilled, English-speaking workforce."
        },
        {
            question: "What are the types of companies in New Zealand?",
            answer: "Common types include Limited Liability Company (LLC), Sole Proprietorship, Partnership, Cooperative Society, Look-Through Company, and Branch Office."
        },
        {
            question: "Do I need a resident director?",
            answer: "Yes, you must appoint at least one director who lives in New Zealand or is a director of a company in a prescribed enforcement country (like Australia)."
        },
        {
            question: "What taxes do I need to register for?",
            answer: "You typically need to register for Income Tax and GST (if turnover exceeds NZD 60,000). You will also need an IRD number."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in New Zealand"
                heroSubtitle="Fast & Easy Company Registration"
                heroDescription="Start your business in New Zealand's investor-friendly economy. We provide end-to-end support for registration, tax filing, and compliance."
                whatsIncludedList={[
                    "NZBN Application Support",
                    "Assistance with IRD and GST Number",
                    "Bank Account Opening Support",
                    "Annual Return Filing",
                    "Post-Incorporation Accounting Setup"
                ]}
                stats={[
                    { count: "500+", label: "Founders Trusted", icon: <Users size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Expansion",
                    title: "Company Registration in New Zealand –",
                    highlightTitle: "An Overview",
                    description: [
                        "New Zealand offers a stable, transparent, and investor-friendly environment. It is consistently ranked highly in the World Bank’s Ease of Doing Business Index.",
                        "Entrepreneurs benefit from a corruption-free governance system and a strategic location in the Pacific capable of connecting with global markets.",
                        <strong>Why New Zealand?</strong>,
                        "It provides excellent infrastructure, supportive government policies, and access to 13 active free trade agreements.",
                        "The economy is resilient and growing, offering a supportive ecosystem for business registration and expansion."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Limited Liability Company (LLC)", desc: "Most prevalent type. Separate legal entity where shareholders' liability is limited to the value of their shares." },
                        { title: "Branch Office", desc: "Extension of a foreign parent company. Limited to carrying out business operations in NZ; parent company bears all liability." },
                        { title: "Sole Proprietorship", desc: "Simplest structure with one founder. The owner has unlimited liability for all debts and losses." },
                        { title: "Partnership Firm", desc: "Partners are jointly responsible for profits and losses. An arrangement to split company profits." },
                        { title: "Look-Through Company", desc: "Resembles an LLC but profits/losses are passed through to the owners' personal income tax. Max 5 shareholders." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Incorporation",
                    subtitle: "Why businesses choose New Zealand for expansion.",
                    list: [
                        { title: "Free Trade Agreements", desc: "Access to 13 active free trade agreements with nations worldwide." },
                        { title: "Corruption-Free Economy", desc: "Ranked as one of the least corrupt and most transparent economies globally." },
                        { title: "Strategic Location", desc: "Connects business ties with the world, increasing trade links and opportunities." },
                        { title: "Business Credibility", desc: "Registration enhances brand credibility with customers, investors, and partners." },
                        { title: "Economic Stability", desc: "Backed by a resilient economy offering a supportive ecosystem for growth." },
                        { title: "Skilled Workforce", desc: "Access to a well-educated, English-speaking, and skilled labor pool." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for registering a company in New Zealand.",
                    list: [
                        { title: "Resident Director", desc: "Must appoint at least 1 resident director (lives in NZ or Australia)." },
                        { title: "Shareholder", desc: "Must have a minimum of 1 shareholder." },
                        { title: "Unique Business Name", desc: "Must register a name that is not identical or offensive." },
                        { title: "Registered Address", desc: "Must have a physical registered office address in New Zealand." },
                        { title: "Constitution", desc: "Prepare and register the company's constitution (if applicable)." },
                        { title: "IRD Number", desc: "Obtain an Inland Revenue Department (IRD) number for tax purposes." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for NZ Company Incorporation.",
                    list: [
                        "Passport/Visa Copies (Directors & Investors)",
                        "Certified Copy of Utility Bill (Address Proof)",
                        "Business Plan",
                        "Company Constitution (MOA & AOA)",
                        "Director Consent Forms",
                        "Shareholder Details (Individual/Corporate)",
                        "Audited Financial Statements (if existing business)",
                        "Details of Registered Address"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1507699622177-388828d99617?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Generic NZ landscape/city
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to setting up your business.",
                    steps: [
                        { step: "01", title: "Name Reservation", desc: "Reserve your business name with the NZ Companies Office (valid for 20 days)." },
                        { step: "02", title: "Choose Structure", desc: "Select the appropriate business structure (e.g., LLC, Branch)." },
                        { step: "03", title: "Prepare Documents", desc: "Prepare Constitution, director consents, and identification docs." },
                        { step: "04", title: "Apply Online", desc: "Submit the registration application via the NZ Companies Office portal." },
                        { step: "05", title: "Verification", desc: "Application is assessed, including shareholder and director consents." },
                        { step: "06", title: "Incorporation", desc: "Receive the Certificate of Incorporation upon approval." },
                        { step: "07", title: "Post-Compliance", desc: "Get NZBN, IRD number, GST registration, and open bank account." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Trust VyomBiz?",
                    subtitle: "Complete assistance for your New Zealand business setup.",
                    list: [
                        { title: "Pre-Registration Consult", desc: "Expert guidance to understand the process and requirements." },
                        { title: "Name Reservation", desc: "Assistance in checking availability and reserving your preferred name." },
                        { title: "End-to-End Filing", desc: "Handling the entire online incorporation process with NZCO." },
                        { title: "Drafting Constitution", desc: "Drafting or reviewing company constitution and governance rules." },
                        { title: "Compliance Support", desc: "Guiding director/shareholder compliance and residency rules." },
                        { title: "Registered Address", desc: "Assistance in securing a registered office address in New Zealand." },
                        { title: "Bank Account", desc: "Streamlining financial operations by setting up a business bank account." },
                        { title: "Annual Filing", desc: "Timely filing of annual returns to keep your company in good standing." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about New Zealand Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationNewZeland;
