import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, CheckCircle2, FileText, Scale, AlertCircle, Shield, Gavel, Users, MessageSquare, Briefcase, Phone } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import CustomContactForm from "../../../components/common/CustomContactForm.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "why-consult", label: "Why Consult" },
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
const MuslimLawLawyer = () => {
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
            question: "What is Muslim Personal Law in India?",
            answer: "Muslim Personal Law governs family and personal matters such as marriage, divorce, inheritance, and guardianship for Muslims, based on Islamic legal principles and applicable legislation."
        },
        {
            question: "Can Muslim divorce be handled through courts?",
            answer: "Yes. While some forms of divorce can occur outside court, many situations require legal documentation or court involvement to ensure validity and enforceability."
        },
        {
            question: "How is property distributed under Muslim inheritance law?",
            answer: "Inheritance follows specific rules where assets are distributed among heirs such as spouses, children, and relatives according to predetermined shares."
        },
        {
            question: "Do I need a lawyer for Nikah documentation?",
            answer: "While Nikah can be performed religiously, legal guidance ensures the marriage agreement is properly documented and legally recognized."
        },
        {
            question: "How can I connect with a Muslim law lawyer?",
            answer: "You can request legal assistance through Vyombiz managed by Clink Consultancy Services Private Limited, which connects clients with experienced lawyers for consultation and case support."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Expert Muslim Law"
                heroTitleSuffix="Lawyers"
                heroDescription={
                    <div className="space-y-6">
                        <p>Navigate complex personal laws with confidence. From marriage and divorce to inheritance and property rights, experienced Muslim law lawyers help protect your legal rights while respecting Islamic legal principles.</p>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-yellow-400" />
                                <span className="text-[15px]">Sharia Interpretation & Guidance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-yellow-400" />
                                <span className="text-[15px]">Nikahnama Drafting & Validation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-yellow-400" />
                                <span className="text-[15px]">Court Representation in Family Cases</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">
                                Talk to a Muslim Law Expert Today
                            </button>
                        </div>
                    </div>
                }
                stats={[
                    { count: "Expert", label: "Consultation" },
                    { count: "98%", label: "Satisfaction" },
                    { count: "24/7", label: "Legal Support" }
                ]}
                customForm={<CustomContactForm formTitle="Facing a Legal Issue? Connect with an Expert Lawyer Now!" serviceName="Muslim Law Lawyer" />}
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
                    <SectionHeading>What is Muslim Personal Law?</SectionHeading>
                    <BodyText>
                        Muslim Personal Law governs personal matters such as marriage, divorce, inheritance, guardianship, maintenance, and family relationships for individuals following Islam. In India, these laws are largely derived from the Shariat (Islamic law) and are applied through legislation and judicial interpretations.
                    </BodyText>
                    <BodyText>
                        Because personal laws can involve sensitive family matters and intricate legal provisions, professional legal assistance becomes essential to ensure proper documentation, dispute resolution, and lawful decision-making.
                    </BodyText>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, individuals and families can connect with knowledgeable Muslim law lawyers who understand both religious principles and Indian legal frameworks, helping clients resolve issues effectively and lawfully.
                    </BodyText>

                    <Divider />

                    <SubHeading>Why You Need a Muslim Law Lawyer</SubHeading>
                    <BodyText>
                        Personal law matters often involve emotional, financial, and religious considerations. Having the right legal expert ensures your rights are protected while maintaining compliance with applicable laws.
                    </BodyText>

                    <div className="space-y-4 my-6">
                        <InfoCard icon={<Scale size={16} />} title="Interpretation of Shariat">
                            <BodyText>Professional guidance on Sharia-based legal provisions and their application in the Indian legal context.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<FileText size={16} />} title="Valid Documentation">
                            <BodyText>Drafting valid Nikahnama agreements and handling legal formalities for religious marriages.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<AlertCircle size={16} />} title="Divorce Procedures">
                            <BodyText>Expert handling of Talaq, Khula, and judicial divorce procedures to ensure fair resolution.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={16} />} title="Inheritance & succession">
                            <BodyText>Resolving complex inheritance disputes and managing asset distribution according to Islamic law.</BodyText>
                        </InfoCard>
                        <InfoCard icon={<Gavel size={16} />} title="Family Representation">
                            <BodyText>Professional representation in family courts for maintenance, guardianship, and property disputes.</BodyText>
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Services Offered by Muslim Law Lawyers</SectionHeading>
                    <BodyText>
                        Personal and family matters require careful legal handling. The lawyers associated with Vyombiz provide specialized services across multiple areas of Muslim Personal Law:
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Marriage & Nikah Documentation</h4>
                            <p className="text-sm text-slate-600">Assistance with Nikah contracts, religious and legal documentation, and valid registration of marriage.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Divorce & Separation</h4>
                            <p className="text-sm text-slate-600">Guidance through Talaq, Khula, and judicial divorce to ensure a fair and legally sound separation.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Maintenance & Alimony</h4>
                            <p className="text-sm text-slate-600">Determining maintenance rights for spouses and children under applicable family and personal laws.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Inheritance & Succession</h4>
                            <p className="text-sm text-slate-600">Assistance with succession planning, asset distribution, and resolving hereditary property disputes.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Child Custody</h4>
                            <p className="text-sm text-slate-600">Resolving guardianship and custody matters while prioritizing the best interests of the minor children.</p>
                        </div>
                        <div className="p-5 bg-[#f8fbff] rounded-xl border border-[#d0e3f5]">
                            <h4 className="font-bold text-[#072b47] mb-2">Family Mediation</h4>
                            <p className="text-sm text-slate-600">Mediating family and property disputes to achieve amicable settlements through professional intervention.</p>
                        </div>
                    </div>

                    <Divider />

                    <SubHeading>Key Legal Areas Covered</SubHeading>
                    <BulletList items={[
                        "Nikah and Marriage Agreements",
                        "Dissolution of Marriage (Talaq/Khula)",
                        "Maintenance for Spouses and Children",
                        "Rules of Inheritance and Succession",
                        "Guardianship of Minors",
                        "Family Property Settlement"
                    ]} />
                </section>

                {/* SECTION 3 · PROCESS */}
                <section id="process" ref={setRef("process")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Process</SectionLabel>
                    <SectionHeading>How We Help You Resolve Family Matters</SectionHeading>
                    <BodyText>
                        Getting legal assistance through Vyombiz managed by Clink Consultancy Services Private Limited is a structured and reliable process.
                    </BodyText>

                    <div className="space-y-6 my-8">
                        {[
                            { step: "01", title: "Share Your Requirement", desc: "Submit your legal concern through our platform for a preliminary assessment." },
                            { step: "02", title: "Expert Consultation", desc: "Connect with a lawyer specializing in Muslim Law to discuss your case details." },
                            { step: "03", title: "Strategy & Documentation", desc: "Your lawyer prepares necessary documents and plans the best legal approach." },
                            { step: "04", title: "Representation & Resolution", desc: "Ongoing support through negotiation, formal filing, or court representation." }
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
                </section>

                {/* SECTION 4 · WHY CONSULT */}
                <section id="why-consult" ref={setRef("why-consult")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Why Consult</SectionLabel>
                    <SectionHeading>Benefits of Professional Legal Assistance</SectionHeading>
                    <BodyText>
                        Muslim personal law matters are sensitive and complex. Consulting a professional ensures your rights are protected.
                    </BodyText>

                    <BulletList items={[
                        "Expert Legal Advice: Gain a clear understanding of your rights under Sharia and Indian law.",
                        "Valid Documentation: Prevent future disputes by ensuring all agreements are legally sound.",
                        "Strategic Resolution: Handling family matters with discretion and legal efficiency.",
                        "Court Representation: Strong representation in family courts for litigation cases.",
                        "Confidentiality: Your personal and religious matters are handled with the highest privacy."
                    ]} />

                    <Divider />

                    <SubHeading>When Should You Consult a Lawyer?</SubHeading>
                    <BodyText>Early legal consultation is recommended in situations like:</BodyText>
                    <BulletList items={[
                        "Formalizing Nikah agreements or marriage registration.",
                        "Facing or initiating divorce proceedings.",
                        "Settling inheritance or hereditary property distribution.",
                        "Addressing custody, maintenance, or guardianship disputes.",
                        "Facing legal complications in sensitive family matters."
                    ]} />
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Protect Your Family & Legal Rights</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Sensitive family matters require trusted legal guidance. Ensure every decision is legally valid and protects your future.</p>
                        <p className="text-slate-300 text-sm mb-10 max-w-2xl mx-auto">Consult experienced Muslim law lawyers through Vyombiz managed by Clink Consultancy Services Private Limited today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-900/40">Consult a Lawyer Today</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MuslimLawLawyer;

