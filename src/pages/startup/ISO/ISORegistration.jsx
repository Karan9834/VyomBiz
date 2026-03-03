import React from "react";
import { Award, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const ISOOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Competence
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            ISO Certification – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            ISO certification is an internationally recognized certification that establishes globally accepted standards for organizations, thereby guiding them toward innovation, operational efficiency, and sustainable business growth securely tracking global market viability explicitly.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The grant of an ISO certificate registration further helps organizations implement structured processes that inherently ensure quality, safety, efficiency, and absolute consistency across their products and services while easily meeting customer expectations and local administrative regulatory requirements perfectly.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Goal of ISO Governance
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Obtaining an ISO certification explicitly demonstrates that a company’s active management system perfectly complies with relevant ISO standard models, massively adding credibility and public trust among active clients, structural stakeholders, and rigorous state regulatory authorities driving expansion.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1550592704-6c76defa99ce?auto=format&fit=crop&q=80"
                            alt="ISO Certification Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISOAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Quality Assurance
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Obtaining ISO Certificate Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The strict adherence to globally aligned structural metrics empowers massive international and domestic operational expansions seamlessly capturing high trust effectively.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                            alt="ISO Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Enhanced Business Efficiency", desc: "Helps streamline internal processes actively adopting standardized procedures and distinctly clear workflows improving core resource utilization." },
                        { title: "Improves Marketability", desc: "Ensures the steady implementation of customer-centric frameworks and the subsequent delivery of high-quality products and services nationwide." },
                        { title: "Global Credibility", desc: "Enables businesses to securely gain structural acceptance widely enhancing global credibility dealing natively with foreign clients/suppliers." },
                        { title: "Improved Product Quality", desc: "Greatly minimizes manufacturing defects and sharply reduces rework safely ensuring consistent quality and continual improvement practices." },
                        { title: "Government Contracts Access", desc: "Considerably improves exact tender eligibility dynamically increasing the active bidding success rate opening absolute doors to high-value government contracts." },
                        { title: "Global Business Expansion", desc: "Makes it drastically easier for native businesses to practically enter international core markets effectively prioritizing certified secure supply chains." }
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

const ISOEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility Criteria for ISO Certificate
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before opting actively for specific certification profiles, entities must rigorously address comprehensive eligibility boundaries effectively ensuring compliance tracking:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Operational Baseline
                        </h3>
                        <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Must hold a clear operational structure fundamentally driving active implementations.</li>
                            <li>Should precisely define processes securely linked to primary and secondary operations exactly.</li>
                            <li>Demonstrate absolute commitment effectively maintaining safety and long-term compliance.</li>
                            <li>Select recognized/accredited registrar bodies specifically executing tracking limits properly.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Qualifying Entities
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                            <li>Private / Public Companies</li>
                            <li>MSMEs and Hot Startups</li>
                            <li>Manufacturing Plants</li>
                            <li>Service Sector Providers</li>
                            <li>NGOs, Trusts & Societies</li>
                            <li>Govt Organizations</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Verify Organizational Eligibility
                    </button>
                </div>
            </div>
        </section>
    );
};

const ISODocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required to Obtain ISO Certificate Online
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To seamlessly process digital applications precisely addressing rigorous international standards, submit the following verified entity records securely:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Foundational Business Verification</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Identity and address proof of the active applicant, exact PAN Card and Voter IDs validating all core directors comprehensively, alongside explicitly mapped recent passport-sized photographs structurally confirming applicant identities.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Premise & Financial Infrastructure</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Formal utility bills or latest electricity structures strictly backing operations, explicit copies of the property sale deeds ensuring primary ownership validations, exact copies of formal rent agreements ideally alongside detailed latest bank statements.</p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">Entity Formative Instruments</h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">Confirmed corporate Certificate of Incorporation efficiently mapped, precise Memorandum and Articles of Association (M&AoA) defining operational bandwidths, effectively paired with any additional operational capacity logs mapping standard alignments securely.</p>
                </div>
            </div>
        </section>
    );
};

const ISOProcessSection = () => {
    const steps = [
        {
            title: "File Online Application",
            desc: "The process fundamentally begins explicitly by filing an online standard application strictly providing basic business layouts to an accredited state ISO certification body natively."
        },
        {
            title: "Submit Required Documentation",
            desc: "The subsequent step actively requires organizations to effectively map and submit all formal documentation strictly governed under the precisely selected ISO structural standard inherently."
        },
        {
            title: "Conduct Deep GAP Analysis",
            desc: "The certification body practically conducts a heavy initial review seamlessly executing detailed GAP analyses precisely assessing the existing structural domains lacking non-compliance limits inherently."
        },
        {
            title: "Prepare Corrective Action Plans",
            desc: "Based rigorously on the exact GAP analysis, the central organization explicitly prepares and dynamically executes precise corrective systematic interventions ideally aligning internal processes."
        },
        {
            title: "Execute On-Premises Audit",
            desc: "The subsequent phase mandates the independent certification body critically executing stringent on-premises surveillance deeply verifying continuous implementation effectiveness and systemic compliance."
        },
        {
            title: "Obtain Certification Registration",
            desc: "Upon successfully clearing rigorous audits precisely closing exact tracking non-conformities effectively, the organization is permanently granted ISO certifications natively subject to later renewals."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Process for Obtaining ISO Certification Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        There is a strict operational workflow maintaining compliance limits and deeply tracking exact organizational implementations seamlessly avoiding defaults securely:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                            alt="ISO Registration Process"
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
                                Start Your Certification Flow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISOFeaturesSection = () => {
    const features = [
        {
            title: "GAP Analysis Expertise",
            desc: "Executing a rigorously detailed GAP evaluation structurally scanning existing process limits securely plotting exact intervention points natively targeting absolute compliance metrics safely."
        },
        {
            title: "Auditing Compliance Readiness",
            desc: "Helping rigorously conduct tight internal tracking executing dedicated management reviews thoroughly identifying absolute non-compliance and tracking continuous fixes actively pre-audit."
        },
        {
            title: "Accredited Body Coordination",
            desc: "We coordinate massively interacting specifically with accredited central certification bodies inherently guaranteeing smooth seamless execution timelines closing explicit observation loops safely."
        },
        {
            title: "10+ Years Compliance Legacy",
            desc: "Carrying a profound decade of successfully executing tight regulatory certifications dealing efficiently with changing standards globally preserving operational integrity completely."
        },
        {
            title: "Renewal & Upgradation Systems",
            desc: "Offering ongoing robust structural support seamlessly integrating annual surveillance audits driving robust continual improvement metrics inherently avoiding lapse disruptions extensively."
        },
        {
            title: "Multiple ISO Mapping",
            desc: "Ensuring deep digital records effectively mapping overlapping ISO schemas systematically protecting traceability safely tracking holistic organizational standards integrally successfully."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Trust Us For ISO Certification
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Scale actively integrating the absolute highest degree of international testing matrices comprehensively mapped locally across rigorous state boundaries explicitly.
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

const ISORegistration = () => {
    const faqs = [
        {
            question: "Who globally governs ISO execution frameworks?",
            answer: "Although independently framed globally securely, within India the structural execution involves rigorous tracking by The Bureau of Indian Standards (BIS) along exactly alongside the National Accreditation Board tracking active limits optimally."
        },
        {
            question: "What exactly constitutes an 'Internal Audit'?",
            answer: "An internal process explicitly conducted inherently by exclusively trained native staff precisely structurally assessing absolute readiness securely prior to exposing systems directly to external certification body scrutiny dynamically."
        },
        {
            question: "Is there a specific entity limit triggering ISO applicability?",
            answer: "No, inherently any entity including proprietorships, partnerships, massive private corporations natively alongside trusts strongly can explicitly trigger targeted quality standard mappings globally executing."
        },
        {
            question: "Can an existing ISO certificate practically be renewed?",
            answer: "Yes, ISO matrices are inherently subject exclusively to continuous surveillance audits routinely demanding absolute structural renewals typically explicitly tracking every completely closed 3-year validation limit successfully."
        },
        {
            question: "How long strictly does the total certification tracking take?",
            answer: "Execution intrinsically spans timelines specifically bound tracking the complete GAP closure capability, typically structurally ranging heavily depending entirely upon the exact scale mapped and compliance speed deployed."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="ISO Certification"
                heroTitleSuffix="Online"
                heroSubtitle="Achieve Global Structural Standards"
                heroDescription="Register structurally for explicit ISO Certification securely capturing complete international credibility effectively backed intrinsically by rigorous quality assurance mapping globally tracking maximum competitive scale dynamically."
                whatsIncludedList={[
                    "Deep GAP Analysis",
                    "Surveillance Audit Prep",
                    "Complete Document Alignment",
                    "Multi-standard Integration"
                ]}
                stats={[
                    { count: "10,000+", label: "Professionals", icon: <CheckCircle2 size={20} /> },
                    { count: "100%", label: "Compliant", icon: <ShieldCheck size={20} /> },
                    { count: "Global", label: "Validity", icon: <Globe size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ISOOverview />}
                advantages={<ISOAdvantages />}
                eligibility={<ISOEligibility />}
                documents={<ISODocumentsSection />}
                process={<ISOProcessSection />}
                features={<ISOFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="FAQs on ISO Certification"
                subtitle="Clarifying global operational mapping boundaries actively."
                faqs={faqs}
            />
        </div>
    );
};

export default ISORegistration;
