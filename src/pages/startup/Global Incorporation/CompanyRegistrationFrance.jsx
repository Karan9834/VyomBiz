import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CompanyRegistrationFrance Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-france
 */

const CompanyRegistrationFranceOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            EU Gateway
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in France – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            France is the 3rd largest economy in Europe and the 7th largest globally, offering a robust infrastructure and a strategic location.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It allows 100% foreign ownership and provides access to the vast European Union market via double taxation agreements with over 120 countries.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why France?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            France boasts a highly skilled workforce, advanced technology sectors, and government incentives for R&D and innovation.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Its 'Talent Passport' scheme makes it easier for international investors and founders to live and work in the country.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
                            alt="France Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationFranceAdvantages = () => {
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
                        Why businesses choose France for expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
                            alt="France Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Strategic Location", desc: "Central location in Western Europe, key for logistics and trade." },
                        { title: "Reduced Corporate Tax", desc: "SMEs can benefit from a reduced corporate tax rate of 15% on initial profits." },
                        { title: "VAT Benefits", desc: "VAT reverse charge mechanism available for non-resident companies." },
                        { title: "Access to EU Market", desc: "Free trade access to all European Union member states." },
                        { title: "Innovation Hub", desc: "Strong government support and tax credits for Research & Development." },
                        { title: "Skilled Workforce", desc: "One of the most productive and educated workforces in Europe." }
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

const FranceIncorporationEligibility = () => {
    const list = [
        { title: "Share Capital", desc: "Depends on structure (e.g., €1 for SARL/SAS, €37,000 for SA)." },
        { title: "Directors", desc: "At least one director (manager) required. No residency requirement." },
        { title: "Registered Address", desc: "Must have a physical office address (domiciliation) in France." },
        { title: "Bank Account", desc: "Must open a professional bank account to deposit share capital." },
        { title: "Visa", desc: "Non-EU directors may need a residence permit or 'Talent Passport'." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for France Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key criteria for incorporating in France.
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

const FranceIncorporationDocumentsSection = () => {
    const list = [
        "Drafted Memorandum & Articles of Association (MOA & AOA)",
        "Passport Copies of Directors & Shareholders",
        "Proof of Address (Utility Bill/Lease)",
        "Non-Conviction Certificate for Directors",
        "Bank Certificate of Share Capital Deposit",
        "Proof of Domiciliation (Registered Office)",
        "Completed M0 Form (Company Registration Form)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for France Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents for France Company Incorporation.
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

const FranceIncorporationProcessSection = () => {
    const steps = [
        { title: "Business Structure", desc: "Select the legal form (SARL, SAS, SA, etc.) best suited for your goals." },
        { title: "Name Reservation", desc: "Check availability and reserve your company name with INPI." },
        { title: "Bank Account", desc: "Open a temporary bank account and deposit share capital." },
        { title: "Draft Statutes", desc: "Prepare and sign the Articles of Association (Statutes)." },
        { title: "Publication", desc: "Publish a notice of incorporation in a legal gazette (JAL)." },
        { title: "Registration", desc: "File application with the Commercial Court (Greffe) to get K-bis." },
        { title: "Tax & VAT", desc: "Receive SIREN/SIRET numbers and register for Tax/VAT." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in France?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step guide to setting up your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80" alt="France Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                Start Your Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FranceIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert Guidance", desc: "Assistance from experienced consultants familiar with French law." },
        { title: "Fast Track", desc: "Streamlined process to get your company registered in 1 week." },
        { title: "Comprehensive Support", desc: "From visa assistance to bank account opening and accounting." },
        { title: "Virtual Office", desc: "Provision of registered address services for initial setup." },
        { title: "Compliance", desc: "Ongoing support for tax filing and annual compliance." },
        { title: "Language Support", desc: "Bridging the language barrier with bilingual experts." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for French market entry.
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

const CompanyRegistrationFrance = () => {

    const faqs = [
        {
            question: "What is a K-bis extract and why is it important?",
            answer: "A K-bis extract is the official document proving a company's legal existence and registration in France. It is required for opening a bank account and other administrative procedures."
        },
        {
            question: "Is there a minimum capital requirement for establishing a SARL?",
            answer: "Technically, the minimum capital requirement for a SARL is €1. However, banks may require a higher amount to demonstrate financial stability."
        },
        {
            question: "Do I need a resident director to incorporate in France?",
            answer: "No, you do not need a resident director. However, appointing a local representative or agent is highly recommended to handle administrative tasks."
        },
        {
            question: "What is the 'Talent Passport'?",
            answer: "The 'Talent Passport' is a 4-year renewable residence permit designed for investors, company founders, and highly skilled employees from outside the EU."
        },
        {
            question: "What are SIREN and SIRET numbers?",
            answer: "SIREN is a unique 9-digit identification number for the company, while SIRET is a 14-digit number that identifies each specific establishment of the company."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in France"
                heroSubtitle="Set Up Your Business in the Heart of Europe"
                heroDescription="Expand your business to France, the 7th largest economy in the world and a gateway to the European Union market. We provide comprehensive support for seamless incorporation."
                whatsIncludedList={[
                    "SIREN & SIRET Number Acquisition",
                    "Virtual Address for 3 Months",
                    "VAT Registration",
                    "Company Name Reservation",
                    "Lifetime Compliance Alerts"
                ]}
                stats={[
                    { count: "3000+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationFranceOverview />}
                advantages={<CompanyRegistrationFranceAdvantages />}
                eligibility={<FranceIncorporationEligibility />}
                documents={<FranceIncorporationDocumentsSection />}
                process={<FranceIncorporationProcessSection />}
                features={<FranceIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in France"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationFrance;
