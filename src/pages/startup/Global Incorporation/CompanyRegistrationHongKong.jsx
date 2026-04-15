import { Link } from "react-router-dom";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Hongkong/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in Hongkong/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in Hongkong/process.png";

const CompanyRegistrationHongKongOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Start a Company in Hong Kong?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Hong Kong has long been considered one of the most strategic destinations for international business expansion. Its strong financial ecosystem, transparent regulations, and tax advantages make it an attractive choice for startups, SMEs, and multinational companies.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Some key reasons why entrepreneurs prefer Hong Kong company incorporation include:
                        </p>
                        <ul className="space-y-4 mb-6 text-[17px] text-slate-600 leading-relaxed font-medium">
                            <li><strong className="text-[#072b47]">Low and Simple Tax Structure:</strong> Hong Kong follows a territorial tax system, meaning only profits generated within Hong Kong are taxable.</li>
                            <li><strong className="text-[#072b47]">100% Foreign Ownership Allowed:</strong> Foreign entrepreneurs can fully own and operate a Hong Kong company without needing a local partner.</li>
                            <li><strong className="text-[#072b47]">Strategic Global Location:</strong> Hong Kong acts as a gateway to Asian markets, particularly Mainland China.</li>
                            <li><strong className="text-[#072b47]">Strong Banking & Financial Infrastructure:</strong> The city is home to some of the world’s largest banks and financial institutions.</li>
                            <li><strong className="text-[#072b47]">Quick Company Formation:</strong> Businesses can typically be incorporated within a few days with proper documentation.</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses receive structured guidance to complete incorporation smoothly while ensuring compliance with Hong Kong regulations.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Hong Kong Company Registration for Global Businesses
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Hong Kong offers significant strategic advantages for businesses planning international expansion.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Hong Kong Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-8">
                        With expert guidance from Vyombiz managed by Clink Consultancy Services Private Limited, entrepreneurs can fully leverage these advantages.
                    </p>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "International Business Reputation", desc: "Companies registered in Hong Kong enjoy strong global credibility." },
                        { title: "Access to Asian Markets", desc: "Businesses gain direct entry into one of the fastest-growing economic regions." },
                        { title: "Business-Friendly Regulations", desc: "Hong Kong has a transparent legal framework that supports entrepreneurs." },
                        { title: "Efficient Corporate Environment", desc: "Minimal bureaucracy makes it easy to operate and scale businesses." },
                        { title: "Attractive Tax Policies", desc: "Low corporate tax rates help maximize profitability." }
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
    const types = [
        { title: "Private Limited Company", desc: "This is the most common and recommended business structure for entrepreneurs. A private limited company offers limited liability protection and is widely recognized by banks and investors." },
        { title: "Sole Proprietorship", desc: "A simple business structure owned and operated by a single individual. While easy to set up, it does not offer liability protection." },
        { title: "Partnership Firm", desc: "Two or more individuals can jointly operate a business through a partnership. Profits and responsibilities are shared based on partnership agreements." },
        { title: "Branch Office", desc: "Foreign companies can establish a branch office in Hong Kong to expand their international operations while maintaining the parent company structure." },
        { title: "Representative Office", desc: "This structure allows businesses to explore the Hong Kong market but does not permit commercial trading activities." }
    ];

    const requirements = [
        { title: "At Least One Director", desc: "The director can be of any nationality and does not need to be a Hong Kong resident." },
        { title: "One Shareholder", desc: "A minimum of one shareholder is required. Directors and shareholders can be the same person." },
        { title: "Company Secretary", desc: "Every Hong Kong company must appoint a company secretary who is a Hong Kong resident or a corporate service provider." },
        { title: "Registered Office Address", desc: "A local Hong Kong registered office address is mandatory." },
        { title: "Share Capital", desc: "There is no strict minimum capital requirement, though a standard practice is issuing at least one share." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Types of Companies You Can Register in Hong Kong
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                        Hong Kong allows multiple business structures depending on your business goals and operational requirements.
                    </p>
                    <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                        {types.map((item, i) => (
                            <p key={i}>
                                <span className="font-semibold text-[#072b47]">{item.title} – </span>
                                {item.desc}
                            </p>
                        ))}
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                        Choosing the right structure is important, and Vyombiz managed by Clink Consultancy Services Private Limited helps businesses determine the most suitable entity based on their expansion goals.
                    </p>
                </div>
                
                <div>
                   <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Key Requirements for Hong Kong Company Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                        To incorporate a company in Hong Kong, certain legal requirements must be fulfilled.
                    </p>
                    <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                        {requirements.map((item, i) => (
                            <p key={i}>
                                <span className="font-semibold text-[#072b47]">{item.title} – </span>
                                {item.desc}
                            </p>
                        ))}
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                        With the assistance of Vyombiz managed by Clink Consultancy Services Private Limited, businesses can meet these requirements efficiently while ensuring proper legal documentation.
                    </p> 
                    <div className="mt-12 text-center">
                        <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                    Check Your Eligibility Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HongKongIncorporationDocumentsSection = () => {
    const list = [
        "Passport copy of directors and shareholders",
        "Proof of residential address",
        "Proposed company name",
        "Details of business activities",
        "Shareholding structure information",
        "Memorandum and Articles of Association (if applicable)"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Hong Kong Company Incorporation
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register a company in Hong Kong, the following documents are generally required:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Submitting accurate documentation ensures faster approval from Hong Kong authorities.
                </p>
            </div>
        </section>
    );
};

const HongKongIncorporationProcessSection = () => {
    const steps = [
        { title: "Company Name Approval", desc: "The first step involves checking the availability of the proposed company name with the Hong Kong Companies Registry." },
        { title: "Document Preparation", desc: "All required documents such as director details, shareholder information, and incorporation forms are prepared." },
        { title: "Submission to Companies Registry", desc: "The application is submitted to the Hong Kong Companies Registry for approval." },
        { title: "Certificate of Incorporation Issued", desc: "Once approved, the company receives its official Certificate of Incorporation." },
        { title: "Business Registration Certificate", desc: "After incorporation, the Business Registration Certificate is obtained from the Inland Revenue Department." },
        { title: "Corporate Bank Account Setup", desc: "A corporate bank account is opened to conduct business transactions smoothly." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Hong Kong Company Registration
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Hong Kong Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                            Businesses working with Vyombiz managed by Clink Consultancy Services Private Limited receive professional support throughout each stage of the incorporation process.
                        </p>
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Registration
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HongKongIncorporationFeaturesSection = () => {
    const compliance = [
        "Annual returns filing",
        "Maintaining statutory records",
        "Accounting and auditing requirements",
        "Business registration renewal",
        "Corporate tax filing"
    ];

    const whyChooseUs = [
        "End-to-end Hong Kong company incorporation",
        "Documentation and legal compliance support",
        "Business structure consultation",
        "Post-registration compliance assistance",
        "Global business expansion guidance"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Post-Incorporation Compliance in Hong Kong
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        After incorporation, companies must maintain ongoing compliance to operate legally. Some important compliance requirements include:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {compliance.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Handling these responsibilities properly ensures smooth business operations in Hong Kong.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Why Choose Vyombiz for Hong Kong Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Starting a company overseas requires proper planning, documentation, and regulatory compliance. Professional support can make the process faster and more reliable. Vyombiz managed by Clink Consultancy Services Private Limited assists businesses with:
                    </p>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-6">
                        {whyChooseUs.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        With a structured process and professional expertise, businesses can establish their Hong Kong presence without unnecessary delays.
                    </p>
                </div>

                <div className="bg-[#e6f0fa] rounded-2xl p-8 lg:p-12 text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Start Your Hong Kong Business Today
                    </h2>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
                        Expanding into Hong Kong opens doors to global markets, advanced financial infrastructure, and international business credibility.
                    </p>
                    <p className="text-[17px] text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">
                        With the right incorporation strategy and expert assistance from Vyombiz managed by Clink Consultancy Services Private Limited, your company can successfully establish its presence in one of the world’s leading financial hubs.
                    </p>
                    <p className="text-[19px] font-semibold text-yellow-400">
                        Take the first step toward global expansion today.
                    </p>
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
                heroSubtitle="Expand Your Business Globally with Hong Kong Company Registration"
                heroDescription="Hong Kong is one of the world’s most business-friendly jurisdictions, known for its low taxation, simple regulatory framework, and global market access. Setting up a company here allows entrepreneurs and businesses to operate internationally with credibility and efficiency. With expert guidance from Vyombiz managed by Clink Consultancy Services Private Limited, you can complete your Hong Kong company registration quickly, compliantly, and without unnecessary complications. Start your global business journey with confidence."
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
