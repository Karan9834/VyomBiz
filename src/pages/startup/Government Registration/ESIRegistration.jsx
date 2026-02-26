import React from "react";
import { Building2, ShieldCheck, CheckCircle2, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ESIOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Social Security
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ESI Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Employees' State Insurance Act, 1948 was enacted by the legislature as an integrated need-based social insurance scheme. ESIC stands for Employee State Insurance Corporation which is an autonomous body created by the Ministry of Labor and Employment that governs and regulates the Employee State Insurance (ESI) in India.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Employee State Insurance is a self-financing social security scheme initiated for the benefits of Indian workers providing them with necessary benefits such as medical facilities, monetary allowances, and sickness support directly funded by mutual contributions.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Applicability
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Any non-seasonal factory and company having more than 10 employees (in some states it is 20) with a maximum salary limit of Rs. 21,000/- must mandatorily register itself with the ESIC. The employer needs to contribute an amount of 3.25% of the total monthly salary while the employee contributes 0.75%.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Employee Wellbeing
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of ESI Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The ESI scheme provides comprehensive social security nets protecting workers and their dependents from severe financial instability.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
                            alt="ESI Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Sickness Benefits", desc: "Sickness benefits are provided to the employee at the rate of 70% of his salary in case sickness continues exceeding 91 certified days." },
                        { title: "Medical Support", desc: "Full medical care without expenditure ceilings is strictly provided to all registered persons and their immediate families from day one." },
                        { title: "Maternity Benefits", desc: "Paid maternity benefits are provided for three months (extendable) at full wage rate subject to prior contribution history." },
                        { title: "Permanent Disablement", desc: "In cases involving permanent disablement, an explicit 90% of the employee's standard salary is continuously provided as a monthly payment." },
                        { title: "Deceased & Funeral Aid", desc: "90% of the salary goes safely to dependents if death occurs in active employment. Further, an INR 10,000 funeral expense is also granted." },
                        { title: "Unemployment Benefits", desc: "Insured persons active over 3 years explicitly receive up to 50% wage coverage for one year under the Rajiv Gandhi Shramik Kalyan Yojana during factory closures." }
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
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Applicability and Coverage of ESI
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Registration coverage legally applies scaling past exact employee thresholds directly encompassing widespread commercial sectors securely.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Eligible Entity Sectors
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                        <li>Newspaper Establishments</li>
                        <li>Private Educational Institutes</li>
                        <li>Motor Transportation Services</li>
                        <li>Cinemas and Theaters</li>
                        <li>Restaurants and Hospitality</li>
                        <li>Registered Shops & Medium Outlets</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Core Applicability Mandates
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li><span className="font-semibold text-[#072b47]">Minimum Employee Bound:</span> Entities employing 10 or more employees during the previous year must acquire ESIC Registration mandatorily (20 employees in few localized states).</li>
                        <li><span className="font-semibold text-[#072b47]">Wage Caps:</span> Insurance is deducted exclusively for employees earning monthly incomes up to INR 21,000 (Basic + DA). Those dropping below INR 176 daily are exempted from paying contributions.</li>
                        <li><span className="font-semibold text-[#072b47]">Time Bound Penalty limits:</span> An entity practically needs to take an ESI registration certificate securely within exactly 15 days of crossing active applicability boundaries avoiding strict penalties.</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Assess Current Employee Wages
                    </button>
                </div>
            </div>
        </section>
    );
};

const ESIDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for ESI Registration in India
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Since the primary procedure is fully executed online, only validated digital document arrays are essentially required for explicit ESI filings:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Company Level Documents</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>Primary Registration (Factories/Shop Act).</li>
                            <li>Company Incorporation/Partnership Deeds.</li>
                            <li>Memorandum / Articles of Association.</li>
                            <li>Board Resolution securing ESI executions.</li>
                            <li>Electricity Bill / Lease Agreements.</li>
                            <li>Entity PAN and Cancelled Cheques.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-3">Employee Level Data</h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100 h-full">
                            <li>List of all active Directors/Shareholders.</li>
                            <li>Exact compensation mappings of entire staff.</li>
                            <li>Monthly attendance calculation records.</li>
                            <li>Employee KYC (Nominees, PAN, Bank Details).</li>
                            <li>Existing old ESI Numbers (if shifting employers).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ESIProcessSection = () => {
    const steps = [
        {
            title: "ESIC Portal Sign up",
            desc: "Register securely clicking the 'Sign Up' option strictly under Employer Logins executing core organizational setups."
        },
        {
            title: "Access Credentials Delivery",
            desc: "After submitting primary IDs, employers systematically receive verification emails delivering internal username and password protocols."
        },
        {
            title: "Filing Employer Form-1",
            desc: "Log directly into the central hub unlocking 'Employer Registration - Form 1', pushing unit structures, addresses, and comprehensive structural employee lists."
        },
        {
            title: "Advance Contribution Payments",
            desc: "Following structural data injection, the portal mandates executing 'Payment of Advance Contribution' securely covering explicitly calculated capacities extending 6 months."
        },
        {
            title: "Automated Registration Letter",
            desc: "On successfully executing systemic transactions, a final Registration Letter (C-11) carrying the explicitly tracked 17-digit identification code is digitally dispatched covering compliance."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure for Applying ESI Registrations
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Executing standard portal tracking procedures correctly aligns organizational capacity directly protecting operational assets effectively:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                            alt="ESI Registration Process"
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
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Let Experts Process Your Filing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ESIFeaturesSection = () => {
    const features = [
        {
            title: "Post-Registration Return Compliances",
            desc: "Successfully actively managing bi-annual returns securing attendance records mitigating default penalties aggressively."
        },
        {
            title: "Seamless Monthly Deductions",
            desc: "Helping structure backend payroll calculating accurate 0.75% (employee) and 3.25% (employer) scales automatically executing deposits."
        },
        {
            title: "Evading Penalty Clauses",
            desc: "Failure to acquire IDs instantly summons INR 10,000 baseline fines. Late inputs strictly draw heavy 12% per annum damages effectively handled by rapid consulting."
        },
        {
            title: "Complete Client Traceability",
            desc: "Clients continuously track systemic progress via dedicated portal engagement bypassing traditional black-box operations completely."
        },
        {
            title: "100,000+ Worldwide Footprints",
            desc: "Leveraging vast institutional experiences dealing precisely executing massive workforce filings preventing processing rejections rapidly."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For ESI Integration
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Scale efficiently bypassing massive regulatory delays backed entirely by explicit legal and structural HR compliance frameworks securely.
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

const ESIRegistration = () => {
    const faqs = [
        {
            question: "Is it compulsory for the units to obtain the ESIC Certificate?",
            answer: "Yes, every entity systematically crossing designated thresholds legally must get standard certification accurately applying online directly tracking ESIC jurisdictions closely."
        },
        {
            question: "What exactly are the 'Wages' calculating ESI setups?",
            answer: "Basic Wages dynamically considered uniquely encompass core Basic Pay coupled with Dearness Allowances specifically excluding random overtime execution payouts practically."
        },
        {
            question: "Who is formally exempt from ESIC payroll structures?",
            answer: "Covered employees whose monthly wages aggressively exceed INR 21,000 natively lose structural integration. Additionally, workers safely grabbing less than INR 176 daily are waived employee-side contributions strictly."
        },
        {
            question: "Are there specific compliances executing after receiving codes?",
            answer: "Yes, legally adhering frameworks strictly expect mandatory filing half-yearly returns securely backed by transparent daily/monthly worker operational ledgers and instant structural adjustments."
        },
        {
            question: "What regulates the internal ESI operations system scale?",
            answer: "A massive central group titled 'Employees State Insurance Corporation' practically coordinates structural funds directly linking governments, corporate representations, alongside national medical protocols precisely."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ESI Registration"
                heroTitleSuffix="Online Process"
                heroSubtitle="Document Setup & Compliance Guide"
                heroDescription="Completely secure your ESIC setups seamlessly capturing form processing online. Gain the explicit 17-digit registration letter efficiently evading massive compliance penalties and structural defaults successfully."
                whatsIncludedList={[
                    "Form-1 Filing Management",
                    "Payroll Compliance Checks",
                    "Six Months Advance Support",
                    "Free Post-Registration Audit"
                ]}
                stats={[
                    { count: "1 Lakh+", label: "Clients", icon: <Users size={20} /> },
                    { count: "100%", label: "Digital", icon: <CheckCircle2 size={20} /> },
                    { count: "Centralized", label: "ESIC", icon: <ShieldCheck size={20} /> }
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
                title="Frequently Asked Questions"
                subtitle="Address core foundational gaps regarding statutory deductions."
                faqs={faqs}
            />
        </div>
    );
};

export default ESIRegistration;
