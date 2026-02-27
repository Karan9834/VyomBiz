import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import PricingSection from "../../../components/CompanyRegistration/PricingSection.jsx";


/**
 * Section8Company Page
 * Refactored to match TrustRegistration & SocietyRegistration design.
 */

const Section8Overview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Social Entrepreneurship
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Section 8 Company Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Section 8 Company Registration is essential to encourage non-profitable goals. Donations made to Section 8 Companies are eligible for deductions under the rules of the Income Tax Act, and these companies enjoy tax exemptions. The sole purpose of the establishment is to promote social entrepreneurship and charity in India to help the ones in need.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is a Section 8 Company?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Section 8 Company is a Non-Profit Organization (NPO) created to advance commerce, art, science, sports, education, research, social welfare, religion, charity, protection of the environment, or any other comparable goal. In contrast to other businesses, it uses the money it makes to achieve its declared goals rather than dividing it up among its members.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
                            alt="Section 8 Company Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Section8CompanyAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Social Entrepreneurship
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Section 8 Incorporation
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Section 8 Companies enjoy distinct legal advantages and tax exemptions.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                            alt="Section 8 Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Recognition", desc: "Gets legal recognition and can accept donations from outside sources." },
                        { title: "Tax Exemptions", desc: "Eligible for 12A & 80G registration; donors get tax deductions." },
                        { title: "Limited Liability", desc: "Members/Directors have limited liability, protecting personal assets." },
                        { title: "Perpetual Existence", desc: "Continues to exist indefinitely until dissolved, regardless of member changes." },
                        { title: "Zero Stamp Duty", desc: "Exempted from paying stamp duty on Memorandum and Articles of Association." },
                        { title: "Credibility", desc: "Higher credibility compared to Societies and Trusts, easing grant approvals." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Section8Eligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Section 8 Company Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To incorporate a Section 8 Company in India, it's essential to understand the eligibility criteria first.
                    Mandatory requirements to incorporate a Section 8 Company are mentioned below-
                </p>

                {/* Directors */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Directors and Shareholders
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Minimum 2 Directors –
                            </span>{" "}
                            Minimum two shareholders/directors are required.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Resident Director –
                            </span>{" "}
                            At least one director must be a resident of India.
                        </li>
                    </ul>
                </div>

                {/* Non-profit Object */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Non-profit Objectives
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Non-profit Object – </span>
                            Must promote arts, science, charity, education, research, social welfare, religion, etc.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">No Dividends – </span>
                            Profits cannot be distributed as dividends to members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Reinvestment – </span>
                            Profits must be reinvested into the company outcomes and objectives.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">Action Plan – </span>
                        A detailed 3-year action plan is often required outlining the company's objectives and activities.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Section 8 Company Registration Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const Section8DocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Section 8 Company Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To incorporate a Section 8 Company in India, you need to submit the following documents.
                    List of KYC and office documents required for incorporation:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of Directors/Shareholders.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Aadhaar / Voter ID – </span>
                            Identity proof of all directors and shareholders.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Passport / Driving License – </span>
                            Additional identity proof of directors and shareholders.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Passport Size Photographs – </span>
                            Recent photographs of all directors and shareholders.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Rent Agreement – </span>
                            Rent Agreement for the Registered Office address.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Utility Bill – </span>
                            Latest Electricity/Water bill for address proof.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NOC from Landlord – </span>
                            No Objection Certificate from the property owner.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Digital Signature (DSC) & DIN – </span>
                            Digital Signature Certificate and Director Identification Number for directors.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const Section8ProcessSection = () => {
    const steps = [
        {
            title: "Name Approval",
            desc: "Apply for name reservation with words like Association, Foundation, etc. through the MCA portal."
        },
        {
            title: "DSC & DIN",
            desc: "Obtain Digital Signatures and Director Identification Numbers for all directors."
        },
        {
            title: "Drafting",
            desc: "Draft Memorandum (MoA) & Articles of Association (AoA) with non-profit clauses."
        },
        {
            title: "License (INC-12)",
            desc: "Apply for Section 8 License from the Central Government through INC-12 form."
        },
        {
            title: "Incorporation",
            desc: "File SPICe+ (INC-32) form for final Certificate of Incorporation from MCA."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Section 8 Company Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for Section 8 Company registration in India involves structured documentation,
                        regulatory approvals, and compliance with statutory requirements. The
                        step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="Section 8 Company Registration Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Steps */}
                    <div className="lg:col-span-2">

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200"
                            >
                                {/* Step Number */}
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Bottom border */}
                        <div className="border-t border-slate-200"></div>

                        {/* CTA */}
                        <div className="mt-12 text-center">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Section 8 Company Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const Section8FeaturesSection = () => {
    const features = [
        {
            title: "Expert Licensing",
            desc: "Specialized support for Section 8 licensing and compliance with Companies Act, 2013."
        },
        {
            title: "MoA Drafting",
            desc: "Legal drafting of MoA & AoA with non-profit clauses ensuring compliance."
        },
        {
            title: "Compliance Management",
            desc: "End-to-end compliance management post-incorporation including annual filings."
        },
        {
            title: "Tax Guidance",
            desc: "Assistance with 12A & 80G registrations for tax exemptions."
        },
        {
            title: "Fast Track Processing",
            desc: "Expedited processing with correct documentation for quicker approval."
        },
        {
            title: "Annual Filing Support",
            desc: "Support for annual maintenance and returns to maintain legal status."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of Section 8 Company Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Section 8 Company registration provides legal recognition, tax exemptions, and credibility
                        for your non-profit objectives.
                    </p>
                </div>

                {/* Features Rows */}
                <div>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300"
                        >
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {index + 1}.
                            </div>

                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const Section8Company = () => {
    const faqs = [
        {
            question: "What is a Section 8 Company?",
            answer: "A Section 8 Company is a Non-Profit Organization (NPO) registered under the Companies Act, 2013, established to promote commerce, art, science, sports, education, research, social welfare, religion, charity, or protection of the environment."
        },
        {
            question: "Can a Section 8 Company distribute profits?",
            answer: "No, a Section 8 Company cannot distribute profits or dividends to its members. Any profit or income generated must be utilized solely for promoting the objectives of the company."
        },
        {
            question: "What are the tax benefits available?",
            answer: "Section 8 companies can avail tax exemptions under Section 12A and 80G of the Income Tax Act. Donors also get tax deductions for their contributions under Section 80G."
        },
        {
            question: "What is the minimum number of directors required?",
            answer: "A minimum of two directors are required to incorporate a Section 8 Company. At least one director must be a resident of India."
        },
        {
            question: "How can I check if my Section 8 Company is registered?",
            answer: "You can check the registration status by visiting the Ministry of Corporate Affairs (MCA) website and using the 'View Company Master Data' service with your Corporate Identification Number (CIN)."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Section 8 Company"
                heroTitleSuffix="Registration"
                heroSubtitle="Simplified Non-Profit Incorporation"
                heroDescription="Start your Non-Profit Organization with full legal recognition. We simplify the Section 8 incorporation process, ensuring compliance and helping you achieve your philanthropic goals effortlessly."
                whatsIncludedList={[
                    "Greater Credibility among Donors",
                    "Eligible for Tax Exemptions (80G & 12A)",
                    "Expert Legal Consultation",
                    "Complete Documentation Support"
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
                overview={<Section8Overview />}
                advantages={<Section8CompanyAdvantages />}
                eligibility={<Section8Eligibility />}
                documents={<Section8DocumentsSection />}
                process={<Section8ProcessSection />}
                features={<Section8FeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Section 8 Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default Section8Company;
