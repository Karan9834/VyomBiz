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
    HandCoins,
    BookOpen
} from "lucide-react";

/**
 * CSR1Registration Page
 * Matches layout/style of TrustRegistration.jsx
 * Content adapted from corpbiz.io/ngo-csr-1-filing
 */

const CSR1Registration = () => {
    // FAQ State
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Form CSR-1?",
            answer: "Form CSR-1 is a registration form that NGOs must file with the Ministry of Corporate Affairs (MCA) to register themselves for undertaking CSR activities funded by corporations."
        },
        {
            question: "Is CSR-1 registration mandatory for all NGOs?",
            answer: "Yes, w.e.f. April 1, 2021, it is mandatory for every NGO (Trust, Society, or Section 8 Company) to register with the Central Government via Form CSR-1 to accept CSR donations."
        },
        {
            question: "What is the timeline for CSR-1 registration?",
            answer: "The registration is usually processed immediately. Upon successful submission of Form CSR-1, a unique CSR Registration Number is generated automatically."
        },
        {
            question: "Can an NGO get CSR funding without 12A/80G?",
            answer: "Generally, no. Registration under Section 12A and 80G is a primary prerequisite for filing Form CSR-1 and receiving CSR funds."
        },
        {
            question: "What documents are needed for filing?",
            answer: "Key documents include the NGO's PAN card, Registration Certificate, 12A & 80G Approval Orders, and the Digital Signature Certificate (DSC) of the authorized signatory."
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
                            <span className="text-orange-500">CSR-1</span> Registration
                        </h1>

                        {/* Description */}
                        <p className="text-white text-lg leading-relaxed">
                            Mandatory registration for NGOs to receive Corporate Social Responsibility (CSR) funding.
                            We help you file Form CSR-1 with the MCA to unlock corporate grants and boost your credibility.
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1" size={22} />
                                <p className="text-white font-medium">
                                    Get Unique CSR Registration Number
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 mt-1" size={22} />
                                <p className="text-white font-medium">
                                    Become Eligible for Corporate Funding
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
                                Overview Of CSR-1 Filing
                            </h2>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                Form CSR-1 is a mandatory registration form for NGOs, Trusts, and Section 8 Companies
                                that intend to undertake Corporate Social Responsibility (CSR) activities funded by
                                corporations. This registry allows the Ministry of Corporate Affairs (MCA) to monitor
                                CSR spending effectively.
                            </p>

                            <p className="text-slate-500 font-medium leading-relaxed text-lg">
                                By registering with the Central Government through Form CSR-1, your NGO acquires
                                a unique CSR Registration Number, making it eligible to receive funding and grants
                                from corporate entities complying with Section 135 of the Companies Act, 2013.
                            </p>

                            <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-black shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all flex items-center gap-2">
                                Get Started with VyomBiz <CheckCircle size={18} />
                            </button>
                        </div>

                        {/* Right Illustration */}
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/digital-nomad.svg"
                                alt="CSR Registration"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= WHAT IS CSR-1 ================= */}
            <section className="w-full bg-slate-50 py-24">
                <div className="container mx-auto px-6 lg:px-16">

                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="https://illustrations.popsy.co/amber/creative-work.svg"
                                alt="Filing Process"
                                className="w-full max-w-sm mx-auto"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-black text-primary">
                                Why is CSR-1 Filing Important?
                            </h2>

                            <div className="space-y-4">
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-secondary transition-colors">
                                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                        <HandCoins className="text-secondary" /> Access to Corporate Funds
                                    </h3>
                                    <p className="text-slate-500 font-medium">
                                        Corporates can only donate CSR funds to entities that have a valid CSR Registration Number. Without this, your NGO cannot legally accept CSR donations.
                                    </p>
                                </div>

                                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-secondary transition-colors">
                                    <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                        <Shield className="text-green-600" /> Compliance & Transparency
                                    </h3>
                                    <p className="text-slate-500 font-medium">
                                        It creates a national database of NGOs undertaking CSR activities, ensuring transparency and proper monitoring of social welfare projects.
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
                        Who Can File Form CSR-1?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            "Section 8 Company (Companies Act 2013)",
                            "Registered Public Trust",
                            "Registered Society",
                            "Entity under State/Parliament Act",
                            "Must have 12A & 80G Registration",
                            "3 Years Track Record (for some cases)",
                            "Valid PAN Card of Entity",
                            "Functioning within India",
                            "Non-profit Objective"
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
                            Benefits of <span className="text-secondary">CSR-1 Registration</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">
                            Registering your NGO via Form CSR-1 opens doors to sustainable funding and partnerships.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Corporate Funding",
                                desc: "Gain legal eligibility to receive CSR funds from profitable companies in India.",
                                icon: <HandCoins className="text-blue-600" size={28} />,
                            },
                            {
                                title: "Enhanced Credibility",
                                desc: "Being registered with the MCA boosts the NGO's goodwill and public image.",
                                icon: <Award className="text-yellow-500" size={28} />,
                            },
                            {
                                title: "Organized Database",
                                desc: "Part of a central repository of CSR-implementing agencies, increasing visibility.",
                                icon: <BookOpen className="text-purple-600" size={28} />,
                            },
                            {
                                title: "Hassle-free Operations",
                                desc: "Smooth processing of donations and compliance with less legal hurdles.",
                                icon: <CheckCircle className="text-green-600" size={28} />,
                            },
                            {
                                title: "Government Recognition",
                                desc: "Official recognition by the Central Government as a valid CSR entity.",
                                icon: <Shield className="text-secondary" size={28} />,
                            },
                            {
                                title: "Partner Eligibility",
                                desc: "Become a preferred partner for corporates looking to outsource CSR projects.",
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
                                Entity Documents
                            </h3>

                            <ul className="space-y-6 relative">
                                {[
                                    "Certificate of Registration",
                                    "PAN Card of the NGO",
                                    "12A & 80G Order Copies",
                                    "Trust Deed / MoA & AoA",
                                    "Resolution for authorized signatory",
                                    "Activity Report (Last 3 years)",
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
                                Other Details
                            </h3>

                            <div className="space-y-10">

                                {/* Identity Proofs */}
                                <div>
                                    <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">
                                        Key Personnel
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Members Details (Name, Email)",
                                            "PAN of Members/Trustees",
                                            "Digital Signature (DSC)",
                                            "DIN (for Directors)",
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

                                {/* Contact & Verification */}
                                <div>
                                    <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">
                                        Contacts & Verification
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Valid Email ID of NGO",
                                            "Mobile Number (OTP linked)",
                                            "Certification by CA/CS/CMA",
                                            "NGO Darpan ID (Optional)",
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
                            Filing Procedure
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2 -z-10" />

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Preparation", desc: "Gather documents & obtain DSC." },
                                { step: "02", title: "Filing", desc: "Fill Form CSR-1 on MCA portal." },
                                { step: "03", title: "Certification", desc: "CA/CS/CMA verifies and certifies the form." },
                                { step: "04", title: "Approval", desc: "Unique CSR Reg. Number is generated via email." },
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
                                        "Expert DSC Assistance",
                                        "Professional Certification",
                                        "Correct Form Filing",
                                        "Quick Turnaround",
                                        "12A & 80G Guidance",
                                        "Affordable Pricing",
                                        "Post-Reg Compliance",
                                        "Trusted by NGOs",
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
                                        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000"
                                        alt="CSR Activity"
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
                        <p className="text-slate-500 font-medium text-lg">Everything you need to know about Form CSR-1 Filing</p>
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

export default CSR1Registration;
