import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * IntellectualPropertyDispute Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section (Mapped to Types of IP Disputes)
 * 5. Eligibility/Checklist (Mapped to Legal Framework)
 * 6. Documents Required (Synthesized based on context)
 * 7. Registration Process (Mapped to Litigation Process)
 * 8. Why Choose Us
 * 9. FAQ
 */


const IntellectualPropertyDisputeEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Legal Framework
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key Acts governing Intellectual Property disputes in India.
                </p>
                
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        The Patents Act, 1970
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Governs patent filing, grants, operational mechanisms, and infringement remedies.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        The Trademark Act, 1999
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Regulates trademark registration, protection, opposition, and penalties for infringement.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        The Copyright Act, 1957
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Protects original works and grants exclusive rights to authors and creators.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        The Designs Act, 2000
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Protects industrial designs and their visual features.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Commercial Courts Act
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Facilitates expedited resolution of commercial disputes, including IP cases.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Geographical Indications Act
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Protects goods with specific geographical origins and qualities.
                    </p>
                </div>
            </div>
        </section>
    );
};

const IntellectualPropertyDisputeDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Required Documents / Information
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential information and documents needed for IP dispute resolution.
                </p>
                <div className="space-y-4">
                    
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Registration Certificates (Trademark/Copyright/Patent)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Proof of First Use / Priority Dates</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Evidence of Infringement (Photos, Screenshots, Samples)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Copy of Opposing Party's Mark/Product</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Legal Notices Sent/Received</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Reply to Notices (if any)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Authorization Letters / Power of Attorney</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Details of Damages/Losses Incurred</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const IntellectualPropertyDisputeProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Litigation Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step approach to resolving IP disputes in India.
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
                                    Amicable Resolution
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Attempt negotiation or mediation to settle outside court.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Cease & Desist
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Send a legal notice demanding the infringer to stop conflicting activities.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Filing Suit
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    If unresolved, file a plaint in the appropriate court detailing infringement.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Court Proceedings
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Includes hearings, evidence presentation, cross-examination, and arguments.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Final Judgment
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Court issues verdict, potentially awarding injunctions and damages.
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

const IntellectualPropertyDisputeFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for Intellectual Property protection and dispute resolution.
                    </p>
                </div>
                <div>
                    
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                1.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    10+ Years Experience
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Proven track record in resolving complex IP disputes.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Strategic Advisory
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Tailored legal strategies for your specific industry and case.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Litigation Audit
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    In-depth case evaluation to ensure compliance and success.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Documentation Support
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Expert handling of legal notices, plaints, and counter-statements.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Court Representation
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Professional representation in IP Tribunals, High Courts, and Supreme Court.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Tech-Driven Solutions
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Leveraging legal tech for data analysis and stronger case building.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                7.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Government Liaison
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Strong rapport with regulatory bodies for smoother progression.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                8.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Post-Dispute Support
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Assistance with enforcement of orders and future protection.
                                </p>
                            </div>
                        </div>
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const IntellectualPropertyDispute = () => {

    const faqs = [
        {
            question: "What are the common types of intellectual property disputes?",
            answer: "Common types include utilizing a logo on a similar product, making a logo/trade dress that confuses buyers, copying media/content without permission (copyright), and manufacturing patented items without a license."
        },
        {
            question: "What happens if I ignore an IP infringement notice?",
            answer: "Ignoring an IP infringement notice can lead to legal action, including injunctions, heavy monetary penalties, and seizure of infringing goods."
        },
        {
            question: "Can I resolve an IP dispute without going to court?",
            answer: "Yes, many IP disputes are resolved through pre-litigation methods like negotiation, mediation, and arbitration, or by sending a cease and desist notice."
        },
        {
            question: "What is the role of an IP dispute lawyer?",
            answer: "An IP dispute lawyer helps in drafting legal notices, representing you in court, conducting due diligence, and formulating strategies to protect your intellectual property rights."
        },
        {
            question: "How long does IP litigation take in India?",
            answer: "The timeline varies based on complexity and court schedules. However, Commercial Courts aim to resolve disputes within a year of the first case management hearing."
        }
    ];

    const disputeOverviewContent = (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Intellectual Property Dispute – An Overview
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Intellectual Property disputes often arise when someone uses copyrighted content, patented inventions, or trademarked signs without authorization, leading to infringement. These conflicts can jeopardize your brand's reputation and revenue.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            At Vyombiz, our experienced legal professionals help you navigate the complexities of IP litigation across India. We provide end-to-end support tailored to your business needs to conflict resolution and rights restoration.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            We handle disputes related to patents, trademarks, copyrights, and designs, ensuring your intangible assets are safeguarded against unauthorized use.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
                            alt="Intellectual Property Dispute"
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
                        Legal Protection
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Common IP Disputes
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Understanding the different types of intellectual property conflicts.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1505664194779-8beaceb930b5?auto=format&fit=crop&q=80"
                            alt="IP Disputes"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Patent Infringement", desc: "Unauthorized making, using, or selling of a patented invention. Defenses include challenging validity or asserting non-infringement." },
                        { title: "Trademark Infringement", desc: "Use of an identical or confusingly similar mark by a third party, causing consumer confusion and brand damage." },
                        { title: "Copyright Infringement", desc: "Unauthorized use of creative works like music, films, or software. Requires proving originality and substantial similarity." },
                        { title: "Design Rights Violation", desc: "Copying the aesthetic features of a product. Owners must prove the design is new, original, and visually similar." },
                        { title: "Passing Off", desc: "Misrepresenting goods as those of another to capitalize on their goodwill, common in unregistered trademark disputes." },
                        { title: "Trade Secret Theft", desc: "Unauthorized acquisition or disclosure of confidential business information or processes." }
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
                heroTitleMain="Intellectual Property Dispute"
                heroTitleSuffix="Resolution"
                heroSubtitle="Expert Legal Support for IP Conflicts"
                heroDescription="Are you facing challenges related to intellectual property disputes in India? Get lawyer-led expert assistance with Vyombiz to ensure quick and timely legal support. We protect your IP rights effectively."
                whatsIncludedList={[
                    "Patent, Trademark, and Copyright Litigation",
                    "IP Appellate Board and Court Representation",
                    "Cease and Desist Notice Drafting",
                    "IP Due Diligence and Risk Assessment"
                ]}
                stats={[
                    { count: "10,000+", label: "IP Cases Resolved", icon: <Users size={20} /> },
                    { count: "500+", label: "IP Lawyers", icon: <Briefcase size={20} /> },
                    { count: "100%", label: "Client Satisfaction", icon: <Building2 size={20} /> }
                ]}
            />



            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={disputeOverviewContent}
                advantages={advantagesContent}
                eligibility={<IntellectualPropertyDisputeEligibility />}
                documents={<IntellectualPropertyDisputeDocumentsSection />}
                process={<IntellectualPropertyDisputeProcessSection />}
                features={<IntellectualPropertyDisputeFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Intellectual Property Disputes"
                faqs={faqs}
            />

        </div>
    );
};

export default IntellectualPropertyDispute;
