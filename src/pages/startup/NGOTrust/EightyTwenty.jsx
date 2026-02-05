import React, { useState } from "react";
import {
    CheckCircle,
    Users,
    Briefcase,
    Building2,
    FileText,
    FileCheck,
    Shield,
    Globe,
    Award,
    ChevronDown,
    ChevronUp,
    Receipt,
    Coins
} from "lucide-react";

/**
 * EightyTwenty Page (80G & 12A Registration)
 * Matches layout/style of TrustRegistration.jsx
 * Content adapted from corpbiz.io/80g-and-12a-registration
 */

const EightyTwenty = () => {
    // FAQ State
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Are there any eligibility criteria for registration of 12A and 80G?",
            answer: "Yes, the NGO must be a registered entity (Trust, Society, or Section 8 Company), should not have income from commercial activities, and must maintain proper books of accounts."
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
            <section className="bg-primary py-16 lg:py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-14">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="lg:w-1/2 space-y-6">

                        {/* Heading */}
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
                            <span className="text-orange-500">80G & 12A</span> Registration
                        </h1>

                        {/* Description */}
                        <p className="text-white text-lg leading-relaxed">
                            Unlock tax exemptions for your NGO and offer tax benefits to your donors.
                            We assist Trusts, Societies, and Section 8 Companies in obtaining
                            12A and 80G certifications seamlessly.
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1" size={22} />
                                <p className="text-white font-medium">
                                    100% Tax Exemption for NGO Income (12A)
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1" size={22} />
                                <p className="text-white font-medium">
                                    Tax Deductions for Donors (80G)
                                </p>
                            </div>
                        </div>

                        {/* CTA + Reviews */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <button className="bg-[#1a4d8f] hover:bg-[#163e73] text-white px-7 py-3 rounded-lg font-semibold shadow-md transition">
                                Schedule a call →
                            </button>

                            <div className="flex items-center gap-6">
                                <div>
                                    <p className="text-white font-semibold">Google Reviews</p>
                                    <p className="text-orange-500 font-bold">4.8 ★★★★★</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold">Trustpilot</p>
                                    <p className="text-green-600 font-bold">★★★★★</p>
                                </div>
                            </div>
                        </div>

                        {/* ================= STATS SECTION ================= */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">

                            {/* Happy Clients */}
                            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Users className="text-orange-500" size={28} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1a1a1a]">
                                        42K+
                                    </h2>
                                    <p className="text-gray-600 font-medium">
                                        Clients
                                    </p>
                                </div>
                            </div>

                            {/* Expert Advisors */}
                            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Briefcase className="text-orange-500" size={28} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1a1a1a]">
                                        3500+
                                    </h2>
                                    <p className="text-gray-600 font-medium">
                                        Experts
                                    </p>
                                </div>
                            </div>

                            {/* Branch Offices */}
                            <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Building2 className="text-orange-500" size={28} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1a1a1a]">
                                        50+
                                    </h2>
                                    <p className="text-gray-600 font-medium">
                                        Offices
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ================= RIGHT FORM ================= */}
                    <div className="lg:w-[480px] w-full bg-white rounded-2xl shadow-2xl p-8">

                        <h2 className="text-2xl font-bold text-center mb-6">
                            Get Free Expert Consultation
                        </h2>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <div className="flex">
                                <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-100 text-sm">
                                    🇮🇳 +91
                                </div>
                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="w-full border border-gray-300 rounded-r-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
                                <option>Select State</option>
                                <option>Punjab</option>
                                <option>Delhi</option>
                                <option>Maharashtra</option>
                                <option>Uttar Pradesh</option>
                            </select>

                            <div className="flex items-center justify-between text-sm pt-2">
                                <p>
                                    Get Update on{" "}
                                    <span className="text-green-600 font-semibold">
                                        Whatsapp
                                    </span>
                                </p>
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-green-600"
                                    defaultChecked
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#f5a623] hover:bg-[#e18f0d] text-white font-semibold py-3 rounded-lg transition duration-300"
                            >
                                GET STARTED NOW
                            </button>

                        </form>
                    </div>

                </div>
            </section>


            {/* ================= SECTION 3: OVERVIEW ================= */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-black text-primary">
                                Overview Of 80G & 12A Registration
                            </h2>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                In India, 80G and 12A registrations are crucial for Non-Profit Organizations
                                seeking healthy tax benefits. Indian NGOs strive to register for both to maximize
                                the advantages for themselves and their donors.
                            </p>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                <strong>12A Registration</strong> exempts an NGO from paying income tax on its surplus income.
                                <strong> 80G Registration</strong> allows donors to claim tax deductions on the donations
                                they make to the NGO, encouraging more philanthropic support.
                            </p>

                            <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-black shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all flex items-center gap-2">
                                Get Started with VyomBiz <CheckCircle size={18} />
                            </button>
                        </div>

                        {/* Right Illustration */}
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/accounting.svg"
                                alt="Tax Exemption"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= WHAT IS 80G & 12A ================= */}
            <section className="w-full bg-slate-50 py-24">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/success.svg"
                                alt="Success"
                                className="w-full max-w-sm mx-auto"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-black text-primary">
                                Why are they Important?
                            </h2>

                            <div className="space-y-4">
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-secondary transition-colors">
                                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                        <Shield className="text-secondary" /> 12A (Tax Exemption)
                                    </h3>
                                    <p className="text-slate-500 font-medium">
                                        Without 12A, an NGO is treated like any other commercial entity and must pay tax on its income. 12A ensures that the income applied for charitable purposes is exempt from tax.
                                    </p>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-secondary transition-colors">
                                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                        <Receipt className="text-green-600" /> 80G (Donor Benefit)
                                    </h3>
                                    <p className="text-slate-500 font-medium">
                                        80G registration makes an NGO attractive to donors. It allows the donor to deduct 50% (usually) of the donation amount from their gross total income, reducing their tax liability.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= OBJECTIVES SECTION ================= */}
            <section className="w-full bg-white py-24">
                <div className="container mx-auto px-6 lg:px-16">

                    <h2 className="text-3xl lg:text-4xl font-black text-primary mb-12 text-center">
                        Eligibility & Requirements
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            "Registered NGO (Trust/Society/Sec 8)",
                            "Charitable/Religious Objectives",
                            "No Commercial Income",
                            "Proper Books of Accounts",
                            "No Private Religious Benefit",
                            "Assets used only for Charity",
                            "Regular Audit of Accounts",
                            "Compliance with Tax Laws",
                            "Valid PAN Card of NGO",
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-secondary transition-colors">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                                    <CheckCircle size={20} />
                                </div>
                                <p className="text-primary font-bold">{item}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= SECTION 4: BENEFITS ================= */}
            <section className="bg-slate-50 py-24">
                <div className="container mx-auto px-6 lg:px-16">

                    {/* Heading Block */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">
                            Benefits of <span className="text-secondary">80G & 12A</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">
                            Get recognized as a genuine charitable entity and unlock financial privileges.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Income Tax Exemption",
                                desc: "12A registration exempts the NGO from paying taxes on its surplus income.",
                                icon: <Shield className="text-blue-600" size={28} />,
                            },
                            {
                                title: "Attract Donors",
                                desc: "Donors prefer 80G registered NGOs to avail tax deductions on their contributions.",
                                icon: <Coins className="text-yellow-500" size={28} />,
                            },
                            {
                                title: "Government Grants",
                                desc: "Makes the NGO eligible for various grants and funding schemes from the government.",
                                icon: <Award className="text-purple-600" size={28} />,
                            },
                            {
                                title: "FCRA Eligibility",
                                desc: "Prerequisite for FCRA registration, enabling the NGO to receive foreign funds.",
                                icon: <Globe className="text-green-600" size={28} />,
                            },
                            {
                                title: "Credibility",
                                desc: "Enhances the reputation and trustworthiness of the NGO in the eyes of the public.",
                                icon: <CheckCircle className="text-red-500" size={28} />,
                            },
                            {
                                title: "Wealth Accrual",
                                desc: "Allows accumulation of up to 15% of income for future charitable application.",
                                icon: <Briefcase className="text-secondary" size={28} />,
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-secondary/30 hover:shadow-xl transition-all group"
                            >
                                {/* Icon Box */}
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h4 className="text-xl font-black text-primary mb-3">
                                    {item.title}
                                </h4>

                                {/* Description */}
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= SECTION 6: DOCUMENTS REQUIRED ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                        {/* LEFT DARK CARD - 12A */}
                        <div className="bg-primary rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">

                            {/* Decorative circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                            <h3 className="text-3xl font-black mb-8 relative">
                                Documents for 12A
                            </h3>

                            <ul className="space-y-6 relative">
                                {[
                                    "Registration Certificate of NGO",
                                    "MoA / Trust Deed / Bye-laws",
                                    "PAN Card of NGO",
                                    "Form 10A (Application)",
                                    "Details of Trustees/Members",
                                    "Past 3 Years Accounts (if applicable)",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mt-1 shrink-0">
                                            <FileCheck size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-200 font-bold text-lg leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* RIGHT WHITE CARD - 80G */}
                        <div className="bg-orange-50/50 rounded-[3rem] p-10 lg:p-14 border border-orange-100 shadow-xl">

                            <h3 className="text-3xl font-black mb-8 text-primary">
                                Documents for 80G
                            </h3>

                            <div className="space-y-10">

                                {/* Identity Proofs */}
                                <div>
                                    <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">
                                        Essential Documents
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "PAN Card of NGO",
                                            "MoA & Registration Certificate",
                                            "Utility Bill of Office",
                                            "NOC from Landlord",
                                        ].map((doc, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-orange-100 shadow-sm"
                                            >
                                                <div className="w-2 h-2 bg-primary rounded-full" />
                                                <span className="font-bold text-slate-700">
                                                    {doc}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Financial Docs */}
                                <div>
                                    <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">
                                        Financial Docs
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Bank Account Statement",
                                            "Income Tax Returns (if any)",
                                            "Welfare Activity Report",
                                            "List of Donors",
                                        ].map((doc, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-orange-100 shadow-sm"
                                            >
                                                <div className="w-2 h-2 bg-secondary rounded-full" />
                                                <span className="font-bold text-slate-700">
                                                    {doc}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= REGISTRATION PROCESS ================= */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary">
                            Registration Procedure
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2 -z-10" />

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                { step: "01", title: "Application", desc: "File Form 10A/10AB online via Tax Portal." },
                                { step: "02", title: "Verification", desc: "Commissioner verifies details & objectives." },
                                { step: "03", title: "Clarification", desc: "Submit additional docs if requested." },
                                { step: "04", title: "Approval", desc: "Commissioner approves and issues order." },
                                { step: "05", title: "Grant", desc: "Receive 12A/80G Registration Certificate." },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative text-center group hover:-translate-y-2 transition-transform"
                                >
                                    <div className="w-12 h-12 bg-secondary text-primary font-black rounded-full flex items-center justify-center mx-auto mb-6 absolute -top-6 left-1/2 -translate-x-1/2 border-4 border-slate-50">
                                        {item.step}
                                    </div>

                                    <h4 className="text-xl font-black text-primary mb-2 mt-4">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-500 font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= WHY CHOOSE VYOMBIZ ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-20 overflow-hidden relative">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

                            {/* Left Content */}
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-primary mb-8">
                                    Why Choose VyomBiz?
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {[
                                        "Expert CA Consultation",
                                        "Form 10A/10AB Filing",
                                        "Error-Free Documentation",
                                        "Department Liaison",
                                        "Timely Approval",
                                        "Post-Registration Support",
                                        "Provisional to Permanent",
                                        "Audit Assistance",
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-secondary rounded-full" />
                                            <span className="font-bold text-slate-700">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="relative">
                                <div className="aspect-video bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
                                        alt="Audit"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl hover:scale-110 transition-transform">
                                            <Shield size={32} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* ================= SECTION 9: FAQ ================= */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Frequently Asked Questions</h2>
                        <p className="text-slate-500 font-medium text-lg">Everything you need to know about 80G & 12A Registration</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                                <button
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-slate-50 transition"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="text-lg font-bold text-primary">{faq.question}</span>
                                    {openFaq === index ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-slate-400" />}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-slate-500 font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default EightyTwenty;
