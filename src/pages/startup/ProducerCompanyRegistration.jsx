import React from "react";
import {
    Users,
    Briefcase,
    Building2,
    Sprout,
    CheckCircle2,
    ShieldCheck
} from "lucide-react";
import HeroLayout from "../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../components/common/FAQLayout.jsx";
import TalkExpert from "../../components/common/TalkExpert.jsx";



const ProducerCompanyOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Agricultural Business
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            <span className="text-yellow-400">Producer Company Registration</span> – Empowering Producers
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Producer Company combines the benefits of a private limited company and a cooperative society. It merges corporate management practices with the cooperative principles of member participation. It is formed by primary producers such as farmers, artisans, and agriculturists to enhance their income and business opportunities.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Governed by the Companies Act, it enables producers to undertake activities such as production, procurement, grading, processing, marketing, and export of primary produce.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why go for a Producer Company?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It offers farmers and small producers a structured platform to combine their produce, improve market access, and benefit from government schemes and support programs designed for Farmer Producer Organizations (FPOs).
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/Producer Company Registration/overview....,.png"
                            alt="Producer Company Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProducerCompanyAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Key Benefits of Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Professionalize your produce business with corporate status.
                    </p>
                    <div className="mt-10">
                        <img
                            src="/Company Registration/advantages.png"
                            alt="Producer Company Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Corporate Identity", desc: "Gain the status of a separate legal entity with perpetual succession and independent identity." },
                        { title: "Bargaining Power", desc: "Collective purchase of inputs and group selling of produce help members achieve better pricing and profits." },
                        { title: "Access to NABARD", desc: "Access to credit facilities, grants, and financial schemes offered by NABARD and SFAC." },
                        { title: "Professional Management", desc: "The company framework allows professionals to manage operations efficiently and improve productivity." },
                        { title: "Processing & Branding", desc: "Supports establishing processing facilities and building a recognizable brand for agricultural produce." },
                        { title: "Export Opportunities", desc: "Simplifies compliance with export regulations and helps producers enter global markets." }
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

const ProducerCompanyRegistration = () => {
    const faqs = [
        {
            question: "What is a Producer Company?",
            answer: "A Producer Company is a corporate entity registered under the Companies Act consisting of individuals involved in activities related to primary production."
        },
        {
            question: "Who can form a Producer Company?",
            answer: "Ten or more individuals, each of them being a producer, or two or more producer institutions, or a combination of both can form a producer company."
        },
        {
            question: "Is there any limit on the maximum number of members?",
            answer: "There is no limit on the maximum number of members in a Producer Company."
        },
        {
            question: "What is the minimum number of directors required?",
            answer: "A Producer Company must have a minimum of 5 directors and can have a maximum of 15 directors."
        },
        {
            question: "Can a Producer Company be converted into a Public Limited Company?",
            answer: "No, a Producer Company can never be converted into a Public Limited Company. However, it can be converted into a multi-state co-operative society."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Producer Company"
                heroTitleSuffix="Registration"
                heroSubtitle="Empowering Farmers & Producers"
                heroDescription="Register a Producer Company to connect agriculture with organized business practices. Improve bargaining power, access financial support, and grow your primary produce business with professional guidance."
                whatsIncludedList={[
                    "Digital Signature Certificate (DSC)",
                    "Director Identification Number (DIN)",
                    "Name Approval (RUN)",
                    "Certificate of Incorporation (COI)",
                    "Drafting of MOA & AOA",
                    "PAN & TAN for the Company"
                ]}
                stats={[
                    { count: "40K+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Industry Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Service Locations", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ProducerCompanyOverview />}
                advantages={<ProducerCompanyAdvantages />}
                eligibility={{
                    title: "Eligibility Checklist",
                    subtitle: "Who can form a Producer Company?",
                    list: [
                        { title: "Primary Producers", desc: "Only individuals involved in primary production activities such as agriculture, dairy, or horticulture can become members." },
                        { title: "Minimum Members", desc: "At least 10 individual producers or 2 producer institutions are required to form a Producer Company." },
                        { title: "Directors", desc: "The company must appoint a minimum of 5 directors and can have up to 15 directors." },
                        { title: "Share Capital", desc: "A minimum paid-up capital of approximately ₹5 Lakhs is typically required for incorporation." },
                        { title: "Objects", desc: "Business activities must align with the objectives defined under the Companies Act for Producer Companies." },
                        { title: "Name", desc: "The company name must end with the words \"Producer Company Limited\"." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Required documents for Producer Company incorporation.",
                    list: [
                        "PAN Card of all Directors and Members",
                        "Aadhar Card / Voter ID / Passport for identity proof",
                        "Latest Bank Statement/Mobile Bill/Electricity Bill (Residence Proof)",
                        "Passport-size Photographs of all Directors",
                        "Utility Bill of the Registered Office (Electricity/Gas/Water)",
                        "Rent Agreement & NOC from Landlord (if rented property)",
                        "Proof of being a 'Primary Producer' (e.g., Sarpanch certificate/Lekhpal report)",
                        "Digital Signature Certificates (DSC)",
                        "MOA & AOA (to be drafted by experts)"
                    ],
                    imageUrl: "/Producer Company Registration/documents.jpg"
                }}
                process={{
                    title: "Our Simplified Process",
                    subtitle: "Get your Producer Company registered in 4 easy steps.",
                    steps: [
                        { step: "01", title: "Consultation", desc: "Initial consultation to understand the type of produce and member structure." },
                        { step: "02", title: "Documentation", desc: "Preparation of DSC, DIN, and drafting of required incorporation documents." },
                        { step: "03", title: "Filing", desc: "Filing for name approval and submitting SPICe+ forms for company incorporation." },
                        { step: "04", title: "Certification", desc: "Issuance of Certificate of Incorporation along with PAN and TAN after MCA approval." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Empowering the backbone of the nation.",
                    list: [
                        { title: "FPO Experts", desc: "Experienced team specializing in Farmer Producer Organization registrations." },
                        { title: "End-to-End Service", desc: "Complete support from member verification to post-incorporation compliance." },
                        { title: "Subsidies Guidance", desc: "Guidance for applying to government schemes offered by SFAC and NABARD." },
                        { title: "Professional Drafting", desc: "Drafting MOA and AOA in compliance with legal objectives for producer activities." },
                        { title: "Transparent Fees", desc: "Cost-effective packages designed to support rural and agricultural entrepreneurs." },
                        { title: "Ongoing Compliance", desc: "Ongoing assistance with annual filings, audits, and compliance requirements." },
                        { title: "Digital Convenience", desc: "Fully digital process allowing members to complete registration remotely." },
                        { title: "Verified Success", desc: "Trusted by numerous producer groups and agricultural entrepreneurs across India." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="All you need to know about Producer Company Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default ProducerCompanyRegistration;

