import React from "react";
import { ShieldAlert, Gavel, Scale, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * TrademarkOpposition Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Reasons for Opposition (Advantages)
 * 5. Eligibility Section
 * 6. Documents/Form TM-5 Details
 * 7. Procedure Steps
 * 8. Why Choose Us
 * 9. FAQ
 */


const TrademarkOppositionEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Can Oppose?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Eligibility criteria for filing a trademark opposition.
                </p>
                
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Any Person
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The law allows 'any person' to tile an opposition, not just registered owners.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Prior Users
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Owners of unregistered marks who have been using the mark prior to the applicant.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered Owners
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Proprietors of existing registered trademarks.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Customers/Public
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Members of the public who believe the mark is deceptive.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Competitors
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Business rivals wishing to prevent unfair monopoly over common terms.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TrademarkOppositionDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Form TM-5 & Requirements
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Details required to file a Notice of Opposition (Form TM-O/TM-5).
                </p>
                <div className="space-y-4">
                    
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Details of the Opponent (Name, Address)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Details of the Applicant & Application Number</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Grounds of Opposition (Detailed Statement)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Verification by the Opponent</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Power of Attorney (if filed by agent)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Evidence of Prior Use (if applicable)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Details of Conflicting Mark</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Fees Receipt</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkOppositionProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Opposition Procedure
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step legal process for trademark opposition.
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
                                    Notice of Opposition
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    File Form TM-O within 4 months of journal advertisement.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Counter-Statement
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Applicant must file a counter-statement (Form TM-O) within 2 months of receiving the notice.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Evidence by Opponent
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Opponent files evidence in support of opposition (Rule 45) within 2 months.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Evidence by Applicant
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Applicant files evidence in support of application (Rule 46) within 2 months.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Hearing
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Registrar conducts a hearing where both parties present their arguments.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Final Decision
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Registrar passes an order either allowing the opposition or registering the trademark.
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

const TrademarkOppositionFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert legal representation for your trademark disputes.
                    </p>
                </div>
                <div>
                    
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                1.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Strategic Defense
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Customized legal strategies to strengthen your opposition case.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Experienced Attorneys
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Team of specialized IP lawyers with years of litigation experience.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Document Drafting
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Precise drafting of notices, counter-statements, and evidence affidavits.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Timely Filing
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Ensuring all documents are filed within statutory deadlines to avoid abandonment.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Hearing Representation
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Strong representation before the Trademark Registrar and IPAB.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Cost-Effective
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Transparent pricing models tailored to your business needs.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                7.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Regular Updates
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Keep you informed at every stage of the legal proceedings.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                8.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Comprehensive Support
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Assistance from filing the notice to the final order.
                                </p>
                            </div>
                        </div>
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const TrademarkOpposition = () => {

    const faqs = [
        {
            question: "What exactly is Trademark Opposition?",
            answer: "A trademark opposition is a legal proceeding where a third party objects to the registration of a trademark that has been accepted and published in the Trademark Journal, usually to protect their own brand reputation."
        },
        {
            question: "What is the time limit to file a trademark opposition?",
            answer: "The notice of opposition must be filed within four months (3 months + 1 month extension) from the date the trademark was advertised in the Trademark Journal."
        },
        {
            question: "Who can file a trademark opposition?",
            answer: "Section 21 of the Trademark Act allows any person to file an opposition, regardless of personal or business interest. This includes customers, competitors, or members of the public."
        },
        {
            question: "What is the cost of filing a trademark opposition?",
            answer: "The government fee for filing a Notice of Opposition (Form TM-O) typically ranges between ₹2,700 to ₹3,000 depending on the mode of filing, excluding professional fees."
        },
        {
            question: "What happens if the applicant does not file a counter-statement?",
            answer: "If the trademark applicant fails to file a counter-statement within two months of receiving the opposition notice, the trademark application is deemed abandoned."
        }
    ];

    const oppositionOverviewContent = (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Trademark Opposition – An Overview
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A trademark opposition is a formal objection filed by a third party against the registration of a trademark that has been accepted by the Registrar and published in the Trademark Journal.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It allows brand owners and the public to prevent the registration of marks that are identical, similar, or likely to cause confusion with existing marks.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            The opposition must be filed within a strict timeline of 4 months from the date of advertisement in the journal.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1505664194779-8beaceb930b5?auto=format&fit=crop&q=80"
                            alt="Trademark Opposition"
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
                        Brand Defense
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Grounds for Opposition
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Valid reasons to oppose a trademark application in India.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80"
                            alt="Trademark Opposition Grounds"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Similarity", desc: "The mark is identical or deceptively similar to an existing registered trademark." },
                        { title: "Descriptiveness", desc: "The mark lacks distinctiveness or is purely descriptive of the goods/services." },
                        { title: "Bad Faith", desc: "The application was made in bad faith or with dishonest intentions." },
                        { title: "Public Confusion", desc: "The mark is likely to deceive the public or cause confusion." },
                        { title: "Prohibited Marks", desc: "The mark contains matter that is illegal, offensive, or prohibited under the Emblems and Names Act." },
                        { title: "Customary Language", desc: "The mark consists of terms common in current language or established trade practices." }
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
                heroTitleMain="Trademark Opposition"
                heroTitleSuffix="Services"
                heroSubtitle="Protect Your Brand from Infringement"
                heroDescription="Trademark opposition is a vital tool to stop conflicting marks from being registered. If you believe a published trademark infringes on your rights, Vyombiz helps you file a strong opposition to safeguard your brand's integrity."
                whatsIncludedList={[
                    "Drafting Notice of Opposition",
                    "Filing Counter-Statements",
                    "representation at Hearings",
                    "Expert Legal Strategy"
                ]}
                stats={[
                    { count: "4 Months", label: "Filing Window", icon: <Scale size={20} /> },
                    { count: "1000+", label: "Oppositions Filed", icon: <Gavel size={20} /> },
                    { count: "Expert", label: "Legal Team", icon: <ShieldAlert size={20} /> }
                ]}
            />



            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={oppositionOverviewContent}
                advantages={advantagesContent}
                eligibility={<TrademarkOppositionEligibility />}
                documents={<TrademarkOppositionDocumentsSection />}
                process={<TrademarkOppositionProcessSection />}
                features={<TrademarkOppositionFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Trademark Opposition"
                faqs={faqs}
            />

        </div>
    );
};

export default TrademarkOpposition;
