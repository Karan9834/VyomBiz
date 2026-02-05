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
    Clock,
    Award,
    ChevronDown,
    ChevronUp,
    PlayCircle,
    HelpCircle,
} from "lucide-react";

/**
 * TrustRegistration Page matching CorpBiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const TrustRegistration = () => {
    // FAQ State
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the time frame for Trust Registration?",
            answer: "The entire process typically takes about 6 to 8 weeks, depending on document verification and processing by the local registrar office."
        },
        {
            question: "Is it mandatory to register a Trust Deed?",
            answer: "Yes, for a trust to be legally valid and eligible for tax exemptions under sections 12A and 80G, the trust deed must be registered with the appropriate authority."
        },
        {
            question: "Can a Trust operate in multiple states?",
            answer: "Yes, a registered trust can operate across India. However, the trust deed should clearly mention the scope of its activities."
        },
        {
            question: "What is the difference between a Trustee and a Beneficiary?",
            answer: "A Trustee manages the trust and its assets, while a Beneficiary is the person or group for whose benefit the trust is created."
        },
        {
            question: "Can an NRI be a trustee in an Indian Trust?",
            answer: "Yes, an NRI can be a trustee, but certain conditions and RBI guidelines regarding foreign contributions (FCRA) may apply."
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
                            <span className="text-orange-500">Trust Registration</span> in India
                        </h1>

                        {/* Description */}
                        <p className="text-white text-lg leading-relaxed">
                            Is your mind full of noble thoughts to support literature, science,
                            and other causes of public interest? Talk to our experts for
                            hassle-free trust registration in India.
                        </p>

                        {/* Bullet Points with Tick Icon */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1" size={22} />
                                <p className="text-white font-medium">
                                    Successfully Assisted in 1000+ Trust Registration in India
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1" size={22} />
                                <p className="text-white font-medium">
                                    Assets Worth Rs 2500 Crore are Managed by Trusts Registered with Us
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
                                        42810+
                                    </h2>
                                    <p className="text-gray-600 font-medium">
                                        Happy Clients
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
                                        Expert Advisors
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
                                        Branch Offices
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

                    {/* Top Overview Layout */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-black text-primary">
                                Trust Registration in India – An Overview
                            </h2>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                The Indian Trusts Act of 1882 governs trust registration in India.
                                A trust is a legal entity founded to oversee assets for charitable,
                                religious, or private purposes. It mandates a Trust Deed to outline
                                the trust's purpose, trustees, beneficiaries and the authority given
                                to each trustee.
                            </p>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                Trust Registration grants legal status to the trust and makes it
                                eligible to seek tax exemptions under section 12A and 80G.
                            </p>

                            <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-black shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all flex items-center gap-2">
                                Get Started with VyomBiz <CheckCircle size={18} />
                            </button>
                        </div>

                        {/* Right Illustration */}
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/digital-nomad.svg"
                                alt="overview illustration"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= WHAT IS TRUST SECTION ================= */}
            <section className="w-full bg-slate-50 py-24">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/businessman.svg"
                                alt="trust illustration"
                                className="w-full max-w-sm mx-auto"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-black text-primary">
                                What is a Trust?
                            </h2>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                A trust is a legal agreement between two parties, wherein one party,
                                known as the trustee, manages and oversees assets or property for
                                the benefit of another party, called the beneficiary.
                            </p>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                Trusts offer an organized form to manage and distribute assets within
                                the legal framework, ensuring protection and operational accountability.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= TRUST DEED SECTION ================= */}
            <section className="w-full bg-white py-24">
                <div className="container mx-auto px-6 lg:px-16">

                    <h2 className="text-3xl lg:text-4xl font-black text-primary mb-12 text-center">
                        What Should be Included in a Trust Deed?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            "Term and Duration",
                            "Registered Office",
                            "Geographical Scope",
                            "Purpose and Objectives",
                            "Parties and Assets",
                            "Board of Trustees",
                            "Roles and Responsibilities",
                            "Amendment Procedures",
                            "Legal Compliance",
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
                            Benefits of <span className="text-secondary">Trust Registration</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">
                            Registering a trust provides legal structure, financial benefits, and long-term credibility for charitable and private purposes.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Tax Exemptions",
                                desc: "Eligible for 12A & 80G registration, providing tax relief on income and donations.",
                                icon: <FileText className="text-secondary" size={28} />,
                            },
                            {
                                title: "Legal Recognition",
                                desc: "A registered trust is a legal entity that can sue, be sued, and hold property in its name.",
                                icon: <Shield className="text-blue-600" size={28} />,
                            },
                            {
                                title: "Social Welfare",
                                desc: "Provides a structured platform to carry out charitable activities like education and medical relief.",
                                icon: <Globe className="text-green-600" size={28} />,
                            },
                            {
                                title: "Assets Protection",
                                desc: "Helps in safeguarding assets and wealth for future generations through specific clauses.",
                                icon: <Briefcase className="text-purple-600" size={28} />,
                            },
                            {
                                title: "Avoid Probate",
                                desc: "Trust assets can be transferred to beneficiaries without the complex probate process.",
                                icon: <CheckCircle className="text-red-500" size={28} />,
                            },
                            {
                                title: "Credibility",
                                desc: "Enhances credibility among donors, government bodies, and the public for fundraising.",
                                icon: <Award className="text-yellow-500" size={28} />,
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

            {/* ================= SECTION 5: TYPES OF TRUSTS ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl lg:text-4xl font-black text-primary text-center mb-16">Types of Trust Registration</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                        <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all">
                            <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-secondary">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-primary mb-2">Public Charitable Trust</h3>
                                <p className="text-slate-500 font-medium">
                                    Created for the benefit of the general public. These are eligible for tax exemptions
                                    and are the most common form of NGOs in India.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all">
                            <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-blue-600">
                                <Shield size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-primary mb-2">Private Trust</h3>
                                <p className="text-slate-500 font-medium">
                                    Created for the benefit of specific individuals or families. These trusts are
                                    regulated by the Indian Trusts Act, 1882.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all">
                            <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-green-600">
                                <Building2 size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-primary mb-2">Religious Trust</h3>
                                <p className="text-slate-500 font-medium">
                                    Established for the promotion of a specific religion or religious purpose.
                                    Usually governed by personal laws of that religion.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all">
                            <div className="bg-white p-4 rounded-2xl shadow-sm h-fit text-purple-600">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-primary mb-2">Public-Cum-Private Trust</h3>
                                <p className="text-slate-500 font-medium">
                                    A hybrid trust where a part of income is used for public welfare and another part
                                    for specific beneficiaries.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= SECTION 6: DOCUMENTS REQUIRED ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                        {/* LEFT DARK CARD */}
                        <div className="bg-primary rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">

                            {/* Decorative circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                            <h3 className="text-3xl font-black mb-8 relative">
                                Requirements for Trust Registration
                            </h3>

                            <ul className="space-y-6 relative">
                                {[
                                    "Minimum 2 Trustees required",
                                    "Settlor of the Trust",
                                    "Unique Name for the Trust",
                                    "Defined Trust Objectives",
                                    "Registered Office Address in India",
                                    "Drafted Trust Deed on Stamp Paper",
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


                        {/* RIGHT WHITE CARD */}
                        <div className="bg-orange-50/50 rounded-[3rem] p-10 lg:p-14 border border-orange-100 shadow-xl">

                            <h3 className="text-3xl font-black mb-8 text-primary">
                                Documentation Checklist
                            </h3>

                            <div className="space-y-10">

                                {/* Trustees Documents */}
                                <div>
                                    <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">
                                        Trustee & Settlor Documents
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Passport Size Photographs",
                                            "PAN Card Copy",
                                            "Aadhaar / Voter ID",
                                            "Latest Bank Statement",
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

                                {/* Office Documents */}
                                <div>
                                    <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">
                                        Registered Office Documents
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Electricity / Water Bill",
                                            "Rent Agreement (if rented)",
                                            "NOC from Property Owner",
                                            "Ownership Proof (if owned)",
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


            {/* ================= TRUST REGISTRATION PROCESS ================= */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary">
                            Registration Process in 7 Days
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2 -z-10" />

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                { step: "01", title: "Trust Name Selection", desc: "Choose a unique and compliant trust name." },
                                { step: "02", title: "Draft Trust Deed", desc: "Prepare legally structured trust deed." },
                                { step: "03", title: "Documentation", desc: "Collect KYC and address proofs." },
                                { step: "04", title: "Registrar Filing", desc: "Submit deed to Sub-Registrar." },
                                { step: "05", title: "Certificate Issue", desc: "Receive registered Trust Deed." },
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


            {/* ================= WHY TRUST VYOMBIZ ================= */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-20 overflow-hidden relative">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

                            {/* Left Content */}
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-primary mb-8">
                                    Reasons to Trust VyomBiz for Trust Registration
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {[
                                        "Expert Legal Consultation",
                                        "Trust Deed Drafting Support",
                                        "Name Availability Check",
                                        "Fast & Secure Filing",
                                        "Online Documentation",
                                        "12A & 80G Assistance",
                                        "Dedicated Relationship Manager",
                                        "Post Registration Support",
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
                                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
                                        alt="Consultation"
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
                        <p className="text-slate-500 font-medium text-lg">Everything you need to know about Trust Registration</p>
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

export default TrustRegistration;
