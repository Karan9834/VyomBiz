import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationSingapore Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-singapore
 */

const CompanyRegistrationSingapore = () => {

    const faqs = [
        {
            question: "Why should I register a business in Singapore?",
            answer: "Singapore offers a robust infrastructure, tax-free dividends, 100% foreign ownership, strong IP protection, and a stable political environment."
        },
        {
            question: "What is the process for company registration in Singapore?",
            answer: "The process involves business name search, address registration, submitting documents to ACRA, obtaining the registration certificate, and setting up a bank account."
        },
        {
            question: "Do I need to obtain an Entrepass as a foreigner?",
            answer: "You may need an EntrePass if you plan to be actively involved in the management of the business in Singapore. It serves as a work pass for foreign entrepreneurs."
        },
        {
            question: "What are the document requirements for registration?",
            answer: "Requirements include passports of directors/shareholders, business plan, Memorandum of Association (MOA), Articles of Association (AOA), and business address details."
        },
        {
            question: "What is the minimum number of directors required?",
            answer: "A private limited company must have at least one director who is a resident of Singapore (citizen, permanent resident, or EntrePass holder)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Singapore"
                heroSubtitle="Set Up Your Business in Asia's Leading Financial Hub"
                heroDescription="Register your company in Singapore with 100% foreign ownership. Benefit from low tax rates, a robust economy, and a strategic gateway to Asian markets."
                whatsIncludedList={[
                    "ACRA Name Checking (Unlimited)",
                    "Nominee Director Service",
                    "Registered Address for 1 Yr",
                    "Annual Tax Return Filing",
                    "Free 1st Yr Company Secretary"
                ]}
                stats={[
                    { count: "1000+", label: "Companies Registered", icon: <Building2 size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "43k+", label: "Happy Clients", icon: <Users size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Asia Expansion",
                    title: "Company Registration in Singapore –",
                    highlightTitle: "An Overview",
                    description: [
                        "Singapore is one of the most developed nations in Asia, offering advanced infrastructure and a strong economy. It is a top destination for fintech, manufacturing, and trade.",
                        "The country provides a stable business environment with transparent regulatory policies, making it ideal for foreign entrepreneurs and LLCs.",
                        <strong>Why Singapore?</strong>,
                        "It offers a strategic location, skilled workforce, and double taxation agreements with over 90 countries.",
                        "Singapore's tax system is highly attractive, with low corporate tax rates and exemptions for new startups."
                    ],
                    whyIdealTitle: "Business Structures",
                    whyIdealList: [
                        { title: "Private Limited Company (Pte Ltd)", desc: "Most common structure. Separate legal entity with limited liability for shareholders. Allows 100% foreign ownership." },
                        { title: "Sole Proprietorship", desc: "Owned by a single individual with unlimited liability. Easier to set up but higher risk." },
                        { title: "Limited Liability Partnership (LLP)", desc: "Combines features of partnerships and companies. Partners have limited liability." },
                        { title: "Subsidiary Company", desc: "A private limited company where the majority shareholder is another corporate entity (foreign or local)." },
                        { title: "Branch Office", desc: "Extension of a foreign parent company. Not a separate legal entity; liabilities extend to the parent company." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Registration",
                    subtitle: "Why global entrepreneurs choose Singapore.",
                    list: [
                        { title: "Low Tax Rates", desc: "Corporate tax rate is capped at 17%, with significant exemptions for new companies." },
                        { title: "100% Foreign Ownership", desc: "Foreigners can own 100% of the shares in a Singapore Private Limited Company." },
                        { title: "Double Tax Agreements", desc: "Avoid double taxation with Singapore's network of DTAs with over 90 countries." },
                        { title: "Ease of Doing Business", desc: "Consistently ranked as one of the easiest places in the world to do business." },
                        { title: "Skilled Workforce", desc: "Access to a highly educated and English-speaking workforce." },
                        { title: "Strategic Location", desc: "Gateway to Southeast Asia and major global markets." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Key criteria for Singapore company incorporation.",
                    list: [
                        { title: "Director", desc: "Minimum one resident director required (Citizen, PR, or EntrePass holder)." },
                        { title: "Shareholder", desc: "Minimum one shareholder (individual or corporate entity)." },
                        { title: "Company Secretary", desc: "Must appoint a qualified company secretary within 6 months of incorporation." },
                        { title: "Paid-up Capital", desc: "Minimum paid-up capital of SGD 1." },
                        { title: "Registered Address", desc: "Must have a local physical address in Singapore (P.O. Box not allowed)." },
                        { title: "Bank Account", desc: "Need to open a corporate bank account in Singapore." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents for ACRA verification.",
                    list: [
                        "Passport Copies of Directors & Shareholders",
                        "Address Proof (foreign & local)",
                        "Company Name Approval",
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)",
                        "Details of Shareholders (Individual/Corporate)",
                        "Consent to Act as Director",
                        "Consent to Act as Secretary"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Singapore skyline generic
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide to incorporating in Singapore.",
                    steps: [
                        { step: "01", title: "Name Approval", desc: "Check and reserve your company name with ACRA." },
                        { step: "02", title: "Prepare Documents", desc: "Prepare MOA, AOA, and get details of directors/shareholders." },
                        { step: "03", title: "ACRA Registration", desc: "Submit application to ACRA and pay registration fees." },
                        { step: "04", title: "Receive UEN", desc: "Get your Unique Entity Number (UEN) and Business Profile." },
                        { step: "05", title: "Open Bank Account", desc: "Open a corporate bank account with a local or international bank." },
                        { step: "06", title: "Tax Registration", desc: "Register for GST (if applicable) and corporate tax." },
                        { step: "07", title: "Licenses & Permits", desc: "Apply for any necessary business licenses based on your industry." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Trust VyomBiz?",
                    subtitle: "Your partner for seamless Singapore business setup.",
                    list: [
                        { title: "Expert Knowledge", desc: "Deep understanding of Singapore's regulatory landscape." },
                        { title: "One-Stop Solution", desc: "From incorporation to secretarial services and tax filing." },
                        { title: "Local Presence", desc: "Assistance with local directors and registered address services." },
                        { title: "Cost Effective", desc: "Transparent pricing with no hidden fees." },
                        { title: "Fast Turnaround", desc: "Efficient processing to get your business running quickly." },
                        { title: "Compliance Support", desc: "Ongoing support to ensure you stay compliant with ACRA and IRAS." },
                        { title: "Bank Account Help", desc: "Guidance on opening corporate bank accounts." },
                        { title: "Dedicated Manager", desc: "Personalized service for your business needs." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Singapore Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationSingapore;
