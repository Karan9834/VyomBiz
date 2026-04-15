import { Link } from "react-router-dom";
import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Global Incorporation/Company Registration in France/benefits.png";
import overview from "../../../assets/Global Incorporation/Company Registration in France/overview.png";
import process from "../../../assets/Global Incorporation/Company Registration in France/process.png";



/**
 * CompanyRegistrationFrance Page matching USAIncorporation layout
 * Content sourced from: https://VyomBiz.io/company-registration-in-france
 */

const CompanyRegistrationFranceOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            EU Gateway
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Why Start a Business in <span className="text-yellow-400">France?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            France is one of the most attractive destinations in Europe for international businesses. With access to the European Union market, a highly skilled workforce, and strong infrastructure, France provides a strategic environment for startups, SMEs, and global corporations.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Setting up a company here not only enhances your brand credibility but also opens doors to a market of more than 450 million EU consumers.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            France actively supports foreign investors through simplified registration processes, government incentives, and startup innovation programs. Entrepreneurs benefit from a strong legal system, advanced banking facilities, and world-class business infrastructure.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With professional guidance from Vyombiz managed by Clink Consultancy Services Private Limited, global founders can navigate the registration process efficiently and start operating with confidence.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Company Registration in France
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        France provides a highly supportive environment for global entrepreneurs and expanding companies.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="France Company Registration Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Access to the EU Market", desc: "Businesses registered in France can trade freely across the European Union." },
                        { title: "Stable Economy", desc: "France has one of the largest and most stable economies in the world." },
                        { title: "Strong Legal Protection", desc: "Businesses benefit from transparent regulations and strong intellectual property protection." },
                        { title: "Advanced Infrastructure", desc: "Modern transport, technology, and logistics networks support business growth." },
                        { title: "Government Support for Startups", desc: "Various innovation programs and funding opportunities are available for entrepreneurs." }
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
                    <div className="bg-[#e6f0fa] border border-[#005a9c] rounded-2xl p-8 shadow-sm">
                        <p className="text-[17px] text-[#072b47] leading-relaxed font-medium">
                            By partnering with Vyombiz managed by Clink Consultancy Services Private Limited, companies can leverage these advantages while ensuring complete regulatory compliance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FranceIncorporationEligibility = () => {
    const list = [
        { title: "Société à Responsabilité Limitée (SARL)", desc: "A popular structure for small and medium-sized businesses. It offers limited liability protection and requires at least one shareholder." },
        { title: "Société par Actions Simplifiée (SAS)", desc: "One of the most flexible company structures in France. Ideal for startups and investors due to its adaptable management structure." },
        { title: "Société Anonyme (SA)", desc: "A structure commonly used by larger corporations planning significant investment or public listing." },
        { title: "Branch Office", desc: "Foreign companies can establish a branch in France to conduct business operations without forming a separate legal entity." },
        { title: "Representative Office", desc: "Best suited for companies looking to explore the French market without conducting direct commercial activities." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Companies You Can Register in France
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Choosing the right legal structure is an important step when starting a company in France. Each structure offers different levels of liability, taxation, and operational flexibility.
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
                    Experts from Vyombiz managed by Clink Consultancy Services Private Limited help determine the most suitable structure based on your business model and expansion plans.
                </p>
            </div>
        </section>
    );
};

const FranceIncorporationDocumentsSection = () => {
    const list = [
        "Passport copies of shareholders and directors",
        "Proof of residential address",
        "Proposed company name",
        "Company incorporation documents",
        "Details of business activities",
        "Registered office address in France",
        "Shareholding structure information"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Company Registration in France
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                    To incorporate a company in France, certain documents must be prepared and submitted to regulatory authorities. Typical requirements include:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-5">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                    The documentation process can vary depending on the company structure and ownership details. Professional assistance from Vyombiz managed by Clink Consultancy Services Private Limited helps streamline document preparation and submission.
                </p>
            </div>
        </section>
    );
};

const FranceIncorporationProcessSection = () => {
    const steps = [
        { title: "Choose the Company Structure", desc: "Select the appropriate business entity depending on your ownership, investment plans, and operational goals." },
        { title: "Reserve the Company Name", desc: "The company name must be verified and registered with the relevant authorities." },
        { title: "Draft Articles of Association", desc: "Prepare the legal documents outlining company operations, shareholder structure, and management policies." },
        { title: "Open a Corporate Bank Account", desc: "Deposit the required share capital in a French business bank account." },
        { title: "Register with the Trade and Companies Register", desc: "Submit the incorporation application to the relevant business registry." },
        { title: "Obtain Business Registration Certificate", desc: "Once approved, the company receives an official registration number and can legally operate in France." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for Company Registration in France
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Registering a company in France involves several regulatory and administrative steps. A structured approach ensures faster approvals and compliance with French corporate laws.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="France Company Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                Throughout the process, Vyombiz managed by Clink Consultancy Services Private Limited ensures that every step is handled professionally to reduce delays and compliance risks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FranceIncorporationFeaturesSection = () => {
    const features = [
        { title: "Expert guidance on France company laws" },
        { title: "Complete documentation support" },
        { title: "Fast and efficient registration process" },
        { title: "Global business incorporation expertise" },
        { title: "Dedicated professional assistance" }
    ];

    const costs = [
        "Type of business entity",
        "Government registration fees",
        "Legal documentation charges",
        "Registered office requirements",
        "Professional service fees"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Cost of Company Registration in France
                    </h2>
                    <p className="text-[17px] text-slate-600 max-w-4xl leading-relaxed mb-6">
                        The cost of registering a company in France depends on factors such as:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3 text-slate-700 font-medium list-disc pl-5">
                        {costs.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 mb-12">
                        While the overall investment varies based on business structure and operational needs, working with experienced consultants ensures cost transparency and efficient registration.
                    </p>
                </div>

                <div className="mb-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                    <h2 className="text-3xl font-semibold text-[#072b47] mb-6">
                        Why Choose Vyombiz for France Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 max-w-4xl leading-relaxed mb-6">
                        Starting a company in another country requires careful planning and compliance with local laws. Expert guidance can simplify the entire process and avoid costly mistakes.
                    </p>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited offers end-to-end support for international company formation. Key advantages include:
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
                        With a focus on accuracy and efficiency, businesses can confidently expand into the French market.
                    </p>
                </div>

                <div className="mt-16 bg-[#072b47] rounded-3xl p-10 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">Start Your France Company Today</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-4">
                        France is a powerful destination for entrepreneurs looking to expand into the European market. With the right legal structure and professional support, establishing your company can be seamless and efficient.
                    </p>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                        Begin your global expansion journey with Vyombiz managed by Clink Consultancy Services Private Limited and build your presence in one of Europe’s most dynamic business environments.
                    </p>
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition">
                        Talk to an Expert Today
                    </Link>
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
                heroSubtitle="Start Your Business in France — The Gateway to the European Market"
                heroDescription="Register your company in one of Europe’s most powerful economies. France offers a strong legal framework, global market access, and a business-friendly ecosystem for international entrepreneurs. Launch your French company smoothly with expert support from Vyombiz managed by Clink Consultancy Services Private Limited, ensuring compliance, documentation, and faster incorporation."
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

