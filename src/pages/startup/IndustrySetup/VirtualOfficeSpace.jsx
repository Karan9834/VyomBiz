import React from "react";
import {
    Building2,
    Briefcase,
    Globe2,
    ShieldCheck,
    Mail,
    Phone
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const VirtualOfficeOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Modern Business
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Virtual Office – <span className="text-[#005a9c]">Strategic Identity</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In the era of remote work and digital startups, a traditional office lease is often an unnecessary financial burden. A virtual office offers the perfect balance—a prestigious business address in a prime corporate hub without the high costs of physical maintenance.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Beyond just an address, it provides a comprehensive suite of services including mail forwarding, call answering, and shared meeting spaces that enhance your brand's professionalism.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Strategic Goal:
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            To provide entrepreneurs with a legal, professional, and scalable business presence that meets all regulatory requirements while maximizing cost efficiency.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
                            alt="Virtual Office Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const VirtualOfficeSpaceAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Business Benefits
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why go virtual with your business address?
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
                            alt="Virtual Office Space Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Instant Setup", desc: "Get your business address and legal papers in as little as 24 hours." },
                        { title: "Logistics Support", desc: "Mail collection, scanning, and forwarding services included." },
                        { title: "Zero Capital Expenditure", desc: "No deposits, interior costs, or long-term lease commitments." },
                        { title: "Global Reach", desc: "Easily expand into new cities with secondary virtual addresses." },
                        { title: "Professional Impression", desc: "Impress clients with a high-end corporate office location." },
                        { title: "Legal Peace of Mind", desc: "Detailed agreements and NOCs tailored for GST and MCA filing." }
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

const VirtualOfficeSpaceEligibility = () => {
    const list = [
        { title: "GST Registration", desc: "Provision of Rent Agreement and NOC from the property owner." },
        { title: "Company Incorporation", desc: "Registered address proofs for MCA Filings and SpicE+ forms." },
        { title: "Business Identity", desc: "Authorization for bank account opening and trade licenses." },
        { title: "Verification Liaison", desc: "Assistance during physical verification by GST or MCA inspectors." },
        { title: "Utility Bill Proofs", desc: "Latest electricity or water bills provided for documentation." },
        { title: "Authorized Signatory", desc: "NOCs signed and authorized by the legal property owners." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Virtual Office Setup?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    How we ensure your address is fully compliant.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
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

const VirtualOfficeSpaceDocumentsSection = () => {
    const list = [
        "Director/Owner's PAN and Aadhaar Card",
        "Passport Size Photograph",
        "Existing Business Registration (if any)",
        "Brief Description of Business Activity",
        "Authorized Signatory Details",
        "Service Agreement Signature (Digital/Physical)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Virtual Office Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    What we need to set up your virtual office.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const VirtualOfficeSpaceProcessSection = () => {
    const steps = [
        { title: "Select Location", desc: "Choose from our network of prime business hubs." },
        { title: "Submit KYC", desc: "Upload the basic business and personal documents." },
        { title: "Get Documents", desc: "Receive the signed Rent Agreement and NOC via email." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Get a Virtual Office Address?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Get your professional address in 3 easy steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" alt="Virtual Office Setup Process" className="w-full rounded-lg shadow-sm" />
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
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Get Your Address
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VirtualOfficeSpaceFeaturesSection = () => {
    const features = [
        { title: "Compliance Specialists", desc: "We ensure every address is 100% vetted for GST and MCA." },
        { title: "Network Strength", desc: "Partnerships with premium coworking and corporate spaces." },
        { title: "Transparent Pricing", desc: "Fixed annual or monthly fees with no hidden maintenance costs." },
        { title: "Seamless Renewals", desc: "Automated reminders and easy renewal processes for your address." },
        { title: "Liaison Support", desc: "Direct support during government verification or bank audits." },
        { title: "All-in-One Dashboard", desc: "Manage your mail, calls, and meeting room bookings in one place." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        The pioneers in virtual business identity.
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300" />
                </div>
            </div>
        </section>
    );
};

const VirtualOfficeSpace = () => {
    const faqs = [
        {
            question: "What is a Virtual Office?",
            answer: "A virtual office provides businesses with a professional business address and communication services (like mail handling and phone answering) without the need for a dedicated physical office space."
        },
        {
            question: "Can I use a Virtual Office for GST Registration?",
            answer: "Yes, many Indian states allow the use of a virtual office as a 'Principal Place of Business' for GST registration, provided you have the correct documentation like a specialized Rent Agreement and NOC."
        },
        {
            question: "Is it legal for Company Incorporation?",
            answer: "Yes, the MCA accepts a virtual office address as the 'Registered Office' of a company or LLP, making it an ideal choice for startups and remote businesses."
        },
        {
            question: "What are the key benefits?",
            answer: "Key benefits include massive cost savings on rent and utilities, a prestigious business address in a prime location, and professional mail/call handling services."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Virtual Office"
                heroTitleSuffix="Address Setup"
                heroSubtitle="A Professional Identity Without the Overhead"
                heroDescription="Build your professional presence instantly. We provide premium virtual office addresses in prime business hubs, fully compliant for GST, Company Registration, and business correspondence."
                whatsIncludedList={[
                    "GST & MCA Compliant Address",
                    "Professional Mail Handling",
                    "Dedicated Local Phone Numbers",
                    "Meeting Room Access (On-demand)",
                    "Digital Lobby Listing",
                    "Instant Agreement & NOC Delivery"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Globe2 size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<VirtualOfficeOverview />}
                advantages={<VirtualOfficeSpaceAdvantages />}
                eligibility={<VirtualOfficeSpaceEligibility />}
                documents={<VirtualOfficeSpaceDocumentsSection />}
                process={<VirtualOfficeSpaceProcessSection />}
                features={<VirtualOfficeSpaceFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Virtual Office Address"
                faqs={faqs}
            />
        </div>
    );
};

export default VirtualOfficeSpace;
