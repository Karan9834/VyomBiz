import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare, Heart } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Legal Services" },
    { id: "process", label: "Process" },
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
    <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 transition-all hover:shadow-md">
        <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] flex items-center justify-center mb-4">
            <span className="text-yellow-400">{icon}</span>
        </div>
        <h4 className="text-[16px] font-bold text-[#072b47] mb-2">{title}</h4>
        <div className="text-sm text-slate-600 leading-relaxed">{children}</div>
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
const FamilyLawyer = () => {
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
            question: "What does a family lawyer do?",
            answer: "A family lawyer handles legal matters related to marriage, divorce, child custody, maintenance, domestic violence, and family property disputes."
        },
        {
            question: "How much does a family lawyer cost in India?",
            answer: "Legal fees vary depending on the complexity of the case, lawyer experience, and court proceedings involved."
        },
        {
            question: "Can divorce be completed without going to court?",
            answer: "In some cases, mutual divorce settlements may require limited court hearings, but legal procedures must still be followed."
        },
        {
            question: "How long does a divorce case take in India?",
            answer: "Mutual divorce cases may take around 6 months, while contested divorce cases can take longer depending on the circumstances."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Family"
                heroTitleSuffix="Lawyers"
                heroDescription="Family disputes can be emotional and legally complex. Having the right legal guidance ensures your rights, relationships, and future are protected. Connect with experienced Family Lawyers who help resolve disputes with clarity, strategy, and sensitivity."
                stats={[
                    { count: "Expert", label: "Consultation" },
                    { count: "95%", label: "Resolution" },
                    { count: "24/7", label: "Legal Advice" }
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
                    <SectionHeading>Family Law Services We Offer</SectionHeading>
                    <BodyText>
                        Family law covers a wide range of legal matters involving relationships, marriage, children, and family property. Our experienced lawyers provide strategic legal guidance to help you resolve sensitive matters efficiently and lawfully.
                    </BodyText>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, clients can easily connect with verified family law experts who understand both the emotional and legal aspects of family disputes.
                    </BodyText>

                    <Divider />

                    <SubHeading>Importance of Legal Guidance</SubHeading>
                    <BulletList items={[
                        "Understand your legal rights and complex obligations.",
                        "Proper handling of sensitive court documentation.",
                        "Strategic negotiation for fair out-of-court settlements.",
                        "Protecting the long-term interests of children.",
                        "Efficient resolution of emotionally charged disputes."
                    ]} />
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Key Family Law Services</SectionHeading>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <InfoCard icon={<Scale size={18} />} title="Divorce & Separation">
                            Mutual or contested petitions, court representation, and settlement guidance.
                        </InfoCard>
                        <InfoCard icon={<Users size={18} />} title="Child Custody">
                            Petitions, visitation rights, and parental rights disputes focusing on child welfare.
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={18} />} title="Alimony">
                            Determining fair maintenance based on legal provisions and life circumstances.
                        </InfoCard>
                        <InfoCard icon={<Shield size={18} />} title="Domestic Violence">
                            Filing complaints, obtaining protection orders, and victim representation.
                        </InfoCard>
                        <InfoCard icon={<Building2 size={18} />} title="Property Settlement">
                            Mediating division of family property and resolving inheritance disputes.
                        </InfoCard>
                        <InfoCard icon={<Heart size={18} />} title="Adoption">
                            Guiding families through legal adoption procedures and compliance.
                        </InfoCard>
                    </div>

                    <SubHeading>Key Family Laws in India</SubHeading>
                    <BulletList items={[
                        "Hindu Marriage Act, 1955 & Special Marriage Act, 1954",
                        "Protection of Women from Domestic Violence Act, 2005",
                        "Guardians and Wards Act, 1890",
                        "Hindu Adoption and Maintenance Act, 1956"
                    ]} />
                </section>

                {/* SECTION 3 · PROCESS */}
                <section id="process" ref={setRef("process")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>The Workflow</SectionLabel>
                    <SectionHeading>Our Legal Process</SectionHeading>
                    <div className="space-y-6 my-8">
                        {[
                            { title: "Case Assessment", desc: "Consult with a qualified family lawyer to explain your options." },
                            { title: "Legal Strategy", desc: "Preparation of a tailored approach (negotiation, mediation, or litigation)." },
                            { title: "Documentation", desc: "Filing necessary legal documents, petitions, and supporting evidence." },
                            { title: "Representation", desc: "Advocating for your interests until the matter is legally resolved." },
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f8fbff] text-yellow-400 border-2 border-[#d0e3f5] flex items-center justify-center font-bold">
                                    {idx + 1}
                                </span>
                                <div>
                                    <h4 className="text-[17px] font-bold text-[#072b47] mb-1">{step.title}</h4>
                                    <p className="text-slate-600 text-[15px]">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Pride</SectionLabel>
                    <SectionHeading>Why Trust Vyombiz</SectionHeading>
                    <BodyText>Early legal advice can prevent complications and help you make informed decisions. Consider consulting if you face:</BodyText>
                    <BulletList items={[
                        "Planning for a mutual or contested divorce.",
                        "Disputes regarding child custody or visitation.",
                        "Domestic violence or harassment situations.",
                        "Maintenance or alimony disagreements.",
                        "Complex family property or inheritance disputes."
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Protect Your Family's Future</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Get expert legal guidance to resolve sensitive family matters with dignity and clarity.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg">Talk to a Family Expert</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FamilyLawyer;

