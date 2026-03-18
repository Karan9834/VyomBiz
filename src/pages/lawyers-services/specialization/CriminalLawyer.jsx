import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Legal Services" },
    { id: "defense", label: "Defense Strategy" },
    { id: "why-us", label: "Why Us" },
    { id: "faq", label: "FAQs" },
];

/* ─────────────────────────────────────────────────────────
   SHARED TYPOGRAPHY PRIMITIVES
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
                <span className="text-[#005a9c]">{icon}</span>
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
    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#005a9c] bg-[#e8f1fb] px-3 py-1 rounded-full mb-4">
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
const CriminalLawyer = () => {
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
            question: "When should I hire a criminal lawyer?",
            answer: "It is advisable to consult a criminal lawyer as soon as a complaint, FIR, or investigation begins. Early legal advice can protect your rights and help build a strong defense."
        },
        {
            question: "Can a criminal lawyer help with bail?",
            answer: "Yes. Criminal lawyers assist with anticipatory bail, regular bail, and court hearings to secure release from custody."
        },
        {
            question: "What happens after an FIR is filed?",
            answer: "After an FIR, police may begin investigation, collect evidence, and issue notices or arrests depending on the case. Legal guidance helps you respond appropriately."
        },
        {
            question: "Do criminal lawyers represent clients in all courts?",
            answer: "Yes. Criminal lawyers represent clients in magistrate courts, sessions courts, and high courts depending on the jurisdiction and severity of the case."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Criminal"
                heroTitleSuffix="Lawyers"
                heroDescription="Professional Defense When You Need It Most. Facing criminal charges is serious. Get expert legal representation for bail, trials, and case management from experienced criminal lawyers."
                stats={[
                    { count: "Expert", label: "Trial Lawyers" },
                    { count: "98%", label: "Success Rate" },
                    { count: "24/7", label: "Legal Support" }
                ]}
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
                    <SectionHeading>Criminal Lawyers in India – Legal Defense Strategy</SectionHeading>
                    <BodyText>
                        Criminal cases demand precision, legal expertise, and immediate action. Whether it is a complaint, FIR, investigation, bail application, or trial representation, having a qualified criminal lawyer ensures that your rights are protected at every stage.
                    </BodyText>
                    <BodyText>
                        Our criminal lawyers assist individuals, professionals, and businesses in navigating complex criminal proceedings with confidence.
                    </BodyText>
                    <BodyText>
                        When you work with professionals through Vyombiz managed by Clink Consultancy Services Private Limited, you receive structured legal support designed to reduce risk and strengthen your defense strategy.
                    </BodyText>

                    <Divider />

                    <SubHeading>Why You Need an Experienced Criminal Lawyer</SubHeading>
                    <BodyText>
                        Criminal law involves strict procedures and complex legal frameworks. A skilled lawyer can help by:
                    </BodyText>
                    <BulletList items={[
                        "Protecting your constitutional and legal rights.",
                        "Building a strong and evidence-based defense strategy.",
                        "Representing you effectively in court hearings and trials.",
                        "Managing complex legal documentation and evidence.",
                        "Negotiating settlements or plea bargains when applicable."
                    ]} />
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Criminal Law Services We Offer</SectionHeading>
                    <BodyText>
                        Our criminal law specialists handle a wide range of cases and legal situations with complete confidentiality.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <InfoCard icon={<Scale size={16} />} title="Bail Applications">
                            <p className="text-sm text-slate-600">Assistance for anticipatory bail, regular bail, and interim bail to ensure legal protection.</p>
                        </InfoCard>
                        <InfoCard icon={<FileText size={16} />} title="FIR assistance">
                            <p className="text-sm text-slate-600">Guidance on filing FIRs, drafting criminal complaints, and responding to police notices.</p>
                        </InfoCard>
                        <InfoCard icon={<Gavel size={16} />} title="Trial Representation">
                            <p className="text-sm text-slate-600">Professional representation in trial courts, magistrate courts, and sessions courts.</p>
                        </InfoCard>
                        <InfoCard icon={<Shield size={16} />} title="Cyber Crime cases">
                            <p className="text-sm text-slate-600">Handling cases related to online fraud, identity theft, and digital offenses.</p>
                        </InfoCard>
                    </div>

                    <Divider />

                    <SubHeading>Types of Criminal Cases Handled</SubHeading>
                    <BulletList items={[
                        "Assault and violent crimes",
                        "Theft and property offences",
                        "Financial and corporate white-collar fraud",
                        "Domestic relations related criminal cases",
                        "Cheating, forgery, and breach of trust cases"
                    ]} />
                </section>

                {/* SECTION 3 · DEFENSE STRATEGY */}
                <section id="defense" ref={setRef("defense")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Strategy</SectionLabel>
                    <SectionHeading>Our Approach to Criminal Defense</SectionHeading>
                    <BodyText>
                        We follow a structured and professional process to help clients manage criminal legal matters efficiently.
                    </BodyText>

                    <div className="space-y-6 my-8">
                        {[
                            { title: "Case Evaluation", desc: "Our legal experts review case details, evidence, and charges thoroughly." },
                            { title: "Strategy Development", desc: "A defense strategy is prepared based on facts and procedural requirements." },
                            { title: "Documentation & Filing", desc: "All legal paperwork and court filings are prepared with precision." },
                            { title: "Court Representation", desc: "Experienced lawyers represent clients during hearings and trial proceedings." },
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f8fbff] border-2 border-[#d0e3f5] text-[#005a9c] flex items-center justify-center font-bold text-sm">
                                    {idx + 1}
                                </span>
                                <div>
                                    <h4 className="text-[16px] font-bold text-[#072b47] mb-1">{step.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Edge</SectionLabel>
                    <SectionHeading>Why Choose Our Criminal Lawyers</SectionHeading>
                    <div className="grid md:grid-cols-3 gap-6 my-10">
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Users size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">Experienced Team</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">Connect with specialized criminal defense professionals across India.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Briefcase size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">Strategic Consultation</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">Personalized legal strategies tailored to the specifics of your case.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                                <Landmark size={24} className="text-[#005a9c]" />
                            </div>
                            <h4 className="text-[17px] font-bold text-[#072b47] mb-3">All India Support</h4>
                            <p className="text-slate-600 text-[13px] leading-relaxed">Consistent support across trial courts, sessions courts, and high courts.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 5 · FAQs */}
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Protect Your Rights with Expert Defense</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Criminal matters require immediate attention. Get the defense you deserve with experienced criminal lawyers through Vyombiz.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Talk to a Lawyer Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CriminalLawyer;
