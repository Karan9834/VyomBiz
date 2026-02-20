import React from "react";
import {
    Users,
    Briefcase,
    Building2,
} from "lucide-react";
import HeroLayout from "../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../components/myHome/TrustedBrands.jsx";
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
                            Nidhi Company Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Nidhi Company is a type of Non-Banking Financial Company (NBFC) that is formed to borrow and lend money among its members. It works on the principle of mutual benefit and helps cultivate the habit of savings and thrift.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Regulated by the Ministry of Corporate Affairs (MCA) under the Nidhi Rules, 2014, these companies are popular for their ease of governance and the fact that they do not require an RBI license to operate.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Objective:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The primary objective of a Nidhi Company is to encourage savings among its members and provide them with credit facilities at reasonable interest rates against security such as gold, property, or fixed deposits.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80"
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
                        Enjoy the advantages of a financial institution with simplified regulatory compliance.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80"
                            alt="Nidhi Company Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Separate Legal Entity", desc: "The company exists as a separate legal person from its members." },
                        { title: "Easy Fund Mobilization", desc: "Allows members to deposit and earn interest on their savings." },
                        { title: "Secure Lending", desc: "Lending is strictly against security, minimizing the risk of bad debts." },
                        { title: "Perpetual Succession", desc: "The company continues its existence even if members change or pass away." },
                        { title: "Easy Governance", desc: "Governed by simple Nidhi Rules rather than complex banking laws." },
                        { title: "Cost-Effective", desc: "Low operational and incorporation costs compared to other financial entities." }
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
            answer: "No, Nidhi Companies are exempted from the core provisions of the RBI Act. They are regulated by the Ministry of Corporate Affairs (MCA) under the Nidhi Rules, 2014."
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
                heroTitleMain="Nidhi Company"
                heroTitleSuffix="Registration"
                heroSubtitle="Empowering Mutual Savings & Credit"
                heroDescription="Incorporate a Nidhi Company to promote thrift and savings habits among members while providing easy access to loans. We offer end-to-end support for registration under MCA guidelines."
                whatsIncludedList={[
                    "Digital Signature Certificate (DSC)",
                    "Director Identification Number (DIN)",
                    "Name Approval Assistance",
                    "Certificate of Incorporation (COI)",
                    "PAN & TAN for the Company",
                    "MOA & AOA Drafting"
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
                overview={<NidhiCompanyOverview />}
                advantages={<NidhiCompanyAdvantages />}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Requirements to form and maintain a Nidhi Company.",
                    list: [
                        { title: "Minimum Members", desc: "Must have at least 7 members to initiate incorporation." },
                        { title: "Minimum Directors", desc: "At least 3 directors are required at the time of registration." },
                        { title: "Share Capital", desc: "Minimum paid-up equity share capital of ₹10 Lakhs is mandatory." },
                        { title: "Name Requirement", desc: "The name must end with 'Nidhi Limited'." },
                        { title: "Member Growth", desc: "Must reach 200 members within one year of incorporation." },
                        { title: "Net Owned Funds", desc: "Must maintain a ratio of Net Owned Funds to Deposits of 1:20." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Documentation needed for directors, members, and the registered office.",
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
                    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Our simplified step-by-step approach to Nidhi Company Incorporation.",
                    steps: [
                        { step: "01", title: "DSC & DIN", desc: "Obtaining Digital Signatures and Director Identification Numbers for proposed directors." },
                        { step: "02", title: "Name Approval", desc: "Reservation of the unique company name via the MCA's RUN service." },
                        { step: "03", title: "Incorporation", desc: "Filing SPICe+ forms for incorporation, PAN, and TAN generation." },
                        { step: "04", title: "Approval", desc: "Receiving the Certificate of Incorporation (COI) from the Registrar of Companies." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Your trusted partner for legal and financial registrations.",
                    list: [
                        { title: "Expert Legal Advice", desc: "Our professionals ensure all Nidhi Rules are strictly followed." },
                        { title: "Fast Processing", desc: "Timely delivery of Certificate of Incorporation and other documents." },
                        { title: "End-to-End Support", desc: "From name approval to post-incorporation compliance, we handle it all." },
                        { title: "Transparent Pricing", desc: "No hidden costs; competitive and clear service fees." },
                        { title: "Dedicated Support", desc: "Get real-time updates and assistance from our expert team." },
                        { title: "High Success Rate", desc: "Experience in registering hundreds of successful Nidhi companies." },
                        { title: "Complimentary Advisory", desc: "Free initial consultation regarding business structure and growth." },
                        { title: "Trusted Brand", desc: "A leading name in tech-enabled legal services in India." }
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
