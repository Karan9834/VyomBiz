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
import TrustedBrands from "../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../components/common/TalkExpert.jsx";



const ProducerCompanyOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Agricultural Business
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Producer Company Registration – <span className="text-[#005a9c]">Growth for Producers</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Producer Company is a hybrid between a private limited company and a cooperative society. It combines the efficiency of a company and the spirit of a cooperative. It is formed by primary producers (farmers, artisans, etc.) to improve their income and standard of living.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Regulated under the Companies Act, it allows producers to carry out activities like production, harvesting, procurement, grading, pooling, handling, marketing, selling, and export of primary produce.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why go for a Producer Company?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It provides a structured platform for farmers and small scales producers to aggregate their produce, gain better market access, and avail themselves of various government schemes and subsidies specifically designed for FPOs (Farmer Producer Organizations).
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1625246333195-5848c4282185?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Professionalize your produce business with corporate status.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1625246333195-5848c4282185?auto=format&fit=crop&q=80"
                            alt="Producer Company Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Corporate Identity", desc: "Enjoy the status of a separate legal entity with perpetual succession." },
                        { title: "Bargaining Power", desc: "Bulk procurement of inputs and collective sale of outputs leads to better margins." },
                        { title: "Access to NABARD", desc: "Eligibility for various credit and grant schemes from NABARD and SFAC." },
                        { title: "Professional Management", desc: "The company structure allows for the appointment of professionals to manage operations effectively." },
                        { title: "Processing & Branding", desc: "Aids in setting up processing units and creating a brand for the produce." },
                        { title: "Export Opportunities", desc: "Easier to comply with export regulations and tap into international markets." }
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
            answer: "A Producer Company is a body corporate registered under the Companies Act, which consists of individuals engaged in any activity connected with or related to primary produce."
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
                heroDescription="Incorporate a Producer Company to bridge the gap between agriculture and industry. Gain better bargaining power, access credit facilities, and professionalize your primary produce business with our expert guidance."
                whatsIncludedList={[
                    "Digital Signature Certificate (DSC)",
                    "Director Identification Number (DIN)",
                    "Name Approval (RUN)",
                    "Certificate of Incorporation (COI)",
                    "Drafting of MOA & AOA",
                    "PAN & TAN for the Company"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}
            <TrustedBrands />

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
                        { title: "Primary Producers", desc: "Only persons engaged in 'primary produce' (agriculture, animal husbandry, etc.) can be members." },
                        { title: "Minimum Members", desc: "10 or more individuals, or 2 or more producer institutions." },
                        { title: "Directors", desc: "Minimum 5 and maximum 15 directors are required." },
                        { title: "Share Capital", desc: "Minimum paid-up capital of ₹5 Lakhs is generally required to start." },
                        { title: "Objects", desc: "Activities must strictly fall within the objects specified in the Companies Act." },
                        { title: "Name", desc: "The name must end with 'Producer Company Limited'." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential paperwork for incorporation.",
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
                    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Our Simplified Process",
                    subtitle: "Get your Producer Company registered in 4 easy steps.",
                    steps: [
                        { step: "01", title: "Consultation", desc: "Expert discussion to understand your produce and member structure." },
                        { step: "02", title: "Documentation", desc: "Preparation of DSC, DIN, and drafting of constitutional documents." },
                        { step: "03", title: "Filing", desc: "Submission of RUN for name approval followed by SPICe+ for incorporation." },
                        { step: "04", title: "Certification", desc: "Receipt of COI, PAN, and TAN once the MCA approves the application." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Empowering the backbone of the nation.",
                    list: [
                        { title: "FPO Experts", desc: "Dedicated team specializing in Farmer Producer Organizations." },
                        { title: "End-to-End Service", desc: "From member verification to post-incorporation statutory compliance." },
                        { title: "Subsidies Guidance", desc: "Assistance in understanding and applying for SFAC/NABARD schemes." },
                        { title: "Professional Drafting", desc: "Ensuring MOA/AOA strictly follow legal objects for primary produces." },
                        { title: "Transparent Fees", desc: "Affordable startup packages specifically for rural entrepreneurship." },
                        { title: "Ongoing Compliance", desc: "Support for annual filings, audits, and meeting requirements." },
                        { title: "Digital Convenience", desc: "Completely online process, no need for members to travel to offices." },
                        { title: "Verified Success", desc: "Trusted by thousands of producer groups across India." }
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
