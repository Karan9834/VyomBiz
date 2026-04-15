import { Link } from "react-router-dom";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in Dubai/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in Dubai/overview.png"
import process from "../../../assets/Global Incorporation/Company Registration in Dubai/process.png"

const CompanyRegistrationDubaiOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Hub
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Start a Company in <span className="text-yellow-400">Dubai?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Dubai has rapidly positioned itself as a global business hub connecting Asia, Europe, and Africa. Entrepreneurs choose Dubai not just for tax benefits but also for its stable economy, advanced infrastructure, and investor-friendly regulations.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Businesses in Dubai benefit from:
                        </h3>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-[17px] text-slate-600 font-medium">
                            <li>0% personal income tax</li>
                            <li>Access to global markets</li>
                            <li>Strategic geographic location</li>
                            <li>Business-friendly government policies</li>
                            <li>100% foreign ownership in many sectors</li>
                            <li>Strong banking and financial ecosystem</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                            With these advantages, Dubai offers one of the fastest and most profitable environments for launching international businesses.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Company Registration in Dubai
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Dubai continues to attract entrepreneurs worldwide due to its unmatched business advantages.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Dubai Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "100% Foreign Ownership", desc: "Recent reforms allow foreign investors to fully own companies in many sectors without requiring a local sponsor." },
                        { title: "Tax Efficiency", desc: "Businesses benefit from low corporate tax rates and zero personal income tax, making Dubai highly profitable for entrepreneurs." },
                        { title: "Global Market Access", desc: "Dubai’s strategic location connects businesses to markets across the Middle East, Europe, Asia, and Africa." },
                        { title: "World-Class Infrastructure", desc: "Dubai offers advanced logistics, banking systems, ports, airports, and digital infrastructure that support rapid business growth." },
                        { title: "Investor-Friendly Policies", desc: "Government initiatives continuously simplify business regulations to attract international investors." }
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
        { title: "Mainland Company", desc: "A mainland company allows businesses to operate anywhere in the UAE and internationally. It provides the flexibility to work with government entities and local markets." },
        { title: "Free Zone Company", desc: "Free zones are special economic areas that offer tax exemptions and full foreign ownership. These are ideal for startups, global traders, tech companies, and consulting businesses." },
        { title: "Offshore Company", desc: "Offshore companies are primarily used for international trading, asset protection, and global investments. They offer privacy and simplified compliance requirements." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Company Registration in Dubai
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Dubai offers multiple company structures designed to support different business models and industries. Choosing the right structure is essential for compliance and long-term growth.
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
                    Vyombiz managed by Clink Consultancy Services Private Limited helps businesses identify the most suitable company structure based on their goals, industry, and expansion plans.
                </p>
            </div>
        </section>
    );
};

const DubaiIncorporationDocumentsSection = () => {
    const list = [
        "Passport copy of shareholders and directors",
        "Passport-size photographs",
        "Business activity details",
        "Proposed company name options",
        "Proof of residential address",
        "Memorandum of Association (MOA) or Articles of Association (AOA)",
        "Visa copies (if applicable)"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Dubai Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                    To incorporate a company in Dubai, businesses must submit certain essential documents. The exact requirements may vary depending on the company structure and business activity.
                </p>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Commonly required documents include:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-5">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    Vyombiz managed by Clink Consultancy Services Private Limited ensures all documentation is prepared accurately to avoid delays in approvals.
                </p>
            </div>
        </section>
    );
};

const DubaiIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose Business Activity", desc: "The first step is selecting the business activity that defines the nature of your operations." },
        { title: "Select Company Structure", desc: "Based on your goals, you must choose between mainland, free zone, or offshore company formation." },
        { title: "Reserve Company Name", desc: "A unique business name must be approved by the relevant UAE authority." },
        { title: "Submit Incorporation Documents", desc: "All legal documents and shareholder details must be submitted for verification." },
        { title: "Obtain Business License", desc: "Once approved, the company receives its official license to operate." },
        { title: "Open Corporate Bank Account", desc: "The final step involves opening a corporate bank account to start business transactions." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in Dubai
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Setting up a company in Dubai involves multiple regulatory steps. With expert assistance, the process becomes smooth and efficient.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Dubai Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                With expert guidance from Vyombiz managed by Clink Consultancy Services Private Limited, the entire process becomes faster and fully compliant with UAE regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DubaiIncorporationFeaturesSection = () => {
    const features = [
        { title: "Business structure consultation" },
        { title: "Company name approval and reservation" },
        { title: "Preparation of legal documentation" },
        { title: "Government filing and compliance support" },
        { title: "Business license assistance" },
        { title: "Corporate bank account support" },
        { title: "Ongoing compliance and advisory services" }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        How Vyombiz Helps You Register a Company in Dubai
                    </h2>
                    <p className="text-[17px] text-slate-600 max-w-4xl leading-relaxed mb-6">
                        Setting up a company overseas can be complex without the right support. Vyombiz managed by Clink Consultancy Services Private Limited offers end-to-end assistance to simplify the entire process.
                    </p>
                    <p className="text-[17px] font-semibold text-slate-700 leading-relaxed mb-6">
                        Our services include:
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
                        Our experts ensure that your Dubai company registration is completed efficiently while meeting all regulatory requirements.
                    </p>
                </div>
                
                <div className="mb-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                    <h3 className="text-2xl font-bold text-[#072b47] mb-4">Who Should Register a Company in Dubai?</h3>
                    <p className="text-[16px] text-slate-600 leading-relaxed mb-6">
                        Dubai is ideal for entrepreneurs and businesses looking to expand internationally. It is especially suitable for:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3 text-slate-700 font-medium">
                        <li>• Startups entering global markets</li>
                        <li>• E-commerce businesses</li>
                        <li>• IT and technology companies</li>
                        <li>• International traders and exporters</li>
                        <li>• Consultants and service providers</li>
                        <li>• Investors seeking tax-efficient structures</li>
                    </ul>
                    <p className="text-[16px] text-slate-600 leading-relaxed mt-6">
                        With the right incorporation strategy, Dubai can become a powerful base for scaling your global business operations.
                    </p>
                </div>
                
                <div className="mt-16 bg-[#072b47] rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">Start Your Dubai Business Today</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-4">
                        Dubai offers unmatched opportunities for entrepreneurs ready to build international businesses. With its strong economy, investor-friendly policies, and global connectivity, registering a company in Dubai is a strategic move for long-term success.
                    </p>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                        Vyombiz managed by Clink Consultancy Services Private Limited provides professional guidance and complete support throughout the company registration process, ensuring your business starts on the right foundation.
                    </p>
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition">
                        Take the first step toward global expansion and register your Dubai company today
                    </Link>
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
                heroSubtitle="Start Your Dubai Company — The Gateway to Global Business"
                heroDescription="Dubai has become one of the world’s most attractive destinations for entrepreneurs and investors. With tax advantages, global connectivity, and a business-friendly ecosystem, setting up a company in Dubai opens doors to international markets. Launch your Dubai company with confidence. Vyombiz managed by Clink Consultancy Services Private Limited simplifies the entire incorporation process — from documentation to final approvals — so you can focus on growing your business."
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

