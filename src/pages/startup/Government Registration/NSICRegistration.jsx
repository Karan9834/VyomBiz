import React from "react";
import { Building2, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const NSICOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            MSME Growth
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            NSIC Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Are you a business owner in the MSME ecosystem but not fortunate enough to get the merits of government tenders and financial grants? If so, NSIC registration is mandatory to enjoy the advantages of financial assistance, lower rates for raw materials, technological support, and government tenders.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The National Small Industries Corporation (NSIC) system was established by the government to support Micro, Small, and Medium-Sized Enterprises (MSMEs). As a Mini Ratna Public Sector undertaking founded in 1955, and ISO 9001-2015 certified, the NSIC guarantees high levels of operational quality.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is NSIC?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Overseen by the Ministry of MSME, NSIC plays a crucial role in promoting the growth of MSMEs. Registering allows businesses to make use of programs like Marketing Assistance, Credit Rating, and the Single Point Registration Scheme (SPRS) which promote development and easy loan facilitation.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                            alt="NSIC Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const NSICAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Single Point Registration
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of MSME NSIC Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        There are incredible scaling benefits for the MSME sector after actively obtaining the NSIC Registration securing major central advantages natively.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                            alt="NSIC Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Exclusive Government Tenders", desc: "A total of 358 items are firmly reserved for purchase exclusively from small-scale businesses boosting their active market presence." },
                        { title: "No Tender Allotment Fees", desc: "Eligible MSMEs having NSIC certificates need not pay any fees for tender allotment nor deposit earnest money." },
                        { title: "Assured Annual Orders", desc: "Central Ministries, PSUs, and affiliated departments must officially purchase at least 25% of their annual requirements directly through these MSEs." },
                        { title: "Technological Advancement", desc: "Many dedicated technology exhibitions are strategically actively organized for these MSEs increasing functional skill sets and operations." },
                        { title: "Easy Loans & Credit", desc: "These registered entities heavily get the advantage of priority cheap loans and advances through major banks at lower rates natively." },
                        { title: "Tax & ISO Concessions", desc: "Massive tangible advantages such as reduced direct tax rates, relaxation in explicit fees for ISO Certification, and concessions in electricity bills." }
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

const NSICEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility Criteria for NSIC Registration Online
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before opting for registration, entities must firmly track explicit baseline investments defining eligibility scopes:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Investment Checklists
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li><span className="font-semibold text-[#072b47]">Micro Industries:</span> Invested up to Rs 25 Lakhs in plants & machinery and up to Rs 10 Lakhs in the core service sector.</li>
                        <li><span className="font-semibold text-[#072b47]">Small Industries:</span> Invested up to Rs 5 Crore in plants & machinery and up to Rs 2 Crore in the core service sector.</li>
                        <li><span className="font-semibold text-[#072b47]">Udyam Validated:</span> All applying micro/small industries must actively hold confirmed Udyam Registration beforehand.</li>
                        <li><span className="font-semibold text-[#072b47]">1 Year Vintage:</span> Ideally, entities should have completed 1 year of business operations successfully mapping accounts.</li>
                    </ul>
                </div>

                <div className="p-6 bg-[#fffdeb] border-l-4 border-[#f59e0b] rounded-lg">
                    <p className="text-[17px] font-medium text-[#78350f]">
                        <strong>Provisional Alert:</strong> Entities that have not strictly completed one year of business operations can still radically benefit from the NSIC Single Point Registration Scheme receiving a provisional operating certificate.
                    </p>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Verify MSME Udyam Eligibility
                    </button>
                </div>
            </div>
        </section>
    );
};

const NSICDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for NSIC Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Before applying for the NSIC Registration certificate, ensure all rigorous documentation formats are structurally mapped covering the specific entity layout (PVT LTD, Partnership, LLPs, etc):
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Foundational Business Identity</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">PAN Card explicitly issued, confirmed UAM/Udyam Registration numbers, valid premises ownership records/rentals, and latest entity electricity bills defining operational scopes.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Operational Hardware Proof</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Detailed layout of Plant and Machinery installations mapping serials, alongside explicit lists outlining Quality Control Equipment and Testing Facilities natively available in the factory.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Financial Stability Records</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Audited Balance Sheets stretching the last 3 Years, Profit and Loss Accounts mapped to exactly 3 Years, Schedule of Fixed Assets & Revenue, including a CA-signed statement showcasing operational capacity natively secured.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Entity Formative Acts</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Applicable MOA/AOA, formal Partnership Deeds, LLP Incorporation strings, Trust Deeds, or Karta Authorization depending strictly on the foundational registration profile.</p>
                </div>
            </div>
        </section>
    );
};

const NSICProcessSection = () => {
    const steps = [
        {
            title: "Portal Login & Sign-up",
            desc: "The applicant manually engages the concerned central NSIC registration portal directly applying the official government access routes."
        },
        {
            title: "Online Application Entry",
            desc: "Following secure sign-in, rigorously fill out the core registration form attaching accurate Udyam IDs unlocking Single Point details explicitly mapped."
        },
        {
            title: "Vital Documentation Upload",
            desc: "The online structural process requires massive arrays of operational financials and mechanical plant data documents cleanly uploaded safely preserving quality."
        },
        {
            title: "Application Fee Transfer",
            desc: "Finalize accurate government fee transactions determined strictly by the annual business turnover slabs natively applied to executing portals."
        },
        {
            title: "Deep Scrutiny & Verification",
            desc: "Internal state authorities critically scan the technical applications inspecting operational capacities dynamically matching plant data rigorously offline/online."
        },
        {
            title: "Grant of NSIC Registration",
            desc: "Upon confirming functional viability, the explicit NSIC certificate mapped directly for 2 full years is immediately dispatched activating SPRS schemas successfully."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for NSIC Registration Online?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        There is a meticulous workflow securing accurate registration capabilities maximizing technical output efficiently. Here are the procedural execution limits:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="NSIC Registration Process"
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
                                Expedite Filing Processes Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const NSICFeaturesSection = () => {
    const features = [
        {
            title: "Secured Certificates for 5000+ Entrepreneurs",
            desc: "Demonstrating profound capability actively driving heavy registration limits ensuring minimum operational hassle executing dense financial documents safely."
        },
        {
            title: "ISO Certification Aid",
            desc: "Helping micro businesses bypass rigorous structural testing actively subsidizing ISO applications rapidly natively scaling the entities correctly."
        },
        {
            title: "Saved 30,00,000+ Business Hours",
            desc: "Preventing common applicant faults dramatically bridging portal operations keeping turnaround times down systematically tracking all applications optimally."
        },
        {
            title: "Expertise Spanning 10+ Years",
            desc: "Reflecting profound capabilities dynamically adapting historical MSME law shifts explicitly preserving accurate execution records consistently."
        },
        {
            title: "Access to Tender Schemes",
            desc: "Advising heavily on leveraging SPRS policies ensuring applications powerfully target massive government PSUs avoiding earnest money safely dropping operational limits."
        },
        {
            title: "Client-Centered Scrutiny",
            desc: "Proactively deploying network arrays containing 500+ subject matter experts directly vetting CA-signed financial statements optimally bypassing hard rejections instantly."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why opt for Us for the NSIC Certificate
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Emerging securely as a highly competent compliance architecture executing high-stakes MSME government interfaces efficiently.
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

const NSICRegistration = () => {
    const faqs = [
        {
            question: "Is NSIC registration and MSME registration the same?",
            answer: "No, MSME (Udyam) Registration primarily recognizes entities under the central act functionally setting baseline scale, whereas NSIC registration is a subsequent explicit commercial scheme (SPRS) targeting structural government tenders inherently omitting earnest deposits."
        },
        {
            question: "What is the exact validity of the NSIC Certificate?",
            answer: "The authorized permanent NSIC certificate explicitly maintains operating validity for exactly 2 years securely, obligating firms to process timely renewals tracking new financials systematically validating plant operations."
        },
        {
            question: "Do startup entities qualify without 1 year of financial records?",
            answer: "Yes, micro and small industries incapable of deploying 1 year of formal revenue audits can firmly apply to successfully obtain a structural Provisional NSIC registration certificate accessing schemes dynamically."
        },
        {
            question: "What are the common government fees for NSIC?",
            answer: "Registration fees natively match turnover rates scaling from Rs 3,000 to Rs 5,000 per crore. Additionally, physical inspection mandates strictly add Rs 2,000-3,000 depending primarily on the factory tier capacities comprehensively mapped."
        },
        {
            question: "How long is the entire NSIC registration process timeline?",
            answer: "Upon filing rigorous financial profiles securely backed with plant declarations, verifications track through massive scrutiny systems intrinsically delivering issued certificates across 30 applying to 45 days efficiently."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="NSIC Registration"
                heroTitleSuffix="Online"
                heroSubtitle="Unlock Government Tenders & Schemes"
                heroDescription="Ensure ultimate growth securely obtaining MSME NSIC Certification actively avoiding earnest money deposits, accessing PSUs purchases effectively, and maximizing scale across Indian markets powerfully backed with single point registration."
                whatsIncludedList={[
                    "Complete SPRS Application",
                    "Udyam Compliance Link",
                    "CA Signed Finance Guide",
                    "Plant Capacity Review"
                ]}
                stats={[
                    { count: "5000+", label: "Clients", icon: <CheckCircle2 size={20} /> },
                    { count: "10+ Yrs", label: "Expertise", icon: <TrendingUp size={20} /> },
                    { count: "358+", label: "Reserved Tenders", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<NSICOverview />}
                advantages={<NSICAdvantages />}
                eligibility={<NSICEligibility />}
                documents={<NSICDocumentsSection />}
                process={<NSICProcessSection />}
                features={<NSICFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on NSIC Registration"
                subtitle="Dismantling crucial operational boundaries effectively separating MSME domains."
                faqs={faqs}
            />
        </div>
    );
};

export default NSICRegistration;
