import React from "react";

import { Link } from "react-router-dom";
import { Briefcase, Building2, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Government Registration/msme/benefits.png";
import overview from "../../../assets/Government Registration/msme/overview.png";
import process from "../../../assets/Government Registration/msme/process.jpg";


const MSMEOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Business Foundation
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is MSME Registration?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            MSME (Micro, Small and Medium Enterprises) Registration, also known as Udyam Registration, is a government recognition provided to businesses under the Ministry of Micro, Small and Medium Enterprises.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            This registration helps businesses access financial support, government schemes, easier credit, tax benefits, and protection against delayed payments.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses registered under MSME receive a Udyam Registration Certificate, which officially recognizes them as a Micro, Small, or Medium enterprise.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Through professional assistance from Vyombiz managed by Clink Consultancy Services Private Limited, businesses can complete the registration process accurately while ensuring compliance with government requirements.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="MSME Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const MSMEAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Growth & Incentives
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of MSME Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Registering your business as an MSME provides several financial and operational advantages.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="MSME Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Easier Access to Business Loans", desc: "Banks and financial institutions offer collateral-free loans and lower interest rates to MSMEs under government schemes." },
                        { title: "Protection Against Delayed Payments", desc: "MSME registered businesses receive legal protection against delayed payments from buyers, ensuring improved cash flow." },
                        { title: "Government Subsidies & Schemes", desc: "MSMEs become eligible for multiple government schemes including subsidies, incentives, and financial assistance programs." },
                        { title: "Priority in Government Tenders", desc: "Registered MSMEs receive preference in government tenders and procurement processes, improving business opportunities." },
                        { title: "Tax & Financial Benefits", desc: "MSME registration allows businesses to access various tax rebates, subsidies, and credit support programs." }
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
                        With the right guidance from Vyombiz managed by Clink Consultancy Services Private Limited, businesses can unlock these benefits efficiently.
                    </p>
                </div>
            </div>
        </div>
    );
};

const MSMEEligibility = () => {
    const list = [
        "Startups",
        "Small businesses",
        "Manufacturers",
        "Traders",
        "Service providers",
        "Freelancers and consultants",
        "E-commerce sellers"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Classification of MSMEs in India
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Businesses are classified based on investment in plant & machinery and annual turnover.
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Micro Enterprise:</span> Investment up to ₹1 crore, Turnover up to ₹5 crore
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Small Enterprise:</span> Investment up to ₹10 crore, Turnover up to ₹50 crore
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Medium Enterprise:</span> Investment up to ₹50 crore, Turnover up to ₹250 crore
                        </li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-4">
                        This classification ensures that businesses receive benefits appropriate to their scale and growth stage.
                    </p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Should Apply for MSME Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    MSME registration is suitable for a wide range of businesses, including:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-8">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Any business looking to grow with government support and financial advantages should consider MSME registration.
                </p>

                <div className="mt-8 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Registration
                    </Link>
                </div>
            </div>
        </section>
    );
};

const MSMEDocumentsSection = () => {
    const list = [
        "Aadhaar Card of the business owner",
        "PAN Card of the business or proprietor",
        "Business address details",
        "Bank account details",
        "Business activity information",
        "Investment and turnover details"
    ];
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for MSME Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The registration process requires minimal documentation.
                </p>
                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc ml-6">
                        {list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <p className="text-[17px] text-slate-600 leading-relaxed mt-4">
                    Since the process is primarily Aadhaar-based, documentation requirements are simple and streamlined.
                </p>
            </div>
        </section>
    );
};

const MSMEProcessSection = () => {
    const steps = [
        { title: "Business Information Collection", desc: "Basic details such as business activity, investment, and turnover are collected." },
        { title: "Aadhaar Verification", desc: "The Aadhaar number of the business owner or authorized signatory is verified." },
        { title: "Application Filing", desc: "The MSME application is submitted on the official government portal." },
        { title: "Certificate Generation", desc: "Once the application is approved, the Udyam Registration Certificate is issued." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        MSME Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The MSME registration process is completely online and can be completed in a few steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src={process} alt="MSME Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <div className="border-t border-slate-200"></div>

                        <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                            Experts at Vyombiz managed by Clink Consultancy Services Private Limited ensure the entire process is handled smoothly with minimal effort from the business owner.
                        </p>

                        <div className="mt-8 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Your MSME Registration Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MSMEFeaturesSection = () => {
    const features = [
        { title: "Expert Compliance Support", desc: "Our professionals understand government registration procedures and ensure your application is correctly filed." },
        { title: "Quick Turnaround Time", desc: "We streamline the documentation and submission process to help you get registered faster." },
        { title: "End-to-End Assistance", desc: "From documentation to certificate delivery, every step is handled with expert guidance." },
        { title: "Transparent Process", desc: "Clear communication and professional support ensure a seamless experience." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for MSME Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Choosing the right partner ensures a smooth and error-free registration process. With Vyombiz managed by Clink Consultancy Services Private Limited, businesses receive reliable support to complete MSME registration efficiently.
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                <CheckCircle2 size={20} className="text-yellow-400" />
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const MSMERegistration = () => {
    const faqs = [
        {
            question: "Is an MSME Udyam Certificate mandatory?",
            answer: "While it is not strictly mandatory under civil laws for businesses to hold it, possessing an MSME Udyam Registration securely provides immediate access to overwhelming government subsidies, easy tax incentives, credit facilities and collateral-free bank loans."
        },
        {
            question: "What is the primary difference between Udyog Aadhaar and Udyam Registration?",
            answer: "Udyog Aadhaar was the previous legacy framework. Post-2020, the government replaced it completely with the 'Udyam Registration' portal which is comprehensively unified directly tying PAN and GST databases making enterprise verification instantly automatic."
        },
        {
            question: "Do I need separate registrations if I manufacture goods and offer services?",
            answer: "No, a single Udyam Registration number strictly encapsulates both manufacturing and service-oriented streams for a singular business unit simultaneously via accurate NIC codes mapped during application."
        },
        {
            question: "Does MSME registration expire?",
            answer: "A valid Udyam Registration Certificate stands perpetual. It physically comes embedded with a QR code dynamically projecting ongoing operational legitimacy and never practically expires unless manually cancelled by the proprietor."
        },
        {
            question: "What happens if my business crosses the defined MSME financial investment threshold?",
            answer: "If the enterprise organically scales crossing the upper limits of the 'Medium' division threshold consistently across investment evaluations—it seamlessly gradients upwards losing specific MSME privileges but automatically shifting to regular corporate monitoring."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="MSME Udyam Registration"
                heroTitleSuffix="Online"
                heroSubtitle="Start Your MSME Registration Today"
                heroDescription="Registering as an MSME can unlock multiple growth opportunities, financial benefits, and government support for your business. With the professional assistance of Vyombiz managed by Clink Consultancy Services Private Limited, the registration process becomes quick, compliant, and stress-free. Get started today and give your business the recognition and advantages it deserves."
                whatsIncludedList={[
                    "Hassle-Free End-to-End Application",
                    "Assistance in NIC Code Selection",
                    "Government Scheme Guidance",
                    "Zero Contact Digital Submission"
                ]}
                stats={[
                    { count: "10,000+", label: "Registrations", icon: <ShieldCheck size={20} /> },
                    { count: "98%", label: "Satisfaction", icon: <CheckCircle2 size={20} /> },
                    { count: "10+", label: "Years Exp", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<MSMEOverview />}
                advantages={<MSMEAdvantages />}
                eligibility={<MSMEEligibility />}
                documents={<MSMEDocumentsSection />}
                process={<MSMEProcessSection />}
                features={<MSMEFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about MSME Registration"
                faqs={faqs}
            />
        </div>
    );
};

export default MSMERegistration;

