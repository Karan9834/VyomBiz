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
    Landmark,
    Search
} from "lucide-react";

/**
 * DarpanRegistration Page
 * Matches layout/style of TrustRegistration.jsx
 * Content adapted from corpbiz.io/ngo-darpan-registration
 */

const DarpanRegistration = () => {
    // FAQ State
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is NGO Darpan?",
            answer: "NGO Darpan is a platform maintained by NITI Aayog that acts as an interface between NGOs/VOs and key government ministries/departments. It provides a unique ID to registered entities."
        },
        {
            question: "Is Darpan registration mandatory?",
            answer: "Yes, it is mandatory for NGOs seeking government grants or funding from any ministry or department. The unique ID is required to apply for schemes."
        },
        {
            question: "Who can register on the NGO Darpan portal?",
            answer: "Registered Trusts, Societies, and Section 8 Companies (Non-profit companies) are eligible to register on the Darpan portal."
        },
        {
            question: "Is there a fee for NGO Darpan registration?",
            answer: "No, the registration on the NGO Darpan portal is free of cost. However, professional assistance for correct filing may be chargeable."
        },
        {
            question: "What is the validity of the Darpan ID?",
            answer: "The Unique ID generated is valid for a lifetime unless the NGO is blacklisted or dissolved. However, profiles should be updated regularly."
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
                            <span className="text-orange-500">NGO Darpan</span> Registration
                        </h1>

                        {/* Description */}
                        <p className="text-white text-lg leading-relaxed">
                            A centralized platform by NITI Aayog bridging NGOs and the Government.
                            Get your Unique ID to unlock government grants, schemes, and funding opportunities.
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1" size={22} />
                                <p className="text-white font-medium">
                                    Mandatory for Govt. Grants & Schemes
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1" size={22} />
                                <p className="text-white font-medium">
                                    Enhances Trust & Credibility
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
                                Overview Of NGO Darpan
                            </h2>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                The NGO Darpan Portal is a platform maintained by NITI Aayog (Govt. of India)
                                that interfaces between Voluntary Organizations (VOs) / NGOs and key government
                                ministries and departments.
                            </p>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                Registration generates a unique ID for your NGO, which is a mandatory requirement
                                to apply for government grants and schemes. It ensures transparency, efficiency,
                                and accountability in the sector.
                            </p>

                            <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-black shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all flex items-center gap-2">
                                Get Started with VyomBiz <CheckCircle size={18} />
                            </button>
                        </div>

                        {/* Right Illustration */}
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/finance-analysis.svg"
                                alt="Darpan Portal"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= WHY DARPAN ================= */}
            <section className="w-full bg-slate-50 py-24">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/working-vacation.svg"
                                alt="Government Grants"
                                className="w-full max-w-sm mx-auto"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-black text-primary">
                                Why is Darpan Registration Vital?
                            </h2>

                            <div className="space-y-4">
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-secondary transition-colors">
                                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                        <Landmark className="text-secondary" /> Access to Grants
                                    </h3>
                                    <p className="text-slate-500 font-medium">
                                        Connects you directly to 35+ Central Ministries offering various schemes for development. Without the Darpan ID, you cannot apply for these funds.
                                    </p>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-secondary transition-colors">
                                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                        <Search className="text-blue-600" /> Visibility & Trust
                                    </h3>
                                    <p className="text-slate-500 font-medium">
                                        Your NGO gets listed in a national database, increasing your credibility with other donors, CSR agencies, and the public.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= ELIGIBILITY SECTION ================= */}
            <section className="w-full bg-white py-24">
                <div className="container mx-auto px-6 lg:px-16">

                    <h2 className="text-3xl lg:text-4xl font-black text-primary mb-12 text-center">
                        Who Can Register?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            "Registered Society",
                            "Registered Charitable Trust",
                            "Section 8 Company",
                            "Charitable Associations",
                            "Voluntary Organizations (VO)",
                            "Non-profit Organizations (NPO)",
                            "Valid Registration Certificate",
                            "PAN Card in Name of NGO",
                            "Functioning Governing Body"
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
                            Benefits of <span className="text-secondary">Darpan ID</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">
                            Get recognized by the Government of India and unlock opportunities for growth.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Govt. Grant Access",
                                desc: "Apply for grants from various ministries directly through the portal.",
                                icon: <Landmark className="text-blue-600" size={28} />,
                            },
                            {
                                title: "Credibility Boost",
                                desc: "Increases trust among stakeholders, partners, and private donors.",
                                icon: <Award className="text-yellow-500" size={28} />,
                            },
                            {
                                title: "Information Flow",
                                desc: "Receive timely updates about new government schemes and initiatives.",
                                icon: <Globe className="text-purple-600" size={28} />,
                            },
                            {
                                title: "Transparency",
                                desc: "Maintains a transparent record of funds and projects, aiding in compliance.",
                                icon: <Search className="text-green-600" size={28} />,
                            },
                            {
                                title: "FCRA Assistance",
                                desc: "Helpful for obtaining FCRA registration for foreign contributions.",
                                icon: <Shield className="text-secondary" size={28} />,
                            },
                            {
                                title: "Networking",
                                desc: "Part of a massive network of voluntary organizations across India.",
                                icon: <Users className="text-red-500" size={28} />,
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

                        {/* LEFT DARK CARD */}
                        <div className="bg-primary rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">

                            {/* Decorative circle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                            <h3 className="text-3xl font-black mb-8 relative">
                                Essential Documents
                            </h3>

                            <ul className="space-y-6 relative">
                                {[
                                    "Registration Certificate (Trust/Society/Co.)",
                                    "PAN Card of NGO",
                                    "Trust Deed / MoA & AoA",
                                    "PAN Card of 3 Members (Executive Comm.)",
                                    "Aadhaar Card of 3 Members",
                                    "Mobile Number & Email ID",
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
                                Details Required
                            </h3>

                            <div className="space-y-10">

                                {/* Officer Details */}
                                <div>
                                    <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">
                                        Office Bearers
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "President / Chairman Name",
                                            "Secretary Details",
                                            "Treasurer Details",
                                            "Chief Functionary Info",
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

                                {/* Activity Details */}
                                <div>
                                    <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">
                                        Activities & Funding
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Operational Area (State/Dist)",
                                            "Sector of Activity",
                                            "Source of Funds",
                                            "Key Issues Addressed",
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
                                { step: "01", title: "Sign Up", desc: "Create an account on the NGO Darpan Portal." },
                                { step: "02", title: "Profile", desc: "Fill basic details (PAN, Reg. No., etc.)" },
                                { step: "03", title: "Members", desc: "Add details of 3 executive members." },
                                { step: "04", title: "Upload", desc: "Upload Registration Certificate & Trust Deed." },
                                { step: "05", title: "Get ID", desc: "Unique ID is generated upon approval." },
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
                                        "Seamless Registration",
                                        "Document Verification",
                                        "Profile Management",
                                        "Grant Updates",
                                        "Compliance Support",
                                        "Expert Consultants",
                                        "Fast Processing",
                                        "Error-Free Filing",
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
                                        src="https://images.unsplash.com/photo-1541818789-53fdc8137351?auto=format&fit=crop&q=80&w=1000"
                                        alt="Government Office"
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
                        <p className="text-slate-500 font-medium text-lg">Everything you need to know about NGO Darpan Registration</p>
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

export default DarpanRegistration;
