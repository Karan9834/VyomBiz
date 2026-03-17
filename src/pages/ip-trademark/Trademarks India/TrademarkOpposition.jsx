import React from "react";
import { ShieldAlert, Gavel, Scale, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Trademarks India/Trademark Opposition Services/benefits.png";
import overview from "../../../assets/Trademarks India/Trademark Opposition Services/overview.png";
import process from "../../../assets/Trademarks India/Trademark Opposition Services/process.jpg";

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
                    Who Can File a Trademark Opposition?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Eligibility criteria for filing a trademark opposition.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Any Individual
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Trademark law allows any person to file an opposition against a published trademark.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Prior Trademark Users
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Individuals or businesses that have been using a similar mark before the applicant.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered Trademark Owners
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Owners of already registered trademarks who want to protect their brand rights.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Public Interest Groups
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Members of the public who believe the mark may mislead consumers.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Business Competitors
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Companies seeking to prevent unfair advantage or monopoly over certain terms.
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
                    Notice of Opposition (Form TM-O) – Requirements
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Details required to file a Notice of Opposition (Form TM-O/TM-5).
                </p>
                <div className="space-y-4">

                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Opponent Information:</span> Name and address of the person or entity filing the opposition.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Applicant Information:</span> Trademark application number and details of the applicant.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Statement of Grounds:</span> Detailed explanation of why the trademark registration should be opposed.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Opponent Verification:</span> Confirmation and declaration signed by the opponent.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Authorization Document:</span> Power of attorney if the opposition is filed through a legal representative.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Supporting Evidence:</span> Documents proving earlier use or ownership of the mark.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Conflicting Trademark Details:</span> Information about the trademark causing the conflict.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Filing Fee Receipt:</span> Proof of payment for the opposition filing.</p>
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
                        Trademark Opposition Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step legal process for trademark opposition.
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
                                    Filing Notice of Opposition
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Submit Form TM-O within four months from the publication date.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Counter Statement by Applicant
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    The applicant must respond to the opposition within two months.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Evidence Submission by Opponent
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Opponent submits supporting documents and evidence within the specified timeline.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Evidence Submission by Applicant
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Applicant provides evidence supporting their trademark application.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Registrar Hearing
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Both parties present their arguments before the Registrar.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Registrar’s Final Order
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    The Registrar decides whether the opposition is accepted or the trademark proceeds to registration.
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
                        Why Choose Vyombiz for Trademark Opposition
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
                                Strategic Legal Approach
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Carefully planned legal strategies to strengthen your opposition case.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            2.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Experienced IP Lawyers
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Dedicated team specializing in intellectual property disputes.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            3.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Professional Documentation
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Accurate drafting of opposition notices, statements, and evidence.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            4.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Deadline Compliance
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Ensuring all filings are completed within statutory time limits.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            5.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Representation in Hearings
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Professional representation before the trademark authorities.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            6.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Transparent Pricing
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Affordable services with clear and transparent pricing structures.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            7.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Case Status Updates
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Continuous updates regarding the progress of your case.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            8.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                End-to-End Legal Support
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Complete assistance from filing opposition to the final decision.
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
            question: "What is a trademark opposition?",
            answer: "Trademark opposition is a legal process where a third party challenges the registration of a trademark after it is published in the Trademark Journal. It is commonly used to protect existing trademark rights and prevent confusion in the marketplace."
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
                            Overview of Trademark Opposition
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trademark opposition is a legal procedure where a third party challenges the registration of a trademark that has been accepted and published in the Trademark Journal by the Registrar.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            This process enables brand owners or members of the public to oppose trademarks that are identical, similar, or capable of causing confusion with existing trademarks.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            An opposition must be filed within four months from the date the trademark is advertised in the official journal.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                        Common Grounds for Trademark Opposition
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Valid reasons to oppose a trademark application in India.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Trademark Opposition Grounds"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Similar or Identical Mark", desc: "The proposed trademark is identical or deceptively similar to an existing registered or prior-used mark." },
                        { title: "Lack of Distinctiveness", desc: "The trademark is generic, descriptive, or does not have unique identifying characteristics." },
                        { title: "Application Filed in Bad Faith", desc: "The applicant filed the trademark with dishonest intentions or to misuse another brand’s reputation." },
                        { title: "Likelihood of Public Confusion", desc: "The mark may mislead consumers or create confusion in the market." },
                        { title: "Use of Prohibited Content", desc: "The mark includes elements that are illegal or restricted under applicable laws." },
                        { title: "Common or Generic Terms", desc: "The trademark contains words that are commonly used in trade or everyday language." }
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
                heroTitleSuffix="Services in India"
                heroSubtitle="Protect Your Brand from Infringement"
                heroDescription="Trademark opposition allows businesses to prevent the registration of conflicting trademarks. If a published trademark affects your brand rights, Vyombiz helps you file a strong opposition to protect your brand identity and market reputation."
                whatsIncludedList={[
                    "Drafting Notice of Opposition",
                    "Filing Counter-Statements",
                    "representation at Hearings",
                    "Expert Legal Strategy"
                ]}
                stats={[
                    { count: "4 Months", label: "Opposition Filing Period", icon: <Scale size={20} /> },
                    { count: "1000+", label: "Trademark Oppositions Handled", icon: <Gavel size={20} /> },
                    { count: "Dedicated", label: "IP Legal Team", icon: <ShieldAlert size={20} /> }
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
