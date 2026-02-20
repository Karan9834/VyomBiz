import React from "react";
import {
    Users,
    Briefcase,
    Building2,
    Globe,
    CheckCircle2,
    ShieldCheck
} from "lucide-react";
import HeroLayout from "../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../components/common/TalkExpert.jsx";

const IndianSubsidiaryOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Indian Subsidiary Registration – <span className="text-[#005a9c]">Global Business, Local Roots</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An Indian Subsidiary is a company whose commanding control is held by a foreign company. It allows international businesses to enter the vast Indian market while maintaining control over operations and brand identity.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Market Entry
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Subsidiaries are treated as Indian residents for tax and regulatory purposes, allowing them to enjoy the same benefits, exemptions, and deductions as any other domestic Indian company.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80"
                            alt="Indian Subsidiary Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};



const IndianSubsidiaryAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Indian Subsidiary
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Strategic benefits of choosing the subsidiary model for Indian market entry.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80"
                            alt="Indian Subsidiary Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Brand Recognition", desc: "Operate under your global brand name while complying with local laws." },
                        { title: "Ease of Operation", desc: "Can buy property, sign contracts, and hire employees directly in India." },
                        { title: "Capital Infusion", desc: "Easier to bring in foreign capital and repatriate profits to the parent company." },
                        { title: "Credit Worthiness", desc: "The subsidiary can raise funds from Indian banks and financial institutions." },
                        { title: "Strategic Growth", desc: "Ideal for setting up manufacturing (Make in India) or R&D centers." },
                        { title: "Lower Entry Barrier", desc: "Simplified registration process for foreign nationals and entities." }
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

const IndianSubsidiaryRegistration = () => {
    const faqs = [
        {
            question: "What is an Indian Subsidiary Company?",
            answer: "An Indian Subsidiary is a company where more than 50% of its equity shares are held by a foreign parent company. It is treated as an Indian company for all practical and tax purposes."
        },
        {
            question: "Is 100% Foreign Direct Investment (FDI) allowed?",
            answer: "In most sectors, 100% FDI is allowed under the automatic route, meaning no prior approval from the RBI or Government is required. However, specific sectors like defense and telecommunications have certain restrictions."
        },
        {
            question: "What are the requirements for directors?",
            answer: "A minimum of two directors are required for a private limited Indian subsidiary. At least one director must be an Indian citizen and a resident of India (stayed in India for 182 days or more in the previous financial year)."
        },
        {
            question: "Do foreign documents need to be apostilled?",
            answer: "Yes, documents originating from outside India (like parent company's registration certificate and board resolutions) must be notarized and apostilled (for Hague Convention countries) or legalized by the Indian Embassy."
        },
        {
            question: "How long does it take to register a subsidiary in India?",
            answer: "The process typically takes about 3 to 4 weeks, including obtaining DSC, name approval, and final incorporation certificate from the MCA."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Indian Subsidiary"
                heroTitleSuffix="Registration"
                heroSubtitle="Launch Your Global Business in India"
                heroDescription="Expand your international operations with a dedicated Indian Subsidiary. We provide end-to-end support for foreign companies looking to establish a presence in one of the world's fastest-growing economies."
                whatsIncludedList={[
                    "Foreign Parent Company Board Resolution Assistance",
                    "Digital Signature Certificate (DSC)",
                    "Director Identification Number (DIN)",
                    "Name Approval (RUN Service)",
                    "Certificate of Incorporation (COI)",
                    "FDI Compliance Advisory (RBI)"
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
                overview={{
                    badge: "Global Expansion",
                    title: "Indian Subsidiary Registration –",
                    highlightTitle: "Gateway for Foreign Entities",
                    description: [
                        "An Indian Subsidiary Company is one of the most preferred ways for foreign companies to expand their business into the Indian market. It is registered under the Companies Act, 2013, as a separate legal entity, typically as a Private Limited Company.",
                        "While the foreign parent company holds the majority or 100% of the shares, the Indian subsidiary is treated as a domestic entity for tax and legal purposes, allowing it to enjoy all the benefits available to Indian companies.",
                        <strong>FDI Compliance:</strong>,
                        "Setting up a subsidiary involves compliance with Foreign Direct Investment (FDI) policies and FEMA (Foreign Exchange Management Act) regulations. We ensure your entry route is optimized and all RBI reporting requirements are met seamlessly."
                    ],
                    whyIdealTitle: "Key Advantages",
                    whyIdealList: [
                        { title: "100% Ownership", desc: "Foreign companies can hold 100% equity in most sectors under the automatic route." },
                        { title: "Separate Legal Status", desc: "The parent company's liability is limited to its shareholding in the subsidiary." },
                        { title: "Tax Benefits", desc: "Eligible for various domestic tax incentives and double taxation avoidance treaties." },
                        { title: "Market Access", desc: "Direct access to India's massive consumer base and professional talent pool." }
                    ]
                }}
                advantages={<IndianSubsidiaryAdvantages />}
                eligibility={{
                    title: "Eligibility Checklist",
                    subtitle: "Basic requirements to incorporate an Indian Subsidiary.",
                    list: [
                        { title: "Parent Company", desc: "A foreign body corporate looking to establish its business in India." },
                        { title: "Minimum Directors", desc: "At least 2 directors are required for a private company." },
                        { title: "Resident Director", desc: "One director must be a resident of India for at least 182 days." },
                        { title: "Shareholders", desc: "Minimum of 2 shareholders (one can be the parent company)." },
                        { title: "Minimum Capital", desc: "No minimum capital requirement for incorporation." },
                        { title: "Registered Office", desc: "Must have a physical office address within India." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Documentation required from foreign parent and directors.",
                    list: [
                        "Copy of Board Resolution from Foreign Parent Company",
                        "Certificate of Incorporation of Parent Company (Apostilled)",
                        "Passport copies of Foreign Directors (Notarized)",
                        "PAN Card/Aadhar of Indian Resident Director",
                        "Proof of Residence of Directors (Utility Bills)",
                        "Copy of Charter/AoA of Parent Company",
                        "Proof of Registered Office Address (NOC & Rent Agreement)",
                        "Photographs of all Directors",
                        "Digital Signature Certificates (DSC) of all Directors"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1000"
                }}
                process={{
                    title: "Registration Roadmap",
                    subtitle: "Step-by-step guidance for global entities.",
                    steps: [
                        { step: "01", title: "Documentation", desc: "Gathering and apostilling of foreign parent documents." },
                        { step: "02", title: "DSC & Name", desc: "Obtaining Digital Signatures and reserving company name." },
                        { step: "03", title: "SPICe+ Filing", desc: "Submitting incorporation forms to the MCA for approval." },
                        { step: "04", title: "RBI Reporting", desc: "Reporting capital infusion to RBI via FC-GPR (FEMA compliance)." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Your global partner for Indian market entry.",
                    list: [
                        { title: "FDI Experts", desc: "Deep knowledge of FEMA and RBI regulations for foreign investment." },
                        { title: "Apostille Liaison", desc: "Guidance on document legalization in your home country." },
                        { title: "Complete Solution", desc: "From incorporation to monthly GST, Tax, and FEMA compliance." },
                        { title: "Fast Tracking", desc: "Experienced team ensures minimal delays in government approvals." },
                        { title: "Transparent Pricing", desc: "No hidden local charges; clear international billing." },
                        { title: "Data Security", desc: "High standards of confidentiality for global corporate data." },
                        { title: "Multi-city Network", desc: "Offices across major Indian hubs for local representative support." },
                        { title: "Language Support", desc: "Professionals who understand international business standards." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Indian Subsidiary Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default IndianSubsidiaryRegistration;
