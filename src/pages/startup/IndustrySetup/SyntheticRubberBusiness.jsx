import { Link } from "react-router-dom";
import React from "react";
import {
    Activity,
    Briefcase,
    Building2,
    ShieldCheck,
    Truck,
    Settings
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/Industry Setup/Synthetic Rubber Business Setup/benefits.jpeg";
import overview from "../../../assets/Industry Setup/Synthetic Rubber Business Setup/overview.jpeg";
import process from "../../../assets/Industry Setup/Synthetic Rubber Business Setup/process.jpeg";

const SyntheticRubberOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Industrial Growth
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is a Synthetic Rubber Business?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Synthetic rubber is an artificially produced elastomer made from petrochemical feedstocks. It is widely used in automobile tires, footwear, industrial machinery, adhesives, medical products, and electrical insulation due to its durability and resistance to heat, chemicals, and abrasion.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The demand for synthetic rubber has grown significantly due to the expansion of industries like automotive manufacturing, infrastructure development, and industrial equipment production. Establishing a synthetic rubber manufacturing unit requires proper regulatory approvals, business registration, environmental clearances, and factory compliance.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited assists entrepreneurs in navigating the legal and regulatory framework required to establish and operate a synthetic rubber manufacturing business smoothly.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Synthetic Rubber Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SyntheticRubberBusinessAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Business Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Start a Synthetic Rubber Manufacturing Business?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The synthetic rubber industry plays a critical role in modern manufacturing. With increasing demand from multiple sectors, this business offers strong long-term growth opportunities.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Synthetic Rubber Business Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "High industrial demand", desc: "Synthetic rubber is widely used in automotive, construction, healthcare, and consumer goods industries." },
                        { title: "Growing automobile sector", desc: "The tire manufacturing industry is one of the largest consumers of synthetic rubber." },
                        { title: "Export opportunities", desc: "India exports various rubber products to global markets." },
                        { title: "Technological advancements", desc: "Modern manufacturing technologies have improved production efficiency and product quality." },
                        { title: "Government support for manufacturing", desc: "Government initiatives encouraging industrial production and domestic manufacturing provide favorable conditions for entrepreneurs." }
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

const SyntheticRubberBusinessEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of Synthetic Rubber You Can Manufacture
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    There are several types of synthetic rubber products that manufacturers can produce depending on market demand and technical capability.
                </p>
                <div className="space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Styrene-Butadiene Rubber (SBR)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">One of the most widely used synthetic rubbers, commonly used in tire manufacturing and automotive components.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Nitrile Rubber (NBR)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Known for its resistance to oils and chemicals, making it suitable for industrial seals, hoses, and gaskets.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Butyl Rubber (IIR)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Highly resistant to air permeability and widely used in inner tubes and pharmaceutical closures.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Neoprene Rubber (CR)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Popular for its resistance to heat, weather, and chemicals. Often used in industrial belts and protective equipment.</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-2">Ethylene Propylene Rubber (EPDM)</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed">Used extensively in roofing materials, electrical insulation, and automotive parts.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SyntheticRubberBusinessDocumentsSection = () => {
    const list = [
        "Identity proof of directors or partners",
        "Address proof of promoters",
        "Business address proof",
        "Industrial land or lease agreement",
        "Pollution control documentation",
        "Factory layout and safety plan",
        "Bank account details of the business entity"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Synthetic Rubber Business Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To register and operate a synthetic rubber manufacturing business, certain documents are typically required. Proper documentation ensures faster processing of licenses and approvals.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <div className="mr-3 mt-1 text-yellow-400"><ShieldCheck size={18} /></div>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const SyntheticRubberBusinessProcessSection = () => {
    const steps = [
        { title: "Market Research", desc: "Analyze demand, target industries, and competitor landscape." },
        { title: "Business Entity Registration", desc: "Register a Private Limited Company, LLP, or other suitable legal structure." },
        { title: "Location and Infrastructure Setup", desc: "Select an industrial zone and establish the manufacturing facility." },
        { title: "Obtain Required Licenses", desc: "Apply for environmental approvals, factory license, and GST registration." },
        { title: "Install Manufacturing Equipment", desc: "Set up machinery for rubber processing and polymer production." },
        { title: "Compliance and Safety Setup", desc: "Ensure compliance with labor laws, safety standards, and industrial regulations." },
        { title: "Begin Production and Distribution", desc: "Start manufacturing synthetic rubber products and supply them to industries." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to Start a Synthetic Rubber Manufacturing Business
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Starting a synthetic rubber business involves several structured steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Synthetic Rubber Business Setup Process" className="w-full rounded-lg shadow-sm" />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">Step {index + 1}</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200" />
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-8">
                            Vyombiz managed by Clink Consultancy Services Private Limited supports businesses throughout each stage of this setup process.
                        </p>
                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Registration Process
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SyntheticRubberBusinessFeaturesSection = () => {
    const registrations = [
        { title: "Company or LLP Registration", desc: "Establishing a legal entity is the first step to starting a manufacturing business." },
        { title: "GST Registration", desc: "Required for selling rubber products and conducting taxable business transactions." },
        { title: "Factory License", desc: "Mandatory for operating a manufacturing unit under the Factories Act." },
        { title: "Pollution Control Board Approval", desc: "Environmental clearance is necessary due to the chemical manufacturing process." },
        { title: "Import Export Code (IEC)", desc: "Required if you plan to import raw materials or export finished rubber products." },
        { title: "Trademark Registration", desc: "Protects your brand identity in the rubber manufacturing market." }
    ];

    const challenges = [
        { title: "High capital investment", desc: "Manufacturing facilities and machinery require substantial funding." },
        { title: "Strict regulatory compliance", desc: "Environmental and safety regulations must be strictly followed." },
        { title: "Raw material price fluctuations", desc: "Petrochemical-based inputs may experience price volatility." },
        { title: "Technical expertise", desc: "Manufacturing synthetic rubber requires specialized knowledge and skilled workforce." }
    ];

    const features = [
        { title: "Industry-focused expertise", desc: "Guidance tailored specifically for manufacturing businesses." },
        { title: "End-to-end compliance management", desc: "From business registration to industrial licensing." },
        { title: "Faster documentation processing", desc: "Efficient handling of approvals and registrations." },
        { title: "Transparent and professional service", desc: "Clear communication and expert assistance throughout the process." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Registrations Required for Synthetic Rubber Business in India
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Starting a synthetic rubber manufacturing business requires several registrations and regulatory approvals to ensure compliance with Indian laws.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {registrations.map((item, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                <h3 className="text-[18px] font-semibold text-[#072b47] mb-2">{item.title}</h3>
                                <p className="text-[16px] text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                        Challenges in the Synthetic Rubber Industry
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                        Although the industry offers high potential, entrepreneurs must consider certain challenges. With expert legal and regulatory guidance, these challenges can be managed effectively.
                    </p>
                    <div className="space-y-4">
                        {challenges.map((item, index) => (
                            <div key={index} className="flex items-start">
                                <div className="min-w-[8px] h-[8px] rounded-full bg-[#005a9c] mt-2 mr-3" />
                                <div>
                                    <span className="font-semibold text-[#072b47]">{item.title}: </span>
                                    <span className="text-slate-600">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Entrepreneurs trust Vyombiz managed by Clink Consultancy Services Private Limited for reliable legal and compliance support.
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

const SyntheticRubberBusiness = () => {
    const faqs = [
        {
            question: "Is synthetic rubber manufacturing profitable in India?",
            answer: "Yes, the demand for synthetic rubber is increasing due to rapid growth in the automotive and industrial sectors."
        },
        {
            question: "Do I need environmental approval for this business?",
            answer: "Yes. Synthetic rubber manufacturing involves chemical processes, so Pollution Control Board approval is required."
        },
        {
            question: "Which industries use synthetic rubber?",
            answer: "Automotive, footwear, healthcare, construction, electronics, and industrial machinery industries rely heavily on synthetic rubber products."
        },
        {
            question: "How long does it take to start a synthetic rubber manufacturing business?",
            answer: "The timeline depends on business registration, land acquisition, and regulatory approvals, which may take several weeks to a few months."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Synthetic Rubber"
                heroTitleSuffix="Business Setup"
                heroSubtitle="Start Your Synthetic Rubber Manufacturing Business in India"
                heroDescription="Launch and legally establish your synthetic rubber manufacturing unit with complete regulatory support. From company registration to environmental approvals and factory compliance, get expert guidance at every step. Build a compliant and scalable rubber manufacturing business with confidence."
                whatsIncludedList={[
                    "Business Board Registration",
                    "Environmental Clearance (Pollution Board)",
                    "Factory Act Compliance & License",
                    "GST and Import/Export Registration",
                    "Trademark Registration",
                    "Ongoing Regulatory Compliance"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Activity size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<SyntheticRubberOverview />}
                advantages={<SyntheticRubberBusinessAdvantages />}
                eligibility={<SyntheticRubberBusinessEligibility />}
                documents={<SyntheticRubberBusinessDocumentsSection />}
                process={<SyntheticRubberBusinessProcessSection />}
                features={<SyntheticRubberBusinessFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Synthetic Rubber Business"
                faqs={faqs}
            />
        </div>
    );
};

export default SyntheticRubberBusiness;

