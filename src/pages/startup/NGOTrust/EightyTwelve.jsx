import { Link } from "react-router-dom";
import React from "react";
import {
    Users,
    Briefcase,
    Building2,
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import eightG from "../../../assets/ngo/80G12A/80G & 12A Registration overview.png"
import benefits from "../../../assets/ngo/80G12A/benefits.png"
import process from "../../../assets/ngo/80G12A/process.png"
/**
 * EightyTwenty Page (80G & 12A Registration)
 * Refactored to match TrustRegistration design.
 */

const EightyTwelveOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Tax Exemption
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            80G & 12A Registration – <span className="text-yellow-400">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In India, 12A and 80G registrations are important for Non-Profit Organizations to obtain tax benefits. Most NGOs apply for both registrations to maximize benefits for the organization and its donors. Without 12A registration, an NGO is treated like a normal taxable entity and must pay income tax. 12A registration allows income used for charitable purposes to be exempt from taxation.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why are they Important?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            12A registration allows NGOs to claim exemption from income tax on their surplus funds. This helps NGOs sustain their operations and focus on charitable activities. 80G registration allows donors to claim tax deductions on their contributions. This encourages more donations and improves fundraising opportunities.
                        </p>


                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={eightG}
                            alt="80G & 12A Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const EightyTwelveAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Dual Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of 80G & 12A Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Establish your NGO as a credible charitable organization and access financial benefits.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="80G & 12A Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Income Tax Exemption", desc: "12A registration allows NGOs to claim exemption from tax on their surplus income." },
                        { title: "Attract Donors", desc: "Donors often prefer NGOs with 80G registration because they receive tax deductions." },
                        { title: "Government Grants", desc: "Helps NGOs become eligible for government grants and funding schemes." },
                        { title: "FCRA Eligibility", desc: "Often required before applying for FCRA registration to receive foreign donations." },
                        { title: "Credibility", desc: "Improves the credibility and public trust in the organization." },
                        { title: "Wealth Accrual", desc: "Allows NGOs to accumulate up to 15% of income for future charitable activities." }
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

const EightyTwelveEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility & Requirements for 12A & 80G?
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before applying for 12A and 80G registration, it is important to understand the eligibility requirements.
                    The main eligibility criteria for applying are listed below.
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
                            The NGO must be registered as a Trust, Society, or Section 8 Company.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Charitable Object –
                            </span>{" "}
                            The organization must operate for charitable, religious, or social welfare purposes.
                        </li>
                    </ul>
                </div>

                {/* Other Conditions */}
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    <p>
                        <span className="font-semibold text-[#072b47]">No Commercial Income – </span>
                        The NGO should not generate income from purely commercial activities.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Proper Accounts – </span>
                        The organization must maintain proper financial records and accounts.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">No Private Benefit – </span>
                        Funds should not be used for the personal benefit of individuals or specific groups.
                    </p>

                    <p>
                        <span className="font-semibold text-[#072b47]">Regular Audit – </span>
                        Accounts must be audited when income exceeds the prescribed limit.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Check Your Eligibility Now
                            </Link>
                </div>

            </div>
        </section>
    );
};

const EightyTwelveDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Main Heading */}
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for 12A & 80G Registration
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for 12A & 80G Registration, you need to submit the following documents.
                    The following documents are required to apply for 12A and 80G registration.
                </p>

                {/* Documents List */}
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Registration Certificate – </span>
                            Registration Certificate of NGO (Trust Deed/MoA).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">PAN Card – </span>
                            PAN Card of the NGO.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Form 10A / 10AB – </span>
                            Application Form for registration.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">KYC of Trustees / Members – </span>
                            PAN & Aadhaar of all trustees/members.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Latest Utility Bill – </span>
                            Utility Bill of Registered Office for address proof.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">NOC from Landlord – </span>
                            Required if the office is rented.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Bank Account Statement – </span>
                            Latest Bank Account Statement.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Balance Sheet – </span>
                            Projected or Audited Balance Sheet (Last 3 Years).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">List of Donors – </span>
                            List of Donors (if applicable).
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Activity Report – </span>
                            Report on Welfare Activities undertaken by the NGO.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const EightyTwelveProcessSection = () => {
    const steps = [
        {
            title: "Application Filing",
            desc: "Submit Form 10A or 10AB online through the Income Tax portal with required details."
        },
        {
            title: "Verification",
            desc: "The Commissioner reviews the application and verifies the NGO’s objectives."
        },
        {
            title: "Clarification",
            desc: "Provide additional documents or clarification if requested by the authorities."
        },
        {
            title: "Approval Order",
            desc: "After review, the Commissioner approves the application and issues an order."
        },
        {
            title: "Certificate Grant",
            desc: "Receive the 12A and 80G registration certificates once approved."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for 12A & 80G Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The procedure for 12A & 80G registration involves structured documentation,
                        online filing, and verification. The step-by-step process is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="12A & 80G Registration Process"
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
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your 12A & 80G Registration Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const EightyTwelveFeaturesSection = () => {
    const features = [
        {
            title: "Expert CA Consultation",
            desc: "Guidance from experienced Chartered Accountants specializing in NGO tax compliance."
        },
        {
            title: "Form 10A/10AB Filing",
            desc: "Accurate filing of application forms with all required details."
        },
        {
            title: "Error-Free Documentation",
            desc: "Meticulous documentation to avoid rejection and ensure smooth approval."
        },
        {
            title: "Department Liaison",
            desc: "Follow-up with the Income Tax Department for timely processing."
        },
        {
            title: "Timely Approval",
            desc: "Fast-tracking the registration process for quicker approval."
        },
        {
            title: "Post-Registration Support",
            desc: "Guidance on annual returns and compliances to maintain status."
        }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Corrected Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of 12A & 80G Registration Services
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        12A and 80G registrations provide tax benefits to NGOs and tax deductions to donors, improving credibility and fundraising potential.
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

const EightyTwelve = () => {
    const faqs = [
        {
            question: "Are there any eligibility criteria for registration of 12A and 80G?",
            answer: "Yes, the NGO must be a registered Trust, Society, or Section 8 Company, should avoid commercial income, and must maintain proper financial records."
        },
        {
            question: "What is the main benefit of 12A Registration?",
            answer: "12A Registration exempts the NGO's income from income tax. Without it, the NGO is liable to pay tax on its surplus income."
        },
        {
            question: "How does 80G Registration benefit donors?",
            answer: "80G Registration allows donors to claim a tax deduction (usually 50% of the donation amount) on their contributions to the NGO under Section 80G of the Income Tax Act."
        },
        {
            question: "Is the registration one-time or renewable?",
            answer: "Previously, it was a one-time registration. However, as per recent amendments (effective April 2021), registrations are now granted for a period of 5 years and must be renewed subsequently."
        },
        {
            question: "Can a private family trust apply for 12A?",
            answer: "No, private or family trusts are not eligible. 12A registration is reserved for organizations established for broader public charitable or religious purposes."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="80G & 12A"
                heroTitleSuffix="Registration"
                heroSubtitle="Unlock Tax Benefits for NGO"
                heroDescription="Get tax exemptions for your NGO and provide tax benefits to your donors. Our experts assist Trusts, Societies, and Section 8 Companies in obtaining 12A and 80G registrations smoothly."
                whatsIncludedList={[
                    "100% Tax Exemption for NGO (12A)",
                    "Tax Deductions for Donors (80G)",
                    "Expert CA Consultation",
                    "Complete Filing Assistance"
                ]}
                stats={[
                    { count: "40K+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Professional Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Service Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<EightyTwelveOverview />}
                advantages={<EightyTwelveAdvantages />}
                eligibility={<EightyTwelveEligibility />}
                documents={<EightyTwelveDocumentsSection />}
                process={<EightyTwelveProcessSection />}
                features={<EightyTwelveFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about 80G & 12A Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default EightyTwelve;

