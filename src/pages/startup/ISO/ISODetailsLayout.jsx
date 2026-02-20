import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, Award } from "lucide-react";

/**
 * Specialized Layout for ISO Pages matching the provided screenshot aesthetics.
 * This layout is specifically designed for international standards pages.
 */
const ISODetailsLayout = ({
    overview = null,
    advantages = null,
    eligibility = null,
    documents = null,
    process = null,
    whyUs = null,
    faqs = []
}) => {
    const navContainerRef = useRef(null);
    const [activeSection, setActiveSection] = useState("overview");

    const overviewRef = useRef(null);
    const advantagesRef = useRef(null);
    const eligibilityRef = useRef(null);
    const documentsRef = useRef(null);
    const processRef = useRef(null);
    const whyUsRef = useRef(null);
    const faqRef = useRef(null);

    const sectionRefs = {
        overview: overviewRef,
        advantages: advantagesRef,
        eligibility: eligibilityRef,
        documents: documentsRef,
        process: processRef,
        whyUs: whyUsRef,
        faq: faqRef,
    };

    const navItems = [
        { id: "overview", label: "Overview", show: !!overview },
        { id: "advantages", label: "Advantages", show: !!advantages },
        { id: "eligibility", label: "Eligibility Criteria", show: !!eligibility },
        { id: "documents", label: "Documents Required", show: !!documents },
        { id: "process", label: "Process", show: !!process },
        { id: "whyUs", label: "Why Us", show: !!whyUs },
        { id: "faq", label: "FAQs", show: faqs && faqs.length > 0 },
    ].filter(item => item.show);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;
            for (const item of navItems) {
                const element = sectionRefs[item.id].current;
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    const scrollToSection = (id) => {
        const element = sectionRefs[id].current;
        if (element) {
            const offset = element.offsetTop - 120;
            window.scrollTo({ top: offset, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white">
            {/* Sticky Navigation matching Screenshot */}
            <div className="sticky top-[64px] z-40 bg-[#fce7c0] shadow-md border-b border-orange-200/50 hidden md:block">
                <div className="container mx-auto px-4">
                    <div ref={navContainerRef} className="flex items-center justify-center space-x-1 py-1 px-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-6 py-2 text-[13px] font-black rounded-lg transition-all duration-300 relative uppercase tracking-tighter ${activeSection === item.id
                                    ? "bg-white text-orange-500 shadow-sm"
                                    : "text-slate-700 hover:bg-white/50"
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className="sticky top-[64px] z-40 bg-[#fce7c0] md:hidden shadow-md overflow-x-auto no-scrollbar">
                <div className="flex items-center p-2 space-x-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-4 py-2 text-[11px] font-black rounded-lg whitespace-nowrap uppercase tracking-tighter ${activeSection === item.id ? "bg-white text-orange-500 shadow-sm" : "text-slate-700"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-24">
                {/* 1. OVERVIEW SECTION */}
                {overview && (
                    <section id="overview" ref={overviewRef} className="py-20 md:py-28 scroll-mt-24">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-3/5">
                                <h2 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-8 leading-tight">
                                    {overview.title}{overview.highlightTitle ? " - " + overview.highlightTitle : ""}
                                </h2>
                                <div className="space-y-6 text-slate-600 font-medium text-[17px] leading-relaxed">
                                    {Array.isArray(overview.description)
                                        ? overview.description.map((p, i) => <p key={i} className="text-justify">{p}</p>)
                                        : <p className="text-justify">{overview.description}</p>
                                    }
                                </div>
                            </div>
                            <div className="lg:w-2/5 w-full flex justify-center lg:justify-end">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-orange-50 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                    <img
                                        src={overview.imageUrl || "https://img.freepik.com/free-vector/professional-people-working-desk-illustration_52683-65611.jpg"}
                                        alt="ISO Overview Illustration"
                                        className="relative w-full max-w-md h-auto object-contain transform transition-transform duration-700 hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-12">
                            <button className="bg-[#f1a134] hover:bg-orange-500 text-white px-12 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-100 transition-all hover:-translate-y-1">
                                Connect With Our Consultant Now
                            </button>
                        </div>
                    </section>
                )}

                {/* 2. ADVANTAGES SECTION */}
                {advantages && (
                    <section id="advantages" ref={advantagesRef} className="py-20 border-t border-slate-50 scroll-mt-24">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 tracking-tight">{advantages.title}</h2>
                            <p className="text-slate-500 font-bold text-lg italic">"{advantages.subtitle}"</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {advantages.list?.map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2rem] border border-orange-200 shadow-2xl transition-all duration-500">
                                    <div className="mb-6 w-14 h-14 bg-[#f1a134] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-100">
                                        <Award className="text-white" size={24} />
                                    </div>
                                    <h4 className="font-black text-[#f1a134] text-xl mb-4">{item.title}</h4>
                                    <p className="text-sm text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 3. ELIGIBILITY SECTION */}
                {eligibility && (
                    <section id="eligibility" ref={eligibilityRef} className="py-16 border-t border-slate-50 scroll-mt-24">
                        <div className="bg-[#072b47] rounded-[2.5rem] p-10 md:p-12 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-[0.02] rounded-full translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
                                <div className="lg:w-[40%]">
                                    <h3 className="text-3xl md:text-4xl font-black mb-5 leading-tight tracking-tight">{eligibility.title}</h3>
                                    <p className="text-slate-300 font-medium text-[16px] mb-8 italic leading-relaxed">{eligibility.subtitle}</p>
                                    <button className="bg-[#f1a134] text-white px-9 py-3.5 rounded-xl font-black text-[13px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">Check Your Eligibility</button>
                                </div>
                                <div className="lg:w-[60%] grid sm:grid-cols-2 gap-4 w-full">
                                    {eligibility.list?.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-center bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all">
                                            <CheckCircle2 className="text-[#f1a134] shrink-0" size={21} />
                                            <div>
                                                <p className="font-black text-base">{item.title || item}</p>
                                                {item.desc && <p className="text-slate-400 text-xs font-bold leading-relaxed mt-1">{item.desc}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 4. DOCUMENTS SECTION */}
                {documents && (
                    <section id="documents" ref={documentsRef} className="py-20 border-t border-slate-50 scroll-mt-24">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2 order-2 lg:order-1 relative">
                                <div className="absolute -inset-4 bg-orange-50 rounded-[3rem] blur-xl opacity-50" />
                                <img src={documents.imageUrl || "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} alt="Documents" className="relative rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-8">{documents.title}</h2>
                                <p className="text-slate-500 font-bold text-lg mb-10 italic border-l-4 border-orange-400 pl-6">{documents.description}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {documents.list?.map((doc, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="w-2 h-2 rounded-full bg-[#f1a134] group-hover:scale-150 transition-transform" />
                                            <span className="text-[15px] font-black text-slate-700 group-hover:text-blue-600 transition-colors">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 5. PROCESS SECTION */}
                {process && (
                    <section id="process" ref={processRef} className="py-20 border-t border-slate-50 scroll-mt-24">
                        <div className="text-center mb-20 max-w-4xl mx-auto">
                            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">{process.title}</h2>
                            <p className="text-slate-500 font-bold text-lg italic">"{process.subtitle}"</p>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-16">
                            {process.steps?.map((step, i) => (
                                <div key={i} className="flex items-start gap-8 relative group">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 text-[#f1a134] font-black text-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#f1a134] group-hover:text-white group-hover:scale-110 transition-all duration-500 z-10">{step.step}</div>
                                    <div className="pt-2">
                                        <h4 className="text-2xl font-black text-[#072b47] mb-2 group-hover:text-[#f1a134] transition-colors">{step.title}</h4>
                                        <p className="text-slate-500 font-bold text-base leading-relaxed">{step.desc}</p>
                                    </div>
                                    {i < process.steps.length - 1 && <div className="absolute top-20 left-8 w-0.5 h-20 bg-dashed border-l border-slate-100 hidden md:block" />}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 6. WHY US SECTION */}
                {whyUs && (
                    <section id="whyUs" ref={whyUsRef} className="py-20 border-t border-slate-50 scroll-mt-24">
                        <div className="bg-orange-50/40 rounded-[4rem] p-10 lg:p-20 border border-orange-100/50 shadow-sm">
                            <div className="text-center mb-16 max-w-4xl mx-auto">
                                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 uppercase tracking-tighter">{whyUs.title}</h2>
                                <p className="text-slate-500 font-bold text-lg italic leading-relaxed">"{whyUs.subtitle}"</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {whyUs.list?.map((item, i) => (
                                    <div key={i} className="flex flex-col gap-5 p-8 bg-white rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-500">
                                        <div className="w-12 h-1.5 bg-orange-400 rounded-full" />
                                        <h4 className="font-black text-[#072b47] text-xl">{item.title}</h4>
                                        <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 7. FAQ SECTION */}
                {faqs && faqs.length > 0 && (
                    <section id="faq" ref={faqRef} className="py-20 border-t border-slate-50 scroll-mt-24">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] text-center mb-16 uppercase tracking-tighter">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-black text-[#1a1a1a] text-xl mb-3 flex gap-3 text-balance items-center"><span className="text-orange-400">Q.</span> {faq.question}</h4>
                                        <p className="text-slate-600 font-medium text-lg leading-relaxed pl-8 border-l-2 border-orange-100">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ISODetailsLayout;
