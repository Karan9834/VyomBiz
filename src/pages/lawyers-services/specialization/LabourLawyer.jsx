import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare, HardHat } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Legal Services" },
    { id: "laws", label: "Laws & Issues" },
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
const LabourLawyer = () => {
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
            question: "Why does my business need a labour lawyer?",
            answer: "A labour lawyer ensures compliance with complex workplace regulations, manages employee disputes, and protects the business from legal penalties and litigation."
        },
        {
            question: "Can a labour lawyer help with wrongful termination claims?",
            answer: "Yes. They represent businesses in defending against wrongful termination claims and ensure that dismissal procedures follow legal requirements."
        },
        {
            question: "What are the key labour laws in India?",
            answer: "Key laws include the Industrial Disputes Act, Minimum Wages Act, EPF Act, ESI Act, and the Maternity Benefit Act, among others."
        },
        {
            question: "How do I handle a workplace harassment complaint?",
            answer: "Workplace harassment must be handled through a defined internal committee and grievance mechanism. A labour lawyer can help establish these compliant systems."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Labour Law"
                heroTitleSuffix="Lawyers"
                heroDescription="Hiring employees is easy. Managing labour law compliance is not. From employment contracts to workplace disputes, a Labour Lawyer helps businesses stay compliant, avoid penalties, and build legally secure workplaces."
                stats={[
                    { count: "Expert", label: "Legal Advice" },
                    { count: "95%", label: "Success Rate" },
                    { count: "24/7", label: "Support" }
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
                    <SectionHeading>What Does a Labour Lawyer Do?</SectionHeading>
                    <BodyText>
                        A Labour Lawyer specializes in employment and workplace laws that govern the relationship between employers and employees. Businesses must comply with several labour regulations related to hiring, wages, working conditions, benefits, and employee termination.
                    </BodyText>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses gain access to experienced labour lawyers who help manage complex labour regulations, reduce legal risks, and create compliant HR systems.
                    </BodyText>

                    <Divider />

                    <SubHeading>Why Businesses Need Professional Support</SubHeading>
                    <BulletList items={[
                        "Ensure compliance with evolving labour regulations.",
                        "Draft legally sound employment contracts and appointment letters.",
                        "Handle employee grievances and prevent legal disputes.",
                        "Represent the company effectively before labour courts.",
                        "Establish strong, compliant workplace and HR policies."
                    ]} />
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Labour Law Services We Offer</SectionHeading>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <InfoCard icon={<FileText size={18} />} title="Employment Contracts">
                            Preparing legally compliant contracts, appointment letters, and termination clauses.
                        </InfoCard>
                        <InfoCard icon={<Shield size={18} />} title="Compliance Advisory">
                            Helping businesses stay aligned with wage, safety, and health regulations.
                        </InfoCard>
                        <InfoCard icon={<Scale size={18} />} title="Dispute Resolution">
                            Resolving wage conflicts, harassment complaints, or termination disputes.
                        </InfoCard>
                        <InfoCard icon={<Users size={18} />} title="HR Policy Drafting">
                            Developing company codes of conduct, ethics policies, and grievance mechanisms.
                        </InfoCard>
                        <InfoCard icon={<Gavel size={18} />} title="Legal Representation">
                            Representation before labour commissioners, industrial tribunals, and courts.
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={18} />} title="Exit Management">
                            Handling layoffs and resignations lawfully to avoid legal blowback.
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · LAWS & ISSUES */}
                <section id="laws" ref={setRef("laws")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Laws & Issues</SectionLabel>
                    <SectionHeading>Key Labour Laws & Common Issues</SectionHeading>
                    <BodyText>Labour regulations in India are extensive. Our experts guide businesses through compliance with:</BodyText>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div>
                            <h4 className="font-bold text-[#072b47] mb-4 flex items-center gap-2">
                                <Landmark size={18} className="text-yellow-400" /> Statutes
                            </h4>
                            <BulletList items={[
                                "Industrial Disputes Act",
                                "Shops and Establishments Act",
                                "Minimum Wages & Payment of Wages Act",
                                "EPF & ESI Acts",
                                "Maternity Benefit & Gratuity Act"
                            ]} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#072b47] mb-4 flex items-center gap-2">
                                <AlertCircle size={18} className="text-red-500" /> Common Risks
                            </h4>
                            <BulletList items={[
                                "Wrongful termination claims",
                                "Wage and salary disputes",
                                "Workplace harassment complaints",
                                "Labour inspection notices",
                                "Contract employee disputes"
                            ]} />
                        </div>
                    </div>
                </section>

                {/* SECTION 4 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Pride</SectionLabel>
                    <SectionHeading>How Our Labour Lawyers Help</SectionHeading>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, companies receive structured legal support tailored to business needs. This approach ensures businesses can focus on growth while legal experts manage compliance risks.
                    </BodyText>
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Build a Legally Secure Workplace</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Don't wait for a legal dispute. Proactive labour law compliance is the foundation of a healthy business.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg">Talk to an Expert Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LabourLawyer;

