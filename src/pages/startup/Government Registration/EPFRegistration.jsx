import React from "react";
import { Users, ShieldCheck, Briefcase, Calculator } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const EPFOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Employee Welfare
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            EPF Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            For those who are working as an employee in an organization, the Employee Provident Fund (EPF) is a specialist fund that offers retirement and related benefits. Under The Employees' Provident Funds and Miscellaneous Provisions Act, 1952, organizations that meet certain requirements must register for EPF.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Every employee receives an EPF number and a Universal Account Number (UAN), which are unaffected by changes in employment. EPF registration in India is formally mandatory for employers with 20+ employees to avoid significant fines.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is an EPF?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Indian government founded the EPF in 1951, which later transformed into the current Act of 1952. Maintaining a strong relationship between employer and employee is the fund's primary goal. EPF provides EPS, risk coverage, and a uniform account to meet emergency needs and long-term goals. Both the company and the employee contribute to this retirement savings plan.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Workforce Security
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of EPF Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The Employee Provident Fund scheme brings structured savings security, financial support, and a higher job retention rate among active organizational workforces.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                            alt="EPF Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Risk Reduction", desc: "The provident fund acts as an emergency fund that the employees can utilize during dire needs by accessing their portal online." },
                        { title: "Single UAN Account", desc: "There is one provident fund account for the employee throughout their lifetime which remains the same even if they switch jobs." },
                        { title: "Employee Retention", desc: "Providing provident funds strictly satisfies workers, strengthening their chance of retention. It works as a solid recruitment benefit." },
                        { title: "Savings for Retirement", desc: "These funds act purely as retirement savings. Full withdrawal is restricted under normal conditions securing long term goals safely." },
                        { title: "Pension Benefits", desc: "As per EPF provisions, an equivalent portion (8.33% from the employer side) is directly transferred to their structural pension accounts." },
                        { title: "EDLI Insurance", desc: "All the employees are systematically eligible to receive insurance benefits while actively working via the Employee Deposit Linked Insurance Scheme." }
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
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Applicability & Eligibility for EPF Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Certain rules made by the government determine the exact scope of required compliance for employers and employees:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Employer Applicability
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li><span className="font-semibold text-[#072b47]">Mandatory Requirement:</span> To obtain EPF Registration, an employer must have a minimum of 20 employees.</li>
                        <li><span className="font-semibold text-[#072b47]">Voluntary Apply:</span> It is not strictly necessary for an entity with less than 20 employees, however, they can voluntarily apply.</li>
                        <li><span className="font-semibold text-[#072b47]">Cooperative Societies:</span> A society founded under the Cooperative Society Act must have at least 50 workers to fall under rules.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Definition of Employee
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed mb-3">
                        As per section 2(f), the following individuals form the base count qualifying an entity:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Full-Time Employees</li>
                        <li>Part-Time Employees</li>
                        <li>Work From Home Employees</li>
                        <li>Contractors</li>
                        <li>Temporary Consultants</li>
                        <li>Freelancers (under new Social Security Code)</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Assess Organization Compliance
                    </button>
                </div>
            </div>
        </section>
    );
};

const EPFDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for EPF Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The most important part before the application for EPF Registration is completing the documentation procedure. Ensure all organizational KYC artifacts are systematically arranged:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Mandatory Documents</h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                        <li>PAN Card of Proprietors/Partners/Directors</li>
                        <li>Aadhaar Card of Proprietors/Partners/Directors</li>
                        <li>Business Address Proof (Utility Bills, Rent Agreement)</li>
                        <li>Business Incorporation Certificate</li>
                        <li>Entity's Bank Account Statement or Cancelled Cheque</li>
                        <li>Director's Digital Signature (For Online Approval)</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Optional Entity Specific Documents</h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Trust Deed (for Trusts)</li>
                        <li>MoA and AoA (For Companies)</li>
                        <li>Partnership Deed (For Partnerships/LLPs)</li>
                        <li>Shop and Establishment Registration Certificate or GST setup</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const EPFProcessSection = () => {
    const steps = [
        {
            title: "Visit the EPFO Website",
            desc: "Firstly, visit the official EPFO website and hit the establishment registration button present on the main home page."
        },
        {
            title: "Register on USSP",
            desc: "The Unified Shram Suvidha Portal (USSP) sign-up page will appear. Complete standard instructions to establish a central employer credential."
        },
        {
            title: "Log in & Select Application",
            desc: "Once the account is created on USSP, log in and opt for the registration targeting the 'Employees Provident Fund and Miscellaneous Provision Act, 1952'."
        },
        {
            title: "Fill out the Registration Form",
            desc: "The primary registration form for EPFO will open. Fill in all sections accurately outlining employee counts, business activities, and payroll details."
        },
        {
            title: "Attach DSC",
            desc: "Following manual data entry, securely attach the Class 3 Digital Signature Certificate physically acknowledging structural forms."
        },
        {
            title: "Registration Confirmation",
            desc: "After uploading the DSC, you get an explicit confirmation message visually followed by an official acknowledgement email delivering registration packets."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Employee PF Registration Process for Employers
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        There is a strict online protocol ensuring total transparency between business entities and the Shram Suvidha governance bodies. Here is the operational workflow:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80"
                            alt="EPF Registration Process"
                            className="w-full rounded-lg shadow-sm sticky top-32"
                        />
                    </div>

                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
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
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Employer PF Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const EPFFeaturesSection = () => {
    const features = [
        {
            title: "5000+ Successful Registrations",
            desc: "Providing a proven track record handling dense EPF registrations rapidly managing mid-to-large business volumes across 10+ industries."
        },
        {
            title: "Seamless Payroll Integration",
            desc: "Bridging the generated EPFO codes safely onto external structural systems securing hassle-free automatic deductions continuously."
        },
        {
            title: "Quick Turnaround Time",
            desc: "Expertly handling the document flow reducing procedural waste generating official UAN numbers 5x better/faster than competitor benchmarks."
        },
        {
            title: "UAN Account Management",
            desc: "Assisting enterprises deeply updating KYC artifacts generating secure Universal Account Numbers maintaining accurate individual records safely."
        },
        {
            title: "Compliance Avoidance Penalty",
            desc: "Ensuring applications strictly target the mandated 30-day window evading crippling standard structural penal charges dynamically scaling 5-25%."
        },
        {
            title: "Guidance and Training",
            desc: "Empowering HR boards via dedicated instruction manually training internal teams capturing standard updates properly retaining compliance natively."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For EPF Registration
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Emerging as the most reliable compliance partner simplifying provident fund registrations effectively.
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {index + 1}.
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
                heroSubtitle="Ensure Ultimate Workforce Security"
                heroDescription="Apply for Employees Provident Fund Registration (EPF) with expert support. Streamline EPFO setup, ensure zero regulatory penalties, and seamlessly manage your corporate workforce UANs directly."
                whatsIncludedList={[
                    "End-to-End EPFO Application",
                    "Seamless Pay-Roll Integrations",
                    "UAN Setup & Document Guide",
                    "Immediate Dedicated Expert Support"
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
