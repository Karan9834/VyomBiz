import React from "react";
import { UserCheck, FileText, Globe, Scale } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * TrademarkAssignment Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist (Restrictions/Requirements)
 * 6. Documents Required
 * 7. Registration Process (Assignment Procedure)
 * 8. Why Choose Us
 * 9. FAQ
 */

const TrademarkAssignment = () => {

    const faqs = [
        {
            question: "What are the Basic Elements of the Trademark Assignment Agreement?",
            answer: "The agreement must include the Effective Date, Trademark details, Assignor and Assignee details, Consideration amount, Warranties, Signatures, and optional Notarization."
        },
        {
            question: "Can an unregistered trademark be assigned?",
            answer: "Yes, an unregistered trademark can be assigned with or without the goodwill of the business involved. A request has to be made on Form TM-16 for this purpose."
        },
        {
            question: "Can an Individual Assign a Trademark?",
            answer: "Yes, any individual who is the registered proprietor of a trademark can assign it to another person or entity."
        },
        {
            question: "Do trademark assignments need to be notarized?",
            answer: "While notarization is not strictly mandatory, it is highly recommended to authenticate the assignment deed. Once executed, the assignment must be recorded with the Trademark Registry."
        },
        {
            question: "Why is it essential to get a Trademark Assignment Agreement?",
            answer: "It serves as lawful proof of transfer of ownership, essential when a brand or business is sold. It protects the rights of the new owner and prevents future disputes."
        }
    ];

    const assignmentOverviewContent = (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Trademark Assignment – An Overview
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trademark Assignment is a process where the ownership of a trademark is transferred from one person/entity (Assignor) to another (Assignee). This can legally transfer all rights, title, and interest in the mark.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Assignments can be made for both registered and unregistered trademarks, with or without the goodwill of the business.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Types of Assignments include Complete Assignment (all rights transferred), Partial Assignment (specific products/services), Assignment with Goodwill (brand value transferred), and Assignment without Goodwill (brand used for different purpose).
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7984c1bc8179?auto=format&fit=crop&q=80"
                            alt="Trademark Assignment"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Brand Transfer
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Assignment
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why assigning a trademark can be beneficial for your business.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                            alt="Trademark Assignment Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Brand Monetization", desc: "Unlocking the financial value of the trademark for the owner." },
                        { title: "Resources Saving", desc: "The assignee saves time, money, and effort required to build a brand from scratch." },
                        { title: "Valid Legal Proof", desc: "The assignment deed serves as concrete evidence of ownership transfer." },
                        { title: "Business Expansion", desc: "Facilitates entering new markets or industries with an established name." },
                        { title: "IP Maintenance", desc: "Ensures the trademark remains active and protected under new ownership." },
                        { title: "Goodwill Transfer", desc: "Allows the new owner to capitalize on the existing reputation of the brand." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">{item.title}</h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trademark Assignment"
                heroTitleSuffix="Services"
                heroSubtitle="Smooth Transfer of Trademark Ownership"
                heroDescription="Ensure a seamless transfer of trademark ownership with Vyombiz. Whether it's a complete assignment or with goodwill, we guide you through the legal process to protect your brand's value during the transition."
                whatsIncludedList={[
                    "Drafting Assignment Deed",
                    "Filing Form TM-P",
                    "handling Registrar Queries",
                    "Complete Legal Support"
                ]}
                stats={[
                    { count: "99%", label: "SLA Delivery", icon: <UserCheck size={20} /> },
                    { count: "10,000+", label: "Happy Customers", icon: <FileText size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Globe size={20} /> }
                ]}
            />



            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={assignmentOverviewContent}
                advantages={advantagesContent}
                eligibility={{
                    title: "Restrictions & Requirements",
                    subtitle: "Key considerations before initiating a trademark assignment.",
                    list: [
                        { title: "Multiple Rights Creation", desc: "Restriction on assignments that result in the creation of multiple exclusive rights in different people for the same goods/services." },
                        { title: "Geographical Split", desc: "Restriction on splitting rights based on different parts of India for the same goods/services." },
                        { title: "TM Agreement", desc: "A written agreement is mandatory to authorize the assignment." },
                        { title: "Registrar Direction", desc: "Mandatory for assignments with goodwill to seek Registrar's direction within specified timelines." },
                        { title: "Public Notice", desc: "Advertisement in the defined manner is required for certain types of assignments." },
                        { title: "Time Limit", desc: "Application to register the assignment must be filed within 3 months (extendable) of the transfer." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Documents needed to process the Trademark Assignment.",
                    list: [
                        "Duly Stamped Assignment Deed",
                        "Affidavit of No Legal Proceedings",
                        "NOC from the Original Owner (Assignor)",
                        "Identity & Address Proof of Assignor & Assignee",
                        "Trademark Registration Certificate",
                        "Form TM-P (Application Form)",
                        "Power of Attorney",
                        "Goodwill Assessment (if applicable)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Assignment Procedure",
                    subtitle: "Steps to legally transfer trademark ownership.",
                    steps: [
                        { step: "01", title: "Application Filing", desc: "File Form TM-P with the Registrar of Trademarks." },
                        { step: "02", title: "Registrar Review", desc: "Registrar reviews the application and may ask for clarifications." },
                        { step: "03", title: "Advertisement", desc: "For assignments with goodwill, advertisement as per Registrar's direction." },
                        { step: "04", title: "Approval", desc: "On satisfaction, the Registrar approves the assignment." },
                        { step: "05", title: "ownership Update", desc: "The register is updated with the name of the new owner (Assignee)." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Expert assistance for a hassle-free trademark assignment experience.",
                    list: [
                        { title: "4.9/5 Rating", desc: "Trusted by thousands of customers globally." },
                        { title: "Expert Legal Team", desc: "10+ years of experience in IP and trademark laws." },
                        { title: "Seamless Process", desc: "We handle drafting, filing, and follow-ups end-to-end." },
                        { title: "Fast Turnaround", desc: "Committed to delivering services within agreed timelines." },
                        { title: "Cost-Effective", desc: "Transparent pricing with no hidden charges." },
                        { title: "Global Reach", desc: "Ability to assist with international trademark assignments." },
                        { title: "Dedicated Support", desc: "Relationship manager assigned for personalized assistance." },
                        { title: "Tech-Driven", desc: "Online tracking and updates for your application." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Trademark Assignment"
                faqs={faqs}
            />

        </div>
    );
};

export default TrademarkAssignment;
