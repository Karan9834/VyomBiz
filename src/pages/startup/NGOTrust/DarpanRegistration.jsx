import React from "react";
import {
    Users,
    Briefcase,
    Building2,
    Landmark,
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import PricingSection from "../../../components/CompanyRegistration/PricingSection.jsx";

/**
 * DarpanRegistration Page
 * Refactored to match TrustRegistration design.
 */

const DarpanRegistration = () => {
    const faqs = [
        {
            question: "What is NGO Darpan?",
            answer: "NGO Darpan is a platform maintained by NITI Aayog that acts as an interface between NGOs/VOs and key government ministries/departments. It provides a unique ID to registered entities."
        },
        {
            question: "Is Darpan registration mandatory?",
            answer: "Yes, it is mandatory for NGOs seeking government grants or funding from any ministry or department. The unique ID is required to apply for schemes."
        },
        {
            question: "Who can register on the NGO Darpan portal?",
            answer: "Registered Trusts, Societies, and Section 8 Companies (Non-profit companies) are eligible to register on the Darpan portal."
        },
        {
            question: "Is there a fee for NGO Darpan registration?",
            answer: "No, the registration on the NGO Darpan portal is free of cost. However, professional assistance for correct filing may be chargeable."
        },
        {
            question: "What is the validity of the Darpan ID?",
            answer: "The Unique ID generated is valid for a lifetime unless the NGO is blacklisted or dissolved. However, profiles should be updated regularly."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NGO Darpan"
                heroTitleSuffix="Registration"
                heroSubtitle="Unlock Government Grants"
                heroDescription="A centralized platform by NITI Aayog bridging NGOs and the Government. Get your Unique ID to unlock government grants, schemes, and funding opportunities."
                whatsIncludedList={[
                    "Mandatory for Govt. Grants & Schemes",
                    "Enhances Trust & Credibility",
                    "Access to 35+ Central Ministries",
                    "Lifetime Validity"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= PRICING SECTION ================= */}
            <PricingSection />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Government Grants",
                    title: "NGO Darpan Registration –",
                    highlightTitle: "An Overview",
                    description: [
                        "The NGO Darpan Portal is a platform maintained by NITI Aayog (Govt. of India) that interfaces between Voluntary Organizations (VOs) / NGOs and key government ministries and departments.",
                        "Registration generates a unique ID for your NGO, which is a mandatory requirement to apply for government grants and schemes. It ensures transparency, efficiency, and accountability in the sector.",
                        <strong>Why is Darpan Registration Vital?</strong>,
                        "Connects you directly to 35+ Central Ministries offering various schemes for development. Without the Darpan ID, you cannot apply for these funds.",
                        "Your NGO gets listed in a national database, increasing your credibility with other donors, CSR agencies, and the public."
                    ],
                    whyIdealTitle: "Key Benefits",
                    whyIdealList: [
                        { title: "Grant Access", desc: "Mandatory for applying to government grants." },
                        { title: "Credibility", desc: "Increases trust with partners and donors." },
                        { title: "Updates", desc: "Receive timely info on new government schemes." },
                        { title: "FCRA Help", desc: "Useful for FCRA registration process." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Darpan ID",
                    subtitle: "Get recognized by the Government of India and unlock opportunities for growth.",
                    list: [
                        { title: "Govt. Grant Access", desc: "Apply for grants from various ministries directly through the portal." },
                        { title: "Credibility Boost", desc: "Increases trust among stakeholders, partners, and private donors." },
                        { title: "Information Flow", desc: "Receive timely updates about new government schemes and initiatives." },
                        { title: "Transparency", desc: "Maintains a transparent record of funds and projects, aiding in compliance." },
                        { title: "FCRA Assistance", desc: "Helpful for obtaining FCRA registration for foreign contributions." },
                        { title: "Networking", desc: "Part of a massive network of voluntary organizations across India." }
                    ]
                }}
                eligibility={{
                    title: "Who Can Register?",
                    subtitle: "Entities eligible for NGO Darpan Registration.",
                    list: [
                        { title: "Registered Society", desc: "Societies registered under the Societies Registration Act, 1860." },
                        { title: "Charitable Trust", desc: "Trusts registered under the Indian Trusts Act, 1882." },
                        { title: "Section 8 Company", desc: "Non-profit companies under Section 8 of the Companies Act, 2013." },
                        { title: "Valid Registration", desc: "Must possess a valid Registration Certificate." },
                        { title: "PAN Card", desc: "PAN Card in the name of the NGO/Entity." },
                        { title: "Governing Body", desc: "A functioning governing body or executive committee." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documents and details for registration.",
                    list: [
                        "Registration Certificate (Trust/Society/Co.)",
                        "PAN Card of the NGO",
                        "Trust Deed / MoA & AoA",
                        "PAN Card of 3 Executive Members",
                        "Aadhaar Card of 3 Executive Members",
                        "Mobile Number & Email ID",
                        "President / Chairman Name",
                        "Secretary & Treasurer Details",
                        "Chief Functionary Information",
                        "Operational Area (State/Dist)",
                        "Key Issues & Sector of Activity",
                        "Source of Funds Details"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1541818789-53fdc8137351?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Registration Procedure",
                    subtitle: "Step-by-step process for getting your Darpan ID.",
                    steps: [
                        { step: "01", title: "Sign Up", desc: "Create an account on the NGO Darpan Portal." },
                        { step: "02", title: "Profile", desc: "Fill basic details (PAN, Reg. No., etc.)" },
                        { step: "03", title: "Members", desc: "Add details of 3 executive members." },
                        { step: "04", title: "Upload", desc: "Upload Registration Certificate & Trust Deed." },
                        { step: "05", title: "Get ID", desc: "Unique ID is generated upon approval." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Expert assistance for seamless Darpan registration.",
                    list: [
                        { title: "Seamless Registration", desc: "Hassle-free process handling by experts." },
                        { title: "Document Verification", desc: "Thorough check to avoid rejection." },
                        { title: "Profile Management", desc: "Assistance in creating an accurate profile." },
                        { title: "Grant Updates", desc: "Information on relevant government grants." },
                        { title: "Compliance Support", desc: "Guidance on maintaining compliance." },
                        { title: "Expert Consultants", desc: "Experienced team for non-profit sector." },
                        { title: "Fast Processing", desc: "Quick turnaround time for registration." },
                        { title: "Error-Free Filing", desc: "Precision in data entry and submission." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about NGO Darpan Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default DarpanRegistration;
