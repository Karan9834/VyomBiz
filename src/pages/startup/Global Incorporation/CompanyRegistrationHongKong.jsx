import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const CompanyRegistrationHongKongOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Financial Hub
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Hong Kong – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Hong Kong is one of the world's leading financial centers and a major commercial hub. Its strategic location, low taxation, and free-market economy make it an ideal choice for international businesses.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The city serves as a perfect gateway to Mainland China, boosted by the Closer Economic Partnership Agreement (CEPA), which provides easy access to China’s vast market.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Hong Kong?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Hong Kong offers a simple and transparent tax system with no Value Added Tax (VAT), no Goods and Services Tax (GST), and no tax on dividends or capital gains.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Private Limited Company is the most popular business structure for foreign investors due to its separate legal entity status and limited liability protection.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?auto=format&fit=crop&q=80"
                            alt="Hong Kong Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationHongKongAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Incorporation
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Hong Kong offers a competitive edge with its pro-business environment.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?auto=format&fit=crop&q=80"
                            alt="Hong Kong Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Low Tax Regime", desc: "8.25% tax on first HK$2M profits, 16.5% on remainder. No VAT or capital gains tax." },
                        { title: "Gateway to China", desc: "CEPA agreement offers preferential access to the Mainland Chinese market." },
                        { title: "100% Foreign Ownership", desc: "Full ownership allowed for foreigners without the need for a local partner." },
                        { title: "Ease of Doing Business", desc: "Consistently ranked among the top places globally for ease of business setup." },
                        { title: "Global Financial Hub", desc: "Access to world-class banking, financial services, and investment capital." },
                        { title: "Strong Legal System", desc: "Based on English Common Law, providing strong protection for intellectual property." }
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

const HongKongIncorporationEligibility = () => {
    const list = [
        { title: "Company Name", desc: "Must be unique and not infringe on existing trademarks." },
        { title: "Directors", desc: "Minimum one director (individual) of any nationality, resident or non-resident." },
        { title: "Shareholders", desc: "Minimum one shareholder (person or corporate) of any nationality." },
        { title: "Company Secretary", desc: "Must be a local individual or a body corporate with a registered office in HK." },
        { title: "Registered Office", desc: "Must handle a physical address in Hong Kong (PO Box not allowed)." },
        { title: "Share Capital", desc: "Minimum issued share capital is usually HK$1." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Hong Kong Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Essential criteria to register a company in Hong Kong.
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

const HongKongIncorporationDocumentsSection = () => {
    const list = [
        "Incorporation Form (NNC1)",
        "Copy of Articles of Association (AOA)",
        "Notice to Business Registration Office (IRBR1)",
        "Passport Copies of Directors & Shareholders",
        "Address Proof of Directors & Shareholders",
        "Company Secretary Details",
        "Registered Office Address Proof"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Hong Kong Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documents required for a smooth registration process.
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

const HongKongIncorporationProcessSection = () => {
    const steps = [
        { title: "Name Search", desc: "Check availability of proposed company name in Companies Registry." },
        { title: "Prepare Documents", desc: "Draft AOA and gather KYC documents for directors/shareholders." },
        { title: "Submit Application", desc: "File NNC1 and other forms with the Companies Registry." },
        { title: "Certificate Issuance", desc: "Receive Certificate of Incorporation and Business Registration Certificate." },
        { title: "Post-Incorp Setup", desc: "Open corporate bank account and apply for any specific business licenses." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Hong Kong?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Fast and efficient path to owning a Hong Kong company.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?auto=format&fit=crop&q=80" alt="Hong Kong Company Registration Process" className="w-full rounded-lg shadow-sm" />
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

const HongKongIncorporationFeaturesSection = () => {
    const features = [
        { title: "One-Stop Solution", desc: "We handle everything from incorporation to company secretarial duties." },
        { title: "Fast Incorporation", desc: "Leverage our digital capabilities for rapid 1-day registration." },
        { title: "Bank Account Support", desc: "Assistance with opening neobank or traditional bank accounts." },
        { title: "Tax Compliance", desc: "Guidance on profit tax returns and annual audits." },
        { title: "Registered Address", desc: "We can provide a prestigious registered office address." },
        { title: "Company Secretary", desc: "Professional corporate secretarial services included." },
        { title: "Global Reach", desc: "Part of a network enabling cross-border business growth." },
        { title: "Transparent Pricing", desc: "Clear fee structure with no hidden charges." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support for your Hong Kong business expansion.
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

const CompanyRegistrationHongKong = () => {

    const faqs = [
        {
            question: "What is the corporate tax rate in Hong Kong?",
            answer: "Hong Kong follows a two-tiered profits tax regime: 8.25% on the first HK$2 million of profits, and 16.5% on the remainder. There is no tax on capital gains, VAT, or dividends."
        },
        {
            question: "Can a foreigner own 100% of a Hong Kong company?",
            answer: "Yes, 100% foreign ownership is allowed. Directors and shareholders can be of any nationality and do not need to reside in Hong Kong."
        },
        {
            question: "Do I need a local company secretary?",
            answer: "Yes, every Hong Kong company must appoint a Company Secretary who is either a local individual or a body corporate with a registered office in Hong Kong."
        },
        {
            question: "How long does it take to register a company?",
            answer: "For online applications, the process is very fast and can be completed in as little as 1 day, provided all documents are in order."
        },
        {
            question: "Is it mandatory to visit Hong Kong for incorporation?",
            answer: "No, you do not need to be physically present in Hong Kong. The entire incorporation process can be handled remotely."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration in"
                heroTitleSuffix="Hong Kong"
                heroSubtitle="Premier Global Business Hub"
                heroDescription="Are you seeking company registration in Hong Kong? Business setup in Hong Kong offers a strategic gateway to Mainland China and Asian markets with a low-tax regime."
                whatsIncludedList={[
                    "Registered Address for 1 Year",
                    "Business Registration Certificate",
                    "Company Secretarial Services",
                    "Certificate of Incorporation",
                    "Neobank Account Opening Support"
                ]}
                stats={[
                    { count: "42865+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationHongKongOverview />}
                advantages={<CompanyRegistrationHongKongAdvantages />}
                eligibility={<HongKongIncorporationEligibility />}
                documents={<HongKongIncorporationDocumentsSection />}
                process={<HongKongIncorporationProcessSection />}
                features={<HongKongIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Hong Kong Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationHongKong;