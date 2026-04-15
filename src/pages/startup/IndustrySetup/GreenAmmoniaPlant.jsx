import { Link } from "react-router-dom";
import React from "react";
import {
    Droplet,
    Briefcase,
    Building2,
    ShieldCheck,
    Globe,
    Zap
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/Industry Setup/green-ammonia-plant-setup/benefits.jpeg";
import overview from "../../../assets/Industry Setup/green-ammonia-plant-setup/overview.jpg";
import process from "../../../assets/Industry Setup/green-ammonia-plant-setup/process.jpg";


const GreenAmmoniaPlantOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Eco-Industrial Fuel
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is a Green Ammonia Plant?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Green Ammonia Plant produces ammonia using renewable energy sources such as solar, wind, or hydro power instead of fossil fuels. The process uses electrolysis to produce hydrogen, which is then combined with nitrogen from the air to produce ammonia.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Unlike conventional ammonia production, green ammonia significantly reduces carbon emissions and supports global net-zero targets and sustainable industrial development.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Green ammonia is increasingly used in: Clean fuel for shipping, Fertilizer production, Energy storage solutions, Hydrogen carrier for global transport, Power generation and industrial energy systems.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With governments promoting green hydrogen and green ammonia projects, this sector offers strong opportunities for forward-thinking businesses and investors.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Green Ammonia Plant Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const GreenAmmoniaPlantAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why Invest in a Green Ammonia Plant?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The global push toward sustainable energy is accelerating demand for green fuels.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Green Ammonia Plant Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Future-Proof Energy Solution", desc: "Green ammonia plays a key role in decarbonizing industries and reducing global emissions." },
                        { title: "Government Incentives & Subsidies", desc: "Many governments offer subsidies, tax benefits, and policy support for green hydrogen and ammonia projects." },
                        { title: "Export Potential", desc: "Countries worldwide are planning to import green ammonia for energy and industrial use." },
                        { title: "Sustainable Business Growth", desc: "Green ammonia plants support long-term growth aligned with ESG and sustainability goals." },
                        { title: "Energy Storage & Transport", desc: "Ammonia acts as an efficient hydrogen carrier for large-scale energy transportation." }
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
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-8 font-medium">
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses can navigate regulatory requirements and establish green ammonia plants efficiently.
                    </p>
                </div>
            </div>
        </div>
    );
};

const GreenAmmoniaPlantEligibility = () => {
    const list = [
        "Business Entity Registration",
        "Environmental Clearance (EC)",
        "Pollution Control Board NOC",
        "Factory License",
        "Land Use and Industrial Zoning Approvals",
        "Power Supply & Renewable Energy Agreements",
        "Hazardous Chemical Handling Compliance",
        "Safety & Industrial Regulations"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Key Approvals Required for Green Ammonia Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Establishing a green ammonia plant involves multiple regulatory clearances and compliance processes.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed mb-8">
                    {list.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1 text-yellow-400"><ShieldCheck size={18} /></div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Our experts assist businesses in managing documentation, approvals, and regulatory procedures to ensure a smooth setup process.
                </p>
                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Journey Today
                            </Link>
                </div>
            </div>
        </section>
    );
};

const GreenAmmoniaPlantDocumentsSection = () => {
    const list = [
        "Business registration documents",
        "Land ownership or lease documents",
        "Project feasibility report",
        "Environmental impact assessment (EIA)",
        "Technical project reports",
        "Identity and address proof of directors",
        "Industrial safety compliance documents",
        "Pollution control board applications"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Green Ammonia Plant Setup
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Typical documentation required during the setup process includes:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i} className="flex"><span className="mr-2 text-yellow-400">•</span> {item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                    Proper documentation ensures faster approval and smoother regulatory processing.
                </p>
            </div>
        </section>
    );
};

const GreenAmmoniaPlantProcessSection = () => {
    const steps = [
        { title: "Project Feasibility & Planning", desc: "Initial evaluation of project viability, plant capacity, renewable energy availability, and infrastructure." },
        { title: "Business Formation & Licensing", desc: "Registering the business entity and securing necessary industrial licenses." },
        { title: "Environmental & Regulatory Approvals", desc: "Obtaining environmental clearance and pollution control board approvals." },
        { title: "Land Acquisition & Industrial Zoning", desc: "Ensuring land suitability and regulatory zoning approvals for industrial use." },
        { title: "Infrastructure Development", desc: "Setting up electrolysis units, renewable energy integration, and ammonia production infrastructure." },
        { title: "Compliance & Operational Certification", desc: "Completing safety checks, environmental compliance verification, and operational licensing." }
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Green Ammonia Plant Setup Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Setting up a green ammonia plant requires technical planning along with legal compliance.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="Green Ammonia Plant Setup Process" className="w-full rounded-lg shadow-sm" />
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                            With the guidance of Vyombiz managed by Clink Consultancy Services Private Limited, businesses can streamline these steps and reduce regulatory delays.
                        </p>
                        <div className="mt-8 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your Setup Process
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GreenAmmoniaPlantFeaturesSection = () => {
    const industries = [
        "Fertilizer manufacturing",
        "Renewable energy projects",
        "Shipping and maritime fuel",
        "Chemical industries",
        "Power generation",
        "Hydrogen storage and transport infrastructure"
    ];

    const features = [
        { title: "End-to-end project setup assistance", desc: "Complete end-to-end support to get your plant running." },
        { title: "Industry licensing and regulatory approvals", desc: "We manage the entire licensing landscape." },
        { title: "Environmental compliance management", desc: "Achieve standards with thorough environmental checks." },
        { title: "Business structuring and documentation", desc: "Complete documentation guidance." },
        { title: "Government liaison and regulatory guidance", desc: "Working hand in hand with policy structures." },
        { title: "Ongoing compliance support", desc: "We are available post setup for compliance." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                            Industries That Benefit from Green Ammonia
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                            Green ammonia is transforming multiple sectors. Major industries include:
                        </p>
                        <ul className="space-y-3">
                            {industries.map((item, index) => (
                                <li key={index} className="flex">
                                    <span className="mr-3 text-yellow-400">•</span>
                                    <span className="text-[17px] text-slate-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                            Businesses entering these sectors are increasingly investing in green ammonia facilities to support sustainable production.
                        </p>
                    </div>
                    <div>
                        <img src={overview} alt="Green Ammonia Factory" className="w-full rounded-2xl shadow-sm" />
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Green Ammonia Plant Setup?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Setting up a large-scale energy infrastructure project requires legal expertise, regulatory understanding, and strategic planning. Vyombiz managed by Clink Consultancy Services Private Limited offers structured assistance for businesses entering the green energy sector.
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]"><ShieldCheck size={20} className="text-yellow-400" /></div>
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

const GreenAmmoniaPlant = () => {
    const faqs = [
        {
            question: "What is the main purpose of green ammonia?",
            answer: "Green ammonia is primarily used as a clean fuel, hydrogen carrier, and sustainable fertilizer component while reducing carbon emissions."
        },
        {
            question: "Is government approval required for green ammonia plants?",
            answer: "Yes. Multiple approvals such as environmental clearance, pollution control board consent, and industrial licenses are typically required."
        },
        {
            question: "Is green ammonia production environmentally friendly?",
            answer: "Yes. Since green ammonia is produced using renewable energy, it significantly reduces carbon emissions compared to traditional ammonia production."
        },
        {
            question: "Can green ammonia be exported?",
            answer: "Yes. Many countries are planning to import green ammonia as a clean energy fuel, making it a strong export opportunity."
        },
        {
            question: "Who can start a green ammonia plant?",
            answer: "Businesses, energy companies, chemical manufacturers, and investors interested in renewable energy infrastructure can establish green ammonia plants."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Green Ammonia"
                heroTitleSuffix="Plant Setup"
                heroSubtitle="Build the Future of Clean Energy with a Green Ammonia Plant"
                heroDescription="Green ammonia is emerging as one of the most powerful clean fuel alternatives for industries and global energy transition. Setting up a green ammonia plant requires careful planning, regulatory approvals, environmental compliance, and technical structuring. Vyombiz managed by Clink Consultancy Services Private Limited helps businesses establish green ammonia plants with end-to-end legal, regulatory, and project setup support."
                whatsIncludedList={[
                    "Industry Licensing",
                    "Environmental Compliance",
                    "Project Structuring",
                    "Government Approvals",
                    "End-to-end Support"
                ]}
                stats={[
                    { count: "42K+", label: "Clients", icon: <Droplet size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= TRUSTED BRANDS SECTION ================= */}

            {/* ================= TALK EXPERT SECTION ================= */}
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<GreenAmmoniaPlantOverview />}
                advantages={<GreenAmmoniaPlantAdvantages />}
                eligibility={<GreenAmmoniaPlantEligibility />}
                documents={<GreenAmmoniaPlantDocumentsSection />}
                process={<GreenAmmoniaPlantProcessSection />}
                features={<GreenAmmoniaPlantFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Expert answers on Green Ammonia Plant Setup"
                faqs={faqs}
            />

        </div>
    );
};

export default GreenAmmoniaPlant;

