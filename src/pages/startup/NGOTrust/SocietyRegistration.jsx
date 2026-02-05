import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * SocietyRegistration Page
 * Refactored to match TrustRegistration design using shared layouts.
 */

const SocietyRegistration = () => {
    const faqs = [
        {
            question: "How can I register my society online in India?",
            answer: "To register a society, you typically need to submit a cover letter requesting registration, a Memorandum of Association, a copy of the Society's rules and regulations, a list of all members, declarations from office holders, and residential proof for each participant."
        },
        {
            question: "What is the minimum number of members required to form a society?",
            answer: "According to the Societies Registration Act, 1860, a minimum of seven persons are required to form a society in India."
        },
        {
            question: "Can a Society operate for profit?",
            answer: "No, a society is formed for charitable, literary, scientific, or religious purposes and functions as a non-profit organization. Any income generated must be used for the promotion of its objectives."
        },
        {
            question: "Is it mandatory to register a society?",
            answer: "While registration is not strictly mandatory, it is highly recommended. A registered society gains legal status, can sue and be sued, can hold property, and is eligible for tax exemptions."
        },
        {
            question: "Who can be a member of a society in India?",
            answer: "Any individual, company, foreigner, or registered society can subscribe to the Memorandum of Association of the society."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Society Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Simplify Community Progress"
                heroDescription="Society Registration is pivotal for community progress. We simplify this procedure, guaranteeing a quick and easy registration process to accomplish your philanthropic goals."
                whatsIncludedList={[
                    "More than 500 societies registered with our assistance",
                    "Trusted by 50,000+ customers for compliance & registration",
                    "Expert Legal Consultation",
                    "Dedicated Relationship Manager"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Philanthropic Goals",
                    title: "Society Registration in India –",
                    highlightTitle: "An Overview",
                    description: [
                        "In India, the main purpose of a society is to accomplish philanthropic goals. As per the Societies Registration Act of 1860, the founding members of a society must adhere to certain requirements for the organization to be registered.",
                        "Registering as a society offers several advantages. It gives societies legal status, allowing them to operate legally and take advantage of certain government benefits. It also creates a formal framework that builds members' and potential stakeholders' confidence and trust.",
                        <strong>What is a Society?</strong>,
                        "A society is an organization where people who share interests get together to perform certain tasks as a group. Generally, societies are registered to further common endeavours in the fields of athletics, music, culture, religion, art, and education.",
                        "While it is not required, registering these institutions under the Societies Registration Act of 1860 is recommended for increased growth, legal recognition, and transparency in operations."
                    ],
                    whyIdealTitle: "Key Objectives",
                    whyIdealList: [
                        { title: "Science & Literature", desc: "Promotion of Science, Literature, and Fine Arts." },
                        { title: "Charitable Assistance", desc: "Providing charitable assistance and donations to the needy." },
                        { title: "Education", desc: "Dissemination of political education and general knowledge." },
                        { title: "Public Museums", desc: "Maintenance of libraries, reading rooms, galleries, and museums." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Society Registration",
                    subtitle: "Registering a society enables legal operations, financial benefits, and builds credibility.",
                    list: [
                        { title: "Legal Recognition", desc: "Registration acts as legal recognition, allowing the society to operate independently of its members." },
                        { title: "Perpetual Succession", desc: "A registered society has perpetual succession; it continues to exist even if membership changes." },
                        { title: "Limited Liability", desc: "Members enjoy limited liability, shielding personal assets from the legal obligations of the society." },
                        { title: "Access to Funds", desc: "Easier access to grants, donations, and resources from public and private entities." },
                        { title: "Tax Exemptions", desc: "Charitable societies are eligible for tax exemptions under sections like 12A and 80G." },
                        { title: "Credibility", desc: "Increases trust among donors, stakeholders, and the public, enhancing the society's reputation." }
                    ]
                }}
                eligibility={{
                    title: "Requirements & Eligibility",
                    subtitle: "Essential criteria for registering a Society in India.",
                    list: [
                        { title: "Minimum 7 People", desc: "A minimum of 7 persons are required to form a society." },
                        { title: "Societies Act Object", desc: "Objectives must align with the Societies Registration Act, 1860." },
                        { title: "Non-profit Nature", desc: "Must function as a non-profit and independent organization." },
                        { title: "Unique Name", desc: "The society name must be distinct and distinct from existing ones." },
                        { title: "Registered Office", desc: "Must have a verified registered office address." },
                        { title: "Governing Body", desc: "Formation of a governing body to manage affairs." }
                    ]
                }}
                documents={{
                    title: "Mandatory Documentation",
                    description: "Complete list of documents required for Society Registration.",
                    list: [
                        "PAN Card of all Members",
                        "Aadhaar / Voter ID of Members",
                        "Passport / Driving License of Members",
                        "Latest Bank Statement",
                        "Memorandum of Association (MOA)",
                        "Rules & Regulations of Society",
                        "Covering Letter requesting registration",
                        "Proof of Registered Office (Rent Agreement/NOC)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Registration Process in 5 Steps",
                    subtitle: "Simplified journey to your Society Registration.",
                    steps: [
                        { step: "01", title: "Documentation", desc: "Gather PAN, KYC, and address proofs of all members." },
                        { step: "02", title: "Name Selection", desc: "Choose a unique, compliant name for the society." },
                        { step: "03", title: "Drafting", desc: "Draft MOA and Rules & Regulations of the Society." },
                        { step: "04", title: "Application", desc: "Submit application to the Registrar of Societies." },
                        { step: "05", title: "Certification", desc: "Get Registration Certificate upon approval." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "End-to-end support for your Society formation.",
                    list: [
                        { title: "Expert Consultation", desc: "Guidance on legal and structural requirements." },
                        { title: "Documentation", desc: "Complete support in drafting MOA and Rules." },
                        { title: "Seamless Filing", desc: "Hassle-free application filing with the Registrar." },
                        { title: "Regulatory Compliance", desc: "Ensuring all legal norms are met." },
                        { title: "End-to-End Assist", desc: "From name search to final certification." },
                        { title: "Transparent Process", desc: "Clear communication at every step." },
                        { title: "Post-Reg Support", desc: "Guidance on annual filings and compliances." },
                        { title: "Tailored Solutions", desc: "Services customized to your specific goals." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Society Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default SocietyRegistration;
