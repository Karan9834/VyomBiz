import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare, ReceiptText } from "lucide-react";
import InsideNavbar from "../../../components/common/InsideNavbar.jsx";
import HeroLayout from "../../../components/common/HeroLayout.jsx";

/* ─────────────────────────────────────────────────────────
   SECTION TABS CONFIG
───────────────────────────────────────────────────────── */
const TABS = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Legal Services" },
    { id: "why-us", label: "Why Us" },
    { id: "process", label: "Process" },
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
const GSTLawyer = () => {
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
            question: "What is the role of a GST lawyer?",
            answer: "A GST lawyer handles legal matters related to GST laws including notices, disputes, litigation, compliance advisory, and representation before GST authorities."
        },
        {
            question: "When should a business hire a GST lawyer?",
            answer: "A business should consult a GST lawyer when it receives GST notices, faces penalties, enters tax disputes, or requires legal support for compliance and audits."
        },
        {
            question: "Can a GST lawyer help with tax disputes?",
            answer: "Yes. GST lawyers represent businesses in litigation and appeals before GST authorities and tribunals to resolve tax disputes."
        },
        {
            question: "How long does it take to resolve GST disputes?",
            answer: "The timeline depends on the complexity of the case, documentation, and authority procedures. A GST lawyer helps streamline the process for faster resolution."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="GST Issues"
                heroTitleSuffix="Lawyers"
                heroDescription="Let a GST Lawyer Handle It. From GST notices to litigation and compliance, our experienced GST lawyers help businesses stay compliant and resolve disputes quickly."
                stats={[
                    { count: "Expert", label: "Tax Consultation" },
                    { count: "99%", label: "Compliance Rate" },
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
                    <SectionHeading>Expert GST Lawyer Services for Businesses</SectionHeading>
                    <BodyText>
                        Goods and Services Tax (GST) has transformed the indirect tax system in India. While GST simplifies taxation, it also brings complex compliance rules, regulatory procedures, and legal challenges.
                    </BodyText>
                    <BodyText>
                        At Vyombiz managed by Clink Consultancy Services Private Limited, our GST lawyers help businesses navigate GST laws efficiently. Whether you need help responding to a GST notice, filing an appeal, or ensuring full GST compliance, our legal experts provide structured and practical solutions.
                    </BodyText>

                    <Divider />

                    <SubHeading>What Does a GST Lawyer Do?</SubHeading>
                    <BulletList items={[
                        "Advising businesses on GST laws and tax implications.",
                        "Handling GST notices and departmental inquiries.",
                        "Representing businesses in litigation and appeals.",
                        "Managing GST refunds, assessments, and audits.",
                        "Providing strategic tax planning and compliance support."
                    ]} />
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>GST Legal Services We Provide</SectionHeading>
                    <BodyText>
                        From GST notices to litigation and compliance, our experienced GST lawyers help businesses stay compliant.
                    </BodyText>

                    <div className="grid md:grid-cols-2 gap-4 my-8">
                        <InfoCard icon={<FileText size={18} />} title="Notice Support">
                            Preparation of legal responses to GST notices and representation before authorities.
                        </InfoCard>
                        <InfoCard icon={<CheckCircle2 size={18} />} title="Compliance Advisory">
                            Assistance in obtaining GST registration and understanding compliance obligations.
                        </InfoCard>
                        <InfoCard icon={<Scale size={18} />} title="Appeals & Disputes">
                            Filing appeals and representing cases for tax disputes or unfavorable orders.
                        </InfoCard>
                        <InfoCard icon={<ReceiptText size={18} />} title="Refunds & ITC">
                            Resolving delayed refunds, ITC mismatches, and handling rejected credit claims.
                        </InfoCard>
                        <InfoCard icon={<Search size={18} />} title="Audit & Investigation">
                            Guiding businesses through GST audits or departmental investigations.
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={18} />} title="Tax Planning">
                            Strategic tax planning to optimize liability while remaining fully compliant.
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Edge</SectionLabel>
                    <SectionHeading>When Should You Consult a GST Lawyer?</SectionHeading>
                    <BodyText>Early legal intervention can save businesses from serious financial consequences. Consult when facing:</BodyText>
                    <BulletList items={[
                        "GST notices or demand orders.",
                        "Tax penalties or compliance violations.",
                        "GST litigation or disputes with authorities.",
                        "Issues related to input tax credit (ITC).",
                        "Refund delays or rejected claims.",
                        "GST audit or departmental investigation."
                    ]} />
                </section>

                {/* SECTION 4 · PROCESS */}
                <section id="process" ref={setRef("process")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>The Workflow</SectionLabel>
                    <SectionHeading>How Our GST Legal Process Works</SectionHeading>
                    <div className="space-y-6 my-8">
                        {[
                            { title: "Case Evaluation", desc: "Our GST lawyer reviews your issue, documents, and legal position." },
                            { title: "Strategy & Advisory", desc: "We design a practical legal strategy based on your business situation." },
                            { title: "Legal Representation", desc: "Our experts prepare responses, file appeals, and represent your case." },
                            { title: "Resolution", desc: "We help close the issue and ensure your business remains compliant moving forward." },
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Need Immediate GST Help?</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Don't let tax disputes slow down your business. Get professional legal support today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg">Talk to an Expert Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GSTLawyer;
