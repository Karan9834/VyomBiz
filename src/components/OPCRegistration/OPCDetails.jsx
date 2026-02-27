import React from "react";
import DetailsLayout from "../common/DetailsLayout";
import { CheckCircle2 } from "lucide-react";

const OPCRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Company Registration
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            One Person Company Registration –
                            <span className="text-[#005a9c]"> An Overview</span>
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Are you a solopreneur who wants to give wings to your entrepreneurial dreams? One Person Company registration is the best option for you. Enjoy benefits such as ease of incorporation, fewer compliance requirements, and sole ownership with stress-free OPC registration.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Introduced under the Companies Act, 2013, OPC safeguards the interests of solo entrepreneurs in India by providing them with legal status to operate independently as a corporate entity.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            As per Section 2 (62) of the Companies Act, 2013, a single entrepreneur can incorporate an OPC with just one director and one member, allowing full control while enjoying the benefit of limited liability.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Facing challenges in registering your OPC in India? Connect with our business consultants for quick, smooth, and budget-friendly One Person Company registration solutions.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/OPC Registration/overview....png"
                            alt="OPC Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const OPCRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Benefits
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of OPC Registration Online
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Major advantages enjoyed by single entrepreneurs forming a One Person Company in India.
                    </p>

                    <div className="mt-10">
                        <img
src="/OPC Registration/benefits.png"
                            alt="OPC Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        {
                            title: "Simple Incorporation Process",
                            desc: "OPC incorporation is simple and hassle-free, requiring just one member and one nominee who can also act as director. Though minimum authorised capital is ₹1 lakh, there is no minimum paid-up capital requirement, making financial setup flexible."
                        },
                        {
                            title: "Access to Easy Fund Raising",
                            desc: "As a legally registered company, OPCs can raise funds from venture capitalists, angel investors, incubators, and financial institutions. Banks prefer lending to OPCs over sole proprietorships due to structured governance and lower risk perception."
                        },
                        {
                            title: "Fewer Compliances",
                            desc: "Under the Companies Act, 2013, OPCs enjoy reduced compliance requirements and exemptions such as no mandatory cash flow statement and relaxed annual return formalities."
                        },
                        {
                            title: "Flexible Decision Making & Easy Management",
                            desc: "Since there is only one member, decisions can be taken quickly without conflicts. Resolutions can be passed by simply recording them in the minute book, ensuring smooth and efficient management."
                        },
                        {
                            title: "Limited Liability",
                            desc: "OPC is a separate legal entity. The liability of the shareholder is limited to the value of their shareholding, and personal assets remain protected from business losses."
                        },
                        {
                            title: "Exclusive Benefits",
                            desc: "OPCs enjoy special privileges and exemptions that are not available to other private companies, making it a preferred structure for solopreneurs."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                        >
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

const OPCEligibility = () => {
    const list = [
        { title: "Natural Person", desc: "Only a natural person who is an Indian citizen and resident." },
        { title: "Single OPC Only", desc: "A person can form only one OPC in India." },
        { title: "Nominee Required", desc: "A nominee must be appointed during incorporation." },
        { title: "No Minors", desc: "Minor cannot become a member or nominee of an OPC." },
        { title: "Activity Limit", desc: "Cannot carry out Non-Banking Financial Investment activities." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for OPC Registration in India?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The legal criteria you must meet to form an Indian One Person Company.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {list.map((item, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <div>
                                <span className="font-semibold text-[#072b47]">{item.title}</span>
                                <span className="text-slate-600"> – {item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const OPCDocumentsSection = () => {
    const list = [
        "PAN Card Copy",
        "Aadhar Card Copy",
        "Latest Bank Statement",
        "Passport Size Photo",
        "Electricity Bill (Office)",
        "NOC from Owner",
        "Rent Agreement",
        "Proof of Ownership"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for OPC Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Digital copies for both the founder and the registered office address.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {list.map((item, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OPCProcessSection = () => {
    const steps = [
        { title: "DSC & DIN", desc: "Obtain Digital Signature Certificate and Director Identification Number." },
        { title: "Name Reservation", desc: "Reserve a unique name for your One Person Company via the MCA portal." },
        { title: "Documentation", desc: "Draft and sign MoA, AoA, and the mandatory Nominee consent form." },
        { title: "Integrated Filing", desc: "Submit incorporation forms (SPICe+) along with proof of office address." },
        { title: "Final Certificate", desc: "Receive the Certificate of Incorporation, PAN, and TAN." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for OPC Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Getting your OPC live in 5 simple stages.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="/OPC Registration/process. ...png" alt="OPC Registration Process" className="w-full rounded-lg shadow-sm" />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200" />
                        <div className="mt-12 text-center">
                            <button onClick={() => document.getElementById("registration-hero")?.scrollIntoView({ behavior: "smooth" })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start OPC Registration Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OPCFeaturesSection = () => {
    const features = [
        { title: "Expert Consultation", desc: "Guided selection of the perfect legal structure for your vision." },
        { title: "Fast Delivery", desc: "Streamlined processes ensuring your incorporation is on track." },
        { title: "Legal Documentation", desc: "Professional drafting of MoA, AoA and Nominee contracts." },
        { title: "Post-Reg Support", desc: "Everything from GST to annual compliances handled." },
        { title: "Transparent Pricing", desc: "No hidden fees, just professional excellence." },
        { title: "Dedicated Support", desc: "24/7 access to business experts who understand your journey." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reasons to Consider VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support for your solo business venture.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-3 p-5 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OPCDetails = () => {
    return (
        <DetailsLayout
            overview={<OPCRegistrationOverview />}
            advantages={<OPCRegistrationAdvantages />}
            eligibility={<OPCEligibility />}
            documents={<OPCDocumentsSection />}
            process={<OPCProcessSection />}
            features={<OPCFeaturesSection />}
        />
    );
};

export default OPCDetails;
