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
import TalkExpert from "../../components/common/TalkExpert.jsx";

const IndianSubsidiaryOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Indian Subsidiary Registration – <span className="text-yellow-400">Global Business, Local Roots</span>
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
                            src="/Indian Subsidiary Registration/overview...,.png"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Indian Subsidiary
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Key advantages of establishing a subsidiary company in India.
                    </p>
                    <div className="mt-10">
                        <img
                            src="/Indian Subsidiary Registration/overview...,.png"
                            alt="Indian Subsidiary Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Brand Recognition", desc: "Allows businesses to operate under their international brand while following Indian regulations." },
                        { title: "Ease of Operation", desc: "The subsidiary can own assets, enter into contracts, and recruit employees within India." },
                        { title: "Capital Infusion", desc: "Facilitates foreign investment inflow and allows profit repatriation to the parent company." },
                        { title: "Credit Worthiness", desc: "The company can obtain funding from Indian banks and financial institutions." },
                        { title: "Strategic Growth", desc: "Suitable for establishing manufacturing units, research centers, or service operations." },
                        { title: "Lower Entry Barrier", desc: "Relatively straightforward incorporation process for foreign investors and entities." }
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
            answer: "An Indian Subsidiary Company is a business entity where a foreign parent company owns more than 50% of the shares. Despite foreign ownership, it operates as an Indian company under local laws and tax regulations."
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
                heroTitleMain="Indian Subsidiary Company"
                heroTitleSuffix="Registration"
                heroSubtitle="Launch Your Global Business in India"
                heroDescription="Expand your global business by setting up an Indian Subsidiary. VyomBiz provides complete assistance for foreign companies planning to establish a presence in India’s rapidly growing market."
                whatsIncludedList={[
                    "Foreign Parent Company Board Resolution Assistance",
                    "Digital Signature Certificate (DSC)",
                    "Director Identification Number (DIN)",
                    "Name Approval (RUN Service)",
                    "Certificate of Incorporation (COI)",
                    "FDI Compliance Advisory (RBI)"
                ]}
                stats={[
                    { count: "40K+", label: "Global Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Legal & Financial Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Service Locations", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Expansion",
                    title: "Indian Subsidiary Registration –",
                    highlightTitle: "Gateway for Foreign Entities",
                    description: [
                        "An Indian Subsidiary Company is a common structure used by foreign businesses to establish operations in India. It is incorporated under the Companies Act, 2013 and functions as a separate legal entity, usually registered as a Private Limited Company.",
                        "In this structure, the foreign parent company may hold a majority or even 100% of the shares. However, the subsidiary is treated as an Indian company for legal and taxation purposes, allowing it to access benefits available to domestic businesses.",
                        <strong>FDI Compliance:</strong>,
                        "Establishing an Indian subsidiary requires compliance with Foreign Direct Investment (FDI) policies and the Foreign Exchange Management Act (FEMA). Our experts assist in selecting the appropriate investment route and ensure that all RBI reporting and regulatory requirements are completed properly."
                    ],
                    whyIdealTitle: "Major Advantages",
                    whyIdealList: [
                        { title: "100% Ownership", desc: "Foreign investors can own up to 100% equity in many sectors under the automatic FDI route." },
                        { title: "Separate Legal Status", desc: "The liability of the foreign parent company is limited to the amount invested in the subsidiary." },
                        { title: "Tax Benefits", desc: "Eligible to benefit from domestic tax provisions and applicable double taxation avoidance agreements." },
                        { title: "Market Access", desc: "Provides direct access to India’s large consumer market and skilled workforce." }
                    ]
                }}
                advantages={<IndianSubsidiaryAdvantages />}
                eligibility={{
                    title: "Eligibility Checklist",
                    subtitle: "Basic requirements to incorporate an Indian Subsidiary.",
                    list: [
                        { title: "Parent Company", desc: "A foreign company intending to expand its business operations in India." },
                        { title: "Minimum Directors", desc: "A minimum of two directors are required for company incorporation." },
                        { title: "Resident Director", desc: "At least one director must qualify as a resident of India under company law." },
                        { title: "Shareholders", desc: "At least two shareholders are required, and the foreign parent company can act as one of them." },
                        { title: "Minimum Capital", desc: "There is no mandatory minimum capital requirement for incorporation." },
                        { title: "Registered Office", desc: "A registered office address in India is required for company registration." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Documents required from the foreign parent company and directors.",
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
                    imageUrl: "/Indian Subsidiary Registration/documents...,.png"
                }}
                process={{
                    title: "Registration Roadmap",
                    subtitle: "Step-by-step guidance for global entities.",
                    steps: [
                        { step: "01", title: "Documentation", desc: "Collection and legalization of documents from the foreign parent company." },
                        { step: "02", title: "DSC & Name", desc: "Applying for Digital Signature Certificates and reserving the company name." },
                        { step: "03", title: "SPICe+ Filing", desc: "Filing incorporation forms with the Ministry of Corporate Affairs for registration." },
                        { step: "04", title: "RBI Reporting", desc: "Reporting foreign investment to RBI through required FEMA filings." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz",
                    subtitle: "Your global partner for Indian market entry.",
                    list: [
                        { title: "FDI Experts", desc: "Expert understanding of FEMA regulations and foreign investment policies." },
                        { title: "Apostille Liaison", desc: "Support with document legalization and apostille procedures abroad." },
                        { title: "Complete Solution", desc: "Assistance from company incorporation to ongoing tax and compliance services." },
                        { title: "Fast Tracking", desc: "Our experienced team ensures faster document preparation and approval processes." },
                        { title: "Transparent Pricing", desc: "Transparent pricing with clear and competitive service fees." },
                        { title: "Data Security", desc: "Strong data protection practices for international corporate information." },
                        { title: "Multi-city Network", desc: "Presence in major Indian cities to provide local support when required." },
                        { title: "Language Support", desc: "Experts experienced in handling global business and compliance requirements." }
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

