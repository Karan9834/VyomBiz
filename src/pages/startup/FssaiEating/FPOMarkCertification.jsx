import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    CheckCircle,
    Apple
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/FSSAI & Eating License/fpo-mark-certification/benefits.png";
import cert from "../../../assets/FSSAI & Eating License/fpo-mark-certification/cert.png";
import fpo from "../../../assets/FSSAI & Eating License/fpo-mark-certification/fpo.jpg";

const FPOMarkOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Quality Mark
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is <span className="text-yellow-400">FPO Mark Certification?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FPO Mark Certification is a mandatory quality certification issued for processed fruit and vegetable products under Indian food safety regulations. It ensures that food items like jams, pickles, sauces, canned fruits, and fruit beverages meet specific hygiene, quality, and manufacturing standards.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The certification helps manufacturers demonstrate that their products follow the required guidelines for processing, packaging, labeling, and quality control. Businesses that process or manufacture fruit and vegetable products must obtain this certification before selling their products in the market.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Vyombiz managed by Clink Consultancy Services Private Limited helps businesses obtain FPO Mark Certification quickly and efficiently by handling documentation, regulatory compliance, and application procedures.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={cert}
                            alt="FPO Mark Certification Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FPOMarkAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Why FPO Certification is Important for Food Businesses
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Obtaining an FPO certification ensures compliance with food safety regulations while strengthening consumer confidence in your products. Key Benefits of FPO Certification:
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="FPO Mark Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Regulatory Compliance", desc: "Ensures that your food products comply with government standards for processed fruit and vegetable products." },
                        { title: "Improved Consumer Trust", desc: "The certification acts as proof of product quality and safety." },
                        { title: "Better Market Acceptance", desc: "Retailers and distributors prefer certified products that meet regulatory standards." },
                        { title: "Quality Assurance", desc: "Ensures proper manufacturing, storage, and packaging practices." },
                        { title: "Brand Reputation", desc: "Helps build credibility and reliability in the competitive food market." }
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
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                        Vyombiz managed by Clink Consultancy Services Private Limited supports businesses in achieving smooth and hassle-free certification.
                    </p>
                </div>
            </div>
        </div>
    );
};

const FPOMarkEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Products That Require FPO Mark Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    FPO certification is required for businesses manufacturing or processing a wide range of fruit and vegetable products. Common products covered under FPO certification include:
                </p>
                <div className="mb-10">
                    <ul className="list-disc pl-6 space-y-3 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>Fruit juices and beverages</li>
                        <li>Fruit pulp and concentrates</li>
                        <li>Jams and jellies</li>
                        <li>Pickles and chutneys</li>
                        <li>Tomato ketchup and sauces</li>
                        <li>Canned fruits and vegetables</li>
                        <li>Dehydrated fruits and vegetables</li>
                        <li>Squashes and syrups</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        If your business processes or packages any of these products, obtaining certification is necessary before distribution.
                    </p>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6 mt-12">
                    Who Needs FPO Mark Certification?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Businesses involved in processing, manufacturing, or packaging fruit and vegetable products are required to obtain this certification. It applies to:
                </p>
                <div className="mb-10">
                    <ul className="list-disc pl-6 space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>Food processing companies</li>
                        <li>Fruit and vegetable product manufacturers</li>
                        <li>Exporters of processed fruit products</li>
                        <li>Packaging units dealing with processed food</li>
                        <li>Small and medium food processing businesses</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Vyombiz managed by Clink Consultancy Services Private Limited assists both new food startups and established manufacturers in securing their certification efficiently.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FPOMarkDocuments = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for FPO Mark Certification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The application requires submission of several important documents to verify business details and production standards. Commonly required documents include:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>Business registration certificate</li>
                        <li>FSSAI license copy</li>
                        <li>Identity proof of the applicant</li>
                        <li>Address proof of the manufacturing unit</li>
                        <li>Manufacturing process details</li>
                        <li>Product list and formulation details</li>
                        <li>Layout plan of the manufacturing facility</li>
                        <li>Food safety and hygiene compliance documents</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Our experts review and prepare these documents to ensure a smooth application process.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FPOMarkProcess = () => {
    const steps = [
        { step: "01", title: "Application Preparation", desc: "Business details and product information are collected for certification." },
        { step: "02", title: "Document Submission", desc: "Required documents and compliance details are submitted to the relevant authority." },
        { step: "03", title: "Inspection of Manufacturing Unit", desc: "Authorities may inspect the production facility to verify hygiene and safety standards." },
        { step: "04", title: "Quality Verification", desc: "Products may undergo testing to ensure they meet prescribed quality parameters." },
        { step: "05", title: "Certification Approval", desc: "Once all requirements are met, the certification is granted." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process to Obtain FPO Mark Certification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The certification process involves several stages to ensure compliance with food safety guidelines. Vyombiz managed by Clink Consultancy Services Private Limited ensures accurate documentation and faster processing, reducing delays during approval.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={fpo}
                            alt="Certification Journey"
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

const FPOMarkFeatures = () => {
    const features = [
        { title: "Eligibility Assessment", desc: "Eligibility assessment for certification." },
        { title: "Documentation Prep", desc: "Documentation preparation and verification." },
        { title: "Application Filing", desc: "Application filing with authorities." },
        { title: "Compliance Support", desc: "Compliance support for food safety standards." },
        { title: "Inspection Assistance", desc: "Assistance during inspection procedures." },
        { title: "Continuous Support", desc: "Continuous support until certification approval." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How Vyombiz Helps with FPO Mark Certification
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Obtaining food certifications can involve complex regulatory requirements and documentation. Our team simplifies the process with professional support at every step. Vyombiz managed by Clink Consultancy Services Private Limited provides complete end-to-end certification assistance for food businesses across India.
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

const FPOMarkCompliance = () => {
    const compliance = [
        "Experienced compliance professionals",
        "Faster documentation processing",
        "Transparent procedures",
        "Dedicated support throughout the certification process",
        "Cost-effective solutions for food businesses"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for FPO Certification
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Businesses trust Vyombiz managed by Clink Consultancy Services Private Limited because of our expertise in legal and compliance services. Our goal is to help businesses focus on product growth while we handle regulatory compliance.
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item}</h3>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>

                    <div className="mt-12">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-[#072b47] mb-6">
                            Common Challenges Businesses Face in FPO Certification
                        </h2>
                        <p className="text-[16px] text-center text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
                            Many businesses struggle with the certification process due to regulatory complexities. Common issues include:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                            {[
                                "Incorrect or incomplete documentation",
                                "Lack of clarity on food safety requirements",
                                "Delays in inspection approvals",
                                "Compliance gaps in manufacturing processes"
                            ].map((issue, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-lg flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#005a9c]"></div>
                                    <span className="text-[16px] text-slate-700">{issue}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[16px] text-center text-slate-600 max-w-3xl mx-auto leading-relaxed mt-6 font-medium">
                            Working with experienced professionals helps businesses avoid these issues and obtain certification smoothly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FPOMarkCertification = () => {
    const faqs = [
        {
            question: "What does FPO stand for in food certification?",
            answer: "FPO stands for Fruit Products Order, which regulates the quality and safety of processed fruit and vegetable products."
        },
        {
            question: "Is FPO certification mandatory?",
            answer: "Yes, businesses manufacturing processed fruit and vegetable products must comply with regulatory standards and obtain the required certification."
        },
        {
            question: "How long does it take to obtain FPO certification?",
            answer: "The timeline depends on document verification, inspection, and approval by the relevant authorities."
        },
        {
            question: "Can small food businesses apply for FPO certification?",
            answer: "Yes, small food manufacturers and food processing units can apply for certification if they produce fruit or vegetable-based processed products."
        },
        {
            question: "Do I need FSSAI registration before applying for FPO certification?",
            answer: "Yes, businesses must have an FSSAI license before applying for certification."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FPO Mark"
                heroTitleSuffix="Certification"
                heroSubtitle="Get FPO Mark Certification for Fruit & Vegetable Products"
                heroDescription="Ensure your processed fruit and vegetable products meet government quality standards with FPO Mark Certification. From documentation to approval, our experts simplify the process so your food business stays compliant and trusted. Apply for FPO Certification with Expert Assistance Today."
                whatsIncludedList={[
                    "FSSAI License Alignment",
                    "Hygiene & Safety Audit Prep",
                    "FoSCoS Portal Application Filing",
                    "NABL Lab Product Testing",
                    "Labeling & Packaging Audit",
                    "Export Readiness Consultation"
                ]}
                stats={[
                    { count: "45 Days", label: "Certification Time", icon: <CheckCircle size={20} /> },
                    { count: "Mandatory", label: "For Processed Food", icon: <Apple size={20} /> },
                    { count: "Global", label: "Export Ready", icon: <ShieldCheck size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<FPOMarkOverview />}
                advantages={<FPOMarkAdvantages />}
                eligibility={<FPOMarkEligibility />}
                documents={<FPOMarkDocuments />}
                process={<FPOMarkProcess />}
                features={<FPOMarkFeatures />}
                postCompliance={<FPOMarkCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FPOMarkCertification;

