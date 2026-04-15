import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    MapPin,
    IndianRupee
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/FSSAI & Eating License/fssai-state-license/benefits.png";
import overview from "../../../assets/FSSAI & Eating License/fssai-state-license/overview.jpeg";
import process from "../../../assets/FSSAI & Eating License/fssai-state-license/process.jpeg";

const FssaiStateOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            State Level
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is an <span className="text-yellow-400">FSSAI State License?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An FSSAI State License is mandatory for medium-sized food businesses operating within a particular state and having an annual turnover between ₹12 lakh and ₹20 crore.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The license is issued by the State Food Safety Authority and certifies that the business complies with food safety regulations established under the Food Safety and Standards Act, 2006.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses involved in manufacturing, processing, storage, distribution, or retail of food products must obtain this license before commencing operations.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited simplifies the process by helping businesses prepare documentation, file applications, and obtain approval efficiently.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="FSSAI State License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiStateLicenseAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Key Benefits of an FSSAI State License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The FSSAI State License is essential for food businesses operating within a specific state in India. Here are some key benefits:
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="FSSAI State License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Authorization to Operate", desc: "The license grants official approval from regulatory authorities, allowing businesses to operate legally within the food industry." },
                        { title: "Builds Consumer Trust", desc: "Displaying the FSSAI license number improves customer confidence and assures them of food safety standards." },
                        { title: "Easier Business Expansion", desc: "Licensed businesses can easily expand operations, open additional outlets, or partner with distributors." },
                        { title: "Compliance with Food Safety Standards", desc: "The license ensures that food products follow strict hygiene, quality, and safety regulations." },
                        { title: "Improved Brand Reputation", desc: "Food businesses with proper compliance are more credible in the market and attract partnerships with retailers and delivery platforms." }
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

const FssaiStateEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs an FSSAI State License?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Food businesses exceeding the limits of a basic registration but not qualifying for a central license must apply for a state-level FSSAI license.
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li>Restaurants and large cafes</li>
                        <li>Medium-scale food manufacturers</li>
                        <li>Food processing units</li>
                        <li>Food distributors and wholesalers</li>
                        <li>Storage units and warehouses</li>
                        <li>Transporters handling food products</li>
                        <li>Cloud kitchens and catering businesses</li>
                        <li>Retail chains operating within a state</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                        Obtaining the correct license category is crucial because operating under the wrong registration can lead to penalties or business interruptions.
                    </p>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6 mt-12">
                    Eligibility Criteria for FSSAI State License
                </h2>
                <div className="mb-10">
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-4">A business must apply for an FSSAI State License if:</p>
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Annual turnover exceeds ₹12 lakh but is below ₹20 crore</li>
                        <li>The business operates within a single state</li>
                        <li>Food manufacturing capacity falls within prescribed limits</li>
                        <li>The business handles food storage, transport, or processing at a moderate scale</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                        Choosing the correct license type ensures smooth compliance and avoids future regulatory issues.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiStateDocuments = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for FSSAI State License
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To obtain a state license, food businesses must provide several essential documents during the application process. Typical documentation includes:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Identity and address proof of business owner</li>
                        <li>Business registration certificate (Company, LLP, or Proprietorship)</li>
                        <li>Food safety management plan</li>
                        <li>Layout plan of the food processing unit or kitchen</li>
                        <li>List of food products handled</li>
                        <li>Equipment and machinery details</li>
                        <li>Address proof of the business premises</li>
                        <li>NOC from municipality or local authority</li>
                        <li>Water quality test report (if applicable)</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited ensures that all documentation is prepared correctly to avoid delays or rejection.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiStateProcess = () => {
    const steps = [
        { step: "01", title: "Application Preparation", desc: "Business details, operational information, and required documents are collected and verified." },
        { step: "02", title: "Filing the Application", desc: "The application is submitted to the State Food Safety Authority through the official FSSAI portal." },
        { step: "03", title: "Document Review", desc: "Authorities review the application and verify the compliance of the business with safety regulations." },
        { step: "04", title: "Inspection (If Required)", desc: "In certain cases, the food safety officer may conduct a premises inspection." },
        { step: "05", title: "License Approval", desc: "Once the application is approved, the FSSAI State License certificate is issued. With the right professional guidance, the entire process becomes much faster and smoother." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for FSSAI State License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Obtaining an FSSAI State License involves several regulatory steps that must be followed accurately.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="The Approval Journey"
                            className="w-full rounded-lg shadow-sm"
                        />
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-[#072b47] mb-2">Timeline Summary (Approx 6-12 Weeks):</h3>
                            <ul className="text-[15px] text-slate-600 space-y-2">
                                <li><strong>Preperation:</strong> 1-2 Weeks</li>
                                <li><strong>Submission:</strong> 1 Week</li>
                                <li><strong>Review:</strong> 2-3 Weeks</li>
                                <li><strong>Inspection:</strong> 2-4 Weeks</li>
                                <li><strong>Issuance:</strong> 1-2 Weeks</li>
                            </ul>
                        </div>
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
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiStateFeatures = () => {
    const features = [
        { title: "Expert consultation", desc: "Expert consultation on license eligibility." },
        { title: "Complete documentation assistance", desc: "Assistance with all the documentation you need for submission." },
        { title: "Accurate application filing", desc: "Filing your FSSAI application right the very first time to avoid rejection." },
        { title: "Regulatory compliance guidance", desc: "Guidance to comply with changing rules, norms, and inspection hurdles." },
        { title: "Fast processing", desc: "Fast processing and status tracking throughout the procedure." },
        { title: "Dedicated support", desc: "Dedicated support throughout the entire licensing process." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for FSSAI State License?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Obtaining regulatory approvals can often be complicated due to compliance requirements and documentation procedures. Vyombiz managed by Clink Consultancy Services Private Limited provides complete assistance from application to approval. Our goal is to help businesses focus on growth while we handle the legal complexities.
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
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiStateCompliance = () => {
    const compliance = [
        { title: "License Validity Period", desc: "An FSSAI State License can be obtained for 1 to 5 years, depending on the applicant’s preference." },
        { title: "Renewal Tracking", desc: "Businesses must ensure timely renewal before the license expires to avoid penalties or suspension of operations." },
        { title: "Initiation Timeline", desc: "Renewal should ideally be initiated 30 days before the expiry date." },
        { title: "Common Challenges", desc: "Many businesses struggle with incorrect license categories, incomplete documentation, and compliance issues during inspections. Expert guidance avoids these." },
        { title: "Start Your Application Today", desc: "Starting or expanding a food business requires proper regulatory approval. Start your application today and ensure your food business operates legally." },
        { title: "Hassle-Free Approval", desc: "Vyombiz managed by Clink Consultancy Services Private Limited helps food entrepreneurs navigate the compliance process and secure their license efficiently." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        FSSAI State License Validity
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Businesses must maintain active registration to operate legally. Understand the validity, renewal timelines, and ways to handle common licensing challenges below:
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiStateLicense = () => {
    const faqs = [
        {
            question: "Who is required to obtain an FSSAI State License?",
            answer: "Any Food Business Operator (FBO) with an annual turnover between ₹12 Lakhs and ₹20 Crores is mandatorily required to obtain an FSSAI State License. This also includes mid-sized manufacturers, storage units, and retailers operating within a single state."
        },
        {
            question: "How does a State License differ from a Central License?",
            answer: "FSSAI State Licenses are for businesses operating in only one state with turnover up to ₹20 Crores. Central Licenses are for those operating in multiple states, involved in import/export, or having an annual turnover exceeding ₹20 Crores."
        },
        {
            question: "How long does it take to obtain an FSSAI State License?",
            answer: "The general timeframe for obtaining an FSSAI State License is approximately 30 to 60 days, depending on the completeness of documents and the inspection process."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI State"
                heroTitleSuffix="License"
                heroSubtitle="Expand Your Food Business with a Valid FSSAI State License"
                heroDescription="Running a food business across a state requires more than just great products — it requires legal compliance and consumer trust. An FSSAI State License ensures your food operations meet safety standards set by the Food Safety and Standards Authority of India. Vyombiz managed by Clink Consultancy Services Private Limited helps food entrepreneurs secure their FSSAI State License quickly, accurately, and without compliance hassles."
                whatsIncludedList={[
                    "State-Wise Eligibility Assessment",
                    "FoSCoS Online Portal Filing",
                    "FSMS Documentation Support",
                    "Machinery & Premises Layout Guidance",
                    "Inspection Readiness & Coordination",
                    "Annual Compliance Maintenance"
                ]}
                stats={[
                    { count: "15K+", label: "State Licenses", icon: <MapPin size={20} /> },
                    { count: "₹2000+", label: "Annual Fee", icon: <IndianRupee size={20} /> },
                    { count: "60 Days", label: "Avg. Timeline", icon: <ShieldCheck size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiStateOverview />}
                advantages={<FssaiStateLicenseAdvantages />}
                eligibility={<FssaiStateEligibility />}
                documents={<FssaiStateDocuments />}
                process={<FssaiStateProcess />}
                features={<FssaiStateFeatures />}
                postCompliance={<FssaiStateCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiStateLicense;

