import React from "react";
import { UserCheck, FileText, Globe, Scale } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Trademarks India/Trademark Assignment/benefits.png";
import overview from "../../../assets/Trademarks India/Trademark Assignment/overview.png";
import process from "../../../assets/Trademarks India/Trademark Assignment/process.jpg";
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Key Requirements for Trademark Assignment
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key considerations before initiating a trademark assignment.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Avoiding Multiple Exclusive Rights
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Assignments should not create multiple exclusive rights for identical goods or services.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Territorial Restrictions
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Trademark rights cannot be divided across different regions for the same products or services.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Written Assignment Agreement
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        A formal written agreement is required to legally complete the assignment.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registrar Approval
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        In some cases, the Registrar’s directions must be followed for assignment registration.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Public Advertisement
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Certain assignments require public notice as directed by the Trademark Registrar.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Filing Time Limit
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The application must be filed within three months from the assignment date (extendable).
                    </p>
                </div>
            </div>
        </section>
    );
};

const TrademarkAssignmentDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Trademark Assignment
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documents needed to process the Trademark Assignment.
                </p>
                <div className="space-y-4">

                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Assignment Deed:</span> Properly stamped agreement transferring trademark ownership.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Affidavit Declaration:</span> Declaration confirming no pending legal disputes.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">No Objection Certificate:</span> Consent from the assignor approving the transfer.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Identity and Address Proof:</span> PAN, Aadhaar, or other valid identity proof of both parties.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Trademark Certificate:</span> Proof of trademark registration if already registered.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Application Form TM-P:</span> Official form required to register the assignment with the registry.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Authorization Letter:</span> Permission allowing representatives to handle the filing.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Goodwill Documentation:</span> Supporting documents if the assignment includes business goodwill.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkAssignmentProcessSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Trademark Assignment Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Steps to legally transfer trademark ownership.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
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
                                    Filing Application
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Submit Form TM-P with the Trademark Registrar.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Registrar Examination
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    The Registrar reviews the assignment application and supporting documents.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Public Advertisement
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Certain assignments may require publication as directed by the Registrar.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Approval by Registrar
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Once verified, the Registrar approves the trademark assignment.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Register Update
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    The trademark register is updated with the name of the new owner.
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Trademark Assignment
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
                                Trusted Service Rating
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Highly rated services by satisfied clients.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            2.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Experienced Legal Experts
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Professionals with extensive experience in intellectual property laws.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            3.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                End-to-End Support
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Handling drafting, filing, and follow-ups for the assignment process.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            4.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Timely Service Delivery
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Focused on completing services within agreed timelines.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            5.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Transparent Pricing
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Clear pricing structure without hidden costs.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            6.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                International Assistance
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Support for both domestic and international trademark assignments.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            7.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Dedicated Assistance
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Personal support for handling client queries and updates.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            8.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Digital Tracking
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Online tracking for application progress and updates.
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
            question: "What are the essential elements of a trademark assignment agreement?",
            answer: "A trademark assignment agreement generally includes the effective date, trademark details, assignor and assignee information, consideration value, warranties, signatures of both parties, and optional notarization."
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of Trademark Assignment
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trademark assignment is the legal process through which ownership of a trademark is transferred from one party (Assignor) to another (Assignee). It transfers all rights, title, and interest related to the trademark.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Assignments may apply to both registered and unregistered trademarks and can be executed with or without transferring the business goodwill.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Common types of trademark assignments include complete assignment (all rights transferred), partial assignment (limited to certain goods or services), assignment with goodwill, and assignment without goodwill.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Brand Transfer
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages of Trademark Assignment
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why assigning a trademark can be beneficial for your business.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Trademark Assignment Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Trademark Monetization", desc: "Allows owners to unlock financial value by transferring trademark ownership." },
                        { title: "Saves Time and Resources", desc: "The assignee benefits from an established brand instead of building one from the beginning." },
                        { title: "Legal Ownership Evidence", desc: "The assignment deed acts as official proof of ownership transfer." },
                        { title: "Supports Business Expansion", desc: "Allows businesses to expand into new sectors using an existing brand identity." },
                        { title: "Continued IP Protection", desc: "Ensures the trademark remains valid and protected under the new owner." },
                        { title: "Transfer of Brand Reputation", desc: "The assignee can benefit from the brand’s established reputation and market recognition." }
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
                heroTitleSuffix="Ownership Transfer Services"
                heroSubtitle="Smooth Transfer of Trademark Ownership"
                heroDescription="Transfer trademark ownership smoothly with Vyombiz. Whether the assignment is complete or with goodwill, our experts guide you through the legal process to ensure a secure and compliant brand transfer."
                whatsIncludedList={[
                    "Drafting Assignment Deed",
                    "Filing Form TM-P",
                    "handling Registrar Queries",
                    "Complete Legal Support"
                ]}
                stats={[
                    { count: "99%", label: "On-Time Service Delivery", icon: <UserCheck size={20} /> },
                    { count: "10,000+", label: "Satisfied Clients", icon: <FileText size={20} /> },
                    { count: "50+", label: "Service Locations", icon: <Globe size={20} /> }
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

