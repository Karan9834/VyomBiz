import React from "react";
import {
    Users,
    Briefcase,
    Building2,
} from "lucide-react";
import HeroLayout from "../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../components/common/FAQLayout.jsx";
import TalkExpert from "../../components/common/TalkExpert.jsx";



const NidhiCompanyOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Mutual Benefit Society
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            <span className="text-yellow-400">Nidhi Company Registration</span> – An Overview
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Nidhi Company is a form of Non-Banking Financial Company (NBFC) created primarily to encourage savings and provide lending facilities among its members. It operates on the principle of mutual benefit and promotes financial discipline within its member community.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            These companies are regulated by the Ministry of Corporate Affairs (MCA) under the Nidhi Rules, 2014. One of the major advantages is that Nidhi Companies do not require approval from the Reserve Bank of India for basic operations.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Objective:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The main objective of a Nidhi Company is to promote savings among its members while offering them financial assistance through loans at reasonable interest rates against approved securities such as gold or deposits.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/Nidhi Company Registration/overview.png"
                            alt="Nidhi Company Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const NidhiCompanyAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Nidhi Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Nidhi Companies provide several advantages while maintaining relatively simple compliance requirements.
                    </p>
                    <div className="mt-10">
                        <img
                            src="/Nidhi Company Registration/benefits....png"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Separate Legal Entity", desc: "A Nidhi Company operates as a separate legal entity distinct from its members and shareholders." },
                        { title: "Easy Fund Mobilization", desc: "Members can contribute deposits and earn interest on their savings through the company." },
                        { title: "Secure Lending", desc: "Loans are usually provided against approved securities, reducing the chances of financial risk." },
                        { title: "Perpetual Succession", desc: "The company continues to exist despite changes in membership or management." },
                        { title: "Easy Governance", desc: "Governed under specific Nidhi Rules, making regulatory compliance simpler compared to traditional financial institutions." },
                        { title: "Cost-Effective", desc: "Registration and operational costs are relatively lower compared to other financial organizations." }
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

const NidhiCompanyRegistration = () => {
    const faqs = [
        {
            question: "Is RBI approval required for Nidhi Company registration?",
            answer: "No, approval from the Reserve Bank of India is not required. Nidhi Companies are regulated by the Ministry of Corporate Affairs under the Nidhi Rules, 2014."
        },
        {
            question: "What is the minimum number of members required for a Nidhi Company?",
            answer: "A Nidhi Company must be started with a minimum of 7 members. At least 3 of these members must act as directors."
        },
        {
            question: "Can a Nidhi Company lend money to non-members?",
            answer: "No. A Nidhi Company can only accept deposits from and lend money to its own members."
        },
        {
            question: "What is the minimum capital required for Nidhi Company registration?",
            answer: "As per recent amendments, a Nidhi Company must have a minimum paid-up equity capital of ₹10 Lakhs."
        },
        {
            question: "What is the timeline for Nidhi Company incorporation?",
            answer: "The entire process typically takes about 15-20 working days, depending on the approval of documents by the MCA."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Nidhi Company Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Empowering Mutual Savings & Credit"
                heroDescription="Start a Nidhi Company to encourage savings among members and provide secure lending facilities. VyomBiz offers complete assistance for Nidhi Company registration in compliance with MCA regulations."
                whatsIncludedList={[
                    "Digital Signature Certificate (DSC)",
                    "Director Identification Number (DIN)",
                    "Name Approval Assistance",
                    "Certificate of Incorporation (COI)",
                    "PAN & TAN for the Company",
                    "MOA & AOA Drafting"
                ]}
                stats={[
                    { count: "40K+", label: "Clients Served", icon: <Users size={20} /> },
                    { count: "3500+", label: "Legal & Financial Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Service Locations", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<NidhiCompanyOverview />}
                advantages={<NidhiCompanyAdvantages />}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Requirements to form and maintain a Nidhi Company.",
                    list: [
                        { title: "Minimum Members", desc: "A minimum of seven members is required to start the incorporation process." },
                        { title: "Minimum Directors", desc: "At least three directors must be appointed during registration." },
                        { title: "Share Capital", desc: "The company must have a minimum paid-up share capital of ₹10 lakh." },
                        { title: "Name Requirement", desc: "The company name must include the words “Nidhi Limited”." },
                        { title: "Member Growth", desc: "The company should acquire at least 200 members within one year of incorporation." },
                        { title: "Net Owned Funds", desc: "The ratio between Net Owned Funds and deposits must be maintained according to regulatory limits." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Required documents from directors, members, and the registered office address.",
                    list: [
                        "PAN Card of all Directors and Shareholders",
                        "Aadhar Card / Voter ID / Driving License",
                        "Passport-size Photographs of Directors",
                        "Latest Bank Statement (not older than 2 months)",
                        "Utility Bill of Registered Office (Electricity/Water)",
                        "Rent Agreement & NOC from Property Owner",
                        "Digital Signature Certificate (DSC) for Directors",
                        "Director Identification Number (DIN)",
                        "Memorandum of Association (MOA)",
                        "Articles of Association (AOA)"
                    ],
                    imageUrl: "/Nidhi Company Registration/documents....png"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Our simplified step-by-step approach to Nidhi Company Incorporation.",
                    steps: [
                        { step: "01", title: "DSC & DIN", desc: "Apply for Digital Signature Certificates and Director Identification Numbers for all proposed directors." },
                        { step: "02", title: "Name Approval", desc: "Submit your preferred company name for approval through the MCA name reservation process." },
                        { step: "03", title: "Incorporation", desc: "Submit the SPICe+ incorporation application along with PAN and TAN registration." },
                        { step: "04", title: "Approval", desc: "After verification, the Registrar of Companies issues the Certificate of Incorporation." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Your trusted partner for legal and financial registrations.",
                    list: [
                        { title: "Expert Legal Advice", desc: "Our experts ensure compliance with all applicable Nidhi rules and regulations." },
                        { title: "Fast Processing", desc: "Efficient processing to obtain your Certificate of Incorporation quickly." },
                        { title: "End-to-End Support", desc: "We assist with the complete process from name approval to post-registration support." },
                        { title: "Transparent Pricing", desc: "Transparent pricing with no hidden charges." },
                        { title: "Dedicated Support", desc: "Receive continuous updates and guidance from our support team." },
                        { title: "High Success Rate", desc: "Extensive experience in registering and managing Nidhi companies." },
                        { title: "Complimentary Advisory", desc: "Complimentary consultation to understand your business requirements." },
                        { title: "Trusted Brand", desc: "A trusted platform for legal and compliance services across India." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Nidhi Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default NidhiCompanyRegistration;
