import React from "react";

import { Link } from "react-router-dom";
import { Users, ShieldCheck, Briefcase, Calculator } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/Government Registration/epf-registration/benefits.jpg";
import benefits1 from "../../../assets/Government Registration/epf-registration/benefits1.webp";
import epfregistration from "../../../assets/Government Registration/epf-registration/epf-registration.jpeg";
import esiregistration from "../../../assets/Government Registration/epf-registration/esi-registration.png";
import procedure from "../../../assets/Government Registration/epf-registration/procedure.jpeg";

const EPFOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Employee Welfare
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is EPF Registration?
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Employees’ Provident Fund (EPF) is a government-backed social security scheme managed by the Employees’ Provident Fund Organisation (EPFO). It helps employees build long-term savings for retirement while offering financial protection through pension and insurance benefits.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Under the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952, businesses employing 20 or more employees must register for EPF and contribute towards their employees’ provident fund accounts.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            EPF registration ensures that both employers and employees contribute a portion of the salary every month, creating a secure retirement corpus. Through expert guidance from Vyombiz managed by Clink Consultancy Services Private Limited, businesses can complete EPF registration smoothly and avoid regulatory penalties.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={epfregistration}
                            alt="EPF Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const EPFAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Workforce Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of EPF Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        With the support of Vyombiz managed by Clink Consultancy Services Private Limited, companies can implement EPF compliance efficiently without administrative complications.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="EPF Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Financial Security for Employees", desc: "EPF helps employees build a retirement savings fund through monthly contributions from both employer and employee." },
                        { title: "Pension Benefits", desc: "Under the Employee Pension Scheme (EPS), employees receive pension benefits after retirement." },
                        { title: "Employee Insurance Coverage", desc: "The Employees’ Deposit Linked Insurance Scheme (EDLI) offers life insurance benefits to employees registered under EPF." },
                        { title: "Tax Benefits", desc: "EPF contributions qualify for tax deductions under the Income Tax Act, making it beneficial for both employers and employees." },
                        { title: "Improved Employer Credibility", desc: "Businesses that offer statutory employee benefits are viewed as more trustworthy and professional." }
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

const EPFEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs EPF Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    EPF registration is mandatory for certain organizations and beneficial for many others. Businesses that typically require EPF registration include:
                </p>

                <div className="mb-10">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Companies employing 20 or more employees</li>
                        <li>Factories and manufacturing units</li>
                        <li>Private limited companies and LLPs</li>
                        <li>Partnership firms</li>
                        <li>Startups expanding their workforce</li>
                        <li>Establishments notified by the government</li>
                    </ul>
                </div>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Even organizations with fewer than 20 employees can voluntarily register for EPF to offer employee benefits and enhance workplace credibility.
                </p>

                <div className="mt-12 text-center">
                    <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Assess Organization Compliance
                    </Link>
                </div>
            </div>
        </section>
    );
};

const EPFDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for EPF Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To complete EPF registration, businesses must provide certain documents for verification. Providing accurate documentation helps ensure a smooth and faster EPF registration process.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Business Documents</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                            <li>Certificate of Incorporation / Partnership Deed</li>
                            <li>PAN card of the business entity</li>
                            <li>GST registration certificate (if applicable)</li>
                            <li>Address proof of the business establishment</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Director / Partner Details</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                            <li>PAN and Aadhaar of directors or partners</li>
                            <li>Address proof</li>
                            <li>Contact details</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Employee Information</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                            <li>Employee details and salary structure</li>
                            <li>Date of joining</li>
                            <li>Identification details of employees</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
                    <h3 className="text-2xl font-semibold text-[#072b47] mb-4">EPF Contribution Structure</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                        EPF contributions are shared between the employer and employee. Typically, the contribution structure includes:
                    </p>
                    <ul className="space-y-2 mb-4 ml-4 list-disc text-[17px] text-slate-600 leading-relaxed">
                        <li>12% of employee basic salary contributed by the employee</li>
                        <li>12% contributed by the employer</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Out of the employer’s contribution, a portion is allocated to the Employee Pension Scheme (EPS) and the remaining amount to the provident fund. Proper management of these contributions is crucial for compliance, and businesses often rely on expert support from Vyombiz managed by Clink Consultancy Services Private Limited to manage the process effectively.
                    </p>
                </div>
            </div>
        </section>
    );
};

const EPFProcessSection = () => {
    const steps = [
        { title: "Employer Registration on the EPFO Portal", desc: "The business must first create an employer account on the EPFO Unified Portal." },
        { title: "Application Submission", desc: "The employer submits the EPF registration application along with business and employee details." },
        { title: "Document Verification", desc: "Authorities verify the submitted documents and business information." },
        { title: "Generation of Establishment Code", desc: "Once verified, the EPFO issues an Establishment Identification Number, allowing the employer to start EPF contributions." },
        { title: "Activation of Employee Accounts", desc: "Employees are enrolled under the EPF system and assigned their Universal Account Numbers (UAN)." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step EPF Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The EPF registration process involves several important steps to ensure proper compliance with EPFO regulations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={procedure}
                            alt="EPF Registration Process"
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
                        <p className="text-[17px] text-slate-600 leading-relaxed mt-6">
                            Experts from Vyombiz managed by Clink Consultancy Services Private Limited ensure that each step is handled correctly, reducing delays and compliance risks.
                        </p>
                        <div className="mt-8 text-center">
                            <Link to="/general-info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Employer PF Registration
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const EPFFeaturesSection = () => {
    const features = [
        { title: "Expert compliance professionals", desc: "Navigating EPF regulations precisely to ensure total compliance." },
        { title: "End-to-end registration assistance", desc: "Support from documenting details to final portal approval." },
        { title: "Fast and hassle-free documentation", desc: "Streamlining all required paperwork for quicker setup." },
        { title: "Transparent service process", desc: "Clear communication with no hidden challenges." },
        { title: "Ongoing compliance support", desc: "Continuous help maintaining contribution requirements safely." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 bg-[#f8fafc] p-8 rounded-2xl border border-slate-200">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6">
                        Common Compliance Requirements After EPF Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-4">
                        After completing registration, businesses must maintain regular compliance with EPFO regulations. Proper compliance helps businesses avoid penalties and maintain a smooth employer-employee relationship. These include:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Monthly EPF contributions</li>
                        <li>Filing of EPF returns</li>
                        <li>Employee UAN management</li>
                        <li>Salary and contribution record maintenance</li>
                        <li>Timely compliance updates as per government regulations</li>
                    </ul>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for EPF Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Handling EPF registration and compliance internally can be complex, especially for growing businesses. Professional support ensures accuracy and regulatory compliance. With the right guidance, your company can complete EPF registration quickly while ensuring your employees receive the benefits they deserve.
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
            </div>
        </section>
    );
};

const EPFRegistration = () => {
    const faqs = [
        {
            question: "Is EPF Registration in India mandatory?",
            answer: "Yes, EPF registration in India is strictly mandatory for employers who legally maintain an active operational strength exceeding 20+ employees. Avoiding registration pulls severe financial penalties."
        },
        {
            question: "What is the penalty for not registering?",
            answer: "Delays attract penal charges scaling dynamically: 5% (up to 2 months delay), 10% (2-4 months delay), 15% (4-6 months delay), and 25% (over 6 months delay) explicitly applied per annum."
        },
        {
            question: "Are allowances like House Rent and Travel included while calculating PF?",
            answer: "No, extra allowances such as Food Allowance, Travel Allowance, House Rent Allowance, Bonus, and Overtime are definitively excluded from the standard baseline calculating PF provisions."
        },
        {
            question: "Do I need to constantly renew the EPF Certificate?",
            answer: "No, there is generally no need to structurally renew the registration certificate as it intrinsically comes with lifetime operational validity once accurately established on USSP schemas."
        },
        {
            question: "Who is excluded from the PF Scheme?",
            answer: "Individuals explicitly excluded encompass temporary interns/apprentices, retired employees, Non-Resident Indians, and individuals strictly working abroad without local payroll execution."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="EPF Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Secure Your Employees’ Future. Stay Legally Compliant."
                heroDescription="EPF Registration is mandatory for businesses that employ 20 or more employees in India. It enables organizations to provide retirement security, pension benefits, and insurance coverage to their workforce while ensuring compliance with government regulations. With expert assistance from Vyombiz managed by Clink Consultancy Services Private Limited, your EPF registration process becomes simple, quick, and fully compliant—so you can focus on growing your business."
                whatsIncludedList={[
                    "Quick Documentation",
                    "End-to-End Compliance Support",
                    "Dedicated Expert Assistance"
                ]}
                stats={[
                    { count: "5000+", label: "Successful PFs", icon: <ShieldCheck size={20} /> },
                    { count: "1M+", label: "Employees", icon: <Users size={20} /> },
                    { count: "15+ Yrs", label: "Consulting", icon: <Briefcase size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<EPFOverview />}
                advantages={<EPFAdvantages />}
                eligibility={<EPFEligibility />}
                documents={<EPFDocumentsSection />}
                process={<EPFProcessSection />}
                features={<EPFFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Helpful Questions"
                subtitle="Address primary confusions scaling firm level provident fund execution."
                faqs={faqs}
            />
        </div>
    );
};

export default EPFRegistration;

