import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const CompanyRegistrationMauritiusOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Hub
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Company Registration in Mauritius – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Mauritius is strategically located in the Indian Ocean, connecting businesses with African, Asian, and European markets. It is known not only for its scenic locales but also for its stable political environment and robust economic policies.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            One of the most significant benefits of company registration in Mauritius is that it offers low corporate tax rates, zero capital gains tax, and double taxation avoidance agreements with different countries.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Why Register in Mauritius?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Mauritius operates a well-regulated and structured financial services industry, supporting businesses operating within the banking, investment, and professional advisory services industry.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Business setup in Mauritius is a prompt, transparent, and simple process, facilitating entrepreneurs to start their ventures without unnecessary delays.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1589828156895-3ca37c59528d?auto=format&fit=crop&q=80"
                            alt="Mauritius Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationMauritiusAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Business Setup
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Mauritius offers a business-friendly environment with numerous advantages for global investors.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80"
                            alt="Mauritius Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Favourable Tax Regime", desc: "Low corporate tax rates, zero capital gains tax, and extensive DTAA network." },
                        { title: "Political Stability", desc: "Stable political environment and robust economic policies ensuring business security." },
                        { title: "Ease of Incorporation", desc: "Transparent and simple process facilitating quick launch of business operations." },
                        { title: "International Access", desc: "Strategic location connecting African, Asian, and European markets." },
                        { title: "Robust Financial Sector", desc: "Well-regulated financial services industry supporting banking and investment." },
                        { title: "100% Foreign Ownership", desc: "Allows full foreign ownership in most business sectors." }
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

const MauritiusIncorporationEligibility = () => {
    const list = [
        { title: "Shareholders", desc: "Minimum one shareholder required (individual or corporate)." },
        { title: "Directors", desc: "Minimum one director required. GBCs require two local directors." },
        { title: "Registered Office", desc: "Must have a physical registered office address in Mauritius." },
        { title: "Business Plan", desc: "A detailed business plan describing activities and operations." },
        { title: "Due Diligence", desc: "KYC documents for all directors and shareholders." },
        { title: "Company Name", desc: "Unique name reservation approval from the Registrar." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Company Registration in Mauritius?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Key checklist for setting up your company in Mauritius.
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
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const MauritiusIncorporationDocumentsSection = () => {
    const list = [
        "Certified Passport Copies (All directors & shareholders)",
        "Proof of Residential Address (Utility bills/bank statements)",
        "Consent Forms (Signed by directors shareholders)",
        "Detailed Business Plan",
        "Bank Reference Letter",
        "Proof of Registered Office Address",
        "Constitution (Memorandum & Articles of Association)",
        "Due Diligence Documents for corporate shareholders"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Mauritius Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Essential documents required for company formation in Mauritius.
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

const MauritiusIncorporationProcessSection = () => {
    const steps = [
        { title: "Structure & Name", desc: "Choose suitable structure and reserve unique company name." },
        { title: "Document Prep", desc: "Collect KYC, proofs, and draft Memorandum & Articles of Association." },
        { title: "Submit Application", desc: "File incorporation forms and documents with Registrar of Companies." },
        { title: "Incorporation", desc: "Receive Certificate of Incorporation and open corporate bank account." },
        { title: "Compliance", desc: "Register for Tax (TAN), VAT if applicable, and ensure ongoing compliance." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Register a Company in Mauritius?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Streamlined journey to your Mauritius Company Incorporation.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1589828156895-3ca37c59528d?auto=format&fit=crop&q=80" alt="Mauritius Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MauritiusIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert Guidance", desc: "Comprehensive advice on the best business structure for your needs." },
        { title: "Quick Turnaround", desc: "Efficient processing to get your business running in ~1 week." },
        { title: "End-to-End Support", desc: "From name reservation to bank account opening and tax registration." },
        { title: "Compliance Assurance", desc: "Ensuring all legal and regulatory requirements are met." },
        { title: "Global Expertise", desc: "Deep understanding of international business laws and treaties." },
        { title: "Dedicated Manager", desc: "One point of contact for personalized service." },
        { title: "Document Handling", desc: "Complete assistance with documentation and verification." },
        { title: "Post-Setup Services", desc: "Ongoing support for annual filings and secretarial services." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for seamless global business expansion.
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

const CompanyRegistrationMauritius = () => {

    const faqs = [
        {
            question: "Why is Mauritius considered a good place for business registration?",
            answer: "Mauritius offers a favorable tax regime, political and economic stability, access to international markets, and a strong legal framework, making it an ideal destination for global business setup."
        },
        {
            question: "What is the difference between a GBC and an Authorized Company?",
            answer: "A Global Business Company (GBC) is resident in Mauritius for tax purposes and can access tax treaties, while an Authorized Company is treated as non-resident for tax purposes and is suitable for business conducted entirely outside Mauritius."
        },
        {
            question: "What is the minimum requirement for directors and shareholders?",
            answer: "Generally, a minimum of one director and one shareholder is required. For a GBC, at least two directors resident in Mauritius are required."
        },
        {
            question: "Can a foreigner own 100% of a company in Mauritius?",
            answer: "Yes, Mauritius allows 100% foreign ownership in most business sectors."
        },
        {
            question: "How long does it take to register a company in Mauritius?",
            answer: "The registration process is efficient and can typically be completed within 1 week, subject to document submission and approval."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration in"
                heroTitleSuffix="Mauritius"
                heroSubtitle="Start Your Global Business Today"
                heroDescription="Are you an entrepreneur looking to register your business in Mauritius? Get Vyombiz™ expert assistance for company registration in Mauritius and benefit from 100% foreign ownership."
                whatsIncludedList={[
                    "All-in-one Registration Package",
                    "Document Verification in 1 Day",
                    "Corporate Bank Account Opening",
                    "Unlimited Name Availability Check",
                    "1 Yr Company Secretarial Service"
                ]}
                stats={[
                    { count: "43729+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationMauritiusOverview />}
                advantages={<CompanyRegistrationMauritiusAdvantages />}
                eligibility={<MauritiusIncorporationEligibility />}
                documents={<MauritiusIncorporationDocumentsSection />}
                process={<MauritiusIncorporationProcessSection />}
                features={<MauritiusIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Mauritius Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationMauritius;
