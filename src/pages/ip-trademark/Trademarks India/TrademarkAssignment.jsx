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


const TrademarkAssignmentEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Restrictions & Requirements
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key considerations before initiating a trademark assignment.
                </p>
                
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Multiple Rights Creation
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Restriction on assignments that result in the creation of multiple exclusive rights in different people for the same goods/services.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Geographical Split
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Restriction on splitting rights based on different parts of India for the same goods/services.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        TM Agreement
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        A written agreement is mandatory to authorize the assignment.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registrar Direction
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Mandatory for assignments with goodwill to seek Registrar's direction within specified timelines.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Public Notice
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Advertisement in the defined manner is required for certain types of assignments.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Time Limit
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Application to register the assignment must be filed within 3 months (extendable) of the transfer.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TrademarkAssignmentDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Required Documents
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documents needed to process the Trademark Assignment.
                </p>
                <div className="space-y-4">
                    
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Duly Stamped Assignment Deed</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Affidavit of No Legal Proceedings</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">NOC from the Original Owner (Assignor)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Identity & Address Proof of Assignor & Assignee</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Trademark Registration Certificate</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Form TM-P (Application Form)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Power of Attorney</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Goodwill Assessment (if applicable)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkAssignmentProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Assignment Procedure
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Steps to legally transfer trademark ownership.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                1.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Application Filing
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    File Form TM-P with the Registrar of Trademarks.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Registrar Review
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Registrar reviews the application and may ask for clarifications.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Advertisement
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    For assignments with goodwill, advertisement as per Registrar's direction.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Approval
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    On satisfaction, the Registrar approves the assignment.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    ownership Update
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    The register is updated with the name of the new owner (Assignee).
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkAssignmentFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert assistance for a hassle-free trademark assignment experience.
                    </p>
                </div>
                <div>
                    
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                1.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    4.9/5 Rating
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Trusted by thousands of customers globally.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Expert Legal Team
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    10+ years of experience in IP and trademark laws.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Seamless Process
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    We handle drafting, filing, and follow-ups end-to-end.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Fast Turnaround
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Committed to delivering services within agreed timelines.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Cost-Effective
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Transparent pricing with no hidden charges.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Global Reach
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Ability to assist with international trademark assignments.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                7.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Dedicated Support
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Relationship manager assigned for personalized assistance.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                8.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Tech-Driven
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Online tracking and updates for your application.
                                </p>
                            </div>
                        </div>
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

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
                eligibility={<TrademarkAssignmentEligibility />}
                documents={<TrademarkAssignmentDocumentsSection />}
                process={<TrademarkAssignmentProcessSection />}
                features={<TrademarkAssignmentFeaturesSection />}
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
