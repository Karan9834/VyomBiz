import React from "react";
import { Building2, ShieldCheck, CheckCircle2, Handshake } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const RERAOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Real Estate Regulation
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            RERA Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Are you a real estate agent, a developer, a builder, or a local promoter working on real estate projects? If yes, you must secure RERA registration. RERA stands for Real Estate Regulatory Authority, governed under the Real Estate (Regulation and Development) Act, 2016.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The RERA Act implemented at the state level is responsible for the registration of commercial properties/ residential flats (i.e., RERA project registration) and the regulation of sale and purchase transactions of real estate through RERA agent registration.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Objective of RERA Registration
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            RERA registration ensures regulating the real estate properties at the State level. It intends to maintain transparency and greater accountability by reducing the occurrence of fraud and delays during real estate contracts. Ensuring registration boosts market investments by protecting home purchasers' and investors' interests.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                            alt="RERA Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const RERAAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Trust & Transparency
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Obtaining RERA Registration Certificate
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The Real Estate (Regulation and Development) Act ensures multiple consumer protections while providing builders with official credibility.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                            alt="RERA Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Timely Possession", desc: "RERA Registration ensures timely possession of property on the estimated project completion date. Heavy penalties apply upon failure." },
                        { title: "Reduced Fraud", desc: "The certificate ensures the adherence of promoters and agents to strict compliances, extensively reducing fraud or misappropriation." },
                        { title: "Enhanced Trustworthiness", desc: "A valid RERA registration drastically promotes the institutional trustworthiness of promoters and agents amongst public buyers." },
                        { title: "Consumer Protection", desc: "Enables consumers to be protected from fraudulent activities actively promoting transparency and financial accountability in transactions." },
                        { title: "Legal Authorization", desc: "Grants explicit legal mandate to construct, advertise, market, book, and offer plots/apartments strictly covered under the RERA Act." },
                        { title: "Dispute Redressal", desc: "The RERA Act officially sets up an Appellate Tribunal assisting rapid resolutions for appeals directly dealing with property conflicts." }
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

const RERAEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility Criteria for RERA Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Separate standards apply depending on whether registration involves Project Promoters or standalone Real Estate Agents.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Checklist for Project Promoters
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>All private business ventures specifically surpassing 500 square meters or exceeding 8 units/apartments.</li>
                        <li>An individual or entity modifying existing structures/apartments for immediate commercial sale.</li>
                        <li>Any person constructing an independent building intending to sell off allocated compartments.</li>
                        <li>State-level cooperative housing finance societies or primitive cooperative societies handling member buildings.</li>
                        <li>Persons holding power of attorney securing legal possession of land geared towards flat constructions.</li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Checklist for Real Estate Agents
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Individuals above 18 or 19 years of age, dynamically varying based on specific State configurations.</li>
                        <li>Candidates must have cleared the standard Real Estate License Examination assigned by the concerned State.</li>
                        <li>Must have completed mandatory pre-licensing education mapped to local educational benchmarks.</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Project Eligibility
                    </button>
                </div>
            </div>
        </section>
    );
};

const RERADocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Getting RERA Certificate
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Compile the exhaustive list of verification documents required under the Real Estate Act, 2016 for project scrutiny:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Enterprise & Entity Data</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Certificate of Incorporation, Corporate Identification Number (CIN), TAN, Memorandum of Association (MOA), Promoters identification details, and Agent firm bylaws if applicable.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Project Specifics</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Brief details indicating project execution plans, Commencement certificates securely obtained from competent authorities, detailed sanctioned/layout plans, and phase development timelines.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Legal Artifacts</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Proforma of the allotment letter, explicitly defined agreement for sale, structurally approved conveyance deed formats, and signed declarations/affidavits by promoters.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Technical Measurements Data</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Accurate calculations defining the dedicated carpet area of apartments, explicit measurements of integrated garages, alongside official details of primary contractors, architects, and structural engineers linked to the site.</p>
                </div>
            </div>
        </section>
    );
};

const RERAProcessSection = () => {
    const steps = [
        {
            title: "Filing of Registration Form",
            desc: "Every promoter/agent must initiate filing application Form A explicitly to the Real Estate Regulatory Authority governing their state's jurisdiction through online unified portals."
        },
        {
            title: "Submission of Crucial Documents",
            desc: "The applicants are strictly required to upload/submit necessary operational declarations and architectural records alongside the registration application."
        },
        {
            title: "Comply with Verification Conditions",
            desc: "Agents specifically must commit to avoiding unfair trade practices, promising not to engage in unauthorized land allocations or misleading advertisements concerning the proposed layouts."
        },
        {
            title: "Payment of Registration Fees",
            desc: "The applicants are required to subsequently make accurate calculated payments addressing standardized registration fees explicitly guided by state regulation guidelines."
        },
        {
            title: "Grant of Registration Certificate",
            desc: "Upon thorough scrutiny and validation of the application filed, the localized Real Estate Regulatory Authority physically/digitally grants the registration certificate and exclusive tracking number within 30 days."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure to Obtain RERA Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        There is a meticulous legal flow protecting asset validity prior to exposing public sales. Here is the operational step-by-step processing journey:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1541888081600-0220fc5cda85?auto=format&fit=crop&q=80"
                            alt="RERA Registration Process"
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
                                Start Registration Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const RERAFeaturesSection = () => {
    const features = [
        {
            title: "99% Success Rate",
            desc: "Having maintained an elite success rate safely completing RERA registrations online proving industry reliability."
        },
        {
            title: "200+ Experienced Professionals",
            desc: "Integrating a vast network of attorneys and real estate legal experts securing optimal completion across diverse state mandates."
        },
        {
            title: "Flawless Documentation Support",
            desc: "Expertly assisting massive scale architectural documentation compiling mapping intricate multi-state regulatory frameworks without rejection gaps."
        },
        {
            title: "Admissibility Compliance",
            desc: "Safely ensuring compliance with tricky pre-screening admissibility criteria securing zero technical delays before deep scrutiny phases."
        },
        {
            title: "Strong RERA Connections",
            desc: "Holding healthy regulatory engagement smoothing out slow processing channels rapidly targeting instant certification execution."
        },
        {
            title: "Dispute & Renewal Operations",
            desc: "Offering continuous grievance support dealing powerfully with operational disputes and handling time-sensitive licensing renewals."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Trust Us For RERA Compliance
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Execute property setups avoiding litigation loops by securely utilizing dedicated legal professionals driving massive developmental projects.
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

const RERARaegistration = () => {
    const faqs = [
        {
            question: "Is RERA registration mandatory for all builders?",
            answer: "Yes, RERA fundamentally requires all builders/promoters executing developments surpassing 500 square meters or crossing 8 apartments to obtain structural registration explicitly before promoting sales."
        },
        {
            question: "How long does the RERA authority take to grant approval?",
            answer: "Upon filing the correct sets of documents accurately satisfying engineering checks, the Real Estate Regulatory Authority physically/digitally grants certification within exactly 30 processing days."
        },
        {
            question: "Can agents sell property without a RERA number?",
            answer: "No, under severe penalty frameworks real estate agents are strictly barred from facilitating sale mechanics associated with RERA-defined plots without explicitly holding valid agent registration IDs."
        },
        {
            question: "What happens if a project developer defaults on timelines?",
            answer: "Heavy monetary penalties are levied securing investor trust. Recurrent breaches might ultimately result in immediate permit revocation ceasing all construction activities permanently."
        },
        {
            question: "Does RERA apply equivalently across different states?",
            answer: "While the Central RERA Act of 2016 maps out baseline frameworks, distinct state-level authorities deploy specific granular variances accommodating localized development mechanisms dynamically."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="RERA Registration"
                heroTitleSuffix="Services"
                heroSubtitle="Smooth & Hassle-Free Approval Process"
                heroDescription="Ensure your real estate projects explicitly meet regulatory standards securing buyer trust. Provide fast track RERA registration setups across all major Indian states executing flawless legal frameworks."
                whatsIncludedList={[
                    "Complete Project Registration",
                    "Real Estate Agent Setup",
                    "Architectural Filing Strategy",
                    "Strict Dispute Management"
                ]}
                stats={[
                    { count: "99%", label: "Success Rate", icon: <CheckCircle2 size={20} /> },
                    { count: "200+", label: "Legal Experts", icon: <Building2 size={20} /> },
                    { count: "30L+", label: "Hours Saved", icon: <Handshake size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<RERAOverview />}
                advantages={<RERAAdvantages />}
                eligibility={<RERAEligibility />}
                documents={<RERADocumentsSection />}
                process={<RERAProcessSection />}
                features={<RERAFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Resolve common queries concerning property scaling limits."
                faqs={faqs}
            />
        </div>
    );
};

export default RERARaegistration;
