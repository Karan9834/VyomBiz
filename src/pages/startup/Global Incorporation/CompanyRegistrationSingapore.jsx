import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Singapore/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in Singapore/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in Singapore/process.png";



/**
 * CompanyRegistrationSingapore Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-singapore
 */

const CompanyRegistrationSingaporeOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Asia Expansion
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Start a Company in <span className="text-yellow-400">Singapore?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Singapore is widely recognised as one of the best countries in the world to start and operate a business. With its transparent legal framework, strong banking system, and strategic location in Asia, Singapore has become a preferred destination for entrepreneurs, startups, and global investors.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Entrepreneurs across the world choose Singapore because it offers political stability, strong intellectual property protection, and a highly efficient regulatory environment. The country also provides attractive tax benefits and global credibility, making it easier for companies to expand internationally.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses registering in Singapore gain access to a highly developed financial ecosystem, advanced infrastructure, and a pro-business government environment.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited assists entrepreneurs, startups, and companies in setting up their Singapore entity with complete compliance and professional guidance.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Singapore Company Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationSingaporeAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Company Registration in Singapore
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why global entrepreneurs choose Singapore.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Singapore Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Global Business Credibility", desc: "Singapore is one of the most respected financial hubs in the world. A Singapore registered company increases international credibility and builds trust with global clients, investors, and partners." },
                        { title: "Attractive Tax Structure", desc: "Singapore offers competitive corporate tax rates along with several exemptions for startups and new businesses, making it an ideal jurisdiction for global expansion." },
                        { title: "Strategic Location for Global Trade", desc: "Located at the heart of Asia, Singapore offers access to major international markets including Southeast Asia, China, and India." },
                        { title: "Ease of Doing Business", desc: "Singapore consistently ranks among the top countries globally for ease of doing business due to its efficient regulatory systems and digital government services." },
                        { title: "Strong Legal and Regulatory Framework", desc: "The country provides transparent corporate governance laws and strong protection for intellectual property and business assets." }
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

const SingaporeIncorporationEligibility = () => {
    const list = [
        { title: "Private Limited Company (Pte Ltd)", desc: "The most common and recommended business structure for entrepreneurs and foreign investors. It offers limited liability, scalability, and credibility." },
        { title: "Subsidiary Company", desc: "Foreign companies can establish a Singapore subsidiary that operates as a separate legal entity." },
        { title: "Branch Office", desc: "An extension of a foreign company that operates in Singapore but is not considered a separate legal entity." },
        { title: "Representative Office", desc: "Ideal for companies exploring the Singapore market before fully committing to operations." }
    ];

    const reqList = [
        "At least 1 director (local resident director required)",
        "Minimum 1 shareholder",
        "Registered Singapore office address",
        "Company secretary within 6 months of incorporation",
        "Minimum paid-up capital of SGD 1"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Companies You Can Register in Singapore
                </h2>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed mb-10">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
                    ))}
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6 mt-12">
                    Requirements for Company Registration in Singapore
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                    To register a company in Singapore, certain statutory requirements must be fulfilled. Minimum Requirements Include:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-5 mb-6">
                    {reqList.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Having these elements in place ensures that the company complies with Singapore’s regulatory framework. Vyombiz managed by Clink Consultancy Services Private Limited helps businesses meet these requirements through a streamlined and guided incorporation process.
                </p>
            </div>
        </section>
    );
};

const SingaporeIncorporationDocumentsSection = () => {
    const list = [
        "Passport copy of shareholders and directors",
        "Proof of residential address",
        "Proposed company name",
        "Description of business activities",
        "Shareholding structure details",
        "Memorandum and Articles of Association"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Singapore Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The following documents are generally required for incorporation:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-5">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Our team ensures that all documentation is accurate, compliant, and submitted efficiently to the relevant authorities.
                </p>
            </div>
        </section>
    );
};

const SingaporeIncorporationProcessSection = () => {
    const steps = [
        { title: "Name Approval", desc: "Choose a unique company name and submit it for approval with the Singapore corporate regulatory authority." },
        { title: "Documentation Preparation", desc: "Prepare incorporation documents including company structure, shareholder details, and director information." },
        { title: "Company Incorporation Filing", desc: "Submit the application with required documents and government fees for registration." },
        { title: "Company Registration Approval", desc: "Once approved, the company receives its Certificate of Incorporation, officially establishing the business entity." },
        { title: "Post-Registration Compliance", desc: "This includes appointing a company secretary, opening a corporate bank account, and fulfilling regulatory requirements." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Singapore Company Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Registering a company in Singapore involves several steps, but with professional assistance, the process becomes simple and efficient.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Singapore Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                Vyombiz managed by Clink Consultancy Services Private Limited ensures that each step is handled smoothly with professional legal support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SingaporeIncorporationFeaturesSection = () => {
    const features = [
        { title: "Complete company incorporation assistance" },
        { title: "Legal and documentation support" },
        { title: "Compliance and regulatory guidance" },
        { title: "End-to-end global business setup solutions" },
        { title: "Expert advisory for international expansion" }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Timeline & Post-Incorporation Compliance
                    </h2>
                    <p className="text-[17px] text-slate-600 max-w-4xl leading-relaxed mb-6">
                        The company incorporation process in Singapore is relatively fast when documentation is properly prepared. Name approval typically takes 1 day, while the incorporation process takes 1 to 3 business days, and post-registration setup takes 3 to 5 business days.
                    </p>
                    <p className="text-[17px] text-slate-600 max-w-4xl leading-relaxed mb-6">
                        After incorporation, companies must maintain regulatory compliance to continue operating legally. Important compliance requirements include appointing a company secretary, annual filing, maintaining statutory registers, corporate tax filing, and accounting record maintenance.
                    </p>
                </div>
                
                <div className="mb-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                    <h2 className="text-3xl font-semibold text-[#072b47] mb-6">
                        Why Choose Vyombiz for Singapore Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Starting a business in another country requires expert legal guidance and regulatory clarity. Our experienced professionals simplify global incorporation for entrepreneurs and businesses.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                                <span className="text-[16px] text-slate-700 font-medium">{feature.title}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                        Our goal is to make global business expansion simple, compliant, and efficient.
                    </p>
                </div>
                
                <div className="mt-16 bg-[#072b47] rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">Start Your Singapore Company Today</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                        Ready to establish your global business entity?
                    </p>
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition">
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};

const CompanyRegistrationSingapore = () => {

    const faqs = [
        {
            question: "Can a foreigner start a company in Singapore?",
            answer: "Yes. Foreign entrepreneurs can register a company in Singapore, but a local resident director is required as part of the regulatory framework."
        },
        {
            question: "How much capital is required to start a Singapore company?",
            answer: "A Singapore company can be incorporated with a minimum paid-up capital of SGD 1."
        },
        {
            question: "How long does Singapore company registration take?",
            answer: "Typically, the process takes 1 to 3 business days once the documentation and name approval are completed."
        },
        {
            question: "Is Singapore a good place for startups?",
            answer: "Yes. Singapore offers a startup-friendly ecosystem, strong investor network, tax benefits, and excellent infrastructure for entrepreneurs."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration"
                heroTitleSuffix="in Singapore"
                heroSubtitle="Start Your Singapore Company in One of the World’s Most Business-Friendly Economies"
                heroDescription="Register your Singapore company quickly and legally with expert support. From documentation to compliance, we simplify the entire incorporation process so you can focus on building your global business."
                whatsIncludedList={[
                    "100% Online Process",
                    "Expert Legal Guidance",
                    "Fast Registration Support",
                    "End-to-End Compliance Assistance"
                ]}
                stats={[
                    { count: "1000+", label: "Companies Registered", icon: <Building2 size={20} /> },
                    { count: "10+", label: "Years Experience", icon: <Briefcase size={20} /> },
                    { count: "43k+", label: "Happy Clients", icon: <Users size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<CompanyRegistrationSingaporeOverview />}
                advantages={<CompanyRegistrationSingaporeAdvantages />}
                eligibility={<SingaporeIncorporationEligibility />}
                documents={<SingaporeIncorporationDocumentsSection />}
                process={<SingaporeIncorporationProcessSection />}
                features={<SingaporeIncorporationFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Singapore Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationSingapore;

