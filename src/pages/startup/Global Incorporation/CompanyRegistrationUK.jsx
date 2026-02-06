import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * UKIncorporation Page matching TrustRegistration layout
 * Content sourced from: https://Vyombiz.io/company-registration-in-uk
 */

const UKIncorporation = () => {

    const faqs = [
        {
            question: "What addresses are required for company registration in the UK?",
            answer: "You need an official registered office address for correspondence with Companies House, and a service address for each director (which can be the same as the registered office)."
        },
        {
            question: "Can a non-resident register a company in the UK?",
            answer: "Yes, non-residents can register a company in the UK. There is no requirement effectively for directors or shareholders to be UK residents."
        },
        {
            question: "What is the minimum capital requirement?",
            answer: "There is no specific minimum capital requirement for a Private Limited Company (LTD), though at least one share must be issued."
        },
        {
            question: "Do I need a physical office in the UK?",
            answer: "You must have a registered office address in the UK for official mail, but you do not necessarily need a physical operational office if you operate remotely."
        },
        {
            question: "What is a SIC Code?",
            answer: "The Standard Industrial Classification (SIC) Code classifies your business activities for data reporting to Companies House."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in UK"
                heroSubtitle="Fast & Efficient UK Company Setup"
                heroDescription="Expand your business to the United Kingdom with our expert company registration services. Enjoy 100% foreign ownership, tax benefits, and access to a dynamic global marketplace."
                whatsIncludedList={[
                    "100% Foreign Ownership",
                    "No Resident Director Required",
                    "Fast Online Incorporation",
                    "Access to UK Banking"
                ]}
                stats={[
                    { count: "5000+", label: "UK Companies Formed", icon: <Users size={20} /> },
                    { count: "150+", label: "Legal Experts", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "European Gateway",
                    title: "Business Incorporation in UK –",
                    highlightTitle: "An Overview",
                    description: [
                        "The United Kingdom offers a prestigious and well-regulated business environment, making it a top choice for international entrepreneurs. Ranked highly for ease of doing business, the UK serves as a strategic gateway to European and global markets.",
                        "Setting up a company in the UK is straightforward, with digital-first processes allowing for quick incorporation.",
                        <strong>Why Incorporate in UK?</strong>,
                        "The UK provides a politically stable economy, a robust legal framework, and significant tax incentives for businesses. It is particularly renowned for its strong fintech ecosystem and access to a highly skilled workforce.",
                        "With a corporate tax rate that is competitive among major economies, the UK remains a hub for innovation and investment."
                    ],
                    whyIdealTitle: "Business Structures in UK",
                    whyIdealList: [
                        { title: "Limited Company (LTD)", desc: "Most common structure. Separate legal entity where shareholders' liability is limited to their investment." },
                        { title: "Limited Liability Partnership (LLP)", desc: "Combines flexibility of a partnership with limited liability. Ideal for professional service firms." },
                        { title: "Sole Trader", desc: "Simplest form, owned by one person. No distinction between personal and business assets." },
                        { title: "Partnership", desc: "Two or more people share management, profits, and unlimited liability for debts." },
                        { title: "Public Limited Company (PLC)", desc: "Can offer shares to the public. Requires minimum share capital of £50,000." }
                    ]
                }}
                advantages={{
                    title: "Benefits of UK Company Registration",
                    subtitle: "Strategic advantages for your business growth.",
                    list: [
                        { title: "100% Foreign Ownership", desc: "Complete ownership allowed for foreign investors without local partner requirements." },
                        { title: "Tax Incentives", desc: "Favorable corporate tax rates and extensive double taxation treaties." },
                        { title: "Limited Liability", desc: "Protects personal assets of directors and shareholders from business debts." },
                        { title: "Global Credibility", desc: "A UK-registered company is recognized and trusted worldwide." },
                        { title: "Fintech Hub", desc: "Access to a world-leading financial ecosystem and banking infrastructure." },
                        { title: "Skilled Workforce", desc: "Access to a diverse pool of highly educated and talented professionals." }
                    ]
                }}
                eligibility={{
                    title: "Requirements for Registration",
                    subtitle: "Key checklist for setting up your UK company.",
                    list: [
                        { title: "Unique Name", desc: "Company name must be unique and not sensitive or offensive." },
                        { title: "Registered Office", desc: "Must have a physical address in the UK for official notices." },
                        { title: "Director", desc: "Minimum one director required (natural person), can be non-resident." },
                        { title: "Shareholder", desc: "Minimum one shareholder required. Can be same as director." },
                        { title: "Memorandum & Articles", desc: "Must adopt constitutional documents (MOA & AOA)." },
                        { title: "SIC Code", desc: "Must select at least one Standard Industrial Classification code." }
                    ]
                }}
                documents={{
                    title: "Documentation Required",
                    description: "Essential documents to proceed with UK incorporation.",
                    list: [
                        "Passport Copies of Directors/Shareholders",
                        "Proof of Residential Address (Utility Bill/Bank Statement)",
                        "Director's Service Address",
                        "Proposed Company Name",
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)",
                        "Statement of Capital",
                        "Completed Form IN01"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Simple steps to launch your UK business.",
                    steps: [
                        { step: "01", title: "Choose Structure", desc: "Select the legal entity type (e.g., Private Limited Company)." },
                        { step: "02", title: "Name Check", desc: "Verify availability of your desired company name." },
                        { step: "03", title: "Prepare Documents", desc: "Draft MOA, AOA, and collect ID/Address proofs." },
                        { step: "04", title: "Submit Application", desc: "File Form IN01 with Companies House (online/post)." },
                        { step: "05", title: "Incorporation", desc: "Receive Certificate of Incorporation upon approval." },
                        { step: "06", title: "Post-Setup", desc: "Register for taxes (Corporation Tax, VAT, PAYE)." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Partner with VyomBiz?",
                    subtitle: "Seamless UK entry strategy and execution.",
                    list: [
                        { title: "Global Expertise", desc: "In-depth knowledge of UK corporate laws and regulations." },
                        { title: "Fast-Track", desc: "Expedited registration process to get you trading sooner." },
                        { title: "Compliance Support", desc: "Ongoing assistance with annual filings and tax compliance." },
                        { title: "Bank Account", desc: "Guidance on opening a UK corporate bank account." },
                        { title: "Registered Address", desc: "Virtual office and registered address services available." },
                        { title: "Transparent Pricing", desc: "Clear fee structure with no hidden costs." },
                        { title: "24/7 Support", desc: "Dedicated support team for all your queries." },
                        { title: "One-Stop Solution", desc: "From incorporation to accounting and legal advisory." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about UK Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default UKIncorporation;
