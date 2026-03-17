import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, Briefcase, Building2, ChevronDown, Phone, CheckCircle2, Shield, FileText, Scale, AlertCircle, BookOpen, Gavel, Landmark, ShoppingBag, Search, MessageSquare, Lightbulb } from "lucide-react";
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
const IntellectualPropertyLawyer = () => {
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
            question: "How long does trademark registration take in India?",
            answer: "Trademark registration generally takes 6 to 12 months, depending on examination and objection stages."
        },
        {
            question: "What is the validity of a trademark?",
            answer: "A registered trademark in India is valid for 10 years and can be renewed indefinitely."
        },
        {
            question: "Can startups register patents?",
            answer: "Yes. Startups can apply for patent protection if their invention is new, innovative, and industrially applicable."
        },
        {
            question: "Do I need a lawyer for copyright registration?",
            answer: "While not mandatory, legal guidance helps ensure accurate filing and stronger protection of your work."
        },
        {
            question: "What happens if someone copies my brand or invention?",
            answer: "Legal action can be taken through infringement claims, cease-and-desist notices, and court proceedings to protect your rights."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* HERO SECTION */}
            <HeroLayout
                heroTitleMain="Intellectual Property"
                heroTitleSuffix="Lawyers"
                heroDescription="Protect What You Create. Secure What You Build. Your ideas, innovations, designs, and brand identity are valuable business assets. Our experienced IP Lawyers help businesses protect and enforce their rights."
                stats={[
                    { count: "5,000+", label: "IP Audits" },
                    { count: "99%", label: "Registration Rate" },
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
                    <SectionHeading>What is Intellectual Property (IP)?</SectionHeading>
                    <BodyText>
                        Intellectual Property refers to legal rights granted to creators and businesses for their original work and innovations. These rights protect creations such as inventions, brand names, logos, artistic works, product designs, and proprietary technologies.
                    </BodyText>
                    <BodyText>
                        IP protection allows owners to control how their creations are used commercially, preventing unauthorized copying or misuse.
                    </BodyText>
                    <BodyText>
                        Through Vyombiz managed by Clink Consultancy Services Private Limited, businesses can access experienced intellectual property lawyers who guide them through registration, protection, licensing, and dispute resolution.
                    </BodyText>

                    <Divider />

                    <SubHeading>Importance of IP Protection</SubHeading>
                    <BulletList items={[
                        "Establish brand ownership and prevent unauthorized use.",
                        "Increase business valuation and attract investors.",
                        "Generate revenue through licensing or franchising.",
                        "Strengthen competitive advantage in the market."
                    ]} />
                </section>

                {/* SECTION 2 · SERVICES */}
                <section id="services" ref={setRef("services")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Services</SectionLabel>
                    <SectionHeading>Intellectual Property Services Offered</SectionHeading>
                    <BodyText>
                        Our IP lawyers provide comprehensive legal support across multiple areas of intellectual property protection.
                    </BodyText>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                        <InfoCard icon={<Lightbulb size={18} />} title="Trademark">
                            Protect your brand identity including name, logo, and taglines.
                        </InfoCard>
                        <InfoCard icon={<FileText size={18} />} title="Copyright">
                            Protects creative works like content, code, music, and digital media.
                        </InfoCard>
                        <InfoCard icon={<Scale size={18} />} title="Patent">
                            Exclusive rights for new inventions and technologies through filing and prosecution.
                        </InfoCard>
                        <InfoCard icon={<Search size={18} />} title="Design">
                            Protects the visual appearance of products like shapes and patterns.
                        </InfoCard>
                        <InfoCard icon={<AlertCircle size={18} />} title="IP Litigation">
                            Assistance in infringement cases, disputes, and legal enforcement.
                        </InfoCard>
                        <InfoCard icon={<Briefcase size={18} />} title="Licensing">
                            Drafting and negotiating agreements for commercial exploitation of IP.
                        </InfoCard>
                    </div>
                </section>

                {/* SECTION 3 · PROCESS */}
                <section id="process" ref={setRef("process")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>The Workflow</SectionLabel>
                    <SectionHeading>How Our IP Lawyers Help Businesses</SectionHeading>
                    <div className="space-y-6 my-8">
                        {[
                            { title: "IP Consultation", desc: "Understanding your business model and intellectual assets." },
                            { title: "Strategy Development", desc: "Identifying the most suitable protection method (Trademark, Patent, etc.)." },
                            { title: "Filing & Documentation", desc: "Preparation and submission of applications with relevant authorities." },
                            { title: "Registration & Support", desc: "Handling objections, examination processes, and formal approvals." },
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

                {/* SECTION 4 · WHY US */}
                <section id="why-us" ref={setRef("why-us")} className="pt-14 pb-10 border-t border-slate-100 scroll-mt-[115px]">
                    <SectionLabel>Our Pride</SectionLabel>
                    <SectionHeading>Why Choose Our IP Lawyers</SectionHeading>
                    <div className="grid md:grid-cols-2 gap-6 my-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-3">Expertise</h4>
                            <p className="text-sm text-slate-600">Strategic IP protection planning and accurate legal documentation by experienced professionals.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-[#072b47] mb-3">Results</h4>
                            <p className="text-sm text-slate-600">Fast and efficient registration processes combined with strong legal enforcement support.</p>
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
                        <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Protect Your Ideas Today</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Don't wait until someone copies your innovation. Get expert legal protection for your intellectual assets now.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#005a9c] hover:bg-[#004a85] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg">Talk to an IP Lawyer Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IntellectualPropertyLawyer;
