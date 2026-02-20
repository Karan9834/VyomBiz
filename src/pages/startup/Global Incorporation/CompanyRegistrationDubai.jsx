import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const CompanyRegistrationDubaiOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Hub
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Dubai – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Dubai, with its strategic location at the crossroads of Asia, Africa, and Europe, is your gateway to the international market. It offers a vibrant ecosystem for businesses to thrive, backed by world-class infrastructure and pro-business government policies.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Foreign investors can now enjoy 100% ownership of their businesses in Dubai, making it one of the most attractive investment destinations globally.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Setup in Dubai?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Apart from its strategic advantage, Dubai offers preferential tax rates, 100% repatriation of capital and profits, and a high standard of living.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Whether you choose a Mainland, Free Zone, or Offshore structure, Dubai provides a secure and stable environment for business growth.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1518684079-3c830dcefadd?auto=format&fit=crop&q=80"
                            alt="Dubai Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationDubaiAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Dubai Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Unlock unparalleled opportunities with a business setup in Dubai.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80"
                            alt="Dubai Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "100% Foreign Ownership", desc: "Complete control over your business on both Mainland and Free Zones." },
                        { title: "Strategic Location", desc: "Perfect gateway connecting East and West markets." },
                        { title: "Tax Benefits", desc: "Competitive corporate tax regime and extensive Double Tax Avoidance Agreements." },
                        { title: "Profit Repatriation", desc: "Freedom to repatriate 100% of capital and profits." },
                        { title: "World-Class Infrastructure", desc: "Access to state-of-the-art logistics, ports, and transport facilities." },
                        { title: "Duty-Free Imports", desc: "Benefits from free trade agreements and zones." }
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

const DubaiIncorporationEligibility = () => {
    const list = [
        { title: "Trade Name", desc: "Must be unique and approved by the Department of Economy and Tourism (DET)." },
        { title: "Business Activity", desc: "Select the correct activity code matching your business nature." },
        { title: "Structure Selection", desc: "Choose between Mainland, Free Zone, or Offshore." },
        { title: "Office Space", desc: "Physical or virtual office address (Ejari) is mandatory." },
        { title: "Initial Approval", desc: "Obtain initial approval to start the incorporation process." },
        { title: "External Approvals", desc: "Some activities may require approvals from other government bodies." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Dubai Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key checklist for registering your company in Dubai.
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

const DubaiIncorporationDocumentsSection = () => {
    const list = [
        "Passport Copies (All partners & manaagers)",
        "Visa/Entry Stamp Pages",
        "Passport Size Photographs",
        "Emirates ID (if resident)",
        "No Objection Certificate (NOC) if employed",
        "Memorandum of Association (MOA)",
        "Ejari (Tenancy Contract)",
        "Business Plan (for certain Free Zones)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Dubai Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents required for company formation.
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

const DubaiIncorporationProcessSection = () => {
    const steps = [
        { title: "Select Activity & Name", desc: "Choose business activity and reserve a trade name." },
        { title: "Initial Approval", desc: "Apply for initial approval from DET or Free Zone Authority." },
        { title: "Draft MOA/LSA", desc: "Draft and sign Memorandum of Association or Local Service Agent agreement." },
        { title: "Office Location", desc: "Rent an office and obtain Ejari (Tenancy Contract)." },
        { title: "Get Approvals", desc: "Submit documents and get additional approvals if needed." },
        { title: "License Issuance", desc: "Pay fees and receive your Trade License to commence business." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Dubai?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Simplified journey to your Dubai Company Incorporation.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1518684079-3c830dcefadd?auto=format&fit=crop&q=80" alt="Dubai Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const DubaiIncorporationFeaturesSection = () => {
    const features = [
        { title: "Market Expertise", desc: "Deep knowledge of UAE laws, Free Zones, and Mainland regulations." },
        { title: "End-to-End Support", desc: "From licensing to visa processing and bank account opening." },
        { title: "Pro Services", desc: "Efficient handling of government liaisons and document clearances." },
        { title: "Cost-Effective", desc: "Transparent pricing with no hidden costs." },
        { title: "Strategic Advice", desc: "Guidance on the best jurisdiction and structure for your business." },
        { title: "100% Digital", desc: "Streamlined processes with digital documentation support." },
        { title: "Post-Setup Care", desc: "Assistance with VAT, Corporate Tax, and annual renewals." },
        { title: "Network Access", desc: "Connect with our network of banking and legal partners." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for hassle-free business setup in Dubai.
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

const CompanyRegistrationDubai = () => {

    const faqs = [
        {
            question: "Can I own 100% of my company in Dubai?",
            answer: "Yes, Dubai now allows 100% foreign ownership for many business activities on both the mainland and in free zones."
        },
        {
            question: "Is there Corporate Tax in Dubai?",
            answer: "As of June 2023, the UAE has introduced a 9% corporate tax on taxable income exceeding AED 375,000. However, Free Zone companies may benefit from exemptions if they meet qualifying criteria."
        },
        {
            question: "What is the difference between Mainland and Free Zone companies?",
            answer: "Mainland companies can trade directly within the local UAE market and taking government contracts. Free Zone companies are generally restricted to trading within the zone or internationally."
        },
        {
            question: "Do I need a local sponsor?",
            answer: "For most commercial and industrial activities, a local sponsor is no longer mandatory for 100% foreign ownership. However, some specific professional activities may still require a Local Service Agent (LSA)."
        },
        {
            question: "How long does the registration process take?",
            answer: "The process is fast-tracked and can often be completed within 1 week, provided all documents and approvals are in order."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration in"
                heroTitleSuffix="Dubai"
                heroSubtitle="Gateway to Global Business"
                heroDescription="Are you seeking company registration in Dubai? Join the club of thousands of foreign entrepreneurs who’ve successfully built a strong business presence in Dubai with our expert guidance."
                whatsIncludedList={[
                    "100% Foreign Ownership",
                    "Trade License for 1 Year",
                    "Virtual Address & Ejari",
                    "Emirates ID & Visa Assistance",
                    "Corporate Bank Account Opening"
                ]}
                stats={[
                    { count: "42863+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationDubaiOverview />}
                advantages={<CompanyRegistrationDubaiAdvantages />}
                eligibility={<DubaiIncorporationEligibility />}
                documents={<DubaiIncorporationDocumentsSection />}
                process={<DubaiIncorporationProcessSection />}
                features={<DubaiIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Registration in Dubai"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationDubai;
