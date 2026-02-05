import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, FileText, TrendingUp, ChevronRight, Shield, Award, Users, ArrowRight } from "lucide-react";

/**
 * Universal SaaS-Style Details Layout for Registration Pages
 * Features: Sticky Navigation, Scroll-Spy, and Premium Visual Blocks
 */
const DetailsLayout = ({
    overview = null,
    advantages = null,
    eligibility = null,
    documents = null,
    process = null,
    whyChooseUs = null
}) => {
    const navContainerRef = useRef(null);
    const [activeSection, setActiveSection] = useState("");
    const sectionRefs = {
        overview: useRef(null),
        advantages: useRef(null),
        eligibility: useRef(null),
        documents: useRef(null),
        process: useRef(null),
        whyChooseUs: useRef(null),
    };

    // Navigation items based on provided props
    const navItems = [
        { id: "overview", label: "Overview", show: !!overview },
        { id: "advantages", label: "Advantages", show: !!advantages },
        { id: "eligibility", label: "Eligibility", show: !!eligibility },
        { id: "documents", label: "Documents Required", show: !!documents },
        { id: "process", label: "Process", show: !!process },
        { id: "whyChooseUs", label: "Why VyomBiz", show: !!whyChooseUs },
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

                        // Auto-scroll the nav item into view on mobile
                        if (window.innerWidth < 768 && navContainerRef.current) {
                            const activeButton = navContainerRef.current.querySelector(`[data-id="${item.id}"]`);
                            if (activeButton) {
                                activeButton.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                    inline: 'center'
                                });
                            }
                        }
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
            {/* Sticky Sub-Navigation with Yellow Background */}
            <div className="sticky top-[64px] z-40 bg-[#f1a134] shadow-lg overflow-x-auto no-scrollbar">
                <div className="container mx-auto px-4 md:px-6">
                    <div ref={navContainerRef} className="flex items-center md:justify-center min-w-max">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                data-id={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-5 md:px-8 py-4 md:py-5 text-[11px] md:text-[13px] font-black uppercase tracking-widest transition-all relative group shrink-0 ${activeSection === item.id ? "text-[#072b47]" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#072b47] rounded-t-full" />
                                )}
                                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-white/30 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform ${activeSection === item.id ? 'hidden' : 'block'}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-24">

                {/* 1. OVERVIEW SECTION */}
                {overview && (
                    <section
                        id="overview"
                        ref={sectionRefs.overview}
                        className="py-24 border-b border-slate-50 scroll-mt-24"
                    >
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-3/5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[#f1a134] text-[10px] font-[900] uppercase tracking-wider mb-6">
                                    <TrendingUp size={12} />
                                    <span>{overview.badge || "Registration Insight"}</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black text-[#072b47] mb-8 leading-tight">
                                    {overview.title} <span className="text-[#f1a134]">{overview.highlightTitle}</span>
                                </h2>
                                <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                                    {Array.isArray(overview.description)
                                        ? overview.description.map((p, i) => <p key={i}>{p}</p>)
                                        : <p>{overview.description}</p>
                                    }
                                </div>
                            </div>
                            <div className="lg:w-2/5 w-full">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#f1a134] to-orange-300 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                                    <div className="relative bg-white p-10 lg:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-orange-100/50">
                                        <h3 className="text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                                            <Shield className="text-[#f1a134]" size={28} />
                                            {overview.whyIdealTitle || "Growth Potential"}
                                        </h3>
                                        <div className="space-y-6">
                                            {overview.whyIdealList?.map((item, i) => (
                                                <div key={i} className="flex gap-4 group/item">
                                                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0 group-hover/item:bg-[#1e40af] transition-colors">
                                                        <CheckCircle2 className="text-[#f1a134] group-hover/item:text-white transition-colors" size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-[#072b47] text-sm mb-1">{item.title}</p>
                                                        <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 2. ADVANTAGES SECTION */}
                {advantages && (
                    <section
                        id="advantages"
                        ref={sectionRefs.advantages}
                        className="py-16 md:py-24 border-b border-slate-50 scroll-mt-24 focus:outline-none"
                    >
                        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#072b47] mb-4 md:mb-6 tracking-tight">
                                {advantages.title}
                            </h2>
                            <p className="text-slate-500 font-bold text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic px-4">
                                "{advantages.subtitle}"
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
                            {advantages.list.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#1e40af]/30 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-xl"
                                >
                                    <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 group-hover:rotate-6 transition-transform">
                                        <Award className="text-[#f1a134]" size={24} />
                                    </div>
                                    <h4 className="font-black text-[#072b47] text-xl mb-4 group-hover:text-[#1e40af] transition-colors">{item.title}</h4>
                                    <p className="text-[14px] text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                                    <div className="mt-6 flex items-center gap-2 text-[#1e40af] font-black text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ArrowRight size={14} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 3. ELIGIBILITY SECTION */}
                {eligibility && (
                    <section
                        id="eligibility"
                        ref={sectionRefs.eligibility}
                        className="py-16 md:py-24 border-b border-slate-50 scroll-mt-24"
                    >
                        <div className="bg-[#1e40af] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-14 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
                                <div className="lg:w-1/2 text-center lg:text-left">
                                    <h3 className="text-3xl md:text-5xl font-[900] mb-6 md:mb-8 leading-tight tracking-tight">
                                        {eligibility.title || "Eligibility Criteria"}
                                    </h3>
                                    <p className="text-blue-100/80 font-bold text-base md:text-lg mb-8 md:mb-10 leading-relaxed italic">
                                        {eligibility.subtitle || "Make sure you meet these essential legal requirements before starting the application."}
                                    </p>
                                    <button className="bg-[#f1a134] text-white px-8 py-3.5 rounded-xl font-black text-[12px] md:text-sm uppercase tracking-widest hover:brightness-105 transition-all shadow-lg">
                                        Check Your Eligibility
                                    </button>
                                </div>
                                <div className="lg:w-1/2 grid gap-4 md:gap-6 w-full">
                                    {eligibility.list.map((item, i) => (
                                        <div key={i} className="flex gap-5 items-start bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 bg-[#f1a134] rounded-full flex items-center justify-center shrink-0 border-4 border-[#1e40af]">
                                                <CheckCircle2 size={14} strokeWidth={4} />
                                            </div>
                                            <div>
                                                <p className="font-black text-lg mb-1">{typeof item === 'string' ? item : item.title}</p>
                                                {item.desc && <p className="text-blue-100/60 text-xs font-bold leading-relaxed">{item.desc}</p>}
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
                    <section
                        id="documents"
                        ref={sectionRefs.documents}
                        className="py-16 md:py-24 border-b border-slate-50 scroll-mt-24"
                    >
                        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
                            <div className="lg:w-1/2 order-2 lg:order-1 relative w-full">
                                <div className="absolute -inset-4 bg-orange-100/30 rounded-[2rem] md:rounded-[3rem] blur-xl" />
                                <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border-4 md:border-8 border-white shadow-2xl">
                                    <img
                                        src={documents.imageUrl || "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                                        alt="Registration Documents"
                                        className="w-full h-[300px] md:h-[500px] object-cover hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl border border-white shadow-lg">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#072b47] rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
                                                <FileText size={20} />
                                            </div>
                                            <div>
                                                <p className="font-black text-[#072b47] text-xs md:text-sm">Document Verification</p>
                                                <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ensures 100% Approval Rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
                                <h2 className="text-3xl md:text-5xl font-black text-[#072b47] mb-6 md:mb-8 tracking-tight">
                                    {documents.title}
                                </h2>
                                <p className="text-slate-500 font-bold text-base md:text-lg mb-8 md:mb-10 leading-relaxed italic px-4 lg:px-0">
                                    {documents.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-12 text-left">
                                    {documents.list.map((doc, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:bg-[#f1a134] transition-colors">
                                                <div className="w-1.5 h-1.5 bg-[#f1a134] rounded-full group-hover:bg-white transition-colors" />
                                            </div>
                                            <span className="text-[15px] font-black text-slate-700 group-hover:text-[#1e40af] transition-colors">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 5. PROCESS SECTION */}
                {process && (
                    <section
                        id="process"
                        ref={sectionRefs.process}
                        className="py-24 border-b border-slate-50 scroll-mt-24"
                    >
                        <div className="text-center max-w-3xl mx-auto mb-20 text-balance">
                            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 tracking-tight">
                                {process.title}
                            </h2>
                            <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto italic">
                                "{process.subtitle}"
                            </p>
                        </div>
                        <div className="max-w-5xl mx-auto relative px-4">
                            {/* Desktop Progress Dotted Line */}
                            <div className="absolute top-0 bottom-0 left-[2.5rem] md:left-1/2 w-0.5 bg-dashed border-l-2 border-dashed border-slate-200 hidden md:block" />

                            <div className="space-y-24 relative">
                                {process.steps.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                            }`}
                                    >
                                        <div className="md:w-1/2 flex flex-col items-center md:items-start px-0 md:px-12 text-center md:text-left">
                                            <div className="md:hidden w-16 h-16 bg-white border-2 border-slate-100 shadow-xl rounded-[1.5rem] flex items-center justify-center text-[#f1a134] font-black text-2xl mb-6">
                                                {item.step}
                                            </div>
                                            <div className="group bg-white p-8 lg:p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-[#f1a134]/30 transition-all duration-500 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f1a134]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                                                <h4 className="text-2xl font-black text-[#072b47] mb-4 group-hover:text-[#1e40af] transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-slate-500 font-bold text-[14px] leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Center Circle Pin */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-white border-[6px] border-[#FFFAF5] shadow-[0_10px_30px_rgba(241,161,52,0.2)] rounded-[2rem] items-center justify-center text-[#f1a134] font-[900] text-2xl z-20">
                                            {item.step}
                                        </div>

                                        <div className="md:w-1/2 hidden md:block" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 6. WHY CHOOSE US SECTION */}
                {whyChooseUs && (
                    <section
                        id="whyChooseUs"
                        ref={sectionRefs.whyChooseUs}
                        className="py-24 scroll-mt-24"
                    >
                        <div className="bg-slate-50 rounded-[4rem] p-10 lg:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f1a134] opacity-[0.03] rounded-full translate-x-1/3 translate-y-1/3" />

                            <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 tracking-tight">
                                    {whyChooseUs.title}
                                </h2>
                                <p className="text-slate-500 font-bold text-lg leading-relaxed italic">
                                    "{whyChooseUs.subtitle}"
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                                {whyChooseUs.list.map((item, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-2 h-8 bg-[#f1a134] rounded-full transition-all group-hover:h-12 group-hover:bg-[#1e40af]" />
                                            <h4 className="font-black text-[#072b47] text-lg lg:text-xl transition-colors group-hover:text-[#1e40af]">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <p className="text-[14px] text-slate-500 font-bold leading-relaxed pl-6 border-l border-slate-200 group-hover:border-[#f1a134] transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Professional Badge Grid */}
                            <div className="mt-24 pt-16 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-12 text-center opacity-60">
                                {[
                                    { icon: <Shield size={32} />, label: "ISO Certified" },
                                    { icon: <Award size={32} />, label: "Startup India Hub" },
                                    { icon: <Users size={32} />, label: "MCA Authorized" },
                                    { icon: <CheckCircle2 size={32} />, label: "99% SLA Approval" }
                                ].map((badge, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
                                        <div className="text-slate-400 group-hover:text-[#f1a134] transition-colors">{badge.icon}</div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{badge.label}</p>
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

export default DetailsLayout;
