import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare, HeartOff } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Legal Services" },
    { id: "laws", label: "Laws & Grounds" },
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
            <span className="text-[#005a9c]">{icon}</span>
        </div>
        <h4 className="text-[16px] font-bold text-[#072b47] mb-2">{title}</h4>
        <div className="text-sm text-slate-600 leading-relaxed">{children}</div>
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
const DivorceLawyer = () => {
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
            question: "How long does a divorce take in India?",
            answer: "Mutual consent divorce generally takes 6 to 18 months, while contested divorce cases may take longer depending on disputes and court proceedings."
        },
        {
            question: "Is hiring a divorce lawyer necessary?",
            answer: "While not legally mandatory, a lawyer helps ensure proper documentation, representation, and legal protection during the process."
        },
        {
            question: "Can divorce be completed without court appearance?",
            answer: "Certain hearings may require personal presence, but lawyers can handle most legal procedures and filings."
        },
        {
            question: "What is the difference between mutual and contested divorce?",
            answer: "Mutual divorce occurs when both spouses agree to separate, while contested divorce happens when one party disputes the divorce or its terms."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Divorce"
                heroTitleSuffix="Lawyers"
                heroDescription="Expert Legal Support for a Smooth and Fair Divorce Process. Get expert divorce legal assistance for mutual consent or contested divorces. Connect with top divorce lawyers to protect your rights."
                stats={[
                    { count: "Expert", label: "Divorce Advice" },
                    { count: "95%", label: "Success Rate" },
                    { count: "24/7", label: "Consultation" }
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
                    <SectionHeading>Expert Legal Support for a Smooth and Fair Divorce Process</SectionHeading>
                    <BodyText>
                        Divorce can be emotionally and legally complex. Having the right legal guidance helps you protect your rights, finances, and future.
                    </BodyText>
                    <BodyText>
                        At Vyombiz, experienced divorce lawyers assist individuals with mutual consent divorce, contested divorce, child custody, alimony claims, and settlement negotiations—ensuring a fair and legally sound resolution.
                    </BodyText>
                    <BodyText>
                        Vyombiz managed by Clink Consultancy Services Private Limited provides professional legal consultation and representation to help you navigate divorce proceedings with clarity and confidence.
                    </BodyText>
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Our Divorce Lawyers Help With</SectionHeading>
                    <BodyText>
                        Divorce involves multiple legal steps—from filing petitions to negotiating settlements. Our legal professionals help you manage every stage efficiently.
                    </BodyText>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                        <InfoCard icon={<FileText size={18} />} title="Mutual Divorce">
                            When both spouses agree to end the marriage, lawyers assist with documentation and court filing.
                        </InfoCard>
                        <InfoCard icon={<Scale size={18} />} title="Contested Divorce">
                            If spouses disagree, legal representation protects your rights during court proceedings.
                        </InfoCard>
                        <InfoCard icon={<Users size={18} />} title="Child Custody">
                            Lawyers help determine arrangements that prioritize the child's best interests.
                        </InfoCard>
                        <InfoCard icon={<AlertCircle size={18} />} title="Alimony">
                            Legal experts help determine fair financial support based on income and legal obligations.
                        </InfoCard>
                        <InfoCard icon={<Building2 size={18} />} title="Property Division">
                            Proper legal strategy guarantees a fair split of property and assets.
                        </InfoCard>
                        <InfoCard icon={<MessageSquare size={18} />} title="Confidentiality">
                            Dealing with sensitive family matters with utmost confidentiality and strong legal action.
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · LAWS */}
                <section id="laws" ref={setRef("laws")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Legal Grounds</SectionLabel>
                    <SectionHeading>Divorce Laws in India</SectionHeading>
                    <BodyText>
                        Divorce in India is governed by different personal laws depending on religion. Understanding the applicable law is essential for filing the correct petition.
                    </BodyText>
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-3">Governing Acts</h4>
                            <BulletList items={[
                                "Hindu Marriage Act, 1955",
                                "Special Marriage Act, 1954",
                                "Indian Divorce Act, 1869",
                                "Muslim Personal Law"
                            ]} />
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-3">Common Grounds</h4>
                            <BulletList items={[
                                "Cruelty (mental or physical)",
                                "Adultery or Desertion",
                                "Mental disorder",
                                "Irretrievable breakdown"
                            ]} />
                        </div>
                    </div>
                </section>

                {/* SECTION 4 · PROCESS */}
                <section id="process" ref={setRef("process")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>The Journey</SectionLabel>
                    <SectionHeading>Divorce Process in India</SectionHeading>
                    <BodyText>The timeline may vary depending on whether the divorce is mutual or contested.</BodyText>

                    <div className="space-y-6 my-8">
                        {[
                            { title: "Legal Consultation", desc: "Initial discussion to evaluate your case and legal options." },
                            { title: "Filing Petition", desc: "The petition is drafted and filed in the appropriate family court." },
                            { title: "Court Hearings", desc: "Both parties present their arguments, evidence, and legal claims." },
                            { title: "Mediation", desc: "Courts may encourage mediation for amicable resolution." },
                            { title: "Final Decree", desc: "The court grants the divorce after reviewing all legal aspects." },
                        ].map((step, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f8fbff] text-[#005a9c] border-2 border-[#d0e3f5] flex items-center justify-center font-bold">
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

                {/* SECTION 5 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Pride</SectionLabel>
                    <SectionHeading>Why Choose Vyombiz</SectionHeading>
                    <BulletList items={[
                        "Highly experienced divorce lawyers with deep family law expertise.",
                        "Absolute confidentiality and professional handling of sensitive cases.",
                        "End-to-end legal support from consultation to final decree.",
                        "Transparent guidance on rights, documentation, and timelines."
                    ]} />
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Speak With a Divorce Lawyer Today</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Get trusted legal assistance and structured solutions for your family matters.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg">Talk to an Expert Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DivorceLawyer;
