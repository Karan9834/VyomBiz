import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Utensils,
    ClipboardCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/FSSAI & Eating License/FSSAI License and Registration in India/benefits.png";
import overview from "../../../assets/FSSAI & Eating License/FSSAI License and Registration in India/overview.jpg";
import process from "../../../assets/FSSAI & Eating License/FSSAI License and Registration in India/process.jpg";

const FssaiLicenseOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Compliance Support
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is an <span className="text-yellow-400">FSSAI License?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An FSSAI License is a mandatory certification issued by the Food Safety and Standards Authority of India (FSSAI) under the Food Safety and Standards Act, 2006. It ensures that food businesses follow strict safety, hygiene, and quality standards before selling food to consumers.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Every food business operator (FBO) in India must obtain an FSSAI registration or license depending on their business size and annual turnover.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            <strong className="text-[#072b47]">Businesses that typically require an FSSAI License include:</strong><br />
                            Restaurants and cafes, Cloud kitchens, Food manufacturers, Food processing units, Food importers and exporters, Caterers and food vendors, Packaged food brands, Grocery and retail food stores.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Operating without an FSSAI License can lead to heavy penalties and legal complications. That is why businesses often rely on professional compliance support from Vyombiz managed by Clink Consultancy Services Private Limited to complete the registration process smoothly.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="FSSAI License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiLicenseAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Getting an FSSAI License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        An FSSAI License is more than just a legal requirement. It helps build credibility and trust among customers. Key benefits include:
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="FSSAI License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Compliance", desc: "Operate your food business without regulatory risks or penalties." },
                        { title: "Consumer Trust", desc: "Customers feel more confident buying from businesses that follow food safety regulations." },
                        { title: "Business Expansion", desc: "An FSSAI license is often required to sell on e-commerce platforms and partner with food delivery apps." },
                        { title: "Brand Credibility", desc: "Displaying the FSSAI number improves brand reputation and transparency." },
                        { title: "Market Opportunities", desc: "It becomes easier to expand into retail chains, exports, and large distribution networks." }
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

const FssaiLicenseEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of FSSAI Licenses in India
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    The type of license required depends on the scale of operations and annual turnover of the food business.
                </p>
                <div className="mb-10">
                    <ul className="space-y-4 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <h3 className="text-xl font-semibold text-[#072b47]">Basic FSSAI Registration</h3>
                            <p>This is suitable for small food businesses or startups with annual turnover below ₹12 lakh. Examples include small food vendors, home kitchens, petty retailers, and small-scale food producers.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-[#072b47]">State FSSAI License</h3>
                            <p>This license is required for medium-sized food businesses with annual turnover between ₹12 lakh and ₹20 crore. It is typically required by restaurants, mid-level manufacturers, storage units, distributors, and transporters operating within a single state.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-[#072b47]">Central FSSAI License</h3>
                            <p>Large-scale food businesses with annual turnover above ₹20 crore must obtain a Central FSSAI License. This license is also mandatory for importers, exporters, large manufacturers, and businesses operating across multiple states.</p>
                        </li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Choosing the correct license category is important to avoid compliance issues. Many businesses seek guidance from Vyombiz managed by Clink Consultancy Services Private Limited to determine the appropriate license based on their operations.
                    </p>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6 mt-12">
                    Who Needs an FSSAI License?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    If your business is involved in manufacturing, processing, packaging, storing, distributing, or selling food products, you are legally required to obtain an FSSAI license. Common businesses that require registration include:
                </p>
                <div className="mb-10">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Restaurants and hotels</li>
                        <li>Bakeries and sweet shops</li>
                        <li>Online food sellers</li>
                        <li>Home-based food businesses</li>
                        <li>Dairy product manufacturers</li>
                        <li>Food importers and exporters</li>
                        <li>Catering services</li>
                        <li>Cloud kitchens and food delivery brands</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Even online food sellers operating through platforms like delivery apps must ensure proper FSSAI registration before starting operations.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiLicenseDocuments = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for FSSAI License
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The documentation required depends on the license type, but the commonly required documents include:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Identity proof of the business owner</li>
                        <li>Address proof of the business location</li>
                        <li>Passport size photograph</li>
                        <li>Business registration certificate (if applicable)</li>
                        <li>Food safety management plan</li>
                        <li>List of food products to be handled or manufactured</li>
                        <li>Kitchen layout or processing unit layout (for manufacturers)</li>
                        <li>NOC from the municipality or local authority (in some cases)</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Experts at Vyombiz managed by Clink Consultancy Services Private Limited assist businesses in preparing and verifying documents to ensure a smooth approval process.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiLicenseProcess = () => {
    const steps = [
        { step: "01", title: "Business Evaluation", desc: "The process begins with understanding your business structure, food category, and turnover to determine the correct FSSAI license type." },
        { step: "02", title: "Document Preparation", desc: "All necessary documents are collected and verified before submission to avoid rejection or delays." },
        { step: "03", title: "Application Submission", desc: "The application is filed on the official FSSAI portal along with the required documents and fees." },
        { step: "04", title: "Government Verification", desc: "Authorities may review the documents and in some cases conduct an inspection of the premises." },
        { step: "05", title: "License Approval", desc: "Once the application is approved, the FSSAI license is issued along with a 14-digit FSSAI number that must be displayed on food packaging and business premises." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for FSSAI License Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Obtaining an FSSAI license involves multiple verification steps and government approvals.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="The Licensing Process"
                            className="w-full rounded-lg shadow-sm"
                        />
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

const FssaiLicenseFeatures = () => {
    const features = [
        { title: "Correct license category selection", desc: "Expert assessment to determine whether you need Basic, State, or Central license." },
        { title: "Accurate document submission", desc: "Proper preparation and checking of documents to ensure compliance standards." },
        { title: "Faster approval process", desc: "Streamlined processes that minimize the average time taken for license issuance." },
        { title: "Reduced chances of rejection", desc: "Avoiding minor errors that could otherwise lead to delays or application rejection." },
        { title: "Ongoing compliance support", desc: "Continued assistance for renewals, annual returns, and food safety audits." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Professional Assistance for FSSAI Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        The application process can sometimes involve technical documentation, compliance verification, and regulatory procedures. Professional assistance ensures:
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
                <div className="text-center mt-8">
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        With experienced compliance experts, Vyombiz managed by Clink Consultancy Services Private Limited helps food entrepreneurs and businesses obtain their FSSAI license efficiently and focus on growing their brand.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiLicenseCompliance = () => {
    const compliance = [
        { title: "License Validity Period", desc: "An FSSAI License can be obtained for 1 to 5 years, depending on the preference of the business owner." },
        { title: "Timely Renewal Application", desc: "Businesses must apply for renewal before the license expiry date to avoid penalties or suspension of operations." },
        { title: "Renewal Process Management", desc: "Many food businesses rely on compliance support from Vyombiz managed by Clink Consultancy Services Private Limited to track renewal deadlines and maintain uninterrupted compliance." },
        { title: "Start Your Registration Today", desc: "If you are planning to launch or expand a food business in India, obtaining an FSSAI license is the first step toward legal and successful operations." },
        { title: "Expert Guidance", desc: "Start your registration today and ensure your food business meets all regulatory standards with expert guidance from Vyombiz managed by Clink Consultancy Services Private Limited." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        FSSAI License Validity and Renewal
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        An FSSAI License can be obtained for 1 to 5 years. Understand the renewal process below:
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

const FssaiLicense = () => {
    const faqs = [
        {
            question: "Which are the three types of FSSAI licenses?",
            answer: "The three types of FSSAI licenses are: 1. FSSAI Basic Registration (Turnover < ₹12 Lakhs), 2. FSSAI State License (Turnover ₹12 Lakhs to ₹20 Crores), and 3. FSSAI Central License (Turnover > ₹20 Crores)."
        },
        {
            question: "How can I apply for FSSAI License for Restaurants?",
            answer: "Restaurants can apply for an FSSAI license through the FoSCoS portal. Depending on their turnover and location, they may need a State or Central license. The process involves filing Form B, submitting documents like floor plans and water test reports, and undergoing an inspection."
        },
        {
            question: "Who are Petty Food Business Operators?",
            answer: "Petty Food Business Operators are small-scale food handlers like hawkers, vendors, temporary stall holders, or small grocery stores with an annual turnover of less than ₹12 Lakhs and a daily production capacity of up to 100 kg/litres."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI License"
                heroTitleSuffix="Registration"
                heroSubtitle="Sell Food Legally in India with an FSSAI License"
                heroDescription="Start, run, and scale your food business with the right compliance. Whether you run a restaurant, cloud kitchen, food truck, or packaged food brand, obtaining an FSSAI License is mandatory to operate legally in India. Get your FSSAI License quickly with expert assistance and zero confusion."
                whatsIncludedList={[
                    "Eligibility Criteria Assessment",
                    "FoSCoS Portal Application Filing",
                    "Complete Document Management",
                    "Food Safety Management Plan (FSMS)",
                    "On-Site Inspection Guidance",
                    "Regular Compliance Updates"
                ]}
                stats={[
                    { count: "50K+", label: "FBOs Served", icon: <Utensils size={20} /> },
                    { count: "3500+", label: "Experts", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <ShieldCheck size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiLicenseOverview />}
                advantages={<FssaiLicenseAdvantages />}
                eligibility={<FssaiLicenseEligibility />}
                documents={<FssaiLicenseDocuments />}
                process={<FssaiLicenseProcess />}
                features={<FssaiLicenseFeatures />}
                postCompliance={<FssaiLicenseCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiLicense;

