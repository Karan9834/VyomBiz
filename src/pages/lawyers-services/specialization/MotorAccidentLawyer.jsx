import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, CheckCircle2, FileText, Scale, AlertCircle, Shield, Gavel, Truck, MessageSquare, Briefcase, Users, Phone } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import CustomContactForm from "../../../components/common/CustomContactForm.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
   Matching the 5-tab structure requested earlier, now in scroll-format
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "situations", label: "Situations" },
    { id: "compensation", label: "Compensation" },
    { id: "process-docs", label: "Process & Docs" },
    { id: "why-us", label: "Why Us" },
    { id: "faq", label: "FAQs" },
];

/* ─────────────────────────────────────────────────────────
   SHARED TYPOGRAPHY PRIMITIVES (Matching FinanceLawyer design)
───────────────────────────────────────────────────────── */
const SectionHeading = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-[#072b47] mb-5 leading-snug tracking-tight">
        {children}
    </h2>
);

const SubHeading = ({ children }) => (
    <h3 className="text-lg md:text-xl font-semibold text-[#072b47] mt-10 mb-3 leading-snug">
        {children}
    </h3>
);

const BodyText = ({ children }) => (
    <p className="text-[15px] md:text-[16px] text-slate-600 leading-[1.85] mb-4 font-normal">
        {children}
    </p>
);

const BulletList = ({ items }) => (
    <ul className="space-y-2.5 my-4 pl-1">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
                <span className="mt-[6px] shrink-0 w-[6px] h-[6px] rounded-full bg-[#005a9c]" />
                <span className="text-[15px] text-slate-600 leading-[1.8]">{item}</span>
            </li>
        ))}
    </ul>
);

const InfoCard = ({ icon, title, children }) => (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 mb-5">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#e8f1fb] flex items-center justify-center shrink-0">
                <span className="text-yellow-400">{icon}</span>
            </div>
            <h4 className="text-[15px] font-semibold text-[#072b47]">{title}</h4>
        </div>
        <div className="pl-12">{children}</div>
    </div>
);

const Divider = () => (
    <hr className="my-10 border-slate-100" />
);

const SectionLabel = ({ children }) => (
    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-yellow-400 bg-[#e8f1fb] px-3 py-1 rounded-full mb-4">
        {children}
    </span>
);

/* ─────────────────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────────────────── */
const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-3">
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left bg-white hover:bg-slate-50 transition-colors"
            >
                <span className="text-[15px] md:text-[16px] font-semibold text-[#072b47] pr-6 leading-snug">
                    {question}
                </span>
                <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <div className="px-5 md:px-6 pb-5 bg-white border-t border-slate-100">
                    <p className="text-[15px] text-slate-600 leading-[1.85] pt-4">{answer}</p>
                </div>
            )}
        </div>
    );
};

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */
const MotorAccidentLawyer = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const sectionRefs = useRef({});
    const isClickScrolling = useRef(false);
    const clickScrollTimer = useRef(null);

    const setRef = useCallback((id) => (el) => {
        if (el) sectionRefs.current[id] = el;
    }, []);

    useEffect(() => {
        const observers = [];
        const NAVBAR_HEIGHT = 115;

        TABS.forEach(({ id }) => {
            const el = sectionRefs.current[id];
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (isClickScrolling.current) return;
                    if (entry.isIntersecting) {
                        setActiveTab(id);
                    }
                },
                {
                    rootMargin: `-${NAVBAR_HEIGHT}px 0px -45% 0px`,
                    threshold: 0,
                }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const handleTabClick = useCallback((id) => {
        const el = sectionRefs.current[id];
        if (!el) return;

        isClickScrolling.current = true;
        clearTimeout(clickScrollTimer.current);

        const OFFSET = 115;
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveTab(id);

        clickScrollTimer.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 900);
    }, []);

    const faqs = [
        {
            question: "What is the time limit to file a motor accident claim in India?",
            answer: "Motor accident claims should generally be filed within a reasonable time after the accident, though courts may allow delayed filings in certain circumstances."
        },
        {
            question: "Can I claim compensation if the accident was partially my fault?",
            answer: "Yes. Compensation may still be awarded depending on the degree of liability determined by the tribunal."
        },
        {
            question: "Do I need a lawyer for a motor accident claim?",
            answer: "While it is possible to file claims independently, legal professionals help ensure accurate documentation and better representation."
        },
        {
            question: "How long does a motor accident claim case take?",
            answer: "The duration depends on case complexity, evidence availability, and tribunal procedures."
        },
        {
            question: "What if the driver responsible for the accident is uninsured?",
            answer: "In such cases, compensation may be claimed through specific provisions or government compensation schemes."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Expert Motor Accident"
                heroTitleSuffix="Lawyers to Protect Your Rights"
                heroDescription={
                    <div className="space-y-6">
                        <p>Injured in a road accident? Get legal support to claim compensation quickly and fairly. Our experienced lawyers guide you through insurance claims, liability disputes, and compensation recovery.</p>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-yellow-400" />
                                <span className="text-[15px]">Legal consultation from experienced accident lawyers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-yellow-400" />
                                <span className="text-[15px]">Support for insurance and compensation claims</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-yellow-400" />
                                <span className="text-[15px]">Assistance with Motor Accident Claims Tribunal (MACT) cases</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">
                                Get Expert Legal Help Today
                            </button>
                        </div>
                    </div>
                }
                stats={[
                    { count: "Expert", label: "Consultation" },
                    { count: "95%", label: "Success Rate" },
                    { count: "24/7", label: "Legal Support" }
                ]}
                customForm={<CustomContactForm formTitle="Facing a Legal Issue? Connect with an Expert Lawyer Now!" serviceName="Motor Accident Lawyer" />}
                bgImage="/lawyer-service-hero-section-img/hero-section-bg-img.png"
            />

            {/* STICKY INSIDE NAVBAR */}
            <InsideNavbar
                tabs={TABS}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                topOffset={64}
                centered={true}
            />

            {/* CONTENT BODY */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-6 pb-24">
                
                {/* SECTION 1 · OVERVIEW */}
                <section id="overview" ref={setRef("overview")} className="pt-14 pb-10 scroll-mt-[115px]">
                    <SectionLabel>Overview</SectionLabel>
                    <SectionHeading>Get Legal Help After a Motor Accident</SectionHeading>
                    <BodyText>
                        Motor accidents can bring unexpected medical expenses, vehicle damage, financial stress, and legal complications. Whether the accident involves negligence, insurance disputes, or compensation claims, professional legal support can make a significant difference.
                    </BodyText>
                    <BodyText>
                        A Motor Accident Lawyer helps victims understand their legal rights, calculate fair compensation, and represent them before the Motor Accident Claims Tribunal (MACT).
                    </BodyText>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals and businesses can access experienced legal professionals who assist with accident claim cases, insurance disputes, and settlement negotiations.
                    </BodyText>
                    <BodyText>
                        With the right legal support, victims can focus on recovery while lawyers handle the legal procedures and documentation required to secure compensation.
                    </BodyText>
                </section>

                {/* SECTION 2 · SITUATIONS */}
                <section id="situations" ref={setRef("situations")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>When Do You Need Us</SectionLabel>
                    <SectionHeading>When Do You Need a Motor Accident Lawyer?</SectionHeading>
                    <BodyText>
                        Legal assistance becomes essential in many accident-related situations, such as:
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<AlertCircle size={16} />} title="Injury Compensation Claims">
                            <BodyText>If you or a family member has suffered injuries in a road accident, a lawyer can help claim compensation for medical expenses, rehabilitation, and loss of income.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Users size={16} />} title="Fatal Accident Cases">
                            <BodyText>In case of death caused by an accident, legal support helps families claim compensation under the Motor Vehicles Act.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Shield size={16} />} title="Insurance Claim Disputes">
                            <BodyText>Sometimes insurance companies delay or reject claims. A lawyer ensures your case is represented properly.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Truck size={16} />} title="Hit and Run Cases">
                            <BodyText>Legal professionals can guide victims through government compensation schemes and claim procedures.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Scale size={16} />} title="Liability Disputes">
                            <BodyText>When determining who is responsible for the accident becomes complex, a lawyer helps establish liability.</BodyText>
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · COMPENSATION */}
                <section id="compensation" ref={setRef("compensation")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Compensation</SectionLabel>
                    <SectionHeading>Compensation You Can Claim After a Motor Accident</SectionHeading>
                    <BodyText>
                        Victims of motor accidents may be eligible to claim various types of compensation depending on the case circumstances.
                    </BodyText>
                    <BodyText>Common compensation claims include:</BodyText>
                    <BulletList items={[
                        "Medical treatment expenses",
                        "Future medical care and rehabilitation",
                        "Loss of income or earning capacity",
                        "Vehicle repair or replacement costs",
                        "Pain, suffering, and emotional distress",
                        "Compensation for permanent disability",
                        "Financial support for dependents in fatal cases"
                    ]} />
                    <BodyText>
                        Legal professionals analyze the accident details, police reports, and medical records to determine the maximum compensation possible.
                    </BodyText>
                </section>

                {/* SECTION 4 · PROCESS & DOCS */}
                <section id="process-docs" ref={setRef("process-docs")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Process & Docs</SectionLabel>
                    <SectionHeading>How a Motor Accident Lawyer Helps You</SectionHeading>
                    <BodyText>
                        Handling accident claims requires proper legal knowledge and documentation. A lawyer supports the process at every stage.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Case Evaluation</h4>
                            <p className="text-sm text-slate-600">The lawyer reviews accident reports, medical records, and insurance details to assess the strength of your claim.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Documentation and Filing</h4>
                            <p className="text-sm text-slate-600">Proper filing of petitions before the Motor Accident Claims Tribunal is essential for claim approval.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Negotiation with Insurance Companies</h4>
                            <p className="text-sm text-slate-600">Lawyers negotiate with insurance companies to ensure fair settlement.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Representation in Court</h4>
                            <p className="text-sm text-slate-600">If settlement fails, lawyers represent clients in MACT or other courts.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Faster Claim Resolution</h4>
                            <p className="text-sm text-slate-600">With legal expertise, the claim process becomes more structured and efficient.</p>
                        </div>
                    </div>

                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals can access reliable legal professionals experienced in accident compensation cases.
                    </BodyText>

                    <Divider />

                    <SubHeading>Step-by-Step Process to File a Motor Accident Claim</SubHeading>
                    <div className="space-y-6 my-8">
                        {[
                            { step: "01", title: "Step 1 – Initial Legal Consultation", desc: "Discuss accident details with a lawyer to understand legal options." },
                            { step: "02", title: "Step 2 – Evidence Collection", desc: "Important documents such as FIR, medical reports, insurance policy, and accident evidence are gathered." },
                            { step: "03", title: "Step 3 – Claim Filing", desc: "A petition is filed before the Motor Accident Claims Tribunal." },
                            { step: "04", title: "Step 4 – Case Evaluation and Hearing", desc: "The tribunal evaluates evidence, liability, and compensation eligibility." },
                            { step: "05", title: "Step 5 – Compensation Award", desc: "If the claim is approved, the tribunal orders compensation payment to the victim or family." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <span className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-200 text-yellow-400 flex items-center justify-center font-bold group-hover:bg-[#005a9c] group-hover:text-white group-hover:border-[#005a9c] transition-all duration-300">
                                    {item.step}
                                </span>
                                <div>
                                    <h4 className="text-[16px] font-bold text-[#072b47] mb-1">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Divider />

                    <SubHeading>Documents Required for Motor Accident Claims</SubHeading>
                    <BodyText>The following documents are commonly required when filing an accident claim:</BodyText>
                    <BulletList items={[
                        "FIR or police complaint copy",
                        "Medical reports and hospital bills",
                        "Vehicle registration documents",
                        "Insurance policy details",
                        "Driving license of the driver",
                        "Photographs or evidence of the accident",
                        "Witness statements (if available)"
                    ]} />
                    <BodyText>Having complete documentation helps strengthen the claim and speeds up the legal process.</BodyText>
                </section>

                {/* SECTION 5 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Why Choose Us</SectionLabel>
                    <SectionHeading>Why Choose Professional Legal Assistance for Accident Claims</SectionHeading>
                    <BodyText>
                        Motor accident laws and insurance policies can be complex. Professional legal assistance ensures that victims do not miss important legal rights.
                    </BodyText>
                    <SubHeading>Benefits include:</SubHeading>
                    <BulletList items={[
                        "Accurate claim assessment",
                        "Proper legal documentation",
                        "Professional negotiation with insurers",
                        "Representation in tribunal proceedings",
                        "Higher chances of fair compensation"
                    ]} />
                    <BodyText>Legal experts help protect your rights and simplify the legal process during a difficult time.</BodyText>

                    <Divider />

                    <SubHeading>Why Choose Vyombiz for Motor Accident Legal Support</SubHeading>
                    <BodyText>
                        When dealing with accident claims, choosing the right legal platform ensures faster and more reliable assistance.
                    </BodyText>
                    <BodyText>
                        With Vyombiz managed by Clink Consultancy Services Private Limited, clients receive structured legal support and access to qualified professionals.
                    </BodyText>
                    <SubHeading>Key advantages include:</SubHeading>
                    <BulletList items={[
                        "Access to experienced accident lawyers",
                        "Transparent consultation process",
                        "Support for insurance claim disputes",
                        "Assistance with MACT filing and representation",
                        "End-to-end legal guidance"
                    ]} />
                    <BodyText>The goal is to ensure victims receive the legal support required to pursue rightful compensation.</BodyText>
                </section>

                {/* SECTION 6 · FAQs */}
                <section id="faq" ref={setRef("faq")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>FAQs</SectionLabel>
                    <SectionHeading>Frequently Asked Questions</SectionHeading>
                    <div className="mt-8">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <div className="mt-20 bg-[#072b47] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Get Legal Support for Motor Accident Claims</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Accidents can bring unexpected challenges, but legal support helps ensure victims receive fair treatment and compensation.</p>
                        <p className="text-slate-300 text-sm mb-10 max-w-2xl mx-auto">Consult experienced legal professionals through Vyombiz managed by Clink Consultancy Services Private Limited to understand your rights and begin the claim process with confidence.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Talk to a Motor Accident Lawyer Today</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MotorAccidentLawyer;

