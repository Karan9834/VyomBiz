import { Link } from "react-router-dom";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Mauritius/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in Mauritius/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in Mauritius/process.png";


const CompanyRegistrationMauritiusOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Hub
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Register a Company in <span className="text-yellow-400">Mauritius?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Mauritius has become a preferred jurisdiction for international businesses, startups, and investors looking for global expansion. Its regulatory transparency and tax efficiency make it a strong hub for international trade and investments.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses working with Vyombiz managed by Clink Consultancy Services Private Limited receive expert assistance to navigate legal requirements and complete the incorporation process seamlessly.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Key Advantages
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Mauritius offers a business-friendly environment with numerous advantages for global investors.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Mauritius Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Tax Efficiency", desc: "Business-friendly tax regime with competitive corporate tax rates." },
                        { title: "Global Gateway", desc: "Strategic gateway to Africa and global markets." },
                        { title: "Stable Environment", desc: "Stable political and economic environment." },
                        { title: "Legal Framework", desc: "Strong legal framework based on international standards." },
                        { title: "Foreign Ownership", desc: "100% foreign ownership allowed in many sectors." },
                        { title: "Financial Infrastructure", desc: "Efficient banking and financial infrastructure." }
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
        { title: "Global Business Company (GBC)", desc: "Commonly used for international operations such as investment holding, financial services, and global trading. It benefits from Mauritius’ international tax treaties and regulatory advantages." },
        { title: "Authorized Company (AC)", desc: "Suitable for businesses conducting activities mainly outside Mauritius. It offers simplified compliance requirements and operational flexibility for global entrepreneurs." },
        { title: "Domestic Company", desc: "Domestic companies operate within Mauritius and are ideal for local trading, services, and small business activities." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Companies in Mauritius
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    When planning company registration in Mauritius, businesses can choose from several structures depending on their objectives.
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-10">
                    Selecting the right business structure ensures regulatory compliance and tax efficiency, and Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in choosing the most suitable option.
                </p>
            </div>
        </section>
    );
};

const MauritiusIncorporationDocumentsSection = () => {
    const list = [
        "Passport copies of directors and shareholders",
        "Proof of residential address",
        "Proposed company name",
        "Details of business activities",
        "Shareholding structure",
        "Bank reference (in some cases)"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To complete the company incorporation process in Mauritius, certain documents and details are required:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-5">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Preparing the documentation accurately ensures faster approval and smooth company formation.
                </p>
            </div>
        </section>
    );
};

const MauritiusIncorporationProcessSection = () => {
    const steps = [
        { title: "Name Approval", desc: "The proposed company name is submitted to the authorities for availability verification and approval." },
        { title: "Documentation & Application", desc: "Required documents are prepared and submitted along with incorporation forms." },
        { title: "Company Incorporation", desc: "Once verified, the Registrar issues the Certificate of Incorporation confirming the legal existence of the company." },
        { title: "Business Registration & Compliance", desc: "Additional registrations such as tax registration and compliance filings may be required depending on business activity." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in Mauritius
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The company incorporation process generally involves several key stages:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Mauritius Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <div className="bg-[#e6f0fa] border border-[#005a9c] rounded-2xl p-6 mt-10">
                            <p className="text-[16px] text-[#072b47] leading-relaxed font-medium text-center">
                                Businesses supported by Vyombiz managed by Clink Consultancy Services Private Limited receive end-to-end assistance throughout the entire process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MauritiusIncorporationFeaturesSection = () => {
    const complianceList = [
        "Maintaining statutory records and company registers",
        "Filing annual returns with authorities",
        "Financial reporting and accounting compliance",
        "Tax filings and regulatory updates"
    ];

    const assistanceList = [
        "Complete company incorporation support",
        "Documentation preparation and filing",
        "Legal and regulatory guidance",
        "Global business setup consultation",
        "Ongoing compliance and advisory services"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Key Compliance Requirements
                    </h2>
                    <p className="text-[17px] text-slate-600 max-w-4xl leading-relaxed mb-6">
                        After company registration in Mauritius, certain regulatory requirements must be maintained:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3 text-slate-700 font-medium list-disc pl-5">
                        {complianceList.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 mb-12">
                        Proper compliance ensures that the company continues operating without regulatory risks.
                    </p>
                </div>

                <div className="mb-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                    <h2 className="text-3xl font-semibold text-[#072b47] mb-6">
                        How Vyombiz Can Help
                    </h2>
                    <p className="text-[17px] text-slate-600 max-w-4xl leading-relaxed mb-6">
                        Starting a business internationally can involve complex legal procedures. With professional assistance, the process becomes much simpler and faster.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited helps entrepreneurs and businesses with:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {assistanceList.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                                <span className="text-[16px] text-slate-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                        With a structured and professional approach, businesses can confidently establish their presence in Mauritius and focus on growth.
                    </p>
                </div>

                <div className="mt-16 bg-[#072b47] rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">Start Your Mauritius Company Registration Today</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-4">
                        Expanding internationally opens new opportunities for growth, partnerships, and global market access. Mauritius offers a reliable and efficient environment for business incorporation.
                    </p>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                        Partner with Vyombiz managed by Clink Consultancy Services Private Limited to simplify your company registration journey and establish your business presence in Mauritius with confidence.
                    </p>
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition">
                        Start Your Registration Now
                    </Link>
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
                heroSubtitle="Start Your Global Business in Mauritius with Ease"
                heroDescription="Mauritius is one of the most attractive destinations for global entrepreneurs due to its investor-friendly regulations, tax advantages, and strategic location between Africa and Asia. Setting up a company here allows businesses to access international markets while benefiting from a stable legal and financial system. With expert guidance and a structured registration process, launching your company in Mauritius can be smooth and efficient."
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

