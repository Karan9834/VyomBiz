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
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiLicenseOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Legal Mandate
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FSSAI License and Registration in India –  <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Food Safety and Standards Authority of India (FSSAI) license is mandatory for operating a food business in India. Any person or entity engaged in this industry -manufacturing, processing, distribution and sale of food products - must obtain FSSAI license registration, enabling them to operate their business legally.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The FSSAI food license ensures that business owners and operators follow safety and quality compliances, which helps keep public health under check and promotes consumer confidence in the products sold. FSSAI License registration establishes trustworthiness and boosts business credibility to meet legal regulations and standards.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            <strong className="text-[#072b47]">Who are Food Business Operators (FBOs)?</strong><br />
                            Food Business Operators (FBOs) are individuals or organizations engaged in producing, processing, distributing, or selling food products in India. FBOs, including small grocery stores, wholesale distributors, restaurants, food processing plants, bakeries, and supermarkets, are mandated to get an FSSAI license.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FBOs are categorized based on:<br />
                            1. Type of food products<br />
                            2. The scale of business operations
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        FSSAI License Benefits
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Food Business Operators (FBOs) that obtain FSSAI food licenses are exposed to multiple benefits. Some of the FSSAI license benefits include the following:
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1579621970588-a35d487ce5b6?auto=format&fit=crop&q=80"
                            alt="FSSAI License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Compliance", desc: "Manufacturers, processors, distributors, and food product sellers who obtain the mandatory FSSAI licenses follow compulsory compliance to operate their business legally in India. An FSSAI food license assures that the company has fulfilled its obligations in line with all Indian food and safety laws. It helps them avoid legal penalties arising out of non-compliance." },
                        { title: "Consumer Trust", desc: "Businesses with a valid FSSAI food license can display their certificate, which helps them build consumer trust. Displaying the certificate also reflects the business's confidence in following safety standards mandated by the Food Safety and Standards Authority of India. It boosts consumer loyalty and strengthens their trust in the business." },
                        { title: "Market Expansion", desc: "Every business aims to expand its operations, and FSSAI is a gateway to many such opportunities. The FSSAI license plays a pivotal role in helping businesses in the food industry venture into new markets and capitalize on opportunities. Businesses with a valid FSSAI certification can explore sectors like retail and online platforms." },
                        { title: "Business Credibility", desc: "A food business with a valid FSSAI license earns credibility from customers. Such businesses are trusted by consumers over companies with no license. Not just customers, but such firms also gain potential investors' and partners' trust and credibility by prioritizing safety and regulatory compliance." },
                        { title: "Improved Hygiene Standards", desc: "Obtaining an FSSAI food license requires the applicant businesses to follow stringent safety standards and measures. The process allows companies to focus on maintaining high hygiene quality standards, which in turn reduces the risk of contamination and prevents foodborne diseases. Overall, the FSSAI license helps businesses improve their product quality." },
                        { title: "Government Support", desc: "A business that has obtained an FSSAI food license becomes eligible for various central and state government schemes, subsidies, and other support initiatives. Government support plays an important role in improving the business and expanding operations, especially for companies seeking financial support." }
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
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility Criteria for FSSAI License in India
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    According to the Ministry of Health and Family Welfare, Government of India, eligibility criteria to apply for an FSSAI license include the following:
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li>
                            <span className="font-semibold text-[#072b47]">Annual Turnover: </span>
                            State License – INR 12 lakhs to INR 20 crore, Central License – Above INR 20 crore
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Production Capacity: </span>
                            State License – Up to 2MT/day (food), 50,000 litres/day (dairy), Central License – Over 2MT/day (food), 50,000 litres/day (dairy)
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Business Type: </span>
                            State License – Single state operations, Central License – E-commerce, import-export, multi-state operations
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Area of Operation: </span>
                            State License – Within a single state, Central License – For multiple states
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Storage Capacity: </span>
                            State License – Up to 50,000 metric tons, Central License – Above 50,000 metric tons
                        </li>
                    </ul>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6 mt-12">
                    Checklist - Who all needs an FSSAI License?
                </h2>
                <div className="mb-10">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Food manufacturers, processors, importers, exporters, distributors, wholesalers</li>
                        <li>Food retailers, including grocery stores and supermarkets</li>
                        <li>Food caterers, restaurants, clubs, dhabas, hawkers, marketers</li>
                        <li>Food transporters & logistics providers</li>
                        <li>Food packaging & labelling units</li>
                        <li>Food storage facilities, service providers and online food businesses</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiLicenseDocuments = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for FSSAI License and Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    It’s important for FBOs to understand FSSAI license requirements. The documents required to obtain an FSSAI license are:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Form IX is required for basic and state registration and nomination in state registration.</li>
                        <li>Address Proof to verify the business address.</li>
                        <li>Government-issued ID Card as Identity proof for the applicant.</li>
                        <li>Form A for Declaration for basic registration declaration.</li>
                        <li>NOC from Local Municipality as No Objection Certificate</li>
                        <li>Detailed Layout Plan with premise details (state registration).</li>
                        <li>Raw Material Source for information on the source of raw materials.</li>
                        <li>Form B as the application/renewal form for state and central registrations.</li>
                        <li>Food Safety Management Plan to outline the food safety procedures (central registration).</li>
                        <li>Partnership Deed/Self-Declaration as proof of business structure (state registration).</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiLicenseProcess = () => {
    const steps = [
        { step: "01", title: "Application Filing", desc: "Filing online FSSAI food license application through Form A or Form B via the FoSCoS portal or submitting Form A or Form B to the Food and Safety Department." },
        { step: "02", title: "Application Submission", desc: "Ensure that the application submitted has the required documents attached." },
        { step: "03", title: "Verification Process", desc: "Upon submission, the application undergoes a rigorous verification process, determining its approval or rejection. In case of rejection, applicants are duly informed by the authorities." },
        { step: "04", title: "Inspection", desc: "As part of the verification process, a designated FSSAI official conducts a comprehensive inspection of the food premises to ensure compliance with food safety standards." },
        { step: "05", title: "License Issuance", desc: "Post verification, issuance of the FSSAI registration certificate and registration number." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step FSSAI License Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        FSSAI license process has to be followed by all Food Business Operators (FBOs) to get FSSAI certification. This is how to get FSSAI food license:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
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
        { title: "Mandatory Compliance", desc: "Mandatory for food-related businesses, the FSSAI food license ensures compliance with food safety regulations." },
        { title: "Standard Validation", desc: "FSSAI certification validates the compliance of food products with safety and hygiene standards set by the FSSAI." },
        { title: "Consumer Confidence", desc: "It helps boost consumer confidence by validating the adherence to quality standards and food safety guidelines." },
        { title: "Credibility", desc: "It enhances the credibility of food businesses, helping them attract more customers and expand opportunities." },
        { title: "Uniform Standards", desc: "It facilitates maintaining uniform food safety standards across all the states in India." },
        { title: "Labelling Compliance", desc: "It requires businesses to label their food products correctly, including ingredients, nutritional information, and expiry dates." },
        { title: "Safety Audits", desc: "It mandates food safety audits at regular intervals to comply with FSSAI guidelines." },
        { title: "Penalty Avoidance", desc: "It helps businesses avoid penalties and fines for non-compliance with food safety compliances." },
        { title: "Multiple Categories", desc: "It provides different license categories depending on the business size - Basic, State, and Central licenses." },
        { title: "Timely Renewal", desc: "It mandates timely renewal to ensure businesses maintain compliance and avoid legal issues." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of FSSAI License
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        FSSAI license ensures food businesses comply with safety standards, promoting public health and consumer trust.
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

const FssaiLicenseCompliance = () => {
    const compliance = [
        { title: "Annual Returns Submission", desc: "Compliance with submission of annual returns via Form D1 to FSSAI by the end of May 31st each year to ensure meeting regulatory requirements and avoid penalties." },
        { title: "Record Keeping", desc: "To ensure traceability, comprehensive records of food procurement, production, and sales must be maintained. This is a mandatory post-registration requirement in accordance with regulations." },
        { title: "Food Safety Audits", desc: "Conducting internal audits at regular intervals is a must to identify and address potential food safety risks and help maintain compliance." },
        { title: "Hygiene Maintenance", desc: "Businesses must ensure they maintain high hygiene standards in all their food handling areas as a part of their mandatory post-registration compliance with FSSAI's safety and cleanliness requirements." },
        { title: "Food Labelling Compliance", desc: "Businesses must ensure compliance with food labelling according to FSSAI guidelines. This includes labelling ingredients correctly, sharing nutritional details, and clearly displaying expiry dates." },
        { title: "License Renewal", desc: "Businesses must remember to renew their FSSAI food license before it reaches its expiration date, which varies between 1 and 5 years, depending on the business category." },
        { title: "Staff Training", desc: "Businesses must regularly train their staff on food safety protocols to meet FSSAI standards and best business practices as part of mandatory compliance requirements." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Post Registration Compliance for FSSAI License
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Once the FSSAI license is obtained, businesses must comply with different post-registration compliances listed below:
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
                heroTitleSuffix="& Registration"
                heroSubtitle="Ensure Food Safety and Legal Compliance"
                heroDescription="A Food Safety and Standards Authority of India (FSSAI) license is mandatory for all food business operators. We help you obtain your license quickly and efficiently, ensuring your business meets all regulatory standards."
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

            <TrustedBrands />
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
