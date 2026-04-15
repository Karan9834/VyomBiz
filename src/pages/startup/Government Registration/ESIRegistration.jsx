import React from "react";

import { Link } from "react-router-dom";
import { Building2, ShieldCheck, CheckCircle2, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import overview from "../../../assets/Government Registration/esi-registration/overview.png";
import benefits from "../../../assets/Government Registration/esi-registration/benefits.jpg";
import process from "../../../assets/Government Registration/esi-registration/process.jpeg";


const ESIOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Social Security
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is ESI Registration?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Employee State Insurance (ESI) Registration is a mandatory government registration required for businesses that employ a certain number of workers and meet the prescribed wage limits under the Employee State Insurance Act, 1948.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The scheme provides financial, medical, and insurance benefits to employees in case of sickness, maternity, disability, or employment injury.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Through ESI, employees gain access to healthcare facilities and financial protection, while employers ensure they comply with statutory labor laws.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            At Vyombiz managed by Clink Consultancy Services Private Limited, businesses receive professional assistance to complete ESI registration smoothly, ensuring accurate documentation and timely compliance.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="ESI Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ESIAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Employee Wellbeing
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ESI Registration
                    </h2>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="ESI Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Medical Benefits", desc: "Employees and their families receive access to medical treatment, hospitalization, and healthcare facilities through the ESI network." },
                        { title: "Financial Protection", desc: "The scheme provides cash compensation during sickness, disability, and maternity leave, helping employees maintain financial stability." },
                        { title: "Social Security Coverage", desc: "ESI ensures long-term social security protection for workers against work-related injuries and health issues." },
                        { title: "Legal Compliance", desc: "Registering under ESI helps businesses remain compliant with labor laws and avoid penalties or legal complications." },
                        { title: "Employee Trust & Retention", desc: "Providing ESI benefits increases employee satisfaction and builds trust within the workforce." }
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

const ESIEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs ESI Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    ESI registration becomes mandatory when a business meets specific criteria defined by the government.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Businesses typically required to register include:
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Companies employing 10 or more employees (threshold may vary by state)</li>
                        <li>Employees earning ₹21,000 or less per month</li>
                        <li>Businesses operating in sectors such as manufacturing, services, hospitality, and retail</li>
                        <li>Establishments covered under the ESI Act</li>
                    </ul>
                </div>
                
                <p className="text-[17px] text-slate-600 leading-relaxed font-medium italic mt-8">
                    If your business meets these conditions, registration must be completed within 15 days of becoming eligible.
                </p>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Registration Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

const ESIDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for ESI Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Businesses must submit several documents during the ESI registration process. Common documents include:
                </p>

                <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 mb-8 mt-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>PAN Card of the business entity</li>
                        <li>Certificate of Incorporation / Partnership Deed</li>
                        <li>Address proof of the business establishment</li>
                        <li>Employee details and salary records</li>
                        <li>Bank account details of the company</li>
                        <li>List of directors or partners</li>
                        <li>Digital signature of the authorized signatory</li>
                    </ul>
                </div>
                
                <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                    At Vyombiz managed by Clink Consultancy Services Private Limited, experts guide businesses in preparing and verifying documents to prevent application delays.
                </p>
            </div>
        </section>
    );
};

const ESIProcessSection = () => {
    const steps = [
        { title: "Business Information Submission", desc: "Basic details of the company, employees, and establishment are submitted to initiate the registration." },
        { title: "Document Verification", desc: "Required documents are reviewed and verified to ensure accuracy." },
        { title: "Application Filing", desc: "The ESI registration application is filed on the ESIC portal." },
        { title: "Allotment of ESI Code", desc: "After approval, the employer receives a 17-digit ESI code number, which confirms registration." },
        { title: "Employee Enrollment", desc: "Employees are registered under the ESI scheme and receive their ESI insurance numbers." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step ESI Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The ESI registration process is completed online through the ESIC portal. Professionals at Vyombiz managed by Clink Consultancy Services Private Limited ensure that each step is completed correctly to avoid delays or rejections.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="ESI Registration Process"
                            className="w-full rounded-lg shadow-sm sticky top-32"
                        />
                    </div>

                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    Step {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>

                        <div className="mt-12 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Registration Journey
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ESIFeaturesSection = () => {
    const features = [
        { title: "Expert Guidance", desc: "Expert guidance from compliance professionals" },
        { title: "Smooth Process", desc: "Smooth online registration process" },
        { title: "Error-Free Documentation", desc: "Error-free documentation and filing" },
        { title: "Dedicated Support", desc: "Dedicated support for queries and updates" },
        { title: "Reliable Management", desc: "Reliable compliance management" }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for ESI Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Businesses prefer professional support because government registrations involve strict documentation and compliance procedures. With Vyombiz managed by Clink Consultancy Services Private Limited, our goal is to make government registrations simple, quick, and hassle-free for modern businesses.
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                <ShieldCheck size={20} className="text-yellow-400" />
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

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4">ESI Contribution Structure</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            Under the ESI scheme, both employer and employee contribute a fixed percentage of wages. These contributions are deposited into the ESI fund, which finances healthcare and social benefits for workers.
                        </p>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-4">
                            <li><span className="font-semibold text-[#072b47]">Employer Contribution:</span> 3.25% of employee wages</li>
                            <li><span className="font-semibold text-[#072b47]">Employee Contribution:</span> 0.75% of employee wages</li>
                        </ul>
                    </div>

                    <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4">ESI Compliance for Employers</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                            Once registered, employers must follow ongoing compliance requirements. Failure to comply may lead to penalties, fines, or legal action under the ESI Act.
                        </p>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside mb-4">
                            <li>Monthly ESI contribution payments</li>
                            <li>Maintaining employee wage records</li>
                            <li>Filing periodic returns</li>
                            <li>Updating employee details when required</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ESIRegistration = () => {
    const faqs = [
        {
            question: "Is ESI registration mandatory for all businesses?",
            answer: "No. ESI registration is mandatory only for businesses that meet the employee threshold and wage limit defined under the ESI Act."
        },
        {
            question: "How long does ESI registration take?",
            answer: "The process usually takes 3–7 working days, depending on documentation and verification."
        },
        {
            question: "What is the ESI code number?",
            answer: "It is a 17-digit unique identification number allotted to employers after successful registration under the ESI scheme."
        },
        {
            question: "Can registration be done online?",
            answer: "Yes. The entire ESI registration process is completed online through the ESIC portal."
        },
        {
            question: "What happens if a business fails to register?",
            answer: "Failure to register when eligible may result in penalties, interest charges, and legal consequences."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ESI Registration"
                heroTitleSuffix="Online"
                heroSubtitle="Get Your ESI Registration Done Without the Hassle"
                heroDescription="Provide social security benefits to your employees while staying compliant with government regulations. Our experts simplify the entire ESI registration process so your business can stay focused on growth."
                whatsIncludedList={[
                    "Fast Online Registration",
                    "Expert Documentation Support",
                    "End-to-End Compliance Assistance"
                ]}
                stats={[
                    { count: "Fast", label: "Registration", icon: <CheckCircle2 size={20} /> },
                    { count: "Expert", label: "Support", icon: <Users size={20} /> },
                    { count: "Easy", label: "Compliance", icon: <ShieldCheck size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ESIOverview />}
                advantages={<ESIAdvantages />}
                eligibility={<ESIEligibility />}
                documents={<ESIDocumentsSection />}
                process={<ESIProcessSection />}
                features={<ESIFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions (FAQs)"
                subtitle="Address core foundational gaps regarding statutory deductions."
                faqs={faqs}
            />
        </div>
    );
};

export default ESIRegistration;

