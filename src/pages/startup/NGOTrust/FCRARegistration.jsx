import React from "react";
import { Users, Briefcase, Building2, Globe, FileText, CheckCircle } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * FCRARegistration Page matching Vyombiz layout styles
 * URL: https://VyomBiz.io/fcra-registration
 */

const FCRAOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Impact
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FCRA Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In India, any organization that wishes to accept foreign contributions must obtain Foreign Contribution Regulation Act (FCRA) Registration from the Central Government. It is essential for organizations engaged in specific cultural, economic, educational, religious, or social programs.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FCRA registration ensures accountability and transparency in using foreign funds, protecting the organization and its donors under Indian law. It stands for the Foreign Contribution Regulation Act, enacted to regulate foreign donations to individuals and organizations, ensuring they operate in alignment with national interests.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&q=80"
                            alt="FCRA Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FCRARegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Global Funding
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of FCRA Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Unlock global funding opportunities for your NGO.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                            alt="FCRA Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Global Credibility", desc: "Allows non-profit organizations to accept foreign donations legally, boosting international credibility." },
                        { title: "Access to Foreign Funds", desc: "Organizations can receive foreign funds smoothly to support their social missions." },
                        { title: "Investor Confidence", desc: "Reassures both domestic and foreign investors about the organization’s compliance and commitment." },
                        { title: "Tax Benefits", desc: "Eligible organizations gain tax exemptions under the Income Tax Act when combined with 12A & 80G." },
                        { title: "Enhanced Sustainability", desc: "Access to foreign funds increases the organization’s stability and ability to pursue long-term activities." },
                        { title: "Legal Protection", desc: "Ensures the organization operates within the legal framework, avoiding penalties and legal issues." }
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

const FCRAEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for FCRA Registration?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To apply for FCRA Registration in India, it's essential to understand the eligibility criteria first.
                    Requirements to apply for FCRA Registration are mentioned below-
                </p>

                {/* Registered Entity */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered Entity
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Legal Structure –
                            </span>{" "}
                            Must be registered under Societies Registration Act, Indian Trusts Act, or Companies Act (Section 8).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                FCRA Bank Account –
                            </span>{" "}
                            Must have an FCRA account opened with SBI, New Delhi Main Branch.
                        </li>
                    </ul>
                </div>

                {/* Track Record */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Track Record and Financial Criteria
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Track Record – </span>
                            Must have a minimum of 3 years of proven activities benefiting society.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Financial Criteria – </span>
                            A minimum of Rs. 15 lakhs must have been spent on core activities over the past 3 years.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">12A Registration – </span>
                        Shall hold a valid 12A registration certificate under the Income Tax Act.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Clean Record – </span>
                        Key functionaries must not have any record of prosecution or conviction.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const FCRADocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for FCRA Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for FCRA Registration, you need to submit the following documents.
                    Essential documents for FCRA Registration application are mentioned below:
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Registration Certificate – </span>
                            Registration Certificate of Association/Society/Trust/Section 8 Company.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Memorandum of Association (MoA) / Trust Deed – </span>
                            Copy of MoA or Trust Deed outlining objectives.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Activity Report – </span>
                            Activity Report for the last 3 years describing charitable work.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Audited Statement of Accounts – </span>
                            Audited Statement of Accounts for the last 3 years.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Affidavit – </span>
                            Affidavit of each key functionary.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Details of Key Functionaries – </span>
                            Aadhaar and PAN of all key functionaries.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Chief Functionary Signature & Seal – </span>
                            Signature and seal of the association.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NITI Ayog Registration – </span>
                            NITI Ayog Registration Certificate (Darpan ID).
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const FCRAProcessSection = () => {
    const steps = [
        {
            title: "Access Portal",
            desc: "Visit the Ministry of Home Affairs FCRA Online Forms portal."
        },
        {
            title: "Form Selection",
            desc: "Choose Form FC-3A for fresh registration or FC-3B for prior permission."
        },
        {
            title: "Fill Application",
            desc: "Complete the online application form with organization and executive details."
        },
        {
            title: "Upload Documents",
            desc: "Upload all required documents and affidavit in the prescribed format."
        },
        {
            title: "Fee Payment",
            desc: "Pay the requisite government fee online through the portal."
        },
        {
            title: "Submission",
            desc: "Submit the application and track status for approval from MHA."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for FCRA Registration in India?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for FCRA registration in India involves structured documentation,
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
                            alt="FCRA Registration Process"
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
                                Start Your FCRA Registration Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const FCRAFeaturesSection = () => {
    const features = [
        {
            title: "Network of Professionals",
            desc: "Blessed with a network of experienced CAs, Lawyers, and Consultants for expert guidance."
        },
        {
            title: "High Success Rate",
            desc: "Completed over 5000 successful FCRA certifications with proven track record."
        },
        {
            title: "Fundraising Support",
            desc: "Helped secure foreign donations worth Rs 1200 Crore+ for NGOs."
        },
        {
            title: "Cost Effective",
            desc: "Saved lakhs of rupees for socialpreneurs with our efficient processes."
        },
        {
            title: "Dedicated Manager",
            desc: "Personalized guidance to make the process straightforward and hassle-free."
        },
        {
            title: "End-to-End Support",
            desc: "Ongoing assistance from initial consultation to post-registration compliance."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of FCRA Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        FCRA registration enables NGOs to legally accept foreign funds, ensuring compliance
                        with government regulations and transparency.
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

const FCRARegistration = () => {

    const faqs = [
        {
            question: "What is the full form of FCRA?",
            answer: "FCRA stands for Foreign Contribution Regulation Act. It regulates the acceptance and utilization of foreign contributions by certain individuals or associations."
        },
        {
            question: "Who is eligible for FCRA Registration?",
            answer: "NGOs, Societies, Section 8 Companies, and Trusts that have been in existence for at least 3 years and have spent a minimum of Rs. 15 Lakhs on core activities are eligible."
        },
        {
            question: "Is FCRA registration mandatory for receiving foreign funds?",
            answer: "Yes, any charitable organization in India wishing to receive foreign contributions or donations must obtain FCRA registration."
        },
        {
            question: "What is the validity of FCRA Registration?",
            answer: "FCRA registration is valid for a period of 5 years and must be renewed within 6 months before the expiry date."
        },
        {
            question: "Can I apply for FCRA immediately after registering my NGO?",
            answer: "No, typically you need a 3-year track record. However, for specific projects, you can apply for 'Prior Permission' without the 3-year requirement."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FCRA Registration Services"
                heroTitleSuffix="for NGOs"
                heroSubtitle="Legally Accept Foreign Funds with Expert Support"
                heroDescription="Get FCRA registration with Vyombiz to legally accept foreign funds and ensure compliance with all government regulations for your NGO. We assist with eligibility, documentation, and the complete application process."
                whatsIncludedList={[
                    "End-to-End Assistance for FCRA Registration",
                    "Guidance on Prior Permission & Permanent Registration",
                    "Eligibility Check & Documentation Support",
                    "FCRA Renewal & Compliance Services"
                ]}
                stats={[
                    { count: "5000+", label: "FCRA Certifications", icon: <FileText size={20} /> },
                    { count: "1200Cr+", label: "Donations Secured", icon: <Globe size={20} /> },
                    { count: "100%", label: "Compliance Rate", icon: <CheckCircle size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<FCRAOverview />}
                advantages={<FCRARegistrationAdvantages />}
                eligibility={<FCRAEligibility />}
                documents={<FCRADocumentsSection />}
                process={<FCRAProcessSection />}
                features={<FCRAFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about FCRA Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default FCRARegistration;
