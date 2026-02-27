import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, FileText, TrendingUp, ChevronRight, Shield, Award, Users, ArrowRight } from "lucide-react";
import InsideNavbar from "./InsideNavbar";

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
    typesOfCompliance = null,
    dueDates = null,
    eventBasedCompliance = null,
    nonRegistrarFilings = null,
    features = null,
    whyChooseUs = null, // fallback for features
    postCompliance = null,
    navLabels = {}, // optional: override tab labels
    showSectionImages = false
}) => {
    const [activeSection, setActiveSection] = useState("");
    const overviewRef = useRef(null);
    const advantagesRef = useRef(null);
    const eligibilityRef = useRef(null);
    const documentsRef = useRef(null);
    const processRef = useRef(null);
    const typesOfComplianceRef = useRef(null);
    const dueDatesRef = useRef(null);
    const eventBasedComplianceRef = useRef(null);
    const nonRegistrarFilingsRef = useRef(null);
    const featuresRef = useRef(null);
    const whyChooseUsRef = useRef(null);
    const postComplianceRef = useRef(null);

    const sectionRefs = {
        overview: overviewRef,
        advantages: advantagesRef,
        eligibility: eligibilityRef,
        documents: documentsRef,
        process: processRef,
        typesOfCompliance: typesOfComplianceRef,
        dueDates: dueDatesRef,
        eventBasedCompliance: eventBasedComplianceRef,
        nonRegistrarFilings: nonRegistrarFilingsRef,
        features: featuresRef,
        whyChooseUs: whyChooseUsRef,
        postCompliance: postComplianceRef,
    };

    // Navigation items based on provided props
    const navItems = [
        { id: "overview", label: navLabels.overview || "Overview", show: !!overview },
        { id: "advantages", label: navLabels.advantages || "Advantages", show: !!advantages },
        { id: "eligibility", label: navLabels.eligibility || "Eligibility", show: !!eligibility },
        { id: "documents", label: navLabels.documents || "Documents", show: !!documents },
        { id: "process", label: navLabels.process || "Process", show: !!process },
        { id: "typesOfCompliance", label: navLabels.typesOfCompliance || "Types", show: !!typesOfCompliance },
        { id: "dueDates", label: navLabels.dueDates || "Due Dates", show: !!dueDates },
        { id: "eventBasedCompliance", label: navLabels.eventBasedCompliance || "Event-Based", show: !!eventBasedCompliance },
        { id: "nonRegistrarFilings", label: navLabels.nonRegistrarFilings || "Non-Registrar", show: !!nonRegistrarFilings },
        { id: "features", label: navLabels.features || "Support", show: !!(features || whyChooseUs) },
        { id: "postCompliance", label: navLabels.postCompliance || "Compliance", show: !!postCompliance },
        { id: "faq", label: navLabels.faq || "FAQs", show: true },
    ].filter(item => item.show);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (const item of navItems) {
                let element;
                if (item.id === "faq") {
                    element = document.getElementById("faq");
                } else if (item.id === "features") {
                    element = (features ? featuresRef : whyChooseUsRef).current;
                } else {
                    element = sectionRefs[item.id]?.current;
                }
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
    }, [navItems, features, whyChooseUs]);

    const scrollToSection = (id) => {
        let element;
        if (id === "faq") {
            element = document.getElementById("faq");
        } else if (id === "features") {
            element = (features ? featuresRef : whyChooseUsRef).current;
        } else {
            element = sectionRefs[id]?.current;
        }
        if (element) {
            const offset = element.offsetTop - 120;
            window.scrollTo({ top: offset, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white">
            <InsideNavbar
                tabs={navItems.map(item => ({ id: item.id, label: item.label }))}
                activeTab={activeSection}
                onTabClick={scrollToSection}
                topOffset={64}
                centered={true}
            />

            <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24">

                {/* 1. OVERVIEW SECTION */}
                {overview && (
                    <section id="overview" ref={overviewRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(overview) ? overview : (
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="lg:w-3/5">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[#f1a134] text-[10px] font-black uppercase tracking-wider mb-6">
                                        <TrendingUp size={12} />
                                        <span>{overview.badge || "Market Insight"}</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-black text-[#072b47] mb-8 leading-tight">
                                        {overview.title} <span className="text-[#f1a134]">{overview.highlightTitle}</span>
                                    </h2>
                                    <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                                        {Array.isArray(overview.description) ? overview.description.map((p, i) => <p key={i}>{p}</p>) : <p>{overview.description}</p>}
                                    </div>
                                </div>
                                <div className="lg:w-2/5 w-full">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#f1a134] to-orange-300 rounded-[3rem] blur-2xl opacity-10" />
                                        <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl">
                                            <h3 className="text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                                                <Shield className="text-[#f1a134]" size={28} />
                                                {overview.whyIdealTitle || "Why Mandatory?"}
                                            </h3>
                                            <div className="space-y-6">
                                                {overview.whyIdealList?.map((item, i) => (
                                                    <div key={i} className="flex gap-4 group/item">
                                                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0 group-hover/item:bg-[#1e40af] transition-all">
                                                            <CheckCircle2 className="text-[#f1a134] group-hover/item:text-white" size={20} />
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
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 2. ADVANTAGES SECTION */}
                {advantages && (
                    <section id="advantages" ref={advantagesRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(advantages) ? advantages : (
                            <>
                                <div className="text-center max-w-3xl mx-auto mb-10">
                                    <h2 className="text-3xl md:text-5xl font-black text-[#072b47] mb-6">{advantages.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg italic tracking-tight">"{advantages.subtitle}"</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {advantages.list.map((item, i) => (
                                        <div key={i} className="bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#1e40af]/30 hover:bg-white transition-all shadow-sm hover:shadow-xl group">
                                            <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 group-hover:rotate-6 transition-transform">
                                                <Award className="text-[#f1a134]" size={24} />
                                            </div>
                                            <h4 className="font-black text-[#072b47] text-xl mb-4 group-hover:text-[#1e40af] transition-colors">{item.title}</h4>
                                            <p className="text-[14px] text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 3. ELIGIBILITY / CHECKLIST */}
                {eligibility && (
                    <section id="eligibility" ref={eligibilityRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(eligibility) ? eligibility : (
                            <div className="bg-[#1e40af] rounded-[4rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                                    <div className="lg:w-1/2">
                                        <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">{eligibility.title}</h3>
                                        <p className="text-blue-100/80 font-bold text-lg mb-10 leading-relaxed italic">{eligibility.subtitle}</p>
                                        <button className="bg-[#f1a134] text-white px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest hover:brightness-105 transition-all shadow-lg">Request Consultation</button>
                                    </div>
                                    <div className="lg:w-1/2 grid gap-6 w-full">
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
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 4. DOCUMENTS SECTION */}
                {documents && (
                    <section id="documents" ref={documentsRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(documents) ? documents : (
                            <div className="flex flex-col lg:flex-row gap-20 items-center">
                                <div className="lg:w-1/2 order-2 lg:order-1 relative w-full">
                                    <div className="absolute -inset-4 bg-orange-100/30 rounded-[3rem] blur-xl" />
                                    <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                                        <img src={documents.imageUrl || "https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&w=800"} alt="Documents" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                    </div>
                                </div>
                                <div className="lg:w-1/2 order-1 lg:order-2">
                                    <h2 className="text-3xl md:text-5xl font-black text-[#072b47] mb-8 tracking-tight">{documents.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg mb-10 leading-relaxed italic pr-12">{documents.description}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                                        {documents.list.map((doc, i) => (
                                            <div key={i} className="flex items-center gap-4 group">
                                                <div className="w-2 h-2 rounded-full bg-[#f1a134] group-hover:scale-150 transition-all" />
                                                <span className="text-[15px] font-black text-slate-700 group-hover:text-[#1e40af] transition-colors">{doc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3fc?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 5. PROCESS SECTION */}
                {process && (
                    <section id="process" ref={processRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(process) ? process : (
                            <>
                                <div className="text-center max-w-3xl mx-auto mb-20">
                                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">{process.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg italic">"{process.subtitle}"</p>
                                </div>
                                <div className="max-w-5xl mx-auto space-y-24 relative px-4">
                                    <div className="absolute top-0 bottom-0 left-[2.5rem] md:left-1/2 w-0.5 border-l-2 border-dashed border-slate-200 hidden md:block" />
                                    {process.steps.map((item, i) => (
                                        <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="md:w-1/2 flex flex-col items-center md:items-start px-0 md:px-12 text-center md:text-left">
                                                <div className="md:hidden w-16 h-16 bg-white border-2 border-slate-100 shadow-xl rounded-[1.5rem] flex items-center justify-center text-[#f1a134] font-black text-2xl mb-6">{item.step}</div>
                                                <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden">
                                                    <h4 className="text-2xl font-black text-[#072b47] mb-4 group-hover:text-[#1e40af] transition-colors">{item.title}</h4>
                                                    <p className="text-slate-500 font-bold text-[14px] leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-white border-[6px] border-[#FFFAF5] shadow-xl rounded-[2rem] items-center justify-center text-[#f1a134] font-black text-2xl z-20">{item.step}</div>
                                            <div className="md:w-1/2 hidden md:block" />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 6. TYPES OF COMPLIANCE */}
                {typesOfCompliance && (
                    <section id="typesOfCompliance" ref={typesOfComplianceRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(typesOfCompliance) ? typesOfCompliance : (
                            <>
                                <div className="text-center max-w-3xl mx-auto mb-10">
                                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">{typesOfCompliance.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg italic">"{typesOfCompliance.subtitle}"</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {typesOfCompliance.list.map((item, i) => (
                                        <div key={i} className="p-8 bg-slate-50/50 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-[#f1a134]/30 hover:shadow-xl transition-all group">
                                            <div className="w-10 h-10 bg-[#f1a134]/10 rounded-xl flex items-center justify-center text-[#f1a134] mb-6 font-black">{i + 1}</div>
                                            <h4 className="text-lg font-black text-[#072b47] mb-3 group-hover:text-[#1e40af] transition-colors">{item.title}</h4>
                                            <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 7. DUE DATES SECTION (Table) */}
                {dueDates && (
                    <section id="dueDates" ref={dueDatesRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(dueDates) ? dueDates : (
                            <>
                                <div className="text-center max-w-3xl mx-auto mb-10">
                                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">{dueDates.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg italic">"{dueDates.subtitle}"</p>
                                </div>
                                <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[600px]">
                                        <thead className="bg-[#072b47] text-white">
                                            <tr>
                                                {dueDates.columns.map((col, i) => (
                                                    <th key={i} className="px-8 py-6 font-black text-sm uppercase tracking-widest">{col}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {dueDates.rows.map((row, i) => (
                                                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                    {row.map((cell, j) => (
                                                        <td key={j} className={`px-8 py-5 text-[14px] font-bold ${j === 0 ? 'text-[#072b47]' : 'text-slate-500'}`}>{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 8. EVENT-BASED COMPLIANCE */}
                {eventBasedCompliance && (
                    <section id="eventBasedCompliance" ref={eventBasedComplianceRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(eventBasedCompliance) ? eventBasedCompliance : (
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="lg:w-1/2">
                                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-8 tracking-tight">{eventBasedCompliance.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg italic border-l-4 border-[#f1a134] pl-6 mb-12">"{eventBasedCompliance.subtitle}"</p>
                                    <div className="grid gap-4">
                                        {eventBasedCompliance.list.map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-orange-200 transition-all">
                                                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-[#f1a134]"><CheckCircle2 size={16} /></div>
                                                <span className="font-black text-[#072b47] text-sm">{typeof item === 'string' ? item : item.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="bg-[#072b47] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
                                        <h3 className="text-2xl font-black mb-6 relative z-10">Penalty Warning</h3>
                                        <p className="text-blue-100/70 font-bold text-sm leading-relaxed mb-8 relative z-10">Any non-compliance for event-based activities results in substantial penalties and legal scrutiny. Ensure every change is reported within 30 days.</p>
                                        <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/10 relative z-10">
                                            <div className="text-[#f1a134] font-black text-xl">30 Days</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Mandatory ROC notification window</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 9. NON-REGISTRAR FILINGS */}
                {nonRegistrarFilings && (
                    <section id="nonRegistrarFilings" ref={nonRegistrarFilingsRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(nonRegistrarFilings) ? nonRegistrarFilings : (
                            <>
                                <div className="text-center max-w-3xl mx-auto mb-10">
                                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">{nonRegistrarFilings.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg italic">"{nonRegistrarFilings.subtitle}"</p>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                    {nonRegistrarFilings.list.map((item, i) => (
                                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl text-center shadow-lg hover:-translate-y-2 transition-all group">
                                            <div className="text-[#f1a134] mb-4 group-hover:scale-110 transition-transform"><FileText size={32} className="mx-auto" /></div>
                                            <h4 className="font-black text-[#072b47] text-sm group-hover:text-[#1e40af] transition-colors">{typeof item === 'string' ? item : item.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3fc?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 10. VYOMBIZ SUPPORT / RESIGNATION / CUSTOM SECTION */}
                {(features || whyChooseUs) && (
                    <section id="features" ref={features ? featuresRef : whyChooseUsRef} className="py-14 scroll-mt-24">
                        {React.isValidElement(features || whyChooseUs) ? (
                            <div className="max-w-[1440px] mx-auto">
                                {features || whyChooseUs}
                            </div>
                        ) : (
                            <div className="bg-slate-50 rounded-[4rem] p-10 lg:p-20 border border-slate-100 relative overflow-hidden">
                                <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">{(features || whyChooseUs).title}</h2>
                                    <p className="text-slate-500 font-bold text-lg italic leading-relaxed">"{(features || whyChooseUs).subtitle}"</p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-10 relative z-10">
                                    {(features || whyChooseUs).list.map((item, i) => (
                                        <div key={i} className="group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-1.5 h-10 bg-[#f1a134] rounded-full group-hover:bg-[#1e40af] transition-all" />
                                                <h4 className="font-black text-[#072b47] text-lg group-hover:text-[#1e40af] transition-colors">{item.title}</h4>
                                            </div>
                                            <p className="text-[14px] text-slate-500 font-bold leading-relaxed pl-6 border-l border-slate-200">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}

                {/* 11. POST COMPLIANCE SECTION */}
                {postCompliance && (
                    <section id="postCompliance" ref={postComplianceRef} className="py-14 border-b border-slate-50 scroll-mt-24">
                        {React.isValidElement(postCompliance) ? (
                            <div className="max-w-[1440px] mx-auto">
                                {postCompliance}
                            </div>
                        ) : (
                            <div className="bg-slate-50 rounded-[4rem] p-10 lg:p-20 border border-slate-100 relative overflow-hidden">
                                <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
                                    <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6">{postCompliance.title}</h2>
                                    <p className="text-slate-500 font-bold text-lg italic leading-relaxed">"{postCompliance.subtitle}"</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                    {postCompliance.list?.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                            <CheckCircle2 className="text-[#f1a134] shrink-0 mt-1" size={18} />
                                            <div>
                                                <p className="font-black text-[#072b47] mb-1">{typeof item === 'string' ? item : item.title}</p>
                                                {item.desc && <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {showSectionImages && (
                            <div className="mt-12 max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" alt="Section Context" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
                            </div>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
};

export default DetailsLayout;
